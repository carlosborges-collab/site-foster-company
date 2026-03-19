import AnimatedSection from '../components/AnimatedSection';
import { Play } from 'lucide-react';

export default function Channels() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-[140px] pb-20 bg-f-black bg-grid-pattern bg-noise overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(80,242,167,0.15)_0%,transparent_100%)]"></div>
        
        <div className="max-w-5xl mx-auto px-5 md:px-8 w-full relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-f-neon/5 border border-f-neon/40 rounded-full px-4 py-1.5 mb-10 shadow-[0_0_15px_rgba(80,242,167,0.2)]">
              <span className="font-mono text-[12px] text-f-neon">▶ Canais Próprios</span>
            </div>
            
            <h1 className="font-display font-bold text-[clamp(48px,8vw,80px)] leading-[1.0] tracking-tight mb-10">
              <span className="block text-f-mint">A Foster como criadora.</span>
              <span className="block text-f-neon text-glow">Não só como gestora.</span>
            </h1>

            <p className="text-f-mint/70 text-[18px] font-light max-w-3xl mx-auto leading-[1.55]">
              Canais que criamos, operamos e crescemos com nossa própria metodologia. Cada um é uma prova do que entregamos para nossos clientes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SEÇÃO 1: CANAIS ATIVOS */}
      <section className="py-28 bg-f-dark border-y border-f-neon/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-16">
            <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] text-f-mint mb-4">Canais em operação.</h2>
            <p className="text-[17px] text-f-mint/60 max-w-2xl">Laboratórios criativos e portfólio vivo da Foster Company.</p>
          </AnimatedSection>

          <div className="flex flex-col gap-24">
            {/* Canal Fatos da Bíblia Expandido */}
            <AnimatedSection>
              <div className="flex flex-col gap-8">
                {/* ZONA 1 - TOPO */}
                <div className="w-full text-left">
                  <div className="inline-block bg-[#50F2A7]/10 border border-[#50F2A7]/35 rounded-full px-4 py-2 font-display font-semibold text-[14px] text-[#50F2A7] mb-6">
                    🚀 De zero a monetizado em menos de 30 dias
                  </div>
                  <h3 className="font-display font-bold text-[clamp(28px,4vw,40px)] text-[#E1F2DF] leading-[1.1] mb-4">
                    Fatos da Bíblia<br />
                    De zero a monetizado<br />
                    <span className="text-[#50F2A7]">em menos de 30 dias.</span>
                  </h3>
                  <p className="font-body font-normal text-[15px] text-[#E1F2DF]/60 leading-[1.5] max-w-3xl">
                    Canal próprio da Foster — história bíblica com IA. ~5k inscritos e monetização ativada em menos de 30 dias, do zero.
                  </p>
                </div>

                {/* ZONA 2 - MEIO (Grid) */}
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  {/* ZONA 2 ESQUERDA (45%) */}
                  <div className="w-full md:w-[45%] flex flex-col gap-6">
                    <div className="grid gap-3 w-full" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
                      <div className="bg-[#104037]/60 border border-[#50F2A7]/12 rounded-xl py-3 px-2 text-center overflow-hidden min-w-0 box-border">
                        <div className="font-display font-bold text-[clamp(22px,3vw,38px)] text-[#50F2A7] leading-[1.1] overflow-visible break-words">~5k</div>
                        <div className="font-body font-normal text-[11px] text-[#E1F2DF]/50 uppercase tracking-[0.08em] mt-1.5 leading-[1.4]">inscritos em menos de 30 dias</div>
                      </div>
                      <div className="bg-[#104037]/60 border border-[#50F2A7]/12 rounded-xl py-3 px-2 text-center overflow-hidden min-w-0 box-border">
                        <div className="font-display font-bold text-[clamp(22px,3vw,38px)] text-[#50F2A7] leading-[1.1] overflow-visible break-words">1</div>
                        <div className="font-body font-normal text-[11px] text-[#E1F2DF]/50 uppercase tracking-[0.08em] mt-1.5 leading-[1.4]">semana para monetizar</div>
                      </div>
                      <div className="bg-[#104037]/60 border border-[#50F2A7]/12 rounded-xl py-3 px-2 text-center overflow-hidden min-w-0 box-border">
                        <div className="font-display font-bold text-[clamp(22px,3vw,38px)] text-[#50F2A7] leading-[1.1] overflow-visible break-words">100%</div>
                        <div className="font-body font-normal text-[11px] text-[#E1F2DF]/50 uppercase tracking-[0.08em] mt-1.5 leading-[1.4]">produzido com IA</div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 font-body font-normal text-[13px] text-[#E1F2DF]/65 leading-[1.5]">
                        <span className="text-[#50F2A7] mt-0.5">▸</span>
                        <span>Crescimento orgânico 100% — zero anúncios</span>
                      </li>
                      <li className="flex items-start gap-3 font-body font-normal text-[13px] text-[#E1F2DF]/65 leading-[1.5]">
                        <span className="text-[#50F2A7] mt-0.5">▸</span>
                        <span>Roteiros, imagens e edição com IA</span>
                      </li>
                    </ul>
                  </div>

                  {/* ZONA 2 DIREITA (55%) */}
                  <div className="w-full md:w-[55%]">
                    <div className="max-w-[420px] w-full flex flex-col gap-[14px] md:ml-auto">
                      {/* Vídeo 1 */}
                      <div className="relative rounded-[14px] p-[2px] bg-gradient-to-br from-[#50F2A7]/25 via-[#50F2A7]/5 to-[#50F2A7]/15 shadow-[0_0_20px_rgba(80,242,167,0.08),0_8px_32px_rgba(0,0,0,0.4)]">
                        <div className="rounded-xl overflow-hidden bg-[#030D09] aspect-video w-full">
                          <iframe
                            src="https://www.youtube.com/embed/9ABhVatBQz4"
                            title="Fatos da Bíblia — Vídeo 1"
                            className="w-full h-full block border-none"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>

                      {/* Vídeo 2 */}
                      <div className="relative rounded-[14px] p-[2px] bg-gradient-to-br from-[#50F2A7]/25 via-[#50F2A7]/5 to-[#50F2A7]/15 shadow-[0_0_20px_rgba(80,242,167,0.08),0_8px_32px_rgba(0,0,0,0.4)]">
                        <div className="rounded-xl overflow-hidden bg-[#030D09] aspect-video w-full">
                          <iframe
                            src="https://www.youtube.com/embed/-aBvvjH4-RE"
                            title="Fatos da Bíblia — Vídeo 2"
                            className="w-full h-full block border-none"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ZONA 3 - FUNDO */}
                <div className="w-full flex flex-col sm:flex-row justify-center gap-4 mt-4">
                  <a href="https://www.youtube.com/@fatos.dabiblia" target="_blank" rel="noopener noreferrer" className="bg-[#50F2A7] text-[#030D09] font-display font-semibold rounded-full px-6 py-3 text-center hover:glow-neon transition-all duration-300">
                    Ver o canal →
                  </a>
                  <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="border border-[#50F2A7]/35 text-[#50F2A7] font-display font-medium rounded-full px-6 py-3 text-center hover:bg-[#50F2A7]/10 transition-all duration-300">
                    Quero um canal assim →
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <div className="w-full h-px bg-f-neon/10"></div>

            {/* Canal 1 Expandido */}
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-f-neon/10 border border-f-neon/30 flex items-center justify-center overflow-hidden">
                      <span className="font-display font-bold text-2xl text-f-neon">C1</span>
                      {/* Avatar: <img src="avatar-canal-1.jpg" className="w-full h-full object-cover" /> */}
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-f-neon mb-1">● Ativo</div>
                      <div className="inline-block bg-f-black/50 border border-f-neon/20 rounded-full px-3 py-1 font-mono text-[10px] text-f-mint/70">
                        Canal de Conteúdo
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-display font-bold text-3xl text-f-mint mb-4">
                    {/* CARLOS: Nome do Canal 1 */}
                    [ Nome do Canal 1 ]
                  </h3>
                  
                  <p className="text-[16px] text-f-mint/70 mb-6 leading-[1.55]">
                    {/* CARLOS: Descrição do Canal 1 */}
                    [ Descrição detalhada do canal, nicho, público-alvo e objetivos. ]
                  </p>

                  <div className="inline-flex items-center gap-2 bg-f-neon/10 border border-f-neon/30 rounded-full px-4 py-1.5 font-mono text-[12px] text-f-neon mb-8">
                    ▶ [X inscritos]
                  </div>

                  {/* URL: link do canal 1 */}
                  <a href="[URL]" target="_blank" rel="noopener noreferrer" className="block w-fit bg-f-neon text-f-black font-display font-semibold rounded-full px-8 py-3.5 hover:glow-neon hover:scale-[1.02] transition-all duration-300">
                    Acessar Canal →
                  </a>
                </div>

                <div className="lg:col-span-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Vídeo 1 */}
                    <div className="w-full aspect-video bg-f-black border border-f-neon/20 rounded-xl relative flex items-center justify-center group overflow-hidden">
                      <div className="w-12 h-12 rounded-full bg-f-neon/20 flex items-center justify-center group-hover:scale-110 transition-transform z-10">
                        <Play className="text-f-neon ml-1" size={20} fill="currentColor" />
                      </div>
                      <span className="absolute bottom-4 font-mono text-[10px] text-f-mint/30 z-10">[ Embed Vídeo 1 ]</span>
                      {/* <iframe src="https://www.youtube.com/embed/VIDEO_ID" className="absolute inset-0 w-full h-full" frameborder="0" allowfullscreen></iframe> */}
                    </div>
                    {/* Vídeo 2 */}
                    <div className="w-full aspect-video bg-f-black border border-f-neon/20 rounded-xl relative flex items-center justify-center group overflow-hidden">
                      <div className="w-12 h-12 rounded-full bg-f-neon/20 flex items-center justify-center group-hover:scale-110 transition-transform z-10">
                        <Play className="text-f-neon ml-1" size={20} fill="currentColor" />
                      </div>
                      <span className="absolute bottom-4 font-mono text-[10px] text-f-mint/30 z-10">[ Embed Vídeo 2 ]</span>
                      {/* <iframe src="https://www.youtube.com/embed/VIDEO_ID" className="absolute inset-0 w-full h-full" frameborder="0" allowfullscreen></iframe> */}
                    </div>
                    {/* Vídeo 3 */}
                    <div className="w-full aspect-video bg-f-black border border-f-neon/20 rounded-xl relative flex items-center justify-center group overflow-hidden md:col-span-2 md:aspect-[21/9]">
                      <div className="w-12 h-12 rounded-full bg-f-neon/20 flex items-center justify-center group-hover:scale-110 transition-transform z-10">
                        <Play className="text-f-neon ml-1" size={20} fill="currentColor" />
                      </div>
                      <span className="absolute bottom-4 font-mono text-[10px] text-f-mint/30 z-10">[ Embed Vídeo 3 ]</span>
                      {/* <iframe src="https://www.youtube.com/embed/VIDEO_ID" className="absolute inset-0 w-full h-full" frameborder="0" allowfullscreen></iframe> */}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <div className="w-full h-px bg-f-neon/10"></div>

            {/* Canal 2 Expandido */}
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-f-neon/10 border border-f-neon/30 flex items-center justify-center overflow-hidden">
                      <span className="font-display font-bold text-2xl text-f-neon">C2</span>
                      {/* Avatar: <img src="avatar-canal-2.jpg" className="w-full h-full object-cover" /> */}
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-f-neon mb-1">● Ativo</div>
                      <div className="inline-block bg-f-black/50 border border-f-neon/20 rounded-full px-3 py-1 font-mono text-[10px] text-f-mint/70">
                        Canal de Conteúdo
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-display font-bold text-3xl text-f-mint mb-4">
                    {/* CARLOS: Nome do Canal 2 */}
                    [ Nome do Canal 2 ]
                  </h3>
                  
                  <p className="text-[16px] text-f-mint/70 mb-6 leading-[1.55]">
                    {/* CARLOS: Descrição do Canal 2 */}
                    [ Descrição detalhada do canal, nicho, público-alvo e objetivos. ]
                  </p>

                  <div className="inline-flex items-center gap-2 bg-f-neon/10 border border-f-neon/30 rounded-full px-4 py-1.5 font-mono text-[12px] text-f-neon mb-8">
                    ▶ [X inscritos]
                  </div>

                  {/* URL: link do canal 2 */}
                  <a href="[URL]" target="_blank" rel="noopener noreferrer" className="block w-fit bg-f-neon text-f-black font-display font-semibold rounded-full px-8 py-3.5 hover:glow-neon hover:scale-[1.02] transition-all duration-300">
                    Acessar Canal →
                  </a>
                </div>

                <div className="lg:col-span-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Vídeo 1 */}
                    <div className="w-full aspect-video bg-f-black border border-f-neon/20 rounded-xl relative flex items-center justify-center group overflow-hidden">
                      <div className="w-12 h-12 rounded-full bg-f-neon/20 flex items-center justify-center group-hover:scale-110 transition-transform z-10">
                        <Play className="text-f-neon ml-1" size={20} fill="currentColor" />
                      </div>
                      <span className="absolute bottom-4 font-mono text-[10px] text-f-mint/30 z-10">[ Embed Vídeo 1 ]</span>
                      {/* <iframe src="https://www.youtube.com/embed/VIDEO_ID" className="absolute inset-0 w-full h-full" frameborder="0" allowfullscreen></iframe> */}
                    </div>
                    {/* Vídeo 2 */}
                    <div className="w-full aspect-video bg-f-black border border-f-neon/20 rounded-xl relative flex items-center justify-center group overflow-hidden">
                      <div className="w-12 h-12 rounded-full bg-f-neon/20 flex items-center justify-center group-hover:scale-110 transition-transform z-10">
                        <Play className="text-f-neon ml-1" size={20} fill="currentColor" />
                      </div>
                      <span className="absolute bottom-4 font-mono text-[10px] text-f-mint/30 z-10">[ Embed Vídeo 2 ]</span>
                      {/* <iframe src="https://www.youtube.com/embed/VIDEO_ID" className="absolute inset-0 w-full h-full" frameborder="0" allowfullscreen></iframe> */}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: PERSONAGENS FOSTER */}
      <section className="py-28 bg-f-black">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] text-f-mint mb-4">Personagens criados pela Foster.</h2>
            <p className="text-[17px] text-f-mint/60 max-w-2xl mx-auto">Personagens originais para YouTube — desenvolvidos com IA, roteiro e estratégia de crescimento.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Personagem 1 */}
            <AnimatedSection>
              <div className="bg-f-dark border border-f-neon/15 rounded-2xl p-8 text-center hover:border-f-neon/50 transition-colors group">
                <div className="w-32 h-32 mx-auto rounded-full bg-f-black border-2 border-f-neon/30 mb-6 flex items-center justify-center overflow-hidden relative group-hover:border-f-neon transition-colors">
                  <span className="font-display font-bold text-3xl text-f-neon/50">P1</span>
                  {/* Avatar: <img src="avatar-personagem-1.jpg" className="absolute inset-0 w-full h-full object-cover" /> */}
                </div>
                <div className="inline-block bg-f-neon/10 border border-f-neon/20 rounded-full px-3 py-1 font-mono text-[10px] text-f-neon mb-4">
                  Personagem IA
                </div>
                <h3 className="font-display font-bold text-2xl text-f-mint mb-3">
                  {/* CARLOS: Nome do Personagem 1 */}
                  [ Nome do Personagem 1 ]
                </h3>
                <p className="text-[14px] text-f-mint/60 mb-6">
                  {/* CARLOS: Descrição do Personagem 1 */}
                  [ Descrição do personagem, lore e tipo de conteúdo. ]
                </p>
                {/* URL: link do canal do personagem 1 */}
                <a href="[URL]" target="_blank" rel="noopener noreferrer" className="font-display font-medium text-[14px] text-f-neon hover:underline underline-offset-4">
                  Ver canal →
                </a>
              </div>
            </AnimatedSection>

            {/* Personagem 2 */}
            <AnimatedSection delay={100}>
              <div className="bg-f-dark border border-f-neon/15 rounded-2xl p-8 text-center hover:border-f-neon/50 transition-colors group">
                <div className="w-32 h-32 mx-auto rounded-full bg-f-black border-2 border-f-neon/30 mb-6 flex items-center justify-center overflow-hidden relative group-hover:border-f-neon transition-colors">
                  <span className="font-display font-bold text-3xl text-f-neon/50">P2</span>
                  {/* Avatar: <img src="avatar-personagem-2.jpg" className="absolute inset-0 w-full h-full object-cover" /> */}
                </div>
                <div className="inline-block bg-f-neon/10 border border-f-neon/20 rounded-full px-3 py-1 font-mono text-[10px] text-f-neon mb-4">
                  Personagem IA
                </div>
                <h3 className="font-display font-bold text-2xl text-f-mint mb-3">
                  {/* CARLOS: Nome do Personagem 2 */}
                  [ Nome do Personagem 2 ]
                </h3>
                <p className="text-[14px] text-f-mint/60 mb-6">
                  {/* CARLOS: Descrição do Personagem 2 */}
                  [ Descrição do personagem, lore e tipo de conteúdo. ]
                </p>
                {/* URL: link do canal do personagem 2 */}
                <a href="[URL]" target="_blank" rel="noopener noreferrer" className="font-display font-medium text-[14px] text-f-neon hover:underline underline-offset-4">
                  Ver canal →
                </a>
              </div>
            </AnimatedSection>
            
            {/* Personagem 3 */}
            <AnimatedSection delay={200}>
              <div className="bg-f-dark border border-f-neon/15 rounded-2xl p-8 text-center hover:border-f-neon/50 transition-colors group">
                <div className="w-32 h-32 mx-auto rounded-full bg-f-black border-2 border-f-neon/30 mb-6 flex items-center justify-center overflow-hidden relative group-hover:border-f-neon transition-colors">
                  <span className="font-display font-bold text-3xl text-f-neon/50">P3</span>
                  {/* Avatar: <img src="avatar-personagem-3.jpg" className="absolute inset-0 w-full h-full object-cover" /> */}
                </div>
                <div className="inline-block bg-f-neon/10 border border-f-neon/20 rounded-full px-3 py-1 font-mono text-[10px] text-f-neon mb-4">
                  Personagem IA
                </div>
                <h3 className="font-display font-bold text-2xl text-f-mint mb-3">
                  {/* CARLOS: Nome do Personagem 3 */}
                  [ Nome do Personagem 3 ]
                </h3>
                <p className="text-[14px] text-f-mint/60 mb-6">
                  {/* CARLOS: Descrição do Personagem 3 */}
                  [ Descrição do personagem, lore e tipo de conteúdo. ]
                </p>
                {/* URL: link do canal do personagem 3 */}
                <a href="[URL]" target="_blank" rel="noopener noreferrer" className="font-display font-medium text-[14px] text-f-neon hover:underline underline-offset-4">
                  Ver canal →
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: EM DESENVOLVIMENTO */}
      <section className="py-28 bg-f-dark border-t border-f-neon/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-16">
            <h2 className="font-display font-bold text-[clamp(28px,3vw,40px)] text-f-mint mb-4">O que vem por aí...</h2>
            <p className="text-[17px] text-f-mint/60">Novos canais e personagens anunciados.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Em Breve 1 */}
            <AnimatedSection>
              <div className="bg-f-black/40 backdrop-blur-sm border-2 border-dashed border-f-neon/30 rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-f-neon text-f-black font-mono text-[10px] font-bold px-2 py-1 rounded">
                  Em breve 🚀
                </div>
                <div className="w-16 h-16 rounded-full bg-f-neon/5 flex items-center justify-center mb-4">
                  <span className="text-2xl opacity-50">🤫</span>
                </div>
                <h3 className="font-display font-bold text-xl text-f-mint/70 mb-2">Projeto Secreto #01</h3>
                <p className="text-[13px] text-f-mint/40">Canal de entretenimento com IA.</p>
              </div>
            </AnimatedSection>
            
            {/* Em Breve 2 */}
            <AnimatedSection delay={100}>
              <div className="bg-f-black/40 backdrop-blur-sm border-2 border-dashed border-f-neon/30 rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-f-neon text-f-black font-mono text-[10px] font-bold px-2 py-1 rounded">
                  Em breve 🚀
                </div>
                <div className="w-16 h-16 rounded-full bg-f-neon/5 flex items-center justify-center mb-4">
                  <span className="text-2xl opacity-50">🤖</span>
                </div>
                <h3 className="font-display font-bold text-xl text-f-mint/70 mb-2">Novo Personagem</h3>
                <p className="text-[13px] text-f-mint/40">Focado em educação e tecnologia.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 bg-f-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(80,242,167,0.2)_0%,transparent_70%)]"></div>
        <div className="max-w-3xl mx-auto px-5 relative z-10">
          <AnimatedSection>
            <h2 className="font-display font-bold text-[clamp(40px,6vw,64px)] text-f-mint mb-10">Quer criar um canal com a Foster?</h2>
            <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="inline-block bg-f-neon text-f-black font-display font-bold rounded-full px-10 py-5 text-lg hover:glow-neon hover:scale-[1.03] transition-all duration-300">
              Falar com a equipe →
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
