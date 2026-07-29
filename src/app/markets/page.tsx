import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import Reveal from "@/components/motion/Reveal";
import MarketCard from "@/components/marketing/MarketCard";
import { MiniList, SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { marketEntryStrategy, targetMarkets } from "@/data/marketsData";
import { valueOfferingBullets } from "@/data/platformData";

export const metadata: Metadata = {
  title: "Markets",
  description:
    "Civitas BioTech enters through mining and warehousing, where fatigue and injury reduction map directly to measurable cost savings, before expanding into healthcare and defense.",
};

export default function MarketsPage() {
  return (
    <>
      <PageHero
        eyebrow="Target Markets"
        title="Industrial first. Medical next. Consumer later."
        intro="We enter through the markets where fatigue and injury reduction map directly to measurable cost savings, before expanding into healthcare, defense and future consumer applications."
        chips={["Mining", "Warehousing", "Healthcare", "Defense & Safety"]}
        actions={
          <>
            <ButtonLink href="/partners/apply" variant="accent">
              Propose a Pilot
            </ButtonLink>
            <ButtonLink href="/products" variant="ghost">
              See the products
            </ButtonLink>
          </>
        }
      />

      <section>
        <div className="container">
          <SectionTitle title="Where we deploy first" kicker="Target Customers">
            Each market horizon reflects how close the required safety and regulatory validation is to today.
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

      <section>
        <div className="container">
          <SectionTitle title="A deliberate market-entry sequence" kicker="Go-to-market">
            We don&apos;t chase every market at once - the sequencing is a credibility strategy, not just a growth
            plan.
          </SectionTitle>
          <div className="steps">
            {marketEntryStrategy.map((phase, index) => (
              <Reveal key={phase.title} delay={index * 70}>
                <article className="step">
                  <div className="num">{index + 1}</div>
                  <h3>{phase.title}</h3>
                  <p>{phase.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container grid2">
          <div className="card">
            <div className="sectionKicker">Value Offering</div>
            <h2>For customers, Civitas sells outcomes - not gadgets.</h2>
            <p className="topSpace">
              The commercial value is measured through reduced injury risk, better productivity, improved mobility
              support and a new layer of human-machine interaction.
            </p>
          </div>
          <div className="card">
            <h3>Core Customer Benefits</h3>
            <MiniList items={valueOfferingBullets} />
          </div>
        </div>
      </section>
    </>
  );
}
