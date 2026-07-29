export type Metric = { icon: string; title: string; text: string };

export const investorMetrics: Metric[] = [
  { icon: "🔩", title: "Hardware", text: "NeuroBand + ExoAssist products" },
  { icon: "☁️", title: "SaaS", text: "NeuroOS subscriptions" },
  { icon: "📊", title: "Data", text: "Human performance insights" },
  { icon: "🔗", title: "Platform", text: "BioAPI ecosystem" },
];

export const useOfFundsPriorities = [
  {
    title: "Engineering & Prototyping",
    text: "NeuroBand and ExoAssist hardware iteration, lab equipment and component sourcing.",
  },
  {
    title: "Safety & Regulatory Validation",
    text: "Independent safety review, ergonomic testing and preparation for future medical-adjacent pathways.",
  },
  {
    title: "Pilot Deployments",
    text: "On-site pilots with industrial partners in mining and warehousing to generate real operating data.",
  },
  {
    title: "Team Growth",
    text: "Hiring across the multidisciplinary engineering team outlined on our team page.",
  },
] as const;

export const investorFaqs = [
  {
    question: "What stage is Civitas BioTech at?",
    answer:
      "We are in the research and MVP-build stage, executing the roadmap toward a pilot-ready demonstration. See the full roadmap for milestone detail.",
  },
  {
    question: "What are you raising for?",
    answer:
      "Capital is directed at engineering and prototyping, safety and regulatory validation, industrial pilot deployments, and building out the core engineering team - see Use of Funds above.",
  },
  {
    question: "How can I get the full investor pack?",
    answer:
      "Use the request form below. Our team will follow up personally with the current deck, roadmap detail and a call to discuss fit.",
  },
] as const;
