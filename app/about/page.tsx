import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AboutIntroduction } from "@/components/about-introduction";
import { clinicPhotos } from "@/lib/clinic-photos";
import { clinicName } from "@/lib/site";

const entrancePhoto = clinicPhotos[0];

export const metadata: Metadata = {
  title: "About Us",
  description: `${clinicName} is a skin aesthetics clinic in Lahore, Pakistan, offering personalised consultations and aesthetic treatment options.`,
};

export default function AboutPage() {
  return (
    <main className="page" id="main">
      <section className="page-intro">
        <div className="wrap">
          <p className="kicker">About Us</p>
          <h1>Personalised aesthetic care, centred around you.</h1>
          <AboutIntroduction className="intro-lead" />
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="about-photos">
            <figure>
              <div className="about-photo">
                <Image
                  src={entrancePhoto.src}
                  alt={entrancePhoto.alt}
                  fill
                  sizes="(max-width: 980px) 100vw, 46vw"
                  className="cover-image"
                  style={{ objectPosition: entrancePhoto.position }}
                />
              </div>
              <figcaption>Clinic entrance</figcaption>
            </figure>
            <figure>
              <div className="about-photo">
                <Image
                  src="/images/treatment-room-illustration.png"
                  alt="Illustrated treatment room with a white treatment bed and equipment. Not a photograph of the clinic."
                  fill
                  sizes="(max-width: 980px) 100vw, 46vw"
                  className="cover-image"
                />
              </div>
              <figcaption>Treatment room illustration. Not a photograph of the clinic.</figcaption>
            </figure>
          </div>
          <div>
            <p className="kicker">Visit</p>
            <h2>Address, phone, and appointments.</h2>
            <p className="intro-copy">
              The full street address, both phone numbers, and directions are
              on the contact page.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/contact">
                Contact Us
              </Link>
              <Link className="button button-secondary" href="/appointment">
                Book an appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
