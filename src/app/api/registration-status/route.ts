import { NextResponse } from "next/server";
import { TRACKS } from "@/lib/registration/capacity";
import { countByTrack, ensureHeaderRow, listRegistrationMeta } from "@/lib/google/sheets";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await ensureHeaderRow();
    const meta = await listRegistrationMeta();

    const tracks = Object.fromEntries(
      TRACKS.map((track) => [track, { registered: countByTrack(meta, track) }])
    );

    return NextResponse.json({ success: true, tracks });
  } catch (err) {
    console.error("GET /api/registration-status failed:", err);
    return NextResponse.json(
      { success: false, error: "Could not load registration status right now." },
      { status: 500 }
    );
  }
}
