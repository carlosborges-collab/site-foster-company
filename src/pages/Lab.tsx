import { useState, useMemo } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Heart, Bookmark, ArrowRight } from 'lucide-react';
import { labPosts, LabPost } from '../data/labPosts';

export default function Lab() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const filters = ['Todos', '/ caso', '/ experimento', '/ método', '/ inteligência'];

  const filteredPosts = useMemo(() => {
    if (activeFilter === 'Todos') return [...labPosts].sort((a, b) => Number(b.id) - Number(a.id));
    return labPosts.filter(post => post.categoria === activeFilter);
  }, [activeFilter]);

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  const PostCard = ({ post, featured = false }: { post: LabPost; featured?: boolean }) => (
    <div 
      onClick={() => window.location.hash = `#lab-${post.slug}`}
      className={`group cursor-pointer bg-f-dark/40 border border-f-neon/10 rounded-2xl overflow-hidden hover:border-f-neon/40 hover:shadow-[0_0_30px_rgba(80,242,167,0.1)] transition-all duration-300 flex ${featured ? 'flex-col lg:flex-row' : 'flex-col'}`}
    >
      <div className={`relative overflow-hidden ${featured ? 'lg:w-[60%] aspect-video' : 'w-full aspect-video'}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-f-black via-transparent to-transparent z-10 opacity-60"></div>
        <img 
          src={post.imagemCapa} 
          alt={post.titulo} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-f-neon text-f-black font-mono text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            {post.categoria}
          </span>
        </div>
      </div>

      <div className={`p-6 md:p-8 flex flex-col justify-between ${featured ? 'lg:w-[40%]' : 'flex-grow'}`}>
        <div>
          <h3 className={`font-display font-bold text-f-mint mb-3 group-hover:text-f-neon transition-colors ${featured ? 'text-3xl' : 'text-xl'}`}>
            {post.titulo}
          </h3>
          <p className={`text-f-mint/60 font-body mb-6 line-clamp-2 ${featured ? 'line-clamp-3 text-lg' : 'text-sm'}`}>
            {post.descricao}
          </p>
          <div className="flex items-center gap-2 font-mono text-[11px] text-f-mint/30 uppercase tracking-wider mb-8">
            <span>{post.tempoLeitura}</span>
            <span>·</span>
            <span>{post.data}</span>
            <span>·</span>
            <span>por {post.autor}</span>
          </div>
        </div>

        <div className="pt-6 border-t border-f-neon/10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 text-f-mint/40 hover:text-f-neon transition-colors">
              <Heart size={16} />
              <span className="font-mono text-xs">{post.likes}</span>
            </button>
            <button className="text-f-mint/40 hover:text-f-neon transition-colors">
              <Bookmark size={16} />
            </button>
          </div>
          <div className="text-f-neon font-display font-bold text-sm flex items-center gap-2">
            Ler <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-f-black pt-[140px] pb-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <AnimatedSection className="mb-20">
          <div className="font-mono text-f-neon/70 mb-6">/ o lab</div>
          <h1 className="font-display font-bold text-[clamp(40px,6vw,64px)] text-f-mint leading-[1.1] mb-6">
            Bastidores reais. <br />
            Experimentos honestos. <br />
            <span className="text-f-neon">Resultados documentados.</span>
          </h1>
          <p className="text-xl text-f-mint/60 max-w-2xl">
            O que a Foster está construindo, testando e aprendendo — publicado aqui.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100} className="mb-16">
          <div className="flex flex-wrap gap-3">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full font-mono text-xs transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-f-neon text-f-black shadow-[0_0_20px_rgba(80,242,167,0.3)]' 
                    : 'bg-f-neon/5 border border-f-neon/10 text-f-mint/40 hover:text-f-mint/80 hover:border-f-neon/30'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {filteredPosts.length > 0 ? (
          <div className="space-y-8">
            <AnimatedSection delay={200}>
              <PostCard post={featuredPost} featured={true} />
            </AnimatedSection>

            {otherPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {otherPosts.map((post, i) => (
                  <AnimatedSection key={post.id} delay={300 + (i * 100)}>
                    <PostCard post={post} />
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-32 border-2 border-dashed border-f-neon/10 rounded-3xl">
            <p className="font-mono text-f-mint/30 uppercase tracking-widest">Nenhum experimento encontrado nesta categoria ainda.</p>
          </div>
        )}
      </div>
    </div>
  );
}