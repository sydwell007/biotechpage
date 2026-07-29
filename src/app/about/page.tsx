import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/marketing/PageHero";
import Reveal from "@/components/motion/Reveal";
import { InfoCard, SectionTitle } from "@/components/ui/Card";
import { StatTile } from "@/components/ui/StatTile";
import { companyValues, impactStats, missionStatement, originStory, visionStatement } from "@/data/aboutData";

export const metadata: Metadata = {
  title: "About Civitas BioTech",
  description:
    "Civitas BioTech is engineering non-invasive neural interfaces, wearable robotics and NeuroOS from South Africa - built for global industrial, defense and healthcare markets.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Civitas BioTech"
        title="Engineering-realistic ambition, built in South Africa."
        intro={missionStatement}
        chips={["Non-invasive by design", "Safety-bounded assistance", "Research-grade rigor"]}
        stats={
          <div className="statGrid">
            {impactStats.map((stat, index) => (
              <StatTile key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} tone={index === 0 ? "accent" : undefined} />
            ))}
          </div>
        }
      />

      <section>
        <div className="container grid2">
          <div className="card">
            <div className="sectionKicker">Mission</div>
            <h2>The operating system for human capability</h2>
            <p className="topSpace">{missionStatement}</p>
          </div>
          <div className="card">
            <div className="sectionKicker">Vision</div>
            <h2>Where this platform goes next</h2>
            <p className="topSpace">{visionStatement}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionTitle title="Why Civitas BioTech exists">Our founding thesis, in three parts.</SectionTitle>
          <div className="panel">
            {originStory.map((paragraph, index) => (
              <p key={paragraph.slice(0, 32)} className={index > 0 ? "topSpace" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionTitle title="What we hold ourselves to">Four commitments that shape every product decision.</SectionTitle>
          <div className="grid4">
            {companyValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 70}>
                <InfoCard {...value} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="callout">
            <b>Want to build this with us?</b> See our open roles on the <Link href="/team">Team &amp; Careers</Link>{" "}
            page, or reach out directly via <Link href="/contact">Contact</Link>.
          </div>
        </div>
      </section>
    </>
  );
}
