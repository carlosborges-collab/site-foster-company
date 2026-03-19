"use client";

import AnimatedSection from '../components/AnimatedSection';

export default function Build() {
  return (
    <div className="w-full scroll-smooth">
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center pt-[140px] pb-20 bg-f-black overflow-hidden bg-grid-pattern">
        <div className="max-w-5xl mx-auto px-5 md:px-8 w-full relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-f-neon/5 border border-f-neon/40 rounded-full px-4 py-1.5 mb-10">
              <span className="font-mono text-[12px] text-f-neon">⬡ Foster Build</span>
            </div>
            
            <h1 className="font-display font-bold text-[clamp(48px,8vw,80px)] leading-[1.0] tracking-tight mb-10">
              <span className="block text-f-mint">Construímos a infraestrutura</span>
              <span className="block text-f-mint">digital que sua marca</span>
              <span className="block text-f-neon text-glow">precisa.</span>
            </h1>
            <p className="text-f-mint/60 text-lg max-w-2xl mx-auto">
              Desenvolvimento de alta performance, de landing pages exclusivas a ecossistemas complexos integrados com IA.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SEÇÃO 2: PLATAFORMAS DIGITAIS */}
      <section id="plataformas" className="py-28 bg-f-black scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-20">
            <h2 className="font-display font-bold text-[clamp(36px,5vw,52px)] text-f-mint mb-6">
              Ecossistemas e Plataformas.
            </h2>
            <p className="text-[18px] text-f-mint/60 max-w-3xl">
              Desenvolvemos produtos digitais do zero. Dashboards, sistemas de gestão e plataformas de conteúdo que escalam junto com seu negócio.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stratube 2.0 */}
            <div className="bg-f-dark/50 border border-f-neon/15 rounded-2xl p-8 hover:border-f-neon/50 transition-all group flex flex-col h-full">
              <div className="w-12 h-12 rounded-full bg-f-neon/10 flex items-center justify-center mb-6">
                <span className="font-display font-bold text-xl text-f-neon">S</span>
              </div>
              <h3 className="font-display font-bold text-xl text-f-mint mb-3">Stratube 2.0</h3>
              <p className="text-sm text-f-mint/50 mb-6 flex-grow">Inteligência estratégica para YouTube. Pesquisa dados em tempo real para decisões acionáveis para criadores e agências.</p>
              <div className="font-mono text-[10px] text-f-neon uppercase">Categoria: YouTube Analytics & SEO ●</div>
            </div>

            {/* Nomes & Marcas */}
            <div className="bg-f-dark/50 border border-f-neon/15 rounded-2xl p-8 hover:border-f-neon/50 transition-all group flex flex-col h-full">
              <div className="w-12 h-12 rounded-full bg-f-neon/10 flex items-center justify-center mb-6">
                <span className="font-display font-bold text-xl text-f-neon">N</span>
              </div>
              <h3 className="font-display font-bold text-xl text-f-mint mb-3">Nomes & Marcas</h3>
              <p className="text-sm text-f-mint/50 mb-6 flex-grow">Plataforma inteligente de registro de marcas. Análise baseada em toda a base histórica do INPI com score de viabilidade.</p>
              <div className="font-mono text-[10px] text-f-neon uppercase">Categoria: Propriedade Intelectual ●</div>
            </div>

            {/* Echowise AI */}
            <div className="bg-f-dark/50 border border-f-neon/15 rounded-2xl p-8 hover:border-f-neon/50 transition-all group flex flex-col h-full">
              <div className="w-12 h-12 rounded-full bg-f-neon/10 flex items-center justify-center mb-6">
                <span className="font-display font-bold text-xl text-f-neon">E</span>
              </div>
              <h3 className="font-display font-bold text-xl text-f-mint mb-3">Echowise AI</h3>
              <p className="text-sm text-f-mint/50 mb-6 flex-grow">Experts criam seu clone digital com IA para atender, educar e engajar o público 24h por dia.</p>
              <div className="font-mono text-[10px] text-f-neon uppercase">Categoria: Marketplace de Experts ●</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 bg-f-dark text-center border-t border-f-neon/10">
        <div className="max-w-3xl mx-auto px-5">
          <AnimatedSection>
            <h2 className="font-display font-bold text-[clamp(40px,6vw,64px)] text-f-mint mb-10">Pronto para escalar sua infraestrutura?</h2>
            <a href="https://wa.me/5547992520857" target="_blank" rel="noopener noreferrer" className="inline-block bg-f-neon text-f-black font-display font-bold rounded-full px-10 py-5 text-lg hover:glow-neon hover:scale-[1.03] transition-all duration-300">
              Falar com a Foster agora →
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}