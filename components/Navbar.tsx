'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../brand_assets/logo.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link href="/" className="nav-brand" onClick={() => setOpen(false)}>
          <Image src={logo} alt="AmplifyingCareers" priority />
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            href="https://instagram.com/amplifyingcareers"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="icon-btn"
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
            className="icon-btn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5a2.48 2.48 0 1 1 0 4.96 2.48 2.48 0 0 1 0-4.96Zm.03 5.75H2V21h3V9.25Zm6.5 0H8.75V21h3V14a2.5 2.5 0 0 1 2.5-2.5c1.4 0 2.25.9 2.25 2.25V21h3V13.25c0-3.25-1.75-4.75-4.08-4.75-1.9 0-2.75 1.05-3.2 1.8h.03V9.25Z" />
            </svg>
          </a>

          <button
            className={`hamburger${open ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
