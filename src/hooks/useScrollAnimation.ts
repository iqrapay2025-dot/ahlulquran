import { useEffect } from 'react';

export function useScrollAnimation(key?: string) {
  useEffect(() => {
    let rafId: number;
    let observer: IntersectionObserver | undefined;
    let mutationObserver: MutationObserver | undefined;
    let disposed = false;
    const observed = new WeakSet<Element>();
    const selector = '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right';

    rafId = requestAnimationFrame(() => {
      if (disposed) return;

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

      const watch = () => {
        if (disposed || !observer) return;
        document.querySelectorAll(selector).forEach((el) => {
          if (!observed.has(el)) {
            observed.add(el);
            observer!.observe(el);
          }
        });
      };

      watch();

      // Observe elements added to the DOM after mount (e.g. tab content,
      // filters, lazily-rendered lists). Without this, freshly mounted
      // .scroll-reveal elements stay at opacity:0 and appear as blank space.
      // The rescan is debounced so rapid DOM mutations (typing, carousel
      // transitions, filtering) don't re-scan the whole document every tick.
      let mutationT: ReturnType<typeof setTimeout>;
      mutationObserver = new MutationObserver(() => {
        if (mutationT) clearTimeout(mutationT);
        mutationT = setTimeout(watch, 80);
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      observer?.disconnect();
      mutationObserver?.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
}
