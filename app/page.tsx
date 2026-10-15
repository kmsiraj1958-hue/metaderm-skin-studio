import Image from "next/image";
import Link from "next/link";
import { AboutIntroduction } from "@/components/about-introduction";
import { ContactDetails } from "@/components/contact-details";
import { homepageGallery } from "@/lib/clinic-photos";
import { featuredServices } from "@/lib/services";
import { clinicName } from "@/lib/site";

const reasons = [
  {
    title: "A consultation comes first",
    text: "Recommendations follow a conversation and, where needed, a clinical assessment.",
  },
  {
    title: "The service list is visible",
    text: "You can read what the centre offers before you ask about an appointment.",
  },
  {
    title: "Planning stays individual",
    text: "A treatment is discussed for your own concerns. It is not assumed from a photograph.",
  },
  {
    title: "The next step is labelled",
    text: "Appointment enquiries are separate from treatment pages, so the request is clear.",
  },
];

export default function Home() {
  return (
    <main className="page" id="main">
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="kicker exact-name">{clinicName}</p>
            <h1>Considered care for your skin.</h1>
            <p className="hero-lead">
              Consultations for aesthetic facials and selected skin treatments.
              Every recommendation begins with a conversation about your goals.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/appointment">
                Book an appointment
              </Link>
              <Link className="button button-secondary" href="/services">
                View treatments
              </Link>
            </div>
          </div>

          <figure className="hero-visual">
            <Image
              src="/images/hero-portrait.png"
              alt={`Woman in a white blouse resting a hand against her cheek, used as the ${clinicName} skincare portrait.`}
              fill
              preload
              sizes="(max-width: 860px) 100vw, 46vw"
              className="hero-image"
            />
            <figcaption>Skincare portrait. Not a treatment result.</figcaption>
          </figure>
        </div>
      </section>

      <section className="band" id="treatments">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="kicker">Featured treatments</p>
              <h2>Care you can ask about.</h2>
            </div>
            <p>
              A selection from the treatment list. The full catalogue, including
              laser treatments, mole removal, and facials, is on the services
              page.
            </p>
          </div>

          <div className="treatment-grid">
            {featuredServices.map((service) => (
              <article className="treatment-card" key={service.slug}>
                <Link
                  className="treatment-visual"
                  href={`/services#${service.slug}`}
                  aria-label={`Read about ${service.name}`}
                >
                  <span>Photograph to follow</span>
                </Link>
                <div className="treatment-body">
                  <h3>
                    <Link href={`/services#${service.slug}`}>{service.name}</Link>
                  </h3>
                  <p>{service.summary}</p>
                  <Link
                    className="text-link"
                    href={`/appointment?service=${service.slug}`}
                  >
                    Enquire about {service.name}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="section-action">
            <Link className="button button-secondary" href="/services">
              View all services
            </Link>
          </p>
        </div>
      </section>

      <section className="doctor" id="doctor">
        <div className="wrap doctor-grid">
          <figure className="doctor-portrait">
            <div className="portrait-placeholder">
              <span aria-hidden="true">AK</span>
              <p>Approved portrait to follow</p>
            </div>
            <figcaption>Portrait awaiting clinic approval</figcaption>
          </figure>
          <div>
            <p className="kicker">About the Doctor</p>
            <h2>Dr. M. Asif Khan</h2>
            <p className="doctor-role">Doctor</p>
            <p>
              Dr. M. Asif Khan sees patients at {clinicName}.
              Qualifications, registration, and years of practice will be listed
              here after the clinic confirms them.
            </p>
            <Link className="button" href="/appointment">
              Book an appointment
            </Link>
          </div>
        </div>
      </section>

      <section className="band band-ivory" id="studio">
        <div className="wrap">
          <div className="section-heading clinic-intro">
            <div>
              <p className="kicker">About the centre</p>
              <h2>Personalised aesthetic care, centred around you.</h2>
              <AboutIntroduction />
            </div>
            <figure className="clinic-intro-photo">
              <Image
                src={homepageGallery[0].src}
                alt={homepageGallery[0].alt}
                fill
                sizes="(max-width: 980px) 100vw, 42vw"
                className="cover-image"
                style={{ objectPosition: homepageGallery[0].position }}
              />
            </figure>
          </div>
          <ol className="reason-grid">
            {reasons.map((reason, index) => (
              <li key={reason.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band" id="gallery-preview">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="kicker">Gallery</p>
              <h2>Photographs, only with consent.</h2>
            </div>
            <p>
              These photographs show the centre. Before-and-after images are
              published only when the clinic has approved them and the person
              in the photograph has agreed.
            </p>
          </div>
          <ul className="frame-grid">
            {homepageGallery.map((photo) => (
              <li key={photo.src}>
                <figure className="photo-frame">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                    className="cover-image"
                    style={{ objectPosition: photo.position }}
                  />
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <p className="section-action">
            <Link className="text-link" href="/gallery">
              Read the gallery note
            </Link>
          </p>
        </div>
      </section>

      <section className="band band-ivory" id="testimonials">
        <div className="wrap testimonial-note">
          <p className="kicker">Testimonials</p>
          <h2>Patient words, when we may share them.</h2>
          <p>
            Comments are published only with permission from the person who gave
            them. No authorised testimonials are available yet, so none are
            shown.
          </p>
        </div>
      </section>

      <section className="visit" id="contact">
        <div className="wrap visit-grid">
          <div>
            <p className="kicker kicker-light">Book Appointment</p>
            <h2>Arrange a consultation.</h2>
            <p>
              Use the appointment page to prepare an enquiry. The form does not
              send it. Call the clinic on the numbers shown here.
            </p>
            <Link className="button button-light" href="/appointment">
              Go to the appointment form
            </Link>
          </div>
          <ContactDetails />
        </div>
      </section>
    </main>
  );
}
