import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const speakers = [
  { name: "Vicki Mahaffey", affiliation: "University of Illinois, Urbana-Champaign" },
  { name: "Patrick Mullen", affiliation: "Northeastern University" },
  { name: "Maurizia Boscagli", affiliation: "University of California, Santa Barbara" },
  { name: "Eve Watson", affiliation: "Institute of Integrative Counselling and Psychotherapy" },
  { name: "Joseph Nugent", affiliation: "Boston College" },
  { name: "Karen Zumhagen-Yekplé", affiliation: "Tulane University" },
  { name: "Enda Duffy", affiliation: "University of California, Santa Barbara" },
  { name: "John O'Brien", affiliation: "Independent Scholar" },
];

const schedule = [
  { time: "2.30", event: "Keynote Address", detail: 'Prof. Sophie Rabau — "Molly Means No!"', type: "keynote" },
  { time: "2.45", event: "Q&A", detail: "", type: "qa" },
  { time: "3.00", event: 'Round Table — "The Joyce of Creativity"', detail: "Patrick Mullen · Maurizia Boscagli · Karen Zumhagen-Yekplé · Enda Duffy · Eve Watson", type: "roundtable" },
  { time: "3.45", event: "Coffee", detail: "", type: "break" },
  { time: "4.00", event: "Launch of JoyceWays", detail: "C. Quigley, Ivan O. — Boston College", type: "launch" },
  { time: "4.15", event: 'Launch of "Queer Possessions"', detail: "Creative Criticism and Modern Irish Literature — Patrick R. Mullen (Syracuse U.P)", type: "launch" },
  { time: "4.30", event: "Closing Remarks", detail: '"Joyce\'s Guide to Creative Fantasy" — Prof. Vicki Mahaffey', type: "closing" },
  { time: "Evening", event: "Refreshments & Seminar Dinner", detail: "All participants are invited by Ambassador Burgess to join the Bloomsday Breakfast and surrounding events of the day.", type: "dinner" },
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SlideIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 180]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div
      className="min-h-screen bg-[#0a0d0f] text-white overflow-x-hidden"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden">
        {/* Background image with parallax */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/assets/hero-dublin.jpg"
            alt=""
            className="w-full h-full object-cover opacity-45"
            style={{ filter: "saturate(0.7) brightness(0.65)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d0f]/20 via-transparent to-[#0a0d0f]" />
        </motion.div>

        {/* Teal overlay stripe */}
        <div className="absolute top-0 left-0 w-full h-1 bg-[#236480]" />

        {/* Nav */}
        <nav className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center px-10 py-6">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="JoyceWays" className="h-9 opacity-90" />
          </div>
          <div
            className="text-xs tracking-[0.25em] uppercase text-white/50"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Paris · June 2026
          </div>
        </nav>

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[#236480] text-xs tracking-[0.4em] uppercase mb-6"
          >
            Embassy of Ireland · Paris · 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-7xl font-light leading-none mb-3"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.01em" }}
          >
            Joyce et la<br />
            <em className="italic font-light text-[#7ec8e3]">Créativité</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="text-white/60 text-lg tracking-[0.12em] uppercase mt-4 mb-10"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
          >
            The Paris Seminar
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="w-16 h-px bg-[#236480] mb-8"
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-white/70 text-sm tracking-widest uppercase"
          >
            <span>Thursday, 11 June 2026</span>
            <span className="hidden sm:block text-[#236480]">·</span>
            <span>Embassy of Ireland, Paris</span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-[#236480] to-transparent"
          />
        </motion.div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-28 px-6 max-w-3xl mx-auto">
        <FadeIn>
          <p
            className="text-2xl font-light leading-relaxed text-white/80 mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <em>"Just say in the most natural tone: when I was in Paris, boul' Mich', I used to…."</em>
          </p>
          <p className="text-white/40 text-xs tracking-widest uppercase mb-10">— James Joyce, Ulysses</p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="text-white/65 leading-8 text-base">
            This year's Paris Seminar turns its gaze from the city itself to what the city unlocks — the creative act. Organised by Professor Patrick Mullen of Northeastern University and Professor Joseph Nugent of Boston College, <em>Joyce et la Créativité</em> brings together scholars, critics, and writers to explore how Joyce's imaginative world illuminates the nature and practice of creativity.
          </p>
        </FadeIn>
        <FadeIn delay={0.25}>
          <p className="text-white/65 leading-8 text-base mt-5">
            The seminar will feature a keynote address, a round table discussion, and the launches of two landmark projects. All hosted at the Embassy of Ireland, 12 Avenue Foch, Paris — in cooperation with the Ambassador of Ireland to France, Niall Burgess.
          </p>
        </FadeIn>
      </section>

      {/* ── DIVIDER ── */}
      <div className="w-full flex items-center gap-6 px-10 py-2">
        <div className="flex-1 h-px bg-white/8" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#236480]" />
        <div className="flex-1 h-px bg-white/8" />
      </div>

      {/* ── SPEAKERS ── */}
      <section className="py-28 px-6 max-w-5xl mx-auto">
        <FadeIn className="mb-16 text-center">
          <p className="text-[#236480] text-xs tracking-[0.4em] uppercase mb-4">Round Table & Invited Speakers</p>
          <h2
            className="text-5xl font-light"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            The Voices
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {speakers.map((s, i) => (
            <SlideIn key={s.name} delay={i * 0.07} className="group">
              <div className="bg-[#0a0d0f] p-8 h-full transition-all duration-500 group-hover:bg-[#0e1518] group-hover:border-l-2 group-hover:border-[#236480]">
                <div
                  className="text-xl font-light text-white/90 mb-2 group-hover:text-[#7ec8e3] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {s.name}
                </div>
                <div className="text-sm text-white/60 leading-relaxed tracking-wide mt-1">
                  {s.affiliation}
                </div>
              </div>
            </SlideIn>
          ))}
        </div>

        {/* Keynote callout */}
        <FadeIn delay={0.3} className="mt-16">
          <div className="border border-[#236480]/30 bg-[#236480]/5 p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#236480]" />
            <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-[#236480]/5 blur-2xl" />
            <p className="text-[#236480] text-xs tracking-[0.35em] uppercase mb-3">Keynote Speaker</p>
            <h3
              className="text-3xl font-light text-white/90 mb-2"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Prof. Sophie Rabau
            </h3>
            <p className="text-white/50 text-sm mb-1">Sorbonne Nouvelle</p>
            <p
              className="text-2xl italic text-white/70 mt-5 font-light"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              "Molly Means No!"
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ── DIVIDER ── */}
      <div className="w-full flex items-center gap-6 px-10 py-2">
        <div className="flex-1 h-px bg-white/8" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#236480]" />
        <div className="flex-1 h-px bg-white/8" />
      </div>

      {/* ── SCHEDULE ── */}
      <section className="py-28 px-6 max-w-4xl mx-auto">
        <FadeIn className="mb-16 text-center">
          <p className="text-[#236480] text-xs tracking-[0.4em] uppercase mb-4">Thursday, 11 June 2026</p>
          <h2
            className="text-5xl font-light"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Programme
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[88px] top-0 bottom-0 w-px bg-white/8" />

          <div className="space-y-0">
            {schedule.map((item, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div
                  className={`flex gap-0 group transition-all duration-300 ${
                    item.type === "break" || item.type === "qa" ? "opacity-50" : ""
                  }`}
                >
                  {/* Time */}
                  <div className="w-[88px] shrink-0 pt-8 pr-8 text-right">
                    <span className="text-[#236480] text-xs font-mono tracking-wider">{item.time}</span>
                  </div>

                  {/* Dot */}
                  <div className="relative flex flex-col items-center w-0">
                    <div
                      className={`w-2 h-2 rounded-full mt-9 shrink-0 transition-all duration-300 ${
                        item.type === "keynote" || item.type === "launch" || item.type === "closing"
                          ? "bg-[#236480] group-hover:scale-150"
                          : "bg-white/20"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 pl-10 pb-8 pt-6 border-b border-white/5 last:border-0 group-hover:pl-12 transition-all duration-300 ${
                      item.type === "keynote" ? "border-l-2 border-l-[#236480] ml-[-1px] bg-gradient-to-r from-[#236480]/5 to-transparent" : ""
                    }`}
                  >
                    <div
                      className="text-lg font-light text-white/85 mb-1"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {item.event}
                    </div>
                    {item.detail && (
                      <div className="text-sm text-white/40 leading-relaxed">{item.detail}</div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.3} className="mt-12">
          <div className="bg-[#0e1518] border border-white/8 p-7 text-sm text-white/50 leading-relaxed italic text-center"
            style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem" }}>
            All participants are invited by Ambassador Burgess to join the Bloomsday Breakfast and surrounding events of the day.
          </div>
        </FadeIn>
      </section>

      {/* ── LAUNCHES ── */}
      <section className="py-28 px-6 bg-[#070a0c]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-16 text-center">
            <p className="text-[#236480] text-xs tracking-[0.4em] uppercase mb-4">Double Launch</p>
            <h2
              className="text-5xl font-light"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              New Beginnings
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* JoyceWays Launch */}
            <FadeIn delay={0.1}>
              <div className="relative overflow-hidden border border-[#236480]/25 bg-[#0a0d0f] h-full group hover:border-[#236480]/60 transition-all duration-500">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#236480] to-[#7ec8e3]" />
                <div className="p-10">
                  <p className="text-[#236480] text-xs tracking-[0.35em] uppercase mb-6">4.00 pm · Launch</p>
                  <div className="flex items-start gap-5 mb-6">
                    <img src="/assets/joyceways-icon.png" alt="JoyceWays" className="h-20 w-20 object-contain rounded-2xl opacity-90 shrink-0 shadow-lg" />
                    <div>
                      <h3
                        className="text-3xl font-light text-white/90 leading-tight"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        JoyceWays
                      </h3>
                      <p className="text-white/40 text-sm mt-1 italic" style={{ fontFamily: "var(--font-serif)" }}>
                        Ulysses For You
                      </p>
                    </div>
                  </div>
                  <p className="text-white/55 text-sm leading-7 mb-5">
                    A reimagined digital guide to Ulysses in modern Dublin — augmented reality, immersive audio, and literary cartography united in one landmark app.
                  </p>
                  <p className="text-white/30 text-xs tracking-widest uppercase">C. Quigley, Ivan O. — Boston College</p>
                </div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#236480]/5 blur-3xl rounded-full group-hover:bg-[#236480]/10 transition-all duration-700" />
              </div>
            </FadeIn>

            {/* Book Launch */}
            <FadeIn delay={0.2}>
              <div className="relative overflow-hidden border border-white/10 bg-[#0a0d0f] h-full group hover:border-[#7ec8e3]/30 transition-all duration-500">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white/20 to-white/5" />
                <div className="p-10">
                  <p className="text-white/35 text-xs tracking-[0.35em] uppercase mb-6">4.15 pm · Launch</p>
                  <div className="flex items-start gap-6 mb-6">
                    <img
                      src="/assets/queer-possessions.png"
                      alt="Queer Possessions book cover"
                      className="h-36 w-auto object-contain shrink-0 shadow-xl opacity-95"
                    />
                    <div>
                      <p className="text-white/35 text-xs tracking-[0.2em] uppercase mb-3">Patrick R. Mullen</p>
                      <h3
                        className="text-3xl font-light text-white/90 leading-tight"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        Queer Possessions
                      </h3>
                      <p
                        className="text-white/45 text-lg italic font-light mt-1"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        Creative Criticism and Modern Irish Literature
                      </p>
                    </div>
                  </div>
                  <p className="text-white/55 text-sm leading-7 mb-5">
                    Professor Mullen's new monograph redefines the relationship between queer theory and Irish modernism — a landmark contribution to both fields.
                  </p>
                  <p className="text-white/30 text-xs tracking-widest uppercase">Syracuse University Press</p>
                </div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/2 blur-3xl rounded-full group-hover:bg-white/5 transition-all duration-700" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── VENUE ── */}
      <section className="py-28 px-6 max-w-4xl mx-auto">
        <FadeIn className="mb-16 text-center">
          <p className="text-[#236480] text-xs tracking-[0.4em] uppercase mb-4">Location</p>
          <h2
            className="text-5xl font-light"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Embassy of Ireland
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="space-y-6">
              <div>
                <p className="text-white/30 text-xs tracking-widest uppercase mb-2">Address</p>
                <p
                  className="text-2xl font-light text-white/80"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  12 Avenue Foch<br />75116 Paris, France
                </p>
              </div>
              <div className="w-12 h-px bg-[#236480]/50" />
              <div>
                <p className="text-white/30 text-xs tracking-widest uppercase mb-2">Host</p>
                <p className="text-white/60 text-sm leading-7">
                  With the gracious support of<br />
                  <span className="text-white/80">Ambassador Niall Burgess</span><br />
                  Ambassador of Ireland to France
                </p>
              </div>
              <div className="w-12 h-px bg-white/10" />
              <div>
                <p className="text-white/30 text-xs tracking-widest uppercase mb-2">Organisers</p>
                <p className="text-white/60 text-sm leading-7">
                  <span className="text-white/80">Professor Patrick Mullen</span><br />
                  Northeastern University<br />
                  <span className="text-white/80">Professor Joseph Nugent</span><br />
                  Boston College
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#236480]/20 to-transparent blur-2xl" />
              <div className="relative border border-white/10 p-8 bg-[#0a0d0f]">
                <p className="text-white/30 text-xs tracking-widest uppercase mb-4">Following the Seminar</p>
                <p
                  className="text-xl font-light text-white/75 leading-relaxed italic"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Refreshments and a Seminar Dinner will follow the programme. Participants are warmly invited to attend the Bloomsday Breakfast and associated events.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── QUOTE BREAK ── */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#236480]/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d0f] via-transparent to-[#0a0d0f]" />
        <FadeIn className="relative z-10 max-w-3xl mx-auto text-center">
          <p
            className="text-4xl md:text-5xl font-light italic leading-tight text-white/80 mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            "I want to give a picture of Dublin so complete that if the city one day suddenly disappeared from the earth it could be reconstructed out of my book."
          </p>
          <p className="text-white/30 text-xs tracking-[0.35em] uppercase">James Joyce to Frank Budgen</p>
        </FadeIn>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/8 py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center gap-4">
            <img src="/assets/logo.png" alt="JoyceWays" className="h-8 opacity-60" />
            <div>
              <p className="text-white/50 text-xs tracking-widest uppercase">Joyce et la Créativité</p>
              <p className="text-white/25 text-xs">The Paris Seminar · 2026</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-white/25 text-xs leading-6">
              Embassy of Ireland · 12 Avenue Foch · 75116 Paris<br />
              Thursday, 11 June 2026<br />
              Organised by Professor Patrick Mullen, Northeastern University<br />
              &amp; Professor Joseph Nugent, Boston College
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}