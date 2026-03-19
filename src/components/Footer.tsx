import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-f-black border-t border-f-neon/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <div className="mb-4">
              <img 
                src="/Company branco.png" 
                alt="Foster Company" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="font-mono text-[11px] text-f-mint/35 uppercase mb-1 tracking-widest">Creative AI Studio</p>
            <p className="italic text-sm text-f-mint/35">Criados para Criar</p>
          </div>

          <div className="text-right hidden md:block">
             <p className="font-mono text-[10px] text-f-neon/40 uppercase tracking-[0.2em]">Innovation · Strategy · IA</p>
          </div>
        </div>

        <div className="border-t border-f-neon/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-f-mint/30">
          <p>© 2026 Foster Company. {t('footer_rights')}</p>
          <p>Balneário Camboriú, Santa Catarina, Brasil 🇧🇷</p>
        </div>
      </div>
    </footer>
  );
}