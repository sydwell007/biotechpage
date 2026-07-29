import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/marketing/PageHero";
import Reveal from "@/components/motion/Reveal";
import { InfoCard, SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { coreResearchAreas } from "@/data/platformData";

export const metadata: Metadata = {
  title: "Core Research",
  description:
    "Neural signal processing, human-robot control and AI human performance - the research engine behind every Civitas BioTech product.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Core Research"
        title="The research engine behind Civitas BioTech."
        intro="Three research disciplines underpin every product we ship: reading biological signal, safely controlling wearable robotics, and turning both into AI-driven human performance insight."
        chips={["Signal processing", "Human-robot control", "AI performance modeling"]}
        actions={
          <>
            <ButtonLink href="/team" variant="accent">
              See research roles
            </ButtonLink>
            <ButtonLink href="/platform" variant="ghost">
              Platform thesis
            </ButtonLink>
          </>
        }
      />

      <section>
        <div className="container">
          <div className="bannerImage">
            <Image
              src="/images/research-lab-neuro-robotics.png"
              alt="Civitas BioTech neuro-robotics research lab"
              width={1600}
              height={800}
            />
          </div>

          <SectionTitle title="Three research disciplines, one platform" kicker="Core Research">
            Every Civitas BioTech product traces back to progress in one or more of these three areas.
          </SectionTitle>

          <div className="grid3">
            {coreResearchAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 80}>
                <InfoCard {...area} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="callout">
            <b>Research-grade rigor, product-grade delivery.</b> These disciplines feed directly into our{" "}
            <Link href="/roadmap">MVP roadmap</Link> and our longer-term{" "}
            <Link href="/platform#future-research">future research pipeline</Link>.
          </div>
        </div>
      </section>
    </>
  );
}
