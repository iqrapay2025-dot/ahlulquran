import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SpeakersProps {
  onNavigate: (page: string) => void;
}

const SPEAKERS = [
  {
    name: 'Professor Habeebah Oladosu',
    role: "Panelist — Qur'anic Paradigms of Reform",
    sessions: ['IQC 5.0 Panel Discussion'],
    bio: "Professor Habeebah Oladosu is a distinguished scholar whose work bridges Qur'anic studies, Islamic reform, and contemporary social thought. She brings a rigorous intellectual perspective to the question of how the Qur'an can reconstruct the foundations of the Ummah.",
    initials: 'HO',
    color: '#0A331C',
    accent: '#FFC153',
    session: 'Panel Discussion',
    img: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?w=400&h=480&fit=crop&auto=format&crop=faces',
  },
  {
    name: 'Ustaaz Alli Abdus Salaam Temitope',
    role: "Panelist — Qur'anic Paradigms of Reform",
    sessions: ['IQC 5.0 Panel Discussion'],
    bio: "Ustaaz Alli Abdus Salaam Temitope is a respected Islamic scholar and educator who brings deep knowledge of Qur'anic studies and a practical commitment to religious reform and community uplift across the region.",
    initials: 'AT',
    color: '#B5352A',
    accent: '#fff',
    session: 'Panel Discussion',
    img: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=480&fit=crop&auto=format&crop=faces',
  },
  {
    name: 'Sheikh Abdullah AbdulHakeem Ajigini',
    role: "Panelist — Qur'anic Paradigms of Reform",
    sessions: ['IQC 5.0 Panel Discussion'],
    bio: "Sheikh Abdullah AbdulHakeem Ajigini is a well-known Qur'anic scholar and community leader whose work focuses on making the Qur'an's guidance practical for everyday life and for the moral renewal of the Ummah.",
    initials: 'AA',
    color: '#12522F',
    accent: '#FFC153',
    session: 'Panel Discussion',
    img: 'https://images.unsplash.com/photo-1627931539006-d5c4677e05ea?w=400&h=480&fit=crop&auto=format&crop=faces',
  },
  {
    name: 'Sheikh Abdus Somod Taqwalloh (An Najedbiy)',
    role: "Speaker — From it's preservation in the heart to the transformation in conduct",
    sessions: ['Guest Lecture'],
    bio: "Sheikh Abdus Somod Taqwalloh (An Najedbiy) presents \"From it's preservation in the heart to the transformation in conduct\" — exploring how preserving the Qur'an in the heart leads to a genuine transformation in one's actions and character.",
    initials: 'ST',
    color: '#16201A',
    accent: '#FFC153',
    session: 'Guest Lecture',
    img: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=400&h=480&fit=crop&auto=format&crop=faces',
  },
  {
    name: 'Dr. AbdulHakeem Mobolaji Abdullateef (Honourable Yepe)',
    role: 'Speaker — The Quran as a Guide for life in the modern world',
    sessions: ['Guest Lecture'],
    bio: "Dr. AbdulHakeem Mobolaji Abdullateef (Honourable Yepe) presents \"The Quran as a Guide for life in the modern world\" — examining how the Qur'an offers timeless guidance for navigating the challenges of contemporary living.",
    initials: 'MA',
    color: '#8B6200',
    accent: '#fff',
    session: 'Guest Lecture',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=480&fit=crop&auto=format&crop=faces',
  },
];

const TICKET_HREF = 'https://hilaq.com/e/international-quran-conference';

export default function Speakers({ onNavigate }: SpeakersProps) {
  useScrollAnimation('speakers');

  return (
    <div className="page-enter min-h-screen" style={{ backgroundColor: '#F7F6EF' }}>

      {/* Header */}
      <div className="pt-32 pb-16 px-5 md:px-8" style={{ backgroundColor: '#16201A' }}>
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-white/50 text-xs mb-8 hover:text-white/80 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
          <span
            className="inline-block text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5"
            style={{ color: '#FFC153', backgroundColor: 'rgba(255,193,83,0.12)' }}
          >
            IQC 5.0 Conference Faculty
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1
                className="font-serif font-black text-white leading-tight"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                Speakers<br />&amp; Panelists
              </h1>
              <p className="text-white/55 text-sm mt-3">
                4th October 2026 · Int'l Conference Centre, UI
              </p>
            </div>
            <button
              onClick={() => onNavigate('sessions')}
              className="shrink-0 font-bold text-sm px-7 py-3.5 rounded-full border border-white/25 text-white hover:bg-white/10 transition-all duration-300"
            >
              View Programme →
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14">

        {/* Scholar/Panelist grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPEAKERS.map((speaker, i) => (
            <div
              key={speaker.name}
              className="scroll-reveal rounded-2xl overflow-hidden group cursor-pointer transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl"
              style={{ backgroundColor: '#fff', transitionDelay: `${i * 70}ms` }}
            >
              {/* Card image with color overlay */}
              <div className="relative h-56 overflow-hidden" style={{ backgroundColor: speaker.color }}>
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity transition-all duration-700 group-hover:opacity-75 group-hover:scale-[1.05]"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to bottom, transparent 30%, ${speaker.color}ee 100%)` }}
                />
                {/* Initials badge */}
                <div
                  className="absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center font-serif font-black text-base"
                  style={{ backgroundColor: speaker.accent, color: speaker.accent === '#fff' ? speaker.color : '#16201A' }}
                >
                  {speaker.initials}
                </div>
                {/* Session tag */}
                <span
                  className="absolute bottom-4 left-4 text-[10px] font-bold px-3 py-1 rounded-full"
                  style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff', backdropFilter: 'blur(4px)' }}
                >
                  {speaker.session}
                </span>
              </div>

              {/* Card body */}
              <div className="p-5">
                <h3 className="font-serif font-bold text-base leading-snug mb-1" style={{ color: '#16201A' }}>
                  {speaker.name}
                </h3>
                <p className="text-xs font-semibold mb-3" style={{ color: '#12522F' }}>{speaker.role}</p>
                <p className="text-xs leading-relaxed mb-4" style={{ color: '#5A7265' }}>
                  {speaker.bio}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {speaker.sessions.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: '#EEEEE7', color: '#16201A' }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="scroll-reveal mt-16 rounded-2xl p-10 md:p-14 text-center" style={{ backgroundColor: '#0A331C' }}>
          <p
            className="font-serif font-bold text-white mb-4 leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
          >
            Hear them all live —<br />
            <span style={{ color: '#FFC153' }}>4th October 2026.</span>
          </p>
          <p className="text-white/55 text-sm mb-7">
            International Conference Centre, University of Ibadan, Nigeria
          </p>
          <a
            href={TICKET_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow font-bold text-sm px-9 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={{ backgroundColor: '#FFC153', color: '#16201A' }}
          >
            Secure Your Seat →
          </a>
        </div>
      </div>
    </div>
  );
}
