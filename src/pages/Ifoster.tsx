import { useState, useEffect, FormEvent } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Send, FileText, MousePointerClick, Target, Terminal, LogIn, Layout, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { openContactModal } from '../utils/contactEvents';

export default function Ifoster() {
  const [chatStep, setChatStep] = useState(0);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const timer1 = setTimeout(() => setChatStep(1), 1000);
    const timer2 = setTimeout(() => setChatStep(2), 2500);
    const timer3 = setTimeout(() => setChatStep(3), 4500);
    const timer4 = setTimeout(() => setChatStep(4), 6000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-[140px] pb-20 bg-[#030D09] overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,242,167,0.1)_0%,transparent_100%)]"></div>
        
        <div className="max-w-7xl mx-auto px-5 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-[#50F2A7]/5 border border-[#50F2A7]/30 rounded-full px-4 py-1.5 mb-8">
                <span className="font-mono text-[12px] text-[#50F2A7]">{t('ifp_hero_badge')}</span>
              </div>
              
              <h1 className="font-display font-bold text-[clamp(48px,7vw,80px)] leading-[1.0] tracking-tight mb-8">
                <span className="block text-[#E1F2DF]">{t('ifp_hero_h1_1')}</span>
                <span className="block text-[#E1F2DF]">{t('ifp_hero_h1_2')}</span>
                <span className="block text-[#50F2A7] text-glow">{t('ifp_hero_h1_3')}</span>
              </h1>

              <div className="border-l-[3px] border-[#50F2A7] pl-6 max-w-[500px] mb-10">
                <p className="text-[#E1F2DF]/60 text-[18px] font-light leading-[1.55]">
                  {t('ifp_hero_sub')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={openContactModal}
                  className="bg-[#50F2A7] text-[#030D09] font-display font-semibold rounded-full px-8 py-4 text-center hover:glow-neon transition-all duration-300 cursor-pointer"
                >
                  {t('ifoster_cta_main')}
                </button>
                <a href="#agentes" className="border border-[#50F2A7]/30 text-[#50F2A7] font-display font-medium rounded-full px-8 py-4 text-center hover:bg-[#50F2A7]/10 transition-all duration-300">
                  Ver Agentes
                </a>
              </div>
            </AnimatedSection>
          </div>

          <div className="relative h-[500px] hidden md:block">
            <AnimatedSection delay={200} className="h-full w-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-[480px] bg-[#030D09] border border-[#50F2A7]/20 rounded-2xl overflow-hidden animate-float relative z-20 shadow-2xl">
                  <div className="bg-[#030D09] border-b border-[#50F2A7]/20 p-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#50F2A7]/10 flex items-center justify-center">
                      <span className="text-[#50F2A7] text-sm">✦</span>
                    </div>
                    <div className="font-mono text-[13px] text-[#E1F2DF]">
                      iFoster · Operação Proprietária <span className="text-[#50F2A7] animate-pulse">●</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-6 h-[380px] overflow-y-auto font-body text-[14px]">
                    <div className={`flex justify-end transition-all duration-500 ${chatStep >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <div className="bg-[#50F2A7]/10 text-[#E1F2DF] rounded-2xl rounded-tr-sm px-5 py-3 max-w-[85%]">
                        Gerar relatório de tendências baseado no nosso histórico de vendas do último trimestre.
                      </div>
                    </div>

                    {chatStep === 1 && (
                      <div className="flex justify-start">
                        <div className="bg-[#104037]/60 rounded-2xl rounded-tl-sm px-5 py-4 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#50F2A7] rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 bg-[#50F2A7] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-1.5 h-1.5 bg-[#50F2A7] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    )}

                    <div className={`flex justify-start transition-all duration-500 ${chatStep >= 2 ? 'opacity-100 translate-y-0 hidden' : 'opacity-0 translate-y-4 hidden'} ${chatStep >= 2 ? '!flex' : ''}`}>
                      <div className="flex gap-3 max-w-[90%]">
                        <div className="w-7 h-7 rounded-full bg-[#50F2A7]/20 flex items-center justify-center shrink-0 mt-1">
                          <span className="text-[#50F2A7] text-xs">✦</span>
                        </div>
                        <div className="bg-[#104037]/60 text-[#E1F2DF] rounded-2xl rounded-tl-sm px-5 py-4">
                          <p className="mb-3">Acessando base de dados interna... Relatório gerado com sucesso:</p>
                          <div className="font-mono text-[12px] text-[#50F2A7]/90 bg-[#030D09] p-3 rounded-lg border border-[#50F2A7]/20">
                            DATA_SOURCE: Internal_Server_01<br/>
                            INSIGHT: Crescimento de 24% no segmento...<br/>
                            STATUS: Concluído ✓
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border-t border-[#50F2A7]/10 bg-[#030D09]">
                    <div className="bg-[#50F2A7]/5 border border-[#50F2A7]/20 rounded-full px-4 py-3 flex items-center justify-between">
                      <span className="text-[#E1F2DF]/30 text-sm">Acessando servidor proprietário...</span>
                      <Send size={16} className="text-[#50F2A7]/50" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* OS SUPER AGENTES */}
      <section id="agentes" className="py-28 bg-[#030D09] border-t border-[#50F2A7]/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <AnimatedSection className="mb-16">
            <div className="font-mono text-[#50F2A7]/70 mb-6">/ super agentes</div>
            <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] text-[#E1F2DF] mb-6">{t('ifp_agents_title')}</h2>
            <p className="text-[#E1F2DF]/60 text-[18px] max-w-3xl">
              {t('ifp_agents_subtitle')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection>
              <div className="bg-[#030D09] border border-[#50F2A7]/20 rounded-2xl p-8 hover:border-[#50F2A7]/50 transition-colors h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#50F2A7]/10 flex items-center justify-center">
                    <FileText size={24} className="text-[#50F2A7]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-[#E1F2DF]">Roteirista IA</h3>
                    <div className="font-mono text-[10px] text-[#50F2A7] mt-1">Vídeo · Podcast · Comercial · Série</div>
                  </div>
                </div>
                <p className="text-[#E1F2DF]/65 text-[15px] leading-[1.55] mb-4">
                  Roteiros para YouTube, Reels, comerciais, podcasts e séries. Com estrutura narrativa, timing e hook — do briefing ao script pronto.
                </p>
                <div className="text-[11px] font-mono text-[#50F2A7]/60 mb-6 italic">
                  {t('ifp_agents_lock')}
                </div>
                <div className="bg-[#030D09] border border-[#50F2A7]/10 rounded-xl p-4 font-mono text-[12px] text-[#50F2A7]/80 mb-6 mt-auto">
                  <span className="text-[#E1F2DF]/50">CONTEXTO:</span> "Padrão de Linguagem Corporativa v2.1"<br/>
                  <span className="text-[#E1F2DF]/50">FONTE:</span> "Guia de Tom de Voz da Marca.pdf"<br/>
                </div>
                <div className="font-mono text-[11px] text-[#50F2A7]">◉ {t('ifp_agents_badge')}</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="bg-[#030D09] border border-[#50F2A7]/20 rounded-2xl p-8 hover:border-[#50F2A7]/50 transition-colors h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#50F2A7]/10 flex items-center justify-center">
                    <MousePointerClick size={24} className="text-[#50F2A7]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-[#E1F2DF]">Copywriter IA</h3>
                    <div className="font-mono text-[10px] text-[#50F2A7] mt-1">Anúncios · Sites · E-mail · Redes Sociais</div>
                  </div>
                </div>
                <p className="text-[#E1F2DF]/65 text-[15px] leading-[1.55] mb-4">
                  Copy de alta conversão para anúncios, landing pages, e-mails e posts. Cada palavra com intenção — cada texto testado para converter.
                </p>
                <div className="text-[11px] font-mono text-[#50F2A7]/60 mb-6 italic">
                  {t('ifp_agents_lock')}
                </div>
                <div className="bg-[#030D09] border border-[#50F2A7]/10 rounded-xl p-4 font-mono text-[12px] text-[#50F2A7]/80 mb-6 mt-auto">
                  <span className="text-[#E1F2DF]/50">APRENDIZADO:</span> "Histórico de CTR Campanha Julho/Agosto"
                </div>
                <div className="font-mono text-[11px] text-[#50F2A7]">◉ {t('ifp_agents_badge')}</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-[#030D09] border border-[#50F2A7]/20 rounded-2xl p-8 hover:border-[#50F2A7]/50 transition-colors h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#50F2A7]/10 flex items-center justify-center">
                    <Target size={24} className="text-[#50F2A7]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-[#E1F2DF]">Estrategista de Conteúdo</h3>
                    <div className="font-mono text-[10px] text-[#50F2A7] mt-1">Calendário · Posicionamento · Funil</div>
                  </div>
                </div>
                <p className="text-[#E1F2DF]/65 text-[15px] leading-[1.55] mb-4 mt-auto">
                  Planejamento editorial completo, calendário de conteúdo, estratégia de posicionamento e funil de audiência. Da ideia ao plano de execução.
                </p>
                <div className="text-[11px] font-mono text-[#50F2A7]/60 mb-6 italic">
                  {t('ifp_agents_lock')}
                </div>
                <div className="font-mono text-[11px] text-[#50F2A7]">◉ {t('ifp_agents_badge')}</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-[#030D09] border border-[#50F2A7]/20 rounded-2xl p-8 hover:border-[#50F2A7]/50 transition-colors h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#50F2A7]/10 flex items-center justify-center">
                    <Terminal size={24} className="text-[#50F2A7]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-[#E1F2DF]">Arquiteto de Prompts</h3>
                    <div className="font-mono text-[10px] text-[#50F2A7] mt-1">Engenharia de Prompts · IA · Automação</div>
                  </div>
                </div>
                <p className="text-[#E1F2DF]/65 text-[15px] leading-[1.55] mb-4">
                  Extrai o máximo de qualquer ferramenta de IA com prompts construídos para resultados. Para quem quer usar IA de verdade, não só experimentar.
                </p>
                <div className="text-[11px] font-mono text-[#50F2A7]/60 mb-6 italic">
                  {t('ifp_agents_lock')}
                </div>
                <div className="font-mono text-[11px] text-[#50F2A7]">◉ {t('ifp_agents_badge')}</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400} className="md:col-span-2">
              <div className="bg-[#50F2A7]/[0.03] border-2 border-dashed border-[#50F2A7]/30 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <div className="font-mono text-[10px] text-[#50F2A7] mb-3">{t('ifp_dev_badge')}</div>
                  <h3 className="font-display font-bold text-3xl text-[#E1F2DF] mb-3">{t('ifp_dev_title')}</h3>
                  <p className="text-[#E1F2DF]/60 text-[16px] max-w-xl">
                    {t('ifp_dev_desc')}
                  </p>
                </div>
                <div className="w-full md:w-auto">
                  <button 
                    onClick={openContactModal}
                    className="bg-[#50F2A7] text-[#030D09] font-display font-semibold rounded-full px-8 py-4 hover:glow-neon transition-all whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 w-full md:w-auto"
                  >
                    {t('ifp_dev_cta')}
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PLATFORM SHOWCASE - INTERACTIVE */}
      <section className="py-28 bg-[#104037]/20 border-y border-[#50F2A7]/10 relative">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="text-center mb-20">
            <div className="font-mono text-[#50F2A7]/70 mb-6 uppercase tracking-widest text-sm">Interface do Usuário</div>
            <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] text-[#E1F2DF]">Conheça o Ambiente iFoster</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Login Screen */}
            <div className="lg:col-span-5">
              <AnimatedSection delay={100}>
                <motion.div 
                  whileHover={{ scale: 1.02, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedImg('/ifoster-login.png')}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#50F2A7]/30 to-transparent rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative bg-[#030D09] border border-[#50F2A7]/20 rounded-2xl overflow-hidden shadow-2xl group-hover:border-[#50F2A7]/50 transition-colors">
                    <div className="bg-[#030D09] border-b border-[#50F2A7]/10 px-5 py-3 flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500/40"></div>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-[9px] text-[#E1F2DF]/40 uppercase tracking-widest">
                        <LogIn size={10} /> Autenticação
                      </div>
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img 
                        src="/ifoster-login.png" 
                        alt="Login iFoster" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-f-neon/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <div className="bg-f-black/80 p-3 rounded-full border border-f-neon/30 text-f-neon">
                            <Maximize2 size={20} />
                         </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 font-mono text-[10px] text-[#50F2A7]/60 uppercase tracking-widest text-center">Acesso restrito e criptografado</p>
                </motion.div>
              </AnimatedSection>
            </div>

            {/* Dashboard Screen */}
            <div className="lg:col-span-7">
              <AnimatedSection delay={300}>
                <motion.div 
                  whileHover={{ scale: 1.02, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedImg('/ifoster-dashboard.png')}
                >
                  <div className="absolute -inset-1 bg-gradient-to-l from-[#50F2A7]/30 to-transparent rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative bg-[#030D09] border border-[#50F2A7]/20 rounded-2xl overflow-hidden shadow-2xl group-hover:border-[#50F2A7]/50 transition-colors">
                    <div className="bg-[#030D09] border-b border-[#50F2A7]/10 px-5 py-3 flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500/40"></div>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-[9px] text-[#E1F2DF]/40 uppercase tracking-widest">
                        <Layout size={10} /> Painel de Gestão
                      </div>
                    </div>
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img 
                        src="/ifoster-dashboard.png" 
                        alt="Dashboard iFoster" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-f-neon/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <div className="bg-f-black/80 p-3 rounded-full border border-f-neon/30 text-f-neon">
                            <Maximize2 size={24} />
                         </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 font-mono text-[10px] text-[#50F2A7]/60 uppercase tracking-widest text-center">Gestão completa de ativos de IA</p>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Modal para Zoom */}
        <AnimatePresence>
          {selectedImg && (
            <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 md:p-12">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImg(null)}
                className="absolute inset-0 bg-f-black/95 backdrop-blur-xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative max-w-7xl w-full h-fit bg-f-black border border-f-neon/20 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(80,242,167,0.15)]"
              >
                <button 
                  onClick={() => setSelectedImg(null)}
                  className="absolute top-6 right-6 z-20 bg-f-black/80 border border-f-neon/30 text-f-neon p-2 rounded-full hover:bg-f-neon hover:text-f-black transition-all"
                >
                  <Terminal size={20} />
                </button>
                <img src={selectedImg} className="w-full h-auto" alt="Zoom iFoster" />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-28 bg-[#104037] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <AnimatedSection className="text-center mb-20">
            <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] text-[#E1F2DF]">{t('ifp_how_title')}</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-px bg-[#50F2A7]/20">
              <div className="h-full bg-[#50F2A7] w-1/3 animate-[slide-right_3s_ease-in-out_infinite]"></div>
            </div>
            <AnimatedSection delay={100}>
              <div className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-[#030D09] border border-[#50F2A7]/40 flex items-center justify-center mx-auto mb-6 relative z-10 shadow-[0_0_15px_rgba(80,242,167,0.2)]">
                  <span className="font-mono text-xl text-[#50F2A7]">01</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-[#E1F2DF] mb-4">{t('ifp_how_step1_t')}</h3>
                <p className="text-[#E1F2DF]/70 text-[15px] leading-[1.6]">{t('ifp_how_step1_d')}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-[#030D09] border border-[#50F2A7]/40 flex items-center justify-center mx-auto mb-6 relative z-10 shadow-[0_0_15px_rgba(80,242,167,0.2)]">
                  <span className="font-mono text-xl text-[#50F2A7]">02</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-[#E1F2DF] mb-4">{t('ifp_how_step2_t')}</h3>
                <p className="text-[#E1F2DF]/70 text-[15px] leading-[1.6]">{t('ifp_how_step2_d')}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-[#030D09] border border-[#50F2A7]/40 flex items-center justify-center mx-auto mb-6 relative z-10 shadow-[0_0_15px_rgba(80,242,167,0.2)]">
                  <span className="font-mono text-xl text-[#50F2A7]">03</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-[#E1F2DF] mb-4">{t('ifp_how_step3_t')}</h3>
                <p className="text-[#E1F2DF]/70 text-[15px] leading-[1.6]">{t('ifp_how_step3_d')}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PARA QUEM É O iFOSTER ISO */}
      <section className="py-28 bg-[#030D09]">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display font-bold text-[clamp(32px,4vw,44px)] text-[#E1F2DF]">{t('ifp_who_title')}</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t('ifp_who_1_t'), desc: t('ifp_who_1_d'), icon: "🏢" },
              { title: t('ifp_who_2_t'), desc: t('ifp_who_2_d'), icon: "🎬" },
              { title: t('ifp_who_3_t'), desc: t('ifp_who_3_d'), icon: "⚙️" },
              { title: t('ifp_who_4_t'), desc: t('ifp_who_4_d'), icon: "👔" }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-[#50F2A7]/[0.02] border border-[#50F2A7]/10 rounded-2xl p-8 h-full hover:border-[#50F2A7]/30 transition-colors">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-display font-bold text-xl text-[#E1F2DF] mb-3">{item.title}</h3>
                  <p className="text-[#E1F2DF]/60 text-[14px] leading-[1.5]">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className="py-28 bg-[#104037]">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display font-bold text-[clamp(32px,4vw,44px)] text-[#E1F2DF]">{t('ifp_comp_title')}</h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="bg-[#030D09] border border-[#50F2A7]/20 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-3 bg-[#50F2A7]/5 border-b border-[#50F2A7]/20">
                <div className="p-6 border-r border-[#50F2A7]/10"></div>
                <div className="p-6 font-mono text-[13px] text-[#E1F2DF]/50 uppercase text-center border-r border-[#50F2A7]/10">FERRAMENTAS COMUNS</div>
                <div className="p-6 font-mono text-[13px] text-[#50F2A7] uppercase text-center font-bold">iFOSTER PROPRIETÁRIO</div>
              </div>
              {[
                ["Onde os dados ficam", "Servidores de terceiros", "Servidor da sua empresa"],
                ["Treinamento", "Genérico, internet", "Exclusivo com seu conteúdo"],
                ["Controle de acesso", "Limitado", "Por área, por função, por agente"],
                ["Aprendizado", "Não retém o histórico da sua empresa", "Evolui com o uso e com novos dados"],
                ["Compliance & LGPD", "Risco de exposição", "Ambiente controlado e auditável"],
                ["Personalização", "Prompts manuais", "Agentes treinados para o seu contexto"]
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 border-b border-[#50F2A7]/10 last:border-0">
                  <div className="p-6 text-[13px] text-[#E1F2DF]/40 font-mono flex items-center border-r border-[#50F2A7]/10">{row[0]}</div>
                  <div className="p-6 text-[14px] text-[#E1F2DF]/60 border-r border-[#50F2A7]/10 flex items-center justify-center text-center">{row[1]}</div>
                  <div className="p-6 text-[14px] text-[#E1F2DF] flex items-center justify-center text-center font-medium">{row[2]}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 bg-[#030D09] text-center border-t border-[#50F2A7]/10">
        <div className="max-w-4xl mx-auto px-5">
          <AnimatedSection>
            <h2 className="font-display font-bold text-[clamp(40px,5.5vw,64px)] text-[#E1F2DF] mb-6 leading-[1.1]">{t('ifp_cta_h2')}</h2>
            <p className="text-xl text-[#E1F2DF]/50 mb-12 max-w-3xl mx-auto">{t('ifp_cta_sub')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button onClick={openContactModal} className="bg-[#50F2A7] text-[#030D09] font-display font-bold rounded-full px-10 py-5 text-lg hover:glow-neon hover:scale-[1.03] transition-all duration-300 cursor-pointer">{t('ifp_cta_btn1')}</button>
              <button onClick={openContactModal} className="border border-[#50F2A7]/30 text-[#50F2A7] font-display font-medium rounded-full px-10 py-5 text-lg hover:bg-[#50F2A7]/10 transition-all duration-300 cursor-pointer">{t('ifp_cta_btn2')}</button>
            </div>
            <p className="font-mono text-[12px] text-[#E1F2DF]/40 mt-12">Desenvolvido pela Foster Company · Creative AI Studio</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}