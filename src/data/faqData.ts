export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "What does Civitas BioTech actually build?",
    answer:
      "Three integrated systems: NeuroBand, a non-invasive EEG/EMG wearable that reads biological signals; ExoAssist, wearable robotics that reduce fatigue and support safe lifting; and NeuroOS, the AI layer that turns signals into safe, useful commands and enterprise insight.",
  },
  {
    question: "Is NeuroBand invasive - does it require surgery or implants?",
    answer:
      "No. NeuroBand is entirely non-invasive. It captures EEG (brain) and EMG (muscle) signals from the surface of the skin, the same category of signal capture used in consumer fitness and clinical monitoring devices.",
  },
  {
    question: "What stage is the company at today?",
    answer:
      "We are executing an MVP roadmap toward a pilot-ready demonstration, moving from lab setup through NeuroBand and ExoAssist prototypes to a first NeuroOS integration. See our Roadmap page for the full milestone timeline.",
  },
  {
    question: "Which industries will you serve first, and why?",
    answer:
      "Mining and warehousing first. Both have well-understood fatigue and injury costs, physically demanding tasks, and a commercial willingness to pay for measurable safety and productivity improvements - an industrial-first path before healthcare, defense and consumer applications.",
  },
  {
    question: "How is safety handled in ExoAssist?",
    answer:
      "Every ExoAssist command is bounded by torque limits, sensor fusion and fail-safe states before it reaches an actuator. Safety review is a first-class engineering workstream, not an afterthought - see our Safety & Regulatory Advisor role on the Team page.",
  },
  {
    question: "What is NeuroOS, and who uses it?",
    answer:
      "NeuroOS is the AI platform underneath every Civitas BioTech product. It processes biological and sensor signals, classifies intent, drives safe device commands, and surfaces enterprise dashboards and an API (BioAPI) for future integrations.",
  },
  {
    question: "Is Civitas BioTech raising investment right now?",
    answer:
      "We work with research partners, industrial pilot sites, engineering collaborators and early investors on an ongoing basis. Request the current investor pack on our Investors page for the latest detail.",
  },
  {
    question: "How can my organization run a pilot?",
    answer:
      "Propose a pilot site through our Partners page. We prioritize sites that match our current roadmap stage and can provide real-world operating conditions for NeuroBand and ExoAssist prototypes.",
  },
  {
    question: "Are you hiring?",
    answer:
      "Yes - we are building a multidisciplinary engineering team across systems, biomedical, firmware, mechanical, AI/ML, software, safety/regulatory and industrial design. See open roles and apply on our Team page.",
  },
  {
    question: "How do you handle privacy for biological signal data?",
    answer:
      "Biological signal data is handled under the same privacy-by-design principles as our lead-capture forms: explicit consent, data minimization, and no sale of personal data. See our full Privacy Policy for detail.",
  },
];
