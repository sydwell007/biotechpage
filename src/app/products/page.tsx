import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/marketing/PageHero";
import Reveal from "@/components/motion/Reveal";
import ProductCard from "@/components/marketing/ProductCard";
import { SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { advancedProducts, coreProducts } from "@/data/productsData";

export const metadata: Metadata = {
  title: "Products",
  description:
    "NeuroBand, ExoAssist and NeuroOS - Civitas BioTech's core product divisions - plus the advanced systems in our engineering pipeline.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Divisions"
        title="Three products. One human-machine platform."
        intro="The first commercial path starts with non-invasive, industrial-first products before advancing into healthcare and future neural integration."
        chips={["Non-invasive", "Safety-bounded", "Industrial-first"]}
        actions={
          <>
            <ButtonLink href="/roadmap" variant="accent">
              See the roadmap
            </ButtonLink>
            <ButtonLink href="/markets" variant="ghost">
              Target markets
            </ButtonLink>
          </>
        }
      />

      <section>
        <div className="container">
          <SectionTitle title="Core product divisions" kicker="Shipping toward the MVP">
            NeuroBand, ExoAssist and NeuroOS work together as one integrated system - a wearable interface, a wearable
            actuator, and the AI layer connecting them.
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

      <section id="advanced-systems">
        <div className="container">
          <div className="bannerImage">
            <Image
              src="/images/advanced-systems-banner.png"
              alt="Civitas BioTech advanced systems and future capabilities"
              width={1600}
              height={800}
            />
          </div>

          <SectionTitle title="Advanced systems & future capabilities" kicker="Engineering pipeline">
            A staged innovation pipeline that starts with practical wearable robotics and non-invasive neural
            interfaces, then expands toward tactical, mobility and AI-collaboration systems for extreme environments.
          </SectionTitle>
          <div className="grid3">
            {advancedProducts.map((product, index) => (
              <Reveal key={product.slug} delay={index * 70}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="callout">
            <b>Curious about the science underneath?</b> Visit <Link href="/research">Core Research</Link> for the
            engineering detail behind every product.
          </div>
        </div>
      </section>
    </>
  );
}
