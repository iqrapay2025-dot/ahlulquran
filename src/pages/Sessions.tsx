import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import panelImg from '../imports/800449384_18082935035498582_386696378966982864_n.jpg.jpeg';
import recitersImg from '../imports/males 1.jpeg';
import yepeImg from '../imports/yepe.jpg';

interface SessionsProps {
  onNavigate: (page: string) => void;
}

const ALL_SESSIONS = [
  {
    id: 1,
    time: '10:00 AM',
    duration: '60 min',
    title: "Opening Ceremony & Qur'anic Recitation",
    speaker: 'As-Sheikh Muhammad Nasir Sulaiman',
    role: "Reciter",
    type: 'Recitation',
    location: 'Main Hall',
    also: ['Sheikh Ridwan Jamiu', 'As-Sheikh Sirajudeen Abdullah'],
    category: 'Opening',
    ticket: 'All Tickets',
    img: recitersImg,
    desc: "The conference opens with a recitation of the Holy Qur'an by As-Sheikh Muhammad Nasir Sulaiman, followed by a welcome address and opening remarks from the Foundation's leadership.",
    color: '#12522F',
  },
  {
    id: 2,
    time: '11:00 AM',
    duration: '75 min',
    title: "Keynote: From it's Preservation in the Heart to the Transformation in Conduct",
    speaker: 'Sheikh Abdus Somod Taqwalloh (An Najedbiy)',
    role: 'Speaker',
    type: 'Lecture',
    location: 'Main Hall',
    also: [],
    category: 'Keynote',
    ticket: 'All Tickets',
    img: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=700&h=420&fit=crop&auto=format',
    desc: "Sheikh Abdus Somod Taqwalloh (An Najedbiy) explores how preserving the Qur'an in the heart leads to a genuine transformation in conduct — from interior devotion to outward practice.",
    color: '#B5352A',
  },
  {
    id: 3,
    time: '12:30 PM',
    duration: '90 min',
    title: "Panel: Qur'anic Paradigms of Reform",
    speaker: 'Professor Habeebah Oladosu',
    role: "Panelist — Qur'anic Studies & Reform",
    type: 'Panel',
    location: 'Main Hall',
    also: ['Ustaaz Alli Abdus Salaam Temitope', 'Sheikh Abdullah AbdulHakeem Ajigini'],
    category: 'Panel Discussion',
    ticket: 'All Tickets',
    img: panelImg,
    desc: "The IQC 5.0 panel engages the central question: Beyond Recitation: How Can the Qur'an Truly Reform the Ummah? Featuring Professor Habeebah Oladosu, Ustaaz Alli Abdus Salaam Temitope, and Sheikh Abdullah AbdulHakeem Ajigini, the panelists explore Qur'anic paradigms for reconstructing the intellectual, ethical, spiritual, and societal foundations of the Muslim community.",
    color: '#FFC153',
  },
  {
    id: 4,
    time: '2:30 PM',
    duration: '60 min',
    title: "Special Qur'anic Presentations",
    speaker: 'As-Sheikh Abdulbaqiy Shefiu-Badmus',
    role: "Reciter",
    type: 'Recitation',
    location: 'Main Hall',
    also: ['Nasiroh Aadam', 'Khodijah Nurudeen Amoke'],
    category: 'Recitation',
    ticket: 'All Tickets',
    img: recitersImg,
    desc: "A dedicated showcase of Qur'anic recitation featuring As-Sheikh Abdulbaqiy Shefiu-Badmus alongside specially invited reciters from the IQC 5.0 roster. This session celebrates the beauty, precision, and spiritual depth of tajweed in the recitation of Allah's word.",
    color: '#12522F',
  },
  {
    id: 5,
    time: '3:30 PM',
    duration: '90 min',
    title: "Lecture: The Quran as a Guide for Life in the Modern World",
    speaker: 'Dr. AbdulHakeem Mobolaji Abdullateef (Honourable Yepe)',
    role: 'Speaker',
    type: 'Lecture',
    location: 'Main Hall',
    also: [],
    category: 'Lecture',
    ticket: 'All Tickets',
    img: yepeImg,
    desc: "Dr. AbdulHakeem Mobolaji Abdullateef (Honourable Yepe) examines how the Qur'an serves as a timeless guide for navigating the challenges of the modern world — from personal conduct to civic life.",
    color: '#16201A',
  },
  {
    id: 6,
    time: '5:00 PM',
    duration: '45 min',
    title: "Closing Reflections & Du'a",
    speaker: 'Sheikh Ridwan Jamiu',
    role: 'Foundation President',
    type: 'Closing',
    location: 'Main Hall',
    also: ['All Scholars', 'Foundation Leadership'],
    category: 'Closing',
    ticket: 'All Tickets',
    img: 'https://images.unsplash.com/photo-1783990901858-59d849c532d6?w=700&h=420&fit=crop&auto=format',
    desc: "The conference concludes with closing reflections from Sheikh Ridwan Jamiu, a collective du'a for the Ummah, and a final recitation. Certificates of attendance will be distributed.",
    color: '#0A331C',
  },
];

