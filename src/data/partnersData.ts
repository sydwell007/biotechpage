export type PartnerType = { icon: string; title: string; text: string };

export const partnerTypes: PartnerType[] = [
  {
    icon: "🏭",
    title: "Industrial Pilot Sites",
    text: "Mining, warehousing and logistics operators willing to host NeuroBand and ExoAssist prototypes under a structured pilot agreement.",
  },
  {
    icon: "🔬",
    title: "Research Collaborators",
    text: "Universities and labs advancing neural signal processing, human-robot control or AI human-performance modeling alongside our team.",
  },
  {
    icon: "📋",
    title: "Safety & Regulatory Partners",
    text: "Advisors and institutions who help us validate ExoAssist and NeuroBand against workplace-safety and future medical-adjacent standards.",
  },
  {
    icon: "⚙️",
    title: "Component & Manufacturing Partners",
    text: "Suppliers of sensors, actuators and precision manufacturing capacity who can scale with us from prototype to pilot volume.",
  },
];

export const pilotProcessSteps = [
  {
    title: "Propose",
    text: "Submit your site or collaboration through the pilot proposal form - sector, location and the challenge you want to solve.",
  },
  {
    title: "Assess fit",
    text: "Our team reviews proposals against the current roadmap stage - we prioritize sites that match what we can safely demonstrate today.",
  },
  {
    title: "Agree scope",
    text: "A signed pilot agreement sets out scope, safety protocols, data handling and success criteria before any hardware is deployed.",
  },
  {
    title: "Run & learn",
    text: "We deploy, gather real-world performance and safety data, and feed outcomes back into the next roadmap milestone.",
  },
] as const;
