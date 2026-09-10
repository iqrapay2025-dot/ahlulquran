import { useState, useEffect, useCallback } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Carousel from '../components/Carousel';
import { BookIcon, QuranIcon, RefreshIcon, PenIcon, MoonIcon, LaptopIcon, MailIcon, PhoneIcon, PinIcon } from '../components/FlatIcons';
import img1 from '../imports/img1.jpeg';
import img2 from '../imports/img2.jpeg';
import img3 from '../imports/img3.jpeg';

const CONFERENCE_DATE = new Date('2026-10-04T10:00:00+01:00');
const TICKET_HREF = 'https://hilaq.com/e/international-quran-conference';

function useCountdown() {
  const calc = useCallback(() => {
    const diff = CONFERENCE_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  }, []);

  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, [calc]);
  return time;
}

interface HomeProps {
  onNavigate: (page: string) => void;
}

const IMPACT_STATS = [
  { value: '500+', label: 'Students Reached' },
  { value: '5th', label: 'Annual Conference' },
  { value: '6', label: 'Academy Programmes' },
  { value: '8+', label: 'Scholars & Speakers' },
];

const ACADEMY_COURSES = [
  { Icon: BookIcon, title: "Qur'an & Tajweed", desc: 'Master precise, beautiful recitation.' },
  { Icon: QuranIcon, title: 'Tahfiz', desc: 'Full memorisation of the Holy Qur\u2019an.' },
  { Icon: RefreshIcon, title: 'Murāja\u2019ah', desc: 'Structured revision that keeps Hifz strong.' },
  { Icon: PenIcon, title: 'Arabic', desc: 'Understand the language of revelation.' },
  { Icon: MoonIcon, title: 'Islamic Studies', desc: '\u2018Aqīdah, Fiqh, Sīrah and more.' },
  { Icon: LaptopIcon, title: 'Online Classes', desc: 'Learn live from anywhere in the world.' },
];

const MEDIA_PREVIEW = [
  {
    img: img1,
    tag: 'Gallery',
    title: 'Moments from our classes, seminars & community programmes',
  },
  {
    img: img2,
    tag: 'Recitation',
    title: "IQC 5.0 — Highlights from the Qur'an Conference",
  },
  {
    img: img3,
    tag: 'Community',
    title: 'Together in the service of the Qur’an',
  },
];

const NAVY = '#16201A';
const GREEN = '#12522F';
const GOLD = '#FFC153';
const MUTED = '#5A7265';

const HERO_SLIDES = [
  { src: img1, alt: "Ahlul Qur'an Foundation gathering" },
  { src: img2, alt: "Qur'anic recitation at an Ahlul Qur'an event" },
  { src: img3, alt: "Together in the service of the Qur'an" },
];

