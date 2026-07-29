import { NextRequest, NextResponse } from "next/server";
import { findProblemStatement, MAX_TEAMS_PER_PROBLEM } from "@/lib/problemStatements";
import { validateRegistrationPayload, type ValidatedRegistration } from "@/lib/registration/validate";
import {
  appendRegistrationRow,
  countForProblemStatement,
  deleteRow,
  ensureHeaderRow,
  listRegistrationMeta,
  nextApplicationId,
  updateCell,
} from "@/lib/google/sheets";

export const runtime = "nodejs";

function fail(error: string, status: number) {
  return NextResponse.json({ success: false, error }, { status });
}

function formatHardwareComponents(data: ValidatedRegistration): string {
  if (data.track !== "Hardware") return "";
  return data.components
    .map((c) => `${c.name}${c.spec ? ` (${c.spec})` : ""}${c.qty ? ` x${c.qty}` : ""}`)
    .join("; ");
}

export async function POST(req: NextRequest) {
  try {
    let parsedJson: unknown;
    try {
      parsedJson = await req.json();
    } catch {
      return fail("Malformed registration payload.", 400);
    }

    const validated = validateRegistrationPayload(parsedJson);
    if (!validated.ok) return fail(validated.error, 400);
    const data = validated.data;

    const problemStatement = findProblemStatement(data.problemStatementId);
    if (!problemStatement) return fail("Selected problem statement is invalid.", 400);

    await ensureHeaderRow();

    const meta = await listRegistrationMeta();

    // Fast-fail: per-problem-statement cap.
    if (countForProblemStatement(meta, data.problemStatementId) >= MAX_TEAMS_PER_PROBLEM) {
      return fail(
        `"${problemStatement.title}" is already FULL (${MAX_TEAMS_PER_PROBLEM}/${MAX_TEAMS_PER_PROBLEM} teams). Please choose another problem statement.`,
        409
      );
    }

    let applicationId = nextApplicationId(meta);
    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const row = [
      applicationId,
      timestamp,
      data.teamName,
      data.track,
      problemStatement.chapter,
      problemStatement.title,
      problemStatement.id,
      data.projectTitle,
      data.leaderName,
      data.leaderEmail,
      data.leaderMobile,
      data.members[0].name,
      data.members[0].email,
      data.members[0].mobile,
      data.members[1].name,
      data.members[1].email,
      data.members[1].mobile,
      data.leaderDept,
      data.leaderYear,
      data.abstract,
      data.solution,
      data.tech,
      data.deliverables,
      formatHardwareComponents(data),
      data.abstractFileUrl,
      data.pptFileUrl,
      "Submitted",
    ];

    const rowNumber = await appendRegistrationRow(row);

    // Post-write verification + compensating rollback: Google Sheets has no real
    // transactions, so two near-simultaneous submissions could both pass the checks
    // above. This re-reads the sheet after writing and undoes our own row if we
    // turned out to be the one that overshot a limit or collided on an ID.
    const metaAfter = await listRegistrationMeta();

    const idClashes = metaAfter.filter((r) => r.applicationId === applicationId).sort((a, b) => a.rowNumber - b.rowNumber);
    if (idClashes.length > 1 && idClashes[0].rowNumber !== rowNumber) {
      const freshId = nextApplicationId(metaAfter.filter((r) => r.rowNumber !== rowNumber));
      await updateCell(`A${rowNumber}`, freshId);
      applicationId = freshId;
    }

    const rowsForProblem = metaAfter
      .filter((r) => r.problemStatementId === data.problemStatementId)
      .sort((a, b) => a.rowNumber - b.rowNumber);
    const myRank = rowsForProblem.findIndex((r) => r.rowNumber === rowNumber);

    if (myRank === -1 || myRank >= MAX_TEAMS_PER_PROBLEM) {
      await deleteRow(rowNumber);
      return fail(
        `"${problemStatement.title}" just filled up. Please choose another problem statement and resubmit.`,
        409
      );
    }

    return NextResponse.json({ success: true, applicationId });
  } catch (err) {
    console.error("POST /api/register failed:", err);
    const message = err instanceof Error ? err.message : "Unexpected server error.";
    return fail(message, 500);
  }
}
