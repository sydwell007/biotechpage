export type Stat = { value: number; suffix?: string; label: string };

export const impactStats: Stat[] = [
  { value: 3, label: "Core product divisions in active engineering" },
  { value: 6, label: "Advanced systems in the innovation pipeline" },
  { value: 12, suffix: "mo", label: "Roadmap to a pilot-ready MVP demonstration" },
  { value: 4, label: "Target markets: mining, warehousing, healthcare, defense" },
];

export type BadgeStat = { value: string; label: string };

export const heroBadgeStats: BadgeStat[] = [
  { value: "3", label: "Integrated MVP systems" },
  { value: "B2B", label: "Industrial-first entry" },
  { value: "AI", label: "Human intent layer" },
];

export const missionStatement =
  "Civitas BioTech exists to build the operating system for human capability - combining biological signals, wearable robotics and AI into a closed-loop system that helps humans work, move and perform with greater safety and capability.";

export const visionStatement =
  "A future where non-invasive neural interfaces and safe wearable robotics are as ordinary as a smartphone - starting with the industrial workforce that carries the greatest physical risk today.";

export const originStory = [
  "Civitas BioTech was founded on a simple observation: the technology to read human intent and safely assist human movement already exists in research labs, but almost none of it has reached the workers who would benefit most - miners, warehouse staff, and frontline logistics teams.",
  "Rather than starting with invasive neural implants or consumer novelty devices, we chose to start where the engineering is credible today: non-invasive EEG/EMG capture, passive-to-active wearable robotics, and an AI layer - NeuroOS - that turns biological signal into safe, useful action.",
  "That industrial-first discipline is deliberate. It gives us a demonstrable MVP roadmap, a realistic regulatory path, and a commercial customer base willing to pay for measurable fatigue and injury reduction - before the platform expands into healthcare, defense and, eventually, consumer applications.",
];

export const whyNowCards = [
  {
    icon: "🏭",
    title: "An aging, injury-prone industrial workforce",
    text: "Mining and warehousing carry some of the highest fatigue and musculoskeletal injury rates of any sector - and the cost of that risk keeps rising.",
  },
  {
    icon: "⚡",
    title: "AI has matured enough to safely interpret intent",
    text: "Signal-processing and intent-classification models have reached the point where non-invasive EEG/EMG capture can drive real-world assistance, not just lab demos.",
  },
  {
    icon: "⚙️",
    title: "Wearable robotics is finally commercially viable",
    text: "Actuators, sensors and battery density have improved enough that safe, torque-limited exoskeletons can be built and deployed at industrial cost points.",
  },
] as const;

export const companyValues = [
  {
    icon: "🎯",
    title: "Engineering-realistic ambition",
    text: "We are explicit about what is shipping now, what is in R&D, and what is future research - so partners and investors can trust every claim we make.",
  },
  {
    icon: "🛡️",
    title: "Safety as a design constraint",
    text: "Torque limits, sensor fusion and fail-safe states are designed in from the first prototype, not bolted on later.",
  },
  {
    icon: "🔬",
    title: "Research-grade rigor",
    text: "Our signal-processing and human-robot control work is held to the same standard we would expect from an academic lab.",
  },
  {
    icon: "🌍",
    title: "Africa-originated, globally relevant",
    text: "We are building human augmentation technology in South Africa for global industrial, defense and healthcare markets.",
  },
] as const;
