import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import Reveal from "@/components/motion/Reveal";
import { InfoCard, SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import CareerApplicationForm from "@/components/forms/CareerApplicationForm";
import { teamRoles, teamValues } from "@/data/teamData";

export const metadata: Metadata = {
  title: "Team & Careers",
  description:
    "Civitas BioTech is hiring a multidisciplinary engineering team across systems, biomedical, firmware, mechanical, AI/ML, software, safety and industrial design.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team & Careers"
        title="Built by a multidisciplinary engineering team."
        intro="Civitas BioTech is assembling the systems, biomedical, firmware, mechanical, AI and design talent needed to take the platform from lab bench to pilot deployment."
        chips={["8 core disciplines", "Safety-first culture", "South Africa-based"]}
        actions={
          <ButtonLink href="#apply" variant="accent">
            Apply now
          </ButtonLink>
        }
      />

      <section>
        <div className="container">
          <SectionTitle title="Why join Civitas BioTech" kicker="Culture">
            The principles that shape how we work, not just what we build.
          </SectionTitle>
          <div className="grid3">
            {teamValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 70}>
                <article className="card">
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionTitle title="Open disciplines" kicker="Required Team">
            We hire for the discipline first - specific openings are confirmed once you apply.
          </SectionTitle>
          <div className="grid4">
            {teamRoles.map((role, index) => (
              <Reveal key={role.title} delay={index * 60}>
                <InfoCard icon={role.icon} title={role.title} text={role.text} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="apply">
        <div className="container split">
          <SectionTitle title="Apply to join the team" kicker="Careers">
            Tell us which discipline fits you best. We personally review every application.
          </SectionTitle>
          <div className="panel">
            <CareerApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}
