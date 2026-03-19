import AnimatedSection from '../components/AnimatedSection';

export default function Build() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-[140px] pb-20 bg-f-black overflow-hidden">
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
          </AnimatedSection>
        </div>
      </section>

      {/* SITES & PLATAFORMAS */}
      <section className="py-28 bg-f-dark border-y border-f-neon/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-f-black border border-f-neon/15 rounded-2xl p-10 h-full hover:border-f-neon/40 transition-colors">
                <div className="font-mono text-4xl text-f-neon/50 mb-6">{'</>'}</div>
                <h3 className="font-display font-bold text-3xl text-f-mint mb-4">Sites com IA</h3>
                <p className="text-f-mint/60 mb-8">Desenvolvimento web de alta performance com integração nativa de inteligência artificial para personalização e automação.</p>
                <div className="w-full h-32 bg-f-dark border border-f-neon/20 rounded-xl p-4 font-mono text-xs text-f-neon/70 overflow-hidden">
                  <div>const site = new FosterSite();</div>
                  <div>await site.deploy();</div>
                  <div className="text-f-mint/40">// Status: Online</div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <div className="bg-f-black border border-f-neon/15 rounded-2xl p-10 h-full hover:border-f-neon/40 transition-colors">
                <div className="font-mono text-4xl text-f-neon/50 mb-6">{'[ ]'}</div>
                <h3 className="font-display font-bold text-3xl text-f-mint mb-4">Plataformas Digitais</h3>
                <p className="text-f-mint/60 mb-8">Sistemas complexos, dashboards e aplicações web sob medida para escalar a operação do seu negócio.</p>
                <div className="w-full h-32 bg-f-dark border border-f-neon/20 rounded-xl p-4 flex flex-col gap-2">
                  <div className="w-full h-4 bg-f-neon/10 rounded"></div>
                  <div className="w-3/4 h-4 bg-f-neon/10 rounded"></div>
                  <div className="w-1/2 h-4 bg-f-neon/10 rounded"></div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 bg-f-black text-center border-t border-f-neon/10">
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