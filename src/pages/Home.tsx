import { useEffect, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useContact } from '../context/ContactContext';

export default function Home() {
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [playFatos, setPlayFatos] = useState(false);
  const { t } = useLanguage();
  const { openContact } = useContact();
  
  const lines = [
    { text: "[ iFoster ] iniciando...", color: "text-f-mint/50" },
    { text: "[ avatar  ] voz clonada ✓", color: "text-f-neon" },
    { text: "[ canal   ] +12k inscritos ✓", color: "text-f-neon" },
    { text: "[ conteúdo] 847 posts gerados ✓", color: "text-f-neon" },
    { text: "[ site    ] deployado ✓", color: "text-f-neon" },
    { text: "[ status  ] Sistema pronto. 🟢", color: "text-f-mint" }
  ];

  const musicArtists = [
    { name: "Pai Nosso", image: "/artists/pai-nosso.png", url: "https://open.spotify.com/intl-pt/artist/75mdNYwMhERXZ6t2bO6j1I?si=va9zdyA3SUS97zufwC62sw" },
    { name: "Puppies Kids", image: "/artists/puppies-kids.png", url: "https://open.spotify.com/intl-pt/artist/1QNm8o6trF3PzkCIXw8br1?si=i3m1icGUQNeNZ4wpnL7Rgw" },
    { name: "Além do Som", image: "/artists/alem-do-som.png", url: "https://open.spotify.com/intl-pt/artist/1dMX3YdpGiJX3p3ERa9FrB?si=1RlFNpa4Q8mGiciHrN5FGA" },
    { name: "Sem Rótulo", image: "/artists/sem-rotulo.png", url: "https://open.spotify.com/intl-pt/artist/3Ef1FfHngEIw8Oi70m4Tfu?si=_5ydRNc7QFWJ7P7a9BIofw" }
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typewriterIndex < lines.length) {
      timeout = setTimeout(() => {
        setTypewriterIndex(prev => prev + 1);
      }, 800);
    }
    return () => clearTimeout(timeout);
  }, [typewriterIndex]);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-[140px] pb-20 bg-grid-pattern bg-noise overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-f-neon/5 border border-f-neon/25 rounded-full px-4 py-1.5 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-f-neon animate-pulse-dot"></div>
                <span className="font-mono text-[12px] text-f-neon">✦ {t('hero_badge')} — Balneário Camboriú, Brasil</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h1 className="font-display font-bold text-[clamp(36px,8vw,88px)] leading-[0.95] tracking-tight mb-8">
                <span className="block text-f-mint">{t('hero_headline_1')}</span>
                <span className="block text-f-mint/75 font-normal">{t('hero_headline_2')}</span>
                <span className="block text-f-neon italic">{t('hero_headline_3')}</span>
                <span className="block text-f-neon text-glow">{t('hero_headline_4')}</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-f-mint/60 text-[18px] font-light max-w-[480px] mb-10">
                {t('hero_subtitle')}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href="#ifoster" className="bg-f-neon text-f-black font-display font-semibold rounded-full px-7 py-3.5 text-center hover:glow-neon hover:scale-[1.02] transition-all duration-300">
                  {t('hero_cta_1')} →
                </a>
                <button onClick={openContact} className="border border-f-neon/35 text-f-neon font-display font-medium rounded-full px-7 py-3.5 text-center hover:bg-f-neon/10 transition-all duration-300 cursor-pointer">
                  {t('hero_cta_2')}
                </button>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-5 relative h-[500px] hidden md:block">
            <AnimatedSection delay={400} className="h-full w-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-[420px] bg-f-dark/60 backdrop-blur-xl border border-f-neon/20 rounded-2xl p-7 animate-float relative z-20 shadow-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div><div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div><div className="w-3 h-3 rounded-full bg-[#27C93F]"></div></div>
                    <div className="ml-auto font-mono text-[11px] text-f-neon/60">iFoster — AI Engine v2.5</div>
                  </div>
                  <div className="font-mono text-[13px] space-y-2 min-h-[160px]">
                    {lines.slice(0, typewriterIndex).map((line, i) => (<div key={i} className={`${line.color} animate-in fade-in duration-300`}>{line.text}</div>))}
                    <div className="inline-block w-2 h-4 bg-f-neon animate-blink ml-1 align-middle"></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ... (Seções intermediárias mantidas) */}

      {/* CTA FINAL */}
      <section className="py-36 bg-f-black relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(80,242,167,0.07) 0%, transparent 70%)' }}></div>
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center relative z-10">
          <AnimatedSection>
            <div className="font-mono text-f-neon/70 mb-6">{t('cta_eyebrow')}</div>
            <h2 className="font-display font-bold text-[clamp(48px,8vw,72px)] text-f-mint mb-6">
              <span className="block">{t('cta_title_1')}</span>
              <span className="block">{t('cta_title_2')}</span>
            </h2>
            <p className="font-body font-light text-[20px] text-f-mint/50 mb-12">{t('cta_desc')}</p>
            <button 
              onClick={openContact}
              className="inline-block bg-f-neon text-f-black font-display font-bold rounded-full px-12 py-5 text-lg hover:glow-neon hover:scale-[1.03] transition-all duration-300 mb-6 cursor-pointer"
            >
              {t('cta_btn')}
            </button>
            <p className="font-mono text-[11px] text-f-mint/25">{t('cta_footer')}</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}