import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BookIcon, QuranIcon, RefreshIcon, PenIcon, MoonIcon, LaptopIcon } from '../components/FlatIcons';

interface AcademyProps {
  onNavigate: (page: string) => void;
}

const NAVY = '#16201A';
const GREEN = '#12522F';
const GOLD = '#FFC153';
const MUTED = '#5A7265';

const COURSES = [
  {
    Icon: BookIcon,
    title: "Qur'an & Tajweed",
    desc: "Learn to recite the Qur'an with precision and beauty. Students study the rules of tajweed, correct articulation (makhārij), and melodic recitation under qualified teachers — from beginners to advanced reciters.",
    features: ['Beginner to advanced levels', 'One-on-one correction', 'Ijāzah-track options'],
    accent: GREEN,
  },
  {
    Icon: QuranIcon,
    title: 'Tahfiz (Memorisation)',
    desc: "A structured path to memorising the entire Qur'an, with daily sabaq, systematic revision cycles, and close mentorship from Huffāẓ who have walked the same road.",
    features: ['Daily memorisation targets', 'Supervised revision', 'Progress reports for parents'],
    accent: '#B5352A',
  },
  {
    Icon: RefreshIcon,
    title: 'Murāja\u2019ah (Revision)',
    desc: "Designed for Huffāẓ who want to strengthen and retain what they have memorised. Regular guided revision, error correction, and fluency drills keep the Qur'an firmly rooted in the heart.",
    features: ['Structured revision cycles', 'Fluency & error correction', 'Retention assessments'],
    accent: '#8B6200',
  },
  {
    Icon: PenIcon,
    title: 'Arabic Language',
    desc: "Understand the language of revelation. Our Arabic programme takes students from foundational grammar and vocabulary to reading and comprehending classical Qur'anic texts.",
    features: ['Nahw & Sarf foundations', 'Qur\u2019anic vocabulary', 'Classical text reading'],
    accent: GREEN,
  },
  {
    Icon: MoonIcon,
    title: 'Islamic Studies',
    desc: "A well-rounded curriculum covering \u2018Aqīdah, Fiqh, Sīrah, Hadith, and Islamic manners — nurturing character (akhlāq) alongside knowledge.",
    features: ['\u2018Aqīdah & Fiqh', 'Sīrah & Hadith studies', 'Character building'],
    accent: '#B5352A',
  },
  {
    Icon: LaptopIcon,
    title: 'Online Classes',
    desc: "Can't attend in person? Join live online classes from anywhere in the world, with the same teachers, the same curriculum, and recorded sessions for review.",
    features: ['Live interactive sessions', 'Recordings available', 'All levels welcome'],
    accent: '#8B6200',
  },
];

export default function Academy({ onNavigate }: AcademyProps) {
  useScrollAnimation('academy');

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
            Ahlul Qur'an Academy
          </span>
          <h1 className="font-serif font-black text-white mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)' }}>
            Learn the Qur'an, <span style={{ color: GOLD }}>Live the Qur'an</span>
          </h1>
          <p className="text-white/60 text-sm max-w-xl mx-auto leading-loose">
            Six structured programmes — in person and online — taking students from
            their first letter of the Arabic alphabet to complete memorisation and
            deep understanding of the Qur'an.
          </p>
        </div>
      </div>

      {/* Courses */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COURSES.map((c, i) => (
            <div
              key={c.title}
              className="scroll-reveal card-lift rounded-2xl p-8"
              style={{ backgroundColor: '#fff', transitionDelay: `${(i % 2) * 90}ms` }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: 'rgba(18,82,47,0.1)', color: NAVY }}>
                <c.Icon className="w-6 h-6" />
              </div>
              <h2 className="font-serif font-bold text-lg mb-3" style={{ color: NAVY }}>{c.title}</h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: MUTED }}>{c.desc}</p>
              <ul className="space-y-2 mb-6">
                {c.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-xs font-semibold" style={{ color: GREEN }}>
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onNavigate('contact')}
                className="font-bold text-xs px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 hover:brightness-110"
                style={{ backgroundColor: c.accent, color: '#fff' }}
              >
                Enrol / Enquire →
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="scroll-reveal mt-16 rounded-2xl p-10 md:p-14 text-center" style={{ backgroundColor: NAVY }}>
          <p className="font-serif font-bold text-white leading-tight mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            Ready to begin your journey<br />
            <span style={{ color: GOLD }}>with the Qur'an?</span>
          </p>
          <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">
            Reach out for timetables, fees, and enrolment details — classes run year-round, in person and online.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-glow font-bold text-sm px-9 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              Contact the Academy →
            </button>
            <button
              onClick={() => onNavigate('support')}
              className="font-semibold text-sm px-9 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
            >
              Sponsor a Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
