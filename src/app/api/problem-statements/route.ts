import { NextResponse } from "next/server";
import { MAX_TEAMS_PER_PROBLEM, PROBLEM_STATEMENTS } from "@/lib/problemStatements";
import { countForProblemStatement, ensureHeaderRow, listRegistrationMeta } from "@/lib/google/sheets";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await ensureHeaderRow();
    const meta = await listRegistrationMeta();

    const problemStatements = PROBLEM_STATEMENTS.map((p) => {
      const filled = countForProblemStatement(meta, p.id);
      return {
        id: p.id,
        chapter: p.chapter,
        sdg: p.sdg,
        title: p.title,
        filled,
        capacity: MAX_TEAMS_PER_PROBLEM,
        full: filled >= MAX_TEAMS_PER_PROBLEM,
      };
    });

    return NextResponse.json({ success: true, problemStatements });
  } catch (err) {
    console.error("GET /api/problem-statements failed:", err);
    return NextResponse.json(
      { success: false, error: "Could not load problem statement availability right now." },
      { status: 500 }
    );
  }
}
