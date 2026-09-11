import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import img1 from '../imports/img1.jpeg';

interface ContactProps {
  onNavigate: (page: string) => void;
}

const INK = '#16201A';
const GREEN = '#12522F';
const DEEP = '#0A331C';
const GOLD = '#FFC153';
const LINE = 'rgba(22,32,26,0.12)';
const SUB = 'rgba(22,32,26,0.68)';

const inputCls =
  'w-full bg-white rounded-[10px] px-4 py-3.5 text-sm outline-none transition-colors duration-200 focus:border-[#12522F]';
const inputStyle = { border: `1px solid ${LINE}`, color: INK };

// Google Apps Script web app URL — deployed from the "Newsletter Subscribers" sheet.
// Extensions -> Apps Script -> Deploy -> New deployment -> Web app -> Anyone can access.
const NEWSLETTER_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzUeuNA8j0vVClambcxcTJxhBYy9ZuF-UvhIBnTfMmOrwhrzkN_l_dRYr3Mp_pKlZa5bQ/exec';

export default function Contact({ onNavigate }: ContactProps) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);
  const [subscribeError, setSubscribeError] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  // Honeypot — spam bots fill every input they find; humans never see this field.
  // FormSubmit silently drops submissions that submit a non-empty _honey value.
  const [honey, setHoney] = useState('');

  useScrollAnimation('contact');

  // Delivers the message straight to the team inbox via FormSubmit
  // (first-ever submission triggers a one-time confirmation email to activate it).
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot tripped (or invalid email) — pretend success without hitting the endpoint.
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim());
    if (honey || !form.name.trim() || !form.message.trim() || !emailOk) {
      setSent(true);
      return;
    }
    setSending(true);
    setSendError(false);
    try {
      const res = await fetch('https://formsubmit.co/ajax/ahlulquranf@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name.trim().slice(0, 120),
          email: form.email.trim().slice(0, 254),
          message: form.message.trim().slice(0, 5000),
          _subject: `New message from ${form.name.trim().slice(0, 120)} — ahlulquran website`,
          _template: 'table',
          _captcha: 'false',
          _honey: honey,
        }),
      });
      if (!res.ok) throw new Error('Send failed');
      setSent(true);
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  // Appends the email to the "Newsletter Subscribers" Google Sheet via Apps Script.
  // Content-Type is deliberately text/plain — Apps Script web apps don't handle
  // CORS preflight (OPTIONS) requests, and application/json triggers one. Sending
  // as text/plain avoids the preflight while the script still JSON.parses the body.
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    // Trim + validate before sending; skip the endpoint if the email is junk.
    const email = newsletterEmail.trim().slice(0, 254);
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setSubscribeError(true);
      return;
    }

    setSubscribing(true);
    setSubscribeError(false);
    try {
      await fetch(NEWSLETTER_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ email }),
      });
      setSubscribed(true);
    } catch {
      setSubscribeError(true);
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <div className="page-enter min-h-screen" style={{ backgroundColor: '#F7F6EF' }}>

      {/* ── GET IN TOUCH ── */}
      <section className="pt-32 pb-20 px-5 md:px-8">
        <div className="max-w-[1080px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-11 items-start">
            {/* Photo */}
            <div className="scroll-reveal-left rounded-2xl overflow-hidden h-[260px] md:h-[440px]">
              <img
                src={img1}
                alt="Ahlul Qur'an Foundation community"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Form */}
            <div className="scroll-reveal-right">
              <h1
                className="font-serif font-bold leading-tight"
                style={{ fontSize: 'clamp(2rem, 4.4vw, 2.75rem)', color: INK }}
              >
                Get in touch
              </h1>
              <p className="mt-4 text-[15px] max-w-[46ch]" style={{ color: SUB }}>
                Have a question about the Academy, IQC 5.0, partnerships, or how to
                support the mission? Send us a message and our team will get back to you.
              </p>

              {sent ? (
                <div
                  className="mt-8 rounded-2xl p-6"
                  style={{ backgroundColor: 'rgba(18,82,47,0.08)', border: '1px solid rgba(18,82,47,0.2)' }}
                >
                  <p className="font-serif font-bold text-lg" style={{ color: GREEN }}>
                    Message sent ✓
                  </p>
                  <p className="text-sm mt-1.5" style={{ color: SUB }}>
                    Jazakallahu khairan, {form.name || 'friend'} — your message has been
                    delivered to our team at <span className="font-semibold">ahlulquranf@gmail.com</span> and
                    we will get back to you soon.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                    className="mt-4 text-xs font-bold uppercase tracking-widest"
                    style={{ color: GREEN }}
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-2">
                  {/* Honeypot — hidden from humans, catches spam bots */}
                  <input
                    type="text"
                    name="_honey"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={honey}
                    onChange={(e) => setHoney(e.target.value)}
                    style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }}
                  />
                  {sendError && (
                    <div
                      className="mt-7 rounded-xl p-4 text-[13px] leading-relaxed"
                      style={{ backgroundColor: 'rgba(181,53,42,0.08)', border: '1px solid rgba(181,53,42,0.3)', color: '#B5352A' }}
                    >
                      Something went wrong sending your message. Please try again, or{' '}
                      <a
                        href={`mailto:ahlulquranf@gmail.com?subject=${encodeURIComponent('Message from ' + (form.name || 'the website'))}&body=${encodeURIComponent(form.message)}`}
                        className="font-bold underline"
                      >
                        email us directly at ahlulquranf@gmail.com
                      </a>
                      .
                    </div>
                  )}
                  <div className="text-[13.5px] font-bold mt-7 mb-2" style={{ color: INK }}>
                    Full Name*
                  </div>
                  <input
                    type="text"
                    required
                    maxLength={120}
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputCls}
                    style={inputStyle}
                  />

                  <div className="text-[13.5px] font-bold mt-6 mb-2" style={{ color: INK }}>
                    Email*
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputCls}
                    style={inputStyle}
                  />

                  <div className="text-[13.5px] font-bold mt-6 mb-2" style={{ color: INK }}>
                    Message*
                  </div>
                  <textarea
                    required
                    maxLength={5000}
                    placeholder="Your message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputCls} resize-y min-h-[120px]`}
                    style={inputStyle}
                  />

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-lift mt-5 inline-flex items-center gap-2 font-bold text-[14.5px] px-7 py-3.5 rounded-full transition-all duration-200 disabled:opacity-60 disabled:cursor-wait"
                    style={{ backgroundColor: DEEP, color: '#fff' }}
                  >
                    {sending ? 'Sending…' : 'Send →'}
                  </button>
                </form>
              )}

              {/* Quick contact details */}
              <div
                className="mt-8 pt-5 flex flex-wrap gap-x-6 gap-y-2 text-[13px]"
                style={{ borderTop: `1px solid ${LINE}`, color: SUB }}
              >
                <a href="tel:+2348089360199" className="hover:text-[#12522F] transition-colors">+234 808 936 0199</a>
                <a href="mailto:ahlulquranf@gmail.com" className="hover:text-[#12522F] transition-colors">ahlulquranf@gmail.com</a>
                <a
                  href="https://instagram.com/ahlul_quran001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#12522F] transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER PANEL ── */}
      <section className="px-5 md:px-8 pb-20">
        <div className="max-w-[1080px] mx-auto scroll-reveal">
          <div className="rounded-3xl p-3.5" style={{ backgroundColor: '#EEEEE7' }}>
            <div
              className="rounded-2xl px-8 md:px-10 py-10 md:py-11 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center"
              style={{ backgroundColor: DEEP }}
            >
              <h2
                className="font-serif font-bold text-white leading-snug"
                style={{ fontSize: 'clamp(1.5rem, 3.2vw, 1.9rem)' }}
              >
                Stay connected with Ahlul Qur'an
              </h2>
              <div>
                <div
                  className="text-[12.5px] font-bold uppercase tracking-widest mb-2.5"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  Stay Up To Date
                </div>
                {subscribed ? (
                  <p className="text-sm font-semibold" style={{ color: GOLD }}>
                    Subscribed ✓ — welcome to the Ahlul Qur'an family.
                  </p>
                ) : (
                  <>
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                      <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={newsletterEmail}
                        maxLength={254}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        className="flex-1 rounded-full px-4 py-3 text-sm outline-none disabled:opacity-60"
                        style={{ backgroundColor: '#fff', color: INK }}
                        disabled={subscribing}
                      />
                      <button
                        type="submit"
                        disabled={subscribing}
                        className="font-extrabold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:brightness-95 disabled:opacity-60 disabled:cursor-wait"
                        style={{ backgroundColor: GOLD, color: DEEP }}
                      >
                        {subscribing ? 'Subscribing…' : 'Subscribe'}
                      </button>
                    </form>
                    {subscribeError && (
                      <p className="mt-2.5 text-xs leading-relaxed" style={{ color: '#FF8A80' }}>
                        Something went wrong. Please try again, or{' '}
                        <a
                          href={`mailto:ahlulquranf@gmail.com?subject=${encodeURIComponent('Newsletter signup')}&body=${encodeURIComponent('Please add me to the newsletter: ' + newsletterEmail)}`}
                          className="font-bold underline"
                        >
                          email us directly
                        </a>
                        .
                      </p>
                    )}
                  </>
                )}
                <p className="mt-2.5 text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  By subscribing you agree to our{' '}
                  <button onClick={() => onNavigate('privacy')} className="underline">
                    Privacy Policy
                  </button>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}