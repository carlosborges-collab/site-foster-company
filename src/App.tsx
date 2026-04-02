import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ifoster from './pages/Ifoster';
import Build from './pages/Build';
import Music from './pages/Music';
import CloneDigital from './pages/CloneDigital';
import YoutubeGrowth from './pages/YoutubeGrowth';
import FosterIA from './pages/FosterIA';
import Lab from './pages/Lab';
import LabPost from './pages/LabPost';
import ConversionPopup from './components/ConversionPopup';
import ContactModal from './components/ContactModal';
import { useLanguage } from './i18n/LanguageContext';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayPath, setDisplayPath] = useState(currentPath);
  const { t } = useLanguage();

  // Dynamic SEO Update Logic
  useEffect(() => {
    const updateSEO = () => {
      let title = t('meta_title');
      let description = t('meta_description');
      const url = `https://fosterprodutora.com.br/${currentPath}`;

      if (currentPath === '#ifoster') {
        title = t('seo_ifoster_title');
        description = t('seo_ifoster_desc');
      } else if (currentPath === '#gestao-youtube') {
        title = t('seo_youtube_title');
        description = t('seo_youtube_desc');
      } else if (currentPath === '#clone-digital') {
        title = t('seo_clone_title');
        description = t('seo_clone_desc');
      } else if (currentPath === '#foster-ia') {
        title = t('seo_fosteria_title');
        description = t('seo_fosteria_desc');
      } else if (currentPath === '#build') {
        title = t('seo_build_title');
        description = t('seo_build_desc');
      } else if (currentPath === '#lab') {
        title = t('seo_lab_title');
        description = t('seo_lab_desc');
      } else if (currentPath === '#musica') {
        title = t('seo_music_title');
        description = t('seo_music_desc');
      } else if (currentPath.startsWith('#lab-')) {
        // LabPost dynamic SEO is handled partially by the component, but we ensure basic here
        title = `${title} | Lab`;
      }

      document.title = title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', description);
      
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute('href', url);

      // Social Meta
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', title);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', description);
    };

    updateSEO();
  }, [currentPath, t]);

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash || '#home';
      
      const mainPages = [
        '#home', 
        '#ifoster', 
        '#musica', 
        '#gestao-youtube', 
        '#clone-digital',
        '#foster-ia',
        '#build',
        '#lab'
      ];

      const isInternalScroll = newHash.includes('-') && 
                               !mainPages.some(page => newHash.startsWith(page)) &&
                               newHash.startsWith(currentPath);

      if (isInternalScroll) {
        const parts = newHash.split('-');
        const elementId = parts[parts.length - 1];
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      
      const simpleId = newHash.startsWith('#') ? newHash.slice(1) : newHash;
      const simpleEl = document.getElementById(simpleId);
      if (simpleEl && !mainPages.some(page => newHash === page)) {
        simpleEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      if (newHash !== currentPath) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentPath(newHash);
          setDisplayPath(newHash);
          window.scrollTo(0, 0);
          setIsTransitioning(false);
        }, 200);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPath]);

  const renderPage = () => {
    if (displayPath.startsWith('#build')) return <Build />;
    if (displayPath.startsWith('#lab-')) {
      const slug = displayPath.replace('#lab-', '');
      return <LabPost slug={slug} />;
    }
    
    switch (displayPath) {
      case '#gestao-youtube': return <YoutubeGrowth />;
      case '#clone-digital': return <CloneDigital />;
      case '#foster-ia': return <FosterIA />;
      case '#ifoster': return <Ifoster />;
      case '#musica': return <Music />;
      case '#lab': return <Lab />;
      case '#home':
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-f-black text-f-mint font-body">
      <Navbar currentPath={currentPath} />
      <main 
        className={`flex-grow transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isTransitioning ? 'opacity-0 -translate-y-5' : 'opacity-100 translate-y-0'
        }`}
      >
        {renderPage()}
      </main>
      <Footer />
      <ConversionPopup />
      <ContactModal />
    </div>
  );
}