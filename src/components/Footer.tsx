import logoImg from '../imports/641867418_18050301836498582_4753241646156042133_n.jpg.jpeg';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const INK = '#16201A';
const GREEN = '#12522F';
const LINE = 'rgba(22,32,26,0.12)';
const SUB = 'rgba(22,32,26,0.6)';

const linkCls = 'block text-[13.5px] mb-2.5 transition-colors duration-200 hover:text-[#12522F]';
const linkStyle = { color: SUB };

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="pt-16 pb-8 px-5 md:px-8" style={{ backgroundColor: '#F7F6EF' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr] gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src={logoImg}
                alt="Ahlul Qur'an Foundation logo"
                className="w-9 h-9 rounded-lg object-cover"
              />
              <span className="font-extrabold text-[17px]" style={{ color: GREEN }}>
                Ahlul Qur'an
              </span>
            </div>
            <p className="text-[13.5px] leading-relaxed max-w-[30ch]" style={{ color: SUB }}>
              Promoting the Qur'an through education, recitation, and community — in Nigeria and beyond.
            </p>
          </div>

          {/* Academy */}
          <div>
            <h4 className="text-[12.5px] font-bold tracking-wide mb-3.5" style={{ color: INK }}>
              Academy
            </h4>
            <button onClick={() => onNavigate('academy')} className={linkCls} style={linkStyle}>
              Qur'an &amp; Tajweed
            </button>
            <button onClick={() => onNavigate('academy')} className={linkCls} style={linkStyle}>
              Tahfiz
            </button>
            <button onClick={() => onNavigate('academy')} className={linkCls} style={linkStyle}>
              Online Classes
            </button>
          </div>

          {/* IQC 5.0 */}
          <div>
            <h4 className="text-[12.5px] font-bold tracking-wide mb-3.5" style={{ color: INK }}>
              IQC 5.0
            </h4>
            <button onClick={() => onNavigate('speakers')} className={linkCls} style={linkStyle}>
              Speakers
            </button>
            <button onClick={() => onNavigate('sessions')} className={linkCls} style={linkStyle}>
              Programme
            </button>
            <a
              href="https://hilaq.com/e/international-quran-conference"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
              style={linkStyle}
            >
              Tickets
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12.5px] font-bold tracking-wide mb-3.5" style={{ color: INK }}>
              Contact
            </h4>
            <a href="tel:+2348089360199" className={linkCls} style={linkStyle}>
              +234 808 936 0199
            </a>
            <a href="mailto:ahlulquranf@gmail.com" className={linkCls} style={linkStyle}>
              ahlulquranf@gmail.com
            </a>
            <a
              href="https://instagram.com/ahlul_quran001"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
              style={linkStyle}
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-5 flex flex-wrap justify-between gap-2.5 text-xs"
          style={{ borderTop: `1px solid ${LINE}`, color: 'rgba(22,32,26,0.45)' }}
        >
          <span>
            © Ahlul Qur'an Foundation. Nigeria.{' '}
            <button
              onClick={() => onNavigate('privacy')}
              className="underline hover:text-[#12522F] transition-colors"
            >
              Privacy Policy
            </button>
          </span>
          <span>"Indeed, this Qur'an guides to that which is most suitable." — Al-Isra 17:9</span>
        </div>
      </div>
    </footer>
  );
}
