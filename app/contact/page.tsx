import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get in Touch | AmplifyingCareers',
  description:
    'Book a free career check-in or send a message. Jimmy responds to all enquiries within 24 hours.',
  openGraph: {
    title: 'Get in Touch | AmplifyingCareers',
    description:
      'Book a free career check-in or send a message. Jimmy responds to all enquiries within 24 hours.',
    url: 'https://amplifyingcareers.com/contact',
    siteName: 'AmplifyingCareers',
    type: 'website',
    images: [{ url: 'https://amplifyingcareers.com/jimmy-headshot.jpg', width: 1417, height: 2126, alt: 'Jimmy Winfield — Career Coach' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get in Touch | AmplifyingCareers',
    description:
      'Book a free career check-in or send a message. Jimmy responds to all enquiries within 24 hours.',
    images: ['https://amplifyingcareers.com/jimmy-headshot.jpg'],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero-inner reveal">
          <span className="eyebrow">Contact</span>
          <h1>Let&apos;s have a conversation.</h1>
          <p className="lead">
            Fill in the form below or reach out directly. I respond to all enquiries within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Contact Layout — section 2, dark green ── */}
      <section className="contact-section bg-dark">
        <div className="contact-inner">
          <div className="contact-form-card reveal">
            <h2>Send a message</h2>
            <p>Tell me a little about where you are and what you&apos;re looking for.</p>

            <form
              className="contact-form"
              action="https://formspree.io/f/xykagkgo"
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="name">First Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your first name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your career goals or what you&apos;re working through..."
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-details reveal reveal-delay-2">
            <div className="contact-detail-card">
              <h3>Email</h3>
              <a href="mailto:jimmy@amplifyingcareers.com">
                jimmy@amplifyingcareers.com
              </a>
            </div>

            <div className="contact-detail-card">
              <h3>LinkedIn</h3>
              <a
                href="https://linkedin.com/in/jimmy-winfield"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/jimmy-winfield
              </a>
            </div>

            <div className="contact-detail-card">
              <h3>Book Directly</h3>
              <a
                href="https://calendar.app.google/1cGb6iaK3NZaXEe79"
                target="_blank"
                rel="noreferrer"
              >
                Book a free 30-min career check-in →
              </a>
            </div>

            <div className="contact-detail-card">
              <h3>Response Time</h3>
              <p>I respond to all enquiries within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
