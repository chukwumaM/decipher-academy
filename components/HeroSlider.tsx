'use client';

import { useEffect, useState } from 'react';

type Slide = { _id: string; imageUrl: string; caption: string };

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!slides.length) return;
    const timer = setInterval(() => setIndex((v) => (v + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (!slides.length) return <section className="hero">Luxury, timeless, and elegant.</section>;

  return (
    <section className="hero" style={{ backgroundImage: `url(${slides[index].imageUrl})` }}>
      <div className="overlay">
        <h1>Wendy Luxury</h1>
        <p>{slides[index].caption || 'Luxury style for every moment.'}</p>
      </div>
    </section>
  );
}
