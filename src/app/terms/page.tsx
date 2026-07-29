import type { Metadata } from "next";
import LegalPage from "@/components/marketing/LegalPage";
import { legalUpdatedDate, termsSections } from "@/data/legalData";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the Civitas BioTech website, pilot programs and investor communications.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="The terms governing use of this website, our pilot and partnership programs, and any investor communications."
      updated={legalUpdatedDate}
      sections={termsSections}
    />
  );
}
