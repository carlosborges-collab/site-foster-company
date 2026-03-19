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

      {/* SEÇÃO 1: SITES COM IA */}
      <section id="sites" className="py-28 bg-f-dark border-y border-f-neon/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="font-mono text-4xl text-f-neon/50 mb-6">{'</>'}</div>
              <h2 className="font-display font-bold text-[clamp(36px,5vw,52px)] text-f-mint mb-8">
                Sites de Alta Performance <br/><span className="text-f-neon">com IA Nativa.</span>
              </h2>
              <p className="text-lg text-f-mint/70 mb-8 leading-relaxed">
                Não criamos apenas sites bonitos. Desenvolvemos ferramentas de conversão ultra-velozes, integradas com APIs de inteligência artificial para personalizar a experiência de cada visitante em tempo real.
              </p>
              <ul className="space-y-4 font-mono text-sm text-f-mint/60">
                <li className="flex items-center gap-3"><span className="text-f-neon">●</span> SEO Técnico Avançado</li>
                <li className="flex items-center gap-3"><span className="text-f-neon">●</span> Design Mobile-First Exclusivo</li>
                <li className="flex items-center gap-3"><span className="text-f-neon">●</span> Integração iFoster Chat</li>
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="w-full aspect-[4/3] bg-f-black border border-f-neon/20 rounded-2xl p-6 font-mono text-xs text-f-neon/70 overflow-hidden shadow-2xl">
                <div className="mb-2 text-f-mint/40">// Building high-performance site</div>
                <div className="mb-1">class FosterSite extends App {'{'}</div>
                <div className="mb-1 ml-4">constructor() {'{'} super(); {'}'}</div>
                <div className="mb-1 ml-4">optimize() {'{'} return IA.perfect(); {'}'}</div>
                <div className="mb-1">{'}'}</div>
                <div className="mt-8 text-f-neon animate-pulse">_ DEPLOYING TO VERCEL EDGE...</div>
              </div>
            </AnimatedSection>
          </div>
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
            {/* Stratube */}
            <div className="bg-f-dark/50 border border-f-neon/15 rounded-2xl p-8 hover:border-f-neon/50 transition-all group">
              <div className="w-12 h-12 rounded-full bg-f-neon/10 flex items-center justify-center mb-6">
                <span className="font-display font-bold text-xl text-f-neon">S</span>
              </div>
              <h3 className="font-display font-bold text-xl text-f-mint mb-3">Stratube</h3>
              <p className="text-sm text-f-mint/50 mb-6">Plataforma de inteligência e analytics para criadores de YouTube.</p>
              <div className="font-mono text-[10px] text-f-neon uppercase">Status: Ativo ●</div>
            </div>

            {/* Nomes e Marcas */}
            <div className="bg-f-dark/50 border border-f-neon/15 rounded-2xl p-8 hover:border-f-neon/50 transition-all group">
              <div className="w-12 h-12 rounded-full bg-f-neon/10 flex items-center justify-center mb-6">
                <span className="font-display font-bold text-xl text-f-neon">N</span>
              </div>
              <h3 className="font-display font-bold text-xl text-f-mint mb-3">Nomes e Marcas</h3>
              <p className="text-sm text-f-mint/50 mb-6">Ecossistema de branding e naming para novas empresas.</p>
              <div className="font-mono text-[10px] text-f-neon uppercase">Status: Ativo ●</div>
            </div>

            {/* Echowise */}
            <div className="bg-f-dark/50 border border-f-neon/15 rounded-2xl p-8 hover:border-f-neon/50 transition-all group">
              <div className="w-12 h-12 rounded-full bg-f-neon/10 flex items-center justify-center mb-6">
                <span className="font-display font-bold text-xl text-f-neon">E</span>
              </div>
              <h3 className="font-display font-bold text-xl text-f-mint mb-3">Echowise</h3>
              <p className="text-sm text-f-mint/50 mb-6">Tecnologia proprietária Foster para gestão de audiência.</p>
              <div className="font-mono text-[10px] text-f-neon uppercase">Status: Ativo ●</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 bg-f-dark text-center border-t border-f-neon/10">
        <div className="max-w-3xl mx-auto px-5">
          <AnimatedSection>
            <h2 className="font-display font-bold text-[clamp(40px,6vw,64px)] text-f-mint mb-10">Pronto para escalar sua infraestrutura?</h2>
            <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="inline-block bg-f-neon text-f-black font-display font-bold rounded-full px-10 py-5 text-lg hover:glow-neon hover:scale-[1.03] transition-all duration-300">
              Falar com a Foster agora →
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}