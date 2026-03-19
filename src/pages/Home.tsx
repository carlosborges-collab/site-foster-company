import { useEffect, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Home() {
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [playFatos, setPlayFatos] = useState(false);
  const { t } = useLanguage();
  
  const lines = [
    { text: "[ iFoster ] iniciando...", color: "text-f-mint/50" },
    { text: "[ avatar  ] voz clonada ✓", color: "text-f-neon" },
    { text: "[ canal   ] +12k inscritos ✓", color: "text-f-neon" },
    { text: "[ conteúdo] 847 posts gerados ✓", color: "text-f-neon" },
    { text: "[ site    ] deployado ✓", color: "text-f-neon" },
    { text: "[ status  ] Sistema pronto. 🟢", color: "text-f-mint" }
  ];

  const musicArtists = [
    { 
      name: "Pai Nosso", 
      image: "/artists/pai-nosso.png", 
      url: "https://open.spotify.com/intl-pt/artist/75mdNYwMhERXZ6t2bO6j1I?si=va9zdyA3SUS97zufwC62sw" 
    },
    { 
      name: "Puppies Kids", 
      image: "/artists/puppies-kids.png", 
      url: "https://open.spotify.com/intl-pt/artist/1QNm8o6trF3PzkCIXw8br1?si=i3m1icGUQNeNZ4wpnL7Rgw" 
    },
    { 
      name: "Além do Som", 
      image: "/artists/alem-do-som.png", 
      url: "https://open.spotify.com/intl-pt/artist/1dMX3YdpGiJX3p3ERa9FrB?si=1RlFNpa4Q8mGiciHrN5FGA" 
    },
    { 
      name: "Sem Rótulo", 
      image: "/artists/sem-rotulo.png", 
      url: "https://open.spotify.com/intl-pt/artist/3Ef1FfHngEIw8Oi70m4Tfu?si=_5ydRNc7QFWJ7P7a9BIofw" 
    }
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
          
          {/* Left Column */}
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
                <a href="#work" className="border border-f-neon/35 text-f-neon font-display font-medium rounded-full px-7 py-3.5 text-center hover:bg-f-neon/10 transition-all duration-300">
                  {t('hero_cta_2')}
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Visual Tech 3D */}
          <div className="lg:col-span-5 relative h-[500px] hidden md:block">
            <AnimatedSection delay={400} className="h-full w-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Main Floating Card */}
                <div className="w-full max-w-[420px] bg-f-dark/60 backdrop-blur-xl border border-f-neon/20 rounded-2xl p-7 animate-float relative z-20 shadow-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                    </div>
                    <div className="ml-auto font-mono text-[11px] text-f-neon/60">iFoster — AI Engine v2.5</div>
                  </div>
                  <div className="h-px w-full bg-f-neon/10 mb-5"></div>
                  <div className="font-mono text-[13px] space-y-2 min-h-[160px]">
                    {lines.slice(0, typewriterIndex).map((line, i) => (
                      <div key={i} className={`${line.color} animate-in fade-in duration-300`}>{line.text}</div>
                    ))}
                    <div className="inline-block w-2 h-4 bg-f-neon animate-blink ml-1 align-middle"></div>
                  </div>
                </div>

                {/* Mini Cards */}
                <div className="absolute top-10 -right-4 bg-f-dark border border-f-neon/20 rounded-xl p-4 shadow-xl z-30 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="font-display font-bold text-3xl text-f-neon">{t('hero_metric_3_val')}</div>
                  <div className="font-mono text-[10px] text-f-mint/50 uppercase">{t('hero_metric_3_lbl')}</div>
                </div>
                
                <div className="absolute bottom-20 -left-8 bg-f-dark border border-f-neon/20 rounded-xl p-4 shadow-xl z-30 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="font-display font-bold text-2xl text-f-mint">700k</div>
                  <div className="font-mono text-[10px] text-f-mint/50 uppercase">inscritos Abba Pai Church</div>
                </div>

                <div className="absolute -bottom-4 right-10 bg-f-dark border border-f-neon/20 rounded-xl p-4 shadow-xl z-30 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="font-display font-bold text-xl text-f-mint">1 semana</div>
                  <div className="font-mono text-[10px] text-f-mint/50 uppercase">para monetização ativa</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll Indicator */}
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
            <div className="font-mono text-f-neon/70 mb-6" data-i18n="about_eyebrow">{t('about_eyebrow')}</div>
            <h2 className="font-display font-bold text-[clamp(32px,5vw,52px)] text-f-mint mb-8">
              <span className="block" data-i18n="about_title" dangerouslySetInnerHTML={{ __html: t('about_title') }}></span>
            </h2>
            <p className="font-body font-light text-[20px] text-f-mint/55 max-w-2xl mx-auto mb-20" data-i18n="about_desc_1">
              {t('about_desc_1')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <AnimatedSection delay={100}>
              <div className="text-f-neon text-2xl mb-4">◈</div>
              <h3 className="font-display font-medium text-xl text-f-mint mb-3" data-i18n="about_pillar_1_title">Criar</h3>
              <p className="text-f-mint/60 text-[15px]" data-i18n="about_pillar_1_desc">Avatares, vídeos, conteúdo e experiências que param o scroll e constroem marcas.</p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="text-f-neon text-2xl mb-4">⬡</div>
              <h3 className="font-display font-medium text-xl text-f-mint mb-3" data-i18n="about_pillar_2_title">Construir</h3>
              <p className="text-f-mint/60 text-[15px]" data-i18n="about_pillar_2_desc">Plataformas, sites e tecnologia com IA integrada em cada etapa do processo.</p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="text-f-neon text-2xl mb-4">▲</div>
              <h3 className="font-display font-medium text-xl text-f-mint mb-3" data-i18n="about_pillar_3_title">Crescer</h3>
              <p className="text-f-mint/60 text-[15px]" data-i18n="about_pillar_3_desc">Canais, posicionamento e estratégia que transformam presença em dominância digital.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* iFOSTER EM DESTAQUE */}
      <section id="ifoster" className="py-28 bg-gradient-to-br from-f-black to-f-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1">
              <AnimatedSection>
                <div className="font-mono text-f-neon/70 mb-6" data-i18n="ifoster_eyebrow">{t('ifoster_eyebrow')}</div>
                <h2 className="font-display font-bold text-[clamp(40px,6vw,56px)] text-f-mint mb-8">
                  <span className="block">iFoster.</span>
                  <span className="block" data-i18n="ifoster_hero_title_1">{t('ifoster_hero_title_1')}</span>
                  <span className="block" data-i18n="ifoster_hero_title_2">{t('ifoster_hero_title_2')}</span>
                  <span className="block text-f-neon text-glow-sm" data-i18n="ifoster_hero_title_3">{t('ifoster_hero_title_3')}</span>
                </h2>
                <p className="text-[17px] text-f-mint/65 mb-8 max-w-lg" data-i18n="ifoster_desc">
                  {t('ifoster_desc')}
                </p>
                
                <ul className="space-y-3 mb-10">
                  {[
                    "ifoster_feature_1",
                    "ifoster_feature_2",
                    "ifoster_feature_3",
                    "ifoster_feature_4",
                    "ifoster_feature_5"
                  ].map((key, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-f-mint/80">
                      <CheckCircle2 size={18} className="text-f-neon shrink-0 mt-0.5" />
                      <span data-i18n={key}>{t(key)}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/ifoster" className="bg-f-neon text-f-black font-display font-semibold rounded-full px-7 py-3.5 text-center hover:glow-neon transition-all duration-300" data-i18n="ifoster_cta">
                    {t('ifoster_cta')}
                  </a>
                  <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="border border-f-neon text-f-neon font-display font-medium rounded-full px-7 py-3.5 text-center hover:bg-f-neon/10 transition-all duration-300" data-i18n="nav_cta">
                    {t('nav_cta')} →
                  </a>
                </div>
              </AnimatedSection>
            </div>

            <div className="order-1 lg:order-2 perspective-[1000px]">
              <AnimatedSection delay={200}>
                <div className="w-full bg-f-black border border-f-neon/20 rounded-2xl p-6 shadow-2xl transform transition-transform duration-700 hover:rotate-x-2 hover:-rotate-y-2">
                  <div className="flex items-center gap-2 mb-6 border-b border-f-neon/10 pb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                    </div>
                    <div className="ml-auto font-mono text-[11px] text-f-mint/40 uppercase tracking-widest">iFoster Chat Interface</div>
                  </div>
                  
                  <div className="space-y-4 mb-6 font-body text-[13px]">
                    <div className="flex justify-end">
                      <div className="bg-f-neon/10 text-f-mint rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                        Preciso de um roteiro para um vídeo de 1 minuto sobre IA no marketing.
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="flex gap-3 max-w-[90%]">
                        <div className="w-6 h-6 rounded-full bg-f-neon/20 flex items-center justify-center shrink-0 mt-1">
                          <span className="text-f-neon text-[10px]">✦</span>
                        </div>
                        <div className="bg-f-dark/80 text-f-mint rounded-2xl rounded-tl-sm px-4 py-3 border border-f-neon/10">
                          <p className="mb-2">Aqui está o roteiro otimizado para retenção:</p>
                          <div className="font-mono text-[11px] text-f-neon/80 bg-f-black p-2 rounded border border-f-neon/20">
                            [0:00-0:03] HOOK: "Sua agência está mentindo para você..."
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center font-mono text-[10px] text-f-mint/30 pt-4 border-t border-f-neon/10">
                    Super Agentes de IA · Foster Company
                  </div>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* VERTICAIS (SOLUÇÕES) */}
      <section id="solucoes" className="py-28 bg-f-black bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-20">
            <div className="font-mono text-f-neon/70 mb-6" data-i18n="verticals_eyebrow">{t('verticals_eyebrow')}</div>
            <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] text-f-mint mb-4" data-i18n="verticals_title">{t('verticals_title')}</h2>
            <p className="text-[18px] text-f-mint/55 max-w-2xl" data-i18n="verticals_subtitle">Escolha onde você precisa crescer — ou deixe a Foster cuidar de tudo.</p>
          </AnimatedSection>

          <div className="space-y-8">
            {/* Create */}
            <AnimatedSection>
              <div className="bg-f-dark border border-f-neon/12 rounded-2xl overflow-hidden hover:border-f-neon/45 hover:-translate-y-1 transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-10 lg:p-16 flex flex-col justify-center order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-f-neon/10">
                    <div className="w-full h-full min-h-[240px] bg-f-black rounded-xl border border-f-neon/20 p-6 flex flex-col items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,242,167,0.1)_0%,transparent_70%)]"></div>
                      <div className="w-24 h-24 rounded-full border-2 border-dashed border-f-neon/40 animate-[spin_10s_linear_infinite] mb-6 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-f-neon/20 blur-md"></div>
                      </div>
                      <div className="font-mono text-xs text-f-neon tracking-widest">AVATAR ATIVO ●</div>
                    </div>
                  </div>
                  <div className="p-10 lg:p-16 order-1 lg:order-2">
                    <div className="inline-block bg-f-black border border-f-neon/20 rounded-full px-4 py-1.5 font-mono text-xs text-f-mint mb-8">01 / Foster Create</div>
                    <h3 className="font-display font-bold text-3xl text-f-mint mb-4" data-i18n="create_title">{t('create_title')}</h3>
                    <p className="text-f-mint/65 mb-8" data-i18n="create_desc">{t('create_desc')}</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10 font-mono text-sm text-f-neon/80">
                      <span>Produção de Vídeos</span>
                      <span className="text-f-mint/30">·</span>
                      <span>Avatar IA</span>
                      <span className="text-f-mint/30">·</span>
                      <span>Conteúdo com IA</span>
                    </div>
                    <a href="#create" className="inline-flex items-center text-f-neon font-display font-medium hover:underline underline-offset-4" data-i18n="create_cta">{t('create_cta')}</a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Build */}
            <AnimatedSection>
              <div className="bg-f-dark border border-f-neon/12 rounded-2xl overflow-hidden hover:border-f-neon/45 hover:-translate-y-1 transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-10 lg:p-16">
                    <div className="inline-block bg-f-black border border-f-neon/20 rounded-full px-4 py-1.5 font-mono text-xs text-f-mint mb-8">02 / Foster Build</div>
                    <h3 className="font-display font-bold text-3xl text-f-mint mb-4" data-i18n="build_title">{t('build_title')}</h3>
                    <p className="text-f-mint/65 mb-8" data-i18n="build_desc">{t('build_desc')}</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10 font-mono text-sm text-f-neon/80">
                      <span>Sites com IA</span>
                      <span className="text-f-mint/30">·</span>
                      <span>Plataformas Digitais</span>
                    </div>
                    <a href="#build" className="inline-flex items-center text-f-neon font-display font-medium hover:underline underline-offset-4" data-i18n="build_cta">{t('build_cta')}</a>
                  </div>
                  <div className="p-10 lg:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-f-neon/10">
                    <div className="w-full h-full min-h-[240px] bg-f-black rounded-xl border border-f-neon/20 p-6 font-mono text-xs text-f-neon/70 overflow-hidden">
                      <div className="mb-2 text-f-mint/40">// Deploying infrastructure</div>
                      <div className="mb-1">{'>'} npm run build</div>
                      <div className="mb-1">{'>'} building client + server...</div>
                      <div className="mb-1 text-f-neon">{'>'} ✓ 142 modules compiled</div>
                      <div className="mb-1">{'>'} connecting to iFoster API...</div>
                      <div className="mb-1 text-f-neon">{'>'} ✓ connection established</div>
                      <div className="mt-4 animate-pulse">_</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Grow */}
            <AnimatedSection>
              <div className="bg-f-dark border border-f-neon/12 rounded-2xl overflow-hidden hover:border-f-neon/45 hover:-translate-y-1 transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-10 lg:p-16 flex flex-col justify-center order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-f-neon/10">
                    <div className="w-full h-full min-h-[240px] bg-f-black rounded-xl border border-f-neon/20 p-6 flex items-end relative overflow-hidden">
                      <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 preserve-3d" preserveAspectRatio="none">
                        <path d="M0 100 L 0 80 L 20 75 L 40 60 L 60 65 L 80 30 L 100 10 L 100 100 Z" className="fill-f-neon/10" />
                        <path d="M0 80 L 20 75 L 40 60 L 60 65 L 80 30 L 100 10" className="stroke-f-neon stroke-2 fill-none" strokeDasharray="300" strokeDashoffset="0">
                          <animate attributeName="stroke-dashoffset" from="300" to="0" dur="3s" fill="freeze" />
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div className="p-10 lg:p-16 order-1 lg:order-2">
                    <div className="inline-block bg-f-black border border-f-neon/20 rounded-full px-4 py-1.5 font-mono text-xs text-f-mint mb-8">03 / Foster Grow</div>
                    <h3 className="font-display font-bold text-3xl text-f-mint mb-4" data-i18n="grow_title">{t('grow_title')}</h3>
                    <p className="text-f-mint/65 mb-8" data-i18n="grow_desc">{t('grow_desc')}</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10 font-mono text-sm text-f-neon/80">
                      <span>Gestão YouTube</span>
                      <span className="text-f-mint/30">·</span>
                      <span>Mentoria 3Ps</span>
                      <span className="text-f-mint/30">·</span>
                      <span>Plataforma YouTube</span>
                      <span className="text-f-mint/30">·</span>
                      <span>Posicionamento</span>
                    </div>
                    <a href="#grow" className="inline-flex items-center text-f-neon font-display font-medium hover:underline underline-offset-4" data-i18n="grow_cta">{t('grow_cta')}</a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PLATAFORMAS */}
      <section id="plataformas" className="py-24 bg-f-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-16">
            <div className="font-mono text-f-neon/70 mb-6" data-i18n="platforms_eyebrow">{t('platforms_eyebrow')}</div>
            <h2 className="font-display font-bold text-[clamp(32px,4vw,44px)] text-f-mint mb-4" data-i18n="platforms_title">{t('platforms_title')}</h2>
            <p className="text-[17px] text-f-mint/55 max-w-2xl" data-i18n="platforms_desc">{t('platforms_desc')}</p>
          </AnimatedSection>

          {/* iFoster Card - Destaque */}
          <AnimatedSection className="mb-6">
            <div className="bg-[#50F2A7]/[0.06] border border-[#50F2A7]/[0.35] rounded-2xl p-8 lg:p-10 hover:border-[#50F2A7]/50 hover:glow-neon transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#50F2A7]/10 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#50F2A7]">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 11.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 6.5 12 6.5 15.5 8.07 15.5 10 13.93 13.5 12 13.5zM12 8l-.5 1.5L10 10l1.5.5L12 12l.5-1.5L14 10l-1.5-.5L12 8z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-[#50F2A7] mb-1" data-i18n="ifoster_card_badge">{t('ifoster_card_badge')}</div>
                      <div className="inline-block bg-f-dark/50 border border-[#50F2A7]/20 rounded-full px-2 py-0.5 font-mono text-[10px] text-f-mint/70" data-i18n="ifoster_card_tags">
                        {t('ifoster_card_tags')}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-display font-bold text-[26px] text-[#E1F2DF] mb-3" data-i18n="ifoster_card_title">{t('ifoster_card_title')}</h3>
                  <p className="text-[#E1F2DF]/65 text-[15px] leading-[1.55] mb-6 max-w-2xl" data-i18n="ifoster_card_desc">
                    {t('ifoster_card_desc')}
                  </p>
                  
                  <a href="[URL do iFoster]" target="_blank" rel="noopener noreferrer" className="font-display font-semibold text-[14px] text-[#50F2A7] hover:underline underline-offset-4" data-i18n="ifoster_card_cta">
                    {t('ifoster_card_cta')}
                  </a>
                </div>
                
                <div className="w-full lg:w-auto shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["ifoster_card_agent_1", "ifoster_card_agent_2", "ifoster_card_agent_3", "ifoster_card_agent_4"].map((agent, i) => (
                      <div key={i} className="bg-[#50F2A7]/[0.08] border border-[#50F2A7]/20 rounded-full px-4 py-2 font-mono text-[11px] text-[#E1F2DF]/70 whitespace-nowrap" data-i18n={agent}>
                        {t(agent)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Stratube */}
            <AnimatedSection>
              <div className="bg-f-black/60 backdrop-blur-md border border-f-neon/15 rounded-2xl p-8 hover:border-f-neon/50 hover:-translate-y-1 hover:glow-neon transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-f-neon/10 flex items-center justify-center">
                    <span className="font-display font-bold text-xl text-f-neon">S</span>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-f-neon mb-1">● Ativo</div>
                    <div className="inline-block bg-f-dark/50 border border-f-neon/20 rounded-full px-2 py-0.5 font-mono text-[10px] text-f-mint/70">
                      YouTube · Analytics
                    </div>
                  </div>
                </div>
                
                <h3 className="font-display font-bold text-2xl text-f-mint mb-3">Stratube</h3>
                <p className="text-f-mint/60 text-[15px] leading-[1.55] mb-6 flex-grow">
                  [Descrição da plataforma — adicionar copy aqui]
                </p>

                <div className="flex flex-col gap-2 mb-8">
                  {["[Feature 1]", "[Feature 2]", "[Feature 3]"].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-[13px] text-f-mint/80">
                      <span className="text-f-neon">▸</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a href="[URL]" target="_blank" rel="noopener noreferrer" className="font-display font-medium text-[14px] text-f-neon hover:underline underline-offset-4 mt-auto">
                  Conhecer o Stratube →
                </a>
              </div>
            </AnimatedSection>

            {/* Nomes e Marcas */}
            <AnimatedSection delay={100}>
              <div className="bg-f-black/60 backdrop-blur-md border border-f-neon/15 rounded-2xl p-8 hover:border-f-neon/50 hover:-translate-y-1 hover:glow-neon transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-f-neon/10 flex items-center justify-center">
                    <span className="font-display font-bold text-xl text-f-neon">N</span>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-f-neon mb-1">● Ativo</div>
                    <div className="inline-block bg-f-dark/50 border border-f-neon/20 rounded-full px-2 py-0.5 font-mono text-[10px] text-f-mint/70">
                      Branding · Naming
                    </div>
                  </div>
                </div>
                
                <h3 className="font-display font-bold text-2xl text-f-mint mb-3">Nomes e Marcas</h3>
                <p className="text-f-mint/60 text-[15px] leading-[1.55] mb-6 flex-grow">
                  [Descrição da plataforma — adicionar copy aqui]
                </p>

                <div className="flex flex-col gap-2 mb-8">
                  {["[Feature 1]", "[Feature 2]", "[Feature 3]"].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-[13px] text-f-mint/80">
                      <span className="text-f-neon">▸</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a href="[URL]" target="_blank" rel="noopener noreferrer" className="font-display font-medium text-[14px] text-f-neon hover:underline underline-offset-4 mt-auto">
                  Conhecer Nomes e Marcas →
                </a>
              </div>
            </AnimatedSection>

            {/* Echowise */}
            <AnimatedSection delay={200}>
              <div className="bg-f-black/60 backdrop-blur-md border border-f-neon/15 rounded-2xl p-8 hover:border-f-neon/50 hover:-translate-y-1 hover:glow-neon transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-f-neon/10 flex items-center justify-center">
                    <span className="font-display font-bold text-xl text-f-neon">E</span>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-f-neon mb-1">● Ativo</div>
                    <div className="inline-block bg-f-dark/50 border border-f-neon/20 rounded-full px-2 py-0.5 font-mono text-[10px] text-f-mint/70">
                      [categoria a definir]
                    </div>
                  </div>
                </div>
                
                <h3 className="font-display font-bold text-2xl text-f-mint mb-3">Echowise</h3>
                <p className="text-f-mint/60 text-[15px] leading-[1.55] mb-6 flex-grow">
                  [Descrição da plataforma — adicionar copy aqui]
                </p>

                <div className="flex flex-col gap-2 mb-8">
                  {["[Feature 1]", "[Feature 2]", "[Feature 3]"].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-[13px] text-f-mint/80">
                      <span className="text-f-neon">▸</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a href="[URL]" target="_blank" rel="noopener noreferrer" className="font-display font-medium text-[14px] text-f-neon hover:underline underline-offset-4 mt-auto">
                  Conhecer o Echowise →
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CASES / WORK */}
      <section id="work" className="py-28 bg-f-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="font-mono text-f-neon/70 mb-6" data-i18n="work_eyebrow">{t('work_eyebrow')}</div>
              <h2 className="font-display font-bold text-[clamp(32px,4vw,40px)] text-f-mint" data-i18n="work_title">{t('work_title')}</h2>
            </div>
            <a href="#work" className="text-f-neon font-display font-medium hover:underline underline-offset-4 whitespace-nowrap" data-i18n="work_cta">{t('work_cta')}</a>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Case 01 - Destaque */}
            <AnimatedSection className="md:col-span-2">
              <div className="bg-gradient-to-br from-f-black to-f-dark border border-f-neon/15 rounded-2xl overflow-hidden hover:border-f-neon/45 transition-colors duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="inline-flex bg-f-neon/10 border border-f-neon/20 rounded-full px-3 py-1 font-mono text-[11px] text-f-neon mb-6 w-fit">🏆 Case Nacional — Crescimento Orgânico</div>
                    <h3 className="font-display font-bold text-4xl text-f-mint mb-4">De 100k para 700k inscritos.</h3>
                    <p className="text-f-mint/65 mb-6">Viviane Martinello & Abba Pai Church — 2 anos. +600% de crescimento. Um dos maiores canais de igrejas do Brasil.</p>
                    <div className="font-mono text-xs text-f-mint/50 mb-8 leading-relaxed">
                      700k+ inscritos · +600% crescimento · 2 anos · Top Igrejas BR
                    </div>
                    <div className="font-mono text-[10px] text-f-neon/60 uppercase tracking-widest">Foster Grow · YouTube</div>
                  </div>
                  <div className="bg-f-black border-t lg:border-t-0 lg:border-l border-f-neon/10 p-8 flex items-center justify-center min-h-[300px]">
                    <div className="aspect-square w-full max-w-[300px] border border-f-neon/30 rounded-xl flex items-center justify-center relative overflow-hidden bg-f-dark/30">
                      <span className="font-mono text-xs text-f-mint/30">[ foto/imagem do case ]</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Case 02 */}
            <AnimatedSection delay={100}>
              <div className="bg-f-black border border-f-neon/15 rounded-2xl p-8 hover:border-f-neon/45 transition-colors duration-300 h-full flex flex-col">
                <div className="inline-flex bg-f-dark border border-f-neon/20 rounded-full px-3 py-1 font-mono text-[11px] text-f-mint/70 mb-6 w-fit">Avatar de IA</div>
                <h3 className="font-display font-bold text-2xl text-f-mint mb-3">Rony Meisler — Clone Digital</h3>
                <p className="text-f-mint/65 mb-8 flex-grow">Avatar ultra-realista para YouTube e Instagram. Presença digital sem depender da agenda.</p>
                <div className="aspect-video w-full border border-f-neon/30 rounded-xl flex items-center justify-center relative overflow-hidden bg-f-dark/30 mb-6 group cursor-pointer" onClick={() => !playFatos && setPlayFatos(true)}>
                  <div className="w-12 h-12 rounded-full bg-f-neon/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-f-neon border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                  <span className="absolute bottom-3 right-3 font-mono text-[10px] text-f-mint/30 z-10">[ vídeo do avatar ]</span>
                </div>
                <div className="font-mono text-[10px] text-f-neon/60 uppercase tracking-widest">Foster Create · iFoster Avatar</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CANAIS PRÓPRIOS */}
      <section id="canais-proprios" className="py-24 bg-f-black bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(80,242,167,0.15)_0%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <AnimatedSection className="mb-16">
            <div className="inline-flex items-center gap-2 bg-f-neon/5 border border-f-neon/25 rounded-full px-4 py-1.5 mb-8">
              <span className="font-mono text-[12px] text-f-neon">🎬 Portfólio de criação original · Foster Company</span>
            </div>
            <div className="font-mono text-f-neon/70 mb-6" data-i18n="channels_eyebrow">{t('channels_eyebrow')}</div>
            <h2 className="font-display font-bold text-[clamp(32px,4vw,44px)] text-f-mint mb-4" data-i18n="channels_title">{t('channels_title')}</h2>
            <p className="text-[17px] text-f-mint/55 max-w-2xl" data-i18n="channels_desc">{t('channels_desc')}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Canal Destaque - Fatos da Bíblia */}
            <AnimatedSection className="md:col-span-2 lg:col-span-2">
              <div className="bg-[#104037]/50 border border-[#50F2A7]/15 rounded-2xl p-5 hover:border-[#50F2A7]/45 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <div className="mb-4">
                  <span className="inline-block bg-[#50F2A7]/10 border border-[#50F2A7]/30 rounded-full px-3 py-1 font-mono text-[11px] text-[#50F2A7]">
                    🚀 Canal Próprio · 30 dias · Monetizado
                  </span>
                </div>

                <div 
                  className="w-full aspect-video bg-[#030D09] border border-[#50F2A7]/10 rounded-xl relative flex flex-col items-center justify-center overflow-hidden mb-5 group cursor-pointer"
                  onClick={() => !playFatos && setPlayFatos(true)}
                >
                  {playFatos ? (
                    <iframe
                      src="https://www.youtube.com/embed/9ABhVatBQz4?autoplay=1"
                      title="Fatos da Bíblia"
                      className="absolute inset-0 w-full h-full border-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <div className="w-12 h-12 rounded-full bg-[#50F2A7]/20 flex items-center justify-center group-hover:scale-110 transition-transform z-10">
                        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-[#50F2A7] border-b-[6px] border-b-transparent ml-1"></div>
                      </div>
                      <span className="absolute bottom-3 font-mono text-[10px] text-[#E1F2DF]/25 z-10">Clique para assistir direto aqui</span>
                      <img 
                        src="https://img.youtube.com/vi/9ABhVatBQz4/maxresdefault.jpg" 
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                        alt="Fatos da Bíblia" 
                      />
                    </>
                  )}
                </div>

                <h3 className="font-display font-bold text-[20px] text-[#E1F2DF] mb-2">
                  Fatos da Bíblia
                </h3>
                <p className="font-body font-normal text-[13px] text-[#E1F2DF]/60 leading-[1.5] line-clamp-2 mb-4">
                  Investigamos a Bíblia com profundidade histórica, arqueologia e fontes acadêmicas verificáveis. Sem pregação. Sem sensacionalismo. Investigação séria.
                </p>

                <div className="flex flex-wrap gap-2 mt-2 mb-5">
                  <span className="font-mono text-[10px] bg-[#50F2A7]/10 border border-[#50F2A7]/30 text-[#50F2A7] rounded-full px-2 py-1">
                    ⚡ ~5k inscritos
                  </span>
                  <span className="font-mono text-[10px] bg-[#50F2A7]/10 border border-[#50F2A7]/30 text-[#50F2A7] rounded-full px-2 py-1">
                    ● Monetizado em 1 semana
                  </span>
                  <span className="font-mono text-[10px] bg-[#50F2A7]/10 border border-[#50F2A7]/30 text-[#50F2A7] rounded-full px-2 py-1">
                    🤖 100% IA
                  </span>
                </div>

                <div className="mt-auto border-t border-[#50F2A7]/10 pt-3 flex items-center justify-between">
                  <a href="https://www.youtube.com/@fatos.dabiblia" target="_blank" rel="noopener noreferrer" className="font-display font-medium text-[13px] text-[#50F2A7] hover:underline underline-offset-4">
                    Ver canal no YouTube →
                  </a>
                  <span className="font-mono text-[10px] text-[#E1F2DF]/30">
                    Foster Grow · Foster Create
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* Canal 1 */}
            <AnimatedSection>
              <div className="group">
                <div className="w-full aspect-video bg-f-dark border border-f-neon/15 rounded-xl relative flex flex-col items-center justify-center overflow-hidden mb-4 group-hover:border-f-neon/50 transition-colors">
                  <div className="absolute top-3 left-3 bg-f-black/80 backdrop-blur text-f-mint font-mono text-[10px] px-2 py-1 rounded z-10 border border-f-neon/20">
                    Canal de Conteúdo
                  </div>
                  <div className="w-12 h-12 rounded-full bg-f-neon/20 flex items-center justify-center group-hover:scale-110 transition-transform z-10">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-f-neon border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                  <span className="absolute bottom-3 font-mono text-[10px] text-f-mint/30 z-10">[ thumbnail do canal ]</span>
                </div>
                <h3 className="font-display font-bold text-[18px] text-f-mint mb-2">
                  [ Nome do Canal 1 ]
                </h3>
                <p className="text-[13px] text-f-mint/55 line-clamp-2 mb-3 leading-[1.55]">
                  [ Descrição curta do canal, nicho e foco principal. ]
                </p>
                <div className="flex items-center justify-between">
                  <div className="inline-block bg-f-neon/10 border border-f-neon/20 rounded-full px-2 py-0.5 font-mono text-[10px] text-f-neon">
                    ▶ [X inscritos]
                  </div>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="font-display font-medium text-[13px] text-f-neon hover:underline underline-offset-4">
                    Ver canal →
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Canal 2 */}
            <AnimatedSection delay={100}>
              <div className="group">
                <div className="w-full aspect-video bg-f-dark border border-f-neon/15 rounded-xl relative flex flex-col items-center justify-center overflow-hidden mb-4 group-hover:border-f-neon/50 transition-colors">
                  <div className="absolute top-3 left-3 bg-f-black/80 backdrop-blur text-f-mint font-mono text-[10px] px-2 py-1 rounded z-10 border border-f-neon/20">
                    Personagem
                  </div>
                  <div className="w-12 h-12 rounded-full bg-f-neon/20 flex items-center justify-center group-hover:scale-110 transition-transform z-10">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-f-neon border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                  <span className="absolute bottom-3 font-mono text-[10px] text-f-mint/30 z-10">[ thumbnail do canal ]</span>
                </div>
                <h3 className="font-display font-bold text-[18px] text-f-mint mb-2">
                  [ Nome do Canal 2 ]
                </h3>
                <p className="text-[13px] text-f-mint/55 line-clamp-2 mb-3 leading-[1.55]">
                  [ Descrição curta do canal, nicho e foco principal. ]
                </p>
                <div className="flex items-center justify-between">
                  <div className="inline-block bg-f-neon/10 border border-f-neon/20 rounded-full px-2 py-0.5 font-mono text-[10px] text-f-neon">
                    ▶ [X inscritos]
                  </div>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="font-display font-medium text-[13px] text-f-neon hover:underline underline-offset-4">
                    Ver canal →
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="py-24 bg-f-black border-t border-f-neon/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0 md:divide-x divide-f-neon/15 items-start">
            <AnimatedSection className="text-center px-4">
              <div className="font-display font-bold text-[clamp(48px,6vw,64px)] leading-tight text-f-neon mb-2">15+</div>
              <div className="font-body text-[13px] text-f-mint/50 uppercase tracking-[0.15em] max-w-[160px] mx-auto">anos de produção</div>
            </AnimatedSection>
            
            <AnimatedSection delay={100} className="text-center px-4">
              <div className="font-display font-bold text-[clamp(48px,6vw,64px)] leading-tight text-f-neon mb-2">+500</div>
              <div className="font-body text-[13px] text-f-mint/50 uppercase tracking-[0.15em] max-w-[200px] mx-auto">projetos de comunicação</div>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="text-center px-4">
              <div className="font-display font-bold text-[clamp(48px,6vw,64px)] leading-tight text-f-neon text-glow-sm mb-2">+1 Bi</div>
              <div className="font-body text-[13px] text-f-mint/50 uppercase tracking-[0.15em] max-w-[220px] mx-auto">visualizações geradas</div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CARLOS BORGES */}
      <section id="carlos-borges" className="py-28 bg-f-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            <div className="lg:col-span-5">
              <AnimatedSection>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-f-neon/5 rounded-3xl blur-2xl group-hover:bg-f-neon/10 transition-all duration-500"></div>
                  <div className="relative aspect-[4/5] bg-f-black border border-f-neon/20 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(80,242,167,0.05)] transition-all duration-500 hover:border-f-neon/40 hover:shadow-[0_0_60px_rgba(80,242,167,0.12)]">
                    <img 
                      src="/carlos-borges.png" 
                      alt="Carlos Borges - Fundador Foster Company" 
                      className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-f-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
                      <div className="bg-f-black/80 backdrop-blur-md border border-f-neon/30 px-4 py-2 rounded-full">
                        <span className="font-mono text-[11px] text-f-neon uppercase tracking-widest">Criados para Criar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-7">
              <AnimatedSection delay={200}>
                <div className="font-mono text-f-neon/70 mb-6" data-i18n="founder_eyebrow">{t('founder_eyebrow')}</div>
                <div className="mb-8">
                  <h2 className="font-display font-bold text-[clamp(32px,5vw,52px)] text-f-mint leading-[1.1] mb-2" data-i18n="founder_title">
                    {t('founder_title')}
                  </h2>
                  <div className="font-display font-medium text-xl text-f-neon/80 italic">Carlos Borges — CEO & Founder</div>
                </div>
                <div className="space-y-6 text-[17px] text-f-mint/65 font-light leading-[1.6] max-w-2xl mb-12">
                  <p data-i18n="founder_p1">{t('founder_p1')}</p>
                  <p data-i18n="founder_p2">{t('founder_p2')}</p>
                  <p data-i18n="founder_p3">{t('founder_p3')}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  {[
                    "founder_li1",
                    "founder_li2",
                    "founder_li3",
                    "founder_li4"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-f-black/30 border border-f-neon/10 rounded-xl hover:border-f-neon/30 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-f-neon shrink-0"></div>
                      <span className="text-[14px] text-f-mint/80 font-medium" data-i18n={item}>{t(item)}</span>
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-f-neon/10 border border-f-neon/30 text-f-neon font-display font-semibold rounded-full px-8 py-4 hover:bg-f-neon hover:text-f-black transition-all duration-300 group" data-i18n="founder_cta">
                  {t('founder_cta')}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* SELO MUSICAL */}
      <section id="selo-musical" className="py-24 bg-[#104037] relative overflow-hidden">
        <div className="absolute inset-0 flex items-end justify-center opacity-10 gap-2 pb-10 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div 
              key={i}
              className="w-3 bg-f-neon rounded-t-full origin-bottom animate-waveform"
              style={{
                height: `${Math.random() * 50 + 10}%`,
                animationDelay: `${Math.random() * 1.5}s`,
                animationDuration: `${Math.random() * 1 + 0.8}s`
              }}
            ></div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <AnimatedSection className="mb-16 text-center">
            <div className="font-mono text-[12px] text-f-neon/70 mb-6">{t('music_eyebrow')}</div>
            <h2 className="font-display font-bold text-[clamp(32px,4vw,44px)] text-f-mint mb-4">{t('music_title')}</h2>
            <p className="text-[17px] text-f-mint/55 max-w-2xl mx-auto">
              {t('music_desc')}
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AnimatedSection>
              <div className="bg-f-black/40 backdrop-blur-sm border border-f-neon/15 rounded-2xl p-8 lg:p-10 h-full flex flex-col hover:border-f-neon/40 transition-colors group">
                <div className="inline-flex bg-f-neon/10 border border-f-neon/20 rounded-full px-3 py-1 font-mono text-[11px] text-f-neon mb-6 w-fit">
                  {t('music_card1_badge')}
                </div>
                <h3 className="font-display font-bold text-3xl text-f-mint mb-4">{t('music_card1_title')}</h3>
                <p className="text-[16px] text-f-mint/65 mb-8 flex-grow leading-[1.6]">
                  {t('music_card1_desc')}
                </p>
                
                <div className="flex items-center gap-4 mb-8">
                  {musicArtists.map((artist, i) => (
                    <a 
                      key={i} 
                      href={artist.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full border-2 border-f-neon/30 overflow-hidden shadow-lg hover:scale-110 hover:border-f-neon transition-all duration-300"
                      title={artist.name}
                    >
                      <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
                    </a>
                  ))}
                </div>

                <div className="inline-block bg-f-dark border border-f-neon/10 rounded-full px-4 py-2 font-mono text-[11px] text-f-mint/50 mb-8 w-fit">
                  Spotify · Apple Music · Deezer · YouTube Music
                </div>
                <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="font-display font-bold text-[16px] text-f-neon hover:underline underline-offset-8 mt-auto w-fit">
                  {t('music_card1_cta')}
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="bg-f-black/40 backdrop-blur-sm border border-f-neon/15 rounded-2xl p-8 lg:p-10 h-full flex flex-col hover:border-f-neon/40 transition-colors group">
                <div className="inline-flex bg-f-neon/10 border border-f-neon/20 rounded-full px-3 py-1 font-mono text-[11px] text-f-neon mb-6 w-fit">
                  {t('music_card2_badge')}
                </div>
                <h3 className="font-display font-bold text-3xl text-f-mint mb-4">{t('music_card2_title')}</h3>
                <p className="text-[16px] text-f-mint/65 mb-8 flex-grow leading-[1.6]">
                  {t('music_card2_desc')}
                </p>
                <div className="flex items-center gap-[-10px] mb-8">
                  <div className="w-14 h-14 rounded-full bg-f-dark border-2 border-f-neon/30 flex items-center justify-center overflow-hidden z-30 relative shadow-lg">
                    <span className="font-display font-bold text-f-neon/50 text-sm">A1</span>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-f-dark border-2 border-f-neon/30 flex items-center justify-center overflow-hidden z-20 relative -ml-4 shadow-lg">
                    <span className="font-display font-bold text-f-neon/50 text-sm">A2</span>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-f-dark border-2 border-f-neon/30 flex items-center justify-center overflow-hidden z-10 relative -ml-4 shadow-lg">
                    <span className="font-display font-bold text-f-neon/50 text-sm">A3</span>
                  </div>
                </div>
                <a href="#musica" className="font-display font-medium text-[15px] text-f-neon hover:underline underline-offset-4 mt-auto w-fit">
                  {t('music_card2_cta')}
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

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
            <p className="font-body font-light text-[20px] text-f-mint/50 mb-12">
              {t('cta_desc')}
            </p>
            <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="inline-block bg-f-neon text-f-black font-display font-bold rounded-full px-12 py-5 text-lg hover:glow-neon hover:scale-[1.03] transition-all duration-300 mb-6">
              {t('cta_btn')}
            </a>
            <p className="font-mono text-[11px] text-f-mint/25">
              {t('cta_footer')}
            </p>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}