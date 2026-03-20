import { useEffect, useState, useMemo } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Heart, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { labPosts, LabPost as LabPostType } from '../data/labPosts';

export default function LabPost({ slug }: { slug: string }) {
  const post = labPosts.find(p => p.slug === slug);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(() => {
    return localStorage.getItem(`foster_lab_like_${slug}`) === 'true';
  });

  const nextPosts = useMemo(() => {
    const currentIndex = labPosts.findIndex(p => p.slug === slug);
    if (currentIndex === -1) return [];
    
    // Pega o próximo e o anterior (ou o próximo do próximo se for o primeiro, etc)
    const items = [];
    const next = labPosts[(currentIndex + 1) % labPosts.length];
    const prev = labPosts[(currentIndex - 1 + labPosts.length) % labPosts.length];
    
    if (next && next.slug !== slug) items.push(next);
    if (prev && prev.slug !== slug && prev.slug !== next.slug) items.push(prev);
    
    return items;
  }, [slug]);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setReadingProgress((currentScroll / scrollTotal) * 100);
    };
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-f-black pt-[140px]">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-f-mint mb-4">Post não encontrado.</h1>
          <a href="#lab" className="text-f-neon font-mono text-sm underline underline-offset-4">voltar para o lab</a>
        </div>
      </div>
    );
  }

  const handleLike = () => {
    const newState = !isLiked;
    setIsLiked(newState);
    localStorage.setItem(`foster_lab_like_${slug}`, String(newState));
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    // Idealmente aqui teria um toast
  };

  return (
    <div className="w-full min-h-screen bg-f-black pt-[140px] pb-32">
      <div className="fixed top-0 left-0 right-0 h-1 z-[100]">
        <div 
          className="h-full bg-f-neon shadow-[0_0_10px_rgba(80,242,167,0.8)] transition-all duration-100"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="flex items-center gap-2 font-mono text-[11px] text-f-mint/30 uppercase tracking-widest mb-12">
          <a href="#home" className="hover:text-f-neon transition-colors">foster.company</a>
          <span>/</span>
          <a href="#lab" className="hover:text-f-neon transition-colors">lab</a>
          <span>/</span>
          <span className="text-f-mint/50 truncate max-w-[200px]">{post.titulo}</span>
        </div>

        <AnimatedSection className="mb-12">
          <div className="font-mono text-f-neon mb-6 uppercase tracking-widest text-sm">{post.categoria}</div>
          <h1 className="font-display font-bold text-[clamp(32px,5vw,56px)] text-f-mint leading-[1.1] mb-8">
            {post.titulo}
          </h1>
          <div className="flex items-center gap-4 font-mono text-[12px] text-f-mint/40 uppercase tracking-widest">
            <span>{post.tempoLeitura}</span>
            <span>·</span>
            <span>{post.data}</span>
            <span>·</span>
            <span>por {post.autor}</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100} className="mb-20">
          <div className="w-full aspect-video rounded-2xl overflow-hidden border border-f-neon/10">
            <img src={post.imagemCapa} alt={post.titulo} className="w-full h-full object-cover" />
          </div>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-16 relative">
          <aside className="hidden lg:block w-12 sticky top-40 h-fit">
            <div className="flex flex-col gap-6">
              <button 
                onClick={handleLike}
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                  isLiked ? 'bg-f-neon/10 border-f-neon text-f-neon' : 'border-f-neon/20 text-f-mint/30 hover:text-f-neon hover:border-f-neon/40'
                }`}
              >
                <Heart size={20} fill={isLiked ? "currentColor" : "none"} className={isLiked ? 'animate-[bounce_0.5s_ease-in-out]' : ''} />
              </button>
              <button 
                onClick={copyLink}
                className="w-12 h-12 rounded-full border border-f-neon/20 flex items-center justify-center text-f-mint/30 hover:text-f-neon hover:border-f-neon/40 transition-all"
              >
                <LinkIcon size={20} />
              </button>
            </div>
          </aside>

          <article className="flex-1 max-w-[720px] mx-auto">
            <div 
              className="text-f-mint/80 text-[18px] leading-[1.8] font-body space-y-8 post-content"
              dangerouslySetInnerHTML={{ __html: post.conteudo }}
            ></div>

            <div className="mt-24 pt-12 border-t border-f-neon/10">
              <div className="flex flex-wrap gap-2 mb-12">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-f-neon/5 border border-f-neon/10 rounded-full px-4 py-1.5 font-mono text-[11px] text-f-mint/40 italic">
                    #{tag.replace(/\s+/g, '')}
                  </span>
                ))}
              </div>

              <div className="bg-f-dark/50 border border-f-neon/20 rounded-3xl p-10 text-center mb-24">
                <h3 className="font-display font-bold text-2xl text-f-mint mb-6">Gostou deste experimento?</h3>
                <a 
                  href="https://wa.me/5547999999999" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 bg-f-neon text-f-black font-display font-bold rounded-full px-10 py-5 text-lg hover:glow-neon transition-all"
                >
                  Falar com a Foster agora <ArrowRight size={20} />
                </a>
              </div>

              {/* Próximo do Lab */}
              <div className="space-y-8">
                <h4 className="font-mono text-xs text-f-neon uppercase tracking-widest">Próximo do Lab</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {nextPosts.map(p => (
                    <div 
                      key={p.id}
                      onClick={() => window.location.hash = `#lab-${p.slug}`}
                      className="group cursor-pointer bg-f-dark/30 border border-f-neon/10 rounded-2xl overflow-hidden hover:border-f-neon/30 transition-all"
                    >
                      <div className="aspect-video w-full overflow-hidden">
                        <img src={p.imagemCapa} alt={p.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-5">
                        <h5 className="font-display font-bold text-lg text-f-mint group-hover:text-f-neon transition-colors line-clamp-2">{p.titulo}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <style>{`
        .post-content h2 {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.875rem;
          color: var(--color-f-mint);
          border-left: 3px solid var(--color-f-neon);
          padding-left: 1.5rem;
          margin: 4rem 0 2rem;
        }
        .post-content blockquote {
          background: rgba(80, 242, 167, 0.05);
          border-left: 4px solid var(--color-f-neon);
          padding: 2rem;
          font-style: italic;
          font-size: 1.25rem;
          margin: 3rem 0;
          color: var(--color-f-neon);
        }
        .post-content ul {
          list-style: none;
          padding: 0;
          margin: 2rem 0;
        }
        .post-content li {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 1rem;
        }
        .post-content li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: var(--color-f-neon);
        }
      `}</style>
    </div>
  );
}