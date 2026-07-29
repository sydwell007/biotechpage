import { IconBadge } from "@/components/ui/Card";
import type { Market } from "@/data/marketsData";

export default function MarketCard({ market }: { market: Market }) {
  return (
    <article className="card">
      <span className={["marketHorizon", market.horizon === "Now" ? "now" : ""].filter(Boolean).join(" ")}>
        {market.horizon}
      </span>
      <IconBadge icon={market.icon} />
      <h3>{market.title}</h3>
      <p>{market.text}</p>
    </article>
  );
}
