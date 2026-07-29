import CountUp from "@/components/motion/CountUp";

export function StatTile({
  value,
  suffix,
  label,
  tone,
}: {
  value: number;
  suffix?: string;
  label: string;
  tone?: "accent";
}) {
  return (
    <div className={["statTile", tone === "accent" ? "accent" : ""].filter(Boolean).join(" ")}>
      <span className="statValue">
        <CountUp value={value} suffix={suffix} />
      </span>
      <span className="statLabel">{label}</span>
    </div>
  );
}
