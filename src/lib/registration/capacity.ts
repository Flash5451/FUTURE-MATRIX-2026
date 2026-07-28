export type Track = "Hardware" | "Software";

// Registration is first-come, first-served, capped separately per track.
export const TRACK_CAP = 15;
export const TRACKS: Track[] = ["Hardware", "Software"];
