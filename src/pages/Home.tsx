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
                <button onClick={openContactModal} className="bg-f-neon text-f-black font-display font-semibold rounded-full px-7 py-3.5 text-center hover:glow-neon hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                  {t('hero_cta_1')} →
                </button>
                <a href="#work" className="border border-f-neon/35 text-f-neon font-display font-medium rounded-full px-7 py-3.5 text-center hover:bg-f-neon/10 transition-all duration-300">
                  {t('hero_cta_2')}
                </a>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-5 relative h-[500px] hidden md:block">
            <AnimatedSection delay={400} className="h-full w-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
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

                <div className="flex flex-col gap-3 mb-8">
                  <div className="flex items-start gap-2 text-[12px] text-f-mint/80">
                    <span className="text-f-neon mt-1">🔍</span>
                    <span><strong>Inteligência de Nicho:</strong> Descobre vídeos em alta, keywords com volume real e lacunas de conteúdo inexploradas no seu nicho.</span>
                  </div>
                  <div className="flex items-start gap-2 text-[12px] text-f-mint/80">
                    <span className="text-f-neon mt-1">⚡</span>
                    <span><strong>Otimizador de Vídeo:</strong> Gera títulos de alto CTR, descrição com SEO e tags estratégicas a partir da URL de qualquer vídeo.</span>
                  </div>
                  <div className="flex items-start gap-2 text-[12px] text-f-mint/80">
                    <span className="text-f-neon mt-1">📡</span>
                    <span><strong>Mineração de Canais:</strong> Identifica canais em crescimento acelerado prontos para serem remodelados com vantagem competitiva.</span>
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

                <div className="flex flex-col gap-3 mb-8">
                  <div className="flex items-start gap-2 text-[12px] text-f-mint/80">
                    <span className="text-f-neon mt-1">▸</span>
                    <span><strong>Score de Viabilidade 0–100:</strong> Saiba suas chances reais de aprovação antes de investir no registro.</span>
                  </div>
                  <div className="flex items-start gap-2 text-[12px] text-f-mint/80">
                    <span className="text-f-neon mt-1">▸</span>
                    <span><strong>Base INPI Atualizada Semanalmente:</strong> Pesquise contra dados reais, direto da Revista da Propriedade Industrial.</span>
                  </div>
                  <div className="flex items-start gap-2 text-[12px] text-f-mint/80">
                    <span className="text-f-neon mt-1">▸</span>
                    <span><strong>Gestão Completa do Processo:</strong> Acompanhe seu registro do pedido à concessão em um dashboard próprio.</span>
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

                <div className="flex flex-col gap-3 mb-8">
                  <div className="flex items-start gap-2 text-[12px] text-f-mint/80">
                    <span className="text-f-neon mt-1">🤖</span>
                    <span><strong>Clone Digital com IA:</strong> Sua personalidade, tom de voz e conhecimento em um clone que conversa por você.</span>
                  </div>
                  <div className="flex items-start gap-2 text-[12px] text-f-mint/80">
                    <span className="text-f-neon mt-1">🔗</span>
                    <span><strong>Bio Link Inteligente:</strong> Seu perfil público com link único para compartilhar em qualquer rede social.</span>
                  </div>
                  <div className="flex items-start gap-2 text-[12px] text-f-mint/80">
                    <span className="text-f-neon mt-1">📊</span>
                    <span><strong>Painel de Gestão Completo:</strong> Acompanhe conversas, gerencie sua base de conhecimento e monitore seus resultados.</span>
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
      {/* ... rest of the component (CASES, CTA, etc) remains the same */}
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
            <button onClick={openContactModal} className="inline-block bg-f-neon text-f-black font-display font-bold rounded-full px-12 py-5 text-lg hover:glow-neon hover:scale-[1.03] transition-all duration-300 mb-6 cursor-pointer">
              {t('cta_btn')}
            </button>
            <p className="font-mono text-[11px] text-f-mint/25">{t('cta_footer')}</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}