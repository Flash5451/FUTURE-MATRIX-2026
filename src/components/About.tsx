"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 sm:py-32 lg:py-40"
    >
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-cyan/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-purple/5 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            About <span className="text-cyan glow-text">Future Matrix</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan to-purple rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-white-70 leading-relaxed">
              Future Matrix 2026 is an intra-college 24-hour hardware and software hackathon organized by the IEEE Student Branch in collaboration with IEEE SSIT and IEEE ComSoc.
            </p>
            <p className="text-lg text-white-70 leading-relaxed">
              This is your chance to build innovative solutions, prototype groundbreaking ideas, and compete with your peers. Whether you're interested in embedded systems, IoT, software development, or AI, Future Matrix has challenges for everyone.
            </p>
            <p className="text-lg text-white-70 leading-relaxed">
              Join hundreds of innovators and makers as we push the boundaries of what's possible in just 24 hours.
            </p>
          </motion.div>

          {/* Right stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              { number: "24", label: "Hours of Innovation" },
              { number: "500+", label: "Expected Participants" },
              { number: "10+", label: "Problem Statements" },
              { number: "₹2L+", label: "Prize Pool" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="glass-panel rounded-2xl p-6 border-l-2 border-cyan/50 hover:border-cyan transition-colors"
              >
                <div className="text-3xl font-bold text-cyan mb-2">{stat.number}</div>
                <div className="text-white-70 font-mono text-sm uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
