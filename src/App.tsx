import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ifoster from './pages/Ifoster';
import Grow from './pages/Grow';
import Create from './pages/Create';
import Build from './pages/Build';
import Channels from './pages/Channels';
import Music from './pages/Music';
import CloneDigital from './pages/CloneDigital';
import YoutubeGrowth from './pages/YoutubeGrowth';
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
        '#canais', 
        '#musica', 
        '#gestao-youtube', 
        '#clone-digital',
        '#create',
        '#build',
        '#grow'
      ];

      // Caso seja um ID interno
      const simpleId = newHash.startsWith('#') ? newHash.slice(1) : newHash;
      const simpleEl = document.getElementById(simpleId);
      
      if (simpleEl && !mainPages.includes(newHash)) {
        const offset = 80; // Altura da navbar + margem
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = simpleEl.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        return;
      }

      // Mudança de página principal
      let baseHash = newHash;
      if (newHash.startsWith('#create')) baseHash = '#create';
      if (newHash.startsWith('#build')) baseHash = '#build';
      if (newHash.startsWith('#grow')) baseHash = '#grow';

      if (baseHash !== currentPath) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentPath(baseHash);
          setDisplayPath(baseHash);
          window.scrollTo(0, 0);
          setIsTransitioning(false);
        }, 300);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPath]);

  const renderPage = () => {
    if (displayPath.startsWith('#create')) return <Create />;
    if (displayPath.startsWith('#build')) return <Build />;
    if (displayPath.startsWith('#grow')) return <Grow />;
    
    switch (displayPath) {
      case '#gestao-youtube': return <YoutubeGrowth />;
      case '#clone-digital': return <CloneDigital />;
      case '#ifoster': return <Ifoster />;
      case '#canais': return <Channels />;
      case '#musica': return <Music />;
      case '#home':
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-f-black text-f-mint font-body overflow-x-hidden">
      <Navbar currentPath={currentPath} />
      <main 
        className={`flex-grow transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isTransitioning ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'
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