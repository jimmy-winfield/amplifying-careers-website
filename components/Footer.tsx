import Image from 'next/image';
import Link from 'next/link';
import logo from '../brand_assets/logo.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const CALENDAR_URL = 'https://calendar.app.google/1cGb6iaK3NZaXEe79';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        {/* Brand column */}
        <div className="footer-brand-col">
          <Link href="/" className="footer-brand-link">
            <Image src={logo} alt="AmplifyingCareers" className="footer-logo" />
          </Link>
          <p className="footer-tagline">
            Psychology-led career coaching for professionals ready to make a change.
          </p>
          <div className="footer-social">
            <a
              href="https://instagram.com/amplifyingcareers"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="footer-icon"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2.2a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/jimmy-winfield"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="footer-icon"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.48 2.48 0 1 1 0 4.96 2.48 2.48 0 0 1 0-4.96Zm.03 5.75H2V21h3V9.25Zm6.5 0H8.75V21h3V14a2.5 2.5 0 0 1 2.5-2.5c1.4 0 2.25.9 2.25 2.25V21h3V13.25c0-3.25-1.75-4.75-4.08-4.75-1.9 0-2.75 1.05-3.2 1.8h.03V9.25Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Nav column */}
        <div className="footer-nav-col">
          <p className="footer-col-label">Pages</p>
          <nav aria-label="Footer navigation">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="footer-nav-link">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact column */}
        <div className="footer-contact-col">
          <p className="footer-col-label">Get in touch</p>
          <a href="mailto:jimmy@amplifyingcareers.com" className="footer-contact-item">
            jimmy@amplifyingcareers.com
          </a>
          <a
            href="https://linkedin.com/in/jimmy-winfield"
            target="_blank"
            rel="noreferrer"
            className="footer-contact-item"
          >
            LinkedIn
          </a>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary footer-cta-btn"
          >
            Book a Free Call
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} AmplifyingCareers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
