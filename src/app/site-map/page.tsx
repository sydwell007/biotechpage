import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/marketing/PageHero";
import { footerLinkGroups } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Site Map",
  description: "Every page on the Civitas BioTech website, organized by section.",
};

export default function SiteMapPage() {
  return (
    <>
      <PageHero eyebrow="Site Map" title="Every page, in one place." intro="Use this page to jump directly to any section of the site." />

      <section>
        <div className="container">
          <div className="grid3">
            {footerLinkGroups.map((group) => (
              <article className="card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="miniLinks footColumn topSpace">
                  {group.links.map((link) => (
                    <Link href={link.href} key={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
