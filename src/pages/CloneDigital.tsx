import AnimatedSection from '../components/AnimatedSection';
import { CheckCircle2, Play, Star } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { openContactModal } from '../utils/contactEvents';

export default function CloneDigital() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-f-black scroll-smooth">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-[140px] pb-20 bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,242,167,0.1)_0%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-5 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-f-neon/5 border border-f-neon/30 rounded-full px-4 py-1.5 mb-8">
                <span className="font-mono text-[12px] text-f-neon">{t('clone_hero_eyebrow')}</span>
              </div>
              
              <h1 className="font-display font-bold text-[clamp(48px,8vw,80px)] leading-[0.95] tracking-tight mb-8">
                <span className="block text-f-mint">{t('clone_hero_title_1')}</span>
                <span className="block text-f-mint">{t('clone_hero_title_2')}</span>
                <span className="block text-f-neon text-glow">{t('clone_hero_title_3')}</span>
              </h1>

              <p className="text-f-mint/60 text-[18px] max-w-xl mb-10 leading-relaxed">
                {t('clone_hero_desc')}
              </p>

              <div className="space-y-4 mb-12">
                <div className="flex items-center gap-3 text-f-neon/80 font-display font-medium">
                  <CheckCircle2 size={20} className="text-f-neon" />
                  <span>{t('clone_hero_check_1')}</span>
                </div>
                <div className="flex items-center gap-3 text-f-neon/80 font-display font-medium">
                  <CheckCircle2 size={20} className="text-f-neon" />
                  <span>{t('clone_hero_check_2')}</span>
                </div>
                <div className="flex items-center gap-3 text-f-neon/80 font-display font-medium">
                  <CheckCircle2 size={20} className="text-f-neon" />
                  <span>{t('clone_hero_check_3')}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={openContactModal}
                  className="bg-f-neon text-f-black font-display font-bold rounded-full px-8 py-5 text-[16px] whitespace-nowrap hover:glow-neon hover:scale-[1.03] transition-all duration-300 shadow-[0_0_30px_rgba(80,242,167,0.2)] cursor-pointer"
                >
                  {t('clone_hero_cta')}
                </button>
                <a 
                  href="#case" 
                  className="border border-f-neon/30 text-f-neon font-display font-medium rounded-full px-8 py-5 text-[16px] whitespace-nowrap text-center hover:bg-f-neon/10 transition-all duration-300"
                >
                  {t('clone_hero_secondary')}
                </a>
              </div>
            </AnimatedSection>
          </div>

          <div className="relative h-[500px] hidden md:block">
            <AnimatedSection delay={200}>
              <div className="w-full aspect-square max-w-[480px] bg-f-dark/20 border border-f-neon/20 rounded-full p-8 relative flex items-center justify-center animate-float">
                <div className="absolute inset-0 rounded-full border border-dashed border-f-neon/30 animate-[spin_30s_linear_infinite]"></div>
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-f-neon/10 to-transparent flex items-center justify-center relative overflow-hidden">
                   {/* Waveform visual */}
                   <div className="flex items-end gap-2 h-24 opacity-60">
                    {[40, 70, 40, 90, 60, 30, 80, 50, 60, 40, 70, 50, 80].map((h, i) => (
                      <div key={i} className="w-2.5 bg-f-neon rounded-full animate-waveform" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CASE SECTION */}
      <section id="case" className="py-28 bg-f-dark border-y border-f-neon/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="w-full aspect-video bg-f-black border border-f-neon/20 rounded-2xl relative overflow-hidden group shadow-2xl">
                 <img src="https://img.youtube.com/vi/n1nP4gf4DJc/maxresdefault.jpg" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" alt="Rony Meisler Case" />
                 <a 
                   href="https://www.youtube.com/watch?v=n1nP4gf4DJc" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="absolute inset-0 flex items-center justify-center"
                 >
                    <div className="w-20 h-20 rounded-full bg-f-neon flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="text-f-black ml-1" fill="currentColor" size={32} />
                    </div>
                 </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="font-mono text-f-neon/70 mb-6">/ CASO REAL · VALIDADO · RONY MEISLER</div>
              <h2 className="font-display font-bold text-3xl text-f-mint mb-8 leading-tight">
                Rony Meisler: O empresário que escalou sua presença com IA.
              </h2>
              <div className="relative">
                <p className="text-xl text-f-mint/80 font-light leading-relaxed mb-8">
                  Rony Meisler é fundador da Reserva e um dos empresários mais inovadores do país. O case de seu clone digital, desenvolvido pela Foster Company, é um marco na produção de conteúdo, unindo a essência do criador com a escala infinita da inteligência artificial.
                </p>
                <div className="font-mono text-sm text-f-neon uppercase tracking-widest">
                  Parceria Estratégica · Foster Company
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-28 bg-f-black">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-20 text-center">
            <div className="font-mono text-f-neon/70 mb-6">{t('clone_problem_eyebrow')}</div>
            <h2 className="font-display font-bold text-[clamp(32px,5vw,52px)] text-f-mint mb-8">
              {t('clone_problem_title')}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <AnimatedSection key={num} delay={num * 100}>
                <div className="flex gap-4 p-6 bg-f-dark/30 border border-f-neon/10 rounded-2xl">
                  <div className="shrink-0 text-red-500 font-bold">×</div>
                  <p className="text-f-mint/65 text-[15px]">{t(`clone_problem_li${num}`)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <div className="bg-f-neon/5 border border-f-neon/20 rounded-3xl p-10 md:p-16">
              <h3 className="font-display font-bold text-3xl text-f-mint mb-6 italic leading-tight">
                {t('clone_solution_highlight')}
              </h3>
              <p className="font-mono text-f-neon text-lg uppercase tracking-widest">{t('clone_solution_sub')}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-28 bg-f-dark border-y border-f-neon/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-20">
            <div className="font-mono text-f-neon/70 mb-6">{t('clone_process_eyebrow')}</div>
            <h2 className="font-display font-bold text-4xl text-f-mint">{t('clone_process_title')}</h2>
            <p className="text-f-mint/50 mt-4">{t('clone_process_subtitle')}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-f-neon/10"></div>
            {[1, 2, 3, 4, 5].map((num) => (
              <AnimatedSection key={num} delay={num * 150} className="relative z-10">
                <div className="bg-f-black border border-f-neon/20 rounded-2xl p-6 h-full flex flex-col hover:border-f-neon/50 transition-colors">
                  <h4 className="font-display font-bold text-lg text-f-neon mb-4">
                    {t(`clone_step${num}_title`)}
                  </h4>
                  <p className="text-sm text-f-mint/60">
                    {t(`clone_step${num}_desc`)}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES SECTION */}
      <section className="py-28 bg-f-black">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-20 text-center">
            <div className="font-mono text-f-neon/70 mb-6">{t('clone_deliver_eyebrow')}</div>
            <h2 className="font-display font-bold text-4xl text-f-mint">{t('clone_deliver_title')}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <AnimatedSection key={num} delay={num * 50}>
                <div className="bg-f-dark border border-f-neon/15 rounded-2xl p-8 h-full hover:border-f-neon/40 transition-all">
                  <h4 className="font-display font-bold text-lg text-f-mint mb-3">{t(`clone_deliver_${num}_t`)}</h4>
                  <p className="text-sm text-f-mint/50 leading-relaxed">{t(`clone_deliver_${num}_d`)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* BONUS SECTION */}
      <section className="py-28 bg-f-dark border-y border-f-neon/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-20">
            <div className="font-mono text-f-neon/70 mb-6">{t('clone_bonus_eyebrow')}</div>
            <h2 className="font-display font-bold text-4xl text-f-mint">{t('clone_bonus_subtitle')}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num) => (
              <AnimatedSection key={num} delay={num * 100}>
                <div className="bg-f-neon/5 border-2 border-dashed border-f-neon/30 rounded-3xl p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-f-neon/20 flex items-center justify-center mb-6">
                    <Star className="text-f-neon" size={24} />
                  </div>
                  <h4 className="font-display font-bold text-xl text-f-mint mb-4">{t(`clone_bonus${num}_t`)}</h4>
                  <p className="text-f-mint/60 text-sm mb-8 leading-relaxed">{t(`clone_bonus${num}_d`)}</p>
                  <div className="font-mono text-sm text-f-neon font-bold">{t(`clone_bonus${num}_v`)}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FIT SECTION */}
      <section className="py-28 bg-f-black">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <div className="font-mono text-f-neon/70 mb-6">{t('clone_fit_eyebrow')}</div>
              <h2 className="font-display font-bold text-4xl text-f-mint mb-10">{t('clone_fit_title')}</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} className="flex gap-4">
                    <CheckCircle2 className="text-f-neon shrink-0" size={20} />
                    <span className="text-f-mint/70">{t(`clone_fit_li${num}`)}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-f-dark/30 border border-f-neon/10 rounded-3xl p-10 h-full">
                <div className="font-mono text-f-neon/50 mb-8 uppercase tracking-widest text-sm">Não é para você se:</div>
                <div className="space-y-6">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="flex gap-4">
                      <div className="shrink-0 text-red-500 font-bold">×</div>
                      <span className="text-f-mint/40">{t(`clone_nofit_li${num}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-32 bg-f-dark border-y border-f-neon/10 text-center">
        <AnimatedSection>
          <h2 className="font-display font-bold text-[clamp(32px,5vw,52px)] text-f-mint mb-6">
            {t('clone_cta_highlight')}
          </h2>
          <p className="text-xl text-f-mint/50 mb-12 max-w-2xl mx-auto">
            {t('clone_cta_sub')}
          </p>
          <button 
            onClick={openContactModal}
            className="bg-f-neon text-f-black font-display font-bold rounded-full px-12 py-6 text-xl hover:glow-neon transition-all cursor-pointer"
          >
            {t('clone_hero_cta')}
          </button>
        </AnimatedSection>
      </section>

      {/* INVESTMENT SECTION */}
      <section className="py-28 bg-f-black">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-16 text-center">
            <div className="font-mono text-f-neon/70 mb-6">{t('clone_invest_eyebrow')}</div>
            <h2 className="font-display font-bold text-4xl text-f-mint mb-4">{t('clone_invest_title')}</h2>
            <p className="text-f-mint/50 font-mono">{t('clone_invest_subtitle')}</p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-f-dark border border-f-neon/20 rounded-[32px] p-10 md:p-16 relative shadow-2xl">
              <button 
                onClick={openContactModal}
                className="block w-full text-center bg-f-neon text-f-black font-display font-bold rounded-2xl py-6 text-xl hover:glow-neon transition-all mb-8 cursor-pointer"
              >
                {t('clone_invest_cta')}
              </button>
              <p className="text-center font-mono text-[11px] text-f-mint/30">
                {t('clone_invest_footer')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-28 bg-f-dark border-t border-f-neon/10">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-20 text-center">
            <div className="font-mono text-f-neon/70 mb-6">{t('clone_faq_eyebrow')}</div>
            <h2 className="font-display font-bold text-4xl text-f-mint">{t('clone_faq_eyebrow')}</h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <details key={num} className="group bg-f-black/30 border border-f-neon/10 rounded-2xl overflow-hidden">
                <summary className="p-6 cursor-pointer list-none flex justify-between items-center font-display font-bold text-lg text-f-mint group-open:text-f-neon">
                  {t(`clone_faq_q${num}`)}
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6 text-f-mint/60 border-t border-f-neon/5 pt-4">
                  {t(`clone_faq_a${num}`)}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}