import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import conferenceHallImg from '../imports/images__2_.jpeg';
import panelImg from '../imports/800449384_18082935035498582_386696378966982864_n.jpg.jpeg';
import recitersImg from '../imports/758400717_18076609043498582_274570408490348722_n.jpg.jpeg';
import img1 from '../imports/img1.jpeg';
import img2 from '../imports/img2.jpeg';
import img3 from '../imports/img3.jpeg';

interface MediaProps {
  onNavigate: (page: string) => void;
}

const NAVY = '#16201A';
const GREEN = '#12522F';
const GOLD = '#FFC153';
const MUTED = '#5A7265';

type Tab = 'Videos' | 'Audio' | 'Gallery';
const TABS: Tab[] = ['Videos', 'Audio', 'Gallery'];

const VIDEOS = [
  { title: 'IQC 4.0 — Full Conference Recording', meta: 'Video · Conference' },
  { title: "Keynote: The Qur'an as Catalyst for Reform", meta: 'Video · Lecture' },
  { title: "Sheikh Fatai Okeola — Recitation Showcase", meta: 'Video · Recitation' },
];

const AUDIO = [
  { title: 'Juz\u2019 Amma — Guided Recitation', meta: 'Audio · Recitation' },
  { title: 'Tafsir Sessions — Selected Sūrahs', meta: 'Audio · Tafsir' },
  { title: 'IQC Panel — Beyond Recitation (Audio)', meta: 'Audio · Panel' },
];


const GALLERY = [
  { img: img1, label: 'Community Programmes' },
  { img: img2, label: 'Conferences & Events' },
  { img: img3, label: "Qur'an Classes" },
  { img: recitersImg, label: 'Recitations' },
  { img: panelImg, label: 'Seminars' },
  { img: conferenceHallImg, label: 'Gatherings' },
];

const COMING = ['Videos', 'Audio'] as const;

export default function Media({ onNavigate }: MediaProps) {
  useScrollAnimation('media');
  const [tab, setTab] = useState<Tab>('Videos');

  const isComing = (COMING as readonly string[]).includes(tab);

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
            Media &amp; Resources
          </span>
          <h1 className="font-serif font-black text-white mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)' }}>
            Learn. Listen. <span style={{ color: GOLD }}>Watch.</span>
          </h1>
          <p className="text-white/60 text-sm max-w-xl mx-auto leading-loose">
            Videos, audio and a visual archive of everything
            Ahlul Qur'an does — a growing library for the Ummah.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-20">
        {/* Tabs */}
        <div className="scroll-reveal flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="font-bold text-xs px-6 py-3 rounded-full transition-all duration-200"
              style={
                tab === t
                  ? { backgroundColor: GREEN, color: '#fff' }
                  : { backgroundColor: '#fff', color: MUTED, border: '1px solid #E3E3DC' }
              }
            >
              {t}
            </button>
          ))}
        </div>

        {/* Videos / Audio */}
        {isComing && (
          <div className="scroll-reveal grid grid-cols-1 md:grid-cols-3 gap-6">
            {(tab === 'Videos' ? VIDEOS : AUDIO).map((item, i) => (
              <div
                key={item.title}
                className="card-lift rounded-2xl p-7"
                style={{ backgroundColor: '#fff', transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(18,82,47,0.1)', color: GREEN }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {tab === 'Videos' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />}
                    {tab === 'Audio' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.237 3.948 11 4.277 11 4.905v14.19c0 .628-.763.957-1.414.612L5.586 15z" />}

                  </svg>
                </div>
                <p className="font-serif font-bold text-sm mb-1" style={{ color: NAVY }}>{item.title}</p>
                <p className="text-xs mb-4" style={{ color: MUTED }}>{item.meta}</p>
                <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: '#EEEEE7', color: MUTED }}>
                  Coming soon
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Gallery */}
        {tab === 'Gallery' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {GALLERY.map((g, i) => (
              <div
                key={g.label}
                className="scroll-reveal relative rounded-2xl overflow-hidden h-56 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img src={g.img} alt={g.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(10,51,28,0.8))' }} />
                <p className="absolute bottom-4 left-4 text-white font-serif font-bold text-sm">{g.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Note */}
        <div className="scroll-reveal mt-14 rounded-2xl p-8 md:p-10 text-center" style={{ backgroundColor: '#EEEEE7' }}>
          <p className="font-serif font-bold mb-2" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: NAVY }}>
            More content is on the way
          </p>
          <p className="text-sm mb-7 max-w-md mx-auto" style={{ color: MUTED }}>
            We are steadily publishing recordings, writings and photos from our programmes.
            Follow us on social media so you never miss an update.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: NAVY, color: '#fff' }}
          >
            Get in Touch →
          </button>
        </div>
      </div>
    </div>
  );
}
