import AnimatedSection from '../components/AnimatedSection';
import { Music as MusicIcon, User, Play } from 'lucide-react';

export default function Music() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-[140px] pb-20 bg-f-black overflow-hidden">
        {/* Waveform Background Animation */}
        <div className="absolute inset-0 flex items-end justify-center opacity-10 gap-2 pb-20 pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <div 
              key={i}
              className="w-4 bg-f-neon rounded-t-full origin-bottom animate-waveform"
              style={{
                height: `${Math.random() * 60 + 20}%`,
                animationDelay: `${Math.random() * 1.5}s`,
                animationDuration: `${Math.random() * 1 + 0.8}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="max-w-5xl mx-auto px-5 md:px-8 w-full relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-f-neon/5 border border-f-neon/40 rounded-full px-4 py-1.5 mb-10 shadow-[0_0_15px_rgba(80,242,167,0.2)]">
              <span className="font-mono text-[12px] text-f-neon">🎵 Selo Musical Foster</span>
            </div>
            
            <h1 className="font-display font-bold text-[clamp(48px,8vw,80px)] leading-[1.0] tracking-tight mb-10">
              <span className="block text-f-mint">Criamos música.</span>
              <span className="block text-f-neon text-glow">Lançamos artistas.</span>
              <span className="block text-f-mint">Distribuímos para o mundo.</span>
            </h1>

            <p className="text-f-mint/70 text-[18px] font-light max-w-3xl mx-auto leading-[1.55]">
              A Foster Company é um selo musical que une criatividade, tecnologia de IA e estratégia para levar música a todas as plataformas de streaming do planeta.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SEÇÃO 1: PRODUÇÃO COM IA */}
      <section className="py-28 bg-f-dark border-y border-f-neon/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-16">
            <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] text-f-mint mb-4">Música criada com inteligência artificial.</h2>
            <p className="text-[17px] text-f-mint/60 max-w-2xl mb-8">
              Produzimos músicas de diversos estilos utilizando as ferramentas de IA mais avançadas disponíveis — mantendo identidade artística, qualidade de masterização e impacto emocional.
            </p>
            <div className="flex flex-wrap gap-3">
              {/* CARLOS: adicione os estilos musicais que produzem: ex: Pop, Gospel, Lo-fi, etc */}
              {['Pop', 'Gospel', 'Lo-fi', 'Eletrônica', 'Acústico'].map(style => (
                <span key={style} className="bg-f-black border border-f-neon/20 rounded-full px-4 py-1.5 font-mono text-[12px] text-f-mint/80">
                  {style}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <AnimatedSection key={item} delay={item * 100}>
                <div className="group cursor-pointer">
                  <div className="w-full aspect-square bg-gradient-to-br from-f-black to-[#104037] border border-f-neon/15 rounded-xl relative flex flex-col items-center justify-center overflow-hidden mb-4 group-hover:border-f-neon/50 transition-colors">
                    <MusicIcon size={48} className="text-f-neon/40 mb-2 group-hover:scale-110 transition-transform" />
                    <span className="font-mono text-[10px] text-f-mint/30">[ Capa do lançamento ]</span>
                    {/* CARLOS: capa do lançamento */}
                    {/* <img src={`capa-${item}.jpg`} className="absolute inset-0 w-full h-full object-cover" /> */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-f-neon flex items-center justify-center">
                        <Play className="text-f-black ml-1" size={20} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-[18px] text-f-mint mb-1">
                    {/* CARLOS: Nome do single/álbum */}
                    [ Nome do Single {item} ]
                  </h3>
                  <p className="text-[14px] text-f-mint/60 mb-3">
                    {/* CARLOS: Artista */}
                    [ Artista ]
                  </p>
                  {/* CARLOS: link para streaming */}
                  <a href="#" className="font-display font-medium text-[13px] text-f-neon hover:underline underline-offset-4">
                    Ouvir →
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: PLATAFORMAS DE STREAMING */}
      <section className="py-20 bg-f-black">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-[24px] text-f-mint mb-10">Disponível em todas as plataformas.</h2>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {/* Spotify */}
              <a href="#" className="w-[52px] h-[52px] rounded-full bg-f-neon/5 border border-f-neon/20 flex items-center justify-center hover:bg-f-neon/10 hover:border-f-neon/40 transition-all group">
                <svg className="w-6 h-6 text-f-mint group-hover:text-f-neon transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
              {/* Apple Music */}
              <a href="#" className="w-[52px] h-[52px] rounded-full bg-f-neon/5 border border-f-neon/20 flex items-center justify-center hover:bg-f-neon/10 hover:border-f-neon/40 transition-all group">
                <svg className="w-6 h-6 text-f-mint group-hover:text-f-neon transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.125 14.5c-.875 0-1.625-.5-2.25-1.125-.625-.625-1.125-1.375-1.125-2.25s.5-1.625 1.125-2.25c.625-.625 1.375-1.125 2.25-1.125s1.625.5 2.25 1.125c.625.625 1.125 1.375 1.125 2.25s-.5 1.625-1.125 2.25c-.625.625-1.375 1.125-2.25 1.125zm0-8.5c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5 2.5-1.125 2.5-2.5-1.125-2.5-2.5-2.5zm-5 8.5c-.875 0-1.625-.5-2.25-1.125-.625-.625-1.125-1.375-1.125-2.25s.5-1.625 1.125-2.25c.625-.625 1.375-1.125 2.25-1.125s1.625.5 2.25 1.125c.625.625 1.125 1.375 1.125 2.25s-.5 1.625-1.125 2.25c-.625.625-1.375 1.125-2.25 1.125zm0-8.5c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5 2.5-1.125 2.5-2.5-1.125-2.5-2.5-2.5z"/>
                </svg>
              </a>
              {/* Deezer */}
              <a href="#" className="w-[52px] h-[52px] rounded-full bg-f-neon/5 border border-f-neon/20 flex items-center justify-center hover:bg-f-neon/10 hover:border-f-neon/40 transition-all group">
                <svg className="w-6 h-6 text-f-mint group-hover:text-f-neon transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.5 17.5h-3v-3h3v3zm0-4.5h-3v-3h3v3zm0-4.5h-3v-3h3v3zm4.5 9h-3v-3h3v3zm0-4.5h-3v-3h3v3zm0-4.5h-3v-3h3v3zm4.5 9h-3v-3h3v3zm0-4.5h-3v-3h3v3zm0-4.5h-3v-3h3v3zm0-4.5h-3v-3h3v3zm-13.5 13.5h-3v-3h3v3z"/>
                </svg>
              </a>
              {/* YouTube Music */}
              <a href="#" className="w-[52px] h-[52px] rounded-full bg-f-neon/5 border border-f-neon/20 flex items-center justify-center hover:bg-f-neon/10 hover:border-f-neon/40 transition-all group">
                <svg className="w-6 h-6 text-f-mint group-hover:text-f-neon transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.636c-4.217 0-7.636-3.419-7.636-7.636S7.783 4.364 12 4.364s7.636 3.419 7.636 7.636-3.419 7.636-7.636 7.636zm-2.182-11.455v7.636L15.273 12l-5.455-3.819z"/>
                </svg>
              </a>
              {/* Amazon Music */}
              <a href="#" className="w-[52px] h-[52px] rounded-full bg-f-neon/5 border border-f-neon/20 flex items-center justify-center hover:bg-f-neon/10 hover:border-f-neon/40 transition-all group">
                <svg className="w-6 h-6 text-f-mint group-hover:text-f-neon transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.42 16.58c-1.1.8-2.5 1.3-4.1 1.3-3.6 0-6.6-2.5-7.6-5.9-.1-.4-.5-.6-.9-.5-.4.1-.6.5-.5.9 1.2 4.1 4.8 7.1 9 7.1 1.9 0 3.7-.6 5.1-1.6.3-.2.4-.6.2-.9-.3-.3-.7-.4-1.2-.4zm4.8-1.5c-.2-.3-.6-.3-.9-.1-1.3 1-2.9 1.6-4.6 1.6-3.6 0-6.6-2.5-7.6-5.9-.1-.4-.5-.6-.9-.5-.4.1-.6.5-.5.9 1.2 4.1 4.8 7.1 9 7.1 2 0 3.9-.6 5.4-1.7.3-.2.4-.6.1-.9z"/>
                </svg>
              </a>
              {/* Tidal */}
              <a href="#" className="w-[52px] h-[52px] rounded-full bg-f-neon/5 border border-f-neon/20 flex items-center justify-center hover:bg-f-neon/10 hover:border-f-neon/40 transition-all group">
                <svg className="w-6 h-6 text-f-mint group-hover:text-f-neon transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.005 8.35L8.34 12.01l3.665 3.66 3.66-3.66-3.66-3.66zm0-7.32L4.68 4.69l3.66 3.66 3.665-3.66 3.66 3.66 3.665-3.66-7.325-7.32zm0 14.64l-3.665 3.66-3.66-3.66-3.66 3.66 7.325 7.32 7.32-7.32-3.66-3.66z"/>
                </svg>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SEÇÃO 3: ROSTER DE ARTISTAS */}
      <section className="py-28 bg-f-dark border-t border-f-neon/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] text-f-mint mb-4">Artistas do Selo Foster.</h2>
            <p className="text-[17px] text-f-mint/60 max-w-2xl mx-auto">Lançamentos em breve.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <AnimatedSection key={item} delay={item * 100}>
                <div className="bg-f-black border border-f-neon/15 rounded-2xl p-6 text-center hover:border-f-neon/50 transition-colors group h-full flex flex-col">
                  <div className="w-24 h-24 mx-auto rounded-full bg-[#104037] border-2 border-f-neon/30 mb-5 flex items-center justify-center overflow-hidden relative group-hover:border-f-neon transition-colors">
                    <User size={32} className="text-f-neon/40" />
                    {/* CARLOS: foto do artista */}
                    {/* <img src={`artista-${item}.jpg`} className="absolute inset-0 w-full h-full object-cover" /> */}
                  </div>
                  <h3 className="font-display font-bold text-[20px] text-f-mint mb-1">
                    {/* CARLOS: Nome do artista */}
                    [ Artista {item} ]
                  </h3>
                  <div className="font-mono text-[10px] text-f-neon mb-4">
                    {/* CARLOS: Estilo */}
                    [ Estilo ]
                  </div>
                  <div className="mt-auto">
                    <div className="text-[12px] text-f-mint/50 mb-3">
                      {item % 2 === 0 ? "Em lançamento 🚀" : "Disponível no streaming ✓"}
                    </div>
                    {/* CARLOS: link do perfil */}
                    <a href="#" className="font-display font-medium text-[13px] text-f-neon hover:underline underline-offset-4">
                      Ver perfil →
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* Em Breve */}
            <AnimatedSection delay={500}>
              <div className="bg-f-black/40 backdrop-blur-sm border-2 border-dashed border-f-neon/30 rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="w-16 h-16 rounded-full bg-f-neon/5 flex items-center justify-center mb-4">
                  <span className="text-2xl opacity-50">🤫</span>
                </div>
                <h3 className="font-display font-bold text-[16px] text-f-mint/70 mb-2">Em breve</h3>
                <p className="text-[12px] text-f-mint/40">Novo artista Foster</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: CTA */}
      <section className="py-32 bg-f-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(80,242,167,0.2)_0%,transparent_70%)]"></div>
        <div className="max-w-3xl mx-auto px-5 relative z-10">
          <AnimatedSection>
            <h2 className="font-display font-bold text-[clamp(32px,5vw,56px)] text-f-mint mb-6">Quer lançar pelo Selo Foster?</h2>
            <p className="text-[18px] text-f-mint/60 mb-10 max-w-2xl mx-auto">
              Se você é artista ou produtor e quer distribuir sua música com estratégia, posicionamento e tecnologia Foster, fale com a gente.
            </p>
            <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="inline-block bg-f-neon text-f-black font-display font-bold rounded-full px-10 py-5 text-lg hover:glow-neon hover:scale-[1.03] transition-all duration-300">
              Quero lançar pelo Selo →
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
