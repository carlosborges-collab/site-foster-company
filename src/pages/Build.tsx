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

      {/* ESTÚDIOS */}
      <section className="py-28 bg-f-black bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display font-bold text-[clamp(36px,5vw,56px)] text-f-mint">O estúdio que você sempre quis. Do projeto à instalação.</h2>
          </AnimatedSection>

          {/* Case Destaque */}
          <AnimatedSection delay={100}>
            <div className="bg-f-dark border border-f-neon/20 rounded-3xl p-8 md:p-12 shadow-2xl mb-16">
              <div className="font-mono text-f-neon/70 mb-6">/ case real</div>
              <h3 className="font-display font-bold text-4xl text-f-mint mb-6">Estúdio Rony Meisler, Rio de Janeiro.</h3>
              <p className="text-f-mint/70 text-lg max-w-3xl mb-8">
                Montamos o estúdio profissional no escritório e na residência de Rony Meisler no Rio de Janeiro. Do diagnóstico à instalação completa — câmera, iluminação, acústica e identidade visual do ambiente.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-12">
                {["Rio de Janeiro", "Home + Escritório", "Setup Completo", "Entregue ✓"].map((pill, i) => (
                  <div key={i} className="bg-f-black/50 border border-f-neon/30 text-f-neon font-mono text-xs px-4 py-2 rounded-full">
                    {pill}
                  </div>
                ))}
              </div>

              {/* Galeria */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {["Estúdio Home — Residencial", "Estúdio Corporativo — Escritório", "Estúdio de Podcast", "Estúdio Integrado"].map((label, i) => (
                  <div key={i} className="aspect-square bg-f-black border border-f-neon/20 rounded-xl flex items-center justify-center relative p-4 text-center">
                    <span className="font-mono text-[10px] text-f-mint/30">{label}</span>
                  </div>
                ))}
              </div>
              <div className="w-full aspect-video bg-f-black border border-f-neon/30 rounded-xl flex items-center justify-center relative">
                <span className="font-mono text-[10px] text-f-mint/30">[ tour pelo estúdio 16:9 ]</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Financeiro */}
          <AnimatedSection delay={200}>
            <div className="bg-f-black border border-f-neon rounded-2xl p-8 text-center max-w-3xl mx-auto glow-neon mb-16">
              <div className="font-mono text-sm text-f-mint/60 mb-4">Setup próprio: R$ 3k–15k · Aluguel por 12 meses: R$ 18k–36k</div>
              <div className="font-display font-bold text-2xl text-f-neon">A consultoria Foster se paga em meses.</div>
            </div>
          </AnimatedSection>

          {/* Tipos */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Vídeo", "Podcast", "Corporativo", "Home", "Integrado"].map((tipo, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="bg-f-dark border border-f-neon/15 rounded-xl p-4 text-center font-mono text-sm text-f-mint/80">
                  {tipo}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-f-dark border-t border-f-neon/10">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-f-mint">Perguntas Frequentes</h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              "Qual o espaço mínimo para um estúdio?",
              "Vocês fornecem os equipamentos?",
              "Quanto tempo leva a montagem?",
              "A consultoria inclui treinamento de uso?"
            ].map((q, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-f-black border border-f-neon/15 rounded-xl p-6 cursor-pointer hover:border-f-neon/40 transition-colors">
                  <h3 className="font-display font-medium text-lg text-f-mint">{q}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 bg-f-black text-center border-t border-f-neon/10">
        <div className="max-w-3xl mx-auto px-5">
          <AnimatedSection>
            <h2 className="font-display font-bold text-[clamp(40px,6vw,64px)] text-f-mint mb-10">Seu estúdio. Sua independência criativa.</h2>
            <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="inline-block bg-f-neon text-f-black font-display font-bold rounded-full px-10 py-5 text-lg hover:glow-neon hover:scale-[1.03] transition-all duration-300">
              Falar com a Foster agora →
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
