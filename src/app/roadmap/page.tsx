import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/marketing/PageHero";
import Reveal from "@/components/motion/Reveal";
import { SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { engineeringPrinciples, roadmapSteps } from "@/data/roadmapData";

export const metadata: Metadata = {
  title: "MVP Roadmap",
  description:
    "The 0-24 month Civitas BioTech build sequence: from lab setup through NeuroBand and ExoAssist prototypes to NeuroOS integration, pilot deployment and Series A.",
};

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        eyebrow="MVP Roadmap"
        title="From prototype to pilot-ready demonstration."
        intro="The roadmap focuses on a credible, non-invasive MVP that can be demonstrated to investors, industrial partners and research collaborators - before it expands into pilots and growth capital."
        chips={["0-24 month build", "Safety-bounded", "Investor-ready milestones"]}
        actions={
          <>
            <ButtonLink href="/investors" variant="accent">
              Investor thesis
            </ButtonLink>
            <ButtonLink href="/partners/apply" variant="ghost">
              Propose a Pilot
            </ButtonLink>
          </>
        }
      />

      <section>
        <div className="container">
          <div className="bannerImage">
            <Image
              src="/images/mvp-roadmap-engineering.png"
              alt="Civitas BioTech MVP roadmap and engineering build sequence"
              width={1600}
              height={800}
            />
          </div>

          <SectionTitle title="The build sequence" kicker="0-24 months">
            Each milestone is scoped to be demonstrable before the next one starts.
          </SectionTitle>

          <div className="timeline">
            {roadmapSteps.map((step) => (
              <div className="timelineItem" key={step.time}>
                <span className="timelineYear">{step.time}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionTitle title="How we hold the roadmap to a standard" kicker="Engineering principles">
            Three commitments that govern every milestone above.
          </SectionTitle>
          <div className="grid3">
            {engineeringPrinciples.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 70}>
                <article className="card">
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="callout">
            <b>Want the detail behind these milestones?</b> Review our <Link href="/platform">platform thesis</Link>{" "}
            or request the full <Link href="/investors">investor pack</Link>.
          </div>
        </div>
      </section>
    </>
  );
}
