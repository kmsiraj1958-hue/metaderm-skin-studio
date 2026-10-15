"use client";

import { useState, type FormEvent } from "react";
import { isServiceSlug, services, type ServiceSlug } from "@/lib/services";
import { clinicName } from "@/lib/site";

type Enquiry = {
  name: string;
  phone: string;
  email: string;
  service: ServiceSlug | "";
  message: string;
};

type FieldName = keyof Enquiry;

const emptyEnquiry: Enquiry = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

type AppointmentFormProps = {
  initialService: ServiceSlug | "";
};

export function AppointmentForm({ initialService }: AppointmentFormProps) {
  const [enquiry, setEnquiry] = useState<Enquiry>({
    ...emptyEnquiry,
    service: initialService,
  });
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [prepared, setPrepared] = useState<Enquiry | null>(null);
  const [copyNote, setCopyNote] = useState("");

  function update<K extends FieldName>(field: K, value: Enquiry[K]) {
    setEnquiry((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Record<FieldName, string>> = {};

    if (enquiry.name.trim().length < 2) {
      nextErrors.name = "Enter your name.";
    }
    if (enquiry.phone.trim().length < 6) {
      nextErrors.phone = "Enter a phone number.";
    }
    if (
      enquiry.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email.trim())
    ) {
      nextErrors.email = "Enter a valid email, or leave this blank.";
    }
    if (!services.some((service) => service.slug === enquiry.service)) {
      nextErrors.service = "Choose a service.";
    }

    setErrors(nextErrors);
    setCopyNote("");

    if (Object.keys(nextErrors).length > 0) {
      setPrepared(null);
      return;
    }

    setPrepared({
      name: enquiry.name.trim(),
      phone: enquiry.phone.trim(),
      email: enquiry.email.trim(),
      service: enquiry.service,
      message: enquiry.message.trim(),
    });
  }

  async function copyEnquiry() {
    if (!prepared) {
      return;
    }

    const serviceName =
      services.find((service) => service.slug === prepared.service)?.name ??
      prepared.service;
    const text = [
      `${clinicName} appointment enquiry`,
      `Name: ${prepared.name}`,
      `Phone: ${prepared.phone}`,
      `Email: ${prepared.email || "Not provided"}`,
      `Service: ${serviceName}`,
      `Message: ${prepared.message || "Not provided"}`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopyNote("Enquiry text copied. It has not been sent to the clinic.");
    } catch {
      setCopyNote("Select the enquiry below. Copy is unavailable in this browser.");
    }
  }

  const preparedService = services.find(
    (service) => service.slug === prepared?.service,
  )?.name;

  return (
    <form
      className="enquiry-form"
      method="post"
      action="/appointment"
      onSubmit={onSubmit}
      noValidate
    >
      {Object.keys(errors).length > 0 ? (
        <p className="form-alert" role="alert">
          Check the highlighted fields before preparing the enquiry.
        </p>
      ) : null}

      <div className="field">
        <label htmlFor="enquiry-name">Name</label>
        <input
          id="enquiry-name"
          name="name"
          autoComplete="name"
          value={enquiry.name}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "enquiry-name-error" : undefined}
          onChange={(event) => update("name", event.target.value)}
        />
        {errors.name ? (
          <p id="enquiry-name-error" className="field-error">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="enquiry-phone">Phone</label>
        <input
          id="enquiry-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={enquiry.phone}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "enquiry-phone-error" : undefined}
          onChange={(event) => update("phone", event.target.value)}
        />
        {errors.phone ? (
          <p id="enquiry-phone-error" className="field-error">
            {errors.phone}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="enquiry-email">Email (optional)</label>
        <input
          id="enquiry-email"
          name="email"
          type="email"
          autoComplete="email"
          value={enquiry.email}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "enquiry-email-error" : undefined}
          onChange={(event) => update("email", event.target.value)}
        />
        {errors.email ? (
          <p id="enquiry-email-error" className="field-error">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="enquiry-service">Service</label>
        <select
          id="enquiry-service"
          name="service"
          value={enquiry.service}
          aria-invalid={Boolean(errors.service)}
          aria-describedby={errors.service ? "enquiry-service-error" : undefined}
          onChange={(event) => {
            const value = event.target.value;
            update("service", isServiceSlug(value) ? value : "");
          }}
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.name}
            </option>
          ))}
        </select>
        {errors.service ? (
          <p id="enquiry-service-error" className="field-error">
            {errors.service}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="enquiry-message">Message (optional)</label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={5}
          value={enquiry.message}
          onChange={(event) => update("message", event.target.value)}
        />
      </div>

      <button className="button" type="submit">
        Prepare enquiry
      </button>

      {prepared ? (
        <div className="enquiry-result" role="status">
          <h2>Enquiry prepared, not sent</h2>
          <p>
            This website does not send the enquiry. Call the clinic on the
            published numbers, or copy the enquiry and share it yourself.
          </p>
          <dl>
            <div>
              <dt>Name</dt>
              <dd>{prepared.name}</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>{prepared.phone}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>{prepared.email || "Not provided"}</dd>
            </div>
            <div>
              <dt>Service</dt>
              <dd>{preparedService}</dd>
            </div>
            <div>
              <dt>Message</dt>
              <dd>{prepared.message || "Not provided"}</dd>
            </div>
          </dl>
          <button className="button button-secondary" type="button" onClick={copyEnquiry}>
            Copy enquiry text
          </button>
          {copyNote ? <p className="copy-note">{copyNote}</p> : null}
        </div>
      ) : null}
    </form>
  );
}
