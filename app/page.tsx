import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import { testimonials } from '../lib/testimonials';

export const metadata: Metadata = {
  title: 'Career Coaching for Professionals | AmplifyingCareers',
  description:
    'Psychology-led career coaching helping professionals gain clarity, build confidence, and secure roles that align with who they are. Based in the UK, working globally.',
  openGraph: {
    title: 'Career Coaching for Professionals | AmplifyingCareers',
    description:
      'Psychology-led career coaching helping professionals gain clarity, build confidence, and secure roles that align with who they are. Based in the UK, working globally.',
    url: 'https://amplifyingcareers.com',
    siteName: 'AmplifyingCareers',
    type: 'website',
    images: [{ url: 'https://amplifyingcareers.com/jimmy-headshot.jpg', width: 1417, height: 2126, alt: 'Jimmy Winfield — Career Coach' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Coaching for Professionals | AmplifyingCareers',
    description:
      'Psychology-led career coaching helping professionals gain clarity, build confidence, and secure roles that align with who they are.',
    images: ['https://amplifyingcareers.com/jimmy-headshot.jpg'],
  },
};

const CALENDAR_URL = 'https://calendar.app.google/1cGb6iaK3NZaXEe79';

const whoItems = [
  'You are stuck in a career that isn’t working and know you want change, but haven’t defined what that change looks like yet',
  'You feel vague dissatisfaction but can’t pinpoint why, or what to do about it',
  'You want clarity that is backed by evidence, not just gut feeling or a personality quiz',
  'You are tired of thinking about change and want to actually start making it',
  'You want someone who understands both the psychology and the real world of work',
];

const outcomes = [
  {
    n: '01',
    title: 'Career Clarity',
    body: 'A confirmed primary direction backed by evidence created through over 40 activities we work through, not guesswork or gut feeling alone.',
  },
  {
    n: '02',
    title: 'Confidence',
    body: 'Self-belief rebuilt deliberately through identifying strengths and your achievements, even if you currently feel you don’t have many.',
  },
  {
    n: '03',
    title: 'Real-world proof',
    body: 'You test your direction through guided experiments which test potential careers, using carefully selected ideas that I suggest throughout the programme.',
  },
  {
    n: '04',
    title: 'A plan you will actually execute',
    body: 'A 12-month bridge, a 30-day sprint that we co-create, and proof projects calibrated to your real risk tolerance, finances and current situation.',
  },
  {
    n: '05',
    title: 'Momentum from day one',
    body: 'The programme starts and ends with you already in action, not just informed, with your enhanced skills, confidence and clarity driving you forward.',
  },
];

const steps = [
  {
    n: '01',
    title: 'We talk',
    body: 'A free 30-minute career check-in to understand where you are, what you want, and whether working together is the right fit.',
  },
  {
    n: '02',
    title: 'We build',
    body: 'A structured programme tailored to your situation, goals, and timeline — combining psychology-based coaching with real market insight.',
  },
  {
    n: '03',
    title: 'You move',
    body: 'With clarity, confidence, and a concrete plan to secure the career you actually want — not just the next available option.',
  },
];

const pullQuotes = [
  {
    quote: 'This was an eye-opening experience that helped me deeply understand my aptitudes, values, and personal mission.',
    name: 'Valeria Renée Rivera',
    role: 'Marketing Manager, Glued',
    photo: '/valeria-rivera.jpg',
  },
  {
    quote: 'Jimmy was an incredible support during my job search. He patiently helped me refine my CV, which made a real difference in my opportunities.',
    name: 'Diana Deng',
    role: 'Design Engineer, Affinity Labs',
    photo: '/diana-deng.jpg',
  },
  {
    quote: 'The coaching has been transformational. I now recognise my potential and have a clear outlook on my career path.',
    name: 'Billy Greene',
    role: 'Growth Specialist, Opply',
    photo: '/billy-greene.jpg',
  },
  {
    quote: 'Jimmy was genuinely invested in my growth and success, and that motivated me even more.',
    name: 'Margherita Casadio',
    role: 'MA Luxury Brand Management',
    photo: '/margherita-casadio.jpg',
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1 ── Hero ── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text reveal">
            <span className="eyebrow">Psychology-Led Career Coaching</span>
            <h1>You already know something needs to change.</h1>
            <p className="hero-subtext">
              Most professionals who feel stuck do not lack talent or ambition. They lack clarity. I help you find it, build on it, and move forward with confidence.
            </p>
            <div className="hero-actions">
              <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
                Book a Free Career Check-In
              </a>
              <Link href="/services" className="btn btn-outline">
                See How It Works
              </Link>
            </div>
          </div>

          <div className="hero-image-wrap reveal reveal-delay-2">
            <Image
              src="/jimmy-headshot.jpg"
              alt="Jimmy Winfield — Career Coach"
              width={1417}
              height={2126}
              priority
            />
          </div>
        </div>
      </section>

      {/* 2 ── Trust Bar ── */}
      <section className="trust-bar">
        <div className="trust-bar-inner">
          <span className="trust-item">MSc Psychology</span>
          <span className="trust-divider" aria-hidden="true" />
          <span className="trust-item">First Class Honours</span>
          <span className="trust-divider" aria-hidden="true" />
          <span className="trust-item">Associate Fellow, Advance HE</span>
          <span className="trust-divider" aria-hidden="true" />
          <span className="trust-item">Firework Licensed Career Coach</span>
          <span className="trust-divider" aria-hidden="true" />
          <span className="trust-item">100+ Sessions Delivered</span>
          <span className="trust-divider" aria-hidden="true" />
          <a
            href="https://www.linkedin.com/in/jimmy-winfield"
            target="_blank"
            rel="noreferrer"
            className="trust-item trust-item-link"
          >
            LinkedIn Verified Reviews
          </a>
        </div>
      </section>

      {/* 3 ── Who this is for ── */}
      <section className="section bg-cream">
        <div className="who-inner">
          <div className="who-text reveal">
            <span className="eyebrow">Is This You?</span>
            <h2>This might be for you if&hellip;</h2>
            <div className="section-divider" />
            <ul className="who-list">
              {whoItems.map((item, i) => (
                <li key={i} className={`who-item reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                  <span className="who-tick" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.12"/>
                      <path d="M4.5 8l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="btn btn-primary who-cta reveal">
              Sound familiar? Let&apos;s talk.
            </a>
          </div>
        </div>
      </section>

      {/* 4 ── Story + Social Proof — cream ── */}
      <section className="section bg-cream" style={{paddingTop: 0}}>
        <div className="story-proof-inner">
          {/* Left: story */}
          <div className="story-proof-story reveal">
            <span className="eyebrow">My Story</span>
            <h2>Why I started AmplifyingCareers.</h2>
            <div className="section-divider" />
            <p>A few years ago, I found myself at a crossroads. Having built a career in recruitment, completed internships in Spain and China, and earned a first-class degree, I had built a wide range of skills, but wasn&apos;t sure how they added up to something meaningful.</p>
            <p>For the first time in what had felt like a linear path, I was stuck. Despite being great at helping others land their dream jobs in recruitment, I couldn&apos;t apply that clarity to myself.</p>
            <p>While navigating my own transition, I found myself naturally helping friends to identify fulfilling paths and secure roles they were excited about. I loved this process, and upon reflection, I realised that I&apos;d discovered a love for career coaching.</p>
            <p>I became fascinated by the psychology behind career decisions: what holds people back, what drives us, and how our values and identity shape our direction. This led me to study an MSc in Psychology while working as a Career Consultant at a University in London.</p>
            <p>During my research, I noticed a clear gap. Many coaches had recruitment experience but lacked psychological depth to help individuals discover their ideal careers. Others understood the psychology of careers, but hadn&apos;t engaged with employers or application processes. I saw the power in combining both.</p>
            <p>Today, through AmplifyingCareers, I blend hands-on market insight with psychology-based coaching to help professionals move beyond just getting hired, into careers that align with who they are and what they love.</p>
            <Link href="/about" className="btn btn-outline story-proof-cta">
              More About Me
            </Link>
          </div>

          {/* Right: pull-quote testimonials */}
          <div className="story-proof-quotes">
            {pullQuotes.map((pq, i) => (
              <div key={pq.name} className={`pull-quote-card reveal reveal-delay-${i + 1}`}>
                <p className="pull-quote-text">&ldquo;{pq.quote}&rdquo;</p>
                <div className="pull-quote-author">
                  <Image
                    src={pq.photo}
                    alt={pq.name}
                    width={44}
                    height={44}
                    className="pull-quote-avatar"
                  />
                  <div>
                    <p className="pull-quote-name">{pq.name}</p>
                    <p className="pull-quote-role">{pq.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 ── How It Works — dark green ── */}
      <section className="section bg-dark">
        <div className="how-inner">
          <div className="how-header reveal">
            <span className="eyebrow-light">The Process</span>
            <h2>How it works</h2>
          </div>
          <div className="how-steps">
            {steps.map((step, i) => (
              <div key={step.n} className={`how-step reveal reveal-delay-${i + 1}`}>
                <div className="how-step-number">{step.n}</div>
                <div className="how-step-content">
                  <h3 className="how-step-title">{step.title}</h3>
                  <p className="how-step-body">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 ── What you will walk away with — cream ── */}
      <section className="section bg-cream" style={{paddingBottom: '2.5rem'}}>
        <div className="outcomes-inner">
          <div className="outcomes-header reveal">
            <span className="eyebrow">The Result</span>
            <h2>What you will walk away with.</h2>
            <p className="outcomes-sub">Not just a decision. A complete career direction backed by evidence, and a concrete plan to get there.</p>
          </div>
          <div className="outcomes-grid">
            {outcomes.map((o, i) => (
              <div key={o.n} className={`outcome-card reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                <div className="outcome-number">{o.n}</div>
                <h3 className="outcome-title">{o.title}</h3>
                <p className="outcome-body">{o.body}</p>
              </div>
            ))}
          </div>
          <div className="outcomes-cta reveal">
            <Link href="/services" className="btn btn-primary">See the full programme</Link>
          </div>
        </div>
      </section>

      {/* 7 ── Services Overview — cream ── */}
      <section className="section bg-cream" style={{paddingTop: '1.5rem'}}>
        <div className="services-home-inner">
          <div className="section-intro reveal">
            <h2>Two programmes. One clear direction.</h2>
            <p>
              Whether you&apos;re changing career or ready to land the right role, there&apos;s a programme built for exactly where you are.
            </p>
          </div>

          <div className="services-grid">
            <article className="program-card reveal reveal-delay-1">
              <span className="program-badge">10 Sessions</span>
              <h3>Career Compass Programme</h3>
              <p>
                For professionals feeling unfulfilled and unsure of their next steps. A structured, psychology-backed programme to help you discover and transition into a career that aligns with your values, strengths, and aspirations.
              </p>
              <Link href="/services" className="btn btn-primary">
                Learn More
              </Link>
            </article>

            <article className="program-card reveal reveal-delay-2">
              <span className="program-badge">4 Sessions</span>
              <h3>Career Entry Programme</h3>
              <p>
                For those who know their target role but are struggling with applications, interviews, and standing out. Targeted support to help you secure the right role with confidence.
              </p>
              <Link href="/services" className="btn btn-primary">
                Learn More
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* 7 ── Quote pullquote — cream ── */}
      <section className="section-sm bg-cream" style={{paddingTop: 0}}>
        <div className="quote-section reveal">
          <blockquote className="pullquote">
            &ldquo;Most people do not need more motivation. They need clarity on what they actually want.&rdquo;
          </blockquote>
          <cite className="pullquote-cite">Jimmy Winfield, AmplifyingCareers</cite>
        </div>
      </section>

      {/* 8 ── Full Testimonials Carousel — dark green ── */}
      <section className="section bg-dark">
        <div className="testimonials-inner">
          <div className="testimonials-header reveal">
            <span className="eyebrow-light">Client Reviews</span>
            <h2>What clients say</h2>
            <p className="testimonials-subhead">Verified LinkedIn recommendations</p>
          </div>

          <TestimonialsCarousel testimonials={testimonials} />

          <div className="testimonials-footer reveal">
            <a href="https://linkedin.com/in/jimmy-winfield" target="_blank" rel="noreferrer">
              View recommendations on LinkedIn →
            </a>
          </div>
        </div>
      </section>

      {/* 9 ── CTA — cream ── */}
      <section className="section-sm bg-cream">
        <div className="cta-inner cta-light reveal">
          <span className="eyebrow">Get Started</span>
          <h2>Ready to find work that actually fits?</h2>
          <p>
            Book a free 30-minute career check-in. No pressure, no pitch. Just clarity on your next step.
          </p>
          <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
            Book Your Free Call
          </a>
        </div>
      </section>
    </>
  );
}
