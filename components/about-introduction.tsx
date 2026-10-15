import { clinicName } from "@/lib/site";

export function AboutIntroduction({ className = "intro-copy" }: { className?: string }) {
  return (
    <div className={className}>
      <p>
        {clinicName} is a skin aesthetics clinic in Lahore, Pakistan, dedicated
        to providing personalised consultations and aesthetic treatment options
        in a professional clinical environment.
      </p>
      <p>
        We believe every individual has unique skin concerns and aesthetic
        goals. Our approach begins with understanding your needs, discussing
        suitable options, and helping you make informed decisions about your
        care.
      </p>
      <p>
        Our services include HydraFacial, dermal fillers, lip fillers, Hair PRP,
        eyebrow PRP, microneedling, HIFU, laser treatments, and other selected
        aesthetic treatments, subject to individual assessment and clinical
        suitability.
      </p>
      <p>
        At METADERM, our focus is on individual consultation, clear
        communication, patient comfort, and responsible aesthetic care.
      </p>
      <p>
        <strong>Our location:</strong> Divine Commercial Hub, Airport Road,
        Lahore, Pakistan.
      </p>
    </div>
  );
}