const TRACKS = ['All', 'Lecture', 'Panel', 'Recitation', 'Closing'];

const PANEL_THEME = {
  title: "Qur'anic Paradigms of Reform",
  subtitle: "Reconstructing the Intellectual, Ethical, Spiritual & Societal Foundations of the Ummah",
  question: "Beyond Recitation: How Can the Qur'an Truly Reform the Ummah?",
};
const TICKET_HREF = 'https://hilaq.com/e/international-quran-conference';

export default function Sessions({ onNavigate }: SessionsProps) {
  const [activeTrack, setActiveTrack] = useState('All');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  useScrollAnimation('sessions');

  const filtered = activeTrack === 'All'
    ? ALL_SESSIONS
    : ALL_SESSIONS.filter((s) => s.type === activeTrack);

  return (
    <div className="page-enter min-h-screen" style={{ backgroundColor: '#F7F6EF' }}>

      {/* Page Header */}
      <div
        className="pt-32 pb-16 px-5 md:px-8"
        style={{ backgroundColor: '#16201A' }}
      >
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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span
                className="inline-block text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5"
                style={{ color: '#FFC153', backgroundColor: 'rgba(255,193,83,0.12)' }}
              >
                Programme Lineup 2026
              </span>
              <h1
                className="font-serif font-black text-white leading-tight"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                All Sessions
              </h1>
              <p className="text-white/55 text-sm mt-3">
                Sunday, 4th October 2026 · Int'l Conference Centre, UI
              </p>
            </div>
            <a
              href={TICKET_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow shrink-0 font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:brightness-110"
              style={{ backgroundColor: '#FFC153', color: '#16201A' }}
            >
              Secure Your Ticket →
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">

        {/* Filter bar */}
        <div
          className="scroll-reveal rounded-2xl p-4 mb-10 flex flex-wrap gap-3 items-center justify-between"
          style={{ backgroundColor: '#fff', boxShadow: '0 2px 12px rgba(22,32,26,0.06)' }}
        >
          <div className="flex flex-wrap gap-2">
            {TRACKS.map((track) => (
              <button
                key={track}
                onClick={() => setActiveTrack(track)}
                className="text-xs font-bold px-4 py-2 rounded-full transition-all duration-200"
                style={{
                  backgroundColor: activeTrack === track ? '#16201A' : 'transparent',
                  color: activeTrack === track ? '#F7F6EF' : '#5A7265',
                  border: activeTrack === track ? 'none' : '1px solid #D4D9D5',
                }}
              >
                {track}
              </button>
            ))}
          </div>
          <span className="text-xs font-semibold" style={{ color: '#9BA89F' }}>
            {filtered.length} session{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Panel Theme Banner */}
        <div
          className="scroll-reveal rounded-2xl p-7 md:p-9 mb-8"
          style={{ backgroundColor: '#0A331C', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <span
            className="inline-block text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4"
            style={{ color: '#FFC153', backgroundColor: 'rgba(255,193,83,0.12)' }}
          >
            IQC 5.0 Panel Theme
          </span>
          <h3
            className="font-serif font-bold text-white leading-snug mb-2"
            style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)' }}
          >
            {PANEL_THEME.title}
          </h3>
          <p className="text-white/55 text-sm mb-4">{PANEL_THEME.subtitle}</p>
          <div
            className="rounded-xl px-5 py-4"
            style={{ backgroundColor: 'rgba(255,193,83,0.1)', borderLeft: '3px solid #FFC153' }}
          >
            <p className="text-sm font-semibold italic" style={{ color: '#FFC153' }}>
              Main Question: "{PANEL_THEME.question}"
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-5">
          {filtered.map((session, i) => (
            <div
              key={session.id}
              className="scroll-reveal rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
              style={{ backgroundColor: '#fff', transitionDelay: `${i * 60}ms` }}
              onClick={() => setExpandedId(expandedId === session.id ? null : session.id)}
            >
              <div className="flex flex-col md:flex-row">
                {/* Time column */}
                <div
                  className="md:w-28 flex md:flex-col items-center md:items-start justify-between md:justify-center gap-1 px-5 py-4 md:py-6 shrink-0"
                  style={{ backgroundColor: session.color, borderRadius: '0' }}
                >
                  <span className="text-white font-bold text-base">{session.time}</span>
                  <span className="text-white/55 text-xs">{session.duration}</span>
                </div>

                {/* Main content */}
                <div className="flex-1 p-5 md:p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: 'rgba(18,82,47,0.1)', color: '#12522F' }}
                        >
                          {session.type}
                        </span>
                        <span className="text-[10px] font-semibold" style={{ color: '#9BA89F' }}>
                          {session.location}
                        </span>
                      </div>
                      <h3 className="font-serif font-bold text-base md:text-lg leading-snug mb-1" style={{ color: '#16201A' }}>
                        {session.title}
                      </h3>
                      <p className="text-sm font-semibold" style={{ color: '#12522F' }}>{session.speaker}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#9BA89F' }}>{session.role}</p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="text-right hidden md:block">
                        <p className="text-xs font-semibold" style={{ color: '#5A7265' }}>Also joining</p>
                        <p className="text-xs mt-0.5" style={{ color: '#9BA89F' }}>
                          {session.also.slice(0, 2).join(' · ')}
                        </p>
                      </div>
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 shrink-0"
                        style={{ backgroundColor: '#EEEEE7', transform: expandedId === session.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      >
                        <svg className="w-4 h-4" style={{ color: '#16201A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Thumbnail */}
                <div className="hidden md:block md:w-36 shrink-0 overflow-hidden" style={{ backgroundColor: '#0A331C' }}>
                  <img
                    src={session.img}
                    alt={session.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              </div>

              {/* Expanded details */}
              <div
                className="overflow-hidden transition-all duration-400"
                style={{ maxHeight: expandedId === session.id ? '300px' : '0' }}
              >
                <div
                  className="px-5 md:px-6 pb-6 pt-4"
                  style={{ borderTop: '1px solid #EBEBEA' }}
                >
                  <p className="text-sm leading-7 mb-4" style={{ color: '#4A5E52' }}>{session.desc}</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: '#9BA89F' }}>All Participants</p>
                      <div className="flex flex-wrap gap-2">
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={{ backgroundColor: 'rgba(18,82,47,0.1)', color: '#12522F' }}
                        >
                          {session.speaker}
                        </span>
                        {session.also.map((name) => (
                          <span
                            key={name}
                            className="text-xs px-3 py-1 rounded-full"
                            style={{ backgroundColor: '#EEEEE7', color: '#5A7265' }}
                          >
                            {name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={TICKET_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="ml-auto font-bold text-xs px-5 py-2.5 rounded-full transition-all duration-200 hover:brightness-110"
                      style={{ backgroundColor: '#FFC153', color: '#16201A' }}
                    >
                      Book Seat →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="scroll-reveal text-center mt-16">
          <p className="text-sm mb-6" style={{ color: '#5A7265' }}>Ready to attend the full day?</p>
          <a
            href={TICKET_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow font-bold text-sm px-9 py-4 rounded-full transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#16201A', color: '#F7F6EF' }}
          >
            Get Your Ticket — ₦3,000 Early Bird
          </a>
        </div>
      </div>
    </div>
  );
}
