import { useEffect, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

export default function Grow() {
  const [count, setCount] = useState(100);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 100;
          const end = 700;
          const duration = 2000;
          const stepTime = Math.abs(Math.floor(duration / (end - start)));
          
          const timer = setInterval(() => {
            start += 10;
            setCount(start);
            if (start >= end) {
              clearInterval(timer);
              setCount(end);
            }
          }, stepTime);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const el = document.getElementById('counter-trigger');
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-[140px] pb-20 bg-f-black overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 md:px-8 w-full relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-f-neon/5 border border-f-neon/40 rounded-full px-4 py-1.5 mb-10">
              <span className="font-mono text-[12px] text-f-neon">▲ Foster Grow</span>
            </div>
            
            <h1 className="font-display font-bold text-[clamp(48px,8vw,80px)] leading-[1.0] tracking-tight mb-10">
              <span className="block text-f-mint">Sua presença digital.</span>
              <span className="block text-f-mint">Crescendo todos os dias.</span>
              <span className="block text-f-neon text-glow">Com estratégia.</span>
            </h1>

            <p className="text-f-mint/70 text-[18px] font-light max-w-3xl mx-auto mb-12 leading-[1.55]">
              Gestão completa de YouTube, mentoria de posicionamento e estratégia digital. Já geramos +1 bilhão de visualizações para nossos parceiros.
            </p>

            <div className="inline-block bg-f-dark border border-f-neon/30 text-f-mint font-mono text-sm px-6 py-3 rounded-full shadow-[0_0_15px_rgba(80,242,167,0.15)]">
              ⚡ Ativamos monetização em canais em apenas 1 semana
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CASE VIVIANE MARTINELLO */}
      <section className="py-28 bg-f-dark border-y border-f-neon/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-16">
            <div className="font-mono text-f-neon/70 mb-6">/ case nacional · Crescimento Orgânico</div>
            <div className="inline-flex bg-f-neon/10 border border-f-neon/20 rounded-full px-3 py-1 font-mono text-[11px] text-f-neon mb-6 w-fit">🏆 Top Igrejas Brasil</div>
            <h2 className="font-display font-bold text-[clamp(40px,6vw,64px)] text-f-mint mb-4">
              De 100.000 para 700.000 inscritos.
            </h2>
            <p className="text-xl text-f-mint/60 max-w-2xl">Em 2 anos. Sob gestão total da Foster Company.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Esquerda - Números */}
            <AnimatedSection delay={100} id="counter-trigger">
              <div className="bg-f-black border border-f-neon/20 rounded-2xl p-8 md:p-12 shadow-2xl">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="font-display font-bold text-4xl text-f-mint/30 line-through">100k</span>
                  <span className="font-display font-bold text-[clamp(64px,8vw,96px)] text-f-neon text-glow-sm">{count}k+</span>
                </div>

                <div className="font-mono text-xs text-f-mint/50 flex justify-between mb-4">
                  <span>100k · 2022</span>
                  <span>700k+ · 2024</span>
                </div>
                <div className="w-full h-2 bg-f-dark rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-f-neon rounded-full transition-all duration-[2000ms] ease-out" style={{ width: count >= 700 ? '100%' : '15%' }}></div>
                </div>
                <div className="font-mono text-sm text-f-neon text-right mb-12">Crescimento de +600%</div>

                <div className="space-y-4 font-mono text-xs text-f-mint/60">
                  <div className="flex gap-4"><span className="text-f-neon w-16">[2022]</span> Início</div>
                  <div className="flex gap-4"><span className="text-f-neon w-16">[2023]</span> Monetização ativa</div>
                  <div className="flex gap-4"><span className="text-f-neon w-16">[2024]</span> 700k inscritos</div>
                  <div className="flex gap-4"><span className="text-f-neon w-16">[hoje]</span> Top igrejas BR</div>
                </div>
              </div>
            </AnimatedSection>

            {/* Direita - Cards */}
            <AnimatedSection delay={200}>
              <div className="space-y-6">
                <div className="bg-f-black/50 border border-f-neon/15 rounded-xl p-6 flex items-center gap-6">
                  <div className="font-display font-bold text-4xl text-f-neon">+600%</div>
                  <div className="font-mono text-xs text-f-mint/60 uppercase">crescimento em inscritos</div>
                </div>
                <div className="bg-f-black/50 border border-f-neon/15 rounded-xl p-6 flex items-center gap-6">
                  <div className="font-display font-bold text-4xl text-f-neon">2 anos</div>
                  <div className="font-mono text-xs text-f-mint/60 uppercase">para o top nacional</div>
                </div>
                <div className="bg-f-black/50 border border-f-neon/15 rounded-xl p-6 flex items-center gap-6">
                  <div className="font-display font-bold text-4xl text-f-neon">1 sem.</div>
                  <div className="font-mono text-xs text-f-mint/60 uppercase">monetização ativa</div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Área de Mídia */}
          <AnimatedSection delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 aspect-video bg-f-black border border-f-neon/30 rounded-xl relative flex items-center justify-center group overflow-hidden">
                <div className="absolute top-4 left-4 bg-f-dark/80 backdrop-blur text-f-mint font-mono text-[10px] px-3 py-1 rounded-full z-10 border border-f-neon/20">
                  Abba Pai Church
                </div>
                <div className="w-16 h-16 rounded-full bg-f-neon/20 flex items-center justify-center group-hover:scale-110 transition-transform z-10">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-f-neon border-b-[8px] border-b-transparent ml-1"></div>
                </div>
                {/* <iframe src="..." /> */}
              </div>
              <div className="grid grid-rows-2 gap-4">
                <div className="aspect-video bg-f-black border border-f-neon/30 rounded-xl relative flex items-center justify-center group overflow-hidden">
                  <div className="w-12 h-12 rounded-full bg-f-neon/20 flex items-center justify-center group-hover:scale-110 transition-transform z-10">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-f-neon border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="aspect-video bg-f-black border border-f-neon/30 rounded-xl relative flex items-center justify-center group overflow-hidden">
                  <div className="w-12 h-12 rounded-full bg-f-neon/20 flex items-center justify-center group-hover:scale-110 transition-transform z-10">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-f-neon border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CANAIS */}
      <section className="py-28 bg-f-black bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-16">
            <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] text-f-mint">Canais que já fazem história.</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Viviane Martinello", desc: "De 100k a 700k em 2 anos. Um dos maiores canais de igrejas do Brasil." },
              { name: "Abba Pai Church", desc: "Case nacional de crescimento orgânico no segmento religioso." },
              { name: "Rony Meisler", desc: "Canal de liderança e empreendedorismo." },
              { name: "Unesc TV", desc: "Canal universitário institucional." }
            ].map((canal, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-f-dark border border-f-neon/15 rounded-xl p-8 hover:border-f-neon/40 transition-colors">
                  <h3 className="font-display font-bold text-2xl text-f-mint mb-3">{canal.name}</h3>
                  <p className="text-f-mint/60 text-[15px]">{canal.desc}</p>
                </div>
              </AnimatedSection>
            ))}
            <AnimatedSection delay={400} className="md:col-span-2">
              <div className="bg-f-neon/5 border border-f-neon/20 rounded-xl p-6 text-center font-mono text-sm text-f-neon">
                + outros parceiros nacionais
              </div>
            </AnimatedSection>

            <AnimatedSection delay={500} className="md:col-span-2 mt-8">
              <div className="font-mono text-[10px] text-[#E1F2DF]/30 mb-4">/ canal próprio Foster</div>
              <div className="bg-[#104037]/40 border border-[#50F2A7]/20 rounded-xl p-8 hover:border-[#50F2A7]/50 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h3 className="font-display font-bold text-2xl text-[#E1F2DF] mb-2">Fatos da Bíblia — Canal Próprio</h3>
                  <p className="text-[#E1F2DF]/60 text-[15px] mb-3">De zero a ~5k inscritos e monetizado em 30 dias. Produção 100% IA.</p>
                  <div className="font-mono text-[10px] text-[#50F2A7]/70 bg-[#50F2A7]/10 px-3 py-1 rounded-full inline-block">Foster Create · Foster Grow · IA</div>
                </div>
                <a href="https://www.youtube.com/@fatos.dabiblia" target="_blank" rel="noopener noreferrer" className="font-display font-medium text-[14px] text-[#50F2A7] hover:underline underline-offset-4 whitespace-nowrap">
                  Ver canal →
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-28 bg-f-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-16">
            <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] text-f-mint">O que está incluído na gestão.</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Estratégia", "Roteiro & Produção", "SEO & Thumbnails", "Relatório Mensal"].map((servico, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-f-black/50 border border-f-neon/15 rounded-xl p-6 text-center h-full flex items-center justify-center">
                  <h3 className="font-display font-medium text-lg text-f-mint">{servico}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTODO 3Ps */}
      <section className="py-28 bg-f-black">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="font-display font-bold text-[clamp(36px,5vw,56px)] text-f-mint mb-6">Posicionamento, Personalidade e Perspectiva.</h2>
            <p className="text-[18px] text-f-mint/60 max-w-3xl mx-auto">
              O Método 3Ps de Carlos Borges — para líderes que querem ser referência, não apenas presença.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { p: "P1", title: "Posicionamento", desc: "onde você se coloca no mercado" },
              { p: "P2", title: "Personalidade", desc: "sua voz única que ninguém tem" },
              { p: "P3", title: "Perspectiva", desc: "para onde você está levando sua audiência" }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-f-dark border border-f-neon/20 rounded-2xl p-10 text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="font-display font-bold text-5xl text-f-neon mb-6">{item.p}</div>
                  <h3 className="font-display font-bold text-2xl text-f-mint mb-3">{item.title}</h3>
                  <p className="text-f-mint/60 font-mono text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300}>
            <div className="bg-f-neon text-f-black rounded-2xl p-10 md:p-16 text-center shadow-[0_0_40px_rgba(80,242,167,0.15)]">
              <h3 className="font-display font-bold text-[clamp(24px,4vw,36px)] mb-6 leading-[1.2]">
                "Posicionamento não é o que você faz. É o que as pessoas sentem quando pensam em você."
              </h3>
              <p className="font-mono text-sm font-bold opacity-70">— Carlos Borges</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 bg-f-dark text-center border-t border-f-neon/10">
        <div className="max-w-3xl mx-auto px-5">
          <AnimatedSection>
            <h2 className="font-display font-bold text-[clamp(40px,6vw,64px)] text-f-mint mb-10">De 100k para 700k. E você, onde quer chegar?</h2>
            <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="inline-block bg-f-neon text-f-black font-display font-bold rounded-full px-10 py-5 text-lg hover:glow-neon hover:scale-[1.03] transition-all duration-300">
              Falar com a Foster agora →
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
