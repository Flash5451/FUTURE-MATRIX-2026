"use client";

import { Mail, Phone, MapPin, Camera, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";

// TODO: replace placeholders with the real event contact details.
const CONTACT = {
  email: "futurematrix2026@ieee.org",
  phone: "+91 90000 00000",
  whatsapp: "https://wa.me/919000000000",
  instagram: "https://instagram.com/futurematrix2026",
  venue: "Venue to be announced — check back closer to the date",
};

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Contact" title="Questions before you register?" />

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 rounded-xl border border-white/10 bg-panel/50 p-5 hover:border-cyan/40">
          <Mail className="text-cyan" size={20} />
          <span className="text-sm text-white/75">{CONTACT.email}</span>
        </a>
        <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 rounded-xl border border-white/10 bg-panel/50 p-5 hover:border-cyan/40">
          <Phone className="text-cyan" size={20} />
          <span className="text-sm text-white/75">{CONTACT.phone}</span>
        </a>
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-panel/50 p-5 hover:border-cyan/40">
          <MessageCircle className="text-cyan" size={20} />
          <span className="text-sm text-white/75">WhatsApp</span>
        </a>
        <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-panel/50 p-5 hover:border-cyan/40">
          <Camera className="text-cyan" size={20} />
          <span className="text-sm text-white/75">@futurematrix2026</span>
        </a>
      </div>

      <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-panel/50 p-5">
        <MapPin className="text-cyan shrink-0" size={20} />
        <span className="text-sm text-white/75">{CONTACT.venue}</span>
      </div>
    </section>
  );
}
