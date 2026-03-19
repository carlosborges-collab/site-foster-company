"use client";

import { useEffect, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { ChevronDown, CheckCircle2, Instagram, Youtube } from 'lucide-react';
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
      tags: ["Ciência", "Educação"],
      channelUrl: "https://www.youtube.com/@SeuMirabolante",
      videoEmbed: "https://www.youtube.com/embed/AN0OnaRaNmA",
      thumbnail: "https://img.youtube.com/vi/AN0OnaRaNmA/maxresdefault.jpg"
    },
    {
      id: "dabiblia",
      title: "Da Bíblia",
      desc: "Fatos históricos, arqueológicos e curiosidades da Bíblia que a maioria nunca ouviu contar. Produção 100% com IA.",
      tags: ["Bíblia", "História"],
      channelUrl: "https://www.youtube.com/@fatos.dabiblia",
      videoEmbed: "https://www.youtube.com/embed/-aBvvjH4-RE",
      thumbnail: "https://img.youtube.com/vi/-aBvvjH4-RE/maxresdefault.jpg"
    },
    {
      id: "verboeterno",
      title: "Grupo Verbo Eterno",
      desc: "Salmos, orações e hinos da Harpa Cristã narrados com trilha instrumental envolvente para devoção diária.",
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
          
          <div className="lg:col-span-7 flex flex-col items-start">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-f-neon/5 border border-f-neon/25 rounded-full px-4 py-1.5 mb-6 md:mb-8 shadow-[0_0_15px_rgba(80,242,167,0.2)]">
                <div className="w-1.5 h-1.5 rounded-full bg-f-neon animate-pulse-dot"></div>
                <span className="font-mono text-[11px] md:text-[12px] text-f-neon whitespace-nowrap overflow-hidden text-ellipsis">✦ {t('hero_badge')}</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h1 className="font-display font-bold text-[clamp(32px,10vw,88px)] leading-[0.95] tracking-tight mb-6 md:mb-8">
                <span className="block text-f-mint">{t('hero_headline_1')}</span>
                <span className="block text-f-mint/75 font-normal">{t('hero_headline_2')}</span>
                <span className="block text-f-neon italic">{t('hero_headline_3')}</span>
                <span className="block text-f-neon text-glow">{t('hero_headline_4')}</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-f-mint/60 text-[16px] md:text-[18px] font-light max-w-[480px] mb-8 md:mb-10 leading-[1.55]">
                {t('hero_subtitle')}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300} className="w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={openContactModal} className="w-full sm:w-auto bg-f-neon text-f-black font-display font-semibold rounded-full px-7 py-4 text-center hover:glow-neon hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                  {t('hero_cta_1')} →
                </button>
                <a href="#work" className="w-full sm:w-auto border border-f-neon/35 text-f-neon font-display font-medium rounded-full px-7 py-4 text-center hover:bg-f-neon/10 transition-all duration-300">
                  {t('hero_cta_2')}
                </a>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-5 relative h-[300px] md:h-[500px] hidden md:block">
            <AnimatedSection delay={400} className="h-full w-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-[420px] bg-f-dark/60 backdrop-blur-xl border border-f-neon/20 rounded-2xl p-7 animate-float relative z-20 shadow-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                    </div>
                    <div className="ml-auto font-mono text-[11px] text-f-neon/60">iFoster — AI Engine</div>
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
              <span className="font-display font-medium text-[14px] md:text-[15px] text-f-mint/60 tracking-wide mx-4 md:mx-6">Viviane Martinello</span>
              <span className="text-f-neon">·</span>
              <span className="font-display font-medium text-[14px] md:text-[15px] text-f-mint/60 tracking-wide mx-4 md:mx-6">Abba Pai Church</span>
              <span className="text-f-neon">·</span>
              <span className="font-display font-medium text-[14px] md:text-[15px] text-f-mint/60 tracking-wide mx-4 md:mx-6">Rony Meisler</span>
              <span className="text-f-neon">·</span>
              <span className="font-display font-medium text-[14px] md:text-[15px] text-f-mint/60 tracking-wide mx-4 md:mx-6">Murilo Rosa</span>
              <span className="text-f-neon">·</span>
            </div>
          ))}
        </div>
      </section>

      {/* O QUE É A FOSTER */}
      <section className="py-20 md:py-28 bg-f-black">
        <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
          <AnimatedSection>
            <div className="font-mono text-f-neon/70 mb-6" data-i18n="about_eyebrow">{t('about_eyebrow')}</div>
            <h2 className="font-display font-bold text-[clamp(28px,6vw,52px)] text-f-mint mb-8">
              <span className="block" data-i18n="about_title" dangerouslySetInnerHTML={{ __html: t('about_title') }}></span>
            </h2>
            <p className="font-body font-light text-[18px] md:text-[20px] text-f-mint/55 max-w-2xl mx-auto mb-16 md:mb-20" data-i18n="about_desc_1">
              {t('about_desc_1')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left">
            <AnimatedSection delay={100}>
              <div className="text-f-neon text-2xl mb-4">◈</div>
              <h3 className="font-display font-medium text-xl text-f-mint mb-3" data-i18n="about_pillar_1_title">Criar</h3>
              <p className="text-f-mint/60 text-[15px]" data-i18n="about_pillar_1_desc">Avatares, vídeos e conteúdo que param o scroll.</p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="text-f-neon text-2xl mb-4">⬡</div>
              <h3 className="font-display font-medium text-xl text-f-mint mb-3" data-i18n="about_pillar_2_title">Construir</h3>
              <p className="text-f-mint/60 text-[15px]" data-i18n="about_pillar_2_desc">Plataformas e tecnologia com IA integrada.</p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="text-f-neon text-2xl mb-4">▲</div>
              <h3 className="font-display font-medium text-xl text-f-mint mb-3" data-i18n="about_pillar_3_title">Crescer</h3>
              <p className="text-f-mint/60 text-[15px]" data-i18n="about_pillar_3_desc">Estratégia que transforma presença em dominância digital.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* VERTICAIS (SOLUÇÕES) */}
      <section id="solucoes" className="py-20 md:py-28 bg-f-black bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-12 md:mb-20">
            <div className="font-mono text-f-neon/70 mb-4 md:mb-6" data-i18n="verticals_eyebrow">{t('verticals_eyebrow')}</div>
            <h2 className="font-display font-bold text-[clamp(28px,5vw,48px)] text-f-mint mb-4" data-i18n="verticals_title">{t('verticals_title')}</h2>
            <p className="text-[16px] md:text-[18px] text-f-mint/55 max-w-2xl" data-i18n="verticals_subtitle">{t('verticals_subtitle')}</p>
          </AnimatedSection>

          <div className="space-y-6 md:space-y-8">
            {/* Create */}
            <AnimatedSection>
              <div className="bg-f-dark border border-f-neon/12 rounded-2xl overflow-hidden hover:border-f-neon/45 transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-f-neon/10">
                    <div className="w-full h-full min-h-[200px] md:min-h-[240px] bg-f-black rounded-xl border border-f-neon/20 p-6 flex flex-col items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,242,167,0.1)_0%,transparent_70%)]"></div>
                      <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-dashed border-f-neon/40 animate-[spin_10s_linear_infinite] mb-4 md:mb-6 flex items-center justify-center">
                        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-f-neon/20 blur-md"></div>
                      </div>
                      <div className="font-mono text-[10px] md:text-xs text-f-neon tracking-widest">AVATAR ATIVO ●</div>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 lg:p-16 order-1 lg:order-2">
                    <div className="inline-block bg-f-black border border-f-neon/20 rounded-full px-3 py-1 font-mono text-[10px] md:text-xs text-f-mint mb-6 md:mb-8">01 / Foster Create</div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-f-mint mb-4" data-i18n="create_title">{t('create_title')}</h3>
                    <p className="text-f-mint/65 text-sm md:text-base mb-6 md:mb-8" data-i18n="create_desc">{t('create_desc')}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] md:text-sm text-f-neon/80">
                      <span>Produção de Vídeos</span>
                      <span className="text-f-mint/30">·</span>
                      <span>Avatar IA</span>
                      <span className="text-f-mint/30">·</span>
                      <span>Conteúdo IA</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Build */}
            <AnimatedSection>
              <div className="bg-f-dark border border-f-neon/12 rounded-2xl overflow-hidden hover:border-f-neon/45 transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-12 lg:p-16 order-1 lg:order-2">
                    <div className="inline-block bg-f-black border border-f-neon/20 rounded-full px-3 py-1 font-mono text-[10px] md:text-xs text-f-mint mb-6 md:mb-8">02 / Foster Build</div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-f-mint mb-4" data-i18n="build_title">{t('build_title')}</h3>
                    <p className="text-f-mint/65 text-sm md:text-base mb-6 md:mb-8" data-i18n="build_desc">{t('build_desc')}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] md:text-sm text-f-neon/80">
                      <span>Sites com IA</span>
                      <span className="text-f-mint/30">·</span>
                      <span>Plataformas Digitais</span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-f-neon/10">
                    <div className="w-full h-full min-h-[200px] md:min-h-[240px] bg-f-black rounded-xl border border-f-neon/20 p-6 font-mono text-[10px] md:text-xs text-f-neon/70 overflow-hidden">
                      <div className="mb-2 text-f-mint/40">// Deploying infrastructure</div>
                      <div className="mb-1">{'>'} npm run build</div>
                      <div className="mb-1 text-f-neon">{'>'} ✓ 142 modules compiled</div>
                      <div className="mt-4 animate-pulse">_</div>
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
          <AnimatedSection className="mb-12 md:mb-16">
            <div className="font-mono text-f-neon/70 mb-4 md:mb-6" data-i18n="work_eyebrow">{t('work_eyebrow')}</div>
            <h2 className="font-display font-bold text-[clamp(28px,4vw,40px)] text-f-mint" data-i18n="work_title">{t('work_title')}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <AnimatedSection className="md:col-span-2">
              <div className="bg-gradient-to-br from-f-black to-f-dark border border-f-neon/15 rounded-2xl overflow-hidden hover:border-f-neon/45 transition-colors duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                    <div className="inline-flex bg-f-neon/10 border border-f-neon/20 rounded-full px-3 py-1 font-mono text-[10px] md:text-[11px] text-f-neon mb-6 w-fit">🏆 Case Nacional</div>
                    <h3 className="font-display font-bold text-2xl md:text-4xl text-f-mint mb-4">De 100k para 700k inscritos.</h3>
                    <p className="text-f-mint/65 text-sm md:text-base mb-6">Viviane Martinello & Abba Pai Church — +600% de crescimento orgânico.</p>
                  </div>
                  <div className="bg-f-black border-t lg:border-t-0 lg:border-l border-f-neon/10 p-4 md:p-6 flex flex-col gap-4">
                    <img src="/cases/viviane-analytics.png" alt="Analytics Viviane" className="w-full rounded-lg border border-f-neon/20 shadow-xl" />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100} className="md:col-span-2">
              <div className="bg-f-black border border-f-neon/15 rounded-2xl p-6 md:p-10 hover:border-f-neon/45 transition-colors duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7">
                    <h3 className="font-display font-bold text-2xl md:text-4xl text-f-mint mb-4">Rony Meisler: <span className="text-f-neon">Clone Digital</span></h3>
                    <p className="text-f-mint/60 text-sm md:text-base mb-8">O avatar ultra-realista para um dos maiores empresários do Brasil.</p>
                    <div className="aspect-video w-full border border-f-neon/30 rounded-xl overflow-hidden bg-f-dark/30 relative cursor-pointer" onClick={() => !playRony && setPlayRony(true)}>
                      {playRony ? (
                        <iframe src="https://www.youtube.com/embed/n1nP4gf4DJc?autoplay=1" className="absolute inset-0 w-full h-full" allowFullScreen></iframe>
                      ) : (
                        <img src="https://img.youtube.com/vi/n1nP4gf4DJc/maxresdefault.jpg" className="w-full h-full object-cover opacity-60" />
                      )}
                    </div>
                  </div>
                  <div className="lg:col-span-5 hidden lg:block">
                    <div className="aspect-[9/16] w-full border border-f-neon/30 rounded-xl overflow-hidden shadow-2xl">
                      <iframe src="https://www.instagram.com/reel/DVLX0vpAASA/embed" className="w-full h-full" scrolling="no"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="py-16 md:py-24 bg-f-black border-t border-f-neon/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-0 md:divide-x divide-f-neon/15">
            <AnimatedSection className="text-center">
              <div className="font-display font-bold text-[48px] md:text-[64px] text-f-neon mb-2">15+</div>
              <div className="font-mono text-[11px] text-f-mint/50 uppercase tracking-[0.15em]">anos de produção</div>
            </AnimatedSection>
            <AnimatedSection delay={100} className="text-center">
              <div className="font-display font-bold text-[48px] md:text-[64px] text-f-neon mb-2">+500</div>
              <div className="font-mono text-[11px] text-f-mint/50 uppercase tracking-[0.15em]">projetos entregues</div>
            </AnimatedSection>
            <AnimatedSection delay={200} className="text-center">
              <div className="font-display font-bold text-[48px] md:text-[64px] text-f-neon text-glow-sm mb-2">+1 Bi</div>
              <div className="font-mono text-[11px] text-f-mint/50 uppercase tracking-[0.15em]">views geradas</div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 md:py-36 bg-f-black relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
          <AnimatedSection>
            <h2 className="font-display font-bold text-[clamp(36px,8vw,72px)] text-f-mint mb-6">
              {t('cta_title_1')}<br/>{t('cta_title_2')}
            </h2>
            <p className="text-[18px] md:text-[20px] text-f-mint/50 mb-10">
              {t('cta_desc')}
            </p>
            <button onClick={openContactModal} className="w-full sm:w-auto bg-f-neon text-f-black font-display font-bold rounded-full px-12 py-5 text-lg hover:glow-neon transition-all cursor-pointer">
              {t('cta_btn')}
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}