import type { Metadata } from "next";
import Link from "next/link";
import HomeHero from "@/components/marketing/HomeHero";
import Reveal from "@/components/motion/Reveal";
import ProductCard from "@/components/marketing/ProductCard";
import MarketCard from "@/components/marketing/MarketCard";
import { InfoCard, SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { MetricRow } from "@/components/ui/MetricTile";
import { coreProducts } from "@/data/productsData";
import { ecosystemNodes } from "@/data/platformData";
import { targetMarkets } from "@/data/marketsData";
import { roadmapSteps } from "@/data/roadmapData";
import { investorMetrics } from "@/data/investorData";
import { whyNowCards } from "@/data/aboutData";
import { faqs } from "@/data/faqData";

export const metadata: Metadata = {
  title: "The Human Augmentation Platform",
};

export default function Home() {
  return (
    <>
      <HomeHero />

      <div className="marquee" aria-label="Industries Civitas BioTech is built for">
        <div className="marqueeTrack">
          {Array.from({ length: 2 }).flatMap((_, loop) =>
            ["Mining", "Warehousing & Logistics", "Healthcare", "Defense & Public Safety", "Research Institutions", "Industrial Safety Teams"].map(
              (item) => <span key={`${loop}-${item}`}>{item} <i aria-hidden="true" /></span>
            )
          )}
        </div>
      </div>

      <section id="why-now">
        <div className="container">
          <SectionTitle title="Why human augmentation, why now" action={<span className="pillAccent">Engineering-realistic ambition</span>}>
            The technology to read human intent and safely assist human movement already exists - it just hasn&apos;t
            reached the workers who need it most.
          </SectionTitle>

          <div className="grid3">
            {whyNowCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 80}>
                <InfoCard {...card} />
              </Reveal>
            ))}
          </div>

          <div className="callout topSpace">
            <b>The Civitas BioTech promise:</b> every product ships non-invasive first, safety-bounded always, and
            engineering-realistic about what is shipping now versus what is future research.
          </div>
        </div>
      </section>

      <section id="platform">
        <div className="container split">
          <SectionTitle title="The operating system for human capability" action={<ButtonLink href="/platform">Explore the platform</ButtonLink>}>
            Civitas BioTech combines biological signals, wearable robotics and AI into a closed-loop system that helps
            humans work, move and perform with greater safety and capability.
          </SectionTitle>

          <div className="grid4">
            {ecosystemNodes.map((node, index) => (
              <Reveal key={node.title} delay={index * 70}>
                <InfoCard icon={node.icon} title={node.title} text={node.text} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="products">
        <div className="container">
          <SectionTitle title="Three products. One human-machine platform." action={<ButtonLink href="/products" variant="primary">View all products</ButtonLink>}>
            The first commercial path starts with non-invasive, industrial-first products before advancing into
            healthcare and future neural integration.
          </SectionTitle>

          <div className="grid3">
            {coreProducts.map((product, index) => (
              <Reveal key={product.slug} delay={index * 80}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap">
        <div className="container">
          <SectionTitle title="From prototype to pilot-ready demonstration" action={<ButtonLink href="/roadmap">See the full roadmap</ButtonLink>}>
            A credible, non-invasive MVP roadmap built to be demonstrated to investors, industrial partners and
            research collaborators.
          </SectionTitle>

          <div className="steps">
            {roadmapSteps.slice(0, 3).map((step, index) => (
              <Reveal key={step.time} delay={index * 80}>
                <article className="step">
                  <div className="num">{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <div className="pillRow">
                    <span className="pill pillActive">{step.time}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="markets">
        <div className="container">
          <SectionTitle title="Industrial first. Medical next. Consumer later." action={<ButtonLink href="/markets">Explore target markets</ButtonLink>}>
            We enter through the markets where fatigue and injury reduction map directly to measurable cost savings.
          </SectionTitle>

          <div className="grid4">
            {targetMarkets.map((market, index) => (
              <Reveal key={market.title} delay={index * 70}>
                <MarketCard market={market} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="invest">
        <div className="container">
          <div className="innerHeroCard investorBand">
            <div className="heroOverlay" aria-hidden="true" />
            <div className="innerHeroBlob" aria-hidden="true" />
            <div className="heroInner">
              <span className="badge">For investors & sponsors</span>
              <h2 className="h1 innerH1">Civitas BioTech can become the platform layer between humans, AI and machines.</h2>
              <p className="heroSub">
                Hardware, SaaS, data and a developer ecosystem - not just wearable devices. Review the full investor
                thesis and request our investor pack.
              </p>
              <div className="heroActions">
                <ButtonLink href="/investors" variant="accent">
                  Investor Relations
                </ButtonLink>
                <ButtonLink href="/partners">Partner With Us</ButtonLink>
              </div>
              <MetricRow metrics={investorMetrics} />
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="container">
          <SectionTitle title="Frequently Asked Questions" action={<ButtonLink href="/faq">All FAQs</ButtonLink>}>
            Quick answers for partners, investors, researchers and future team members.
          </SectionTitle>

          <div className="faqGrid">
            {faqs.slice(0, 4).map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="callout">
            <b>Ready to get involved?</b> Whether you&apos;re an industrial partner, an investor, a researcher, or a
            future team member, our <Link href="/contact">contact page</Link> routes your message to the right
            Civitas BioTech team.
          </div>
        </div>
      </section>
    </>
  );
}
