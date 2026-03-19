"use client";

import AnimatedSection from '../components/AnimatedSection';

export default function Channels() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center pt-[100px] md:pt-[140px] pb-20 bg-f-black bg-grid-pattern bg-noise overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(80,242,167,0.15)_0%,transparent_100%)]"></div>
        
        <div className="max-w-5xl mx-auto px-5 md:px-8 w-full relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-f-neon/5 border border-f-neon/40 rounded-full px-4 py-1.5 mb-8 md:mb-10 shadow-[0_0_15px_rgba(80,242,167,0.2)]">
              <span className="font-mono text-[11px] md:text-[12px] text-f-neon">▶ Canais Próprios</span>
            </div>
            
            <h1 className="font-display font-bold text-[clamp(32px,8vw,80px)] leading-[1.0] tracking-tight mb-8 md:mb-10">
              <span className="block text-f-mint">A Foster como criadora.</span>
              <span className="block text-f-neon text-glow">Não só como gestora.</span>
            </h1>

            <p className="text-f-mint/70 text-[16px] md:text-[18px] font-light max-w-3xl mx-auto leading-[1.55]">
              Canais que criamos, operamos e crescemos com nossa própria metodologia. Cada um é uma prova do que entregamos para nossos clientes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SEÇÃO 1: CANAIS ATIVOS */}
      <section className="py-20 md:py-28 bg-f-dark border-y border-f-neon/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-12 md:mb-16">
            <h2 className="font-display font-bold text-[clamp(28px,4vw,48px)] text-f-mint mb-4">Canais em operação.</h2>
            <p className="text-[15px] md:text-[17px] text-f-mint/60 max-w-2xl">Laboratórios criativos e portfólio vivo da Foster Company.</p>
          </AnimatedSection>

          <div className="flex flex-col gap-16 md:gap-24">
            {/* Canal Fatos da Bíblia */}
            <AnimatedSection>
              <div className="flex flex-col gap-8">
                <div className="w-full text-left">
                  <div className="inline-block bg-[#50F2A7]/10 border border-[#50F2A7]/35 rounded-full px-4 py-1.5 font-display font-semibold text-[12px] text-[#50F2A7] mb-6">
                    🚀 De zero a monetizado em menos de 30 dias
                  </div>
                  <h3 className="font-display font-bold text-[clamp(24px,4vw,40px)] text-[#E1F2DF] leading-[1.1] mb-4">
                    Fatos da Bíblia<br />
                    <span className="text-[#50F2A7]">em menos de 30 dias.</span>
                  </h3>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 md:gap-12 items-start">
                  <div className="w-full lg:w-[45%] flex flex-col gap-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                      <div className="bg-[#104037]/60 border border-[#50F2A7]/12 rounded-xl p-4 text-center">
                        <div className="font-display font-bold text-2xl md:text-3xl text-[#50F2A7]">~5k</div>
                        <div className="font-body text-[10px] text-[#E1F2DF]/50 uppercase mt-1 tracking-widest">Inscritos</div>
                      </div>
                      <div className="bg-[#104037]/60 border border-[#50F2A7]/12 rounded-xl p-4 text-center">
                        <div className="font-display font-bold text-2xl md:text-3xl text-[#50F2A7]">1</div>
                        <div className="font-body text-[10px] text-[#E1F2DF]/50 uppercase mt-1 tracking-widest">Semana</div>
                      </div>
                      <div className="bg-[#104037]/60 border border-[#50F2A7]/12 rounded-xl p-4 text-center col-span-2 sm:col-span-1">
                        <div className="font-display font-bold text-2xl md:text-3xl text-[#50F2A7]">100%</div>
                        <div className="font-body text-[10px] text-[#E1F2DF]/50 uppercase mt-1 tracking-widest">IA</div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-sm text-[#E1F2DF]/65">
                        <span className="text-[#50F2A7] mt-0.5">▸</span>
                        <span>Crescimento orgânico — zero anúncios</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-[#E1F2DF]/65">
                        <span className="text-[#50F2A7] mt-0.5">▸</span>
                        <span>Produção automatizada com IA</span>
                      </li>
                    </ul>
                  </div>

                  <div className="w-full lg:w-[55%]">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="aspect-video bg-f-black rounded-xl overflow-hidden border border-f-neon/20 shadow-2xl">
                        <iframe src="https://www.youtube.com/embed/9ABhVatBQz4" className="w-full h-full" allowFullScreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col sm:flex-row justify-start gap-4 mt-4">
                  <a href="https://www.youtube.com/@fatos.dabiblia" target="_blank" className="w-full sm:w-auto bg-[#50F2A7] text-[#030D09] font-display font-semibold rounded-full px-8 py-4 text-center hover:glow-neon transition-all">
                    Ver Canal →
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}