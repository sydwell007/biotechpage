export type Market = { icon: string; title: string; text: string; horizon: "Now" | "Next" | "Future" };

export const targetMarkets: Market[] = [
  {
    icon: "🏭",
    title: "Mining",
    text: "Reduce fatigue and injury risk in physically intensive work, from load carrying to repetitive manual tasks underground and on surface operations.",
    horizon: "Now",
  },
  {
    icon: "📦",
    title: "Warehousing & Logistics",
    text: "Support lifting, packing, sorting and movement across high-throughput distribution centres and fulfilment operations.",
    horizon: "Now",
  },
  {
    icon: "🏥",
    title: "Healthcare & Rehabilitation",
    text: "Future rehabilitation and assistive mobility use cases, building on non-invasive signal capture and safe wearable assistance.",
    horizon: "Next",
  },
  {
    icon: "🎖️",
    title: "Defense & Public Safety",
    text: "Future performance, endurance and protection applications for defense logistics, rescue and emergency response teams.",
    horizon: "Future",
  },
];

export const marketEntryStrategy = [
  {
    title: "Industrial first",
    text: "Non-invasive, commercially credible entry through mining and warehousing, where fatigue and injury reduction map directly to measurable cost savings.",
  },
  {
    title: "Medical next",
    text: "Rehabilitation and assistive mobility partnerships once safety data and operating history exist from industrial deployments.",
  },
  {
    title: "Consumer later",
    text: "A longer-term platform opportunity once NeuroOS, ExoAssist and BioAPI have matured through real-world validation.",
  },
] as const;
