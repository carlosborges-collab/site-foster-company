import { useEffect, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { ChevronDown, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { openContactModal } from '../utils/contactEvents';

export default function Home() {
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [playRony, setPlayRony] = useState(false);
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

  const channels = [
    {
      id: "mirabolante",
      title: "Seu Mirabolante",
      desc: "Ciência, natureza e mistérios do universo explicados de um jeito que prende qualquer criança — e qualquer adulto curioso.",
      tags: ["Ciência", "Curiosidades"],
      channelUrl: "https://www.youtube.com/@SeuMirabolante",
      videoEmbed: "https://www.youtube.com/embed/AN0OnaRaNmA",
      thumbnail: "https://img.youtube.com/vi/AN0OnaRaNmA/maxresdefault.jpg"
    },
    {
      id: "dabiblia",
      title: "Da Bíblia",
      desc: "Fatos históricos, arqueológicos e curiosidades da Bíblia que a maioria nunca ouviu contar. Mais de 5 mil inscritos e produção 100% com IA.",
      tags: ["Bíblia", "História"],
      channelUrl: "https://www.youtube.com/@fatos.dabiblia",
      videoEmbed: "https://www.youtube.com/embed/-aBvvjH4-RE",
      thumbnail: "https://img.youtube.com/vi/-aBvvjH4-RE/maxresdefault.jpg"
    },
    {
      id: "verboeterno",
      title: "Grupo Verbo Eterno",
      desc: "Salmos, orações e hinos da Harpa Cristã narrados com trilha instrumental envolvente. Devoção diária com qualidade cinematográfica.",
      tags: ["Louvor", "Oração"],
      channelUrl: "https://www.youtube.com/@GrupoVerboEterno",
      videoEmbed: "https://www.youtube.com/embed/Mk_-F9owpqg",
      thumbnail: "https://img.youtube.com/vi/Mk_-F9owpqg/maxresdefault.jpg"
    }
  ];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-[100px] md:pt-[140px] pb-20 bg-grid-pattern bg-noise overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(80,242,167,0.15)_0%,transparent_100%)]"></div>
        
        <div className="max-w-7xl mx-auto px-5 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-f-neon/5 border border-f-neon/25 rounded-full px-4 py-1.5 mb-8 shadow-[0_0_15px_rgba(80,242,167,0.2)]">
                <div className="w-1.5 h-1.5 rounded-full bg-f-neon animate-pulse-dot"></div>
                <span className="font-mono text-[10px] md:text-[12px] text-f-neon uppercase tracking-wider">✦ {t('hero_badge')}</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h1 className="font-display font-bold text-[clamp(42px,10vw,88px)] leading-[0.95] tracking-tight mb-8">
                <span className="block text-f-mint">{t('hero_headline_1')}</span>
                <span className="block text-f-mint/75 font-normal">{t('hero_headline_2')}</span>
                <span className="block text-f-neon italic">{t('hero_headline_3')}</span>
                <span className="block text-f-neon text-glow">{t('hero_headline_4')}</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-f-mint/60 text-[16px] md:text-[18px] font-light max-w-[480px] mb-10 leading-[1.55]">
                {t('hero_subtitle')}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button onClick={openContactModal} className="bg-f-neon text-f-black font-display font-bold rounded-full px-8 py-4 text-center hover:glow-neon active:scale-95 transition-all duration-300 cursor-pointer">
                  {t('hero_cta_1')}
                </button>
                <a href="#work" className="border border-f-neon/35 text-f-neon font-display font-medium rounded-full px-8 py-4 text-center hover:bg-f-neon/10 active:scale-95 transition-all duration-300">
                  {t('hero_cta_2')}
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Agora visível em Mobile também com ajustes */}
          <div className="lg:col-span-5 relative h-[300px] sm:h-[400px] lg:h-[500px] w-full mt-8 lg:mt-0">
            <AnimatedSection delay={400} className="h-full w-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Main Floating Card */}
                <div className="w-full max-w-[340px] md:max-w-[420px] bg-f-dark/60 backdrop-blur-xl border border-f-neon/20 rounded-2xl p-5 md:p-7 animate-float relative z-20 shadow-2xl mx-auto">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                    </div>
                    <div className="ml-auto font-mono text-[9px] md:text-[11px] text-f-neon/60">iFoster — Engine v2.5</div>
                  </div>
                  <div className="h-px w-full bg-f-neon/10 mb-5"></div>
                  <div className="font-mono text-[11px] md:text-[13px] space-y-2 min-h-[120px] md:min-h-[160px]">
                    {lines.slice(0, typewriterIndex).map((line, i) => (
                      <div key={i} className={`${line.color} animate-in fade-in duration-300`}>{line.text}</div>
                    ))}
                    <div className="inline-block w-2 h-4 bg-f-neon animate-blink ml-1 align-middle"></div>
                  </div>
                </div>

                {/* Floating elements scaled for mobile */}
                <div className="absolute -top-4 -right-2 md:top-10 md:-right-4 bg-f-dark border border-f-neon/20 rounded-xl p-3 md:p-4 shadow-xl z-30 animate-float scale-90 md:scale-100" style={{ animationDelay: '1s' }}>
                  <div className="font-display font-bold text-2xl md:text-3xl text-f-neon">{t('hero_metric_3_val')}</div>
                  <div className="font-mono text-[8px] md:text-[10px] text-f-mint/50 uppercase">{t('hero_metric_3_lbl')}</div>
                </div>
                
                <div className="absolute -bottom-6 -left-2 md:bottom-20 md:-left-8 bg-f-dark border border-f-neon/20 rounded-xl p-3 md:p-4 shadow-xl z-30 animate-float scale-90 md:scale-100" style={{ animationDelay: '2s' }}>
                  <div className="font-display font-bold text-xl md:text-2xl text-f-mint">700k</div>
                  <div className="font-mono text-[8px] md:text-[10px] text-f-mint/50 uppercase">inscritos case real</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <ChevronDown size={18} className="text-f-neon animate-bounce" />
        </div>
      </section>

      {/* TICKER SECTION */}
      <section className="bg-f-dark/50 backdrop-blur-md py-4 border-y border-f-neon/15 overflow-hidden flex items-center">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="font-display font-medium text-[14px] md:text-[15px] text-f-mint/60 tracking-wide mx-6">Viviane Martinello</span>
              <span className="text-f-neon">·</span>
              <span className="font-display font-medium text-[14px] md:text-[15px] text-f-mint/60 tracking-wide mx-6">Abba Pai Church</span>
              <span className="text-f-neon">·</span>
              <span className="font-display font-medium text-[14px] md:text-[15px] text-f-mint/60 tracking-wide mx-6">Rony Meisler</span>
              <span className="text-f-neon">·</span>
              <span className="font-display font-medium text-[14px] md:text-[15px] text-f-mint/60 tracking-wide mx-6">Unesc TV</span>
              <span className="text-f-neon">·</span>
              <span className="font-display font-medium text-[14px] md:text-[15px] text-f-mint/60 tracking-wide mx-6">Murilo Rosa</span>
              <span className="text-f-neon">·</span>
              <span className="font-display font-medium text-[14px] md:text-[15px] text-f-mint/60 tracking-wide mx-6">Igor Drudi</span>
              <span className="text-f-neon">·</span>
            </div>
          ))}
        </div>
      </section>

      {/* O QUE É A FOSTER */}
      <section className="py-20 md:py-28 bg-f-black">
        <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
          <AnimatedSection>
            <div className="font-mono text-[10px] text-f-neon/70 mb-6 uppercase tracking-widest">{t('about_eyebrow')}</div>
            <h2 className="font-display font-bold text-[clamp(28px,6vw,52px)] text-f-mint mb-8">
              <span className="block" dangerouslySetInnerHTML={{ __html: t('about_title') }}></span>
            </h2>
            <p className="font-body font-light text-[18px] md:text-[20px] text-f-mint/55 max-w-2xl mx-auto mb-16 md:mb-20">
              {t('about_desc_1')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-left">
            <AnimatedSection delay={100}>
              <div className="text-f-neon text-2xl mb-4">◈</div>
              <h3 className="font-display font-bold text-xl text-f-mint mb-3">{t('about_pillar_1_title')}</h3>
              <p className="text-f-mint/60 text-[15px]">{t('about_pillar_1_desc')}</p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="text-f-neon text-2xl mb-4">⬡</div>
              <h3 className="font-display font-bold text-xl text-f-mint mb-3">{t('about_pillar_2_title')}</h3>
              <p className="text-f-mint/60 text-[15px]">{t('about_pillar_2_desc')}</p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="text-f-neon text-2xl mb-4">▲</div>
              <h3 className="font-display font-bold text-xl text-f-mint mb-3">{t('about_pillar_3_title')}</h3>
              <p className="text-f-mint/60 text-[15px]">{t('about_pillar_3_desc')}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* iFOSTER SECTION */}
      <section id="ifoster" className="py-20 md:py-28 bg-gradient-to-br from-f-black via-[#0a1a14] to-f-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1">
              <AnimatedSection>
                <div className="font-mono text-[10px] text-f-neon/70 mb-6 uppercase tracking-widest">{t('ifoster_eyebrow')}</div>
                <h2 className="font-display font-bold text-[clamp(32px,6vw,56px)] text-f-mint mb-8">
                  <span className="block">{t('ifoster_hero_title_1')}</span>
                  <span className="block">{t('ifoster_hero_title_2')}</span>
                  <span className="block text-f-neon text-glow-sm">{t('ifoster_hero_title_3')}</span>
                </h2>
                <p className="text-[17px] text-f-mint/65 mb-8 max-w-lg">
                  {t('ifoster_desc')}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {[
                    "ifoster_feature_1",
                    "ifoster_feature_2",
                    "ifoster_feature_3",
                    "ifoster_feature_4"
                  ].map((key, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-f-mint/80">
                      <div className="w-5 h-5 rounded-full bg-f-neon/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-f-neon"></div>
                      </div>
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#ifoster" className="bg-f-neon text-f-black font-display font-bold rounded-full px-8 py-4 text-center hover:glow-neon active:scale-95 transition-all duration-300">
                    {t('ifoster_cta')}
                  </a>
                </div>
              </AnimatedSection>
            </div>

            <div className="order-1 lg:order-2 perspective-[1000px]">
              <AnimatedSection delay={200}>
                <div className="w-full bg-f-black/80 backdrop-blur-xl border border-f-neon/20 rounded-3xl p-6 md:p-8 shadow-2xl transition-transform duration-700 hover:rotate-x-2">
                  <div className="flex items-center gap-2 mb-6 border-b border-f-neon/10 pb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                    </div>
                    <div className="ml-auto font-mono text-[10px] text-f-mint/40 uppercase tracking-widest">iFoster Chat Interface</div>
                  </div>
                  
                  <div className="space-y-4 mb-6 font-body text-[13px]">
                    <div className="flex justify-end">
                      <div className="bg-f-neon/10 text-f-mint rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] border border-f-neon/10">
                        Preciso de um roteiro estratégico para meu YouTube.
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="flex gap-3 max-w-[90%]">
                        <div className="w-7 h-7 rounded-full bg-f-neon/20 flex items-center justify-center shrink-0 mt-1">
                          <span className="text-f-neon text-[10px]">✦</span>
                        </div>
                        <div className="bg-[#104037]/40 text-f-mint rounded-2xl rounded-tl-sm px-4 py-3 border border-f-neon/10">
                          <p className="mb-2">Analisando nicho... Roteiro gerado:</p>
                          <div className="font-mono text-[11px] text-f-neon/80 bg-f-black/60 p-2 rounded border border-f-neon/20">
                            HOOK: "O segredo que ninguém conta..."
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center font-mono text-[9px] text-f-mint/20 pt-4 border-t border-f-neon/10 uppercase tracking-widest">
                    Super Agentes de IA · Foster Company
                  </div>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* VERTICAIS (SOLUÇÕES) */}
      <section id="solucoes" className="py-20 md:py-28 bg-f-black bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-16 md:mb-20 text-center lg:text-left">
            <div className="font-mono text-[10px] text-f-neon/70 mb-6 uppercase tracking-widest">{t('verticals_eyebrow')}</div>
            <h2 className="font-display font-bold text-[clamp(30px,5vw,48px)] text-f-mint mb-4">{t('verticals_title')}</h2>
            <p className="text-[16px] md:text-[18px] text-f-mint/55 max-w-2xl mx-auto lg:mx-0">{t('verticals_subtitle')}</p>
          </AnimatedSection>

          <div className="space-y-8 md:space-y-12">
            {/* Create */}
            <AnimatedSection>
              <div className="bg-f-dark/40 border border-f-neon/15 rounded-3xl overflow-hidden hover:border-f-neon/40 transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-f-neon/10">
                    <div className="w-full h-full min-h-[200px] md:min-h-[240px] bg-f-black/50 rounded-2xl border border-f-neon/10 p-6 flex flex-col items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,242,167,0.1)_0%,transparent_70%)]"></div>
                      <div className="w-20 md:w-24 h-20 md:h-24 rounded-full border-2 border-dashed border-f-neon/40 animate-[spin_10s_linear_infinite] mb-6 flex items-center justify-center">
                        <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-f-neon/10 blur-md"></div>
                      </div>
                      <div className="font-mono text-[10px] text-f-neon tracking-[0.2em] uppercase">Avatar Ativo ●</div>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 lg:p-16 order-1 lg:order-2">
                    <div className="inline-block bg-f-neon/5 border border-f-neon/20 rounded-full px-4 py-1 font-mono text-[10px] text-f-neon mb-6 uppercase">01 / Foster Create</div>
                    <h3 className="font-display font-bold text-3xl md:text-4xl text-f-mint mb-4">{t('create_title')}</h3>
                    <p className="text-f-mint/65 mb-8 leading-relaxed">{t('create_desc')}</p>
                    <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2 font-mono text-[11px] md:text-sm text-f-neon/80 uppercase">
                      <span>Vídeos</span>
                      <span className="text-f-mint/20">|</span>
                      <span>Avatar IA</span>
                      <span className="text-f-mint/20">|</span>
                      <span>Conteúdo</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Build */}
            <AnimatedSection>
              <div className="bg-f-dark/40 border border-f-neon/15 rounded-3xl overflow-hidden hover:border-f-neon/40 transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-12 lg:p-16 order-1 lg:order-2">
                    <div className="inline-block bg-f-neon/5 border border-f-neon/20 rounded-full px-4 py-1 font-mono text-[10px] text-f-neon mb-6 uppercase">02 / Foster Build</div>
                    <h3 className="font-display font-bold text-3xl md:text-4xl text-f-mint mb-4">{t('build_title')}</h3>
                    <p className="text-f-mint/65 mb-8 leading-relaxed">{t('build_desc')}</p>
                    <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2 font-mono text-[11px] md:text-sm text-f-neon/80 uppercase">
                      <span>Sites com IA</span>
                      <span className="text-f-mint/20">|</span>
                      <span>Sistemas</span>
                      <span className="text-f-mint/20">|</span>
                      <span>Plataformas</span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-f-neon/10">
                    <div className="w-full h-full min-h-[200px] md:min-h-[240px] bg-f-black/50 rounded-2xl border border-f-neon/10 p-6 font-mono text-[10px] md:text-xs text-f-neon/70 overflow-hidden">
                      <div className="mb-2 text-f-mint/30">// Deploying tech stack</div>
                      <div className="mb-1 text-f-neon">{'>'} build successful</div>
                      <div className="mb-1">{'>'} optimization complete</div>
                      <div className="mb-1 text-f-neon">{'>'} IA integrated</div>
                      <div className="mt-4 animate-pulse">_</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Grow */}
            <AnimatedSection>
              <div className="bg-f-dark/40 border border-f-neon/15 rounded-3xl overflow-hidden hover:border-f-neon/40 transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-f-neon/10">
                    <div className="w-full h-full min-h-[200px] md:min-h-[240px] bg-f-black/50 rounded-2xl border border-f-neon/10 p-6 flex items-end relative overflow-hidden">
                      <svg viewBox="0 0 100 60" className="w-full h-full" preserveAspectRatio="none">
                        <path d="M0 60 Q 25 50 40 35 T 70 15 T 100 5" fill="none" className="stroke-f-neon stroke-2" strokeDasharray="200" strokeDashoffset="0" />
                        <path d="M0 60 Q 25 50 40 35 T 70 15 T 100 5 L 100 60 L 0 60 Z" className="fill-f-neon/5" />
                      </svg>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[10px] text-f-neon uppercase tracking-widest">Growth Engine Active</div>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 lg:p-16 order-1 lg:order-2">
                    <div className="inline-block bg-f-neon/5 border border-f-neon/20 rounded-full px-4 py-1 font-mono text-[10px] text-f-neon mb-6 uppercase">03 / Foster Grow</div>
                    <h3 className="font-display font-bold text-3xl md:text-4xl text-f-mint mb-4">{t('grow_title')}</h3>
                    <p className="text-f-mint/65 mb-8 leading-relaxed">{t('grow_desc')}</p>
                    <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2 font-mono text-[11px] md:text-sm text-f-neon/80 uppercase">
                      <span>YouTube</span>
                      <span className="text-f-mint/20">|</span>
                      <span>Posicionamento</span>
                      <span className="text-f-mint/20">|</span>
                      <span>3Ps</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CASES / WORK */}
      <section id="work" className="py-20 md:py-28 bg-f-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-16 text-center lg:text-left">
            <div className="font-mono text-[10px] text-f-neon/70 mb-6 uppercase tracking-widest">{t('work_eyebrow')}</div>
            <h2 className="font-display font-bold text-[clamp(28px,5vw,40px)] text-f-mint">{t('work_title')}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Case 01 */}
            <AnimatedSection className="md:col-span-2">
              <div className="bg-f-black/40 border border-f-neon/15 rounded-3xl overflow-hidden hover:border-f-neon/40 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <div className="inline-flex bg-f-neon/5 border border-f-neon/20 rounded-full px-4 py-1.5 font-mono text-[10px] text-f-neon mb-6 w-fit uppercase tracking-wider">🏆 Case YouTube Growth</div>
                    <h3 className="font-display font-bold text-3xl md:text-4xl text-f-mint mb-6 leading-tight">De 100k para 700k inscritos orgânicos.</h3>
                    <p className="text-f-mint/60 mb-8 leading-relaxed">Viviane Martinello & Abba Pai Church — Estratégia completa de crescimento e posicionamento que transformou um canal em um ativo de mídia nacional.</p>
                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-f-neon/10">
                      <div>
                        <div className="font-display font-bold text-2xl text-f-neon">+600%</div>
                        <div className="font-mono text-[9px] text-f-mint/30 uppercase tracking-widest mt-1">Crescimento</div>
                      </div>
                      <div>
                        <div className="font-display font-bold text-2xl text-f-neon">1 Bi</div>
                        <div className="font-mono text-[9px] text-f-mint/30 uppercase tracking-widest mt-1">Views Geradas</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-f-black/80 p-6 md:p-8 flex flex-col gap-6 justify-center">
                    <div className="relative rounded-2xl overflow-hidden border border-f-neon/20 shadow-2xl">
                      <img src="/cases/viviane-analytics.png" alt="Analytics Viviane" className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Case 02 - Rony Meisler */}
            <AnimatedSection delay={100} className="md:col-span-2">
              <div className="bg-f-black/40 border border-f-neon/15 rounded-3xl p-8 md:p-12 lg:p-16 hover:border-f-neon/40 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7">
                    <div className="inline-flex bg-f-neon/5 border border-f-neon/20 rounded-full px-4 py-1.5 font-mono text-[10px] text-f-neon mb-6 w-fit uppercase tracking-wider">🤖 Case Clone Digital IA</div>
                    <h3 className="font-display font-bold text-3xl md:text-4xl text-f-mint mb-6 leading-tight">Rony Meisler: O clone digital ultra-realista.</h3>
                    <p className="text-f-mint/60 mb-10 leading-relaxed max-w-xl">Desenvolvemos o avatar de IA para um dos maiores empresários do Brasil. Presença digital 24/7 sem depender de agenda, unindo essência com escala infinita.</p>
                    
                    <div className="aspect-video w-full border border-f-neon/20 rounded-2xl overflow-hidden bg-f-black relative group cursor-pointer" onClick={() => setPlayRony(true)}>
                      {!playRony ? (
                        <>
                          <img src="https://img.youtube.com/vi/n1nP4gf4DJc/maxresdefault.jpg" className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity" alt="Rony Case" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-f-neon flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-f-black border-b-[8px] border-b-transparent ml-1"></div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <iframe src="https://www.youtube.com/embed/n1nP4gf4DJc?autoplay=1" className="absolute inset-0 w-full h-full border-none" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                      )}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="aspect-[9/16] w-full max-w-[280px] border border-f-neon/20 rounded-2xl overflow-hidden shadow-2xl">
                      <iframe src="https://www.instagram.com/reel/DVLX0vpAASA/embed" className="w-full h-full border-none" scrolling="no"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* NUMBERS SECTION */}
      <section className="py-20 md:py-24 bg-f-black border-y border-f-neon/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-f-neon/10">
            {[
              { val: "15+", lbl: "Anos de Produção" },
              { val: "+500", lbl: "Projetos de Comunicação" },
              { val: "+1 Bi", lbl: "Views Geradas", highlight: true }
            ].map((n, i) => (
              <AnimatedSection key={i} delay={i * 100} className="text-center py-6 md:py-0 px-4">
                <div className={`font-display font-bold text-5xl md:text-6xl mb-3 ${n.highlight ? 'text-f-neon text-glow-sm' : 'text-f-mint'}`}>{n.val}</div>
                <div className="font-mono text-[10px] md:text-[11px] text-f-mint/40 uppercase tracking-[0.2em]">{n.lbl}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section id="carlos-borges" className="py-20 md:py-28 bg-f-dark/30">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-4 lg:col-start-2 order-2 lg:order-1">
              <AnimatedSection>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-f-neon/20 shadow-2xl group">
                  <img src="/carlos-borges.png" alt="Carlos Borges" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-f-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="font-display font-bold text-xl text-f-mint">Carlos Borges</div>
                    <div className="font-mono text-[10px] text-f-neon uppercase tracking-widest mt-1">Founder & Creative Director</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <AnimatedSection delay={200}>
                <div className="font-mono text-[10px] text-f-neon/70 mb-6 uppercase tracking-widest">{t('founder_eyebrow')}</div>
                <h2 className="font-display font-bold text-[clamp(28px,4vw,44px)] text-f-mint leading-tight mb-8" dangerouslySetInnerHTML={{ __html: t('founder_title') }}></h2>
                <div className="space-y-6 text-[16px] md:text-[17px] text-f-mint/60 font-light leading-relaxed">
                  <p>{t('founder_p1')}</p>
                  <p>{t('founder_p2')}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                  {[t('founder_li1'), t('founder_li2'), t('founder_li3'), t('founder_li4')].map((li, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-f-black/40 border border-f-neon/10 rounded-2xl hover:border-f-neon/30 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-f-neon"></div>
                      <span className="text-[13px] text-f-mint/80 font-medium">{li}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 md:py-36 bg-f-black relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,242,167,0.08)_0%,transparent_70%)]"></div>
        <div className="max-w-3xl mx-auto px-5 relative z-10">
          <AnimatedSection>
            <div className="font-mono text-[10px] text-f-neon/70 mb-8 uppercase tracking-widest">{t('cta_eyebrow')}</div>
            <h2 className="font-display font-bold text-[clamp(40px,8vw,72px)] text-f-mint mb-8 leading-tight">
              <span className="block">{t('cta_title_1')}</span>
              <span className="block">{t('cta_title_2')}</span>
            </h2>
            <p className="text-[18px] md:text-[20px] text-f-mint/40 mb-12">{t('cta_desc')}</p>
            <button onClick={openContactModal} className="bg-f-neon text-f-black font-display font-bold rounded-full px-12 py-5 text-lg hover:glow-neon active:scale-95 transition-all duration-300 shadow-xl mb-6 cursor-pointer">
              {t('cta_btn')}
            </button>
            <div className="font-mono text-[10px] text-f-mint/20 uppercase tracking-[0.3em] mt-8">Balneário Camboriú · SC · Brasil 🇧🇷</div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}