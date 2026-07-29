import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  BriefcaseBusiness,
  Check,
  ChartNoAxesCombined,
  ClipboardCheck,
  Cloud,
  Cpu,
  Database,
  Dna,
  Factory,
  FlaskConical,
  Glasses,
  Globe2,
  HardHat,
  HeartPulse,
  Link2,
  Monitor,
  Package,
  Palette,
  PersonStanding,
  Plug,
  Puzzle,
  RefreshCw,
  Settings,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  Zap,
} from "lucide-react";

type Tone = "cyan" | "accent";

const iconMap: Record<string, LucideIcon> = {
  "🧠": Dna,
  "🤖": Bot,
  "⚡": Zap,
  "🪖": HardHat,
  "🏃": PersonStanding,
  "🛡️": ShieldCheck,
  "🔗": Link2,
  "💓": HeartPulse,
  "🔁": RefreshCw,
  "🌍": Globe2,
  "🧩": Puzzle,
  "🎯": Target,
  "🗄️": Database,
  "🥽": Glasses,
  "🔬": FlaskConical,
  "🏭": Factory,
  "📦": Package,
  "🏥": Stethoscope,
  "🎖️": Shield,
  "💼": BriefcaseBusiness,
  "🧬": Dna,
  "🔌": Plug,
  "⚙️": Settings,
  "🖥️": Monitor,
  "📋": ClipboardCheck,
  "🎨": Palette,
  "🔩": Cpu,
  "☁️": Cloud,
  "📊": ChartNoAxesCombined,
};

export function IconBadge({ icon, tone = "cyan" }: { icon: string; tone?: Tone }) {
  const Icon = iconMap[icon] ?? Sparkles;

  return (
    <span className={["icon", tone === "accent" ? "accent" : ""].filter(Boolean).join(" ")} aria-hidden="true">
      <Icon size={21} strokeWidth={1.8} />
    </span>
  );
}

export function MiniList({ items }: { items: readonly string[] }) {
  return (
    <ul className="miniList">
      {items.map((item) => (
        <li key={item}>
          <span className="tick" aria-hidden="true">
            <Check size={13} strokeWidth={2.8} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function InfoCard({
  icon,
  tone,
  title,
  text,
  bullets,
}: {
  icon: string;
  tone?: Tone;
  title: string;
  text: string;
  bullets?: readonly string[];
}) {
  return (
    <article className="card infoCard">
      <IconBadge icon={icon} tone={tone} />
      <h4>{title}</h4>
      <p>{text}</p>
      {bullets ? <MiniList items={bullets} /> : null}
    </article>
  );
}

export function SectionTitle({
  title,
  children,
  action,
  kicker = "Civitas BioTech",
}: {
  title: string;
  children?: ReactNode;
  action?: ReactNode;
  kicker?: string;
}) {
  return (
    <div className="sectionTitle">
      <div>
        <span className="sectionKicker">{kicker}</span>
        <h2>{title}</h2>
        {children ? <p>{children}</p> : null}
      </div>
      {action ? <div className="sectionAction">{action}</div> : null}
    </div>
  );
}
