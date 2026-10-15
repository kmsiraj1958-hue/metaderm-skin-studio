import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { clinicName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    `Aesthetic facials and selected skin treatments offered for consultation at ${clinicName}.`,
};

export default function ServicesPage() {
  return (
    <main className="page" id="main">
      <section className="page-intro">
        <div className="wrap">
          <p className="kicker">Services</p>
          <h1>The treatment catalogue.</h1>
          <p className="intro-lead">
            These are the services shown in the clinic’s materials. Please
            confirm the final list, availability, and suitability with {clinicName}.
            Prices and outcomes are not published here.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap service-list">
          {services.map((service, index) => (
            <article id={service.slug} className="service-entry" key={service.slug}>
              <p className="service-index">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h2>{service.name}</h2>
                <p>{service.description}</p>
                <Link href={`/appointment?service=${service.slug}`}>
                  Enquire about {service.name}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
