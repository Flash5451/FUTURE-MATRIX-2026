import type { Metadata } from "next";
import RegisterWizard from "@/components/register/RegisterWizard";

export const metadata: Metadata = {
  title: "Register | Future Matrix 2026",
};

export default function RegisterPage() {
  return <RegisterWizard />;
}
