import Link from "next/link";

export default function Brand({ tagline = "Human Augmentation Platform" }: { tagline?: string }) {
  return (
    <Link className="brand" href="/" aria-label="Civitas BioTech Home">
      <span className="logo" aria-hidden="true">
        <svg viewBox="0 0 40 40" width="24" height="24" fill="none" aria-hidden="true">
          <circle cx="20" cy="9" r="3.4" fill="currentColor" />
          <circle cx="9" cy="27" r="3.4" fill="currentColor" />
          <circle cx="31" cy="27" r="3.4" fill="currentColor" />
          <path
            d="M20 12.4 12 24.5 M20 12.4 28 24.5 M12.4 27 27.6 27"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="brandCopy">
        <b>Civitas</b> BioTech
        <small>{tagline}</small>
      </span>
    </Link>
  );
}
