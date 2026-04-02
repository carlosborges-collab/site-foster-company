import AnimatedSection from '../components/AnimatedSection';
import { Search, Bot, Shield, CheckCircle2, ArrowRight, Zap, Target, Lock, FileText, Scale, Users } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { openContactModal } from '../utils/contactEvents';

export default function FosterIA() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-f-black scroll-smooth">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center pt-[140px] pb-20 bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,242,167,0.1)_0%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-5 md:px-8 w-full relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-f-neon/5 border border-f-neon/30 rounded-full px-4 py-1.5 mb-8 shadow-[0_0_15px_rgba(80,242,167,0.2)]">
              <span className="font-mono text-[12px] text-f-neon uppercase tracking-widest">{t('fia_hero_badge')}</span>
            </div>
            
            <h1 className="font-display font-bold text-[clamp(40px,7vw,84px)] leading-[0.95] tracking-tight mb-8">
              <span className="block text-f-mint">{t('fia_hero_title_1')}</span>
              <span className="block text-f-neon text-glow-sm">{t('fia_hero_title_2')}</span>
            </h1>

            <p className="text-f-mint/60 text-[18px] md:text-[20px] font-light max-w-3xl mx-auto mb-12 leading-relaxed">
              {t('fia_hero_subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <button 
                onClick={openContactModal}
                className="bg-f-neon text-f-black font-display font-bold rounded-full px-10 py-5 text-lg hover:glow-neon hover:scale-[1.03] transition-all duration-300 shadow-[0_0_30px_rgba(80,242,167,0.2)] cursor-pointer"
              >
                {t('fia_hero_cta_1')}
              </button>
              <a href="#como-funciona" className="border border-f-neon/30 text-f-neon font-display font-medium rounded-full px-10 py-5 text-lg hover:bg-f-neon/10 transition-all duration-300">
                {t('fia_hero_cta_2')}
              </a>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[1, 2, 3].map(num => (
                <div key={num} className="bg-f-dark/30 border border-f-neon/10 rounded-2xl p-6 text-center">
                  <div className="font-display font-bold text-4xl text-f-neon mb-2">{t(`fia_stat_${num}_val`)}</div>
                  <div className="text-[13px] text-f-mint/40 font-mono uppercase tracking-widest leading-relaxed">
                    {t(`fia_stat_${num}_lbl`)}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2: O PROBLEMA */}
      <section className="py-28 bg-f-dark border-y border-f-neon/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <AnimatedSection className="mb-16">
                <div className="font-mono text-f-neon/70 mb-6 uppercase tracking-widest text-sm">{t('fia_prob_eyebrow')}</div>
                <h2 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-f-mint mb-8 leading-tight">
                  {t('fia_prob_title')}
                </h2>
              </AnimatedSection>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map(num => (
                  <AnimatedSection key={num} delay={num * 100}>
                    <div className="flex gap-4">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 font-bold mt-1">×</div>
                      <div>
                        <h4 className="font-display font-bold text-xl text-f-mint mb-2">{t(`fia_prob_${num}_t`)}</h4>
                        <p className="text-f-mint/50 text-sm leading-relaxed">{t(`fia_prob_${num}_d`)}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <AnimatedSection delay={400}>
                <div className="bg-f-black border border-f-neon/20 rounded-3xl p-10 relative shadow-2xl">
                  <div className="text-f-neon/20 text-6xl font-serif absolute top-6 left-6">“</div>
                  <p className="text-xl italic text-f-mint/80 font-light leading-relaxed mb-8 relative z-10">
                    {t('fia_prob_quote')}
                  </p>
                  <div className="font-mono text-f-neon text-sm mb-10">{t('fia_prob_author')}</div>
                  
                  <div className="space-y-6 pt-10 border-t border-f-neon/10">
                    <div className="flex items-center gap-4">
                      <div className="font-display font-bold text-3xl text-f-neon">{t('fia_prob_metric_1_v')}</div>
                      <div className="text-xs text-f-mint/40 uppercase tracking-widest">{t('fia_prob_metric_1_l')}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="font-display font-bold text-3xl text-f-neon">{t('fia_prob_metric_2_v')}</div>
                      <div className="text-xs text-f-mint/40 uppercase tracking-widest">{t('fia_prob_metric_2_l')}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVIÇOS */}
      <section id="servicos" className="py-28 bg-f-black scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-20 text-center">
            <div className="font-mono text-f-neon/70 mb-6 uppercase tracking-widest text-sm">{t('fia_serv_eyebrow')}</div>
            <h2 className="font-display font-bold text-[clamp(32px,4.5vw,48px)] text-f-mint">{t('fia_serv_title')}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* SERVIÇO 01 */}
            <AnimatedSection delay={100}>
              <div className="bg-f-dark/40 border border-f-neon/15 rounded-3xl p-10 h-full flex flex-col hover:border-f-neon/40 transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-f-neon/10 flex items-center justify-center text-f-neon mb-8">
                  <Search size={28} />
                </div>
                <h3 className="font-display font-bold text-2xl text-f-mint mb-4">{t('fia_serv_1_t')}</h3>
                <p className="text-f-mint/60 text-[15px] mb-8 leading-relaxed">{t('fia_serv_1_d')}</p>
                <ul className="space-y-4 mt-auto">
                  {[1, 2, 3, 4, 5].map(i => (
                    <li key={i} className="flex items-center gap-3 text-sm text-f-mint/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-f-neon shrink-0"></div>
                      {t(`fia_serv_1_li${i}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* SERVIÇO 02 */}
            <AnimatedSection delay={200}>
              <div className="bg-f-dark/40 border border-f-neon/15 rounded-3xl p-10 h-full flex flex-col hover:border-f-neon/40 transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-f-neon/10 flex items-center justify-center text-f-neon mb-8">
                  <Bot size={28} />
                </div>
                <h3 className="font-display font-bold text-2xl text-f-mint mb-4">{t('fia_serv_2_t')}</h3>
                <p className="text-f-mint/60 text-[15px] mb-8 leading-relaxed">{t('fia_serv_2_d')}</p>
                <ul className="space-y-4 mt-auto">
                  {[1, 2, 3, 4, 5].map(i => (
                    <li key={i} className="flex items-center gap-3 text-sm text-f-mint/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-f-neon shrink-0"></div>
                      {t(`fia_serv_2_li${i}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* SERVIÇO 03 */}
            <AnimatedSection delay={300}>
              <div className="bg-f-dark/40 border border-f-neon/15 rounded-3xl p-10 h-full flex flex-col hover:border-f-neon/40 transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-f-neon/10 flex items-center justify-center text-f-neon mb-8">
                  <Shield size={28} />
                </div>
                <h3 className="font-display font-bold text-2xl text-f-mint mb-4">{t('fia_serv_3_t')}</h3>
                <p className="text-f-mint/60 text-[15px] mb-8 leading-relaxed">{t('fia_serv_3_d')}</p>
                <ul className="space-y-4 mt-auto">
                  {[1, 2, 3, 4, 5].map(i => (
                    <li key={i} className="flex items-center gap-3 text-sm text-f-mint/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-f-neon shrink-0"></div>
                      {t(`fia_serv_3_li${i}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMO FUNCIONA */}
      <section id="como-funciona" className="py-28 bg-f-dark border-y border-f-neon/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-20 text-center">
            <div className="font-mono text-f-neon/70 mb-6 uppercase tracking-widest text-sm">{t('fia_how_eyebrow')}</div>
            <h2 className="font-display font-bold text-[clamp(32px,4.5vw,48px)] text-f-mint">{t('fia_how_title')}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-px bg-f-neon/10"></div>
            {[1, 2, 3, 4].map((num) => (
              <AnimatedSection key={num} delay={num * 100} className="relative z-10">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-[88px] h-[88px] rounded-full bg-f-black border-4 border-f-dark flex items-center justify-center text-f-neon font-display font-bold text-2xl mb-8 shadow-[0_0_20px_rgba(80,242,167,0.1)]">
                    {String(num).padStart(2, '0')}
                  </div>
                  <h4 className="font-display font-bold text-xl text-f-mint mb-4">{t(`fia_how_step${num}_t`)}</h4>
                  <p className="text-sm text-f-mint/50 leading-relaxed">{t(`fia_how_step${num}_d`)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: COMPLIANCE & LGPD */}
      <section className="py-28 bg-f-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <AnimatedSection>
                <div className="font-mono text-f-neon/70 mb-6 uppercase tracking-widest text-sm">{t('fia_lgpd_eyebrow')}</div>
                <h2 className="font-display font-bold text-[clamp(32px,4vw,44px)] text-f-mint mb-8 leading-tight">
                  {t('fia_lgpd_title')}
                </h2>
                <p className="text-lg text-f-mint/60 mb-10 leading-relaxed">
                  {t('fia_lgpd_desc')}
                </p>
                
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="flex items-center gap-4 text-f-mint/80">
                      <CheckCircle2 size={20} className="text-f-neon shrink-0" />
                      <span className="text-[15px]">{t(`fia_lgpd_li${i}`)}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: FileText, num: 1 },
                { icon: Lock, num: 2 },
                { icon: Shield, num: 3 },
                { icon: Scale, num: 4 }
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className="bg-f-dark/30 border border-f-neon/15 rounded-2xl p-8 h-full hover:border-f-neon/40 transition-all group">
                    <item.icon size={24} className="text-f-neon mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-display font-bold text-lg text-f-mint mb-2">{t(`fia_lgpd_card${item.num}_t`)}</h4>
                    <p className="text-xs text-f-mint/40 leading-relaxed">{t(`fia_lgpd_card${item.num}_d`)}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: O QUE VOCÊ RECEBE */}
      <section className="py-28 bg-f-dark border-y border-f-neon/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="text-center mb-20">
            <div className="font-mono text-f-neon/70 mb-6 uppercase tracking-widest text-sm">{t('fia_rece_eyebrow')}</div>
            <h2 className="font-display font-bold text-4xl text-f-mint mb-4">{t('fia_rece_title')}</h2>
            <p className="text-f-mint/50 max-w-2xl mx-auto">{t('fia_rece_subtitle')}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(num => (
              <AnimatedSection key={num} delay={num * 50}>
                <div className="bg-f-black/40 border border-f-neon/10 rounded-2xl p-8 h-full hover:border-f-neon/30 transition-all">
                  <h4 className="font-display font-bold text-lg text-f-neon mb-4">{t(`fia_rece_${num}_t`)}</h4>
                  <p className="text-sm text-f-mint/50 leading-relaxed">{t(`fia_rece_${num}_d`)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: PARA QUEM É */}
      <section className="py-28 bg-f-black">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="font-mono text-f-neon/70 mb-6 uppercase tracking-widest text-sm">{t('fia_who_eyebrow')}</div>
            <h2 className="font-display font-bold text-4xl text-f-mint">{t('fia_who_title')}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map(num => (
              <AnimatedSection key={num} delay={num * 100}>
                <div className="bg-f-dark/20 border border-f-neon/10 rounded-2xl p-8 h-full hover:border-f-neon/30 transition-colors flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-f-neon/5 flex items-center justify-center text-2xl shrink-0">
                    {num === 1 ? '🏢' : num === 2 ? '🎬' : num === 3 ? '🏪' : '⚖️'}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-f-mint mb-3">{t(`fia_who_${num}_t`)}</h3>
                    <p className="text-sm text-f-mint/50 leading-relaxed">{t(`fia_who_${num}_d`)}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA FINAL */}
      <section className="py-36 bg-f-black relative overflow-hidden text-center border-t border-f-neon/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,242,167,0.1)_0%,transparent_70%)]"></div>
        <div className="max-w-3xl mx-auto px-5 relative z-10">
          <AnimatedSection>
            <div className="font-mono text-f-neon/70 mb-6 uppercase tracking-widest text-sm">{t('fia_cta_eyebrow')}</div>
            <h2 className="font-display font-bold text-[clamp(32px,5.5vw,64px)] text-f-mint mb-6 leading-tight">
              {t('fia_cta_title')}
            </h2>
            <p className="text-xl text-f-mint/50 mb-12 max-w-2xl mx-auto">
              {t('fia_cta_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={openContactModal}
                className="bg-f-neon text-f-black font-display font-bold rounded-full px-12 py-5 text-lg hover:glow-neon hover:scale-[1.03] transition-all duration-300 cursor-pointer"
              >
                {t('fia_cta_1')}
              </button>
              <a href="mailto:contato@fosterprodutora.com.br" className="border border-f-neon/30 text-f-neon font-display font-medium rounded-full px-12 py-5 text-lg hover:bg-f-neon/10 transition-all duration-300">
                {t('fia_cta_2')}
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-2 text-[11px] font-mono text-f-mint/30 uppercase tracking-widest">
                  <CheckCircle2 size={12} className="text-f-neon/40" />
                  {t(`fia_cta_seal_${i}`)}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}