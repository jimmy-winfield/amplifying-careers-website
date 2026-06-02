'use client';
import Image from 'next/image';
import { useState, useRef, useCallback } from 'react';
import type { Testimonial } from '../lib/testimonials';

export default function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length),
    [testimonials.length],
  );

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % testimonials.length),
    [testimonials.length],
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 48) {
      diff > 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  const t = testimonials[current];

  return (
    <div className="carousel-outer">
      <div
        className="carousel-track"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button className="carousel-btn" onClick={prev} aria-label="Previous review">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="carousel-slide">
          <div key={current} className="carousel-content">
            <div className="carousel-stars" aria-label="Five stars">★★★★★</div>
            <blockquote className="carousel-quote">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="carousel-author">
              <Image
                src={t.photo}
                alt={t.name}
                width={56}
                height={56}
                className="carousel-avatar"
              />
              <div className="carousel-author-info">
                <p className="carousel-name">{t.name}</p>
                <p className="carousel-role">{t.role}</p>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-btn" onClick={next} aria-label="Next review">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className="carousel-dots" role="group" aria-label="Testimonial navigation">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`View review ${i + 1} of ${testimonials.length}`}
            aria-pressed={i === current}
          />
        ))}
      </div>
    </div>
  );
}
