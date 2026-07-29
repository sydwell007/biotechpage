import Image from "next/image";
import { ArrowDown, CheckCircle2, Radio } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { heroBadgeStats } from "@/data/aboutData";

export default function HomeHero() {
  return (
    <header className="homeHero">
      <div className="container">
        <div className="homeHeroFrame">
          <Image
            className="homeHeroImage"
            src="/images/hero-human-augmentation.png"
            alt="Futuristic visualization of human augmentation through neural interfaces and wearable robotics"
            fill
            priority
            sizes="(max-width: 640px) calc(100vw - 20px), (max-width: 1400px) calc(100vw - 32px), 1360px"
          />
          <div className="homeHeroShade" aria-hidden="true" />
          <div className="homeHeroGrid" aria-hidden="true" />

          <div className="heroFloatCard floatOne">
            <small>Neural Signal</small>
            <strong>EEG / EMG Stream</strong>
          </div>
          <div className="heroFloatCard floatTwo">
            <small>ExoAssist</small>
            <strong>Human Strength Support</strong>
          </div>

          <div className="homeHeroContent">
            <span className="badge">
              <Radio size={15} aria-hidden="true" />
              Neurotechnology · Wearable Robotics · AI
            </span>
            <h1>
              Building the <span className="gradientText">Human Augmentation</span> Platform.
            </h1>
            <p>
              Civitas BioTech is developing non-invasive neural interfaces, wearable robotic systems and
              NeuroOS - an AI platform that connects human intent to machine capability.
            </p>
            <div className="heroActions" role="group" aria-label="Get involved">
              <ButtonLink href="/products" variant="primary">
                Explore Products
              </ButtonLink>
              <ButtonLink href="/investors" variant="ghost" className="heroTextLink">
                Investor Thesis
                <ArrowDown size={16} aria-hidden="true" />
              </ButtonLink>
            </div>
            <div className="homeHeroProof" aria-label="Platform highlights">
              {["Non-invasive by design", "Safety-bounded assistance", "Engineering-realistic roadmap"].map(
                (item) => (
                  <span key={item}>
                    <CheckCircle2 size={15} aria-hidden="true" />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="homeHeroSignal" aria-label="Program status">
            <span className="signalDot" aria-hidden="true" />
            <div>
              <b>MVP roadmap in progress</b>
              <span>0-12 month build · NeuroBand → ExoAssist → NeuroOS</span>
            </div>
          </div>

          <div className="homeHeroMetrics">
            {heroBadgeStats.map((stat) => (
              <div className="statTile" key={stat.label}>
                <span className="statValue">{stat.value}</span>
                <span className="statLabel">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
