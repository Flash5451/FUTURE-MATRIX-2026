export const MAX_TEAMS_PER_PROBLEM = 3;

export type Chapter = "IEEE SSIT" | "IEEE ComSoc";

export type ProblemStatement = {
  id: string;
  chapter: Chapter;
  sdg: string;
  title: string;
  problem: string;
};

export const PROBLEM_STATEMENTS: ProblemStatement[] = [
  // IEEE SSIT
  { id: "SSIT-01", chapter: "IEEE SSIT", sdg: "SDG 3 – Good Health & Well-being", title: "Good Health and Well-being", problem: "Develop an intelligent healthcare ecosystem that leverages AI, IoT, and secure digital technologies to enable early disease detection, remote patient monitoring, personalized healthcare, and timely emergency response while ensuring privacy, accessibility, and affordability for all communities." },
  { id: "SSIT-02", chapter: "IEEE SSIT", sdg: "SDG 4 – Quality Education", title: "Quality Education", problem: "Design an inclusive and adaptive digital learning ecosystem that uses emerging technologies to provide personalized, accessible, multilingual, and equitable education for learners regardless of their location, socioeconomic background, or physical abilities." },
  { id: "SSIT-03", chapter: "IEEE SSIT", sdg: "SDG 5 – Gender Equality", title: "Gender Equality", problem: "Develop an integrated technology platform that empowers women through enhanced personal safety, equal access to education and employment, financial inclusion, and AI-driven tools that promote fairness, eliminate bias, and support informed decision-making." },
  { id: "SSIT-04", chapter: "IEEE SSIT", sdg: "SDG 6 – Clean Water & Sanitation", title: "Clean Water and Sanitation", problem: "Design an intelligent water management ecosystem that continuously monitors water quality, optimizes distribution, detects contamination and leakages in real time, and promotes sustainable water usage through predictive analytics and smart monitoring technologies." },
  { id: "SSIT-05", chapter: "IEEE SSIT", sdg: "SDG 10 – Reduced Inequalities", title: "Reduced Inequalities", problem: "Develop innovative assistive and inclusive technologies that bridge digital, social, and economic inequalities by improving accessibility, communication, education, healthcare, and public services for marginalized and differently abled communities." },
  { id: "SSIT-06", chapter: "IEEE SSIT", sdg: "SDG 11 – Sustainable Cities & Communities", title: "Sustainable Cities and Communities", problem: "Design an integrated smart city solution that enhances urban sustainability through intelligent transportation, disaster resilience, environmental monitoring, public safety, waste management, and citizen-centric digital services while ensuring privacy, inclusivity, and resilience." },
  { id: "SSIT-07", chapter: "IEEE SSIT", sdg: "SDG 12 – Responsible Consumption & Production", title: "Responsible Consumption and Production", problem: "Develop an intelligent circular economy platform that promotes sustainable production and responsible consumption through waste reduction, recycling automation, resource optimization, product traceability, and environmentally responsible supply chain management." },
  { id: "SSIT-08", chapter: "IEEE SSIT", sdg: "SDG 13 – Climate Action", title: "Climate Action", problem: "Design an AI-powered climate resilience platform capable of monitoring environmental conditions, predicting climate-related disasters, supporting carbon reduction strategies, and enabling communities to adapt to the impacts of climate change through data-driven decision-making." },
  { id: "SSIT-09", chapter: "IEEE SSIT", sdg: "SDG 16 – Peace, Justice & Strong Institutions", title: "Peace, Justice and Strong Institutions", problem: "Develop trustworthy digital solutions that strengthen transparency, cybersecurity, privacy, ethical artificial intelligence, secure public services, and citizen engagement while promoting accountability, justice, and institutional resilience." },
  { id: "SSIT-10", chapter: "IEEE SSIT", sdg: "SDG 17 – Partnerships for the Goals", title: "Partnerships for the Goals", problem: "Create a collaborative digital innovation ecosystem that connects academia, industry, government, NGOs, startups, and communities to co-develop, implement, and measure impactful technology-driven solutions addressing the United Nations Sustainable Development Goals." },

  // IEEE ComSoc
  { id: "COMSOC-01", chapter: "IEEE ComSoc", sdg: "SDG 4 – Quality Education", title: "Smart Classroom Environmental Monitoring", problem: "Develop a smart classroom environmental monitoring system that continuously measures occupancy, temperature, humidity, and air quality, and wirelessly communicates the data to a central dashboard to improve learning environments and optimize energy usage." },
  { id: "COMSOC-02", chapter: "IEEE ComSoc", sdg: "SDG 6 – Clean Water & Sanitation", title: "Smart Water Tank Monitoring", problem: "Design an IoT-based smart water tank monitoring system capable of measuring water levels in real time and sending wireless alerts to prevent overflow, dry-run conditions, and water wastage." },
  { id: "COMSOC-03", chapter: "IEEE ComSoc", sdg: "SDG 11 – Sustainable Cities & Communities", title: "Smart Parking Occupancy Detection", problem: "Develop a wireless smart parking occupancy detection system that identifies vacant parking spaces and communicates their availability to reduce traffic congestion and search time." },
  { id: "COMSOC-04", chapter: "IEEE ComSoc", sdg: "SDG 6 – Clean Water & Sanitation", title: "Water Leakage Detection Network", problem: "Develop an IoT-enabled water leakage detection network capable of identifying pipeline leaks and transmitting real-time alerts to minimize water loss and improve distribution efficiency." },
  { id: "COMSOC-05", chapter: "IEEE ComSoc", sdg: "SDG 3 – Good Health & Well-being", title: "Distributed Air Quality Monitoring", problem: "Design a distributed air quality monitoring network that collects environmental data from multiple sensor nodes and communicates pollution levels for real-time urban environmental monitoring." },
  { id: "COMSOC-06", chapter: "IEEE ComSoc", sdg: "SDG 11 – Sustainable Cities & Communities", title: "Intelligent Streetlight Monitoring", problem: "Build an intelligent streetlight monitoring system capable of detecting lamp failures, measuring energy consumption, and wirelessly reporting maintenance requirements to municipal authorities." },
  { id: "COMSOC-07", chapter: "IEEE ComSoc", sdg: "SDG 2 – Zero Hunger", title: "Precision Agriculture Sensor Network", problem: "Develop a precision agriculture sensor network that communicates soil moisture and environmental conditions from multiple field locations to support efficient irrigation decisions." },
  { id: "COMSOC-08", chapter: "IEEE ComSoc", sdg: "SDG 8 – Decent Work & Economic Growth", title: "Wearable Industrial Safety Monitor", problem: "Design a wearable industrial safety monitoring device that detects hazardous environmental conditions and immediately communicates emergency alerts to supervisors through a wireless network." },
  { id: "COMSOC-09", chapter: "IEEE ComSoc", sdg: "SDG 9 – Industry, Innovation & Infrastructure", title: "Disaster-Resilient Mesh Communication", problem: "Develop a portable disaster-resilient mesh communication network capable of enabling emergency messaging between multiple users when conventional cellular or internet infrastructure becomes unavailable." },
  { id: "COMSOC-10", chapter: "IEEE ComSoc", sdg: "SDG 11 – Sustainable Cities & Communities", title: "Vehicle-to-Infrastructure Communication", problem: "Design a prototype Vehicle-to-Infrastructure (V2I) communication system that enables roadside units to detect hazards and wirelessly broadcast real-time safety warnings to approaching vehicles." },
];

export function findProblemStatement(id: string): ProblemStatement | undefined {
  return PROBLEM_STATEMENTS.find((p) => p.id === id);
}
