"use client";

import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { CheckCircle2, Play, Star } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { openContactModal } from '../utils/contactEvents';

export default function CloneDigital() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full bg-f-black scroll-smooth">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-[100px] md:pt-[140px] pb-20 bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,242,167,0.1)_0%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-5 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          <div>
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-f-neon/5 border border-f-neon/30 rounded-full px-4 py-1.5 mb-6 md:mb-8">
                <span className="font-mono text-[11px] md:text-[12px] text-f-neon">{t('clone_hero_eyebrow')}</span>
              </div>
              
              <h1 className="font-display font-bold text-[clamp(36px,9vw,80px)] leading-[0.95] tracking-tight mb-6 md:mb-8">
                <span className="block text-f-mint">{t('clone_hero_title_1')}</span>
                <span className="block text-f-mint">{t('clone_hero_title_2')}</span>
                <span className="block text-f-neon text-glow">{t('clone_hero_title_3')}</span>
              </h1>

              <p className="text-f-mint/60 text-[16px] md:text-[18px] max-w-xl mb-8 md:mb-10 leading-relaxed">
                {t('clone_hero_desc')}
              </p>

              <div className="space-y-4 mb-10 md:mb-12">
                {[1, 2, 3].map(num => (
                  <div key={num} className="flex items-center gap-3 text-f-neon/80 font-display font-medium text-sm md:text-base">
                    <CheckCircle2 size={18} className="text-f-neon" />
                    <span>{t(`clone_hero_check_${num}`)}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={openContactModal}
                  className="w-full sm:w-auto bg-f-neon text-f-black font-display font-bold rounded-full px-8 py-5 text-[16px] hover:glow-neon transition-all duration-300 shadow-[0_0_30px_rgba(80,242,167,0.2)] cursor-pointer"
                >
                  {t('clone_hero_cta')}
                </button>
                <a 
                  href="#case" 
                  className="w-full sm:w-auto border border-f-neon/30 text-f-neon font-display font-medium rounded-full px-8 py-5 text-[16px] text-center hover:bg-f-neon/10 transition-all duration-300"
                >
                  {t('clone_hero_secondary')}
                </a>
              </div>
            </AnimatedSection>
          </div>

          <div className="relative h-[300px] md:h-[500px] hidden md:block">
            <AnimatedSection delay={200} className="flex justify-center">
              <div className="w-full aspect-square max-w-[400px] bg-f-dark/20 border border-f-neon/20 rounded-full p-8 relative flex items-center justify-center animate-float">
                <div className="absolute inset-0 rounded-full border border-dashed border-f-neon/30 animate-[spin_30s_linear_infinite]"></div>
                <div className="flex items-end gap-2 h-20 opacity-60">
                  {[40, 70, 40, 90, 60, 30, 80].map((h, i) => (
                    <div key={i} className="w-2 bg-f-neon rounded-full animate-waveform" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}></div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CASE SECTION */}
      <section id="case" className="py-20 md:py-28 bg-f-dark border-y border-f-neon/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedSection>
              <div className="w-full aspect-video bg-f-black border border-f-neon/20 rounded-2xl relative overflow-hidden group shadow-2xl cursor-pointer" onClick={() => setIsPlaying(true)}>
                 {!isPlaying ? (
                   <div className="absolute inset-0">
                     <img src="https://img.youtube.com/vi/n1nP4gf4DJc/maxresdefault.jpg" className="w-full h-full object-cover opacity-60" alt="Rony Meisler" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-f-neon flex items-center justify-center shadow-2xl">
                          <Play className="text-f-black ml-1" fill="currentColor" size={24} />
                        </div>
                     </div>
                   </div>
                 ) : (
                   <iframe src="https://www.youtube.com/embed/n1nP4gf4DJc?autoplay=1" className="absolute inset-0 w-full h-full border-none" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                 )}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="font-mono text-[11px] md:text-sm text-f-neon/70 mb-4 md:mb-6">/ CASO REAL · RONY MEISLER</div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-f-mint mb-6 md:mb-8 leading-tight">
                Rony Meisler: O empresário que escalou sua presença com IA.
              </h2>
              <p className="text-[17px] md:text-xl text-f-mint/80 font-light leading-relaxed mb-6">
                Desenvolvemos o clone digital para um dos maiores empresários do Brasil. Presença 24/7 sem depender de agenda.
              </p>
              <div className="font-mono text-[11px] text-f-neon uppercase tracking-widest">Parceria Estratégica</div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-20 md:py-28 bg-f-black">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-12 md:mb-20 text-center">
            <div className="font-mono text-f-neon/70 mb-4 md:mb-6">{t('clone_problem_eyebrow')}</div>
            <h2 className="font-display font-bold text-[clamp(28px,5vw,52px)] text-f-mint">{t('clone_problem_title')}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <AnimatedSection key={num} delay={num * 50}>
                <div className="flex gap-4 p-5 md:p-6 bg-f-dark/30 border border-f-neon/10 rounded-2xl">
                  <div className="shrink-0 text-red-500 font-bold">×</div>
                  <p className="text-f-mint/65 text-sm md:text-[15px]">{t(`clone_problem_li${num}`)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT SECTION */}
      <section className="py-20 md:py-28 bg-f-black border-t border-f-neon/10">
        <div className="max-w-4xl mx-auto px-5">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-f-mint mb-4">{t('clone_invest_title')}</h2>
            <p className="text-f-mint/50 font-mono text-sm">{t('clone_invest_subtitle')}</p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-f-dark border border-f-neon/20 rounded-[24px] md:rounded-[32px] p-8 md:p-16 text-center shadow-2xl">
              <button 
                onClick={openContactModal}
                className="w-full bg-f-neon text-f-black font-display font-bold rounded-2xl py-5 md:py-6 text-lg md:text-xl hover:glow-neon transition-all mb-6 cursor-pointer"
              >
                {t('clone_invest_cta')}
              </button>
              <p className="font-mono text-[10px] md:text-[11px] text-f-mint/30 uppercase tracking-widest leading-relaxed">
                {t('clone_invest_footer')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}