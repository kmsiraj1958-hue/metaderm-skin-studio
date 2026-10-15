import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { ContactDetails } from "@/components/contact-details";
import { clinicName, navigation } from "@/lib/site";

async function copyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function SiteFooter() {
  const year = await copyrightYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <BrandMark />
          <ContactDetails />
          <p className="footer-note">
            Email and social links have not been published.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="footer-links">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/appointment">Book Appointment</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="wrap footer-base">
        <p>© {year} {clinicName}</p>
        <p>Consultations are individual. Nothing on this site is a diagnosis.</p>
      </div>
    </footer>
  );
}
