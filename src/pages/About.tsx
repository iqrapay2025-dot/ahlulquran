import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const STATS = [
  { value: '500+', label: 'Students Reached' },
  { value: '5th', label: 'Annual Conference' },
  { value: '250+', label: 'Tickets Secured' },
  { value: '8+', label: 'Scholars & Speakers' },
];

function BookIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );
}

function AcademicCapIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path d="M20 9v6" />
    </svg>
  );
}

const VALUES = [
  {
    Icon: BookIcon,
    title: "Qur'anic Excellence",
    desc: "We hold the Qur'an as the ultimate source of guidance, promoting its study with precision, reverence, and joy.",
  },
  {
    Icon: UsersIcon,
    title: 'Community & Unity',
    desc: 'We bring together Muslims across backgrounds, fostering brotherhood and solidarity in the service of knowledge.',
  },
  {
    Icon: RefreshIcon,
    title: 'Reformation & Growth',
    desc: "We believe the Qur'an holds the answer to every challenge the Ummah faces — and we act on that belief.",
  },
  {
    Icon: AcademicCapIcon,
    title: 'Education & Scholarship',
    desc: "From children's Hifz programmes to advanced academic discourse, we invest in the full spectrum of Islamic learning.",
  },
];

export default function About({ onNavigate }: AboutProps) {
  useScrollAnimation('about');

  return (
    <div className="page-enter min-h-screen" style={{ backgroundColor: '#F7F6EF' }}>

      {/* Header */}
      <div className="pt-32 pb-0 px-5 md:px-8 overflow-hidden" style={{ backgroundColor: '#16201A' }}>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-16 items-end">
            <div>
              <span
                className="inline-block text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5"
                style={{ color: '#FFC153', backgroundColor: 'rgba(255,193,83,0.12)' }}
              >
                Who We Are
              </span>
              <h1
                className="font-serif font-black text-white leading-tight mb-5"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                Ahlul Qur'an<br />
                <span style={{ color: '#FFC153' }}>Foundation</span>
              </h1>
              <p className="text-white/65 text-sm leading-loose max-w-md">
                A non-profit Islamic organisation dedicated to the recitation, study, and
                propagation of the Holy Qur'an — building a community anchored in divine guidance.
              </p>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl p-5"
                  style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <p
                    className="font-serif font-black text-3xl leading-none mb-1"
                    style={{ color: '#FFC153' }}
                  >
                    {value}
                  </p>
                  <p className="text-white/50 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-72 md:h-96 overflow-hidden" style={{ backgroundColor: '#12522F' }}>
        <img
          src="https://images.unsplash.com/photo-1761639935588-2e35e79f613f?w=1440&h=600&fit=crop&auto=format"
          alt="Sunlight streaming through arched windows casting patterns on the floor"
          className="w-full h-full object-cover opacity-80"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(22,32,26,0.2), rgba(247,246,239,0.8))' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-20">
          <div className="scroll-reveal-left">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: '#12522F' }}
            >
              Our Story
            </span>
            <h2
              className="font-serif font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#16201A' }}
            >
              Rooted in the Qur'an.<br />
              <span style={{ color: '#12522F' }}>Reaching the Ummah.</span>
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#4A5E52' }}>
              <p>
                Ahlul Qur'an Foundation was established with a singular conviction: that the Qur'an,
                properly understood and lived, holds the key to the reformation of Muslim individuals,
                families, and communities.
              </p>
              <p>
                From our humble beginnings as a small Qur'anic study circle in Ibadan, we have grown
                into a nationally recognised organisation running Hifz programmes, Qur'anic academies,
                outreach initiatives, and — since 2022 — our landmark International Qur'an Conference.
              </p>
              <p>
                Each year's conference builds on the last, bringing the finest minds in Islamic
                scholarship together with everyday Muslims seeking deeper connection to Allah's word.
              </p>
            </div>
          </div>

          <div className="scroll-reveal-right space-y-4">
            <div className="rounded-2xl overflow-hidden h-52" style={{ backgroundColor: '#12522F' }}>
              <img
                src="https://images.unsplash.com/photo-1783990901858-59d849c532d6?w=800&h=400&fit=crop&auto=format"
                alt="Grand mosque interior — a symbol of Islamic architectural heritage"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div
                className="rounded-2xl p-5"
                style={{ backgroundColor: '#0A331C' }}
              >
                <p className="font-serif font-black text-3xl" style={{ color: '#FFC153' }}>2022</p>
                <p className="text-white/55 text-xs mt-1">Conference founded</p>
              </div>
              <div
                className="rounded-2xl p-5"
                style={{ backgroundColor: '#EEEEE7' }}
              >
                <p className="font-serif font-black text-3xl" style={{ color: '#12522F' }}>1000+</p>
                <p className="text-xs mt-1" style={{ color: '#5A7265' }}>Lives impacted</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="scroll-reveal rounded-2xl p-10 md:p-14 mb-16 text-center" style={{ backgroundColor: '#EEEEE7' }}>
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-5"
            style={{ color: '#12522F' }}
          >
            Our Mission
          </span>
          <p
            className="font-serif font-light leading-snug max-w-3xl mx-auto"
            style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', color: '#16201A' }}
          >
            To cultivate a generation of Muslims who are deeply rooted in{' '}
            <span className="font-semibold" style={{ color: '#12522F' }}>Qur'anic knowledge</span>,
            {' '}morally upright in character, and{' '}
            <span className="font-semibold" style={{ color: '#FFC153' }}>transformative</span>{' '}
            in their communities.
          </p>
        </div>

        {/* Values */}
        <div>
          <div className="scroll-reveal text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#12522F' }}>
              Our Values
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="scroll-reveal rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ backgroundColor: '#fff', transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(18,82,47,0.1)', color: '#12522F' }}
                >
                  <v.Icon />
                </div>
                <h3 className="font-serif font-bold text-sm mb-2" style={{ color: '#16201A' }}>{v.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#5A7265' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="mt-20">
          <div className="scroll-reveal text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#12522F' }}>
              Our Partners &amp; Sponsors
            </span>
            <h2 className="font-serif font-black mt-4" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: '#16201A' }}>
              Organisations That Make It Possible
            </h2>
            <p className="text-xs leading-relaxed max-w-xl mx-auto mt-3" style={{ color: '#5A7265' }}>
              We are grateful to the institutions, businesses and individuals who
              officially partner with Ahlul Qur'an Foundation. Partner logos will be
              featured here as partnerships are formalised.
            </p>
          </div>
          <div
            className="scroll-reveal rounded-2xl p-8 text-center"
            style={{ backgroundColor: '#EEEEE7', border: '1px dashed rgba(18,82,47,0.3)' }}
          >
            <p className="text-sm font-semibold mb-4" style={{ color: '#16201A' }}>
              Your organisation's logo could be here →
            </p>
            <button
              onClick={() => onNavigate('support')}
              className="font-bold text-xs px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#FFC153', color: '#16201A' }}
            >
              Become a Partner →
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="scroll-reveal mt-16 text-center">
          <p className="text-sm mb-6" style={{ color: '#5A7265' }}>
            Explore everything the Foundation offers
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('academy')}
              className="font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#16201A', color: '#F7F6EF' }}
            >
              Visit the Academy →
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="font-semibold text-sm px-8 py-4 rounded-full border-2 transition-all duration-300 hover:scale-[1.02]"
              style={{ borderColor: '#16201A', color: '#16201A' }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
