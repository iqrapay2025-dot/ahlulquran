import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SpeakersProps {
  onNavigate: (page: string) => void;
}

const RECITERS = [
  {
    name: 'Sheikh Fatai Okeola',
    country: 'Nigeria',
    specialty: 'Hafs an Asim · Mujawwad',
    bio: "One of Nigeria's most celebrated Qur'anic reciters, Sheikh Fatai Okeola is known for his melodious tajweed and deep spiritual presence. He has led recitations at international events across Africa and the Middle East.",
    initials: 'FO',
    color: '#12522F',
    img: 'https://images.unsplash.com/photo-1575645513913-c002ea3b2e01?w=400&h=480&fit=crop&auto=format&crop=faces',
  },
];

const SPEAKERS = [
  {
    name: 'Prof. Habeebah Oladosu',
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
    name: 'Sheikh Ridwan Jamiu',
    role: 'Foundation President & Qur\'anic Scholar',
    sessions: ['Opening Ceremony', 'Closing Reflections & Du\'a'],
    bio: "President of the Ahlul Qur'an Foundation and a leading Qur'anic scholar in South-West Nigeria. Sheikh Ridwan has dedicated over two decades to the promotion of Qur'anic education and Islamic values.",
    initials: 'RJ',
    color: '#0A331C',
    accent: '#FFC153',
    session: 'Closing Address',
    img: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=400&h=480&fit=crop&auto=format&crop=faces',
  },
  {
    name: 'Dr. Malam Abdulwahab Iyanda',
    role: 'Keynote Speaker — Islamic Studies',
    sessions: ['Keynote Lecture'],
    bio: "A renowned Islamic studies scholar and author, Dr. Iyanda brings deep academic rigour and practical wisdom to the question of how the Qur'an speaks to contemporary social challenges.",
    initials: 'AI',
    color: '#12522F',
    accent: '#FFC153',
    session: 'Keynote Lecture',
    img: 'https://images.unsplash.com/photo-1627931539006-d5c4677e05ea?w=400&h=480&fit=crop&auto=format&crop=faces',
  },
  {
    name: 'Sheikh Musa Abdulkadir',
    role: 'Panelist — Intellectual & Educational Foundations',
    sessions: ['IQC 5.0 Panel Discussion'],
    bio: "A respected Islamic educator and curriculum specialist, Sheikh Musa has pioneered several initiatives integrating Qur'anic studies into formal schooling across Oyo and Kwara states.",
    initials: 'MA',
    color: '#B5352A',
    accent: '#fff',
    session: 'Panel Discussion',
    img: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=480&fit=crop&auto=format&crop=faces',
  },
  {
    name: 'Prof. Yusuf Omotosho',
    role: 'Senior Islamic Scholar — University of Ibadan',
    sessions: ['IQC 5.0 Panel Discussion', 'Lecture Series'],
    bio: "Professor of Arabic and Islamic Studies at the University of Ibadan, Prof. Omotosho is a prolific author and speaker whose works bridge classical Islamic scholarship with contemporary African realities.",
    initials: 'YO',
    color: '#16201A',
    accent: '#FFC153',
    session: 'Moral Reformation Panel',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=480&fit=crop&auto=format&crop=faces',
  },
  {
    name: 'Sheikh Fatai Okeola',
    role: "Distinguished Qari' — Master Reciter",
    sessions: ['Opening Recitation', "Qur'anic Showcase"],
    bio: "One of Nigeria's most celebrated Qur'anic reciters, Sheikh Fatai Okeola is known for his melodious tajweed and deep spiritual presence. He has led recitations at international events across Africa and the Middle East.",
    initials: 'FO',
    color: '#12522F',
    accent: '#FFC153',
    session: "Recitation Showcase",
    img: 'https://images.unsplash.com/photo-1575645513913-c002ea3b2e01?w=400&h=480&fit=crop&auto=format&crop=faces',
  },
  {
    name: 'Ustadha Aminat Aliyu',
    role: "Scholar — Women's Islamic Education",
    sessions: ['IQC 5.0 Panel', 'Lecture Series'],
    bio: "A pioneering voice in women's Islamic education in Nigeria, Ustadha Aminat combines classical scholarship with a passionate commitment to empowering Muslim women through Qur'anic knowledge.",
    initials: 'AA',
    color: '#8B6200',
    accent: '#fff',
    session: 'Panel Discussion',
    img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=480&fit=crop&auto=format&crop=faces',
  },
  {
    name: 'Dr. Ibrahim Kawu',
    role: 'Islamic Law & Jurisprudence',
    sessions: ['Education Panel Discussion'],
    bio: "Dr. Ibrahim Kawu is a scholar of Islamic jurisprudence (fiqh) and a prolific researcher whose work focuses on the application of Qur'anic principles to governance, law, and social policy.",
    initials: 'IK',
    color: '#16201A',
    accent: '#FFC153',
    session: 'Education Panel',
    img: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=400&h=480&fit=crop&auto=format&crop=faces',
  },
];

