import { useState, useEffect, useRef } from 'react';

interface CarouselProps<T> {
  slides: T[];
  render: (slide: T, index: number) => React.ReactElement;
  /** Auto-advance interval in ms. Set to 0 to disable auto-play. */
  interval?: number;
  /** Show prev/next arrows and dot indicators. */
  showControls?: boolean;
  /** Extra classes for the outer container (positioning/height). */
  rootClassName?: string;
  /** Extra classes applied to each absolutely-positioned slide layer. */
  slideClassName?: string;
  /** Positional variant for controls: 'edges' (arrows on left/right) or 'bottom' (dots only). */
  controlAlign?: 'edges' | 'bottom';
  /** Dot indicator placement: 'overlay' (glass pill over the slide) or 'below' (centred under the stage). */
  dotsMode?: 'overlay' | 'below';
}

export default function Carousel<T>({
  slides,
  render,
  interval = 5000,
  showControls = true,
  rootClassName = '',
  slideClassName = '',
  controlAlign = 'edges',
  dotsMode = 'overlay',
}: CarouselProps<T>) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);
  pausedRef.current = paused;

  useEffect(() => {
    if (interval <= 0 || slides.length < 2) return () => undefined;
    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [interval, slides.length]);

  const go = (n: number) =>
    setIndex(((n % slides.length) + slides.length) % slides.length);

  const count = slides.length;
  const showArrows = showControls && controlAlign === 'edges' && count > 1;

  const dots = count > 1 && (
    <div
      className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 shadow-lg backdrop-blur-md"
      style={{ backgroundColor: 'rgba(10,51,28,0.55)', border: '1px solid rgba(255,255,255,0.14)' }}
    >
      {slides.map((_, i) => (
        <button
          key={i}
          onClick={() => go(i)}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={i === index}
          className="rounded-full transition-all duration-300"
          style={{
            width: i === index ? 22 : 8,
            height: 8,
            backgroundColor: i === index ? '#FFC153' : 'rgba(255,255,255,0.45)',
            boxShadow: i === index ? '0 0 10px rgba(255,193,83,0.55)' : 'none',
          }}
        />
      ))}
    </div>
  );

  const arrows = showArrows && (
    <>
      <button
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-105 active:scale-95"
        style={{ backgroundColor: 'rgba(10,51,28,0.88)', border: '1px solid rgba(255,255,255,0.18)', color: '#fff' }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => go(index + 1)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-105 active:scale-95"
        style={{ backgroundColor: 'rgba(10,51,28,0.88)', border: '1px solid rgba(255,255,255,0.18)', color: '#fff' }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </>
  );

  return (
    <div className={rootClassName} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {slides.map((s, i) => (
        <div
          key={i}
          aria-hidden={i !== index}
          className={`${slideClassName} transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          style={{ zIndex: i === index ? 2 : 1 }}
        >
          {render(s, i)}
        </div>
      ))}

      {arrows}

      {showControls && count > 1 && dotsMode === 'overlay' && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">{dots}</div>
      )}
      {showControls && count > 1 && dotsMode === 'below' && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-10">{dots}</div>
      )}
    </div>
  );
}
