export interface LabPost {
  id: string;
  slug: string;
  categoria: string;
  titulo: string;
  descricao: string;
  tempoLeitura: string;
  data: string;
  autor: string;
  imagemCapa: string;
  tags: string[];
  conteudo: string;
  likes: number;
}

export const labPosts: LabPost[] = [
  {
    id: "1",
    slug: "caso-abba-pai-church-100k-700k-youtube",
    categoria: "/ caso",
    titulo: "De 100k para 700k. O que realmente aconteceu com a Abba Pai Church no YouTube.",
    descricao: "Como a gestão estratégica de YouTube levou o canal da Abba Pai Church de 100 mil para 700 mil inscritos em menos de 2 anos — SEO, thumbnails, títulos e dados por trás do resultado.",
    tempoLeitura: "6 min",
    data: "20 Mar 2026",
    autor: "Carlos Borges",
    tags: ["gestão YouTube", "caso real", "crescimento orgânico", "igrejas", "canal gospel", "SEO YouTube"],
    imagemCapa: "/lab/abba-pai/capa.png",
    likes: 124,
    conteudo: `
      <p>Quando assumi a gestão do canal da Abba Pai Church, eles já tinham 100 mil inscritos. No papel, parecia um canal saudável. Na prática, era um canal sangrando.</p>
      
      <p>A monetização estava ativada — mas o dinheiro não vinha na proporção certa. A cada dois minutos um anúncio pausava o vídeo. A experiência do usuário era péssima. O algoritmo percebe isso. O público também. E quando os dois percebem ao mesmo tempo, o crescimento trava. O canal não estava morto. Estava sufocando.</p>
      
      <div class="my-12">
        <img src="/lab/abba-pai/imagem-1.png" alt="Dashboard YouTube Analytics" class="rounded-2xl border border-f-neon/10" />
        <p class="text-center font-mono text-[11px] text-f-mint/30 mt-4 uppercase tracking-widest">Dashboard YouTube Analytics — Crescimento Plano</p>
      </div>

      <h2>O diagnóstico antes do remédio</h2>
      <p>A primeira coisa que fiz não foi mudar nada. Foi olhar. Auditei o canal inteiro: títulos, thumbnails, configurações técnicas, frequência de publicação, tags, telas finais, cards de interatividade, playlists — e principalmente os dados de retenção de cada vídeo.</p>
      
      <p>O que encontrei foi um padrão claro. Os vídeos eram bons. A embalagem era invisível. Títulos que não geravam curiosidade. Thumbnails que se perdiam no feed. Configurações técnicas que o YouTube penalizava silenciosamente. Um canal com conteúdo de qualidade que o algoritmo simplesmente não conseguia reconhecer — porque ninguém tinha ensinado o canal a se comunicar com a plataforma.</p>
      
      <div class="my-12">
        <img src="/lab/abba-pai/imagem-2.png" alt="YouTube Studio Interface" class="rounded-2xl border border-f-neon/10" />
        <p class="text-center font-mono text-[11px] text-f-mint/30 mt-4 uppercase tracking-widest">Análise de Grid de Thumbnails — Foster Method</p>
      </div>

      <h2>O que mudei — e por que funcionou</h2>
      <p>Implementei tudo ao mesmo tempo. SEO, títulos, thumbnails e configurações técnicas. No existe bala de prata no YouTube — existe sistema.</p>
      
      <p><strong>Títulos:</strong> passaram a trabalhar curiosidade e busca simultaneamente. Uma coisa é rankear. Outra é fazer a pessoa clicar. Os melhores títulos fazem as duas.</p>
      
      <p><strong>Thumbnails:</strong> redesenhadas para funcionar no mobile — onde mais de 70% dos acessos acontecem. Contraste alto, rosto visível, texto mínimo. Simples e brutalmente eficiente.</p>
      
      <p><strong>SEO técnico:</strong> descrições com palavras-chave reais, tags corretas, capítulos nos vídeos, telas finais configuradas para reter o usuário no canal em vez de deixá-lo ir embora.</p>
      
      <p><strong>Anúncios:</strong> reduzimos drasticamente a frequência. Preferimos ganhar menos por vídeo e ganhar mais no longo prazo — com um canal que as pessoas voltam a assistir.</p>
      
      <div class="my-12">
        <img src="/lab/abba-pai/imagem-3.png" alt="Thumbnail Comparison" class="rounded-2xl border border-f-neon/10" />
        <p class="text-center font-mono text-[11px] text-f-mint/30 mt-4 uppercase tracking-widest">A/B Testing — Comparação de Impacto Visual</p>
      </div>

      <h2>O crescimento não explodiu. Ele foi construído.</h2>
      <p>Isso é importante dizer com honestidade. Não teve um vídeo viral que salvou tudo. Não teve um hack secreto. O canal foi de 100k para 700k inscritos em menos de dois anos de forma gradual, mês a mês — com uma média de aproximadamente 25 mil novos inscritos por mês durante o período em que gerenciei o canal.</p>
      
      <p>Julho de 2022 foi um dos meses de pico: +21.500 novos inscritos, 2,7 milhões de visualizações e R$18.448 de receita — números que confirmavam que o sistema estava funcionando de forma consistente. Não foi sorte. Foi o resultado de cada variável sendo otimizada ao mesmo tempo.</p>
      
      <div class="my-12">
        <img src="/lab/abba-pai/imagem-4.png" alt="Analytics July 2022" class="rounded-2xl border border-f-neon/10" />
        <p class="text-center font-mono text-[11px] text-f-mint/30 mt-4 uppercase tracking-widest">Dados de Julho 2022 — Pico de Performance</p>
      </div>

      <h2>O dado que mais me orgulha — e que poucas pessoas sabem</h2>
      <p>Quando encerrei a gestão do canal, outra equipe assumiu. Nos mais de dois anos seguintes — com a igreja ainda maior, mais presente e com mais recursos — o canal cresceu cerca de 200 mil inscritos.</p>
      
      <p>No mesmo período em que geríamos, a média era de 25 mil por mês. Isso não é crítica a ninguém. É uma prova objetiva de que o crescimento não veio porque a Abba Pai Church estava em expansão natural. Veio porque havia uma estratégia específica, executada com consistência, orientada por dados — e quando essa estratégia parou, o crescimento desacelerou proporcionalmente. O YouTube não perdoa ausência de método.</p>
      
      <div class="my-12">
        <img src="/lab/abba-pai/imagem-5.png" alt="Growth Comparison Chart" class="rounded-2xl border border-f-neon/10" />
        <p class="text-center font-mono text-[11px] text-f-mint/30 mt-4 uppercase tracking-widest">Visualização de Dados — Aceleração vs Desaceleração</p>
      </div>

      <h2>O que você pode aplicar hoje</h2>
      <p>Se você tem um canal — de igreja, empresa ou criador — aqui estão as três primeiras perguntas que eu faria antes de qualquer coisa:</p>
      
      <ul>
        <li><strong>1. Seus títulos geram curiosidade ou apenas descrevem o vídeo?</strong> Existe diferença enorme entre "Culto domingo 15/03" e "O que acontece quando você para de orar?"</li>
        <li><strong>2. Sua thumbnail funciona em 80px de altura no celular?</strong> Esse é o tamanho real no feed mobile. Se o rosto some, o texto fica ilegível ou o contraste é baixo — você está invisível.</li>
        <li><strong>3. Você configurou telas finais e cards?</strong> Cada vídeo sem tela final é um usuário que o YouTube manda embora do seu canal. É inscrito e receita que você deixa na mesa toda semana.</li>
      </ul>
      
      <div class="my-12">
        <img src="/lab/abba-pai/imagem-6.png" alt="Editorial Tech Setup" class="rounded-2xl border border-f-neon/10" />
        <p class="text-center font-mono text-[11px] text-f-mint/30 mt-4 uppercase tracking-widest">Estratégia, Dados e Execução — Foster Company</p>
      </div>
    `
  },
  {
    id: "2",
    slug: "experimento-clone-voz-ia-rony-meisler",
    categoria: "/ experimento",
    titulo: "O clone de voz perfeito. Como treinamos a IA para falar como o Rony Meisler.",
    descricao: "Um mergulho técnico nos bastidores da criação do avatar do fundador da Reserva. Os desafios de entonação, sotaque e as ferramentas utilizadas.",
    tempoLeitura: "4 min",
    data: "18 Mar 2026",
    autor: "Carlos Borges",
    tags: ["IA", "Clone de Voz", "Rony Meisler", "HeyGen", "ElevenLabs"],
    imagemCapa: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2340&auto=format&fit=crop",
    likes: 89,
    conteudo: `
      <p>Treinar uma Inteligência Artificial para replicar uma voz humana não é mais sobre tecnologia, é sobre nuances. Quando começamos o projeto com o Rony Meisler, o objetivo era claro: o avatar não poderia soar robótico.</p>
      
      <h2>A Ciência do Sotaque</h2>
      <p>O desafio não estava nas palavras, mas no ritmo. O sotaque carioca do Rony possui cadências específicas que os modelos padrão de IA costumam ignorar ou 'achatar' em busca de uma clareza artificial.</p>
      
      <div className="my-8">
        <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2340&auto=format&fit=crop" alt="Estúdio de gravação profissional" />
        <p className="text-center font-mono text-[11px] text-f-mint/40 mt-2">Captação de áudio base para o treinamento do modelo neurônico.</p>
      </div>

      <h2>O Fluxo de Trabalho</h2>
      <p>Utilizamos uma técnica de 'finetuning' em três camadas. Primeiro, a limpeza do áudio base. Segundo, a extração de prosódia. Terceiro, o treinamento de resposta emocional.</p>
      
      <blockquote>
        "A tecnologia deve servir à essência, nunca o contrário."
      </blockquote>

      <ul>
        <li>Captura de 20 minutos de áudio em ambiente controlado.</li>
        <li>Mapeamento de expressões faciais síncronas com o áudio.</li>
        <li>Ajuste fino de 'pacing' para garantir pausas naturais entre parágrafos.</li>
      </ul>

      <h2>Conclusão</h2>
      <p>O resultado é o que você vê hoje nos canais do Rony. Uma ferramenta de escala que mantém a verdade do criador intacta.</p>
    `
  }
];