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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="font-mono text-[10px] text-f-mint/30 uppercase tracking-widest">scroll</span>
          <ChevronDown size={16} className="text-f-mint/30 animate-bounce" />
        </div>
      </section>

      {/* TICKER SECTION */}
      <section className="bg-f-dark py-4 border-y border-f-neon/15 overflow-hidden flex items-center">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="font-display font-medium text-[15px] text-f-mint/60 tracking-wide mx-6">Viviane Martinello</span>
              <span className="text-f-neon">·</span>
              <span className="font-display font-medium text-[15px] text-f-mint/60 tracking-wide mx-6">Abba Pai Church</span>
              <span className="text-f-neon">·</span>
              <span className="font-display font-medium text-[15px] text-f-mint/60 tracking-wide mx-6">Rony Meisler</span>
              <span className="text-f-neon">·</span>
              <span className="font-display font-medium text-[15px] text-f-mint/60 tracking-wide mx-6">Unesc TV</span>
              <span className="text-f-neon">·</span>
              <span className="font-display font-medium text-[15px] text-f-mint/60 tracking-wide mx-6">Murilo Rosa</span>
              <span className="text-f-neon">·</span>
              <span className="font-display font-medium text-[15px] text-f-mint/60 tracking-wide mx-6">Igor Drudi</span>
              <span className="text-f-neon">·</span>
            </div>
          ))}
        </div>
      </section>

      {/* O QUE É A FOSTER */}
      <section className="py-28 bg-f-black">
        <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
          <AnimatedSection>
            <div className="font-mono text-f-neon/70 mb-6">{t('about_eyebrow')}</div>
            <h2 className="font-display font-bold text-[clamp(32px,5vw,52px)] text-f-mint mb-8">
              <span className="block" dangerouslySetInnerHTML={{ __html: t('about_title') }}></span>
            </h2>
            <p className="font-body font-light text-[20px] text-f-mint/55 max-w-2xl mx-auto mb-20">
              {t('about_desc_1')}
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <AnimatedSection delay={100}>
              <div className="text-f-neon text-2xl mb-4">◈</div>
              <h3 className="font-display font-medium text-xl text-f-mint mb-3">{t('about_pillar_1_title')}</h3>
              <p className="text-f-mint/60 text-[15px]">{t('about_pillar_1_desc')}</p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="text-f-neon text-2xl mb-4">⬡</div>
              <h3 className="font-display font-medium text-xl text-f-mint mb-3">{t('about_pillar_2_title')}</h3>
              <p className="text-f-mint/60 text-[15px]">{t('about_pillar_2_desc')}</p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="text-f-neon text-2xl mb-4">▲</div>
              <h3 className="font-display font-medium text-xl text-f-mint mb-3">{t('about_pillar_3_title')}</h3>
              <p className="text-f-mint/60 text-[15px]">{t('about_pillar_3_desc')}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* iFOSTER SECTION */}
      <section id="ifoster" className="py-28 bg-gradient-to-br from-f-black to-f-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <AnimatedSection>
                <div className="font-mono text-f-neon/70 mb-6">{t('ifoster_eyebrow')}</div>
                <h2 className="font-display font-bold text-[clamp(40px,6vw,56px)] text-f-mint mb-8">
                  <span className="block" dangerouslySetInnerHTML={{ __html: t('ifoster_hero_title_1') }}></span>
                  <span className="block" dangerouslySetInnerHTML={{ __html: t('ifoster_hero_title_2') }}></span>
                  <span className="block text-f-neon text-glow-sm" dangerouslySetInnerHTML={{ __html: t('ifoster_hero_title_3') }}></span>
                </h2>
                <p className="text-[17px] text-f-mint/65 mb-8 max-w-lg">{t('ifoster_desc')}</p>
                <ul className="space-y-3 mb-10">
                  {["ifoster_feature_1", "ifoster_feature_2", "ifoster_feature_3", "ifoster_feature_4", "ifoster_feature_5"].map((key, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-f-mint/80">
                      <CheckCircle2 size={18} className="text-f-neon shrink-0 mt-0.5" />
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#ifoster" className="bg-f-neon text-f-black font-display font-semibold rounded-full px-7 py-3.5 text-center hover:glow-neon transition-all duration-300">
                    {t('ifoster_cta')}
                  </a>
                  <button onClick={openContact} className="border border-f-neon text-f-neon font-display font-medium rounded-full px-7 py-3.5 text-center hover:bg-f-neon/10 transition-all duration-300 cursor-pointer">
                    {t('nav_cta')} →
                  </button>
                </div>
              </AnimatedSection>
            </div>
            <div className="order-1 lg:order-2">
              <AnimatedSection delay={200}>
                <div className="w-full bg-f-black border border-f-neon/20 rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center gap-2 mb-6 border-b border-f-neon/10 pb-4">
                    <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div><div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div><div className="w-3 h-3 rounded-full bg-[#27C93F]"></div></div>
                  </div>
                  <div className="space-y-4 mb-6 font-body text-[13px]">
                    <div className="flex justify-end"><div className="bg-f-neon/10 text-f-mint rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">Preciso de um roteiro para um vídeo de 1 minuto sobre IA no marketing.</div></div>
                    <div className="flex justify-start"><div className="bg-f-dark/80 text-f-mint rounded-2xl rounded-tl-sm px-4 py-3 border border-f-neon/10">Aqui está o roteiro otimizado para retenção...</div></div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* VERTICAIS */}
      <section id="solucoes" className="py-28 bg-f-black">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-20">
            <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] text-f-mint mb-4">{t('verticals_title')}</h2>
            <p className="text-[18px] text-f-mint/55 max-w-2xl">{t('verticals_subtitle')}</p>
          </AnimatedSection>
          <div className="space-y-8">
            <div className="bg-f-dark border border-f-neon/12 rounded-2xl overflow-hidden p-10 lg:p-16">
              <h3 className="font-display font-bold text-3xl text-f-mint mb-4">{t('create_title')}</h3>
              <p className="text-f-mint/65 mb-8">{t('create_desc')}</p>
              <a href="#create" className="text-f-neon font-display font-medium hover:underline">{t('create_cta')}</a>
            </div>
            <div className="bg-f-dark border border-f-neon/12 rounded-2xl overflow-hidden p-10 lg:p-16">
              <h3 className="font-display font-bold text-3xl text-f-mint mb-4">{t('build_title')}</h3>
              <p className="text-f-mint/65 mb-8">{t('build_desc')}</p>
              <a href="#build" className="text-f-neon font-display font-medium hover:underline">{t('build_cta')}</a>
            </div>
            <div className="bg-f-dark border border-f-neon/12 rounded-2xl overflow-hidden p-10 lg:p-16">
              <h3 className="font-display font-bold text-3xl text-f-mint mb-4">{t('grow_title')}</h3>
              <p className="text-f-mint/65 mb-8">{t('grow_desc')}</p>
              <a href="#grow" className="text-f-neon font-display font-medium hover:underline">{t('grow_cta')}</a>
            </div>
          </div>
        </div>
      </section>

      {/* PLATAFORMAS */}
      <section id="plataformas" className="py-24 bg-f-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-16">
            <h2 className="font-display font-bold text-[clamp(32px,4vw,44px)] text-f-mint mb-4">{t('platforms_title')}</h2>
            <p className="text-[17px] text-f-mint/55 max-w-2xl">{t('platforms_desc')}</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {["Stratube", "Nomes e Marcas", "Echowise"].map((name, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-f-black/60 border border-f-neon/15 rounded-2xl p-8 h-full flex flex-col">
                  <h3 className="font-display font-bold text-2xl text-f-mint mb-3">{name}</h3>
                  <p className="text-f-mint/60 text-[15px] mb-6 flex-grow">Solução digital proprietária da Foster Company.</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WORK / CASES */}
      <section id="work" className="py-28 bg-f-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="flex justify-between items-end mb-16">
            <h2 className="font-display font-bold text-[clamp(32px,4vw,40px)] text-f-mint">{t('work_title')}</h2>
            <a href="#work" className="text-f-neon hover:underline">{t('work_cta')}</a>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 bg-gradient-to-br from-f-black to-f-dark border border-f-neon/15 rounded-2xl p-12">
               <h3 className="font-display font-bold text-4xl text-f-mint mb-4">De 100k para 700k inscritos.</h3>
               <p className="text-f-mint/65">Viviane Martinello & Abba Pai Church — +600% de crescimento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CANAIS PRÓPRIOS */}
      <section id="canais-proprios" className="py-24 bg-f-black bg-grid-pattern relative">
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <AnimatedSection className="mb-16">
            <h2 className="font-display font-bold text-[clamp(32px,4vw,44px)] text-f-mint mb-4">
               <span dangerouslySetInnerHTML={{ __html: t('channels_title') }}></span>
            </h2>
            <p className="text-[17px] text-f-mint/55 max-w-2xl">{t('channels_desc')}</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="md:col-span-2 lg:col-span-2 bg-[#104037]/50 border border-[#50F2A7]/15 rounded-2xl p-5">
              <h3 className="font-display font-bold text-[20px] text-[#E1F2DF] mb-2">Fatos da Bíblia</h3>
              <p className="text-[#E1F2DF]/60 text-[13px] mb-4">Investigação séria sobre história e arqueologia bíblica.</p>
              <a href="https://www.youtube.com/@fatos.dabiblia" target="_blank" className="text-[#50F2A7] hover:underline">Ver canal →</a>
            </div>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="py-24 bg-f-black border-t border-f-neon/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div><div className="font-display font-bold text-5xl text-f-neon mb-2">15+</div><div className="text-f-mint/50 text-xs uppercase tracking-widest">anos de produção</div></div>
            <div><div className="font-display font-bold text-5xl text-f-neon mb-2">+500</div><div className="text-f-mint/50 text-xs uppercase tracking-widest">projetos</div></div>
            <div><div className="font-display font-bold text-5xl text-f-neon mb-2">+1 Bi</div><div className="text-f-mint/50 text-xs uppercase tracking-widest">views geradas</div></div>
          </div>
        </div>
      </section>

      {/* CARLOS BORGES */}
      <section id="carlos-borges" className="pt-28 pb-12 bg-f-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <img src="/carlos-borges.png" alt="Carlos Borges" className="w-full rounded-2xl border border-f-neon/20" />
            </div>
            <div className="lg:col-span-7">
              <AnimatedSection>
                <h2 className="font-display font-bold text-5xl text-f-mint mb-4">{t('founder_title')}</h2>
                <div className="font-display text-f-neon mb-8">Carlos Borges — CEO & Founder</div>
                <div className="space-y-6 text-f-mint/65">
                  <p>{t('founder_p1')}</p>
                  <p>{t('founder_p2')}</p>
                  <p>{t('founder_p3')}</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* SELO MUSICAL */}
      <section id="selo-musical" className="pt-12 pb-24 bg-[#104037] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-f-mint mb-4">{t('music_title')}</h2>
            <p className="text-f-mint/55 max-w-2xl mx-auto">{t('music_desc')}</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-f-black/40 border border-f-neon/15 rounded-2xl p-8">
              <h3 className="font-display font-bold text-3xl text-f-mint mb-4">{t('music_card1_title')}</h3>
              <p className="text-f-mint/65 mb-8">{t('music_card1_desc')}</p>
              <button onClick={openContact} className="text-f-neon font-bold hover:underline">{t('music_card1_cta')}</button>
            </div>
            <div className="bg-f-black/40 border border-f-neon/15 rounded-2xl p-8">
              <h3 className="font-display font-bold text-3xl text-f-mint mb-4">{t('music_card2_title')}</h3>
              <p className="text-f-mint/65 mb-8">{t('music_card2_desc')}</p>
              <a href="#musica" className="text-f-neon font-bold hover:underline">{t('music_card2_cta')}</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-36 bg-f-black text-center">
        <div className="max-w-3xl mx-auto px-5">
          <AnimatedSection>
            <h2 className="font-display font-bold text-6xl text-f-mint mb-6">
              <span>{t('cta_title_1')}</span><br/>
              <span>{t('cta_title_2')}</span>
            </h2>
            <p className="text-f-mint/50 text-xl mb-12">{t('cta_desc')}</p>
            <button onClick={openContact} className="bg-f-neon text-f-black font-display font-bold rounded-full px-12 py-5 text-lg hover:glow-neon">
              {t('cta_btn')}
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}