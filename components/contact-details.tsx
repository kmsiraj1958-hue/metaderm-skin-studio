import { clinicAddress, clinicPhones, mapsDirectionsUrl } from "@/lib/site";

export function ContactDetails() {
  return (
    <dl className="contact-list">
      <div>
        <dt>Address</dt>
        <dd>{clinicAddress}</dd>
      </div>
      {clinicPhones.map((phone) => (
        <div key={phone.tel}>
          <dt>{phone.label}</dt>
          <dd>
            <a href={`tel:${phone.tel}`}>{phone.display}</a>
          </dd>
        </div>
      ))}
      <div>
        <dt>Directions</dt>
        <dd>
          <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
            Google Maps directions
          </a>
        </dd>
      </div>
      <div>
        <dt>Email</dt>
        <dd>To be confirmed</dd>
      </div>
      <div>
        <dt>Social links</dt>
        <dd>To be confirmed</dd>
      </div>
    </dl>
  );
}
