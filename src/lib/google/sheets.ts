import { getAccessToken } from "./auth";

const SHEETS_API = "https://sheets.googleapis.com/v4/spreadsheets";

function spreadsheetId(): string {
  const id = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  if (!id) throw new Error("Missing GOOGLE_SHEETS_SPREADSHEET_ID env var (see SETUP.md).");
  return id;
}

function sheetName(): string {
  return process.env.GOOGLE_SHEETS_TAB_NAME || "Sheet1";
}

export const HEADERS = [
  "Application ID", "Timestamp", "Team Name", "Track", "IEEE Chapter",
  "Problem Statement", "Problem Statement ID", "Project Title",
  "Leader Name", "Leader Email", "Leader Phone",
  "Member 2 Name", "Member 2 Email", "Member 2 Phone",
  "Member 3 Name", "Member 3 Email", "Member 3 Phone",
  "Department", "Year",
  "Abstract", "Proposed Solution", "Technology Stack", "Expected Deliverables",
  "Hardware Components", "Abstract File Link", "PPT File Link", "Registration Status",
] as const;

type SheetsResponse = {
  values?: string[][];
  updates?: { updatedRange?: string };
  sheets?: { properties?: { title?: string; sheetId?: number } }[];
};

async function sheetsFetch(path: string, init: RequestInit = {}): Promise<SheetsResponse> {
  const token = await getAccessToken();
  const res = await fetch(`${SHEETS_API}/${spreadsheetId()}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Google Sheets API error (${res.status}): ${text}`);
  }
  if (res.status === 204) return {};
  return res.json();
}

let cachedGid: number | null = null;
async function getSheetGid(): Promise<number> {
  if (cachedGid !== null) return cachedGid;
  const json = await sheetsFetch(`?fields=sheets.properties`);
  const sheet = (json.sheets || []).find((s) => s.properties?.title === sheetName());
  if (!sheet || sheet.properties?.sheetId === undefined) {
    throw new Error(
      `Sheet tab "${sheetName()}" was not found in the spreadsheet. Rename a tab to "${sheetName()}" or set GOOGLE_SHEETS_TAB_NAME.`
    );
  }
  cachedGid = sheet.properties.sheetId;
  return cachedGid;
}

let headerEnsured = false;
export async function ensureHeaderRow(): Promise<void> {
  if (headerEnsured) return;
  const range = `${sheetName()}!A1:AA1`;
  const json = await sheetsFetch(`/values/${encodeURIComponent(range)}`);
  const existing: string[] = json.values?.[0] || [];
  const matches = existing.length === HEADERS.length && existing.every((v, i) => v === HEADERS[i]);
  if (!matches) {
    await sheetsFetch(`/values/${encodeURIComponent(range)}?valueInputOption=RAW`, {
      method: "PUT",
      body: JSON.stringify({ values: [HEADERS] }),
    });
  }
  headerEnsured = true;
}

export type RegistrationRowMeta = {
  rowNumber: number;
  applicationId: string;
  track: string;
  problemStatementId: string;
};

export async function listRegistrationMeta(): Promise<RegistrationRowMeta[]> {
  const range = `${sheetName()}!A2:G`;
  const json = await sheetsFetch(`/values/${encodeURIComponent(range)}`);
  const rows: string[][] = json.values || [];
  return rows
    .map((row, i) => ({
      rowNumber: i + 2,
      applicationId: row[0] || "",
      track: row[3] || "",
      problemStatementId: row[6] || "",
    }))
    .filter((r) => r.applicationId);
}

export function countByTrack(rows: RegistrationRowMeta[], track: string): number {
  return rows.filter((r) => r.track === track).length;
}

export function countForProblemStatement(rows: RegistrationRowMeta[], problemStatementId: string): number {
  return rows.filter((r) => r.problemStatementId === problemStatementId).length;
}

export function nextApplicationId(rows: RegistrationRowMeta[]): string {
  let max = 0;
  for (const r of rows) {
    const match = /^FM2026-(\d+)$/.exec(r.applicationId);
    if (match) max = Math.max(max, parseInt(match[1], 10));
  }
  return `FM2026-${String(max + 1).padStart(4, "0")}`;
}

export async function appendRegistrationRow(values: string[]): Promise<number> {
  const range = `${sheetName()}!A:AA`;
  const json = await sheetsFetch(
    `/values/${encodeURIComponent(range)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    { method: "POST", body: JSON.stringify({ values: [values] }) }
  );
  const updatedRange: string = json.updates?.updatedRange || "";
  const match = /![A-Z]+(\d+):/.exec(updatedRange);
  if (!match) throw new Error("Could not determine the row number of the appended registration.");
  return parseInt(match[1], 10);
}

export async function updateCell(a1Cell: string, value: string): Promise<void> {
  const range = `${sheetName()}!${a1Cell}`;
  await sheetsFetch(`/values/${encodeURIComponent(range)}?valueInputOption=USER_ENTERED`, {
    method: "PUT",
    body: JSON.stringify({ values: [[value]] }),
  });
}

export async function deleteRow(rowNumber: number): Promise<void> {
  const sheetId = await getSheetGid();
  await sheetsFetch(`:batchUpdate`, {
    method: "POST",
    body: JSON.stringify({
      requests: [
        {
          deleteDimension: {
            range: { sheetId, dimension: "ROWS", startIndex: rowNumber - 1, endIndex: rowNumber },
          },
        },
      ],
    }),
  });
}
