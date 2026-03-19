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
    <div className="w-full scroll-smooth">
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center pt-[140px] pb-20 bg-f-black overflow-hidden">
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
          </AnimatedSection>
        </div>
      </section>

      {/* SEÇÃO 1: GESTÃO DE YOUTUBE */}
      <section id="gestao" className="py-28 bg-f-dark border-y border-f-neon/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-16">
            <div className="font-mono text-f-neon/70 mb-6">/ gestão total · YouTube Grow</div>
            <h2 className="font-display font-bold text-[clamp(40px,6vw,64px)] text-f-mint mb-4">
              De 100.000 para 700.000 inscritos.
            </h2>
            <p className="text-xl text-f-mint/60 max-w-2xl">O case Viviane Martinello sob gestão Foster Company.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection id="counter-trigger">
              <div className="bg-f-black border border-f-neon/20 rounded-2xl p-8 md:p-12 shadow-2xl">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="font-display font-bold text-4xl text-f-mint/30 line-through">100k</span>
                  <span className="font-display font-bold text-[clamp(64px,8vw,96px)] text-f-neon text-glow-sm">{count}k+</span>
                </div>
                <div className="w-full h-2 bg-f-dark rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-f-neon rounded-full transition-all duration-[2000ms] ease-out" style={{ width: count >= 700 ? '100%' : '15%' }}></div>
                </div>
                <div className="font-mono text-sm text-f-neon text-right">Crescimento de +600%</div>
              </div>
            </AnimatedSection>

            <div className="space-y-6">
              <div className="bg-f-black/50 border border-f-neon/15 rounded-xl p-6 flex items-center gap-6">
                <div className="font-display font-bold text-4xl text-f-neon">+600%</div>
                <div className="font-mono text-xs text-f-mint/60 uppercase tracking-widest">Inscritos</div>
              </div>
              <div className="bg-f-black/50 border border-f-neon/15 rounded-xl p-6 flex items-center gap-6">
                <div className="font-display font-bold text-4xl text-f-neon">1 sem.</div>
                <div className="font-mono text-xs text-f-mint/60 uppercase tracking-widest">Para Monetizar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: MENTORIA 3PS */}
      <section id="mentoria" className="py-28 bg-f-black scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="font-display font-bold text-[clamp(36px,5vw,56px)] text-f-mint mb-6">O Método 3Ps.</h2>
            <p className="text-[18px] text-f-mint/60 max-w-3xl mx-auto">
              Posicionamento, Personalidade e Perspectiva. A base para líderes que querem ser referência.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Posicionamento", desc: "Onde você se coloca no mercado." },
              { title: "Personalidade", desc: "Sua voz única e autêntica." },
              { title: "Perspectiva", desc: "Para onde você leva sua audiência." }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-f-dark border border-f-neon/20 rounded-2xl p-10 text-center hover:-translate-y-2 transition-transform">
                  <div className="font-display font-bold text-5xl text-f-neon mb-6">P{i+1}</div>
                  <h3 className="font-display font-bold text-2xl text-f-mint mb-3">{item.title}</h3>
                  <p className="text-f-mint/60 text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: POSICIONAMENTO DIGITAL */}
      <section id="posicionamento" className="py-28 bg-f-dark border-t border-f-neon/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <AnimatedSection className="w-full lg:w-1/2">
              <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] text-f-mint mb-8">
                Referência, não apenas presença.
              </h2>
              <p className="text-lg text-f-mint/70 mb-8 leading-relaxed">
                A estratégia de posicionamento digital da Foster foca em transformar criadores e líderes em autoridades inquestionáveis em seus nichos.
              </p>
              <div className="space-y-4">
                {['Estratégia de Linha Editorial', 'Análise de Audiência', 'Otimização de Retenção'].map(item => (
                  <div key={item} className="flex items-center gap-3 text-f-mint/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-f-neon"></div>
                    {item}
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <div className="w-full lg:w-1/2 aspect-video bg-f-black border border-f-neon/20 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 bg-f-black text-center border-t border-f-neon/10">
        <div className="max-w-3xl mx-auto px-5">
          <AnimatedSection>
            <h2 className="font-display font-bold text-[clamp(40px,6vw,64px)] text-f-mint mb-10">Onde você quer chegar?</h2>
            <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="inline-block bg-f-neon text-f-black font-display font-bold rounded-full px-10 py-5 text-lg hover:glow-neon hover:scale-[1.03] transition-all duration-300">
              Falar com a Foster agora →
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}