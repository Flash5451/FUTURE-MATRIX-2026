import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST() {
  return NextResponse.json(
    {
      success: false,
      error: "Registration is closed. New registrations are no longer being accepted.",
    },
    { status: 410 },
  );
}
