# Future Matrix 2026 — Setup

## What's new in this build
- `/api/register` (POST) — validates a submission server-side, checks the
  selected problem statement isn't already at 3/3 teams, appends one row to
  Google Sheets, generates the `FM2026-0001`-style Application ID, and
  guards against two teams racing for the last slot on the same problem
  statement (re-verifies after writing and rolls back if the race was lost).
- `/api/problem-statements` (GET) — live `filled/capacity` per problem
  statement, used by Step 3 of the registration form to show `x/3` badges
  and disable/lock ones that are FULL.
- Registration is no longer a frontend-only mock — Submit does a real
  `fetch()` to `/api/register`.
- No new npm dependencies were added. The Google OAuth2 service-account flow
  is implemented directly against the REST API using Node's built-in
  `crypto` module (`src/lib/google/auth.ts`).

## Documents: pasted links, not server-side uploads
Google service accounts have **zero storage quota** on regular personal
(non-Workspace) Google Drive — they can't create files even in a folder
explicitly shared with them as Editor. Google's own fix for this is Shared
Drives or domain-wide delegation, both of which require a paid Google
Workspace account, not a personal Gmail.

Because of that, Step 6 of the registration form asks each team to upload
their own Abstract PDF and Presentation to Google Drive, set sharing to
"Anyone with the link can view," and paste the resulting link into the form.
Those links are validated (must be a real URL) and stored directly in the
**Abstract File Link** / **PPT File Link** columns — same columns, same
position, just populated from a pasted link instead of a server upload.

If you later get access to a Google Workspace account (e.g. through your
college), true automatic server-side upload can be re-added using a Shared
Drive folder — that would restore a small `src/lib/google/drive.ts` helper
using the same service account, with `supportsAllDrives=true` added to the
Drive API calls.

## 1. Google Cloud setup
1. Create/select a project in Google Cloud Console.
2. Enable the **Google Sheets API** for it.
3. IAM & Admin → Service Accounts → Create service account.
4. Open the service account → Keys → Add key → JSON. Download it.
5. From that JSON, copy `client_email` → `GOOGLE_SERVICE_ACCOUNT_EMAIL`,
   and `private_key` → `GOOGLE_PRIVATE_KEY`.

## 2. Share your spreadsheet with the service account
Open the spreadsheet (ID `1leEc_D4N2WlqB-ohLy6HQ1255MCwUwUAr1-GGNbBKCs`) →
Share → add the service account email as **Editor**.

## 3. Configure env vars
```bash
cp .env.local.example .env.local
# fill in GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY
```
The spreadsheet ID is already filled in. `GOOGLE_SHEETS_TAB_NAME` defaults
to `Sheet1` — rename your tab to match, or change the env var.

The app creates the 28-column header row automatically on first request if
the tab is empty or has a different header.

**Windows/Notepad gotcha:** paste the private_key value as ONE continuous
line (Notepad's Word Wrap can make a long line look multi-line, but don't
let real line breaks get inserted — turn Word Wrap off before selecting it
in the source JSON to be safe). It must start immediately with
`GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...` and end with
`...-----END PRIVATE KEY-----\n"` with nothing after that closing quote.

## 4. Run it
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Notes / known trade-offs
- Google Sheets has no real transactions. The register route mitigates the
  "two teams grab the last slot" race with a pre-check and a post-write
  verify-and-rollback (deletes its own row if it turns out to have overshot
  the 3-team cap or collided on an Application ID). Solid for
  hackathon-scale traffic; a real database would be more bulletproof at
  very high concurrency.
- `next/font/google` (already in the original project) fetches fonts from
  Google at build time, so `npm run build` needs normal internet access —
  standard on Vercel/most CI, just flagging it in case you build somewhere
  network-restricted.
- Abstract/PPT links are only validated as well-formed URLs, not verified
  to be actually reachable or correctly shared — a reviewer will discover a
  bad link when they open it, same as any Google Form that collects links.
