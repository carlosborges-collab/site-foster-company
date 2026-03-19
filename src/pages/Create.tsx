import AnimatedSection from '../components/AnimatedSection';

export default function Create() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-[140px] pb-20 bg-f-black overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 md:px-8 w-full relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-f-neon/5 border border-f-neon/40 rounded-full px-4 py-1.5 mb-10">
              <span className="font-mono text-[12px] text-f-neon">◈ Foster Create</span>
            </div>
            
            <h1 className="font-display font-bold text-[clamp(48px,8vw,80px)] leading-[1.0] tracking-tight mb-10">
              <span className="block text-f-mint">Criamos o que sua marca</span>
              <span className="block text-f-mint">precisa existir</span>
              <span className="block text-f-neon text-glow">no digital.</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* AVATAR IA */}
      <section className="py-28 bg-gradient-to-br from-f-black to-f-dark border-y border-f-neon/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-16 text-center">
            <div className="inline-flex bg-f-neon/10 border border-f-neon/30 rounded-full px-4 py-1.5 font-mono text-[11px] text-f-neon mb-6">
              ◈ iFoster Avatar · Produto Estrela
            </div>
            <h2 className="font-display font-bold text-[clamp(36px,5vw,56px)] text-f-mint mb-6 max-w-4xl mx-auto">
              Você em todo lugar. Ao mesmo tempo. Sem aparecer.
            </h2>
            <p className="text-[18px] text-f-mint/60 max-w-3xl mx-auto">
              Clone digital ultra-realista com sua voz, imagem e expressão facial. Tão fiel que ninguém vai perceber.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Visual Tech */}
            <AnimatedSection delay={100}>
              <div className="w-full aspect-square max-w-md mx-auto bg-f-black border border-f-neon/20 rounded-full p-8 relative flex items-center justify-center shadow-[0_0_60px_rgba(80,242,167,0.1)]">
                <div className="absolute inset-0 rounded-full border border-dashed border-f-neon/30 animate-[spin_20s_linear_infinite]"></div>
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-f-neon/20 to-transparent flex items-center justify-center relative overflow-hidden">
                  <div className="flex items-end gap-1.5 h-16 opacity-70">
                    {[40, 70, 40, 90, 60, 30, 80, 50, 60, 40, 70].map((h, i) => (
                      <div key={i} className="w-2 bg-f-neon rounded-full" style={{ height: `${h}%`, animation: `pulse-dot ${1 + i*0.1}s infinite` }}></div>
                    ))}
                  </div>
                </div>
                <div className="absolute top-10 -right-4 bg-f-dark border border-f-neon/30 rounded-full px-4 py-2 font-mono text-[10px] text-f-neon shadow-xl">Voz clonada ✓</div>
                <div className="absolute bottom-20 -left-8 bg-f-dark border border-f-neon/30 rounded-full px-4 py-2 font-mono text-[10px] text-f-neon shadow-xl">Expressão facial ✓</div>
                <div className="absolute -bottom-4 right-10 bg-f-dark border border-f-neon/30 rounded-full px-4 py-2 font-mono text-[10px] text-f-neon shadow-xl">Pronto para gravar ✓</div>
              </div>
            </AnimatedSection>

            {/* Case Destaque */}
            <AnimatedSection delay={200}>
              <div className="bg-f-black/50 border border-f-neon/20 rounded-2xl p-8 md:p-10">
                <h3 className="font-display font-bold text-2xl text-f-mint mb-2">Rony Meisler</h3>
                <div className="font-mono text-xs text-f-neon mb-8">YouTube + Instagram ✓</div>
                <div className="flex gap-4">
                  <div className="w-1/3 aspect-[9/16] bg-f-dark border border-f-neon/30 rounded-xl relative flex items-center justify-center">
                    <span className="font-mono text-[10px] text-f-mint/30">[ 9:16 ]</span>
                  </div>
                  <div className="w-2/3 aspect-video bg-f-dark border border-f-neon/30 rounded-xl relative flex items-center justify-center">
                    <span className="font-mono text-[10px] text-f-mint/30">[ 16:9 ]</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* OUTROS SERVIÇOS */}
      <section className="py-28 bg-f-black bg-grid-pattern">
        <div className="max-w-5xl mx-auto px-5 md:px-8 space-y-8">
          {/* Vídeos */}
          <AnimatedSection>
            <div className="bg-f-dark border border-f-neon/15 rounded-2xl p-8 md:p-12 hover:border-f-neon/40 transition-colors flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 aspect-video bg-f-black border border-f-neon/20 rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-12 h-12 stroke-f-neon/50 fill-none stroke-2">
                  <rect x="2" y="6" width="20" height="12" rx="2" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="font-display font-bold text-3xl text-f-mint mb-4">Vídeos que param o scroll.</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-f-neon/80">
                  <span>YouTube</span><span className="text-f-mint/30">·</span>
                  <span>Reels</span><span className="text-f-mint/30">·</span>
                  <span>Campanhas</span><span className="text-f-mint/30">·</span>
                  <span>Treinamentos</span><span className="text-f-mint/30">·</span>
                  <span>Documentários</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Conteúdo */}
          <AnimatedSection delay={100}>
            <div className="bg-f-dark border border-f-neon/15 rounded-2xl p-8 md:p-12 hover:border-f-neon/40 transition-colors flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-2/3 order-2 md:order-1">
                <h3 className="font-display font-bold text-3xl text-f-mint mb-4">Conteúdo em escala que equipes inteiras não alcançam.</h3>
              </div>
              <div className="w-full md:w-1/3 aspect-video bg-f-black border border-f-neon/20 rounded-xl flex items-center justify-center order-1 md:order-2">
                <div className="font-mono text-4xl text-f-neon/50">{'</>'}</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 bg-f-dark text-center border-t border-f-neon/10">
        <div className="max-w-3xl mx-auto px-5">
          <AnimatedSection>
            <h2 className="font-display font-bold text-[clamp(40px,6vw,64px)] text-f-mint mb-10">Pronto para criar sem limites?</h2>
            <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="inline-block bg-f-neon text-f-black font-display font-bold rounded-full px-10 py-5 text-lg hover:glow-neon hover:scale-[1.03] transition-all duration-300">
              Falar com a Foster agora →
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}