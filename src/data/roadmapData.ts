export type RoadmapStep = { time: string; title: string; text: string };

export const roadmapSteps: RoadmapStep[] = [
  {
    time: "0-3M",
    title: "Research & Lab Setup",
    text: "Finalize requirements, source components, build the lab bench and create the initial system architecture.",
  },
  {
    time: "3-6M",
    title: "NeuroBand Prototype",
    text: "Capture EEG/EMG data, stream signals and create a basic dashboard visualization.",
  },
  {
    time: "6-9M",
    title: "ExoAssist Prototype",
    text: "Build a passive support frame, then an active-assist prototype with sensors and safe control limits.",
  },
  {
    time: "9-12M",
    title: "NeuroOS Integration",
    text: "Connect biological signals to intent classification and controlled exoskeleton command states.",
  },
  {
    time: "12-18M",
    title: "Pilot Deployment & Field Validation",
    text: "Deploy MVP systems with a small number of industrial pilot partners and gather real-world safety and performance data.",
  },
  {
    time: "18-24M",
    title: "Series A & Market Expansion",
    text: "Use pilot outcomes to raise growth capital and scale NeuroOS, ExoAssist and BioAPI into additional industrial and defense-logistics sites.",
  },
];

export const engineeringPrinciples = [
  {
    title: "Non-invasive by design",
    text: "Every near-term product captures signals or assists movement externally - no implants, no surgery.",
  },
  {
    title: "Safety-bounded assistance",
    text: "Torque limits, sensor fusion and fail-safe states govern every ExoAssist command before it reaches an actuator.",
  },
  {
    title: "Credible before ambitious",
    text: "The roadmap sequences a demonstrable MVP before the platform expands into tactical, medical or consumer territory.",
  },
] as const;
