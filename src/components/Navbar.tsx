"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Why Hardware", href: "#why-hardware" },
  { label: "Timeline", href: "#timeline" },
  { label: "Prize Pool", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = NAV_LINKS.map(link => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "border-b border-white/10 bg-black/60 backdrop-blur-2xl shadow-lg shadow-black/20" 
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#top" className="flex items-center gap-3 group">
            <motion.div 
              className="relative h-10 w-10"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image
                src="/logos/future-matrix-logo.png"
                alt="Future Matrix"
                width={40}
                height={40}
                className="object-contain drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]"
              />
            </motion.div>
            <span className="font-display text-lg font-bold tracking-tight hidden sm:inline group-hover:text-cyan transition-colors duration-300">
              FUTURE<span className="text-cyan">MATRIX</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 font-mono text-sm tracking-wide transition-all duration-300 group ${
                    isActive ? "text-cyan" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  <motion.span 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan to-purple rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? "60%" : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <Link
            href="/register"
            className="hidden sm:flex items-center gap-2 btn-primary rounded-full px-6 py-2.5 text-sm font-semibold group overflow-hidden relative"
          >
            <Sparkles size={16} className="relative z-10" />
            <span className="relative z-10">Register</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple to-cyan"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-cyan transition-colors relative"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden lg:hidden"
            >
              <motion.div 
                className="border-t border-white/10 py-4 space-y-1 mt-4"
                initial="closed"
                animate="open"
                variants={{
                  open: { transition: { staggerChildren: 0.05 } },
                  closed: { transition: { staggerChildren: 0.05 } }
                }}
              >
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block font-mono text-sm tracking-wide text-white/70 hover:text-cyan hover:bg-white/5 transition-all duration-300 py-3 px-4 rounded-lg"
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -20 }
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.div
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                  }}
                  className="pt-4"
                >
                  <Link
                    href="/register"
                    className="flex items-center justify-center gap-2 btn-primary rounded-full px-6 py-3 text-sm font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    <Sparkles size={16} />
                    Register Now
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}