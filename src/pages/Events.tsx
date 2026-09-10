import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CapIcon, TrophyIcon, LaptopIcon, BookIcon, NoteIcon, SproutIcon } from '../components/FlatIcons';

interface EventsProps {
  onNavigate: (page: string) => void;
}

const NAVY = '#16201A';
const GREEN = '#12522F';
const GOLD = '#FFC153';
const MUTED = '#5A7265';
const TICKET_HREF = 'https://hilaq.com/e/international-quran-conference';

const UPCOMING = [
  {
    date: '4 Oct 2026',
    day: 'Sunday',
    title: "IQC 5.0 — 5th International Qur'an Conference",
    type: 'Conference',
    venue: "Int'l Conference Centre, University of Ibadan",
    desc: "Qur'anic Paradigms of Reform — a full day of recitations, keynote, lectures, panel session and special Qur'anic presentations.",
    href: TICKET_HREF,
  },
];

const CATEGORIES = [
  { Icon: CapIcon, label: 'Seminars & Workshops' },
  { Icon: TrophyIcon, label: "Qur'an Competitions" },
  { Icon: LaptopIcon, label: 'Webinars' },
  { Icon: BookIcon, label: 'Tafsir Sessions' },
  { Icon: NoteIcon, label: 'Recitation Programmes' },
  { Icon: SproutIcon, label: 'Youth Programmes' },
];

const PAST = [
  { title: 'IQC 4.0 — 4th International Qur\u2019an Conference', meta: 'Held · Ibadan' },
  { title: 'Community Tafsir Series — Ramadan Edition', meta: 'Held · Monthly Tafsir' },
  { title: 'Youth Tahfiz Encouragement Day', meta: 'Held · Youth Programme' },
];

export default function Events({ onNavigate }: EventsProps) {
  useScrollAnimation('events');

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
            Events
          </span>
          <h1 className="font-serif font-black text-white mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)' }}>
            Gather Around <span style={{ color: GOLD }}>the Qur'an</span>
          </h1>
          <p className="text-white/60 text-sm max-w-xl mx-auto leading-loose">
            Conferences, seminars, competitions, tafsir sessions and youth programmes —
            find out what is coming up and what we have already hosted.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        {/* Upcoming */}
        <div className="scroll-reveal mb-4">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GREEN }}>Upcoming Events</span>
        </div>
        {UPCOMING.map((e) => (
          <div key={e.title} className="scroll-reveal card-lift rounded-2xl overflow-hidden mb-8" style={{ backgroundColor: GREEN }}>
            <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
              <div className="text-center md:text-left md:min-w-[140px]">
                <p className="font-serif font-black text-3xl" style={{ color: GOLD }}>{e.date}</p>
                <p className="text-white/50 text-xs mt-1">{e.day}</p>
              </div>
              <div className="flex-1">
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3"
                  style={{ backgroundColor: 'rgba(255,193,83,0.15)', color: GOLD }}
                >
                  {e.type}
                </span>
                <h2 className="font-serif font-bold text-white text-lg md:text-xl mb-2">{e.title}</h2>
                <p className="text-white/55 text-sm mb-1">📍 {e.venue}</p>
                <p className="text-white/50 text-sm leading-relaxed">{e.desc}</p>
              </div>
              <div className="shrink-0">
                <a
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow inline-block font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110"
                  style={{ backgroundColor: GOLD, color: NAVY }}
                >
                  Get Tickets →
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Event categories */}
        <div className="scroll-reveal mb-4 mt-14">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GREEN }}>What We Organise</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
          {CATEGORIES.map((c, i) => (
            <div
              key={c.label}
              className="scroll-reveal card-lift rounded-2xl p-6 flex items-center gap-4"
              style={{ backgroundColor: '#fff', transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(18,82,47,0.1)', color: GREEN }}>
                <c.Icon className="w-5 h-5" />
              </div>
              <p className="text-sm font-bold" style={{ color: NAVY }}>{c.label}</p>
            </div>
          ))}
        </div>

        {/* Past events */}
        <div className="scroll-reveal mb-4">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GREEN }}>Past Events — Archive</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {PAST.map((p, i) => (
            <div
              key={p.title}
              className="scroll-reveal card-lift rounded-2xl p-6"
              style={{ backgroundColor: '#EEEEE7', transitionDelay: `${i * 80}ms` }}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: MUTED }}>{p.meta}</span>
              <p className="font-serif font-bold text-sm mt-2" style={{ color: NAVY }}>{p.title}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="scroll-reveal rounded-2xl p-10 md:p-14 text-center" style={{ backgroundColor: NAVY }}>
          <p className="font-serif font-bold text-white leading-tight mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            Never miss an event<br />
            <span style={{ color: GOLD }}>around the Qur'an</span>
          </p>
          <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">
            Follow our social channels or contact us to be notified of every programme.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-glow font-bold text-sm px-9 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              Contact Us →
            </button>
            <button
              onClick={() => onNavigate('media')}
              className="font-semibold text-sm px-9 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
            >
              See Media &amp; Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
