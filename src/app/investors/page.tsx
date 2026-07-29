import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/marketing/PageHero";
import Reveal from "@/components/motion/Reveal";
import { SectionTitle } from "@/components/ui/Card";
import { MetricRow } from "@/components/ui/MetricTile";
import InvestorPackForm from "@/components/forms/InvestorPackForm";
import { investorFaqs, investorMetrics, useOfFundsPriorities } from "@/data/investorData";

export const metadata: Metadata = {
  title: "Investor Relations",
  description:
    "Civitas BioTech's investor thesis: hardware, SaaS, human-performance data and a BioAPI developer ecosystem. Request our investor pack.",
};

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor Thesis"
        title="Civitas BioTech can become the platform layer between humans, AI and machines."
        intro="The long-term opportunity is not just hardware. It is the combination of devices, NeuroOS software, human performance data and a developer ecosystem for future prosthetics, robotics, mobility and healthcare applications."
        chips={["Hardware", "SaaS", "Data", "Platform"]}
        stats={<MetricRow metrics={investorMetrics} />}
      />

      <section>
        <div className="container">
          <div className="bannerImage">
            <Image
              src="/images/investor-platform.png"
              alt="Civitas BioTech investor platform - human, AI and machine layers"
              width={1600}
              height={800}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionTitle title="Where capital goes first" kicker="Use of Funds">
            Directional priorities, not a precise split - refined further in the full investor pack.
          </SectionTitle>
          <div className="grid4">
            {useOfFundsPriorities.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <article className="card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionTitle title="Investor questions" kicker="Before you request the pack">
            Straight answers to the questions we hear most from investors.
          </SectionTitle>
          <div className="faqGrid">
            {investorFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="request-pack">
        <div className="container split">
          <SectionTitle title="Request the investor pack" kicker="Get in touch">
            Share a few details and our team will follow up personally with the current deck, roadmap detail and a
            call to discuss fit.
          </SectionTitle>
          <div className="panel">
            <InvestorPackForm />
          </div>
        </div>
      </section>
    </>
  );
}
