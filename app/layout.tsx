import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RevealObserver from '../components/RevealObserver';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

// ─── Google Analytics ────────────────────────────────────────────────────────
// To activate GA4, replace the placeholder below with your real Measurement ID.
// You can find it in Google Analytics → Admin → Data Streams → your stream.
// It looks like: G-ABCDEF1234
// Once updated, redeploy the site and verify via the GA4 DebugView.
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: swap for real GA4 Measurement ID

export const metadata: Metadata = {
  title: {
    default: 'AmplifyingCareers | Psychology-Led Career Coaching',
    template: '%s',
  },
  description:
    'Psychology-led career coaching that helps professionals find clarity, build confidence, and land roles that truly fit who they are.',
  metadataBase: new URL('https://amplifyingcareers.com'),
  openGraph: {
    siteName: 'AmplifyingCareers',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <div className="page-shell">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        <RevealObserver />

        {/* Google Analytics — replace G-XXXXXXXXXX with your real Measurement ID */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
