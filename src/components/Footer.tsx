"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, GitHub, Linkedin, Twitter, Instagram, ArrowUpRight, Heart } from "lucide-react";

const SOCIAL_LINKS = [
  { icon: GitHub, href: "#", label: "GitHub", color: "hover:text-white" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-[#0A66C2]" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-[#1DA1F2]" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-[#E4405F]" },
];

const FOOTER_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Rules", href: "#rules" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient border */}
      <div className="section-divider mb-0" />

      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg to-bg-secondary pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-cyan/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-purple/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <motion.div 
          className="grid md:grid-cols-4 gap-10 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <Link href="#top" className="flex items-center gap-3 group mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Image
                  src="/logos/future-matrix-logo.png"
                  alt="Future Matrix"
                  width={48}
                  height={48}
                  className="drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]"
                />
              </motion.div>
              <div>
                <span className="font-display font-bold text-xl block group-hover:text-cyan transition-colors">
                  FUTURE<span className="text-cyan">MATRIX</span>
                </span>
                <span className="text-white/40 text-xs font-mono tracking-wider">2026</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              24-Hour Hardware & Software Hackathon organized by IEEE Student Branch, VIT.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`p-2.5 rounded-xl border border-white/10 text-white/60 ${social.color} hover:border-current hover:bg-white/5 transition-all duration-300 group`}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-semibold mb-5 text-sm uppercase tracking-wider text-white/80">Navigation</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-white/50 hover:text-cyan transition-colors duration-300 text-sm"
                  >
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-semibold mb-5 text-sm uppercase tracking-wider text-white/80">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:contact@futurematrix.in" 
                  className="group flex items-start gap-3 text-white/50 hover:text-cyan transition-colors duration-300"
                >
                  <div className="p-2 rounded-lg bg-cyan/10 text-cyan group-hover:bg-cyan/20 transition-colors">
                    <Mail size={16} />
                  </div>
                  <span className="text-sm pt-1">contact@futurematrix.in</span>
                </a>
              </li>
              <li>
                <div className="group flex items-start gap-3 text-white/50">
                  <div className="p-2 rounded-lg bg-purple/10 text-purple">
                    <MapPin size={16} />
                  </div>
                  <span className="text-sm pt-1">VIT, Vellore</span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter / CTA */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-semibold mb-5 text-sm uppercase tracking-wider text-white/80">Stay Updated</h4>
            <p className="text-white/50 text-sm mb-4">
              Get the latest updates about Future Matrix 2026.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 btn-primary rounded-full px-6 py-3 text-sm font-semibold group"
            >
              Register Now
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="border-t border-white/10 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Bottom footer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-white/40 text-sm"
        >
          <p className="flex items-center gap-1">
            © {currentYear} Future Matrix. Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={14} className="text-red-500 fill-red-500 mx-1" />
            </motion.span>
            by IEEE Student Branch, VIT.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-cyan transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-cyan transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Back to top button */}
      <motion.a
        href="#top"
        className="fixed bottom-8 right-8 p-3 rounded-full bg-cyan/20 border border-cyan/30 text-cyan hover:bg-cyan/30 transition-all duration-300 z-40 backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUpRight size={20} className="rotate-[-45deg]" />
      </motion.a>
    </footer>
  );
}