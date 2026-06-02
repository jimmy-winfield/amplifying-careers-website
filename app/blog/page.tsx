import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career Conversations | AmplifyingCareers',
  description:
    'Monthly interviews with professionals sharing honest career stories and advice.',
  openGraph: {
    title: 'Career Conversations | AmplifyingCareers',
    description:
      'Monthly interviews with professionals sharing honest career stories and advice.',
    url: 'https://amplifyingcareers.com/blog',
    siteName: 'AmplifyingCareers',
    type: 'website',
    images: [{ url: 'https://amplifyingcareers.com/jimmy-headshot.jpg', width: 1417, height: 2126, alt: 'Jimmy Winfield — Career Coach' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Conversations | AmplifyingCareers',
    description:
      'Monthly interviews with professionals sharing honest career stories and advice.',
    images: ['https://amplifyingcareers.com/jimmy-headshot.jpg'],
  },
};

const upcomingTopics = [
  {
    topic: 'Pivoting industries in your 30s',
    teaser: 'A senior professional shares what it really took to leave a stable career and start again with purpose.',
  },
  {
    topic: 'Finding confidence after redundancy',
    teaser: 'An honest conversation about rebuilding identity, self-worth, and direction after an unexpected setback.',
  },
  {
    topic: 'Getting promoted without burning out',
    teaser: 'How one leader navigated ambition and wellbeing — and the trade-offs nobody talks about.',
  },
  {
    topic: 'From graduate to strategic hire',
    teaser: 'What changed when one candidate stopped applying to everything and started targeting with intention.',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero-inner reveal">
          <span className="eyebrow">Blog</span>
          <h1>Career Conversations.</h1>
          <p className="lead">
            Monthly interviews with professionals across industries sharing honest career stories and advice.
          </p>
        </div>
      </section>

      {/* ── Coming Soon Hero — dark green ── */}
      <section className="section bg-dark">
        <div className="blog-coming-soon reveal">
          <div className="blog-coming-badge">
            <span className="blog-coming-dot" aria-hidden="true" />
            First interviews dropping soon
          </div>
          <h2 className="blog-coming-headline">Career Conversations are coming.</h2>
          <p className="blog-coming-sub">
            Monthly interviews with professionals sharing the honest stories behind their career decisions — the pivots, the setbacks, and the breakthroughs. Real people. Real lessons.
          </p>
        </div>
      </section>

      {/* ── Topic Preview Grid — cream ── */}
      <section className="section bg-cream">
        <div className="blog-preview-inner">
          <div className="section-intro reveal">
            <span className="eyebrow">Coming Up</span>
            <h2>Topics in the pipeline</h2>
            <p>A look at some of the conversations we&apos;re putting together. Subscribe to be the first to know when they drop.</p>
          </div>

          <div className="blog-preview-grid">
            {upcomingTopics.map((item, i) => (
              <div key={item.topic} className={`blog-preview-card reveal reveal-delay-${i + 1}`}>
                <div className="blog-preview-soon">Coming Soon</div>
                <h3 className="blog-preview-topic">{item.topic}</h3>
                <p className="blog-preview-teaser">{item.teaser}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — dark green ── */}
      <section className="section-sm bg-dark">
        <div className="cta-inner reveal">
          <span className="eyebrow-light">Don&apos;t Wait</span>
          <h2>Start your own conversation.</h2>
          <p>
            While the first interviews are being prepared, book a free 30-minute career check-in and get clarity on your next step today.
          </p>
          <a
            href="https://calendar.app.google/1cGb6iaK3NZaXEe79"
            target="_blank"
            rel="noreferrer"
            className="btn btn-cream"
          >
            Book Your Free Call
          </a>
        </div>
      </section>
    </>
  );
}
