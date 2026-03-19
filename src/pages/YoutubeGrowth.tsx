"use client";

import AnimatedSection from '../components/AnimatedSection';
import { CheckCircle2, BarChart3, Zap } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { openContactModal } from '../utils/contactEvents';

export default function YoutubeGrowth() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-f-black scroll-smooth">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-[100px] md:pt-[140px] pb-20 bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,242,167,0.1)_0%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-5 md:px-8 w-full relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-f-neon/5 border border-f-neon/30 rounded-full px-4 py-1.5 mb-6 md:mb-8">
              <span className="font-mono text-[11px] md:text-[12px] text-f-neon">{t('yt_hero_eyebrow')}</span>
            </div>
            
            <h1 className="font-display font-bold text-[clamp(36px,9vw,90px)] leading-[0.95] tracking-tight mb-6 md:mb-8">
              <span className="block text-f-mint">{t('yt_hero_title_1')}</span>
              <span className="block text-f-mint">{t('yt_hero_title_2')}</span>
              <span className="block text-f-neon text-glow">{t('yt_hero_title_3')}</span>
            </h1>

            <p className="text-f-mint/60 text-[16px] md:text-[18px] max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
              {t('yt_hero_desc')}
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12">
              {[1, 2, 3].map(num => (
                <div key={num} className="bg-f-neon/5 border border-f-neon/20 rounded-full px-4 py-2 font-mono text-[10px] md:text-[12px] text-f-mint/80">
                  {t(`yt_hero_metric_${num}`)}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#planos" className="w-full sm:w-auto bg-f-neon text-f-black font-display font-bold rounded-full px-8 py-4 text-center hover:glow-neon transition-all">
                {t('yt_hero_cta')}
              </a>
              <a href="#resultados" className="w-full sm:w-auto border border-f-neon/30 text-f-neon font-display font-medium rounded-full px-8 py-4 text-center hover:bg-f-neon/10 transition-all">
                {t('yt_hero_secondary')}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PLANOS SECTION */}
      <section id="planos" className="py-20 md:py-28 bg-f-dark border-y border-f-neon/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-12 md:mb-20 text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-f-mint mb-4">{t('yt_invest_title')}</h2>
            <p className="text-f-mint/50 font-mono text-sm">Sem contrato anual. Cancela quando quiser.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Plano 1 */}
            <AnimatedSection>
              <div className="bg-f-black border border-f-neon/15 rounded-2xl md:rounded-[32px] p-6 md:p-10 h-full flex flex-col hover:border-f-neon/40 transition-all">
                <h3 className="font-display font-bold text-lg md:text-xl text-f-mint mb-2">{t('yt_plan1_name')}</h3>
                <div className="text-2xl md:text-3xl font-display font-bold text-f-neon mb-4">{t('yt_plan1_price')}</div>
                <p className="text-sm text-f-mint/50 mb-8">{t('yt_plan1_desc')}</p>
                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-start gap-3 text-xs md:text-sm text-f-mint/70"><CheckCircle2 className="text-f-neon shrink-0" size={16} /> Estratégia mensal</div>
                  <div className="flex items-start gap-3 text-xs md:text-sm text-f-mint/70"><CheckCircle2 className="text-f-neon shrink-0" size={16} /> SEO em todos os vídeos</div>
                  <div className="flex items-start gap-3 text-xs md:text-sm text-f-mint/70"><CheckCircle2 className="text-f-neon shrink-0" size={16} /> Thumbnails com IA</div>
                </div>
                <button onClick={openContactModal} className="w-full py-4 rounded-xl border border-f-neon/30 text-f-neon font-display font-bold text-center hover:bg-f-neon/10 transition-all cursor-pointer">Escolher →</button>
              </div>
            </AnimatedSection>

            {/* Plano 2 - Destaque */}
            <AnimatedSection delay={100}>
              <div className="bg-f-dark border-2 border-f-neon rounded-2xl md:rounded-[32px] p-6 md:p-10 h-full flex flex-col relative shadow-[0_0_60px_rgba(80,242,167,0.1)]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-f-neon text-f-black px-4 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest">Recomendado</div>
                <h3 className="font-display font-bold text-lg md:text-xl text-f-mint mb-2">{t('yt_plan2_name')}</h3>
                <div className="text-2xl md:text-3xl font-display font-bold text-f-neon mb-4">{t('yt_plan2_price')}</div>
                <p className="text-sm text-f-mint/50 mb-8">{t('yt_plan2_desc')}</p>
                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-start gap-3 text-xs md:text-sm text-f-mint/70 font-bold"><Zap className="text-f-neon shrink-0" size={16} /> Tudo do Plano Gestão</div>
                  <div className="flex items-start gap-3 text-xs md:text-sm text-f-mint/70"><CheckCircle2 className="text-f-neon shrink-0" size={16} /> 15 cortes estratégicos/mês</div>
                  <div className="flex items-start gap-3 text-xs md:text-sm text-f-mint/70"><CheckCircle2 className="text-f-neon shrink-0" size={16} /> Estratégia de Shorts</div>
                </div>
                <button onClick={openContactModal} className="w-full py-4 rounded-xl bg-f-neon text-f-black font-display font-bold text-center hover:glow-neon transition-all cursor-pointer">Escolher →</button>
              </div>
            </AnimatedSection>

            {/* Plano 3 */}
            <AnimatedSection delay={200}>
              <div className="bg-f-black border border-f-neon/15 rounded-2xl md:rounded-[32px] p-6 md:p-10 h-full flex flex-col hover:border-f-neon/40 transition-all">
                <h3 className="font-display font-bold text-lg md:text-xl text-f-mint mb-2">{t('yt_plan3_name')}</h3>
                <div className="text-2xl md:text-3xl font-display font-bold text-f-neon mb-4">{t('yt_plan3_price')}</div>
                <p className="text-sm text-f-mint/50 mb-8">{t('yt_plan3_desc')}</p>
                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-start gap-3 text-xs md:text-sm text-f-mint/70 font-bold"><Zap className="text-f-neon shrink-0" size={16} /> Tudo dos planos anteriores</div>
                  <div className="flex items-start gap-3 text-xs md:text-sm text-f-mint/70"><CheckCircle2 className="text-f-neon shrink-0" size={16} /> 8 vídeos editados/mês</div>
                  <div className="flex items-start gap-3 text-xs md:text-sm text-f-mint/70"><CheckCircle2 className="text-f-neon shrink-0" size={16} /> Edição Cinematográfica IA</div>
                </div>
                <button onClick={openContactModal} className="w-full py-4 rounded-xl border border-f-neon/30 text-f-neon font-display font-bold text-center hover:bg-f-neon/10 transition-all cursor-pointer">Escolher →</button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 bg-f-black text-center">
        <div className="max-w-4xl mx-auto px-5">
          <AnimatedSection>
             <h2 className="font-display font-bold text-[clamp(28px,6vw,64px)] text-f-mint mb-8 md:mb-10 uppercase">Vagas Limitadas</h2>
             <p className="text-[18px] md:text-xl text-f-mint/50 mb-10 md:mb-12">Gestão profissional de YouTube a partir de R$3.000/mês.</p>
             <button onClick={openContactModal} className="w-full sm:w-auto bg-f-neon text-f-black font-display font-bold rounded-full px-12 py-5 md:py-6 text-lg md:text-xl hover:glow-neon transition-all cursor-pointer">
               Garantir minha vaga →
             </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}