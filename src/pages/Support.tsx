import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Carousel from '../components/Carousel';
import { HeartIcon, UsersIcon, QuranIcon, CapIcon, MicIcon, LinkIcon, CheckIcon } from '../components/FlatIcons';
import img1 from '../imports/img1.jpeg';
import img2 from '../imports/img2.jpeg';
import img3 from '../imports/img3.jpeg';

interface SupportProps {
  onNavigate: (page: string) => void;
}

const SUPPORT_OPTIONS = [
  {
    title: 'Donate Now',
    Icon: HeartIcon,
    img: img1,
    description: "A general donation that goes directly toward Ahlul Qur'an's programmes, outreach, and operational needs.",
    impact: 'Supports all our work',
    cta: 'Donate',
    color: '#0A331C',
    accent: '#FFC153',
  },
  {
    title: 'Sponsor a Student',
    Icon: UsersIcon,
    img: img2,
    description: "Cover the cost of a student's Qur'an, Hifz, or Islamic Studies tuition — giving a young Muslim access to transformative education.",
    impact: 'Changes one life',
    cta: 'Sponsor a Student',
    color: '#12522F',
    accent: '#FFC153',
  },
  {
    title: "Sponsor a Qur'an",
    Icon: QuranIcon,
    img: img3,
    description: "Provide a printed Qur'an to a student, a community, or a region in need. A sadaqah jariyah that keeps giving.",
    impact: "Every Qur'an counts",
    cta: "Donate a Qur'an",
    color: '#B5352A',
    accent: '#fff',
  },
  {
    title: 'Sponsor a Class',
    Icon: CapIcon,
    img: img1,
    description: "Fund a weekly or monthly Qur'an class — covering teacher fees, materials, and facility costs for an entire group of students.",
    impact: 'Empowers a class',
    cta: 'Sponsor a Class',
    color: '#16201A',
    accent: '#FFC153',
  },
  {
    title: 'Support IQC 5.0',
    Icon: MicIcon,
    img: img2,
    description: "Help us host the 5th International Qur'an Conference — covering venue, AV, scholar fees, hospitality, and live production costs.",
    impact: 'Powers the conference',
    cta: 'Support IQC',
    color: '#8B6200',
    accent: '#fff',
  },
  {
    title: 'Become a Partner',
    Icon: LinkIcon,
    img: img3,
    description: "Join as an organisational, institutional, or corporate partner. Co-brand with Ahlul Qur'an and help us extend our reach across Nigeria and beyond.",
    impact: 'Strategic partnership',
    cta: 'Partner With Us',
    color: '#12522F',
    accent: '#FFC153',
  },
];

const TICKET_HREF = 'https://hilaq.com/e/international-quran-conference';

