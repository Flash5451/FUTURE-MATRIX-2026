export type ValidatedMember = {
  name: string;
  email: string;
  mobile: string;
  department: string;
  year: string;
};

export type ValidatedComponent = { name: string; spec: string; qty: string };

export type ValidatedRegistration = {
  teamName: string;
  leaderName: string;
  leaderEmail: string;
  leaderMobile: string;
  leaderDept: string;
  leaderYear: string;
  members: ValidatedMember[];
  projectTitle: string;
  track: "Hardware" | "Software";
  domain: string;
  deliverables: string;
  problem: string;
  tech: string;
  components: ValidatedComponent[];
  problemStatementId: string;
  abstractFileUrl: string;
  pptFileUrl: string;
  declaration: true;
};

type ValidationResult =
  | { ok: true; data: ValidatedRegistration }
  | { ok: false; error: string };

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function isValidUrl(v: string): boolean {
  try {
    const u = new URL(v);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

const REQUIRED_STRING_FIELDS: [string, string][] = [
  ["teamName", "Team name"],
  ["leaderName", "Leader name"],
  ["leaderMobile", "Leader phone number"],
  ["leaderDept", "Leader department"],
  ["leaderYear", "Leader year of study"],
  ["projectTitle", "Project title"],
  ["domain", "Domain"],
  ["deliverables", "Expected deliverables"],
  ["problem", "Problem explanation"],
  ["tech", "Technology stack"],
  ["problemStatementId", "Problem statement selection"],
];

export function validateRegistrationPayload(input: unknown): ValidationResult {
  if (typeof input !== "object" || input === null) {
    return { ok: false, error: "Invalid registration payload." };
  }
  const d = input as Record<string, unknown>;

  for (const [key, label] of REQUIRED_STRING_FIELDS) {
    if (!isNonEmptyString(d[key])) return { ok: false, error: `${label} is required.` };
  }

  if (!isValidEmail((d.leaderEmail as string) || "")) {
    if (!isNonEmptyString(d.leaderEmail)) return { ok: false, error: "Leader email is required." };
    return { ok: false, error: "A valid leader email is required." };
  }

  if (d.track !== "Hardware" && d.track !== "Software") {
    return { ok: false, error: "Track must be Hardware or Software." };
  }

  if (!Array.isArray(d.members) || d.members.length !== 2) {
    return { ok: false, error: "Exactly 3 team members are required (1 leader + 2 members)." };
  }

  const members: ValidatedMember[] = [];
  for (const raw of d.members) {
    const m = raw as Record<string, unknown>;
    if (!isNonEmptyString(m.name) || !isNonEmptyString(m.mobile) || !isNonEmptyString(m.department) || !isNonEmptyString(m.year)) {
      return { ok: false, error: "All team member details are required." };
    }
    if (!isNonEmptyString(m.email) || !isValidEmail(m.email)) {
      return { ok: false, error: "A valid email is required for every team member." };
    }
    members.push({
      name: m.name.trim(),
      email: (m.email as string).trim(),
      mobile: (m.mobile as string).trim(),
      department: (m.department as string).trim(),
      year: (m.year as string).trim(),
    });
  }

  const rawComponents = Array.isArray(d.components) ? d.components : [];
  const components: ValidatedComponent[] = rawComponents.map((c) => {
    const cc = c as Record<string, unknown>;
    return {
      name: typeof cc.name === "string" ? cc.name.trim() : "",
      spec: typeof cc.spec === "string" ? cc.spec.trim() : "",
      qty: typeof cc.qty === "string" ? cc.qty.trim() : "",
    };
  });
  const filledComponents = components.filter((c) => c.name);

  if (d.track === "Hardware" && filledComponents.length === 0) {
    return { ok: false, error: "At least one hardware component is required for the Hardware track." };
  }

  if (d.declaration !== true) {
    return { ok: false, error: "You must confirm the declaration before submitting." };
  }

  if (!isNonEmptyString(d.abstractFileUrl) || !isValidUrl(d.abstractFileUrl)) {
    return { ok: false, error: "A valid link to your Abstract PDF is required." };
  }
  if (!isNonEmptyString(d.pptFileUrl) || !isValidUrl(d.pptFileUrl)) {
    return { ok: false, error: "A valid link to your PPT is required." };
  }

  return {
    ok: true,
    data: {
      teamName: (d.teamName as string).trim(),
      leaderName: (d.leaderName as string).trim(),
      leaderEmail: (d.leaderEmail as string).trim(),
      leaderMobile: (d.leaderMobile as string).trim(),
      leaderDept: (d.leaderDept as string).trim(),
      leaderYear: (d.leaderYear as string).trim(),
      members,
      projectTitle: (d.projectTitle as string).trim(),
      track: d.track,
      domain: (d.domain as string).trim(),
      deliverables: (d.deliverables as string).trim(),
      problem: (d.problem as string).trim(),
      tech: (d.tech as string).trim(),
      components: d.track === "Hardware" ? filledComponents : [],
      problemStatementId: (d.problemStatementId as string).trim(),
      abstractFileUrl: (d.abstractFileUrl as string).trim(),
      pptFileUrl: (d.pptFileUrl as string).trim(),
      declaration: true,
    },
  };
}
