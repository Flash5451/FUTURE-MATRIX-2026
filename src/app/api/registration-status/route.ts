import { NextResponse } from "next/server";
import { DISPLAYED_TEAM_CAP } from "@/lib/registration/capacity";
import { ensureHeaderRow, listRegistrationMeta } from "@/lib/google/sheets";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await ensureHeaderRow();
    const meta = await listRegistrationMeta();

    // Never reveal a count above the publicly-advertised cap, even if the
    // real total (bounded by ACTUAL_TEAM_CAP) is higher.
    const teamsRegistered = Math.min(meta.length, DISPLAYED_TEAM_CAP);

    return NextResponse.json({
      success: true,
      teamsRegistered,
      teamCap: DISPLAYED_TEAM_CAP,
      full: teamsRegistered >= DISPLAYED_TEAM_CAP,
    });
  } catch (err) {
    console.error("GET /api/registration-status failed:", err);
    return NextResponse.json(
      { success: false, error: "Could not load registration status right now." },
      { status: 500 }
    );
  }
}
