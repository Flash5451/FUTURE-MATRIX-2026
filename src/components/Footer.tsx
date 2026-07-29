"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const SOCIAL_LINKS = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const FOOTER_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Rules", href: "#rules" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-bg to-bg-secondary px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logos/future-matrix-logo.png"
                alt="Future Matrix"
                width={40}
                height={40}
                className="drop-shadow-[0_0_8px_rgba(0,217,255,0.3)]"
              />
              <span className="font-display font-bold">FUTURE<span className="text-cyan">MATRIX</span></span>
            </div>
            <p className="text-white-70 text-sm">
              24-Hour Hardware & Software Hackathon
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white-70 text-sm hover:text-cyan transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-cyan mt-1" />
                <span className="text-white-70 text-sm">contact@futurematrix.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-cyan mt-1" />
                <span className="text-white-70 text-sm">VIT, Vellore</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-lg border border-cyan/30 text-cyan hover:bg-cyan hover:text-bg transition-all duration-300 group"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-white-70 text-sm"
        >
          <p>
            © 2026 Future Matrix. All rights reserved. Organized by IEEE Student Branch, VIT.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-cyan transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-cyan transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
