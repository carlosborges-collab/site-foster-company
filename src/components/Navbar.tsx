import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { openContactModal } from '../utils/contactEvents';

export default function Navbar({ currentPath }: { currentPath: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloqueia scroll do body quando menu mobile está aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const LangSwitcher = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`flex flex-row gap-1 bg-f-neon/5 rounded-full p-1 ${mobile ? 'mb-8 justify-center' : ''}`}>
      <button 
        onClick={() => setLanguage('pt')} 
        className={`px-2.5 py-1 rounded-full font-mono text-[11px] transition-all duration-200 ${language === 'pt' ? 'bg-f-neon/15 text-f-neon border border-f-neon/30' : 'text-f-mint/40 hover:text-f-mint/80 border border-transparent cursor-pointer'}`}
      >
        🇧🇷 PT
      </button>
      <button 
        disabled
        className="px-2.5 py-1 rounded-full font-mono text-[11px] text-f-mint/20 border border-transparent cursor-not-allowed opacity-40"
      >
        🇪🇸 ES
      </button>
      <button 
        disabled
        className="px-2.5 py-1 rounded-full font-mono text-[11px] text-f-mint/20 border border-transparent cursor-not-allowed opacity-40"
      >
        🇺🇸 EN
      </button>
    </div>
  );

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] h-[72px] transition-all duration-300 ${
        scrolled ? 'bg-f-black/90 backdrop-blur-xl border-b border-f-neon/15 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-full flex items-center justify-between">
          
          {/* Left: Logo */}
          <div className="flex items-center gap-4 z-10">
            <a href="#home" className="block active:scale-95 transition-transform" onClick={() => setMobileMenuOpen(false)}>
              <img 
                src="/Company branco.png" 
                alt="Foster Company" 
                className="h-7 md:h-8 w-auto object-contain"
              />
            </a>
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden md:flex items-center gap-8 bg-f-black/20 backdrop-blur-md px-6 py-2.5 rounded-full border border-f-neon/5">
            <a href="#home" className={`text-[13px] font-medium transition-colors duration-200 ${currentPath === '#home' ? 'text-f-neon' : 'text-f-mint/65 hover:text-f-neon'}`}>{t('nav_home')}</a>
            <a href="#gestao-youtube" className={`text-[13px] font-medium transition-colors duration-200 ${currentPath === '#gestao-youtube' ? 'text-f-neon' : 'text-f-mint/65 hover:text-f-neon'}`}>{t('nav_yt_growth')}</a>
            <a href="#build" className={`text-[13px] font-medium transition-colors duration-200 ${currentPath === '#build' ? 'text-f-neon' : 'text-f-mint/65 hover:text-f-neon'}`}>{t('nav_sites')}</a>
            <a href="#clone-digital" className={`text-[13px] font-medium transition-colors duration-200 ${currentPath === '#clone-digital' ? 'text-f-neon' : 'text-f-mint/65 hover:text-f-neon'}`}>{t('nav_clone_digital')}</a>
          </div>

          {/* Right: CTAs & Social */}
          <div className="hidden md:flex items-center gap-5">
            <LangSwitcher />
            <button 
              onClick={openContactModal} 
              className="bg-f-neon text-f-black font-display font-bold rounded-full px-6 py-2.5 text-sm hover:glow-neon active:scale-95 transition-all duration-300 cursor-pointer"
            >
              {t('nav_cta')}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-f-neon relative z-[101]" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-[90] md:hidden transition-all duration-500 ${mobileMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-f-black/60 backdrop-blur-md transition-opacity duration-500 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Content */}
        <div className={`absolute top-0 right-0 w-[85%] max-w-[320px] bg-[#030D09] h-full border-l border-f-neon/20 p-8 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileMenuOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'}`}>
          <div className="mt-16 flex flex-col gap-6">
            <LangSwitcher mobile={true} />
            
            <div className="h-px w-full bg-f-neon/10 mb-4"></div>
            
            <div className="flex flex-col gap-5 text-xl font-display font-bold">
              {[
                { href: '#home', label: t('nav_home') },
                { href: '#gestao-youtube', label: t('nav_yt_growth') },
                { href: '#build', label: t('nav_sites') },
                { href: '#clone-digital', label: t('nav_clone_digital') }
              ].map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`transition-colors active:text-f-neon ${currentPath === link.href ? 'text-f-neon' : 'text-f-mint'}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="h-px w-full bg-f-neon/10 my-4"></div>

            <button 
              onClick={() => { setMobileMenuOpen(false); openContactModal(); }} 
              className="w-full text-center bg-f-neon text-f-black font-display font-bold rounded-full py-4 text-lg hover:glow-neon active:scale-[0.98] transition-all duration-300 shadow-lg mt-4"
            >
              {t('nav_cta')}
            </button>
          </div>
          
          <div className="mt-auto text-center pb-8">
            <p className="font-mono text-[10px] text-f-mint/30 uppercase tracking-widest">Foster Company · 2026</p>
          </div>
        </div>
      </div>
    </>
  );
}