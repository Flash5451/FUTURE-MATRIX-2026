export const MAX_TEAMS_PER_PROBLEM = 3;

export type Track = "Hardware" | "Software";

// Kept for internal record-keeping (populates the Sheet's "IEEE Chapter" column) —
// not shown to participants in the browsing/selection UI, which is organized by Track only.
export type Chapter = "IEEE SSIT" | "IEEE ComSoc";

export type ProblemStatement = {
  id: string;
  track: Track;
  chapter: Chapter;
  sdg: string;
  title: string;
  problem: string;
};

export const PROBLEM_STATEMENTS: ProblemStatement[] = [
  // Hardware Track
  {
    id: "HW-01", track: "Hardware", chapter: "IEEE SSIT",
    sdg: "SDG 6 – Clean Water and Sanitation",
    title: "Smart Water Quality Monitoring System",
    problem: "Design a Smart Water Quality Monitoring System using IoT sensors capable of continuously measuring water quality parameters, detecting contamination in real time, and transmitting alerts to authorities through cloud connectivity.",
  },
  {
    id: "HW-02", track: "Hardware", chapter: "IEEE SSIT",
    sdg: "SDG 11 – Sustainable Cities and Communities",
    title: "Disaster Monitoring & Early Warning Device",
    problem: "Develop an Intelligent Disaster Monitoring and Early Warning Device that combines environmental sensors, edge AI, and wireless communication to detect floods, landslides, fires, or hazardous conditions and provide rapid community alerts.",
  },
  {
    id: "HW-03", track: "Hardware", chapter: "IEEE SSIT",
    sdg: "SDG 3 – Good Health and Well-being",
    title: "Portable AI Vital Health Monitor",
    problem: "Build a Portable AI-Based Vital Health Monitoring Device capable of measuring multiple physiological parameters, detecting abnormalities locally using edge AI, and securely transmitting emergency notifications to caregivers or hospitals.",
  },
  {
    id: "HW-04", track: "Hardware", chapter: "IEEE SSIT",
    sdg: "SDG 12 – Responsible Consumption and Production",
    title: "Autonomous Smart Waste Segregation System",
    problem: "Design an Autonomous Smart Waste Segregation System that identifies, classifies, and sorts waste using computer vision, sensors, and embedded systems to improve recycling efficiency and reduce landfill waste.",
  },
  {
    id: "HW-05", track: "Hardware", chapter: "IEEE SSIT",
    sdg: "SDG 13 – Climate Action",
    title: "IoT Environmental Intelligence Station",
    problem: "Develop an IoT-enabled Environmental Intelligence Station that continuously monitors air quality, temperature, humidity, greenhouse gases, and noise pollution while providing predictive analytics for climate resilience and sustainable urban planning.",
  },
  {
    id: "HW-06", track: "Hardware", chapter: "IEEE ComSoc",
    sdg: "SDG 4 – Quality Education",
    title: "Smart Classroom Environmental Monitoring Node",
    problem: "Design a Smart Classroom Environmental Monitoring Node capable of measuring occupancy, temperature, humidity, and air quality while wirelessly transmitting data to a central server for intelligent classroom management.",
  },
  {
    id: "HW-07", track: "Hardware", chapter: "IEEE ComSoc",
    sdg: "SDG 6 – Clean Water & Sanitation",
    title: "Smart Water Tank & Pipeline Monitoring Device",
    problem: "Develop an IoT-Based Smart Water Tank and Pipeline Monitoring Device that continuously measures water levels, detects leakages, and transmits real-time alerts through LPWAN, Wi-Fi, or LoRa communication networks.",
  },
  {
    id: "HW-08", track: "Hardware", chapter: "IEEE ComSoc",
    sdg: "SDG 11 – Sustainable Cities & Communities",
    title: "Wireless Smart Parking System",
    problem: "Build an Intelligent Wireless Smart Parking System that detects vehicle occupancy using embedded sensors and communicates parking availability in real time to drivers through a low-power wireless network.",
  },
  {
    id: "HW-09", track: "Hardware", chapter: "IEEE ComSoc",
    sdg: "SDG 3 – Good Health & Well-being",
    title: "Distributed Air Quality Monitoring Network",
    problem: "Design a Distributed Air Quality Monitoring Network consisting of multiple sensor nodes capable of communicating pollution data to an edge gateway for real-time environmental monitoring and public health awareness.",
  },
  {
    id: "HW-10", track: "Hardware", chapter: "IEEE ComSoc",
    sdg: "SDG 9 – Industry, Innovation & Infrastructure",
    title: "Portable Emergency Mesh Communication Device",
    problem: "Develop a Portable Emergency Mesh Communication Device that establishes a self-healing wireless mesh network to provide voice and text communication when conventional cellular or internet infrastructure becomes unavailable.",
  },
  {
    id: "HW-11", track: "Hardware", chapter: "IEEE ComSoc",
    sdg: "SDG 9 – Industry, Innovation & Infrastructure",
    title: "Communication-System-on-Chip Applications",
    problem: "Design and prototype a Communication-System-on-Chip (SoC) application that integrates signal processing, wireless transmission, and embedded control on a single low-power platform for a real-world communication use case.",
  },
  {
    id: "HW-12", track: "Hardware", chapter: "IEEE SSIT",
    sdg: "SDG 16 – Peace, Justice & Strong Institutions",
    title: "Wi-Fi Deauthentication Attack Detector & Alert System",
    problem: "Build a Wi-Fi Deauthentication Attack Detector that continuously monitors nearby wireless traffic for deauthentication/disassociation frame floods and raises an immediate physical or networked alert when an attack is detected.",
  },

  // Software Track
  {
    id: "SW-01", track: "Software", chapter: "IEEE SSIT",
    sdg: "SDG 3 – Good Health and Well-being",
    title: "AI Preventive Healthcare Platform",
    problem: "Develop an AI-powered preventive healthcare platform that predicts potential health risks using wearable sensor data, electronic health records, and lifestyle patterns, enabling personalized recommendations, remote monitoring, and emergency alerts while ensuring data privacy.",
  },
  {
    id: "SW-02", track: "Software", chapter: "IEEE SSIT",
    sdg: "SDG 4 – Quality Education",
    title: "Adaptive Multilingual Learning Platform",
    problem: "Design an adaptive multilingual learning platform that personalizes educational content using AI, supports differently-abled learners through accessibility features, and provides educators with learning analytics to improve student outcomes.",
  },
  {
    id: "SW-03", track: "Software", chapter: "IEEE SSIT",
    sdg: "SDG 11 – Sustainable Cities and Communities",
    title: "Citizen-Centric Smart City Platform",
    problem: "Develop a citizen-centric smart city platform that integrates public grievance reporting, disaster alerts, traffic intelligence, environmental monitoring, and civic service management into a unified digital ecosystem.",
  },
  {
    id: "SW-04", track: "Software", chapter: "IEEE SSIT",
    sdg: "SDG 10 – Reduced Inequalities",
    title: "AI Accessibility Assistant",
    problem: "Build an AI-enabled accessibility assistant that helps visually, hearing, or speech-impaired individuals communicate, navigate public spaces, and access essential services using computer vision, speech technologies, and multilingual interfaces.",
  },
  {
    id: "SW-05", track: "Software", chapter: "IEEE SSIT",
    sdg: "SDG 12 – Responsible Consumption and Production",
    title: "AI Circular Economy Management System",
    problem: "Create an AI-driven circular economy management system that optimizes waste segregation, predicts recyclable material value, tracks product lifecycle, and encourages sustainable consumer behavior through digital incentives.",
  },
  {
    id: "SW-06", track: "Software", chapter: "IEEE ComSoc",
    sdg: "SDG 4 – Quality Education",
    title: "Smart Campus Communication Platform",
    problem: "Develop an AI-powered Smart Campus Communication Platform that integrates classroom notifications, emergency alerts, attendance synchronization, and real-time collaboration through secure wireless communication networks to enhance the digital learning experience.",
  },
  {
    id: "SW-07", track: "Software", chapter: "IEEE ComSoc",
    sdg: "SDG 11 – Sustainable Cities & Communities",
    title: "Smart Traffic Congestion Prediction System",
    problem: "Design a Smart Traffic Communication and Congestion Prediction System that collects data from connected vehicles, roadside units, and IoT sensors to optimize traffic flow and reduce travel delays using intelligent communication protocols.",
  },
  {
    id: "SW-08", track: "Software", chapter: "IEEE ComSoc",
    sdg: "SDG 9 – Industry, Innovation & Infrastructure",
    title: "Edge AI Network Management Platform",
    problem: "Develop an Edge AI Network Management Platform capable of monitoring IoT devices, predicting communication failures, optimizing bandwidth allocation, and ensuring reliable low-latency connectivity for smart infrastructure.",
  },
  {
    id: "SW-09", track: "Software", chapter: "IEEE ComSoc",
    sdg: "SDG 6 – Clean Water & Sanitation",
    title: "Cloud-Based Water Distribution Monitoring",
    problem: "Build a Cloud-Based Smart Water Distribution Monitoring System that receives real-time data from wireless sensor networks, detects leakages, predicts maintenance requirements, and visualizes network health through interactive dashboards.",
  },
  {
    id: "SW-10", track: "Software", chapter: "IEEE ComSoc",
    sdg: "SDG 13 – Climate Action",
    title: "Disaster Communication Coordination Platform",
    problem: "Create a Disaster Communication Coordination Platform that intelligently prioritizes emergency messages, allocates communication resources, maps affected regions, and enables coordination among response teams during natural disasters.",
  },
  {
    id: "SW-11", track: "Software", chapter: "IEEE SSIT",
    sdg: "SDG 16 – Peace, Justice & Strong Institutions",
    title: "Real-Time Phishing URL & Email Detector",
    problem: "Build a Real-Time Phishing URL and Email Detector that analyzes links and message content as they arrive, flags suspicious sender patterns and lookalike domains, and warns the user before they can be compromised.",
  },
  {
    id: "SW-12", track: "Software", chapter: "IEEE SSIT",
    sdg: "SDG 16 – Peace, Justice & Strong Institutions",
    title: "Network Intrusion Detection System using Machine Learning",
    problem: "Develop a Network Intrusion Detection System that uses machine learning to classify live network traffic, identify anomalous or malicious behavior in real time, and alert administrators before damage spreads.",
  },
  {
    id: "SW-13", track: "Software", chapter: "IEEE SSIT",
    sdg: "SDG 16 – Peace, Justice & Strong Institutions",
    title: "Secure File Vault with End-to-End Encryption",
    problem: "Design a Secure File Vault application that encrypts files end-to-end before they ever leave the device, giving users a private, tamper-proof space to store and share sensitive documents.",
  },
  {
    id: "SW-14", track: "Software", chapter: "IEEE SSIT",
    sdg: "SDG 16 – Peace, Justice & Strong Institutions",
    title: "Password Strength Analyzer & Breach Checker",
    problem: "Create a Password Strength Analyzer and Breach Checker that scores password quality in real time and cross-checks it against known breach databases, helping users fix weak or already-compromised credentials before they're exploited.",
  },
];

export function findProblemStatement(id: string): ProblemStatement | undefined {
  return PROBLEM_STATEMENTS.find((p) => p.id === id);
}
