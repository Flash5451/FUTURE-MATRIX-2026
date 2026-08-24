// Registration open/close switch.
//
// Controlled by the REGISTRATION_OPEN env var in Vercel:
//   - unset, or set to "true"  -> registration is OPEN
//   - set to "false"           -> registration is CLOSED
//
// After changing this env var in the Vercel dashboard, you must redeploy
// (Vercel → Deployments → ... → Redeploy) for the new value to take effect.
export function isRegistrationOpen(): boolean {
  return process.env.REGISTRATION_OPEN !== "false";
}
