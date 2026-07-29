"use client";

import { type FormEvent, useState } from "react";
import { BackendNotice } from "@/components/ui/BackendNotice";
import FormConsent from "@/components/forms/FormConsent";
import { useLeadForm } from "@/lib/hooks/useLeadForm";

const investorTypes = ["Individual", "Venture Capital", "Angel Syndicate", "Foundation", "Corporate", "Government", "Other"] as const;

export default function InvestorPackForm() {
  const { state, message, submit } = useLeadForm("/api/investors/request-pack");
  const [formKey, setFormKey] = useState(0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const ok = await submit({
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      organization: String(formData.get("organization") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      investorType: String(formData.get("investorType") ?? ""),
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
    <form className="form" onSubmit={handleSubmit} aria-label="Investor pack request form" key={formKey}>
      <div className="row2">
        <div>
          <label htmlFor="fullName">Full name</label>
          <input id="fullName" name="fullName" type="text" placeholder="Your name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>
      </div>

      <div className="row2">
        <div>
          <label htmlFor="organization">Organisation (optional)</label>
          <input id="organization" name="organization" type="text" placeholder="Fund / firm / company" />
        </div>
        <div>
          <label htmlFor="investorType">Investor type</label>
          <select id="investorType" name="investorType" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {investorTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="phone">Phone (optional)</label>
        <input id="phone" name="phone" type="tel" placeholder="+27" />
      </div>

      <div>
        <label htmlFor="message">Anything specific you&apos;d like covered? (optional)</label>
        <textarea id="message" name="message" placeholder="Roadmap detail, use of funds, target markets, technical due diligence..." />
      </div>

      <FormConsent idPrefix="investor" updatesLabel="Keep me informed about funding rounds and major milestones. Optional." />

      <div className="buttonRow">
        <button className="btn accent" type="submit" disabled={state === "submitting"}>
          {state === "submitting" ? "Sending..." : "Request Investor Pack"}
        </button>
      </div>

      {state === "success" ? (
        <p className="formStatus" role="status" aria-live="polite">
          {message}
        </p>
      ) : null}
      {state === "fallback" ? <BackendNotice email="invest@civitasbiotech.com" /> : null}
      {state === "error" ? (
        <p className="formError" role="alert">
          {message}
        </p>
      ) : null}
    </form>
  );
}
