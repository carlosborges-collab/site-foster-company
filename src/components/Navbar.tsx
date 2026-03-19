import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useContact } from '../context/ContactContext';

export default function Navbar({ currentPath }: { currentPath: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { openContact } = useContact();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const LangSwitcher = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`flex flex-row gap-1 bg-f-neon/5 rounded-full p-1 ${mobile ? 'mb-8 justify-center' : ''}`}>
      {['pt', 'es', 'en'].map((lang) => (
        <button 
          key={lang} onClick={() => setLanguage(lang as any)} 
          className={`px-2.5 py-1 rounded-full font-mono text-[11px] transition-all duration-200 ${language === lang ? 'bg-f-neon/15 text-f-neon border border-f-neon/30' : 'text-f-mint/40 hover:text-f-mint/80 border border-transparent'}`}
        >
          {lang === 'pt' ? '🇧🇷 PT' : lang === 'es' ? '🇪🇸 ES' : '🇺🇸 EN'}
        </button>
      ))}
    </div>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-[68px] transition-all duration-300 ${scrolled ? 'bg-f-black/90 backdrop-blur-xl border-b border-f-neon/15' : 'bg-f-black/85 backdrop-blur-xl border-b border-f-neon/5'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#home"><img src="/Company branco.png" alt="Foster Company" className="h-7 md:h-8 w-auto object-contain" /></a>
          <span className="text-f-neon/20 hidden sm:inline">|</span>
          <span className="font-mono text-[10px] text-f-mint/40 uppercase hidden sm:inline tracking-widest">Creative AI Studio</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <div className="relative h-[68px] flex items-center" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button className="text-[14px] text-f-mint/65 hover:text-f-neon transition-colors duration-200 cursor-pointer">{t('nav_solutions')}</button>
            {dropdownOpen && (
              <div className="absolute top-[68px] left-1/2 -translate-x-1/2 w-[800px] bg-f-black border border-f-neon/15 rounded-xl p-8 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="grid grid-cols-4 gap-8">
                  <div>
                    <a href="#create" className="block font-display font-semibold text-[13px] text-f-neon mb-4 hover:underline">◈ Foster Create</a>
                    <ul className="space-y-3 text-[14px] text-f-mint/70 font-body">
                      <li><a href="#create-producao" className="hover:text-f-neon transition-colors">Produção Audiovisual com IA</a></li>
                      <li><a href="#create-avatar" className="hover:text-f-neon transition-colors">Avatar de IA</a></li>
                      <li><a href="#create-conteudo" className="hover:text-f-neon transition-colors">Conteúdo com IA</a></li>
                    </ul>
                  </div>
                  <div>
                    <a href="#build" className="block font-display font-semibold text-[13px] text-f-neon mb-4 hover:underline">⬡ Foster Build</a>
                    <ul className="space-y-3 text-[14px] text-f-mint/70 font-body">
                      <li><a href="#build-sites" className="hover:text-f-neon transition-colors">Sites com IA</a></li>
                      <li><a href="#build-plataformas" className="hover:text-f-neon transition-colors">Plataformas Digitais</a></li>
                    </ul>
                  </div>
                  <div>
                    <a href="#grow" className="block font-display font-semibold text-[13px] text-f-neon mb-4 hover:underline">▲ Foster Grow</a>
                    <ul className="space-y-3 text-[14px] text-f-mint/70 font-body">
                      <li><a href="#gestao-youtube" className="hover:text-f-neon transition-colors">Gestão de YouTube</a></li>
                      <li><a href="#grow-mentoria" className="hover:text-f-neon transition-colors">Mentoria 3Ps</a></li>
                      <li><a href="#grow-posicionamento" className="hover:text-f-neon transition-colors">Posicionamento Digital</a></li>
                    </ul>
                  </div>
                  <div>
                    <div className="block font-display font-semibold text-[13px] text-f-mint/60 mb-4">✦ Foster</div>
                    <ul className="space-y-3 text-[14px] text-f-mint/70 font-body">
                      <li><a href="#canais" className="hover:text-f-neon transition-colors flex items-center gap-1">Canais Próprios <ExternalLink size={12} /></a></li>
                      <li><a href="#musica" className="hover:text-f-neon transition-colors flex items-center gap-1">Selo Musical <ExternalLink size={12} /></a></li>
                    </ul>
                    <div className="h-px w-full bg-f-neon/10 my-4"></div>
                    <ul className="space-y-3 text-[14px] text-f-mint/70 font-body">
                      <li><a href="#home" className="hover:text-f-neon transition-colors">Sobre a Foster</a></li>
                      <li><button onClick={openContact} className="hover:text-f-neon transition-colors text-left cursor-pointer">Contato</button></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <a href="#ifoster" className={`text-[14px] transition-colors duration-200 ${currentPath === '#ifoster' ? 'text-f-neon' : 'text-f-mint/65 hover:text-f-neon'}`}>{t('nav_ifoster')}</a>
          <a href="#clone-digital" className={`text-[14px] transition-colors duration-200 ${currentPath === '#clone-digital' ? 'text-f-neon' : 'text-f-mint/65 hover:text-f-neon'}`}>{t('nav_clone_digital')}</a>
        </div>
        <div className="hidden md:flex items-center gap-5">
          <LangSwitcher />
          <button onClick={openContact} className="bg-f-neon text-f-black font-display font-semibold rounded-full px-5 py-2.5 text-sm hover:glow-neon transition-all duration-300 cursor-pointer">
            {t('nav_cta')} →
          </button>
        </div>
        <button className="md:hidden text-f-neon" onClick={() => setMobileMenuOpen(true)}><Menu size={24} /></button>
      </div>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">
          <div className="w-4/5 max-sm:w-full max-w-sm bg-f-black h-full border-l border-f-neon/20 p-6 flex flex-col overflow-y-auto">
            <div className="flex justify-between items-center mb-10">
              <img src="/Company branco.png" alt="Foster Company" className="h-6 w-auto object-contain" />
              <button onClick={() => setMobileMenuOpen(false)} className="text-f-neon"><X size={24} /></button>
            </div>
            <div className="flex flex-col gap-4 text-lg font-display">
              <details className="group"><summary className="text-f-mint hover:text-f-neon cursor-pointer list-none flex justify-between items-center">Soluções <span className="text-f-neon/50 group-open:rotate-180 transition-transform">▼</span></summary>
                <div className="flex flex-col gap-4 mt-4 pl-4 border-l border-f-neon/20 text-[15px]"><a href="#create" onClick={() => setMobileMenuOpen(false)}>Foster Create</a><a href="#build" onClick={() => setMobileMenuOpen(false)}>Foster Build</a><a href="#grow" onClick={() => setMobileMenuOpen(false)}>Foster Grow</a></div>
              </details>
              <a href="#ifoster" onClick={() => setMobileMenuOpen(false)}>{t('nav_ifoster')}</a>
              <a href="#clone-digital" onClick={() => setMobileMenuOpen(false)}>{t('nav_clone_digital')}</a>
              <button onClick={() => { setMobileMenuOpen(false); openContact(); }} className="text-left text-f-mint hover:text-f-neon cursor-pointer">Contato</button>
            </div>
            <div className="mt-auto pb-8">
              <button onClick={() => { setMobileMenuOpen(false); openContact(); }} className="block w-full text-center bg-f-neon text-f-black font-display font-semibold rounded-full px-5 py-4 hover:glow-neon transition-all cursor-pointer">{t('nav_cta')} →</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}