import type { Metadata } from "next";
import { Suspense } from "react";
import { AppointmentForm } from "@/components/appointment-form";
import { ContactDetails } from "@/components/contact-details";
import { isServiceSlug, type ServiceSlug } from "@/lib/services";
import { clinicName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    `Prepare an appointment enquiry for ${clinicName}, or call the clinic directly.`,
};

type AppointmentPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default function AppointmentPage({ searchParams }: AppointmentPageProps) {
  return (
    <main className="page" id="main">
      <section className="page-intro">
        <div className="wrap">
          <p className="kicker">Book Appointment</p>
          <h1>Request a consultation.</h1>
          <p className="intro-lead">
            This form prepares an enquiry. It does not send it. Call the clinic
            on the numbers below, or open directions for the address. Email and
            social links have not been published.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap appointment-grid">
          <div>
            <h2>Clinic details</h2>
            <ContactDetails />
          </div>
          <Suspense
            fallback={<p className="form-status">Preparing the enquiry form.</p>}
          >
            <AppointmentEnquiry searchParams={searchParams} />
          </Suspense>
        </div>
      </section>
    </main>
  );
}

async function AppointmentEnquiry({
  searchParams,
}: {
  searchParams: AppointmentPageProps["searchParams"];
}) {
  const params = await searchParams;
  const requested = Array.isArray(params.service)
    ? params.service[0]
    : params.service;
  const initialService: ServiceSlug | "" =
    requested && isServiceSlug(requested) ? requested : "";

  return <AppointmentForm key={initialService || "none"} initialService={initialService} />;
}
