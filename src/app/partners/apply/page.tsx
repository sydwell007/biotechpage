import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import { SectionTitle } from "@/components/ui/Card";
import PartnerApplicationForm from "@/components/forms/PartnerApplicationForm";

export const metadata: Metadata = {
  title: "Propose a Pilot Site",
  description: "Propose an industrial pilot site for Civitas BioTech's NeuroBand and ExoAssist prototypes.",
};

export default function PartnersApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Propose a Pilot"
        title="Tell us about your site."
        intro="Share your sector, location and the safety or productivity challenge you want to solve - our team reviews every proposal against the current roadmap stage."
        chips={["~5 minutes", "Reviewed personally", "No obligation"]}
      />

      <section>
        <div className="container split">
          <SectionTitle title="Pilot site proposal" kicker="Partners">
            The more specific you are about the task and risk you want to address, the faster we can assess fit.
          </SectionTitle>
          <div className="panel">
            <PartnerApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}
