import type { Metadata } from "next";
import RegisterWizard from "@/components/register/RegisterWizard";
import { isRegistrationOpen } from "@/lib/registration/status";

export const metadata: Metadata = {
  title: "Register | Future Matrix 2026",
};

export default function RegisterPage() {
  if (!isRegistrationOpen()) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="font-mono text-2xl text-cyan sm:text-3xl">
          Registration Closed
        </h1>
        <p className="mt-4 max-w-md text-white/60">
          Registrations for FUTURE MATRIX 2026 are now closed. Thank you to
          everyone who applied — shortlisted teams will be contacted soon.
        </p>
      </main>
    );
  }

  return <RegisterWizard />;
}
