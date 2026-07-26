import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
      <main>
        <Hero />
        <StatsStrip />
        <About />
        <WhyHardware />
        <ProblemStatements />
        <Timeline />
        <Rules />
        <Schedule />
        <PrizePool />
        <Judges />
        <Sponsors />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
