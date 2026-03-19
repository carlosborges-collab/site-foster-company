import AnimatedSection from '../components/AnimatedSection';

export default function Platforms() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-[140px] pb-20 bg-f-black overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(80,242,167,0.15)_0%,transparent_100%)]"></div>
        
        <div className="max-w-5xl mx-auto px-5 md:px-8 w-full relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-f-neon/5 border border-f-neon/40 rounded-full px-4 py-1.5 mb-10 shadow-[0_0_15px_rgba(80,242,167,0.2)]">
              <span className="font-mono text-[12px] text-f-neon">⬡ Ecossistema Foster</span>
            </div>
            
            <h1 className="font-display font-bold text-[clamp(48px,8vw,80px)] leading-[1.0] tracking-tight mb-10">
              <span className="block text-f-mint">Plataformas que nasceram</span>
              <span className="block text-f-neon text-glow">dentro da Foster.</span>
            </h1>

            <p className="text-f-mint/70 text-[18px] font-light max-w-3xl mx-auto leading-[1.55]">
              Cada produto é fruto de anos de experiência criativa e tecnológica — desenvolvido para resolver problemas reais do mercado digital.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* PLATAFORMA 1: STRATUBE */}
      <section className="py-28 bg-f-dark border-y border-f-neon/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <AnimatedSection>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-f-neon/10 border border-f-neon/30 flex items-center justify-center">
                    <span className="font-display font-bold text-3xl text-f-neon">S</span>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-f-neon mb-1">● Ativo</div>
                    <div className="inline-block bg-f-black/50 border border-f-neon/20 rounded-full px-3 py-1 font-mono text-[10px] text-f-mint/70">
                      YouTube · Analytics
                    </div>
                  </div>
                </div>
                
                <h2 className="font-display font-bold text-[clamp(36px,5vw,48px)] text-f-mint mb-6">Stratube</h2>
                
                <p className="text-[17px] text-f-mint/70 mb-8 leading-[1.55]">
                  {/* CARLOS: adicione aqui a descrição completa do Stratube */}
                  [Descrição completa da plataforma Stratube. Explique o problema que ela resolve, como funciona e qual o diferencial no mercado.]
                </p>

                <ul className="space-y-4 mb-10">
                  {/* CARLOS: adicione as features principais do Stratube */}
                  {[
                    "[Feature 1 detalhada]",
                    "[Feature 2 detalhada]",
                    "[Feature 3 detalhada]"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-f-mint/80">
                      <span className="text-f-neon mt-0.5">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* URL: substitua pelo link real do Stratube */}
                <a href="[URL]" target="_blank" rel="noopener noreferrer" className="inline-block bg-f-neon text-f-black font-display font-semibold rounded-full px-8 py-4 hover:glow-neon hover:scale-[1.02] transition-all duration-300">
                  Acessar plataforma →
                </a>
              </AnimatedSection>
            </div>

            <div className="order-1 lg:order-2">
              <AnimatedSection delay={200}>
                <div className="w-full aspect-[4/3] bg-f-black border border-f-neon/20 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-[0_0_40px_rgba(80,242,167,0.1)] group">
                  <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
                  <span className="font-mono text-xs text-f-mint/30 z-10">[ Screenshot Stratube ]</span>
                  {/* Screenshot: <img src="screenshot-stratube.jpg" className="absolute inset-0 w-full h-full object-cover rounded-2xl" alt="Stratube Dashboard" /> */}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* PLATAFORMA 2: NOMES E MARCAS */}
      <section className="py-28 bg-f-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1">
              <AnimatedSection>
                <div className="w-full aspect-[4/3] bg-f-dark border border-f-neon/20 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-[0_0_40px_rgba(80,242,167,0.1)] group">
                  <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
                  <span className="font-mono text-xs text-f-mint/30 z-10">[ Screenshot Nomes e Marcas ]</span>
                  {/* Screenshot: <img src="screenshot-nomes-marcas.jpg" className="absolute inset-0 w-full h-full object-cover rounded-2xl" alt="Nomes e Marcas" /> */}
                </div>
              </AnimatedSection>
            </div>

            <div className="order-2 lg:order-2">
              <AnimatedSection delay={200}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-f-neon/10 border border-f-neon/30 flex items-center justify-center">
                    <span className="font-display font-bold text-3xl text-f-neon">N</span>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-f-neon mb-1">● Ativo</div>
                    <div className="inline-block bg-f-dark/50 border border-f-neon/20 rounded-full px-3 py-1 font-mono text-[10px] text-f-mint/70">
                      Branding · Naming
                    </div>
                  </div>
                </div>
                
                <h2 className="font-display font-bold text-[clamp(36px,5vw,48px)] text-f-mint mb-6">Nomes e Marcas</h2>
                
                <p className="text-[17px] text-f-mint/70 mb-8 leading-[1.55]">
                  {/* CARLOS: adicione aqui a descrição completa do Nomes e Marcas */}
                  [Descrição completa da plataforma Nomes e Marcas. Explique o problema que ela resolve, como funciona e qual o diferencial no mercado.]
                </p>

                <ul className="space-y-4 mb-10">
                  {/* CARLOS: adicione as features principais do Nomes e Marcas */}
                  {[
                    "[Feature 1 detalhada]",
                    "[Feature 2 detalhada]",
                    "[Feature 3 detalhada]"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-f-mint/80">
                      <span className="text-f-neon mt-0.5">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* URL: substitua pelo link real do Nomes e Marcas */}
                <a href="[URL]" target="_blank" rel="noopener noreferrer" className="inline-block bg-f-neon text-f-black font-display font-semibold rounded-full px-8 py-4 hover:glow-neon hover:scale-[1.02] transition-all duration-300">
                  Acessar plataforma →
                </a>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* PLATAFORMA 3: ECHOWISE */}
      <section className="py-28 bg-f-dark border-y border-f-neon/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <AnimatedSection>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-f-neon/10 border border-f-neon/30 flex items-center justify-center">
                    <span className="font-display font-bold text-3xl text-f-neon">E</span>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-f-neon mb-1">● Ativo</div>
                    <div className="inline-block bg-f-black/50 border border-f-neon/20 rounded-full px-3 py-1 font-mono text-[10px] text-f-mint/70">
                      [categoria a definir]
                    </div>
                  </div>
                </div>
                
                <h2 className="font-display font-bold text-[clamp(36px,5vw,48px)] text-f-mint mb-6">Echowise</h2>
                
                <p className="text-[17px] text-f-mint/70 mb-8 leading-[1.55]">
                  {/* CARLOS: adicione aqui a descrição completa do Echowise */}
                  [Descrição completa da plataforma Echowise. Explique o problema que ela resolve, como funciona e qual o diferencial no mercado.]
                </p>

                <ul className="space-y-4 mb-10">
                  {/* CARLOS: adicione as features principais do Echowise */}
                  {[
                    "[Feature 1 detalhada]",
                    "[Feature 2 detalhada]",
                    "[Feature 3 detalhada]"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-f-mint/80">
                      <span className="text-f-neon mt-0.5">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* URL: substitua pelo link real do Echowise */}
                <a href="[URL]" target="_blank" rel="noopener noreferrer" className="inline-block bg-f-neon text-f-black font-display font-semibold rounded-full px-8 py-4 hover:glow-neon hover:scale-[1.02] transition-all duration-300">
                  Acessar plataforma →
                </a>
              </AnimatedSection>
            </div>

            <div className="order-1 lg:order-2">
              <AnimatedSection delay={200}>
                <div className="w-full aspect-[4/3] bg-f-black border border-f-neon/20 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-[0_0_40px_rgba(80,242,167,0.1)] group">
                  <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
                  <span className="font-mono text-xs text-f-mint/30 z-10">[ Screenshot Echowise ]</span>
                  {/* Screenshot: <img src="screenshot-echowise.jpg" className="absolute inset-0 w-full h-full object-cover rounded-2xl" alt="Echowise" /> */}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 bg-f-black text-center">
        <div className="max-w-3xl mx-auto px-5">
          <AnimatedSection>
            <h2 className="font-display font-bold text-[clamp(40px,6vw,64px)] text-f-mint mb-10">Quer uma plataforma como essa? A Foster desenvolve.</h2>
            <a href="#build" className="inline-block bg-f-neon text-f-black font-display font-bold rounded-full px-10 py-5 text-lg hover:glow-neon hover:scale-[1.03] transition-all duration-300">
              Conhecer Foster Build →
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
