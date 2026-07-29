"use client";

import { type FormEvent, useState } from "react";
import { BackendNotice } from "@/components/ui/BackendNotice";
import FormConsent from "@/components/forms/FormConsent";
import { useLeadForm } from "@/lib/hooks/useLeadForm";

const partnerTypes = [
  "Mining",
  "Warehousing & Logistics",
  "Healthcare & Rehabilitation",
  "Defense & Public Safety",
  "Research Institution",
  "Other",
] as const;

export default function PartnerApplicationForm() {
  const { state, message, submit } = useLeadForm("/api/partners/apply");
  const [formKey, setFormKey] = useState(0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const ok = await submit({
      organizationName: String(formData.get("organizationName") ?? ""),
      contactName: String(formData.get("contactName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      partnerType: String(formData.get("partnerType") ?? ""),
      location: String(formData.get("location") ?? ""),
      siteDetails: String(formData.get("siteDetails") ?? ""),
      message: String(formData.get("message") ?? ""),
      consentGiven: formData.get("consent") === "on",
      marketingOptIn: formData.get("marketingOptIn") === "on",
    });

    if (ok) {
      form.reset();
      setFormKey((key) => key + 1);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit} aria-label="Pilot site proposal form" key={formKey}>
      <div className="row2">
        <div>
          <label htmlFor="organizationName">Organisation</label>
          <input id="organizationName" name="organizationName" type="text" placeholder="Company or institution name" required />
        </div>
        <div>
          <label htmlFor="contactName">Contact name</label>
          <input id="contactName" name="contactName" type="text" placeholder="Your name" required />
        </div>
      </div>

      <div className="row2">
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@company.com" required />
        </div>
        <div>
          <label htmlFor="phone">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" placeholder="+27" />
        </div>
      </div>

      <div className="row2">
        <div>
          <label htmlFor="partnerType">Sector</label>
          <select id="partnerType" name="partnerType" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {partnerTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="location">Site location</label>
          <input id="location" name="location" type="text" placeholder="City, Province / Country" required />
        </div>
      </div>

      <div>
        <label htmlFor="siteDetails">Site details (optional)</label>
        <input
          id="siteDetails"
          name="siteDetails"
          type="text"
          placeholder="Workforce size, task type, current safety challenges"
        />
      </div>

      <div>
        <label htmlFor="message">Tell us about the pilot opportunity</label>
        <textarea
          id="message"
          name="message"
          placeholder="What tasks or risks would ExoAssist or NeuroBand address at your site?"
          required
        />
      </div>

      <FormConsent idPrefix="partner" updatesLabel="Keep me informed about pilot program openings. Optional." />

      <div className="buttonRow">
        <button className="btn primary" type="submit" disabled={state === "submitting"}>
          {state === "submitting" ? "Sending..." : "Submit Pilot Proposal"}
        </button>
      </div>

      {state === "success" ? (
        <p className="formStatus" role="status" aria-live="polite">
          {message}
        </p>
      ) : null}
      {state === "fallback" ? <BackendNotice email="partners@civitasbiotech.com" /> : null}
      {state === "error" ? (
        <p className="formError" role="alert">
          {message}
        </p>
      ) : null}
    </form>
  );
}
