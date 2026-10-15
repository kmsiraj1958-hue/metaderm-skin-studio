import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clinicPhotos } from "@/lib/clinic-photos";
import { clinicName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Photographs of ${clinicName}. Before-and-after images are published only with clinic approval and patient consent.`,
};

export default function GalleryPage() {
  return (
    <main className="page" id="main">
      <section className="page-intro">
        <div className="wrap">
          <p className="kicker">Gallery</p>
          <h1>The centre, as it is.</h1>
          <p className="intro-lead">
            These photographs show rooms at {clinicName}. They are not treatment
            results. A before-and-after photograph is published only when the
            clinic has approved it and the person in it has given consent. None
            of those photographs have been supplied.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <ul className="frame-grid">
            {clinicPhotos.map((photo) => (
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
            <Link className="button" href="/appointment">
              Book an appointment
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
