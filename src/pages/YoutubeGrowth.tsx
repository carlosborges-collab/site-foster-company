import AnimatedSection from '../components/AnimatedSection';
import { CheckCircle2, TrendingUp, BarChart3, Youtube, MessageCircle, ArrowRight, Star, Zap, Play } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function YoutubeGrowth() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-f-black scroll-smooth">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-[140px] pb-20 bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,242,167,0.1)_0%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-5 md:px-8 w-full relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-f-neon/5 border border-f-neon/30 rounded-full px-4 py-1.5 mb-8">
              <span className="font-mono text-[12px] text-f-neon">{t('yt_hero_eyebrow')}</span>
            </div>
            
            <h1 className="font-display font-bold text-[clamp(48px,8vw,90px)] leading-[0.95] tracking-tight mb-8">
              <span className="block text-f-mint">{t('yt_hero_title_1')}</span>
              <span className="block text-f-mint">{t('yt_hero_title_2')}</span>
              <span className="block text-f-neon text-glow">{t('yt_hero_title_3')}</span>
            </h1>

            <p className="text-f-mint/60 text-[18px] max-w-2xl mx-auto mb-10 leading-relaxed">
              {t('yt_hero_desc')}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[1, 2, 3, 4].map(num => (
                <div key={num} className="bg-f-neon/5 border border-f-neon/20 rounded-full px-4 py-2 font-mono text-[12px] text-f-mint/80">
                  {t(`yt_hero_metric_${num}`)}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#planos" className="bg-f-neon text-f-black font-display font-bold rounded-full px-10 py-5 text-lg hover:glow-neon hover:scale-[1.03] transition-all duration-300">
                {t('yt_hero_cta')}
              </a>
              <a href="#resultados" className="border border-f-neon/30 text-f-neon font-display font-medium rounded-full px-10 py-5 hover:bg-f-neon/10 transition-all duration-300">
                {t('yt_hero_secondary')}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section id="resultados" className="py-28 bg-f-dark border-y border-f-neon/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-20">
            <div className="font-mono text-f-neon/70 mb-6">{t('yt_results_eyebrow')}</div>
            <h2 className="font-display font-bold text-[clamp(32px,5vw,48px)] text-f-mint mb-4">{t('yt_results_title')}</h2>
            <p className="text-[18px] text-f-mint/50">{t('yt_results_subtitle')}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((num) => (
              <AnimatedSection key={num} delay={num * 100}>
                <div className="bg-f-black border border-f-neon/15 rounded-2xl p-8 hover:border-f-neon/40 transition-all group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-f-neon/10 flex items-center justify-center">
                      <BarChart3 className="text-f-neon" size={20} />
                    </div>
                    <h4 className="font-display font-bold text-lg text-f-mint">{t(`yt_case${num}_title`)}</h4>
                  </div>
                  <div className="space-y-3">
                    <p className="text-f-neon font-mono text-sm">{t(`yt_case${num}_stat1`)}</p>
                    <p className="text-f-mint/60 text-sm leading-relaxed">{t(`yt_case${num}_stat2`)}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-28 bg-f-black">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-20 text-center">
            <div className="font-mono text-f-neon/70 mb-6">{t('yt_problem_eyebrow')}</div>
            <h2 className="font-display font-bold text-[clamp(32px,5vw,52px)] text-f-mint mb-8">
              {t('yt_problem_title')}
            </h2>
          </AnimatedSection>

          <div className="space-y-6 mb-20">
            {[1, 2, 3, 4, 5].map((num) => (
              <AnimatedSection key={num} delay={num * 100}>
                <div className="flex gap-4 p-6 bg-f-dark/30 border border-f-neon/10 rounded-2xl">
                  <div className="shrink-0 text-red-500 font-bold">×</div>
                  <p className="text-f-mint/65 text-[16px]">{t(`yt_problem_li${num}`)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <div className="bg-f-neon/5 border border-f-neon/20 rounded-3xl p-10 md:p-16">
              <h3 className="font-display font-bold text-3xl text-f-mint mb-4 italic leading-tight">
                {t('yt_problem_highlight')}
              </h3>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-28 bg-f-dark border-y border-f-neon/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-20 text-center">
            <div className="font-mono text-f-neon/70 mb-6">{t('yt_process_eyebrow')}</div>
            <h2 className="font-display font-bold text-4xl text-f-mint">{t('yt_process_title')}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((num) => (
              <AnimatedSection key={num} delay={num * 150}>
                <div className="bg-f-black border border-f-neon/20 rounded-2xl p-8 h-full">
                  <h4 className="font-display font-bold text-xl text-f-neon mb-4">{t(`yt_step${num}_t`)}</h4>
                  <p className="text-sm text-f-mint/60 leading-relaxed">{t(`yt_step${num}_d`)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES SECTION */}
      <section className="py-28 bg-f-black">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="font-display font-bold text-4xl text-f-mint">{t('yt_deliver_title')}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <AnimatedSection key={num} delay={num * 50}>
                <div className="flex items-center gap-3 p-4 bg-f-dark/30 border border-f-neon/10 rounded-xl">
                  <CheckCircle2 className="text-f-neon shrink-0" size={18} />
                  <span className="text-sm text-f-mint/80">{t(`yt_deliver_li${num}`)}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS SECTION */}
      <section id="planos" className="py-28 bg-f-dark border-y border-f-neon/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-20 text-center">
            <div className="font-mono text-f-neon/70 mb-6">{t('clone_invest_eyebrow')}</div>
            <h2 className="font-display font-bold text-4xl text-f-mint mb-4">{t('yt_invest_title')}</h2>
            <p className="text-f-mint/50 font-mono">Sem contrato anual. Cancela quando quiser.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Plano 1 */}
            <AnimatedSection>
              <div className="bg-f-black border border-f-neon/15 rounded-[32px] p-10 h-full flex flex-col hover:border-f-neon/40 transition-all">
                <h3 className="font-display font-bold text-xl text-f-mint mb-2">{t('yt_plan1_name')}</h3>
                <div className="text-3xl font-display font-bold text-f-neon mb-4">{t('yt_plan1_price')}</div>
                <p className="text-sm text-f-mint/50 mb-8">{t('yt_plan1_desc')}</p>
                <div className="space-y-4 mb-10 flex-grow">
                  <div className="flex items-start gap-3 text-sm text-f-mint/70"><CheckCircle2 className="text-f-neon shrink-0" size={16} /> Estratégia mensal</div>
                  <div className="flex items-start gap-3 text-sm text-f-mint/70"><CheckCircle2 className="text-f-neon shrink-0" size={16} /> SEO em todos os vídeos</div>
                  <div className="flex items-start gap-3 text-sm text-f-mint/70"><CheckCircle2 className="text-f-neon shrink-0" size={16} /> Thumbnails com IA</div>
                  <div className="flex items-start gap-3 text-sm text-f-mint/70"><CheckCircle2 className="text-f-neon shrink-0" size={16} /> Relatório mensal</div>
                </div>
                <a href="https://wa.me/5547999999999" className="w-full py-4 rounded-xl border border-f-neon/30 text-f-neon font-display font-bold text-center hover:bg-f-neon/10 transition-all">Quero este Plano →</a>
              </div>
            </AnimatedSection>

            {/* Plano 2 - Destaque */}
            <AnimatedSection delay={100}>
              <div className="bg-f-dark border-2 border-f-neon rounded-[32px] p-10 h-full flex flex-col relative shadow-[0_0_80px_rgba(80,242,167,0.1)]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-f-neon text-f-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Recomendado</div>
                <h3 className="font-display font-bold text-xl text-f-mint mb-2">{t('yt_plan2_name')}</h3>
                <div className="text-3xl font-display font-bold text-f-neon mb-4">{t('yt_plan2_price')}</div>
                <p className="text-sm text-f-mint/50 mb-8">{t('yt_plan2_desc')}</p>
                <div className="space-y-4 mb-10 flex-grow">
                  <div className="flex items-start gap-3 text-sm text-f-mint/70 font-bold"><Zap className="text-f-neon shrink-0" size={16} /> Tudo do Plano Gestão</div>
                  <div className="flex items-start gap-3 text-sm text-f-mint/70"><CheckCircle2 className="text-f-neon shrink-0" size={16} /> 15 cortes estratégicos/mês</div>
                  <div className="flex items-start gap-3 text-sm text-f-mint/70"><CheckCircle2 className="text-f-neon shrink-0" size={16} /> Legenda animada</div>
                  <div className="flex items-start gap-3 text-sm text-f-mint/70"><CheckCircle2 className="text-f-neon shrink-0" size={16} /> Estratégia de Shorts</div>
                </div>
                <a href="https://wa.me/5547999999999" className="w-full py-4 rounded-xl bg-f-neon text-f-black font-display font-bold text-center hover:glow-neon transition-all">Quero o Completo →</a>
              </div>
            </AnimatedSection>

            {/* Plano 3 */}
            <AnimatedSection delay={200}>
              <div className="bg-f-black border border-f-neon/15 rounded-[32px] p-10 h-full flex flex-col hover:border-f-neon/40 transition-all">
                <h3 className="font-display font-bold text-xl text-f-mint mb-2">{t('yt_plan3_name')}</h3>
                <div className="text-3xl font-display font-bold text-f-neon mb-4">{t('yt_plan3_price')}</div>
                <p className="text-sm text-f-mint/50 mb-8">{t('yt_plan3_desc')}</p>
                <div className="space-y-4 mb-10 flex-grow">
                  <div className="flex items-start gap-3 text-sm text-f-mint/70 font-bold"><Zap className="text-f-neon shrink-0" size={16} /> Tudo dos planos anteriores</div>
                  <div className="flex items-start gap-3 text-sm text-f-mint/70"><CheckCircle2 className="text-f-neon shrink-0" size={16} /> 8 vídeos editados/mês</div>
                  <div className="flex items-start gap-3 text-sm text-f-mint/70"><CheckCircle2 className="text-f-neon shrink-0" size={16} /> Direção criativa + Roteiro</div>
                  <div className="flex items-start gap-3 text-sm text-f-mint/70"><CheckCircle2 className="text-f-neon shrink-0" size={16} /> Edição Cinematográfica com IA</div>
                </div>
                <a href="https://wa.me/5547999999999" className="w-full py-4 rounded-xl border border-f-neon/30 text-f-neon font-display font-bold text-center hover:bg-f-neon/10 transition-all">Quero o Plano Full →</a>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-f-mint/30 font-mono text-[11px] uppercase tracking-widest">Adicionais Avulsos: Vídeo longo R$800 · Corte R$150 · Vídeo curto R$350</p>
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="py-28 bg-f-black">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <AnimatedSection>
                <div className="aspect-[4/5] bg-f-dark rounded-3xl overflow-hidden border border-f-neon/20 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                   <img src="/carlos-borges.png" alt="Carlos Borges" className="w-full h-full object-cover" />
                </div>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-7">
              <AnimatedSection delay={200}>
                <div className="font-mono text-f-neon/70 mb-6">{t('clone_who_eyebrow')}</div>
                <h2 className="font-display font-bold text-4xl text-f-mint mb-2">Carlos Borges</h2>
                <div className="font-display font-medium text-f-neon/80 italic mb-8">Fundador · Foster Company</div>
                <p className="text-f-mint/65 text-[18px] leading-relaxed mb-10">
                  15 anos gerenciando canais que acumulam mais de 1 bilhão de visualizações. Trabalhei com igrejas, ministérios, criadores autorais e empresas — levando canais do zero a centenas de milhares de inscritos com estratégia, dados e inteligência artificial.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-f-neon/5 border border-f-neon/20 rounded-full px-4 py-1.5 font-mono text-xs text-f-neon">[1bi+ views]</span>
                  <span className="bg-f-neon/5 border border-f-neon/20 rounded-full px-4 py-1.5 font-mono text-xs text-f-neon">[700k+ inscritos gerenciados]</span>
                  <span className="bg-f-neon/5 border border-f-neon/20 rounded-full px-4 py-1.5 font-mono text-xs text-f-neon">[15+ anos]</span>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-28 bg-f-dark border-y border-f-neon/10">
        <div className="max-w-4xl mx-auto px-5">
          <AnimatedSection className="mb-20 text-center">
             <h2 className="font-display font-bold text-4xl text-f-mint">{t('clone_faq_eyebrow')}</h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[1, 2, 3].map((num) => (
              <details key={num} className="group bg-f-black/30 border border-f-neon/10 rounded-2xl overflow-hidden">
                <summary className="p-6 cursor-pointer list-none flex justify-between items-center font-display font-bold text-lg text-f-mint group-open:text-f-neon">
                  {t(`yt_faq_q${num}`)}
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6 text-f-mint/60 border-t border-f-neon/5 pt-4">
                  {t(`yt_faq_a${num}`)}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-f-black text-center">
        <AnimatedSection>
           <h2 className="font-display font-bold text-[clamp(40px,6vw,64px)] text-f-mint mb-10">✦ VAGAS LIMITADAS POR MÊS</h2>
           <p className="text-xl text-f-mint/50 mb-12">Gestão profissional de YouTube. A partir de R$3.000/mês.</p>
           <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="bg-f-neon text-f-black font-display font-bold rounded-full px-12 py-6 text-xl hover:glow-neon transition-all">
             Garantir minha vaga →
           </a>
        </AnimatedSection>
      </section>
    </div>
  );
}