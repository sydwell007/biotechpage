import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/marketing/PageHero";
import Reveal from "@/components/motion/Reveal";
import { InfoCard, SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { partnerTypes, pilotProcessSteps } from "@/data/partnersData";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Propose an industrial pilot site, a research collaboration, or a safety and manufacturing partnership with Civitas BioTech.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner With Us"
        title="Build the pilot that proves the platform."
        intro="We are seeking research partners, industrial pilot sites, engineering collaborators and safety advisors to help build Africa-originated human augmentation technology for the global market."
        chips={["Structured pilot agreements", "Safety-first scope", "Real operating data"]}
        actions={
          <>
            <ButtonLink href="/partners/apply" variant="accent">
              Propose a Pilot
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Talk to our team
            </ButtonLink>
          </>
        }
      />

      <section>
        <div className="container">
          <SectionTitle title="Who we partner with" kicker="Partner Types">
            Four categories of partnership, each mapped to a different part of the roadmap.
          </SectionTitle>
          <div className="grid4">
            {partnerTypes.map((partner, index) => (
              <Reveal key={partner.title} delay={index * 70}>
                <InfoCard {...partner} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionTitle title="How a pilot comes together" kicker="Process">
            A deliberately simple, four-step process from proposal to real-world data.
          </SectionTitle>
          <div className="steps">
            {pilotProcessSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 70}>
                <article className="step">
                  <div className="num">{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="bannerImage">
            <Image
              src="/images/civitas-biotech-final-cta.png"
              alt="Partner with Civitas BioTech"
              width={1600}
              height={800}
            />
          </div>
          <div className="cta">
            <div className="sectionKicker">Partner With Civitas BioTech</div>
            <h2>Join the mission to build the future of augmented human capability.</h2>
            <p className="lead ctaLead">
              We are seeking research partners, industrial pilot sites, engineering collaborators and early
              investors to help build Africa-originated human augmentation technology for the global market.
            </p>
            <div className="heroActions">
              <ButtonLink href="/partners/apply" variant="primary">
                Propose a Pilot
              </ButtonLink>
              <ButtonLink href="/investors" variant="ghost">
                View Investor Thesis
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
