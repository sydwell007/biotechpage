import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import PageHero from "@/components/marketing/PageHero";
import { SectionTitle } from "@/components/ui/Card";
import ContactForm from "@/components/forms/ContactForm";
import { contactEmails, contactPhone } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach the Civitas BioTech team - partnerships, investors, research, press and careers.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about what you want to build."
        intro="Tell us who you are and what you have in mind - partnership, investment, research collaboration or a role on the team - and we'll route it to the right person."
        chips={["Personally reviewed", "Replies within 2 business days"]}
      />

      <section>
        <div className="container split">
          <div>
            <SectionTitle title="Reach the right team" kicker="Contact Details">
              General enquiries reach our core team directly; role-specific addresses route faster.
            </SectionTitle>
            <div className="grid2">
              {contactEmails.map((contact) => (
                <article className="card" key={contact.email}>
                  <h3>{contact.label}</h3>
                  <p>
                    <a href={`mailto:${contact.email}`} className="contactLink">
                      <Mail size={15} aria-hidden="true" />
                      {contact.email}
                    </a>
                  </p>
                </article>
              ))}
            </div>
            <p className="note topSpace contactLink">
              <Phone size={13} aria-hidden="true" />
              {contactPhone}
            </p>
          </div>
          <div className="panel">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
