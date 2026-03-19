import { useEffect, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Play } from 'lucide-react';

export default function Production() {
  const [progress, setProgress] = useState(0);

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
    // Load Instagram script
    if (!(window as any).instgrm) {
      const script = document.createElement('script');
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      (window as any).instgrm.Embeds.process();
    }

    const timer = setTimeout(() => {
      const embed = document.querySelector('.instagram-media-rendered');
      const fallback = document.querySelector('.ig-fallback') as HTMLElement;
      if (!embed && fallback) {
        fallback.style.display = 'flex';
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-[140px] pb-20 bg-f-black bg-grid-pattern bg-noise overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(80,242,167,0.15)_0%,transparent_100%)]"></div>
        
        <div className="max-w-7xl mx-auto px-5 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-f-neon/5 border border-f-neon/25 rounded-full px-4 py-1.5 mb-8">
                <span className="font-mono text-[12px] text-f-neon">◉ Produção Audiovisual · 15 anos de experiência · Agora com IA</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h1 className="font-display font-bold text-[clamp(40px,7vw,80px)] leading-[1.0] tracking-tight mb-8">
                <span className="block text-f-mint">Produção cinematográfica.</span>
                <span className="block text-f-mint">Velocidade de IA.</span>
                <span className="block text-f-neon text-glow">Custo impossível de ignorar.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="border-l-4 border-f-neon pl-6 mb-8">
                <p className="text-f-mint/60 text-[18px] font-light max-w-[540px] leading-[1.55]">
                  Quinze anos produzindo audiovisual de alto nível. Agora fazemos tudo com Inteligência Artificial — mantendo a qualidade cinematográfica que sempre entregamos, com velocidade e escala que a produção tradicional jamais alcançaria.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="inline-block bg-f-neon/10 border border-f-neon rounded-full px-5 py-2 font-mono text-sm text-f-neon mb-10 shadow-[0_0_15px_rgba(80,242,167,0.15)]">
                🎬 Antes: semanas de produção. Agora: dias. Com IA.
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="bg-f-neon text-f-black font-display font-semibold rounded-full px-7 py-3.5 text-center hover:glow-neon hover:scale-[1.02] transition-all duration-300">
                  Quero minha produção com IA →
                </a>
                <a href="#portfolio" className="border border-f-neon/35 text-f-neon font-display font-medium rounded-full px-7 py-3.5 text-center hover:bg-f-neon/10 transition-all duration-300">
                  Ver portfólio →
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Visual Tech */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <AnimatedSection delay={500} className="w-full">
              <div className="w-full bg-f-dark/80 backdrop-blur-xl border border-f-neon/20 rounded-2xl p-6 shadow-2xl animate-float">
                <div className="flex items-center justify-between mb-8">
                  <div className="font-mono text-[11px] text-f-mint/50 uppercase tracking-widest">Foster AI Production · Timeline</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-f-neon animate-ping"></div>
                    <span className="font-mono text-[10px] text-f-neon">Projeto em produção</span>
                  </div>
                </div>
                
                <div className="relative pt-4 pb-8">
                  {/* Base line */}
                  <div className="absolute top-6 left-0 w-full h-1 bg-f-neon/10 rounded-full"></div>
                  {/* Animated progress line */}
                  <div className="absolute top-6 left-0 h-1 bg-f-neon rounded-full shadow-[0_0_10px_rgba(80,242,167,0.5)] transition-all duration-[3000ms] ease-linear" style={{ width: '100%' }}></div>
                  
                  <div className="relative flex justify-between">
                    {[
                      { label: "Briefing", icon: "📝" },
                      { label: "Roteiro IA", icon: "🤖" },
                      { label: "Imagens IA", icon: "🖼️" },
                      { label: "Animação IA", icon: "✨" },
                      { label: "Áudio IA", icon: "🎵" },
                      { label: "Entrega ✓", icon: "🚀" }
                    ].map((step, i) => (
                      <div key={i} className="flex flex-col items-center gap-3 z-10">
                        <div className="w-6 h-6 rounded-full bg-f-black border-2 border-f-neon flex items-center justify-center text-[10px] shadow-[0_0_10px_rgba(80,242,167,0.3)]">
                          {step.icon}
                        </div>
                        <span className="font-mono text-[9px] text-f-mint/70 whitespace-nowrap absolute top-10">{step.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* A VIRADA (Storytelling) */}
      <section className="py-28 bg-f-dark border-y border-f-neon/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 relative">
            
            {/* Linha Divisória Central (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-f-neon/50 to-transparent -translate-x-1/2"></div>

            {/* Coluna Esquerda - Antes */}
            <AnimatedSection className="md:pr-16 lg:pr-24">
              <div className="font-mono text-f-mint/40 mb-6">/ produção tradicional</div>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-f-mint/60 mb-6">
                15 anos de set, câmera e produção presencial.
              </h2>
              <p className="text-f-mint/50 text-[16px] leading-[1.55]">
                A Foster Company nasceu como produtora audiovisual. Por 15 anos, construímos projetos com equipe, equipamento e estrutura física. Desenvolvemos o olhar cinematográfico, o rigor técnico e a sensibilidade criativa que só o tempo constrói.
              </p>
            </AnimatedSection>

            {/* Coluna Direita - Agora */}
            <AnimatedSection delay={200} className="md:pl-16 lg:pl-24">
              <div className="font-mono text-f-neon mb-6">/ com inteligência artificial</div>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-f-mint mb-6">
                Agora fazemos tudo isso — com IA.
              </h2>
              <p className="text-f-mint text-[16px] leading-[1.55]">
                A mesma qualidade. A mesma intenção criativa. Mas sem câmera, sem set, sem semanas de pós-produção. O iFoster amplifica cada etapa do processo criativo e entrega produção cinematográfica em uma fração do tempo e do custo.
              </p>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* O QUE PRODUZIMOS */}
      <section className="py-28 bg-f-black">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-16">
            <div className="font-mono text-f-neon/70 mb-6">/ formatos de entrega</div>
            <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] text-f-mint">Do trailer ao comercial. Do clipe ao documentário.</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🎬", title: "Trailers e Teasers", desc: "Do filme conceitual ao teaser de produto. Narrativa, ritmo e impacto — tudo com IA." },
              { icon: "📺", title: "Comerciais e Anúncios", desc: "Peças para TV, YouTube e redes sociais. Roteiro, locução, imagens e edição — 100% IA." },
              { icon: "🎵", title: "Clipes Musicais", desc: "Clipes visuais únicos para artistas e selos. Imagens geradas por IA sincronizadas com a música." },
              { icon: "🏢", title: "Vídeos Institucionais", desc: "A história da sua empresa contada com qualidade cinematográfica. Sem gravar nada." },
              { icon: "✨", title: "Motion Graphics e VFX", desc: "Animações, efeitos visuais e identidade em movimento. Tudo gerado com IA de ponta." },
              { icon: "📱", title: "Conteúdo para Redes Sociais", desc: "Reels, Shorts, Stories e posts animados em escala. Um briefing, dezenas de peças." }
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-[#104037]/50 border border-f-neon/12 rounded-xl p-8 hover:border-f-neon hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="text-4xl mb-6">{card.icon}</div>
                  <h3 className="font-display font-bold text-xl text-f-mint mb-3">{card.title}</h3>
                  <p className="text-f-mint/65 text-[15px] leading-[1.55]">{card.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO DE PRODUÇÃO */}
      <section className="py-28 bg-f-dark" id="timeline-trigger">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-20">
            <div className="font-mono text-f-neon/70 mb-6">/ nosso processo</div>
            <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] text-f-mint">Da ideia à tela em tempo recorde.</h2>
          </AnimatedSection>

          <div className="relative">
            {/* Linha conectando as etapas (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-f-neon/10 -translate-y-1/2"></div>
            <div 
              className="hidden md:block absolute top-1/2 left-0 h-0.5 bg-f-neon -translate-y-1/2 transition-all duration-[2000ms] ease-out shadow-[0_0_15px_rgba(80,242,167,0.5)]"
              style={{ width: `${progress}%` }}
            ></div>

            {/* Etapas */}
            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative z-10 overflow-x-auto pb-8 md:pb-0 snap-x">
              {[
                { step: "01", title: "Briefing & Roteiro", desc: "Você nos conta o que quer comunicar. O iFoster gera o roteiro, a estrutura narrativa e a direção de arte.", badge: "~24h" },
                { step: "02", title: "Geração de Imagens", desc: "Cada cena é gerada por IA com controle total de luz, composição, estilo e paleta.", badge: "~48h" },
                { step: "03", title: "Animação & Movimento", desc: "As imagens ganham vida com ferramentas de animação de IA de última geração.", badge: "~48h" },
                { step: "04", title: "Áudio & Narração", desc: "Trilha sonora, efeitos e locução — gerados ou curados pela Foster para o tom exato do projeto.", badge: "~24h" },
                { step: "05", title: "Entrega Final", desc: "Arquivo final em resolução máxima, pronto para qualquer plataforma ou veículo.", badge: "✓ Entregue" }
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 150} className="min-w-[280px] md:min-w-0 flex-1 snap-center">
                  <div className="bg-f-black border border-f-neon/20 rounded-xl p-6 relative h-full flex flex-col">
                    <div className="absolute -top-3 left-6 bg-f-neon text-f-black font-mono text-xs font-bold px-2 py-1 rounded">Etapa {item.step}</div>
                    <h3 className="font-display font-bold text-lg text-f-mint mt-4 mb-3">{item.title}</h3>
                    <p className="text-f-mint/60 text-[14px] leading-[1.55] mb-6 flex-grow">{item.desc}</p>
                    <div className="inline-block bg-f-dark border border-f-neon/30 text-f-neon font-mono text-[10px] px-3 py-1 rounded-full w-fit">
                      {item.badge}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-28 bg-f-black">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-16">
            <div className="font-mono text-f-neon/70 mb-6">/ portfólio</div>
            <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] text-f-mint">Produções que provam o que a IA é capaz.</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Card Destaque - Reel Instagram */}
            <AnimatedSection>
              <div className="w-full max-w-[340px] mx-auto rounded-[16px] p-[2px] bg-gradient-to-br from-[#50F2A7]/20 via-[#50F2A7]/04 to-[#50F2A7]/12 shadow-[0_0_24px_rgba(80,242,167,0.07),0_8px_32px_rgba(0,0,0,0.4)]">
                <div className="bg-[#030D09] rounded-[14px] overflow-hidden flex flex-col h-full">
                  {/* TOPO DO CARD */}
                  <div className="flex justify-between items-center px-[14px] py-[10px]">
                    <span className="font-mono text-[10px] text-[#50F2A7] bg-[#50F2A7]/10 border border-[#50F2A7]/20 rounded-full px-2 py-1">
                      🎬 Produção com IA
                    </span>
                    <span className="font-mono text-[10px] text-[#E1F2DF]/40">
                      Carlos Borges · CEO
                    </span>
                  </div>

                  {/* ÁREA DO VÍDEO */}
                  <div className="relative w-full aspect-[9/16] max-h-[480px] bg-[#0a1a14] overflow-hidden flex items-center justify-center">
                    {/* EMBED INSTAGRAM */}
                    <blockquote
                      className="instagram-media"
                      data-instgrm-permalink="https://www.instagram.com/reel/DVOgU-TgD2o/"
                      data-instgrm-version="14"
                      style={{ width: '100%', minWidth: '100%', maxWidth: '100%', border: 'none', margin: 0, padding: 0 }}
                    ></blockquote>
                    
                    {/* FALLBACK */}
                    <div className="ig-fallback absolute inset-0 flex-col items-center justify-center bg-[#0a1a14] z-0 hidden">
                      <div className="w-12 h-12 rounded-full bg-[#50F2A7]/20 flex items-center justify-center mb-4">
                        <Play className="text-[#50F2A7] ml-1" size={24} fill="currentColor" />
                      </div>
                      <a href="https://www.instagram.com/reel/DVOgU-TgD2o/" target="_blank" rel="noopener noreferrer" className="font-display font-medium text-[14px] text-[#50F2A7] hover:underline mb-2 z-10">
                        Ver no Instagram →
                      </a>
                      <span className="font-mono text-[10px] text-[#E1F2DF]/25">Produção 100% com IA · Foster Company</span>
                    </div>
                  </div>

                  {/* RODAPÉ DO CARD */}
                  <div className="p-[12px_14px] flex flex-col justify-between flex-grow">
                    <div>
                      <p className="font-display font-semibold text-[14px] text-[#E1F2DF] leading-[1.3]">
                        História real. Produzida 100% com IA pela Foster Company.
                      </p>
                      <div className="flex flex-wrap gap-[6px] mt-[8px]">
                        <span className="font-mono text-[9px] text-[#E1F2DF]/40 bg-[#50F2A7]/5 rounded-full px-2 py-0.5">IA Generativa</span>
                        <span className="font-mono text-[9px] text-[#E1F2DF]/40 bg-[#50F2A7]/5 rounded-full px-2 py-0.5">Reel</span>
                        <span className="font-mono text-[9px] text-[#E1F2DF]/40 bg-[#50F2A7]/5 rounded-full px-2 py-0.5">História Real</span>
                        <span className="font-mono text-[9px] text-[#E1F2DF]/40 bg-[#50F2A7]/5 rounded-full px-2 py-0.5">Carlos Borges</span>
                      </div>
                    </div>
                    <div className="mt-[10px]">
                      <a href="https://www.instagram.com/reel/DVOgU-TgD2o/" target="_blank" rel="noopener noreferrer" className="font-body font-normal text-[12px] text-[#50F2A7] hover:underline block mb-1">
                        ▶ Assistir no Instagram →
                      </a>
                      <span className="font-mono text-[9px] text-[#E1F2DF]/20 italic block">
                        Publicado no perfil @carlosborges · Foster Company
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {[
              { badge: "🎬 Trailer" },
              { badge: "📺 Comercial" },
              { badge: "🎵 Clipe Musical" }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="w-full aspect-video bg-f-dark border border-f-neon/20 rounded-xl relative flex flex-col items-center justify-center group overflow-hidden hover:border-f-neon/50 transition-colors">
                  <div className="absolute top-4 left-4 bg-f-black/80 backdrop-blur text-f-mint font-mono text-[11px] px-3 py-1.5 rounded-full z-10 border border-f-neon/20">
                    {item.badge}
                  </div>
                  <div className="w-16 h-16 rounded-full bg-f-neon/20 flex items-center justify-center group-hover:scale-110 transition-transform z-10">
                    <Play className="text-f-neon ml-1" size={24} fill="currentColor" />
                  </div>
                  <span className="absolute bottom-4 font-mono text-[10px] text-f-mint/25 z-10">[ Cole o embed do YouTube aqui ]</span>
                  {/* <iframe src="https://www.youtube.com/embed/VIDEO_ID" className="absolute inset-0 w-full h-full rounded-xl" frameborder="0" allowfullscreen></iframe> */}
                </div>
              </AnimatedSection>
            ))}
          </div>
          <p className="text-center font-body text-[12px] text-f-mint/25">
            Para ativar os vídeos, substitua cada placeholder pelo iframe do YouTube.
          </p>
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className="py-28 bg-f-dark border-t border-f-neon/10">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display font-bold text-[clamp(32px,4vw,44px)] text-f-mint">Por que IA muda tudo na produção audiovisual.</h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-f-black border border-f-neon/15 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-2 bg-f-neon/5 border-b border-f-neon/15">
                <div className="p-6 font-mono text-sm text-f-mint/40 uppercase text-center">PRODUÇÃO TRADICIONAL</div>
                <div className="p-6 font-mono text-sm text-f-neon uppercase text-center font-bold">FOSTER IA</div>
              </div>
              
              {[
                ["Semanas de pré-produção", "Briefing em 24h"],
                ["Equipe de 10-20 pessoas", "iFoster + equipe Foster"],
                ["Aluguel de equipamento", "Zero equipamento físico"],
                ["Locações, atores, figurino", "Tudo gerado digitalmente"],
                ["Orçamento de R$50k-500k+", "Fração do custo tradicional"],
                ["Revisões demoradas", "Iterações rápidas com IA"]
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-2 border-b border-f-neon/5 last:border-0">
                  <div className="p-6 text-[15px] text-f-mint/40 border-r border-f-neon/5 flex items-center justify-center text-center">
                    {row[0]}
                  </div>
                  <div className="p-6 text-[15px] text-f-neon flex items-center justify-center text-center font-medium">
                    {row[1]}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-36 bg-f-black relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(80,242,167,0.07) 0%, transparent 70%)' }}></div>
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="font-display font-bold text-[clamp(40px,6vw,64px)] text-f-mint mb-6">
              Sua produção. Nível cinematográfico. Com IA.
            </h2>
            <p className="font-body font-light text-[20px] text-f-mint/60 mb-12 max-w-2xl mx-auto">
              A experiência de 15 anos de produtora audiovisual — agora amplificada por inteligência artificial.
            </p>
            <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="inline-block bg-f-neon text-f-black font-display font-bold rounded-full px-12 py-5 text-lg hover:glow-neon hover:scale-[1.03] transition-all duration-300">
              Quero minha produção com IA →
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
