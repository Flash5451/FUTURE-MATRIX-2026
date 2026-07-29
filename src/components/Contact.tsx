"use client";

import { Mail, MapPin, GraduationCap, UserRound } from "lucide-react";
import SectionHeading from "./SectionHeading";

const CONTACT = {
  email: "futurematrix75@gmail.com",
  venue: "Gallery Hall (Room No. 1601), Dept. of Electrical & Communication Engineering, Vel Tech University, Avadi, Chennai",
};

const CHAPTERS = [
  {
    name: "IEEE SSIT Student Branch",
    faculty: { name: "Dr. B. Sathyasri", title: "Professor, ECE" },
    leaders: [
      { role: "Chairman", name: "S. Md. Afzal" },
      { role: "Vice-Chairman", name: "B. Sai Manish" },
    ],
  },
  {
    name: "IEEE ComSoc Student Branch",
    faculty: { name: "Dr. C. Kanmani Pappa", title: "Professor, ECE" },
    leaders: [
      { role: "Chairman", name: "Ch. Bhavana Netha" },
      { role: "Vice-Chairman", name: "K. Hemanth Venkat" },
    ],
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Contact" title="Questions before you register?" />

      <div className="perspective-wrap mt-10 grid gap-4 sm:grid-cols-2">
        <a href={`mailto:${CONTACT.email}`} className="tilt-card glass-panel flex items-center gap-3 rounded-xl p-5 hover:border-cyan/40">
          <Mail className="text-cyan shrink-0" size={20} />
          <span className="text-sm text-white/75">{CONTACT.email}</span>
        </a>
        <div className="tilt-card glass-panel flex items-center gap-3 rounded-xl p-5">
          <MapPin className="text-cyan shrink-0" size={20} />
          <span className="text-sm text-white/75">{CONTACT.venue}</span>
        </div>
      </div>

      <div className="perspective-wrap mt-6 grid gap-4 sm:grid-cols-2">
        {CHAPTERS.map((chapter) => (
          <div key={chapter.name} className="tilt-card glass-panel rounded-xl p-5">
            <p className="font-display text-sm font-semibold text-cyan">{chapter.name}</p>

            <div className="mt-4 flex items-start gap-3">
              <GraduationCap className="mt-0.5 shrink-0 text-white/40" size={16} />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/35">Faculty Coordinator</p>
                <p className="text-sm text-white/80">{chapter.faculty.name}</p>
                <p className="text-xs text-white/45">{chapter.faculty.title}</p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              {chapter.leaders.map((leader) => (
                <div key={leader.role} className="flex items-start gap-3">
                  <UserRound className="mt-0.5 shrink-0 text-white/40" size={16} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/35">{leader.role}</p>
                    <p className="text-sm text-white/80">{leader.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
