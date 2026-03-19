import { Instagram, Youtube, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useContact } from '../context/ContactContext';

export default function Footer() {
  const { t } = useLanguage();
  const { openContact } = useContact();

  return (
    <footer className="bg-f-black border-t border-f-neon/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div>
            <div className="mb-4">
              <img src="/Company branco.png" alt="Foster Company" className="h-10 w-auto object-contain" />
            </div>
            <p className="font-mono text-[11px] text-f-mint/35 uppercase mb-1 tracking-widest">Creative AI Studio</p>
            <p className="italic text-sm text-f-mint/35 mb-6">Criados para Criar</p>
            
            <div className="flex gap-3">
              <a href="https://www.instagram.com/foster.company/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-f-neon/20 flex items-center justify-center text-f-mint/60 hover:bg-f-neon/10 hover:text-f-neon transition-all"><Instagram size={16} /></a>
              <a href="https://www.youtube.com/@fostercompany" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-f-neon/20 flex items-center justify-center text-f-mint/60 hover:bg-f-neon/10 hover:text-f-neon transition-all"><Youtube size={16} /></a>
              <button onClick={openContact} className="w-9 h-9 rounded-full border border-f-neon/20 flex items-center justify-center text-f-mint/60 hover:bg-f-neon/10 hover:text-f-neon transition-all cursor-pointer"><MessageCircle size={16} /></button>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs text-f-neon mb-6 uppercase tracking-wider">{t('footer_solutions_title')}</h3>
            <ul className="space-y-3 text-sm text-f-mint/65">
              <li><a href="#create" className="hover:text-f-neon transition-colors">Foster Create</a></li>
              <li><a href="#build" className="hover:text-f-neon transition-colors">Foster Build</a></li>
              <li><a href="#grow" className="hover:text-f-neon transition-colors">Foster Grow</a></li>
              <li><a href="#clone-digital" className="hover:text-f-neon transition-colors">Clone Digital</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs text-f-neon mb-6 uppercase tracking-wider">{t('footer_links_title')}</h3>
            <ul className="space-y-3 text-sm text-f-mint/65">
              <li><a href="#ifoster" className="hover:text-f-neon transition-colors">iFoster</a></li>
              <li><a href="#canais" className="hover:text-f-neon transition-colors">Canais Próprios</a></li>
              <li><a href="#musica" className="hover:text-f-neon transition-colors">Selo Musical</a></li>
              <li><a href="#home" className="hover:text-f-neon transition-colors">Sobre Nós</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-mono text-xs text-f-neon mb-6 uppercase tracking-wider">Contato</h3>
            <ul className="space-y-4 text-sm text-f-mint/65">
              <li><button onClick={openContact} className="hover:text-f-neon transition-colors text-left cursor-pointer">Falar com a Equipe</button></li>
              <li><a href="mailto:contato@foster.company" className="hover:text-f-neon transition-colors">E-mail</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-f-neon/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-f-mint/30">
          <p>© 2025 Foster Company. {t('footer_rights')}</p>
          <p>Balneário Camboriú, Santa Catarina, Brasil 🇧🇷</p>
        </div>
      </div>
    </footer>
  );
}