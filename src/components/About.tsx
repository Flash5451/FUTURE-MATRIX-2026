"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Cpu, Code2, Lightbulb, Users, Trophy, Zap } from "lucide-react";

const FEATURES = [
  {
    icon: Cpu,
    title: "Hardware",
    description: "Build physical prototypes with Arduino, Raspberry Pi, sensors, and more.",
    color: "from-cyan/20 to-cyan/5",
    iconColor: "text-cyan",
  },
  {
    icon: Code2,
    title: "Software",
    description: "Develop innovative applications, AI models, and full-stack solutions.",
    color: "from-purple/20 to-purple/5",
    iconColor: "text-purple",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Solve real-world problems with creative and impactful solutions.",
    color: "from-green/20 to-green/5",
    iconColor: "text-green",
  },
];

const STATS = [
  { number: "24", label: "Hours of Innovation", icon: Zap },
  { number: "500+", label: "Expected Participants", icon: Users },
  { number: "10+", label: "Problem Statements", icon: Lightbulb },
  { number: "₹2L+", label: "Prize Pool", icon: Trophy },
];

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative overflow-hidden px-6 py-24 sm:py-32 lg:py-40"
    >
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-purple/5 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 pcb-grid opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-xs font-mono uppercase tracking-widest mb-6"
          >
            <Zap size={14} />
            About The Event
          </motion.span>
          
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            About{" "}
            <span className="text-gradient glow-text">Future Matrix</span>
          </h2>
          
          <motion.div 
            className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan via-purple to-green rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
              Future Matrix 2026 is an intra-college 24-hour hardware and software hackathon organized by the{" "}
              <span className="text-cyan font-medium">IEEE Student Branch</span> in collaboration with{" "}
              <span className="text-purple font-medium">IEEE SSIT</span> and{" "}
              <span className="text-green font-medium">IEEE ComSoc</span>.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              This is your chance to build innovative solutions, prototype groundbreaking ideas, and compete with your peers. Whether you're interested in embedded systems, IoT, software development, or AI, Future Matrix has challenges for everyone.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              Join hundreds of innovators and makers as we push the boundaries of what's possible in just 24 hours.
            </p>
          </motion.div>

          {/* Right feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className={`group glass-panel rounded-2xl p-6 border-l-4 border-cyan/50 hover:border-cyan transition-all duration-500 cursor-default bg-gradient-to-r ${feature.color}`}
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className={`p-3 rounded-xl bg-white/5 ${feature.iconColor} group-hover:bg-white/10 transition-colors`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <Icon size={24} />
                    </motion.div>
                    <div>
                      <h3 className={`font-display text-xl font-semibold mb-1 ${feature.iconColor}`}>
                        {feature.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group glass-panel rounded-2xl p-6 text-center relative overflow-hidden"
              >
                <motion.div 
                  className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10 text-cyan group-hover:bg-cyan/20 transition-colors"
                  whileHover={{ rotate: 10 }}
                >
                  <Icon size={24} />
                </motion.div>
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">
                  {stat.number}
                </div>
                <div className="text-white/50 font-mono text-xs uppercase tracking-widest">
                  {stat.label}
                </div>
                
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}