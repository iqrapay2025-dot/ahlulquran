import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface PrivacyProps {
  onNavigate: (page: string) => void;
}

const INK = '#16201A';
const GREEN = '#12522F';
const GOLD = '#FFC153';
const DEEP = '#0A331C';
const MUTED = '#5A7265';

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: '1. Who we are',
    body: [
      "Ahlul Qur'an Foundation (\u201cwe\u201d, \u201cour\u201d) is a non-profit organisation based in Nigeria, dedicated to Qur'anic education, memorisation (Tahfiz), and community programmes. This policy explains how we handle information collected through this website.",
      'For any privacy question or request, contact us at ahlulquranf@gmail.com.',
    ],
  },
  {
    title: '2. Information we collect',
    body: [
      'Contact form — when you write to us we collect your name, email address, and the message you send. This is delivered to our team inbox at ahlulquranf@gmail.com through the FormSubmit service.',
      'Newsletter — if you subscribe, we collect the email address you provide so we can send you updates about our programmes, events, and the International Qur\u2019an Conference.',
      'We do not collect payment details on this website, and we do not knowingly collect information from children under 13.',
    ],
  },
  {
    title: '3. How we use your information',
    body: [
      'We use the information you give us only to: respond to your enquiry; send the updates you asked for; process sponsorship or partnership conversations you initiate; and improve our programmes and website.',
      'We will never sell, rent, or trade your personal information.',
    ],
  },
  {
    title: '4. Sharing and third-party services',
    body: [
      'We share information only with the services that help us operate this website: FormSubmit (which relays contact-form messages to our inbox) and our email provider for newsletter delivery. These services process your information solely on our behalf.',
      'Our website links to our social media pages (such as Instagram) and to the external ticketing platform for IQC 5.0. Once you follow those links, the privacy policies of those platforms apply.',
    ],
  },
  {
    title: '5. Retention and security',
    body: [
      'We keep contact-form correspondence only as long as needed to handle your enquiry and for our records of programmes supported. Newsletter subscriptions are kept until you ask us to remove you.',
      'We take reasonable technical and organisational measures to protect the information we hold. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.',
    ],
  },
  {
    title: '6. Your rights',
    body: [
      'You may ask us at any time to: confirm what information we hold about you; correct it; delete it; or unsubscribe you from our emails. Just email ahlulquranf@gmail.com and we will act on your request promptly.',
      'Every newsletter we send includes a way to opt out of further messages.',
    ],
  },
  {
    title: '7. Changes to this policy',
    body: [
      'If we update this policy, we will post the new version on this page with a revised date. Continued use of the website after changes are posted means you accept the updated policy.',
    ],
  },
];

export default function Privacy({ onNavigate }: PrivacyProps) {
  useScrollAnimation('privacy');

  return (
    <div className="page-enter min-h-screen" style={{ backgroundColor: '#F7F6EF' }}>
      {/* Header */}
      <div className="pt-32 pb-16 px-5 md:px-8 relative overflow-hidden" style={{ backgroundColor: DEEP }}>
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 15% 60%, #FFC153 0%, transparent 55%), radial-gradient(circle at 85% 40%, #FFC153 0%, transparent 55%)' }}
        />
        <div className="max-w-3xl mx-auto relative text-center">
          <span
            className="inline-block text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
            style={{ color: GOLD, backgroundColor: 'rgba(255,193,83,0.12)', border: '1px solid rgba(255,193,83,0.25)' }}
          >
            Legal
          </span>
          <h1 className="font-serif font-black text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
            Privacy <span style={{ color: GOLD }}>Policy</span>
          </h1>
          <p className="text-white/55 text-sm max-w-lg mx-auto">
            How Ahlul Qur'an Foundation collects, uses, and protects your information.
          </p>
          <p className="text-white/35 text-xs mt-4">Last updated: February 2026</p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-14">
        <p className="scroll-reveal text-sm leading-relaxed mb-10" style={{ color: MUTED }}>
          Your trust matters to us. This policy sets out, in plain language, what we
          collect when you use this website, why we collect it, and the choices you
          have. It applies to the contact form and newsletter on this site.
        </p>

        {SECTIONS.map((section, i) => (
          <div
            key={section.title}
            className="scroll-reveal rounded-2xl p-6 md:p-8 mb-5"
            style={{ backgroundColor: '#fff', transitionDelay: `${(i % 3) * 70}ms` }}
          >
            <h2 className="font-serif font-bold text-base md:text-lg mb-3" style={{ color: INK }}>
              {section.title}
            </h2>
            {section.body.map((paragraph, j) => (
              <p key={j} className="text-sm leading-relaxed mb-2.5 last:mb-0" style={{ color: MUTED }}>
                {paragraph}
              </p>
            ))}
          </div>
        ))}

        {/* CTA */}
        <div className="scroll-reveal mt-10 rounded-2xl p-8 md:p-10 text-center" style={{ backgroundColor: GREEN }}>
          <p className="font-serif font-bold text-white leading-snug mb-2" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)' }}>
            Questions about your data?
          </p>
          <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
            Email us at <span className="font-semibold text-white">ahlulquranf@gmail.com</span> and we will respond promptly.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="btn-glow font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={{ backgroundColor: GOLD, color: DEEP }}
          >
            Contact Us →
          </button>
        </div>
      </div>
    </div>
  );
}
