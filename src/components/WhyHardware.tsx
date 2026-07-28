"use client";

import { motion } from "framer-motion";
import { CircuitBoard, Wifi, Bot, PenTool, Cog, Smartphone, Brain, Code2, Globe2, Cloud, Database, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const HARDWARE = [
  { icon: CircuitBoard, title: "Embedded Systems" }, { icon: Wifi, title: "IoT" },
  { icon: Bot, title: "Robotics" }, { icon: PenTool, title: "PCB & Electronics" },
  { icon: Cog, title: "Automation" }, { icon: Smartphone, title: "Smart Devices" }, { icon: Brain, title: "AI Hardware" },
];
const SOFTWARE = [
  { icon: Brain, title: "AI & Machine Learning" }, { icon: Globe2, title: "Web & Mobile Apps" },
  { icon: Cloud, title: "Cloud Systems" }, { icon: Database, title: "Data Analytics" },
  { icon: ShieldCheck, title: "Cybersecurity" }, { icon: Code2, title: "Software Platforms" }, { icon: Cog, title: "Intelligent Automation" },
];
function Track({title,subtitle,items}:{title:string;subtitle:string;items:typeof HARDWARE}) {
 return <div className="glass-panel rounded-2xl p-5 sm:p-6"><div className="mb-5"><h3 className="font-display text-xl font-semibold text-cyan">{title}</h3><p className="mt-1 text-sm text-white/50">{subtitle}</p></div><div className="perspective-wrap grid grid-cols-2 gap-3 sm:grid-cols-3">{items.map((a,i)=><motion.div key={a.title} initial={{opacity:0,scale:.96}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:.35,delay:i*.04}} className="tilt-card rounded-xl border border-white/10 bg-bg/40 p-4"><a.icon className="text-cyan" size={22} strokeWidth={1.5}/><p className="mt-3 font-display text-sm font-medium">{a.title}</p></motion.div>)}</div></div>
}
export default function WhyHardware(){return <section id="tracks" className="mx-auto max-w-6xl px-6 py-24"><SectionHeading eyebrow="Two Tracks" title="Build in hardware. Create in software. Solve what matters."/><p className="mt-4 max-w-3xl text-sm leading-6 text-white/55">Choose the track that best fits your solution. Both tracks address the same goal: solving meaningful real-world problems through strong engineering and innovation.</p><div className="mt-10 grid gap-6 lg:grid-cols-2"><Track title="Hardware Track" subtitle="Design, integrate and demonstrate a functional physical prototype." items={HARDWARE}/><Track title="Software Track" subtitle="Build and demonstrate a functional software solution, platform or intelligent system." items={SOFTWARE}/></div></section>}
