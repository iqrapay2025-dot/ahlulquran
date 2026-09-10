import { useState, useEffect, useRef } from 'react';
import logoImg from '../imports/641867418_18050301836498582_4753241646156042133_n.jpg.jpeg';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

interface NavLink {
  label: string;
  page: string;
  children?: { label: string; page: string; desc?: string }[];
}

const NAV_LINKS: NavLink[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  {
    label: 'Academy',
    page: 'academy',
    children: [
      { label: "Qur'an & Tajweed", page: 'academy', desc: 'Precision recitation with tajweed' },
      { label: 'Tahfiz', page: 'academy', desc: 'Full memorisation of the Qur\u2019an' },
      { label: 'Murāja\u2019ah', page: 'academy', desc: 'Structured revision & retention' },
      { label: 'Arabic', page: 'academy', desc: 'Language of the Qur\u2019an' },
      { label: 'Islamic Studies', page: 'academy', desc: '\u2018Aqīdah, Fiqh & Sīrah' },
      { label: 'Online Classes', page: 'academy', desc: 'Learn from anywhere' },
    ],
  },
  {
    label: 'IQC 5.0',
    page: 'iqc',
    children: [
      { label: 'About IQC', page: 'iqc', desc: 'The 5th International Qur\u2019an Conference' },
      { label: 'Theme', page: 'iqc', desc: 'Qur\u2019anic Paradigms of Reform' },
      { label: 'Speakers', page: 'speakers', desc: 'Scholars & lecturers' },
      { label: 'Panel Session', page: 'speakers', desc: 'Beyond Recitation' },
      { label: 'Reciters', page: 'reciters', desc: 'Meet our reciters' },
      { label: 'Programme', page: 'sessions', desc: 'Full conference timetable' },
      { label: 'Venue & Tickets', page: 'iqc', desc: '4 Oct 2026 · Ibadan' },
    ],
  },
  {
    label: 'Media',
    page: 'media',
    children: [
      { label: 'Videos', page: 'media', desc: 'Lectures & recitations' },
      { label: 'Audio', page: 'media', desc: 'Qur\u2019an & lecture recordings' },
      { label: 'Gallery', page: 'media', desc: 'Photos from our programmes' },
    ],
  },
  { label: 'Events', page: 'events' },
  { label: 'Support', page: 'support' },
  { label: 'Contact', page: 'contact' },
];

const TICKET_HREF = 'https://hilaq.com/e/international-quran-conference';

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const enterDropdown = (label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };
  const leaveDropdown = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenDropdown(null), 150);
  };

  // Light-top pages need the solid green bar immediately (white links otherwise vanish)
  const solidTop = currentPage === 'contact';
  const solid = scrolled || solidTop;

  const go = (page: string) => {
    onNavigate(page);
    setMenuOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  };

  const isActive = (link: NavLink) => {
    if (link.page === currentPage) return true;
    return link.children?.some((c) => c.page === currentPage) ?? false;
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: solid ? 'rgba(10, 51, 28, 0.97)' : 'transparent',
          backdropFilter: solid ? 'blur(12px)' : 'none',
          boxShadow: solid ? '0 4px 30px rgba(0,0,0,0.25)' : 'none',
        }}
        onMouseLeave={leaveDropdown}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button onClick={() => go('home')} className="flex items-center gap-3 shrink-0">
              <img
                src={logoImg}
                alt="Ahlul Qur'an Foundation logo"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover border-2"
                style={{ borderColor: '#FFC153' }}
              />
              <div className="text-left leading-tight">
                <p className="font-serif font-black text-white text-sm md:text-base">
                  Ahlul Qur'an
                </p>
                <p
                  className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase"
                  style={{ color: '#FFC153' }}
                >
                  Foundation
                </p>
              </div>
            </button>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="relative" onMouseEnter={() => enterDropdown(link.label)}>
                  <button
                    onClick={() => go(link.page)}
                    className={`link-underline px-3.5 py-2 text-[13px] font-semibold rounded-full transition-all duration-200 whitespace-nowrap hover:text-[#FFC153] ${
                      isActive(link) ? 'text-[#FFC153]' : 'text-white/85'
                    }`}
                  >
                    {link.label}
                    {link.children && (
                      <svg
                        className="w-3 h-3 inline-block ml-1 transition-transform duration-200"
                        style={{ transform: openDropdown === link.label ? 'rotate(180deg)' : 'none' }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                  {link.children && openDropdown === link.label && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64"
                      onMouseEnter={() => enterDropdown(link.label)}
                    >
                      <div
                        className="rounded-2xl p-2 shadow-2xl border border-white/10"
                        style={{ backgroundColor: '#0A331C' }}
                      >
                        {link.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => go(child.page)}
                            className="w-full text-left px-4 py-2.5 rounded-xl transition-all duration-150 hover:bg-white/10"
                          >
                            <p
                              className="text-[13px] font-semibold"
                              style={{ color: currentPage === child.page ? '#FFC153' : '#fff' }}
                            >
                              {child.label}
                            </p>
                            {child.desc && (
                              <p className="text-[11px] text-white/45 mt-0.5">{child.desc}</p>
                            )}
                          </button>
                        ))}
                        {link.label === 'IQC 5.0' && (
                          <a
                            href={TICKET_HREF}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mt-2 mx-2 mb-1 text-center font-bold text-xs px-4 py-2.5 rounded-xl transition-all duration-200 hover:brightness-110"
                            style={{ backgroundColor: '#FFC153', color: '#16201A' }}
                          >
                            Get Tickets →
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <a
                href={TICKET_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 font-bold text-[13px] px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 hover:brightness-110"
                style={{ backgroundColor: '#FFC153', color: '#16201A' }}
              >
                Get Tickets
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className="block w-6 h-0.5 bg-white transition-all duration-300"
                style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }}
              />
              <span
                className="block w-6 h-0.5 bg-white transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-6 h-0.5 bg-white transition-all duration-300"
                style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden pt-24 pb-10 px-6 overflow-y-auto"
          style={{ backgroundColor: '#0A331C' }}
        >
          <div className="space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="border-b border-white/10">
                <div className="flex items-center">
                  <button
                    onClick={() => go(link.page)}
                    className={`flex-1 text-left py-4 font-serif font-bold text-lg transition-colors duration-200 hover:text-[#FFC153] ${
                      isActive(link) ? 'text-[#FFC153]' : 'text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                  {link.children && (
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                      className="p-3"
                      aria-label={`Toggle ${link.label} submenu`}
                    >
                      <svg
                        className="w-4 h-4 text-white/60 transition-transform duration-200"
                        style={{ transform: mobileExpanded === link.label ? 'rotate(180deg)' : 'none' }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
                {link.children && mobileExpanded === link.label && (
                  <div className="pb-3 pl-4 space-y-1">
                    {link.children.map((child) => (
                      <button
                        key={child.label}
                        onClick={() => go(child.page)}
                        className="block w-full text-left py-2 text-sm text-white/70 transition-all duration-150 hover:text-[#FFC153] hover:translate-x-1"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <a
            href={TICKET_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-8 text-center font-bold text-sm px-8 py-4 rounded-full"
            style={{ backgroundColor: '#FFC153', color: '#16201A' }}
          >
            Get IQC 5.0 Tickets →
          </a>
        </div>
      )}
    </>
  );
}