export default function Support({ onNavigate }: SupportProps) {
  useScrollAnimation('support');

  return (
    <div className="page-enter min-h-screen" style={{ backgroundColor: '#F7F6EF' }}>

      {/* Header */}
      <div
        className="pt-32 pb-14 px-5 md:px-8 relative overflow-hidden"
        style={{ backgroundColor: '#0A331C' }}
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 15% 60%, #FFC153 0%, transparent 55%), radial-gradient(circle at 85% 40%, #FFC153 0%, transparent 55%)',
          }}
        />
        <div className="max-w-6xl mx-auto relative">
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
            className="inline-block text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
            style={{ color: '#FFC153', backgroundColor: 'rgba(255,193,83,0.12)' }}
          >
            Support the Mission
          </span>
          <h1
            className="font-serif font-black text-white leading-tight mb-5"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Every contribution<br />
            <span style={{ color: '#FFC153' }}>takes the Qur'an further.</span>
          </h1>
          <p className="text-white/60 text-base max-w-xl leading-relaxed">
            Whether you give a little or a lot, your support sustains Qur'anic education,
            empowers students, and helps us build the Muslim community Nigeria deserves.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-14">

        {/* Ways to give — text + carousel */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-12">
          {/* Text column */}
          <div className="scroll-reveal">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#12522F' }}>
              Ways to Give
            </span>
            <h2
              className="font-serif font-black mt-3 mb-4"
              style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', color: '#16201A' }}
            >
              Six ways to carry<br />
              <span style={{ color: '#12522F' }}>the Qur'an forward</span>
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#5A7265' }}>
              From one-time donations to long-term partnerships, every option here is a
              direct investment in Qur'anic education. Browse with the arrows or dots,
              then tap the button on any card to get started.
            </p>
            <ul className="space-y-3">
              {[
                '100% directed to the cause you choose',
                'Transparent reporting on every project',
                'Sadaqah &amp; sadaqah jāriyah opportunities',
                'Give individually, as a family, or as a team',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-semibold" style={{ color: '#16201A' }}>
                  <span
                    className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: 'rgba(18,82,47,0.12)' }}
                  >
                    <CheckIcon className="w-3.5 h-3.5" style={{ color: '#12522F' }} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Carousel column */}
          <div className="relative pb-12">
            <Carousel
              slides={SUPPORT_OPTIONS}
              interval={6000}
              showControls
              controlAlign="edges"
              dotsMode="below"
              rootClassName="relative h-[460px] sm:h-[400px]"
              slideClassName="absolute inset-0 flex items-start justify-center"
              render={(option) => (
                <div
                  className="flex flex-col rounded-2xl overflow-hidden shadow-xl w-full"
                  style={{ backgroundColor: '#fff' }}
                >
                  {/* Picture header */}
                  <div className="relative h-44">
                    <img src={option.img} alt={option.title} className="w-full h-full object-cover" />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(180deg, rgba(10,51,28,0.2), ${option.color}dd)` }}
                    />
                    <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <option.Icon className="w-7 h-7 shrink-0" style={{ color: '#fff' }} />
                        <h3 className="font-serif font-bold text-lg text-white leading-snug">
                          {option.title}
                        </h3>
                      </div>
                      <span
                        className="text-[9px] font-bold px-2.5 py-1 rounded-full shrink-0 mb-1"
                        style={{ backgroundColor: 'rgba(255,255,255,0.18)', color: option.accent === '#fff' ? '#fff' : '#FFC153' }}
                      >
                        {option.impact}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex-1 p-6 flex flex-col">
                    <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: '#4A5E52' }}>
                      {option.description}
                    </p>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="w-full font-bold text-sm py-3.5 rounded-xl transition-all duration-200 hover:brightness-110 hover:scale-[1.01]"
                      style={{ backgroundColor: option.color, color: option.accent }}
                    >
                      {option.cta} →
                    </button>
                  </div>
                </div>
              )}
            />
          </div>
        </div>

        {/* Photo strip — pictures from our programmes */}
        <div className="scroll-reveal mb-12">
          <p className="text-center text-xs font-bold uppercase tracking-widest mb-6" style={{ color: '#12522F' }}>
            Your support in pictures
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { src: img1, label: 'Community programmes' },
              { src: img2, label: 'Conferences & events' },
              { src: img3, label: "Qur'an classes" },
            ].map((ph, i) => (
              <div
                key={ph.label}
                className="relative rounded-2xl overflow-hidden h-52 group card-lift"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img src={ph.src} alt={ph.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 45%, rgba(10,51,28,0.8))' }} />
                <p className="absolute bottom-4 left-4 text-white font-serif font-bold text-sm">{ph.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What your donation supports */}
        <div
          className="scroll-reveal rounded-2xl p-10 md:p-14 mb-12"
          style={{ backgroundColor: '#EEEEE7' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#12522F' }}>
                Where it goes
              </span>
              <h2
                className="font-serif font-bold leading-tight mt-3 mb-5"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#16201A' }}
              >
                Your donation<br />
                <span style={{ color: '#12522F' }}>directly funds</span>
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: '#5A7265' }}>
                Every contribution to Ahlul Qur'an Foundation is used to sustain Qur'anic
                education and community development — from supporting students who cannot afford
                tuition, to hosting events that inspire thousands.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 lg:h-80">
              <img src={img2} alt="Students of the Qur'an" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4">
              {[
                { label: "Qur'an Classes & Academy", desc: 'Teacher salaries, materials, and space' },
                { label: 'Hifz Programmes', desc: "Supporting Qur'an memorisation students" },
                { label: 'IQC 5.0 Conference', desc: 'Venue, scholars, AV, and logistics' },
                { label: 'Community Outreach', desc: 'Dawah, distribution, and education drives' },
                { label: 'Online Learning', desc: 'Platform, recordings, and digital content' },
              ].map(({ label, desc }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: 'rgba(18,82,47,0.12)' }}
                  >
                    <CheckIcon className="w-4 h-4" style={{ color: '#12522F' }} />
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: '#16201A' }}>{label}</p>
                    <p className="text-xs" style={{ color: '#9BA89F' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA banner */}
        <div
          className="scroll-reveal rounded-2xl p-10 md:p-14 text-center"
          style={{ backgroundColor: '#16201A' }}
        >
          <p
            className="font-serif font-bold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
          >
            Ready to make a difference?<br />
            <span style={{ color: '#FFC153' }}>The Ummah needs you.</span>
          </p>
          <p className="text-white/50 text-sm mb-8 max-w-sm mx-auto">
            Contact us to discuss any of the giving options above — we will guide you through the process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-glow font-bold text-sm px-9 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={{ backgroundColor: '#FFC153', color: '#16201A' }}
            >
              Contact Us to Give →
            </button>
            <a
              href={TICKET_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sm px-9 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
            >
              Get a Conference Ticket
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
