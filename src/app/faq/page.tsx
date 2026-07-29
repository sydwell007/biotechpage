import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import { faqs } from "@/data/faqData";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about Civitas BioTech's products, roadmap stage, safety approach, markets, hiring and privacy.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Quick answers, no jargon."
        intro="Everything partners, investors, researchers and future team members ask us most often."
      />

      <section>
        <div className="container">
          <div className="faqGrid">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
