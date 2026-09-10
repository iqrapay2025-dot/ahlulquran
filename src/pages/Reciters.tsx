import { useScrollAnimation } from '../hooks/useScrollAnimation';
import recitersImg from '../imports/758400717_18076609043498582_274570408490348722_n.jpg.jpeg';

interface RecitersProps {
  onNavigate: (page: string) => void;
}

const NAVY = '#16201A';
const GREEN = '#12522F';
const GOLD = '#FFC153';
const MUTED = '#5A7265';

const RECITERS = [
  {
    name: "Sheikh Fatai Okeola",
    location: 'Kwara State, Nigeria',
    specialty: "Tajweed & Maqāmāt recitation",
    bio: "A distinguished Qāri' renowned for his mastery of tajweed and his deeply moving recitation style. He has led tarāwīh and guided students of tilāwah across Nigeria for over two decades.",
    img: recitersImg,
  },
  {
    name: 'Hafiz Ibrahim Yusuf',
    location: 'Ibadan, Oyo State, Nigeria',
    specialty: 'Hifz & Murāja\u2019ah',
    bio: "A young Hāfiẓ of the Qur'an and product of the Ahlul Qur'an Tahfiz programme, known for his precise memorisation and confident, melodious presentation.",
    img: recitersImg,
  },
  {
    name: 'Guest Reciters',
    location: 'Across Nigeria & beyond',
    specialty: 'Special Qur\u2019anic presentations',
    bio: "IQC 5.0 will feature specially invited Qurrā' from within and outside Nigeria, each bringing a unique school of recitation to the conference stage.",
    img: 'https://images.unsplash.com/photo-1654923576795-f9329f496cb5?w=700&h=420&fit=crop&auto=format',
  },
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

      {/* Reciter cards */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RECITERS.map((r, i) => (
            <div
              key={r.name}
              className="scroll-reveal card-lift rounded-2xl overflow-hidden"
              style={{ backgroundColor: '#fff', transitionDelay: `${i * 90}ms` }}
            >
              <div className="h-56 overflow-hidden" style={{ backgroundColor: '#0A331C' }}>
                <img src={r.img} alt={r.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h2 className="font-serif font-bold text-base mb-2" style={{ color: NAVY }}>{r.name}</h2>
                <p className="text-xs mb-2" style={{ color: MUTED }}>📍 {r.location}</p>
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3"
                  style={{ backgroundColor: 'rgba(18,82,47,0.1)', color: GREEN }}
                >
                  {r.specialty}
                </span>
                <p className="text-xs leading-relaxed" style={{ color: MUTED }}>{r.bio}</p>
                <div className="mt-4 pt-4" style={{ borderTop: '1px solid #EBEBEA' }}>
                  <span className="text-xs font-semibold inline-flex items-center gap-2" style={{ color: GREEN }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Recitation sample — coming soon
                  </span>
                </div>
              </div>
            </div>
          ))}
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
