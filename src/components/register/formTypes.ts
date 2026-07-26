export function isLikelyUrl(v: string): boolean {
  if (!v || !v.trim()) return false;
  try {
    const u = new URL(v.trim());
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

export type Member = {
  name: string;
  email: string;
  mobile: string;
  department: string;
  year: string;
};

export type HardwareComponent = {
  name: string;
  spec: string;
  qty: string;
};

export type RegisterFormData = {
  teamName: string;
  leaderName: string;
  leaderEmail: string;
  leaderMobile: string;
  leaderDept: string;
  leaderYear: string;
  members: Member[];
  projectTitle: string;
  track: string;
  domain: string;
  abstract: string;
  deliverables: string;
  problemStatementId: string;
  problem: string;
  solution: string;
  tech: string;
  components: HardwareComponent[];
  abstractFileUrl: string;
  pptFileUrl: string;
  declaration: boolean;
};

export const DOMAINS = [
  "Healthcare", "Agriculture", "Smart Cities", "Environment", "Energy",
  "Robotics", "Disaster Management", "Assistive Technology", "Open Innovation",
];

export const YEARS = ["1st Year", "2nd Year", "3rd Year", "Final Year"];

export const STEP_LABELS = [
  "Team", "Project", "Problem", "Solution", "Technical", "Documents", "Review",
];

export function emptyMember(): Member {
  return { name: "", email: "", mobile: "", department: "", year: "" };
}

export function emptyComponent(): HardwareComponent {
  return { name: "", spec: "", qty: "" };
}

export function emptyForm(): RegisterFormData {
  return {
    teamName: "",
    leaderName: "",
    leaderEmail: "",
    leaderMobile: "",
    leaderDept: "",
    leaderYear: "",
    members: [emptyMember(), emptyMember()],
    projectTitle: "",
    track: "",
    domain: "",
    abstract: "",
    deliverables: "",
    problemStatementId: "",
    problem: "",
    solution: "",
    tech: "",
    components: [emptyComponent()],
    abstractFileUrl: "",
    pptFileUrl: "",
    declaration: false,
  };
}

export function wordCount(text: string): number {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

export function genAppId(): string {
  return `FM26-${Math.floor(1000 + Math.random() * 9000)}`;
}

export function stepValid(step: number, d: RegisterFormData): boolean {
  switch (step) {
    case 1:
      return !!(d.teamName.trim() && d.leaderName.trim() && d.leaderEmail.trim() &&
        d.leaderMobile.trim() && d.leaderDept.trim() && d.leaderYear &&
        d.members.length === 2 && d.members.every((m) =>
          m.name.trim() && m.email.trim() && m.mobile.trim() && m.department.trim() && m.year
        ));
    case 2:
      return !!(d.projectTitle.trim() && d.track && d.domain && d.abstract.trim() && d.deliverables.trim());
    case 3:
      return !!(d.problemStatementId && d.problem.trim());
    case 4:
      return !!d.solution.trim();
    case 5:
      return !!(d.tech.trim() && (d.track === "Software" || d.components.some((c) => c.name.trim())));
    case 6:
      return !!(isLikelyUrl(d.abstractFileUrl) && isLikelyUrl(d.pptFileUrl));
    case 7:
      return d.declaration;
    default:
      return true;
  }
}