const TICKET_HREF = 'https://hilaq.com/e/international-quran-conference';

export default function Speakers({ onNavigate }: SpeakersProps) {
  const [activeTab, setActiveTab] = useState<'scholars' | 'reciters'>('scholars');
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
                Scholars, Panelists<br />&amp; Reciters
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

        {/* Tab switcher */}
        <div
          className="scroll-reveal inline-flex rounded-xl p-1 mb-10"
          style={{ backgroundColor: '#EEEEE7' }}
        >
          {(['scholars', 'reciters'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="text-sm font-bold px-6 py-2.5 rounded-lg transition-all duration-200 capitalize"
              style={{
                backgroundColor: activeTab === tab ? '#16201A' : 'transparent',
                color: activeTab === tab ? '#F7F6EF' : '#5A7265',
              }}
            >
              {tab === 'scholars' ? 'Scholars & Panelists' : 'Meet Our Reciters'}
            </button>
          ))}
        </div>

        {/* Reciters section */}
        {activeTab === 'reciters' && (
          <div>
            <div className="scroll-reveal mb-10 max-w-2xl">
              <h2
                className="font-serif font-bold leading-tight mb-3"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#16201A' }}
              >
                Meet Our Reciters
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: '#5A7265' }}>
                The voices that bring the divine word to life. Each reciter brings their own school of
                recitation, tajweed mastery, and spiritual depth to IQC 5.0.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {RECITERS.map((reciter, i) => (
                <div
                  key={reciter.name}
                  className="scroll-reveal rounded-2xl overflow-hidden group transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl"
                  style={{ backgroundColor: '#fff', transitionDelay: `${i * 70}ms` }}
                >
                  <div className="relative h-56 overflow-hidden" style={{ backgroundColor: reciter.color }}>
                    <img
                      src={reciter.img}
                      alt={reciter.name}
                      className="w-full h-full object-cover opacity-60 mix-blend-luminosity transition-all duration-700 group-hover:opacity-75 group-hover:scale-[1.05]"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(to bottom, transparent 30%, ${reciter.color}ee 100%)` }}
                    />
                    <div
                      className="absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center font-serif font-black text-base"
                      style={{ backgroundColor: '#FFC153', color: '#16201A' }}
                    >
                      {reciter.initials}
                    </div>
                    <span
                      className="absolute bottom-4 left-4 text-[10px] font-bold px-3 py-1 rounded-full"
                      style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff', backdropFilter: 'blur(4px)' }}
                    >
                      {reciter.specialty}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif font-bold text-base leading-snug mb-1" style={{ color: '#16201A' }}>
                      {reciter.name}
                    </h3>
                    <p className="text-xs font-semibold mb-1" style={{ color: '#12522F' }}>
                      {reciter.specialty}
                    </p>
                    <p className="text-[11px] mb-3" style={{ color: '#9BA89F' }}>
                      {reciter.country}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: '#5A7265' }}>{reciter.bio}</p>
                  </div>
                </div>
              ))}
              {/* More to be announced card */}
              <div
                className="scroll-reveal rounded-2xl flex flex-col items-center justify-center p-10 text-center"
                style={{ backgroundColor: '#EEEEE7', border: '2px dashed #D4D9D5', transitionDelay: '70ms' }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(18,82,47,0.1)' }}
                >
                  <svg className="w-6 h-6" style={{ color: '#12522F' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <p className="font-serif font-bold text-sm mb-2" style={{ color: '#16201A' }}>More Reciters</p>
                <p className="text-xs" style={{ color: '#9BA89F' }}>To be announced soon</p>
              </div>
            </div>
          </div>
        )}

        {/* Scholar/Panelist grid */}
        {activeTab === 'scholars' && (
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
        )}

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
