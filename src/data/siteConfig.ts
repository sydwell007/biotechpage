export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://biotech.civitasholdings.co.za";

export const siteName = "Civitas BioTech";

export const siteTagline = "The Human Augmentation Platform";

export const siteDescription =
  "Civitas BioTech is building the next generation of human augmentation systems through non-invasive neural interfaces, wearable robotics, and NeuroOS - an AI platform that connects human intent to machine capability.";

export type NavLink = { href: string; label: string };
export type HeaderNavItem =
  | { kind: "link"; label: string; href: string }
  | { kind: "menu"; label: string; links: NavLink[] };

export const navLinks: NavLink[] = [
  { href: "/platform", label: "Platform" },
  { href: "/products", label: "Products" },
  { href: "/research", label: "Research" },
  { href: "/markets", label: "Markets" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/investors", label: "Investors" },
  { href: "/team", label: "Team" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

export const headerNavItems: HeaderNavItem[] = [
  { kind: "link", href: "/platform", label: "Platform" },
  {
    kind: "menu",
    label: "Products",
    links: [
      { href: "/products", label: "Product divisions" },
      { href: "/research", label: "Core research & future pipeline" },
      { href: "/roadmap", label: "MVP roadmap" },
    ],
  },
  { kind: "link", href: "/markets", label: "Markets" },
  {
    kind: "menu",
    label: "Company",
    links: [
      { href: "/about", label: "About Civitas BioTech" },
      { href: "/team", label: "Team & careers" },
      { href: "/faq", label: "Frequently asked questions" },
    ],
  },
  {
    kind: "menu",
    label: "Invest & Partner",
    links: [
      { href: "/investors", label: "Investor relations" },
      { href: "/partners", label: "Partner with us" },
      { href: "/partners/apply", label: "Propose a pilot site" },
    ],
  },
  { kind: "link", href: "/contact", label: "Contact" },
];

export const footerLinkGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "Platform",
    links: [
      { href: "/platform", label: "Platform Thesis" },
      { href: "/products", label: "Products" },
      { href: "/research", label: "Research" },
      { href: "/markets", label: "Markets" },
      { href: "/roadmap", label: "Roadmap" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { href: "/partners", label: "Partner With Us" },
      { href: "/partners/apply", label: "Propose a Pilot" },
      { href: "/investors", label: "Investor Relations" },
      { href: "/team", label: "Team & Careers" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/site-map", label: "Site Map" },
    ],
  },
];

export const contactEmails = [
  { label: "General Enquiries", email: "info@civitasbiotech.com" },
  { label: "Partnerships & Pilots", email: "partners@civitasbiotech.com" },
  { label: "Investors", email: "invest@civitasbiotech.com" },
  { label: "Careers", email: "careers@civitasbiotech.com" },
] as const;

export const contactPhone = "+27 21 555 0142";

export const primaryCtas = {
  products: { href: "/products", label: "Explore Products" },
  investors: { href: "/investors", label: "Investor Thesis" },
  partner: { href: "/partners", label: "Partner With Us" },
  apply: { href: "/partners/apply", label: "Propose a Pilot" },
  contact: { href: "/contact", label: "Partner With Us" },
};
