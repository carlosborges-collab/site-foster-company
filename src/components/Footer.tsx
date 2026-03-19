import { Instagram, Youtube, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-f-black border-t border-f-neon/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1 */}
          <div>
            <div className="mb-4">
              <img 
                src="/Company branco.png" 
                alt="Foster Company" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="font-mono text-[11px] text-f-mint/35 uppercase mb-1 tracking-widest">Creative AI Studio</p>
            <p className="italic text-sm text-f-mint/35 mb-6">Criados para Criar</p>
            
            <div className="flex gap-3">
              <a href="https://www.instagram.com/foster.company/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-f-neon/20 flex items-center justify-center text-f-mint/60 hover:bg-f-neon/10 hover:text-f-neon transition-all">
                <Instagram size={16} />
              </a>
              <a href="https://www.youtube.com/@fostercompany" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-f-neon/20 flex items-center justify-center text-f-mint/60 hover:bg-f-neon/10 hover:text-f-neon transition-all">
                <Youtube size={16} />
              </a>
              <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-f-neon/20 flex items-center justify-center text-f-mint/60 hover:bg-f-neon/10 hover:text-f-neon transition-all">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="font-mono text-xs text-f-neon mb-6 uppercase tracking-wider">{t('footer_solutions_title')}</h3>
            <ul className="space-y-4 text-sm text-f-mint/65">
              <li><a href="#production" className="hover:text-f-neon transition-colors">Produção Audiovisual</a></li>
              <li><a href="#create" className="hover:text-f-neon transition-colors">Foster Create</a></li>
              <li><a href="#build" className="hover:text-f-neon transition-colors">Foster Build</a></li>
              <li><a href="#grow" className="hover:text-f-neon transition-colors">Foster Grow</a></li>
              <li><a href="#ifoster" className="hover:text-f-neon transition-colors">{t('nav_ifoster')}</a></li>
              <li><a href="#plataformas" className="hover:text-f-neon transition-colors">{t('nav_platforms')}</a></li>
              <li><a href="#canais" className="hover:text-f-neon transition-colors">{t('nav_channels')}</a></li>
              <li><a href="#musica" className="hover:text-f-neon transition-colors">{t('nav_music')}</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="font-mono text-xs text-f-neon mb-6 uppercase tracking-wider">{t('footer_links_title')}</h3>
            <ul className="space-y-4 text-sm text-f-mint/65">
              <li><a href="#home" className="hover:text-f-neon transition-colors">{t('nav_work')}</a></li>
              <li><a href="#home" className="hover:text-f-neon transition-colors">{t('nav_carlos')}</a></li>
              <li><a href="#grow" className="hover:text-f-neon transition-colors">Método 3Ps</a></li>
              <li><a href="#home" className="hover:text-f-neon transition-colors">Sobre</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h3 className="font-mono text-xs text-f-neon mb-6 uppercase tracking-wider">Contato</h3>
            <ul className="space-y-4 text-sm text-f-mint/65">
              <li><a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="hover:text-f-neon transition-colors">WhatsApp</a></li>
              <li><a href="mailto:contato@foster.company" className="hover:text-f-neon transition-colors">E-mail</a></li>
              <li><a href="https://www.instagram.com/foster.company/" target="_blank" rel="noopener noreferrer" className="hover:text-f-neon transition-colors">Instagram</a></li>
              <li><a href="https://www.youtube.com/@fostercompany" target="_blank" rel="noopener noreferrer" className="hover:text-f-neon transition-colors">YouTube</a></li>
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