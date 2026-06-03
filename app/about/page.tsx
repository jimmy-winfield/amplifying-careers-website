import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import TestimonialsCarousel from '../../components/TestimonialsCarousel';
import { testimonials } from '../../lib/testimonials';

export const metadata: Metadata = {
  title: 'About Jimmy Winfield | AmplifyingCareers',
  description:
    'Jimmy Winfield combines recruitment expertise and an MSc in Psychology to help professionals navigate meaningful career change.',
  openGraph: {
    title: 'About Jimmy Winfield | AmplifyingCareers',
    description:
      'Jimmy Winfield combines recruitment expertise and an MSc in Psychology to help professionals navigate meaningful career change.',
    url: 'https://amplifyingcareers.com/about',
    siteName: 'AmplifyingCareers',
    type: 'website',
    images: [{ url: 'https://amplifyingcareers.com/jimmy-headshot.jpg', width: 1417, height: 2126, alt: 'Jimmy Winfield — Career Coach' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Jimmy Winfield | AmplifyingCareers',
    description:
      'Jimmy Winfield combines recruitment expertise and an MSc in Psychology to help professionals navigate meaningful career change.',
    images: ['https://amplifyingcareers.com/jimmy-headshot.jpg'],
  },
};

const CALENDAR_URL = 'https://calendar.app.google/1cGb6iaK3NZaXEe79';

const stats = [
  { value: '100+', label: 'Sessions Delivered' },
  { value: 'MSc', label: 'Psychology, Distinction' },
  { value: '1st', label: 'Class Honours' },
  { value: '★★★★★', label: 'LinkedIn Verified Reviews' },
];

const credentials = [
  'First-Class Honours degree',
  'MSc in Psychology with Distinction',
  'Recruitment background — UK Public Sector and international markets',
  'Faculty Employer Engagement and Placement Manager at Greenwich Business School',
  'Firework Licensed Career Coach',
  'Hundreds of coaching sessions delivered',
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero-inner reveal">
          <span className="eyebrow">About</span>
          <h1>Empowering careers through psychology and experience.</h1>
          <p className="lead">
            I help professionals find direction in transition, with coaching that combines psychology, recruitment insight, and practical career planning.
          </p>
        </div>
      </section>

      {/* ── Story + Photo — dark green ── */}
      <section className="about-story bg-dark">
        <div className="about-grid">
          <div className="about-text reveal">
            <article>
              <h3>My path to career coaching</h3>
              <p>
                A few years ago, I found myself at a crossroads. Having built a career in recruitment, completed internships in Spain and China, and earned a first-class degree, I had built a wide range of skills, but wasn&apos;t sure how they added up to something meaningful.
              </p>
              <p>
                For the first time in what had felt like a linear path, I was stuck. Despite being great at helping others land their dream jobs in recruitment, I couldn&apos;t apply that clarity to myself.
              </p>
            </article>

            <article>
              <h3>Discovering career coaching</h3>
              <p>
                While navigating my own transition, I found myself naturally helping friends to identify fulfilling paths and secure roles they were excited about. I loved this process, and upon reflection, I realised that I&apos;d discovered a love for career coaching.
              </p>
              <p>
                I became fascinated by the psychology behind career decisions: what holds people back, what drives us, and how our values and identity shape our direction. This led me to study an MSc in Psychology while working as Faculty Employer Engagement and Placement Manager at Greenwich Business School.
              </p>
            </article>

            <article>
              <h3>A bridge between hiring and psychology</h3>
              <p>
                During my research, I noticed a clear gap. Many coaches had recruitment experience but lacked psychological depth to help individuals discover their ideal careers. Others understood the psychology of careers, but hadn&apos;t engaged with employers or application processes. I saw the power in combining both.
              </p>
              <p>
                Today, through AmplifyingCareers, I blend hands-on market insight with psychology-based coaching to help professionals move beyond just getting hired, into careers that align with who they are and what they love.
              </p>
            </article>

            <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="btn btn-cream">
              Book a Free Career Check-In
            </a>
          </div>

          <div className="about-photo reveal reveal-delay-2">
            <Image
              src="/jimmy-headshot.jpg"
              alt="Jimmy Winfield — Career Coach"
              width={1417}
              height={2126}
              className="about-headshot"
            />
          </div>
        </div>
      </section>

      {/* ── Stat Cards — dark green ── */}
      <section className="about-stats-section bg-dark">
        <div className="about-stats-inner">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`about-stat-card reveal reveal-delay-${i + 1}`}>
              <span className="about-stat-value">{stat.value}</span>
              <span className="about-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="section-sm bg-cream" style={{paddingBottom: '1.5rem'}}>
        <div className="quote-section reveal">
          <blockquote className="pullquote">
            &ldquo;Most people do not need more motivation. They need clarity on what they actually want.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── Credentials ── */}
      <section className="credentials-section">
        <div className="credentials-inner reveal">
          <span className="eyebrow">Background</span>
          <h2>Credentials</h2>
          <div className="section-divider" />
          <div className="credentials-grid">
            {credentials.map((item) => (
              <div key={item} className="credential-item">
                <div className="credential-dot" aria-hidden="true" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials — dark green ── */}
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

      {/* ── CTA — cream ── */}
      <section className="section-sm bg-cream">
        <div className="cta-inner cta-light reveal">
          <span className="eyebrow">Ready to Begin?</span>
          <h2>Book a free career check&#8209;in.</h2>
          <p>
            A free 30-minute conversation to understand where you are and where you want to be. No pressure, no commitment.
          </p>
          <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
            Book Your Free Call
          </a>
        </div>
      </section>
    </>
  );
}
