"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Download, CheckCircle2, Cpu, Loader2, Lock } from "lucide-react";
import {
  RegisterFormData, emptyForm, stepValid, STEP_LABELS,
} from "./formTypes";
import StepIndicator from "./StepIndicator";
import Step1Team from "./steps/Step1Team";
import Step2Project from "./steps/Step2Project";
import Step3Problem from "./steps/Step3Problem";
import Step4Solution from "./steps/Step4Solution";
import Step5Technical from "./steps/Step5Technical";
import Step6Documents from "./steps/Step6Documents";
import Step7Review from "./steps/Step7Review";

const DRAFT_KEY = "fm26-register-draft";

function downloadAcknowledgement(d: RegisterFormData, appId: string) {
  const text = [
    "FUTURE MATRIX 2026 — Registration Acknowledgement",
    `Application ID: ${appId}`,
    "",
    `Team: ${d.teamName}`,
    `Leader: ${d.leaderName} <${d.leaderEmail}>`,
    `Members: ${d.members.length + 1}`,
    "",
    `Project: ${d.projectTitle}`,
    `Track: ${d.track}`,
    `Domain: ${d.domain}`,
    "",
    "Your registration has been recorded. Keep this Application ID for reference.",
  ].join("\n");
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${appId}-acknowledgement.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

function loadDraft(): RegisterFormData {
  if (typeof window === "undefined") return emptyForm();
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    return raw ? { ...emptyForm(), ...JSON.parse(raw) } : emptyForm();
  } catch {
    return emptyForm();
  }
}

export default function RegisterWizard() {
  const [data, setData] = useState<RegisterFormData>(loadDraft);
  const [step, setStep] = useState(1);
  const [regClosed, setRegClosed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/registration-status");
        const json = await res.json();
        if (!cancelled && json.success) {
          setRegClosed(Boolean(json.tracks?.Hardware?.full && json.tracks?.Software?.full));
        }
      } catch {
        // If the check fails, let them proceed — the server still enforces the real cap on submit.
      }
    })();
    return () => { cancelled = true; };
  }, []);
  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState("");
  const [draftSaved, setDraftSaved] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function set(patch: Partial<RegisterFormData>) {
    setData((d) => ({ ...d, ...patch }));
  }

  function saveDraft() {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
    setDraftSaved(true);
    setTimeout(() => setDraftSaved(false), 2000);
  }

  async function submit() {
    if (!stepValid(7, data) || submitting) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok || !json.success) {
        setSubmitError(json.error || "Registration failed. Please try again.");
        return;
      }

      setAppId(json.applicationId);
      localStorage.removeItem(DRAFT_KEY);
      setSubmitted(true);
    } catch {
      setSubmitError("Network error — please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const canProceed = stepValid(step, data);

  if (regClosed) {
    return (
      <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 py-24 text-center">
        <Lock className="text-red-400" size={48} strokeWidth={1.5} />
        <h1 className="mt-6 font-display text-2xl font-semibold">Registration Closed</h1>
        <p className="mt-2 text-sm text-white/60">
          Future Matrix 2026 registration is first-come, first-served, and both the Hardware and
          Software track limits (15 teams each) have been reached. Thank you for your interest.
        </p>
        <Link href="/" className="mt-8 text-sm text-white/40 hover:text-cyan">← Back to home</Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 py-24 text-center">
        <CheckCircle2 className="text-green" size={56} strokeWidth={1.5} />
        <h1 className="mt-6 font-display text-2xl font-semibold">Registration Successful</h1>
        <p className="mt-2 text-sm text-white/60">
          Thank you for registering for Future Matrix 2026. Your project submission has been received
          for preliminary evaluation and shortlisting.
        </p>
        <div className="glow-border mt-6 rounded-xl border border-cyan/30 bg-panel/50 px-6 py-4">
          <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">Application ID</p>
          <p className="mt-1 font-display text-2xl font-semibold text-cyan glow-text">{appId}</p>
        </div>
        <button
          onClick={() => downloadAcknowledgement(data, appId)}
          className="glow-border mt-8 inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-bg hover:scale-[1.02] transition-transform"
        >
          <Download size={16} /> Download Acknowledgement
        </button>
        <Link href="/" className="mt-6 text-sm text-white/40 hover:text-cyan">← Back to home</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <Link href="/" className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight text-white/70 hover:text-cyan">
        <Cpu size={18} className="text-cyan" strokeWidth={1.75} /> FUTURE MATRIX
      </Link>

      <h1 className="mt-6 font-display text-2xl font-semibold sm:text-3xl">Team Registration</h1>
      <p className="mt-1 text-sm text-white/50">7 steps. Save a draft anytime, come back later.</p>

      <div className="mt-8">
        <StepIndicator step={step} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.25 }}
          className="mt-8"
        >
          {step === 1 && <Step1Team data={data} set={set} />}
          {step === 2 && <Step2Project data={data} set={set} />}
          {step === 3 && <Step3Problem data={data} set={set} />}
          {step === 4 && <Step4Solution data={data} set={set} />}
          {step === 5 && <Step5Technical data={data} set={set} />}
          {step === 6 && <Step6Documents data={data} set={set} />}
          {step === 7 && (
            <Step7Review data={data} set={set} goToStep={setStep} onSaveDraft={saveDraft} draftSaved={draftSaved} />
          )}
        </motion.div>
      </AnimatePresence>

      {submitError && step === 7 && (
        <div className="mt-6 rounded-lg border border-red-400/30 bg-red-400/5 px-4 py-3 text-sm text-red-300">
          {submitError}
        </div>
      )}

      <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
        <button
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/70 disabled:opacity-0"
        >
          <ArrowLeft size={16} /> Back
        </button>

        {step < 7 ? (
          <button
            onClick={() => canProceed && setStep((s) => Math.min(7, s + 1))}
            disabled={!canProceed}
            className="glow-border inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-2.5 text-sm font-semibold text-bg disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next: {STEP_LABELS[step]} <ArrowRight size={16} />
          </button>
        ) : (
          <button
            onClick={submit}
            disabled={!canProceed || submitting}
            className="glow-border inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-2.5 text-sm font-semibold text-bg disabled:cursor-not-allowed disabled:opacity-40"
          >
            {submitting ? (<><Loader2 size={16} className="animate-spin" /> Submitting…</>) : (<>Submit Registration <ArrowRight size={16} /></>)}
          </button>
        )}
      </div>
    </div>
  );
}