export default function Home({ onNavigate }: HomeProps) {
  const countdown = useCountdown();
  useScrollAnimation('home');

  return (
    <div className="page-enter min-h-screen" style={{ backgroundColor: '#F7F6EF' }}>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center px-5 overflow-hidden" style={{ backgroundColor: '#0A331C' }}>
        <div className="absolute inset-0">
          <Carousel
            slides={HERO_SLIDES}
            interval={6000}
            showControls
            controlAlign="bottom"
            rootClassName="absolute inset-0"
            slideClassName="absolute inset-0 flex items-center justify-center"
            render={(s) => (
              <img src={s.src} alt={s.alt} className="w-full h-full object-cover opacity-60" />
            )}
          />
          {/* Cinematic overlay: heavier brand tint + vignette + depth gradient */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,51,28,0.85), rgba(10,51,28,0.55) 38%, rgba(10,51,28,0.7) 68%, rgba(10,51,28,0.9) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 38%, rgba(10,51,28,0.28) 0%, rgba(10,51,28,0.5) 55%, rgba(10,51,28,0.72) 100%)' }} />
        </div>
        <div className="relative z-30 max-w-3xl mx-auto text-center pt-24 pb-16">
          <span className="hero-badge inline-block text-[11px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full mb-8" style={{ color: GOLD, backgroundColor: 'rgba(255,193,83,0.12)', border: '1px solid rgba(255,193,83,0.25)' }}>
            Ahlul Qur'an Foundation · Nigeria
          </span>
          <h1 className="hero-title font-serif font-black text-white leading-tight mb-6" style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)' }}>
            Rooted in the Qur'an,<br />
            <span style={{ color: GOLD }}>Building the Ummah</span>
          </h1>
          <p className="hero-sub text-white/65 max-w-xl mx-auto mb-10 text-sm md:text-base leading-loose">
            We teach the Qur'an, train its memorisers, and gather the Ummah around
            its guidance — through our Academy, the International Qur'an Conference,
            media, and community programmes.
          </p>
          <div className="hero-cta flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('academy')}
              className="btn-glow font-bold text-sm px-9 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              Explore the Academy
            </button>
            <button
              onClick={() => onNavigate('iqc')}
              className="font-semibold text-sm px-9 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
            >
              IQC 5.0 →
            </button>
          </div>

          {/* Countdown to IQC 5.0 */}
          <div className="hero-cta mt-14 inline-flex gap-6 md:gap-10 px-8 py-5 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
            {[
              { v: countdown.days, l: 'Days' },
              { v: countdown.hours, l: 'Hours' },
              { v: countdown.minutes, l: 'Mins' },
              { v: countdown.seconds, l: 'Secs' },
            ].map((t) => (
              <div key={t.l} className="text-center">
                <p className="font-serif font-black text-2xl md:text-3xl" style={{ color: GOLD }}>
                  {String(t.v).padStart(2, '0')}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-white/45 mt-1">{t.l}</p>
              </div>
            ))}
          </div>
          <p className="text-white/40 text-xs mt-4">Until IQC 5.0 · 4 October 2026 · Ibadan</p>
        </div>
      </section>

      {/* ── ABOUT AHLUL QUR'AN ── */}
      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-reveal max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GREEN }}>Who We Are</span>
            <h2 className="font-serif font-black mt-4 mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: NAVY }}>
              About Ahlul Qur'an
            </h2>
            <p className="text-sm md:text-base leading-loose" style={{ color: MUTED }}>
              Ahlul Qur'an Foundation is a Nigerian non-profit dedicated to the study,
              memorisation, and lived application of the Holy Qur'an. We serve students of
              every age through structured Qur'anic education, run Tahfiz and revision
              programmes, host seminars and community classes, and organise the annual
              International Qur'an Conference that gathers scholars and reciters from
              across Nigeria and beyond.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {IMPACT_STATS.map((s, i) => (
              <div
                key={s.label}
                className="scroll-reveal card-lift rounded-2xl p-6 md:p-8 text-center"
                style={{ backgroundColor: '#fff', transitionDelay: `${i * 80}ms` }}
              >
                <p className="font-serif font-black text-3xl md:text-4xl" style={{ color: GREEN }}>{s.value}</p>
                <p className="text-xs mt-2 font-semibold" style={{ color: MUTED }}>{s.label}</p>
              </div>
            ))}
          </div>
          <div className="scroll-reveal text-center mt-10">
            <button
              onClick={() => onNavigate('about')}
              className="font-bold text-sm px-8 py-4 rounded-full border-2 border-dark-green transition-all duration-300 hover:scale-[1.02] hover:bg-dark-green hover:text-white"
              style={{ borderColor: NAVY, color: NAVY }}
            >
              Learn More About Us →
            </button>
          </div>
        </div>
      </section>

            {/* ── ACADEMY TEASER ── */}
      <section className="py-20 md:py-28 px-5 md:px-8" style={{ backgroundColor: '#EEEEE7' }}>
        <div className="max-w-6xl mx-auto">
          <div className="scroll-reveal text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GREEN }}>Our Academy</span>
            <h2 className="font-serif font-black mt-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: NAVY }}>
              Qur'anic Education for Every Stage
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ACADEMY_COURSES.map((c, i) => (
              <div
                key={c.title}
                className="scroll-reveal card-lift rounded-2xl p-7"
                style={{ backgroundColor: '#fff', transitionDelay: `${i * 70}ms` }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(18,82,47,0.1)', color: GREEN }}>
                  <c.Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-base mb-2" style={{ color: NAVY }}>{c.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: MUTED }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="scroll-reveal text-center mt-10">
            <button
              onClick={() => onNavigate('academy')}
              className="font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: GREEN, color: '#fff' }}
            >
              Visit the Academy →
            </button>
          </div>
        </div>
      </section>

{/* ── IQC 5.0 SPOTLIGHT ── */}
      <section className="relative overflow-hidden py-24 px-5" style={{ backgroundColor: '#0A331C' }}>
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #FFC153 0%, transparent 50%), radial-gradient(circle at 80% 50%, #FFC153 0%, transparent 50%)' }}
        />
        <div className="relative max-w-4xl mx-auto text-center scroll-reveal">
          <span
            className="inline-block text-[11px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full mb-8"
            style={{ color: GOLD, backgroundColor: 'rgba(255,193,83,0.12)', border: '1px solid rgba(255,193,83,0.25)' }}
          >
            5th International Qur'an Conference
          </span>
          <h2 className="font-serif font-black text-white leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}>
            Qur'anic Paradigms of Reform
          </h2>
          <p className="text-white/65 max-w-xl mx-auto mb-4 text-sm leading-loose">
            Reconstructing the Intellectual, Ethical, Spiritual &amp; Societal Foundations of the Ummah
          </p>
          <p className="mb-2 text-sm font-semibold" style={{ color: GOLD }}>
            Main Question — Beyond Recitation: How Can the Qur'an Truly Reform the Ummah?
          </p>
          <p className="text-white/50 text-sm mb-10">
            Sun, 4 October 2026 · Int'l Conference Centre, University of Ibadan
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={TICKET_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow font-bold text-sm px-9 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              Get Tickets →
            </a>
            <button
              onClick={() => onNavigate('iqc')}
              className="font-semibold text-sm px-9 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
            >
              Explore IQC 5.0
            </button>
          </div>
        </div>
      </section>

            {/* ── MEDIA HIGHLIGHT ── */}
      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Text column */}
            <div className="scroll-reveal">
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GREEN }}>Media &amp; Resources</span>
              <h2 className="font-serif font-black mt-4" style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)', color: NAVY }}>
                Recent From Ahlul Qur'an
              </h2>
              <p className="text-sm leading-relaxed mt-4" style={{ color: MUTED }}>
                Conference recordings, recitations and a growing photo gallery —
                stay connected to Ahlul Qur'an's lectures, programmes and events
                through our media library.
              </p>
              <ul className="mt-6 space-y-2.5">
                {['Conference &amp; lecture recordings', 'Qur’anic recitations &amp; audio', 'A visual archive of our events'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm" style={{ color: NAVY }}>
                    <svg className="w-4 h-4 shrink-0" style={{ color: GREEN }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onNavigate('media')}
                className="mt-8 font-bold text-sm px-8 py-4 rounded-full border-2 transition-all duration-300 hover:scale-[1.02]"
                style={{ borderColor: NAVY, color: NAVY }}
              >
                Explore Media &amp; Resources →
              </button>
            </div>
            {/* Carousel column */}
            <div className="relative">
              <Carousel
                slides={MEDIA_PREVIEW}
                interval={5500}
                showControls
                controlAlign="edges"
                rootClassName="relative h-[440px]"
                slideClassName="absolute inset-0 flex items-center justify-center"
                render={(m) => (
                  <div
                    onClick={() => onNavigate('media')}
                    className="card-lift rounded-2xl overflow-hidden cursor-pointer w-full max-w-md mx-auto h-[400px]"
                    style={{ backgroundColor: '#fff' }}
                  >
                    <div className="h-60 overflow-hidden" style={{ backgroundColor: '#0A331C' }}>
                      <img src={m.img} alt={m.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="p-5">
                      <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: GREEN }}>{m.tag}</span>
                      <p className="text-sm font-semibold mt-2 leading-snug" style={{ color: NAVY }}>{m.title}</p>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </section>

{/* ── SUPPORT CTA ── */}
      <section className="py-20 md:py-28 px-5 md:px-8" style={{ backgroundColor: '#EEEEE7' }}>
        <div className="scroll-reveal max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GREEN }}>Support the Mission</span>
          <h2 className="font-serif font-black mt-4 mb-5" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: NAVY }}>
            Every contribution helps us take the Qur'an further
          </h2>
          <p className="text-sm leading-loose mb-9" style={{ color: MUTED }}>
            Donate, sponsor a student, sponsor a Qur'an, fund a class, support IQC,
            or become a partner — every form of giving carries the Qur'an to more hearts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('support')}
              className="btn-glow font-bold text-sm px-9 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              Support Ahlul Qur'an →
            </button>
            <button
              onClick={() => onNavigate('events')}
              className="font-semibold text-sm px-9 py-4 rounded-full border-2 transition-all duration-300 hover:scale-[1.02]"
              style={{ borderColor: NAVY, color: NAVY }}
            >
              Upcoming Events
            </button>
          </div>
        </div>
      </section>

      {/* ── CONTACT STRIP ── */}
      <section className="py-16 px-5" style={{ backgroundColor: NAVY }}>
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          <h2 className="font-serif font-bold text-white text-xl md:text-2xl mb-4">Get in Touch</h2>
          <p className="text-white/55 text-sm mb-6">
            Questions about enrolment, partnership, or the conference? We would love to hear from you.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 text-sm text-white/70 mb-8">
            <span className="inline-flex items-center gap-2"><MailIcon className="w-4 h-4" style={{ color: GOLD }} /> ahlulquranf@gmail.com</span>
            <span className="inline-flex items-center gap-2"><PhoneIcon className="w-4 h-4" style={{ color: GOLD }} /> +234 808 936 0199</span>
            <span className="inline-flex items-center gap-2"><PinIcon className="w-4 h-4" style={{ color: GOLD }} /> Ibadan, Nigeria</span>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: GOLD, color: NAVY }}
          >
            Contact Us →
          </button>
        </div>
      </section>
    </div>
  );
}
