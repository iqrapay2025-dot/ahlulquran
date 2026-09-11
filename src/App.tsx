import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import Sessions from './pages/Sessions';
import Speakers from './pages/Speakers';
import Reciters from './pages/Reciters';
import Iqc from './pages/Iqc';
import Academy from './pages/Academy';
import Media from './pages/Media';
import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';
import Support from './pages/Support';
import Privacy from './pages/Privacy';

export type Page =
  | 'home' | 'about' | 'academy' | 'iqc' | 'sessions' | 'speakers'
  | 'reciters' | 'media' | 'events' | 'support' | 'contact' | 'privacy';

const PAGES: Page[] = [
  'home', 'about', 'academy', 'iqc', 'sessions', 'speakers',
  'reciters', 'media', 'events', 'support', 'contact', 'privacy',
];

const TITLES: Record<Page, string> = {
  home: "Ahlul Qur'an Foundation",
  about: 'About',
  academy: 'Academy',
  iqc: 'IQC 5.0',
  sessions: 'Programme',
  speakers: 'Speakers & Panelists',
  reciters: 'Reciters',
  media: 'Media & Resources',
  events: 'Events',
  support: 'Support',
  contact: 'Contact',
  privacy: 'Privacy Policy',
};

export default function App() {
  const [page, setPage] = useState<Page>('home');

  const navigate = (target: string) => {
    const p = target as Page;
    if (!PAGES.includes(p)) return;
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Sync browser hash with page state
  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as Page;
    if (PAGES.includes(hash)) {
      setPage(hash);
    }
  }, []);

  useEffect(() => {
    window.location.hash = page === 'home' ? '' : page;
    document.title =
      page === 'home'
        ? "Ahlul Qur'an Foundation — Qur'an Education, Tahfiz & Community"
        : `${TITLES[page]} — Ahlul Qur'an Foundation`;
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'academy':  return <Academy   key="academy"  onNavigate={navigate} />;
      case 'iqc':      return <Iqc       key="iqc"      onNavigate={navigate} />;
      case 'sessions': return <Sessions  key="sessions" onNavigate={navigate} />;
      case 'speakers': return <Speakers  key="speakers" onNavigate={navigate} />;
      case 'reciters': return <Reciters  key="reciters" onNavigate={navigate} />;
      case 'media':    return <Media     key="media"    onNavigate={navigate} />;
      case 'events':   return <Events    key="events"   onNavigate={navigate} />;
      case 'about':    return <About     key="about"    onNavigate={navigate} />;
      case 'contact':  return <Contact   key="contact"  onNavigate={navigate} />;
      case 'privacy':  return <Privacy   key="privacy"  onNavigate={navigate} />;
      case 'support':  return <Support   key="support"  onNavigate={navigate} />;
      default:         return <Home      key="home"     onNavigate={navigate} />;
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen font-sans" style={{ backgroundColor: '#F7F6EF' }}>
        <Navbar currentPage={page} onNavigate={navigate} />
        <main className="flex-1">
          {renderPage()}
        </main>
        <Footer onNavigate={navigate} />
        <BackToTop />
      </div>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
