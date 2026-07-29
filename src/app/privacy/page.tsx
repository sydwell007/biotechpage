import type { Metadata } from "next";
import LegalPage from "@/components/marketing/LegalPage";
import { legalUpdatedDate, privacySections } from "@/data/legalData";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Civitas BioTech collects, uses and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="How we collect, use and protect information across this website, our forms, and our research and pilot programs."
      updated={legalUpdatedDate}
      sections={privacySections}
    />
  );
}
