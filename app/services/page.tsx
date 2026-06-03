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
    body: 'Understand yourself deeply through a series of guided exercises tailored to you. We explore your values, strengths, what energises you, and what holds you back. I support you throughout each session, helping you connect the dots and build the foundation every good career decision rests on.',
  },
  {
    label: 'Phase 2 — Architect',
    sessions: 'Sessions 7 to 9',
    body: 'Test your options in the real world using tailored suggestions. Use example lists of Career Experiments and guided conversations to stress-test directions before committing to a specific career path. These sessions help to ensure you are supported throughout and build your decision based on evidence, not assumptions.',
  },
  {
    label: 'Phase 3 — Execute',
    sessions: 'Session 10',
    body: 'Turn your direction into a concrete, costed plan built around your real life. Together we co-create a 12-month bridge, a 30-day sprint, and proof projects calibrated to your risk tolerance, finances, and current situation. You leave this session already in motion.',
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

const standaloneSessions = [
  {
    title: 'CV Review and Optimisation',
    body: 'A thorough review of your CV with detailed feedback and practical recommendations to make it stand out, pass ATS systems, and get you interviews.',
  },
  {
    title: 'LinkedIn Profile Enhancement',
    body: 'A full review of your LinkedIn profile with actionable improvements to increase your visibility, attract the right opportunities, and position you effectively in your target market.',
  },
  {
    title: 'Interview Preparation Session',
    body: 'A focused session to prepare you for upcoming interviews. Covers structuring your answers, building confidence, and handling the questions that trip most candidates up.',
  },
  {
    title: 'Application Strategy Session',
    body: 'A practical session to sharpen your job search approach. Covers targeting the right roles, tailoring applications, accessing the hidden job market, and standing out from the crowd.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ══════════════════════════════════════
          CAREER COMPASS PROGRAMME
      ══════════════════════════════════════ */}

      {/* Opening hook — cream */}
      <section className="section bg-cream" style={{paddingTop: '4rem', paddingBottom: '4rem'}}>
        <div className="ccp-hook-inner reveal">
          <span className="program-badge">Flagship Programme</span>
          <h2>The Career Compass Programme</h2>
          <p className="ccp-hook-sub">For professionals who know something needs to change, but haven&apos;t yet defined what that looks like.</p>
          <p className="ccp-hook-meta">10 Sessions across three phases: Explore, Architect, and Execute.</p>
          <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="btn btn-primary" style={{marginTop: '2rem'}}>
            Book a Free Call
          </a>
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

      {/* Quote — dark green */}
      <section className="section-sm bg-dark" style={{paddingBottom: '1.5rem'}}>
        <div className="quote-section reveal">
          <blockquote className="pullquote pullquote-light">
            &ldquo;A career that fits does not happen by accident. It is designed.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* What makes it different — dark green */}
      <section className="section bg-dark" style={{paddingTop: '2rem'}}>
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

      {/* Career Compass CTA — cream */}
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
          CAREER ENTRY PROGRAMME
      ══════════════════════════════════════ */}

      {/* Intro bridge — cream */}
      <section className="section-sm bg-cream" style={{paddingTop: 0, paddingBottom: '2rem'}}>
        <div className="cep-intro-inner reveal">
          <div className="cep-intro-divider" />
          <h2>Already know your direction?</h2>
          <p className="cep-intro-sub">
            If you have clarity on where you want to go but are struggling to land the right role, the Career Entry Programme gives you the targeted support to get there.
          </p>
        </div>
      </section>

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
              Book a Free Call
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

      {/* ══════════════════════════════════════
          STANDALONE SESSIONS
      ══════════════════════════════════════ */}
      <section className="section bg-dark">
        <div className="standalone-inner">
          <div className="standalone-header reveal">
            <span className="eyebrow-light">Standalone Sessions</span>
            <h2>Need support with one specific thing?</h2>
            <p className="standalone-sub">
              Standalone sessions are available for professionals who want focused, practical support without a full programme commitment.
            </p>
          </div>

          <div className="standalone-grid">
            {standaloneSessions.map((s, i) => (
              <div key={s.title} className={`standalone-card reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                <h3 className="standalone-card-title">{s.title}</h3>
                <p className="standalone-card-body">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="standalone-footer reveal">
            <p className="standalone-pricing">
              Pricing for all sessions and programmes is discussed on your free career check-in call.
            </p>
            <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="btn btn-cream">
              Book a Free Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
