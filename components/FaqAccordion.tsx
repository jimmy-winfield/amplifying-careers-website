'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'How are sessions delivered?',
    a: 'All sessions are delivered online via video call, so you can work with me from anywhere in the world. Sessions typically last 60 minutes.',
  },
  {
    q: 'How often do we meet?',
    a: 'Most clients have sessions every one to two weeks, depending on their schedule and pace. The programme is designed to be flexible around your life.',
  },
  {
    q: 'How long does the Career Compass Programme take?',
    a: 'The 10-session programme typically runs over three to five months, depending on how frequently we meet. This gives you enough time to reflect, experiment, and implement between sessions.',
  },
  {
    q: 'What happens after the programme ends?',
    a: 'You leave with a complete career archive of over 12 workbooks, a concrete action plan, and the tools to keep moving forward independently. Many clients find the frameworks continue to support them long after our final session.',
  },
  {
    q: 'Is this right for me if I have no idea what I want?',
    a: 'Yes, that is exactly who the Career Compass Programme is designed for. You do not need to have any clarity before we start. That is what we build together.',
  },
  {
    q: 'How is this different from other career coaches?',
    a: 'Most career coaching focuses on job search tactics. This programme goes deeper, combining psychology-based coaching with practical recruitment insight to help you understand yourself, identify the right direction, and then secure it. It does not stop at the decision. It goes all the way to the plan.',
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {faqs.map((item, i) => (
        <div key={i} className={`faq-item${open === i ? ' faq-item-open' : ''}`}>
          <button
            className="faq-question"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{item.q}</span>
            <span className="faq-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 6.5L9 11.5L14 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
          {open === i && (
            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
