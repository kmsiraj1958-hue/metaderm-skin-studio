import type { Metadata } from "next";
import Link from "next/link";
import { ContactDetails } from "@/components/contact-details";
import { clinicName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Address and phone numbers for ${clinicName} in Lahore, Pakistan.`,
};

export default function ContactPage() {
  return (
    <main className="page" id="main">
      <section className="page-intro">
        <div className="wrap">
          <p className="kicker">Contact Us</p>
          <h1>Call or visit the clinic.</h1>
          <p className="intro-lead">
            The address and phone numbers below are confirmed by {clinicName}.
            Email and social links have not been published.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap appointment-grid">
          <div>
            <h2>Clinic details</h2>
            <ContactDetails />
          </div>
          <div>
            <h2>Appointments</h2>
            <p className="intro-copy">
              Use the appointment page to prepare an enquiry. The form does not
              send it. You can also call either phone number directly.
            </p>
            <p className="section-action">
              <Link className="button" href="/appointment">
                Book an appointment
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
