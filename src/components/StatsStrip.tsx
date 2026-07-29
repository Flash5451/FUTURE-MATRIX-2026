"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Trophy, Users, Clock, UserCheck, Award } from "lucide-react";

const STATS = [
  { value: 32500, suffix: "", prefix: "₹", label: "Prize Pool", icon: Trophy },
  { value: 50, suffix: "+", prefix: "", label: "Team Slots", icon: Users },
  { value: 24, suffix: "h", prefix: "", label: "Hours", icon: Clock },
  { value: 10, suffix: "+", prefix: "", label: "Mentors", icon: UserCheck },
  { value: 1, suffix: "", prefix: "", label: "Industry Expert", icon: Award },
];

function AnimatedNumber({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display text-2xl font-semibold text-cyan sm:text-3xl tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsStrip() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={containerRef}
      className="relative border-y border-white/10 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-panel/50 to-bg" />
      
      {/* Animated line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent"
        animate={{ 
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 100%" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple/50 to-transparent"
        animate={{ 
          backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 100%" }}
      />

      <div className="perspective-wrap relative mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-12 sm:grid-cols-5 sm:gap-6">
        {STATS.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative tilt-card glass-panel rounded-2xl p-5 text-center cursor-default"
            >
              {/* Icon */}
              <motion.div 
                className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan group-hover:bg-cyan/20 transition-colors duration-300"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Icon size={20} />
              </motion.div>
              
              {/* Value */}
              <AnimatedNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              
              {/* Label */}
              <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-white/50 group-hover:text-white/70 transition-colors">
                {stat.label}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan/5 to-purple/5" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}