import { useEffect } from 'react';

export function useScrollAnimation(key?: string) {
  useEffect(() => {
    let rafId: number;
    let observer: IntersectionObserver;

    rafId = requestAnimationFrame(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            } else if (
              // Only remove visible for elements still BELOW the viewport
              // (not yet reached). Elements scrolled past (above) stay visible.
              entry.boundingClientRect.top > (window.innerHeight ?? document.documentElement.clientHeight)
            ) {
              entry.target.classList.remove('visible');
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
      );

      document
        .querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right')
        .forEach((el) => observer.observe(el));
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
}
