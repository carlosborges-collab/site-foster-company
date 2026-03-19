import { useEffect, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Play, FileText, MousePointerClick, Target, CheckCircle2 } from 'lucide-react';

export default function Create() {
  const [progress, setProgress] = useState(0);
  const [playFatos, setPlayFatos] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgress(100);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const el = document.getElementById('timeline-trigger');
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Load Instagram script for portfolio
    if (!(window as any).instgrm) {
      const script = document.createElement('script');
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="w-full scroll-smooth">
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center pt-[140px] pb-20 bg-f-black overflow-hidden bg-grid-pattern">
        <div className="max-w-5xl mx-auto px-5 md:px-8 w-full relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-f-neon/5 border border-f-neon/40 rounded-full px-4 py-1.5 mb-10">
              <span className="font-mono text-[12px] text-f-neon">◈ Foster Create</span>
            </div>
            
            <h1 className="font-display font-bold text-[clamp(48px,8vw,80px)] leading-[1.0] tracking-tight mb-10">
              <span className="block text-f-mint">Criamos o que sua marca</span>
              <span className="block text-f-mint">precisa para existir</span>
              <span className="block text-f-neon text-glow">no digital.</span>
            </h1>
            <p className="text-f-mint/60 text-lg max-w-2xl mx-auto">
              Da produção cinematográfica ao seu clone digital. Tudo potencializado por IA, com qualidade técnica de 15 anos de mercado.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SEÇÃO 1: PRODUÇÃO AUDIOVISUAL */}
      <section id="producao" className="py-28 bg-f-dark border-y border-f-neon/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-f-neon/10 border border-f-neon/30 rounded-full px-3 py-1 font-mono text-[11px] text-f-neon mb-6">
                🎬 Produção Cinematográfica com IA
              </div>
              <h2 className="font-display font-bold text-[clamp(36px,5vw,52px)] text-f-mint mb-8">
                Vídeos que param o scroll. <br/><span className="text-f-neon">Com velocidade de IA.</span>
              </h2>
              <p className="text-lg text-f-mint/70 mb-8 leading-relaxed">
                Transformamos 15 anos de experiência em sets de filmagem em um fluxo de trabalho 100% digital e inteligente. Resultados de cinema com uma fração do custo e tempo tradicional.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Trailers', 'Comerciais', 'Clipes', 'Social Content'].map(item => (
                  <div key={item} className="flex items-center gap-2 text-f-mint/80 font-mono text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-f-neon"></div>
                    {item}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
               <div className="w-full aspect-video bg-f-black border border-f-neon/20 rounded-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-f-neon/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="text-f-neon" fill="currentColor" />
                    </div>
                  </div>
               </div>
            </AnimatedSection>
          </div>

          {/* Processo de Produção (Timeline) */}
          <div className="relative pt-20 border-t border-f-neon/5" id="timeline-trigger">
            <div className="hidden md:block absolute top-[148px] left-0 w-full h-0.5 bg-f-neon/10"></div>
            <div 
              className="hidden md:block absolute top-[148px] left-0 h-0.5 bg-f-neon transition-all duration-[2000ms] ease-out shadow-[0_0_15px_rgba(80,242,167,0.5)]"
              style={{ width: `${progress}%` }}
            ></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Roteiro IA", desc: "Estrutura narrativa otimizada." },
                { step: "02", title: "Geração", desc: "Cenas criadas com controle total." },
                { step: "03", title: "Animação", desc: "Movimento e vida às imagens." },
                { step: "04", title: "Áudio", desc: "Trilha e locução profissional." },
                { step: "05", title: "Entrega", desc: "Arquivo final em 4K pronto." }
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 150}>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-f-black border-2 border-f-neon flex items-center justify-center font-mono font-bold text-f-neon mb-6 relative z-10 mx-auto md:mx-0 shadow-[0_0_15px_rgba(80,242,167,0.2)]">
                      {item.step}
                    </div>
                    <h3 className="font-display font-bold text-lg text-f-mint mb-2">{item.title}</h3>
                    <p className="text-sm text-f-mint/60">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: AVATAR DE IA */}
      <section id="avatar" className="py-28 bg-f-black scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-20 text-center">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={100}>
              <div className="w-full aspect-square max-w-md mx-auto bg-f-dark/30 border border-f-neon/20 rounded-full p-8 relative flex items-center justify-center shadow-[0_0_60px_rgba(80,242,167,0.1)]">
                <div className="absolute inset-0 rounded-full border border-dashed border-f-neon/30 animate-[spin_20s_linear_infinite]"></div>
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-f-neon/10 to-transparent flex items-center justify-center relative overflow-hidden">
                  <div className="flex items-end gap-1.5 h-16 opacity-70">
                    {[40, 70, 40, 90, 60, 30, 80, 50, 60, 40, 70].map((h, i) => (
                      <div key={i} className="w-2 bg-f-neon rounded-full" style={{ height: `${h}%`, animation: `pulse-dot ${1 + i*0.1}s infinite` }}></div>
                    ))}
                  </div>
                </div>
                <div className="absolute top-10 -right-4 bg-f-dark border border-f-neon/30 rounded-full px-4 py-2 font-mono text-[10px] text-f-neon shadow-xl">Voz clonada ✓</div>
                <div className="absolute bottom-20 -left-8 bg-f-dark border border-f-neon/30 rounded-full px-4 py-2 font-mono text-[10px] text-f-neon shadow-xl">Expressão facial ✓</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-f-dark border border-f-neon/15 rounded-2xl p-8 md:p-10">
                <h3 className="font-display font-bold text-2xl text-f-mint mb-2">Rony Meisler</h3>
                <div className="font-mono text-xs text-f-neon mb-8">Case: Clone Digital para YouTube ✓</div>
                <div className="aspect-video w-full bg-f-black border border-f-neon/30 rounded-xl flex items-center justify-center mb-6">
                  <Play className="text-f-neon/30" size={40} />
                </div>
                <p className="text-f-mint/60 text-sm italic">"A Foster criou meu avatar e agora consigo produzir 10x mais conteúdo sem precisar de estúdio toda semana."</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: CONTEÚDO COM IA */}
      <section id="conteudo" className="py-28 bg-f-dark border-t border-f-neon/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <AnimatedSection>
                <div className="font-mono text-f-neon/70 mb-6">/ escala digital</div>
                <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] text-f-mint mb-8">
                  Conteúdo em escala que equipes inteiras não alcançam.
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "Roteirização Inteligente", desc: "Hooks potentes e estrutura de retenção baseada em dados." },
                    { title: "Design de Thumbnails", desc: "Imagens geradas por IA focadas em CTR (clique)." },
                    { title: "Reels & Shorts Infinitos", desc: "Transformamos uma ideia em dezenas de variações para teste." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <CheckCircle2 className="text-f-neon shrink-0" size={24} />
                      <div>
                        <h4 className="font-display font-bold text-lg text-f-mint">{item.title}</h4>
                        <p className="text-f-mint/60 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
            <div className="w-full md:w-1/2">
               <AnimatedSection delay={200}>
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="aspect-[3/4] bg-f-black border border-f-neon/20 rounded-xl flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-f-neon/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <FileText className="text-f-neon/20 group-hover:text-f-neon/50 transition-colors" size={40} />
                        <div className="absolute bottom-4 left-4 font-mono text-[9px] text-f-mint/30">CONTENT_GEN_#{i}</div>
                      </div>
                    ))}
                  </div>
               </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 bg-f-black text-center border-t border-f-neon/10">
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