import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TraceDivider from "@/components/TraceDivider";
import StatsStrip from "@/components/StatsStrip";
import About from "@/components/About";
import WhyHardware from "@/components/WhyHardware";
import ProblemStatements from "@/components/ProblemStatements";
import Timeline from "@/components/Timeline";
import Rules from "@/components/Rules";
import Schedule from "@/components/Schedule";
import PrizePool from "@/components/PrizePool";
import Judges from "@/components/Judges";
import Sponsors from "@/components/Sponsors";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="ambient-glow overflow-hidden">
        <Hero />
        <TraceDivider />
        <StatsStrip />
        <ProblemStatements />
        <About />
        <WhyHardware />
        <Timeline />
        <Rules />
        <Schedule />
        <PrizePool />
        <Judges />
        <TraceDivider />
        <Sponsors />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
