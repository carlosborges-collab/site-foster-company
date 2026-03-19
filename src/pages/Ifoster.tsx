import { useState, useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { CheckCircle2, Send, FileText, MousePointerClick, Target, Terminal } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { openContactModal } from '../utils/contactEvents';

export default function Ifoster() {
  const [chatStep, setChatStep] = useState(0);
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
        {/* Grid lines and particles */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,242,167,0.1)_0%,transparent_100%)]"></div>
        
        <div className="max-w-7xl mx-auto px-5 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Column */}
          <div>
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-[#50F2A7]/5 border border-[#50F2A7]/30 rounded-full px-4 py-1.5 mb-8">
                <span className="font-mono text-[12px] text-[#50F2A7]" data-i18n="hero_badge">{t('hero_badge')}</span>
              </div>
              
              <h1 className="font-display font-bold text-[clamp(48px,7vw,80px)] leading-[1.0] tracking-tight mb-8">
                <span className="block text-[#E1F2DF]" data-i18n="ifoster_hero_title_1">{t('ifoster_hero_title_1')}</span>
                <span className="block text-[#E1F2DF]" data-i18n="ifoster_hero_title_2">{t('ifoster_hero_title_2')}</span>
                <span className="block text-[#50F2A7] text-glow" data-i18n="ifoster_hero_title_3">{t('ifoster_hero_title_3')}</span>
              </h1>

              <div className="border-l-[3px] border-[#50F2A7] pl-6 max-w-[500px] mb-10">
                <p className="text-[#E1F2DF]/60 text-[18px] font-light leading-[1.55]" data-i18n="ifoster_desc">
                  {t('ifoster_desc')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={openContactModal}
                  className="bg-[#50F2A7] text-[#030D09] font-display font-semibold rounded-full px-8 py-4 text-center hover:glow-neon transition-all duration-300 cursor-pointer"
                  data-i18n="ifoster_cta_main"
                >
                  {t('ifoster_cta_main')}
                </button>
                <a href="#agentes" className="border border-[#50F2A7]/30 text-[#50F2A7] font-display font-medium rounded-full px-8 py-4 text-center hover:bg-[#50F2A7]/10 transition-all duration-300">
                  Ver Agentes
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Chat Interface */}
          <div className="relative h-[500px] hidden md:block">
            <AnimatedSection delay={200} className="h-full w-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-[480px] bg-[#030D09] border border-[#50F2A7]/20 rounded-2xl overflow-hidden animate-float relative z-20 shadow-2xl">
                  
                  {/* Chat Header */}
                  <div className="bg-[#030D09] border-b border-[#50F2A7]/20 p-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#50F2A7]/10 flex items-center justify-center">
                      <span className="text-[#50F2A7] text-sm">✦</span>
                    </div>
                    <div className="font-mono text-[13px] text-[#E1F2DF]">
                      iFoster · Roteirista IA <span className="text-[#50F2A7] animate-pulse">●</span>
                    </div>
                  </div>

                  {/* Chat Body */}
                  <div className="p-6 space-y-6 h-[380px] overflow-y-auto font-body text-[14px]">
                    
                    {/* User Msg 1 */}
                    <div className={`flex justify-end transition-all duration-500 ${chatStep >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <div className="bg-[#50F2A7]/10 text-[#E1F2DF] rounded-2xl rounded-tr-sm px-5 py-3 max-w-[85%]">
                        Preciso de um roteiro para um Shorts sobre posicionamento digital, 59 segundos, hook forte.
                      </div>
                    </div>

                    {/* Agent Typing 1 */}
                    {chatStep === 1 && (
                      <div className="flex justify-start">
                        <div className="bg-[#104037]/60 rounded-2xl rounded-tl-sm px-5 py-4 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#50F2A7] rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 bg-[#50F2A7] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-1.5 h-1.5 bg-[#50F2A7] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    )}

                    {/* Agent Msg 1 */}
                    <div className={`flex justify-start transition-all duration-500 ${chatStep >= 2 ? 'opacity-100 translate-y-0 hidden' : 'opacity-0 translate-y-4 hidden'} ${chatStep >= 2 ? '!flex' : ''}`}>
                      <div className="flex gap-3 max-w-[90%]">
                        <div className="w-7 h-7 rounded-full bg-[#50F2A7]/20 flex items-center justify-center shrink-0 mt-1">
                          <span className="text-[#50F2A7] text-xs">✦</span>
                        </div>
                        <div className="bg-[#104037]/60 text-[#E1F2DF] rounded-2xl rounded-tl-sm px-5 py-4">
                          <p className="mb-3">Perfeito. Aqui está o seu roteiro:</p>
                          <div className="font-mono text-[12px] text-[#50F2A7]/90 bg-[#030D09] p-3 rounded-lg border border-[#50F2A7]/20">
                            HOOK (0-3s): "A maioria das marcas está invisível — e nem sabe."<br/><br/>
                            DESENVOLVIMENTO (4-52s): ...
                          </div>
                          <button className="mt-3 text-[#50F2A7] text-[12px] font-mono hover:underline">ver roteiro completo</button>
                        </div>
                      </div>
                    </div>

                    {/* User Msg 2 */}
                    <div className={`flex justify-end transition-all duration-500 ${chatStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden'} ${chatStep >= 3 ? '!flex' : ''}`}>
                      <div className="bg-[#50F2A7]/10 text-[#E1F2DF] rounded-2xl rounded-tr-sm px-5 py-3 max-w-[85%]">
                        Pode adaptar para o Instagram também?
                      </div>
                    </div>

                    {/* Agent Typing 2 */}
                    {chatStep === 3 && (
                      <div className="flex justify-start">
                        <div className="bg-[#104037]/60 rounded-2xl rounded-tl-sm px-5 py-4 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#50F2A7] rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 bg-[#50F2A7] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-1.5 h-1.5 bg-[#50F2A7] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    )}

                    {/* Agent Msg 2 */}
                    <div className={`flex justify-start transition-all duration-500 ${chatStep >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden'} ${chatStep >= 4 ? '!flex' : ''}`}>
                      <div className="flex gap-3 max-w-[90%]">
                        <div className="w-7 h-7 rounded-full bg-[#50F2A7]/20 flex items-center justify-center shrink-0 mt-1">
                          <span className="text-[#50F2A7] text-xs">✦</span>
                        </div>
                        <div className="bg-[#104037]/60 text-[#E1F2DF] rounded-2xl rounded-tl-sm px-5 py-3">
                          Claro. Versão para feed de 30s gerada. ✓
                        </div>
                      </div>
                    </div>

                  </div>
                  
                  {/* Chat Input Area */}
                  <div className="p-4 border-t border-[#50F2A7]/10 bg-[#030D09]">
                    <div className="bg-[#50F2A7]/5 border border-[#50F2A7]/20 rounded-full px-4 py-3 flex items-center justify-between">
                      <span className="text-[#E1F2DF]/30 text-sm">Mensagem para Roteirista IA...</span>
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
            <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] text-[#E1F2DF] mb-6">Especialistas em criação. Disponíveis agora.</h2>
            <p className="text-[#E1F2DF]/60 text-[18px] max-w-3xl">
              Cada agente foi treinado pela Foster para dominar uma área criativa específica. Não são chatbots genéricos — são especialistas.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* ROTEIRISTA IA */}
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
                <p className="text-[#E1F2DF]/65 text-[15px] leading-[1.55] mb-6">
                  Roteiros para YouTube, Reels, comerciais, podcasts e séries. Com estrutura narrativa, timing e hook — do briefing ao script pronto.
                </p>
                <div className="bg-[#030D09] border border-[#50F2A7]/10 rounded-xl p-4 font-mono text-[12px] text-[#50F2A7]/80 mb-6 mt-auto">
                  <span className="text-[#E1F2DF]/50">HOOK:</span> "Você está perdendo dinheiro por..."<br/>
                  <span className="text-[#E1F2DF]/50">DESENVOLVIMENTO:</span> ...<br/>
                  <span className="text-[#E1F2DF]/50">CTA:</span> "Comenta aqui se você..."
                </div>
                <div className="font-mono text-[11px] text-[#50F2A7]">◉ Ativo na plataforma</div>
              </div>
            </AnimatedSection>

            {/* COPYWRITER IA */}
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
                <p className="text-[#E1F2DF]/65 text-[15px] leading-[1.55] mb-6">
                  Copy de alta conversão para anúncios, landing pages, e-mails e posts. Cada palavra com intenção — cada texto testado para converter.
                </p>
                <div className="bg-[#030D09] border border-[#50F2A7]/10 rounded-xl p-4 font-mono text-[12px] text-[#50F2A7]/80 mb-6 mt-auto">
                  <span className="text-[#E1F2DF]/50">HEADLINE:</span> "O método que dobrou as vendas de..."
                </div>
                <div className="font-mono text-[11px] text-[#50F2A7]">◉ Ativo na plataforma</div>
              </div>
            </AnimatedSection>

            {/* ESTRATEGISTA DE CONTEÚDO */}
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
                <p className="text-[#E1F2DF]/65 text-[15px] leading-[1.55] mb-6 mt-auto">
                  Planejamento editorial completo, calendário de conteúdo, estratégia de posicionamento e funil de audiência. Da ideia ao plano de execução.
                </p>
                <div className="font-mono text-[11px] text-[#50F2A7]">◉ Ativo na plataforma</div>
              </div>
            </AnimatedSection>

            {/* ARQUITETO DE PROMPTS */}
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
                <p className="text-[#E1F2DF]/65 text-[15px] leading-[1.55] mb-6">
                  Extrai o máximo de qualquer ferramenta de IA com prompts construídos para resultados. Para quem quer usar IA de verdade, não só experimentar.
                </p>
                <div className="bg-[#030D09] border border-[#50F2A7]/10 rounded-xl p-4 font-mono text-[12px] text-[#50F2A7]/80 mb-6 mt-auto">
                  <span className="text-[#E1F2DF]/50">{'>'}</span> Prompt otimizado gerado. Taxa de precisão: 94%
                </div>
                <div className="font-mono text-[11px] text-[#50F2A7]">◉ Ativo na plataforma</div>
              </div>
            </AnimatedSection>

            {/* EM BREVE */}
            <AnimatedSection delay={400} className="md:col-span-2">
              <div className="bg-[#50F2A7]/[0.03] border-2 border-dashed border-[#50F2A7]/30 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <div className="font-mono text-[10px] text-[#50F2A7] mb-3">🚀 Em desenvolvimento</div>
                  <h3 className="font-display font-bold text-3xl text-[#E1F2DF] mb-3">Novos agentes chegando.</h3>
                  <p className="text-[#E1F2DF]/60 text-[16px] max-w-xl">
                    A Foster está treinando novos Super Agentes para ampliar o ecossistema iFoster. Assine para ser notificado.
                  </p>
                </div>
                <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
                  <input type="email" placeholder="Seu melhor e-mail" className="bg-[#030D09] border border-[#50F2A7]/20 rounded-full px-6 py-3 text-[#E1F2DF] placeholder-[#E1F2DF]/30 focus:outline-none focus:border-[#50F2A7]/50 w-full sm:w-64" />
                  <button onClick={openContactModal} className="bg-[#50F2A7] text-[#030D09] font-display font-semibold rounded-full px-6 py-3 hover:glow-neon transition-all whitespace-nowrap cursor-pointer">
                    Quero ser notificado
                  </button>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-28 bg-[#104037] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <AnimatedSection className="text-center mb-20">
            <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] text-[#E1F2DF]">Simples como um chat. Poderoso como uma agência.</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Linha conectando as etapas (Desktop) */}
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-px bg-[#50F2A7]/20">
              <div className="h-full bg-[#50F2A7] w-1/3 animate-[slide-right_3s_ease-in-out_infinite]"></div>
            </div>

            <AnimatedSection delay={100}>
              <div className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-[#030D09] border border-[#50F2A7]/40 flex items-center justify-center mx-auto mb-6 relative z-10 shadow-[0_0_15px_rgba(80,242,167,0.2)]">
                  <span className="font-mono text-xl text-[#50F2A7]">01</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-[#E1F2DF] mb-4">Acesse a plataforma</h3>
                <p className="text-[#E1F2DF]/70 text-[15px] leading-[1.6]">
                  Entre no iFoster e escolha o agente especializado para o que você precisa agora.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-[#030D09] border border-[#50F2A7]/40 flex items-center justify-center mx-auto mb-6 relative z-10 shadow-[0_0_15px_rgba(80,242,167,0.2)]">
                  <span className="font-mono text-xl text-[#50F2A7]">02</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-[#E1F2DF] mb-4">Descreva o que quer</h3>
                <p className="text-[#E1F2DF]/70 text-[15px] leading-[1.6]">
                  Fale com o agente como falaria com um especialista humano. Quanto mais contexto, melhor o resultado.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-[#030D09] border border-[#50F2A7]/40 flex items-center justify-center mx-auto mb-6 relative z-10 shadow-[0_0_15px_rgba(80,242,167,0.2)]">
                  <span className="font-mono text-xl text-[#50F2A7]">03</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-[#E1F2DF] mb-4">Receba e use</h3>
                <p className="text-[#E1F2DF]/70 text-[15px] leading-[1.6]">
                  O agente entrega o resultado — roteiro, copy, estratégia ou prompt — pronto para usar.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PARA QUEM É O iFOSTER */}
      <section className="py-28 bg-[#030D09]">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display font-bold text-[clamp(32px,4vw,44px)] text-[#E1F2DF]">Para quem precisa criar mais, com menos.</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Criadores de Conteúdo", desc: "Roteiros e estratégias em minutos, não em horas.", icon: "🎙" },
              { title: "Empresas", desc: "Copy, conteúdo e planejamento editorial sem contratar uma agência.", icon: "🏢" },
              { title: "Líderes e Especialistas", desc: "Posicionamento e conteúdo com sua voz, acelerados por IA.", icon: "👔" },
              { title: "Agências", desc: "Ampliar a capacidade criativa sem ampliar o time.", icon: "🤝" }
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
            <h2 className="font-display font-bold text-[clamp(32px,4vw,44px)] text-[#E1F2DF]">iFoster vs. contratar uma equipe criativa.</h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-[#030D09] border border-[#50F2A7]/20 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-2 bg-[#50F2A7]/5 border-b border-[#50F2A7]/20">
                <div className="p-6 font-mono text-[13px] text-[#E1F2DF]/50 uppercase text-center">EQUIPE TRADICIONAL</div>
                <div className="p-6 font-mono text-[13px] text-[#50F2A7] uppercase text-center font-bold">iFOSTER</div>
              </div>
              
              {[
                ["R$5k–20k/mês em salários", "Assinatura acessível"],
                ["Disponível em horário comercial", "24h, 7 dias"],
                ["Dias para entregar um roteiro", "Minutos"],
                ["Especialista em UMA área", "Agentes em TODAS as áreas"],
                ["Férias, doenças, turnover", "Sempre disponível"]
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-2 border-b border-[#50F2A7]/10 last:border-0">
                  <div className="p-6 text-[15px] text-[#E1F2DF]/60 border-r border-[#50F2A7]/10 flex items-center justify-center text-center">
                    {row[0]}
                  </div>
                  <div className="p-6 text-[15px] text-[#E1F2DF] flex items-center justify-center text-center font-medium">
                    {row[1]}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 bg-[#030D09] text-center border-t border-[#50F2A7]/10">
        <div className="max-w-3xl mx-auto px-5">
          <AnimatedSection>
            <h2 className="font-display font-bold text-[clamp(40px,6vw,64px)] text-[#E1F2DF] mb-10 leading-[1.1]">Uma equipe criativa inteira. No seu chat.</h2>
            <button 
              onClick={openContactModal}
              className="inline-block bg-[#50F2A7] text-[#030D09] font-display font-bold rounded-full px-10 py-5 text-lg hover:glow-neon hover:scale-[1.03] transition-all duration-300 mb-6 cursor-pointer"
              data-i18n="ifoster_cta_bottom"
            >
              {t('ifoster_cta_bottom')}
            </button>
            <p className="font-mono text-[12px] text-[#E1F2DF]/40">Desenvolvido pela Foster Company · Creative AI Studio</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}