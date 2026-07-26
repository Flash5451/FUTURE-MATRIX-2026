// Public-facing cap: what the website advertises ("first 100 teams") and
// what the register page/homepage banner show and gate on.
export const DISPLAYED_TEAM_CAP = 100;

// Real ceiling enforced by the register API. Kept slightly above the
// displayed cap as a buffer (e.g. for near-simultaneous submissions right at
// the boundary, or manual/organizer-added entries) without ever advertising
// more than DISPLAYED_TEAM_CAP publicly.
export const ACTUAL_TEAM_CAP = 120;
