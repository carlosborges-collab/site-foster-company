import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ifoster from './pages/Ifoster';
import Build from './pages/Build';
import Music from './pages/Music';
import CloneDigital from './pages/CloneDigital';
import YoutubeGrowth from './pages/YoutubeGrowth';
import Lab from './pages/Lab';
import LabPost from './pages/LabPost';
import ConversionPopup from './components/ConversionPopup';
import ContactModal from './components/ContactModal';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayPath, setDisplayPath] = useState(currentPath);

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash || '#home';
      
      const mainPages = [
        '#home', 
        '#ifoster', 
        '#musica', 
        '#gestao-youtube', 
        '#clone-digital',
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