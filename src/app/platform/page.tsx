import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/marketing/PageHero";
import Reveal from "@/components/motion/Reveal";
import { InfoCard, SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { ecosystemNodes, futureResearchPipeline, humanAiMachineLoop } from "@/data/platformData";

export const metadata: Metadata = {
  title: "The Platform Thesis",
  description:
    "Civitas BioTech combines biological signals, wearable robotics and AI into a closed-loop system - NeuroBand, NeuroOS, ExoAssist and BioAPI.",
};

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="The Platform Thesis"
        title="The operating system for human capability."
        intro="Civitas BioTech combines biological signals, wearable robotics and AI into a closed-loop system that helps humans work, move and perform with greater safety and capability."
        chips={["NeuroBand", "NeuroOS", "ExoAssist", "BioAPI"]}
        actions={
          <>
            <ButtonLink href="/products" variant="accent">
              See the products
            </ButtonLink>
            <ButtonLink href="/investors" variant="ghost">
              Investor thesis
            </ButtonLink>
          </>
        }
      />

      <section>
        <div className="container split">
          <SectionTitle title="Signal in. Safe action out." kicker="Four platform layers">
            Each layer of the platform has a single, well-defined job - which is what makes the whole system
            auditable, safe and extensible as new devices join the ecosystem.
          </SectionTitle>
          <div className="panel ecosystem">
            {ecosystemNodes.map((node) => (
              <div className="node" key={node.title}>
                <strong>{node.title}</strong>
                <span>{node.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="investorPanel">
            <SectionTitle title="A closed-loop architecture for human augmentation" kicker="Human → AI → Machine Loop">
              The long-term Civitas BioTech platform connects biological signals, AI interpretation, wearable robotic
              response and feedback learning into one scalable system.
            </SectionTitle>
            <div className="grid3">
              {humanAiMachineLoop.map((node) => (
                <div className="node" key={node.title}>
                  <strong>{node.title}</strong>
                  <span>{node.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="future-research">
        <div className="container">
          <div className="panel">
            <SectionTitle title="Researching the next evolution of human capability" kicker="Future Research Pipeline">
              These concepts are positioned as research and long-term development areas, allowing Civitas BioTech to
              communicate ambition while keeping the current product roadmap credible and engineering-realistic.
            </SectionTitle>
            <div className="grid3">
              {futureResearchPipeline.map((node, index) => (
                <Reveal key={node.title} delay={index * 60}>
                  <InfoCard icon={node.icon} title={node.title} text={node.text} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="callout">
            <b>See it in production terms:</b> the full 0-24 month build sequence lives on our{" "}
            <Link href="/roadmap">Roadmap</Link> page.
          </div>
        </div>
      </section>
    </>
  );
}
