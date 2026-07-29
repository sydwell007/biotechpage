export type Product = {
  slug: string;
  name: string;
  category: "core" | "advanced";
  icon: string;
  image: string;
  imageAlt: string;
  tagline: string;
  description: string;
  bullets: readonly string[];
};

export const coreProducts: Product[] = [
  {
    slug: "neuroband",
    name: "Civitas NeuroBand",
    category: "core",
    icon: "🧠",
    image: "/images/neuroband-product.png",
    imageAlt: "Civitas NeuroBand neural interface wearable product",
    tagline: "Non-invasive EEG/EMG neural interface",
    description:
      "A non-invasive EEG/EMG wearable that captures biological signals and enables intent-based control of digital and robotic systems.",
    bullets: [
      "Brain and muscle signal capture",
      "Hands-free computer control",
      "Research and assistive interface",
    ],
  },
  {
    slug: "exoassist",
    name: "Civitas ExoAssist",
    category: "core",
    icon: "🤖",
    image: "/images/exoassist-product.png",
    imageAlt: "Civitas ExoAssist wearable robotics product",
    tagline: "Wearable robotics for industrial safety",
    description:
      "Wearable robotic gear designed to reduce fatigue, support lifting and improve worker safety in industrial environments.",
    bullets: ["Industrial lift support", "Posture and fatigue reduction", "Passive and active versions"],
  },
  {
    slug: "neuroos",
    name: "Civitas NeuroOS",
    category: "core",
    icon: "⚡",
    image: "/images/neuroos-dashboard.png",
    imageAlt: "Civitas NeuroOS AI dashboard product",
    tagline: "The AI operating system for human intent",
    description:
      "An AI-powered platform that translates biological signals into commands, insights and enterprise performance analytics.",
    bullets: ["Signal processing engine", "Intent classification", "Enterprise dashboard and API"],
  },
];

export const advancedProducts: Product[] = [
  {
    slug: "exoassist-tactical",
    name: "Civitas ExoAssist Tactical",
    category: "advanced",
    icon: "🪖",
    image: "/images/exoassist-tactical.png",
    imageAlt: "Civitas ExoAssist Tactical ruggedized wearable robotics",
    tagline: "Ruggedized load-bearing support for extreme environments",
    description:
      "A ruggedized ExoAssist platform for high-load, high-endurance environments where personnel carry equipment, operate in difficult terrain and need fatigue-reduction support.",
    bullets: [
      "Load-bearing assistance for equipment transport",
      "Posture support and fatigue reduction",
      "Stability support for field operations",
      "Designed for defense logistics, rescue and emergency response",
    ],
  },
  {
    slug: "exoassist-mobility",
    name: "Civitas ExoAssist Mobility",
    category: "advanced",
    icon: "🏃",
    image: "/images/exoassist-mobility.png",
    imageAlt: "Civitas ExoAssist Mobility lightweight wearable",
    tagline: "Lightweight movement and endurance support",
    description:
      "A lightweight mobility-focused wearable system designed to improve movement efficiency, reduce joint strain and support endurance during long-duration operations.",
    bullets: [
      "Walking and running efficiency support",
      "Energy-return mechanical assistance",
      "Terrain-adaptive movement support",
      "Reduced strain during repetitive movement",
    ],
  },
  {
    slug: "augmented-helmet",
    name: "Civitas Augmented Helmet",
    category: "advanced",
    icon: "🛡️",
    image: "/images/augmented-helmet.png",
    imageAlt: "Civitas Augmented Helmet smart helmet concept",
    tagline: "Situational awareness for high-pressure environments",
    description:
      "A smart helmet concept that integrates communication, sensor data, environmental awareness and NeuroOS-connected decision support for high-pressure environments.",
    bullets: [
      "Heads-up display interface",
      "Environmental and biometric alerts",
      "Team communication integration",
      "NeuroOS situational awareness layer",
    ],
  },
  {
    slug: "neuroband-pro",
    name: "Civitas NeuroBand Pro",
    category: "advanced",
    icon: "🧠",
    image: "/images/neuroband-pro.png",
    imageAlt: "Civitas NeuroBand Pro high-resolution neural wearable",
    tagline: "Higher-resolution sensing, faster classification",
    description:
      "The next evolution of NeuroBand, designed for higher-resolution EEG/EMG sensing, faster signal processing and adaptive AI personalization per user.",
    bullets: [
      "Higher-density neural and muscle-signal capture",
      "Faster intent classification",
      "Multi-device control capability",
      "Personalized AI learning profiles",
    ],
  },
  {
    slug: "neurolink-interface",
    name: "Civitas NeuroLink Interface",
    category: "advanced",
    icon: "⚡",
    image: "/images/neurolink-interface.png",
    imageAlt: "Civitas NeuroLink Interface human-AI collaboration layer",
    tagline: "Real-time human-AI collaboration layer",
    description:
      "A real-time human-AI collaboration layer that connects user intent to AI systems, robotics, computers and future wearable augmentation devices.",
    bullets: [
      "Intent to AI to action workflow",
      "Real-time feedback and command routing",
      "Integration with ExoAssist and BioAPI",
      "Designed as a non-invasive interface layer",
    ],
  },
  {
    slug: "cognitive-assist-ai",
    name: "Civitas Cognitive Assist AI",
    category: "advanced",
    icon: "🤖",
    image: "/images/cognitive-assist-ai.png",
    imageAlt: "Civitas Cognitive Assist AI assistant product",
    tagline: "An AI co-pilot for work, training and operations",
    description:
      "An AI assistant that learns user patterns, supports decision-making, automates repetitive tasks and improves performance across work, training and operations.",
    bullets: [
      "Predictive task support",
      "Context-aware recommendations",
      "Cognitive workload reduction",
      "Performance optimization insights",
    ],
  },
];

export const allProducts: Product[] = [...coreProducts, ...advancedProducts];

export function findProductBySlug(slug: string): Product | undefined {
  return allProducts.find((product) => product.slug === slug);
}
