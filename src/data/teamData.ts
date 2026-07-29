export type Role = { icon: string; title: string; text: string };

export const teamRoles: Role[] = [
  {
    icon: "💼",
    title: "Systems Engineer / Program Lead",
    text: "Owns system architecture and coordinates the neural, robotic and software workstreams toward each roadmap milestone.",
  },
  {
    icon: "🧬",
    title: "Biomedical Engineer",
    text: "Designs safe, ergonomic sensor placement and signal-acquisition hardware for EEG/EMG capture.",
  },
  {
    icon: "🔌",
    title: "Embedded Firmware Engineer",
    text: "Builds low-latency firmware connecting sensors, actuators and the NeuroOS signal pipeline.",
  },
  {
    icon: "⚙️",
    title: "Mechanical / Robotics Engineer",
    text: "Engineers the ExoAssist frame, actuation and torque-limited safety systems.",
  },
  {
    icon: "🧠",
    title: "AI / ML Engineer",
    text: "Builds intent-classification models and adaptive personalization for NeuroOS.",
  },
  {
    icon: "🖥️",
    title: "Software Engineer, NeuroOS",
    text: "Builds the enterprise dashboard, API layer and real-time signal-processing pipeline.",
  },
  {
    icon: "📋",
    title: "Safety & Regulatory Advisor",
    text: "Guides workplace-safety and future medical-adjacent regulatory compliance across every market entry.",
  },
  {
    icon: "🎨",
    title: "Industrial Design & Ergonomics Specialist",
    text: "Shapes wearable comfort, fit and long-duration usability for both NeuroBand and ExoAssist.",
  },
];

export const teamValues = [
  {
    title: "Engineering-realistic ambition",
    text: "We communicate a bold long-term platform vision while keeping the current roadmap credible and demonstrable.",
  },
  {
    title: "Safety before speed",
    text: "Every assistive command is bounded by sensor fusion, torque limits and fail-safe states before it reaches hardware.",
  },
  {
    title: "Built in South Africa, built for the world",
    text: "Civitas BioTech is developing Africa-originated human augmentation technology for global industrial, defense and healthcare markets.",
  },
] as const;

export const applicationRoleOptions = [...teamRoles.map((role) => role.title), "Other / General Interest"] as const;
