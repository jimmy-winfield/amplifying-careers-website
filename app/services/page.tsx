import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career Coaching Programmes | AmplifyingCareers',
  description:
    'Two tailored coaching programmes for career changers and job seekers. Psychology-backed support to help you find and secure the right role.',
  openGraph: {
    title: 'Career Coaching Programmes | AmplifyingCareers',
    description:
      'Two tailored coaching programmes for career changers and job seekers. Psychology-backed support to help you find and secure the right role.',
    url: 'https://amplifyingcareers.com/services',
    siteName: 'AmplifyingCareers',
    type: 'website',
    images: [{ url: 'https://amplifyingcareers.com/jimmy-headshot.jpg', width: 1417, height: 2126, alt: 'Jimmy Winfield — Career Coach' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Coaching Programmes | AmplifyingCareers',
    description:
      'Two tailored coaching programmes for career changers and job seekers. Psychology-backed support to help you find and secure the right role.',
    images: ['https://amplifyingcareers.com/jimmy-headshot.jpg'],
  },
};

const CALENDAR_URL = 'https://calendar.app.google/1cGb6iaK3NZaXEe79';

const phases = [
  {
    label: 'Phase 1 — Explore',
    sessions: 'Sessions 1 to 6',
    body: 'Understand yourself deeply. Your values, strengths, what energises you, and what holds you back. Build the foundation every good career decision rests on.',
  },
  {
    label: 'Phase 2 — Architect',
    sessions: 'Sessions 7 to 9',
    body: 'Test your options in the real world. Use Career Experiments and guided conversations to stress-test directions before committing. Build your decision on evidence, not assumption.',
  },
  {
    label: 'Phase 3 — Execute',
    sessions: 'Session 10',
    body: 'Turn your direction into a concrete plan. A 12-month bridge, a 30-day sprint, a financial transition plan, and proof projects calibrated to your real life.',
  },
];

const assets = [
  'A clear vision statement and documented values, strengths, purpose and non-negotiables',
  'A Weighted Decision Matrix confirming your direction',
  'A skill gap analysis and development roadmap',
  'A Career Risk Profile and Financial Transition Plan',
  'A 12-month bridge plan and 30-day sprint',
  'A Networking Handbook and Post-Programme Workbook',
  'A running tracker of Career Experiments',
  'Practical guides for enhancing your CV, building a stand-out LinkedIn profile, and guides on how to ace interviews to gain job offers',
];

const differentiators = [
  {
    lead: 'Psychology-driven',
    body: 'Built by a practitioner on the Chartered Coaching Psychologist route, drawing on career and decision-making research.',
  },
  {
    lead: 'Evidence-led throughout',
    body: 'Every decision is built on data you generate yourself, not personality quizzes alone.',
  },
  {
    lead: 'Head and gut both get a vote',
    body: 'The Weighted Decision Matrix sits alongside vision and energy work so nothing important gets ignored.',
  },
  {
    lead: 'It does not stop at the decision',
    body: 'Most career coaching ends at what. This goes all the way to how, with a costed, time-bound plan.',
  },
  {
    lead: 'Honest by design',
    body: 'Trade-offs, risks, and what you are giving up are built into the work, not glossed over.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero-inner reveal">
          <span className="eyebrow">Services</span>
          <h1>Two programmes. One clear direction.</h1>
          <p className="lead">
            Support for career change and career entry — with human, psychology-rooted coaching that goes beyond the CV.
          </p>
        </div>
      </section>

      {/* ── Programme Selector ── */}
      <section className="section-sm bg-cream">
        <div className="selector-inner reveal">
          <span className="eyebrow">Find Your Fit</span>
          <h2>Not sure which programme is right for you?</h2>
          <p>
            If you are feeling stuck and unsure of your direction, the <strong>Career Change Programme</strong> is likely the right fit. If you know what you want but are struggling to land it, the <strong>Career Entry Programme</strong> is for you.
          </p>
          <p>Still unsure? Book a free call and we will figure it out together.</p>
          <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
            Book a Free Call
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CAREER CHANGE PROGRAMME
      ══════════════════════════════════════ */}

      {/* Opening hook — cream */}
      <section className="section bg-cream" style={{paddingTop: 0}}>
        <div className="ccp-hook-inner reveal">
          <span className="program-badge">Career Change Programme</span>
          <h2>From vague dissatisfaction to a clear, evidence-based direction.</h2>
          <p className="ccp-hook-sub">For professionals who know something needs to change, but haven&apos;t yet defined what that looks like.</p>
        </div>
      </section>

      {/* Phase structure — dark green */}
      <section className="section bg-dark">
        <div className="ccp-phases-inner">
          <div className="ccp-phases-header reveal">
            <span className="eyebrow-light">The Structure</span>
            <h2>Three phases. Ten sessions. One clear direction.</h2>
          </div>
          <div className="ccp-phases-grid">
            {phases.map((ph, i) => (
              <div key={ph.label} className={`ccp-phase-card reveal reveal-delay-${i + 1}`}>
                <p className="ccp-phase-sessions">{ph.sessions}</p>
                <h3 className="ccp-phase-label">{ph.label}</h3>
                <p className="ccp-phase-body">{ph.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assets — cream */}
      <section className="section bg-cream">
        <div className="ccp-assets-inner">
          <div className="reveal">
            <span className="eyebrow">What You Keep</span>
            <h2>The assets you walk away with.</h2>
            <p className="ccp-assets-sub">A complete personal career archive of over 12 workbooks that keeps working long after the sessions end, that you can reflect back on at any time.</p>
          </div>
          <ul className="ccp-assets-grid">
            {assets.map((a, i) => (
              <li key={i} className={`ccp-asset-item reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                <span className="ccp-asset-tick" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.12"/>
                    <path d="M4.5 8l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What makes it different — dark green */}
      <section className="section bg-dark">
        <div className="ccp-diff-inner">
          <div className="reveal">
            <span className="eyebrow-light">The Difference</span>
            <h2>What makes this different.</h2>
          </div>
          <div className="ccp-diff-grid">
            {differentiators.map((d, i) => (
              <div key={d.lead} className={`ccp-diff-item reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                <p className="ccp-diff-lead">{d.lead}</p>
                <p className="ccp-diff-body">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Change CTA — cream */}
      <section className="section-sm bg-cream">
        <div className="cta-inner cta-light reveal">
          <span className="eyebrow">Get Started</span>
          <h2>Ready to find out if this is right for you?</h2>
          <p>Book a free 30-minute career check-in. No pressure, no pitch. Just clarity on your next step.</p>
          <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
            Book Your Free Call
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CAREER ENTRY PROGRAMME (unchanged)
      ══════════════════════════════════════ */}
      <section className="service-block">
        <div className="service-block-inner flip">
          <div className="service-content reveal">
            <span className="service-meta">4 Sessions</span>
            <h2>Career Entry Programme</h2>
            <p>
              For those who know their target role but are struggling with applications, interviews, and standing out. Targeted support to help you secure the right role with confidence.
            </p>

            <div className="service-includes">
              <h4>What is included</h4>
              <ul className="service-list">
                <li>CV optimisation — a sharp, recruiter-ready CV that reflects your strengths</li>
                <li>LinkedIn profile clarity — positioning that attracts the right opportunities</li>
                <li>Job application strategy — quality over quantity, targeted and intentional</li>
                <li>Networking and the hidden job market — how to access roles before they&apos;re advertised</li>
                <li>Interview coaching — frameworks, practice, and the mindset to perform under pressure</li>
              </ul>
            </div>

            <div className="service-outcome">
              <p>
                <strong>Outcome:</strong> A standout CV, optimised LinkedIn profile, targeted application strategy, and the confidence to perform in interviews.
              </p>
            </div>

            <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
              Book a Free Career Check-In
            </a>
          </div>

          <div className="service-aside reveal reveal-delay-2">
            <div className="service-aside-card">
              <h3>Who this is for</h3>
              <p>
                People who know what they want but are not landing it. You might be getting interviews but struggling to convert, or not even getting past the application stage.
              </p>
              <p>
                This programme cuts straight to the practical — your CV, your LinkedIn, your pitch, and your interview performance. Four focused sessions that make a measurable difference to your prospects.
              </p>
              <Link href="/contact" className="btn btn-outline">
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-dark">
        <div className="cta-inner reveal">
          <span className="eyebrow-light">Not Sure Where to Start?</span>
          <h2>Let&apos;s talk it through.</h2>
          <p>
            Book a free 30-minute career check-in. We&apos;ll work out which programme is right for you — or whether you even need one at all.
          </p>
          <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="btn btn-cream">
            Book Your Free Call
          </a>
        </div>
      </section>
    </>
  );
}
