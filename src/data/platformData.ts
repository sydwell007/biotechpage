export type EcosystemNode = { icon: string; title: string; text: string };

export const ecosystemNodes: EcosystemNode[] = [
  { icon: "🧠", title: "NeuroBand", text: "Captures EEG/EMG signals from the user." },
  { icon: "⚡", title: "NeuroOS", text: "Processes signals and classifies human intent." },
  { icon: "🤖", title: "ExoAssist", text: "Provides wearable robotic support." },
  { icon: "🔗", title: "BioAPI", text: "Connects future devices, prosthetics and robotics." },
];

export const humanAiMachineLoop: EcosystemNode[] = [
  { icon: "💓", title: "1. Brain & Body Signal", text: "EEG, EMG, motion and biometric inputs." },
  { icon: "🧠", title: "2. NeuroBand / NeuroBand Pro", text: "Captures and streams user signals." },
  { icon: "⚡", title: "3. NeuroOS AI", text: "Processes intent, context and safety rules." },
  { icon: "🤖", title: "4. ExoAssist / Device Action", text: "Executes safe assistive commands." },
  { icon: "🔁", title: "5. Feedback Loop", text: "Performance data improves future assistance." },
  {
    icon: "🌍",
    title: "6. Platform Expansion",
    text: "Industrial, defense, healthcare and future consumer applications.",
  },
];

export const futureResearchPipeline: EcosystemNode[] = [
  {
    icon: "🧩",
    title: "Adaptive Exoskeleton Intelligence",
    text: "AI that learns movement patterns and adjusts assistance levels automatically.",
  },
  {
    icon: "🎯",
    title: "Multi-Device Neural Control",
    text: "One user controlling multiple systems such as robots, drones, machines and computers.",
  },
  {
    icon: "💓",
    title: "Biofeedback Optimization",
    text: "Real-time monitoring of fatigue, stress, focus and physical strain to improve safety and performance.",
  },
  {
    icon: "🗄️",
    title: "Neural Data Platform",
    text: "Secure analytics platform for human-performance data, workforce optimization and future health insights.",
  },
  {
    icon: "🥽",
    title: "Augmented Training Systems",
    text: "VR/AR training connected to NeuroBand and ExoAssist for measurable skill development and feedback.",
  },
  {
    icon: "🔗",
    title: "BioAPI Developer Ecosystem",
    text: "Open integration layer for future prosthetics, robotics, mobility systems and AI applications.",
  },
];

export const valueOfferingBullets = [
  "Reduce worker fatigue in physically demanding environments.",
  "Support safer lifting, posture and repetitive movement.",
  "Enable hands-free interaction with machines and software.",
  "Create measurable workforce performance insights.",
  "Build a pathway into rehabilitation and assistive technology markets.",
] as const;

export const coreResearchAreas: EcosystemNode[] = [
  {
    icon: "🔬",
    title: "Neural Signal Processing",
    text: "EEG/EMG acquisition, filtering, artifact reduction, feature extraction and intent classification.",
  },
  {
    icon: "🤖",
    title: "Human-Robot Control",
    text: "Safe assistance algorithms, sensor fusion, torque limits, ergonomic fit and movement prediction.",
  },
  {
    icon: "⚡",
    title: "AI Human Performance",
    text: "Adaptive models, enterprise analytics, fatigue insights and personalized assistance profiles.",
  },
];
