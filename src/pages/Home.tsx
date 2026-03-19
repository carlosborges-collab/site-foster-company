"use client";

import { useEffect, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { openContactModal } from '../utils/contactEvents';

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
                <button onClick={openContactModal} className="bg-f-neon text-f-black font-display font-semibold rounded-full px-7 py-3.5 text-center hover:glow-neon hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                  {t('hero_cta_1')} →
                </button>
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

      {/* iFOSTER EM DESTAQUE */}
      <section id="ifoster" className="py-28 bg-gradient-to-br from-f-black to-f-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1">
              <AnimatedSection>
                <div className="font-mono text-f-neon/70 mb-6">{t('ifoster_eyebrow')}</div>
                <h2 className="font-display font-bold text-[clamp(40px,6vw,56px)] text-f-mint mb-8">
                  <span className="block">{t('ifoster_hero_title_1')}</span>
                  <span className="block">{t('ifoster_hero_title_2')}</span>
                  <span className="block text-f-neon text-glow-sm">{t('ifoster_hero_title_3')}</span>
                </h2>
                <p className="text-[17px] text-f-mint/65 mb-8 max-w-lg">
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
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#ifoster" className="bg-f-neon text-f-black font-display font-semibold rounded-full px-7 py-3.5 text-center hover:glow-neon transition-all duration-300">
                    {t('ifoster_cta')}
                  </a>
                  <button onClick={openContactModal} className="border border-f-neon text-f-neon font-display font-medium rounded-full px-7 py-3.5 text-center hover:bg-f-neon/10 transition-all duration-300 cursor-pointer">
                    {t('nav_cta')} →
                  </button>
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
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* PLATAFORMAS (ECOSSISTEMA) */}
      <section id="plataformas" className="py-24 bg-f-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-16">
            <div className="font-mono text-f-neon/70 mb-6">{t('platforms_eyebrow')}</div>
            <h2 className="font-display font-bold text-[clamp(32px,4vw,44px)] text-f-mint mb-4">{t('platforms_title')}</h2>
            <p className="text-[17px] text-f-mint/55 max-w-2xl">{t('platforms_desc')}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Stratube 2.0 */}
            <AnimatedSection>
              <div className="bg-f-black/60 backdrop-blur-md border border-f-neon/15 rounded-2xl p-8 hover:border-f-neon/50 hover:-translate-y-1 hover:glow-neon transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-f-neon/10 flex items-center justify-center">
                    <span className="font-display font-bold text-xl text-f-neon">S</span>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-f-neon mb-1">● Em breve</div>
                    <div className="inline-block bg-f-dark/50 border border-f-neon/20 rounded-full px-2 py-0.5 font-mono text-[10px] text-f-mint/70">
                      Ferramentas de IA para Criadores / YouTube Analytics & SEO
                    </div>
                  </div>
                </div>
                
                <h3 className="font-display font-bold text-2xl text-f-mint mb-3">Stratube 2.0</h3>
                <p className="text-f-mint/60 text-[14px] leading-[1.55] mb-6 flex-grow">
                  Stratube 2.0 é uma plataforma de inteligência estratégica para YouTube que pesquisa dados reais do mercado em tempo real e transforma em decisões acionáveis para criadores e agências crescerem mais rápido.
                </p>

                <div className="flex flex-col gap-2 mb-8">
                  <div className="flex items-start gap-2 text-[12px] text-f-mint/80">
                    <span className="text-f-neon mt-1">▸</span>
                    <span>🔍 Inteligência de Nicho — Descobre vídeos em alta, keywords com volume real e lacunas de conteúdo inexploradas no seu nicho.</span>
                  </div>
                  <div className="flex items-start gap-2 text-[12px] text-f-mint/80">
                    <span className="text-f-neon mt-1">▸</span>
                    <span>⚡ Otimizador de Vídeo — Gera títulos de alto CTR, descrição com SEO e tags estratégicas a partir da URL de qualquer vídeo.</span>
                  </div>
                  <div className="flex items-start gap-2 text-[12px] text-f-mint/80">
                    <span className="text-f-neon mt-1">▸</span>
                    <span>📡 Mineração de Canais — Identifica canais em crescimento acelerado prontos para serem remodelados com vantagem competitiva.</span>
                  </div>
                </div>

                <span className="font-display font-medium text-[14px] text-f-neon/40 mt-auto">
                  Conhecer o Stratube 2.0 →
                </span>
              </div>
            </AnimatedSection>

            {/* Nomes & Marcas */}
            <AnimatedSection delay={100}>
              <div className="bg-f-black/60 backdrop-blur-md border border-f-neon/15 rounded-2xl p-8 hover:border-f-neon/50 hover:-translate-y-1 hover:glow-neon transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-f-neon/10 flex items-center justify-center">
                    <span className="font-display font-bold text-xl text-f-neon">N</span>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-f-neon mb-1">● Em breve</div>
                    <div className="inline-block bg-f-dark/50 border border-f-neon/20 rounded-full px-2 py-0.5 font-mono text-[10px] text-f-mint/70">
                      LegalTech · Propriedade Intelectual · SaaS B2B
                    </div>
                  </div>
                </div>
                
                <h3 className="font-display font-bold text-2xl text-f-mint mb-3">Nomes & Marcas</h3>
                <p className="text-f-mint/60 text-[14px] leading-[1.55] mb-6 flex-grow">
                  A plataforma inteligente de registro de marcas do Brasil. Pesquise o nome da sua marca, receba uma análise baseada em toda a base histórica do INPI e descubra suas chances reais de aprovação — em segundos.
                </p>

                <div className="flex flex-col gap-2 mb-8">
                  <div className="flex items-start gap-2 text-[12px] text-f-mint/80">
                    <span className="text-f-neon mt-1">▸</span>
                    <span>Score de Viabilidade 0–100 — Saiba suas chances reais de aprovação antes de investir no registro.</span>
                  </div>
                  <div className="flex items-start gap-2 text-[12px] text-f-mint/80">
                    <span className="text-f-neon mt-1">▸</span>
                    <span>Base INPI Atualizada Semanalmente — Pesquise contra dados reais, direto da Revista da Propriedade Industrial.</span>
                  </div>
                  <div className="flex items-start gap-2 text-[12px] text-f-mint/80">
                    <span className="text-f-neon mt-1">▸</span>
                    <span>Gestão Completa do Processo — Acompanhe seu registro do pedido à concessão em um dashboard próprio.</span>
                  </div>
                </div>

                <span className="font-display font-medium text-[14px] text-f-neon/40 mt-auto">
                  Conhecer Nomes & Marcas →
                </span>
              </div>
            </AnimatedSection>

            {/* Echowise AI */}
            <AnimatedSection delay={200}>
              <div className="bg-f-black/60 backdrop-blur-md border border-f-neon/15 rounded-2xl p-8 hover:border-f-neon/50 hover:-translate-y-1 hover:glow-neon transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-f-neon/10 flex items-center justify-center">
                    <span className="font-display font-bold text-xl text-f-neon">E</span>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-f-neon mb-1">● Em breve</div>
                    <div className="inline-block bg-f-dark/50 border border-f-neon/20 rounded-full px-2 py-0.5 font-mono text-[10px] text-f-mint/70">
                      SaaS · Inteligência Artificial · Marketplace de Experts Digitais
                    </div>
                  </div>
                </div>
                
                <h3 className="font-display font-bold text-2xl text-f-mint mb-3">Echowise AI</h3>
                <p className="text-f-mint/60 text-[14px] leading-[1.55] mb-6 flex-grow">
                  Echowise AI é a plataforma onde experts criam seu clone digital com IA e passam a atender, educar e engajar seu público 24 horas por dia — sem precisar estar disponível.
                </p>

                <div className="flex flex-col gap-2 mb-8">
                  <div className="flex items-start gap-2 text-[12px] text-f-mint/80">
                    <span className="text-f-neon mt-1">▸</span>
                    <span>🤖 Clone Digital com IA — Sua personalidade, tom de voz e conhecimento em um clone que conversa por você.</span>
                  </div>
                  <div className="flex items-start gap-2 text-[12px] text-f-mint/80">
                    <span className="text-f-neon mt-1">▸</span>
                    <span>🔗 Bio Link Inteligente — Seu perfil público com link único para compartilhar em qualquer rede social.</span>
                  </div>
                  <div className="flex items-start gap-2 text-[12px] text-f-mint/80">
                    <span className="text-f-neon mt-1">▸</span>
                    <span>📊 Painel de Gestão Completo — Acompanhe conversas, gerencie sua base de conhecimento e monitore seus resultados.</span>
                  </div>
                </div>

                <span className="font-display font-medium text-[14px] text-f-neon/40 mt-auto">
                  Conhecer o Echowise AI →
                </span>
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
              <div className="font-mono text-f-neon/70 mb-6">{t('work_eyebrow')}</div>
              <h2 className="font-display font-bold text-[clamp(32px,4vw,40px)] text-f-mint">{t('work_title')}</h2>
            </div>
            <a href="#work" className="text-f-neon font-display font-medium hover:underline underline-offset-4 whitespace-nowrap">{t('work_cta')}</a>
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
                  </div>
                </div>
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
            <button 
              onClick={openContactModal} 
              className="inline-block bg-f-neon text-f-black font-display font-bold rounded-full px-12 py-5 text-lg hover:glow-neon hover:scale-[1.03] transition-all duration-300 mb-6 cursor-pointer"
            >
              {t('cta_btn')}
            </button>
            <p className="font-mono text-[11px] text-f-mint/25">
              {t('cta_footer')}
            </p>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}