import { IconBadge } from "@/components/ui/Card";
import type { Metric } from "@/data/investorData";

export function MetricRow({ metrics }: { metrics: readonly Metric[] }) {
  return (
    <div className="metricRow">
      {metrics.map((metric) => (
        <div className="metric" key={metric.title}>
          <strong>
            <IconBadge icon={metric.icon} />
            {metric.title}
          </strong>
          <span>{metric.text}</span>
        </div>
      ))}
    </div>
  );
}
