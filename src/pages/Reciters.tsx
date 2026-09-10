import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Carousel from '../components/Carousel';
import males1Img from '../imports/males 1.jpeg';
import males2Img from '../imports/males 2.jpeg';
import males3Img from '../imports/males 3.jpeg';
import females1Img from '../imports/females 1.jpeg';

interface RecitersProps {
  onNavigate: (page: string) => void;
}

const NAVY = '#16201A';
const GREEN = '#12522F';
const GOLD = '#FFC153';
const MUTED = '#5A7265';

const RECITER_SLIDES = [
  { img: males1Img, label: 'Male Reciters' },
  { img: males2Img, label: 'Male Reciters' },
  { img: males3Img, label: 'Male Reciters' },
  { img: females1Img, label: 'Female Reciters' },
];
export default function Reciters({ onNavigate }: RecitersProps) {
  useScrollAnimation('reciters');

  return (
    <div className="page-enter min-h-screen" style={{ backgroundColor: '#F7F6EF' }}>
      {/* Header */}
      <div className="pt-32 pb-20 px-5 md:px-8 relative overflow-hidden" style={{ backgroundColor: '#0A331C' }}>
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 15% 60%, #FFC153 0%, transparent 55%), radial-gradient(circle at 85% 40%, #FFC153 0%, transparent 55%)' }}
        />
        <div className="max-w-6xl mx-auto relative text-center">
          <span
            className="inline-block text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
            style={{ color: GOLD, backgroundColor: 'rgba(255,193,83,0.12)', border: '1px solid rgba(255,193,83,0.25)' }}
          >
            IQC 5.0
          </span>
          <h1 className="font-serif font-black text-white mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)' }}>
            Meet Our <span style={{ color: GOLD }}>Reciters</span>
          </h1>
          <p className="text-white/60 text-sm max-w-xl mx-auto leading-loose">
            The voices of IQC 5.0 — Qurrā' whose recitation turns hearts, each carrying
            the Qur'an with precision, beauty and reverence.
          </p>
        </div>
      </div>

      {/* Text + Auto-Carousel (contact-form style row) */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Text column */}
          <div className="scroll-reveal-left md:sticky md:top-24">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GREEN }}>
              IQC 5.0 · The Voices
            </span>
            <h2
              className="font-serif font-black mt-4 leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: NAVY }}
            >
              Meet our confirmed<br />
              <span style={{ color: GREEN }}>reciters</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>
              The voices of IQC 5.0 — our male and female Qurrā'. Use the arrows or dots
              to cycle through the photos automatically.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <span
                className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-2 rounded-full"
                style={{ backgroundColor: 'rgba(18,82,47,0.1)', color: GREEN }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FFC153' }} />
                Male Reciters
              </span>
              <span
                className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-2 rounded-full"
                style={{ backgroundColor: 'rgba(18,82,47,0.1)', color: GREEN }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#B5352A' }} />
                Female Reciters
              </span>
              <span
                className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-2 rounded-full"
                style={{ backgroundColor: NAVY, color: '#F7F6EF' }}
              >
                4 Confirmed Photos
              </span>
            </div>
          </div>

          {/* Auto-carousel column */}
          <div className="scroll-reveal-right">
            <Carousel
              slides={RECITER_SLIDES}
              interval={3500}
              showControls
              controlAlign="edges"
              dotsMode="below"
              rootClassName="relative h-[560px] sm:h-[540px]"
              slideClassName="absolute inset-0 flex items-center justify-center"
              render={(r, i) => (
                <div
                  className="flex flex-col rounded-2xl overflow-hidden shadow-xl w-full max-w-md mx-auto"
                  style={{ backgroundColor: '#fff' }}
                >
                  <div className="relative h-[420px] overflow-hidden" style={{ backgroundColor: '#0A331C' }}>
                    <img
                      src={r.img}
                      alt={r.label}
                      className="w-full h-full object-cover"
                    />
                    <span
                      className="absolute bottom-4 left-4 text-[10px] font-bold px-3 py-1 rounded-full"
                      style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff', backdropFilter: 'blur(4px)' }}
                    >
                      {r.label}
                    </span>
                    <span
                      className="absolute bottom-4 right-4 text-[10px] font-bold px-3 py-1 rounded-full"
                      style={{ backgroundColor: 'rgba(10,51,28,0.6)', color: '#fff', backdropFilter: 'blur(4px)' }}
                    >
                      {i + 1} / {RECITER_SLIDES.length}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif font-bold text-lg leading-snug mb-1.5" style={{ color: NAVY }}>
                      {r.label}
                    </h3>
                    <p className="text-xs font-semibold" style={{ color: '#0A331C' }}>
                      IQC 5.0 Confirmed
                    </p>
                  </div>
                </div>
              )}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="scroll-reveal mt-14 rounded-2xl p-10 md:p-14 text-center" style={{ backgroundColor: NAVY }}>
          <p className="font-serif font-bold text-white leading-tight mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            Hear them live at <span style={{ color: GOLD }}>IQC 5.0</span>
          </p>
          <p className="text-white/50 text-sm mb-8">
            Sunday, 4 October 2026 · Int'l Conference Centre, University of Ibadan
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://hilaq.com/e/international-quran-conference"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow font-bold text-sm px-9 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              Get Tickets →
            </a>
            <button
              onClick={() => onNavigate('sessions')}
              className="font-semibold text-sm px-9 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
            >
              View Programme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
