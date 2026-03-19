"use client";

import { useEffect, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Play, FileText, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Create() {
  const { t } = useLanguage();
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

    // Instagram script injection with cleanup
    let script: HTMLScriptElement | null = null;
    if (!(window as any).instgrm) {
      script = document.createElement('script');
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      (window as any).instgrm.Embeds.process();
    }

    return () => {
      observer.disconnect();
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full scroll-smooth">
      <section className="relative min-h-[80vh] flex items-center pt-[140px] pb-20 bg-f-black overflow-hidden bg-grid-pattern">
        <div className="max-w-5xl mx-auto px-5 md:px-8 w-full relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-f-neon/5 border border-f-neon/40 rounded-full px-4 py-1.5 mb-10">
              <span className="font-mono text-[12px] text-f-neon">{t('create_hero_badge')}</span>
            </div>
            
            <h1 className="font-display font-bold text-[clamp(48px,8vw,80px)] leading-[1.0] tracking-tight mb-10">
              <span className="block text-f-mint">{t('create_hero_title_1')}</span>
              <span className="block text-f-mint">{t('create_hero_title_2')}</span>
              <span className="block text-f-neon text-glow">{t('create_hero_title_3')}</span>
            </h1>
            <p className="text-f-mint/60 text-lg max-w-2xl mx-auto">
              {t('create_hero_desc')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section id="producao" className="py-28 bg-f-dark border-y border-f-neon/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-f-neon/10 border border-f-neon/30 rounded-full px-3 py-1 font-mono text-[11px] text-f-neon mb-6">
                {t('create_sec1_badge')}
              </div>
              <h2 className="font-display font-bold text-[clamp(36px,5vw,52px)] text-f-mint mb-8" dangerouslySetInnerHTML={{ __html: t('create_sec1_title') }}></h2>
              <p className="text-lg text-f-mint/70 mb-8 leading-relaxed">
                {t('create_sec1_desc')}
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
                    <a href={t('whatsapp_link')} target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-f-neon/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="text-f-neon" fill="currentColor" />
                    </a>
                  </div>
               </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Restante das seções seguindo o mesmo padrão... */}
    </div>
  );
}