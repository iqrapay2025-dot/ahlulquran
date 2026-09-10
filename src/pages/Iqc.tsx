import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MicIcon, BookIcon, NoteIcon, UsersIcon } from '../components/FlatIcons';
import panelImg from '../imports/800449384_18082935035498582_386696378966982864_n.jpg.jpeg';
import recitersImg from '../imports/758400717_18076609043498582_274570408490348722_n.jpg.jpeg';

interface IqcProps {
  onNavigate: (page: string) => void;
}

const NAVY = '#16201A';
const GREEN = '#12522F';
const GOLD = '#FFC153';
const MUTED = '#5A7265';
const TICKET_HREF = 'https://hilaq.com/e/international-quran-conference';

const HIGHLIGHTS = [
  { Icon: MicIcon, title: 'Panel Session', desc: "Qur'anic Paradigms of Reform — led by Prof. Habeebah Oladosu and confirmed panelists." },
  { Icon: BookIcon, title: 'Keynote & Lectures', desc: "Senior scholars examine how the Qur'an rebuilds the intellectual, ethical, spiritual and societal foundations of the Ummah." },
  { Icon: NoteIcon, title: 'Recitations', desc: "World-class Qurrā' and special Qur'anic presentations throughout the day." },
  { Icon: UsersIcon, title: 'Community', desc: 'Students, teachers, scholars and lovers of the Qur\u2019an gathered in one hall.' },
];

export default function Iqc({ onNavigate }: IqcProps) {
  useScrollAnimation('iqc');

  return (
    <div className="page-enter min-h-screen" style={{ backgroundColor: '#F7F6EF' }}>
      {/* Hero */}
      <section className="pt-36 pb-24 px-5 relative overflow-hidden" style={{ backgroundColor: '#0A331C' }}>
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #FFC153 0%, transparent 50%), radial-gradient(circle at 80% 50%, #FFC153 0%, transparent 50%)' }}
        />
        <div className="max-w-4xl mx-auto relative text-center">
          <span
            className="inline-block text-[11px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full mb-8"
            style={{ color: GOLD, backgroundColor: 'rgba(255,193,83,0.12)', border: '1px solid rgba(255,193,83,0.25)' }}
          >
            5th International Qur'an Conference · IQC 5.0
          </span>
          <h1 className="font-serif font-black text-white leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
            Qur'anic Paradigms of Reform
          </h1>
          <p className="text-white/65 max-w-2xl mx-auto text-sm md:text-base leading-loose mb-4">
            Reconstructing the Intellectual, Ethical, Spiritual &amp; Societal Foundations of the Ummah
          </p>
          <p className="font-semibold text-sm mb-10" style={{ color: GOLD }}>
            Main Question — Beyond Recitation: How Can the Qur'an Truly Reform the Ummah?
          </p>
          <div className="inline-flex flex-col md:flex-row gap-3 md:gap-0 md:items-center md:gap-8 px-8 py-6 rounded-2xl mb-10" style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
            <div className="text-center md:text-left">
              <p className="text-[10px] uppercase tracking-widest text-white/45 mb-1">Date</p>
              <p className="text-white font-bold text-sm">Sunday, 4 October 2026</p>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/15" />
            <div className="text-center md:text-left">
              <p className="text-[10px] uppercase tracking-widest text-white/45 mb-1">Venue</p>
              <p className="text-white font-bold text-sm">Int'l Conference Centre, University of Ibadan</p>
            </div>
          </div>
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
              onClick={() => onNavigate('sessions')}
              className="font-semibold text-sm px-9 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
            >
              View Programme
            </button>
          </div>
          <p className="text-white/40 text-xs mt-6">Early Bird ₦3,000 · Regular ₦5,000</p>
        </div>
      </section>

      {/* Highlights */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="scroll-reveal text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GREEN }}>What to Expect</span>
          <h2 className="font-serif font-black mt-4" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)', color: NAVY }}>
            A Full Day With the Qur'an
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HIGHLIGHTS.map((h, i) => (
            <div
              key={h.title}
              className="scroll-reveal card-lift rounded-2xl p-7"
              style={{ backgroundColor: '#fff', transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(18,82,47,0.1)', color: GREEN }}>
                <h.Icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-sm mb-2" style={{ color: NAVY }}>{h.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: MUTED }}>{h.desc}</p>
            </div>
          ))}
        </div>

        {/* Explore IQC links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
          {[
            { title: 'Speakers & Panelists', desc: 'Scholars, lecturers and the IQC panel', page: 'speakers', img: panelImg },
            { title: 'Meet Our Reciters', desc: 'Qurrā\u2019 from across Nigeria and beyond', page: 'reciters', img: recitersImg },
            { title: 'Full Programme', desc: '10:00 AM — Opening to Closing Du\u2019a', page: 'sessions', img: recitersImg },
          ].map((l, i) => (
            <div
              key={l.title}
              className="scroll-reveal card-lift rounded-2xl overflow-hidden cursor-pointer"
              style={{ backgroundColor: '#fff', transitionDelay: `${i * 80}ms` }}
              onClick={() => onNavigate(l.page)}
            >
              <div className="h-36 overflow-hidden" style={{ backgroundColor: '#0A331C' }}>
                <img src={l.img} alt={l.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <p className="font-serif font-bold text-sm" style={{ color: NAVY }}>{l.title}</p>
                <p className="text-xs mt-1" style={{ color: MUTED }}>{l.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tickets CTA */}
        <div className="scroll-reveal mt-14 rounded-2xl p-10 md:p-14 text-center" style={{ backgroundColor: GREEN }}>
          <p className="font-serif font-bold text-white leading-tight mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            Join us on <span style={{ color: GOLD }}>4th October</span> in Ibadan
          </p>
          <p className="text-white/60 text-sm mb-8">
            Limited tickets available — secure your seat at IQC 5.0 today.
          </p>
          <a
            href={TICKET_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-block font-bold text-sm px-9 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={{ backgroundColor: GOLD, color: NAVY }}
          >
            Secure Your Seat →
          </a>
        </div>
      </div>
    </div>
  );
}
