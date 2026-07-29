"use client";

import { type FormEvent, useState } from "react";
import { BackendNotice } from "@/components/ui/BackendNotice";
import FormConsent from "@/components/forms/FormConsent";
import { useLeadForm } from "@/lib/hooks/useLeadForm";
import { applicationRoleOptions } from "@/data/teamData";

export default function CareerApplicationForm() {
  const { state, message, submit } = useLeadForm("/api/careers/apply");
  const [formKey, setFormKey] = useState(0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const ok = await submit({
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      role: String(formData.get("role") ?? ""),
      portfolioUrl: String(formData.get("portfolioUrl") ?? ""),
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
    <form className="form" onSubmit={handleSubmit} aria-label="Careers application form" key={formKey}>
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
          <label htmlFor="phone">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" placeholder="+27" />
        </div>
        <div>
          <label htmlFor="role">Role of interest</label>
          <select id="role" name="role" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {applicationRoleOptions.map((role) => (
              <option key={role}>{role}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="portfolioUrl">CV, portfolio or LinkedIn link (optional)</label>
        <input id="portfolioUrl" name="portfolioUrl" type="url" placeholder="https://" />
      </div>

      <div>
        <label htmlFor="message">Why Civitas BioTech?</label>
        <textarea id="message" name="message" placeholder="Tell us about your background and why this role interests you." required />
      </div>

      <FormConsent idPrefix="careers" updatesLabel="Keep me informed about future openings. Optional." />

      <div className="buttonRow">
        <button className="btn primary" type="submit" disabled={state === "submitting"}>
          {state === "submitting" ? "Sending..." : "Submit Application"}
        </button>
      </div>

      {state === "success" ? (
        <p className="formStatus" role="status" aria-live="polite">
          {message}
        </p>
      ) : null}
      {state === "fallback" ? <BackendNotice email="careers@civitasbiotech.com" /> : null}
      {state === "error" ? (
        <p className="formError" role="alert">
          {message}
        </p>
      ) : null}
    </form>
  );
}
