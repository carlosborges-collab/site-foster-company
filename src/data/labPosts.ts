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
    descricao: "Como a gestão estratégica de YouTube levou o canal da Abba Pai Church de 100 mil para 700 mil inscritos em menos de 2 anos.",
    tempoLeitura: "6 min",
    data: "20 Mar 2026",
    autor: "Carlos Borges",
    tags: ["gestão YouTube", "caso real", "crescimento orgânico", "igrejas", "canal gospel"],
    imagemCapa: "src/assets/abba-pai-capa.webp",
    likes: 124,
    conteudo: `
      <p>Quando assumi a gestão do canal da Abba Pai Church, eles já tinham 100 mil inscritos. No papel, parecia um canal saudável. Na prática, era um canal sangrando.</p>

      <p>A monetização estava ativada — mas o dinheiro não vinha na proporção certa. A cada dois minutos um anúncio pausava o vídeo. A experiência do usuário era péssima. O algoritmo percebe isso. O público também. E quando os dois percebem ao mesmo tempo, o crescimento trava. O canal não estava morto. Estava sufocando.</p>

      <p><em>Dashboard YouTube Analytics — Crescimento Plano</em></p>

      <h2>O diagnóstico antes do remédio</h2>
      <p>A primeira coisa que fiz não foi mudar nada. Foi olhar. Auditei o canal inteiro: títulos, thumbnails, configurações técnicas, frequência de publicação, tags, telas finais, cards de interatividade, playlists — e principalmente os dados de retenção de cada vídeo.</p>

      <p>O que encontrei foi um padrão claro. Os vídeos eram bons. A embalagem era invisível. Títulos que não geravam curiosidade. Thumbnails que se perdiam no feed. Configurações técnicas que o YouTube penalizava silenciosamente. Um canal com conteúdo de qualidade que o algoritmo simplesmente não conseguia reconhecer — porque ninguém tinha ensinado o canal a se comunicar com a plataforma.</p>

      <p><em>YouTube Studio Interface — Análise de Grid de Thumbnails — Foster Method</em></p>

      <h2>O que mudei — e por que funcionou</h2>
      <p>Implementei tudo ao mesmo tempo. SEO, títulos, thumbnails e configurações técnicas. No existe bala de prata no YouTube — existe sistema.</p>

      <ul>
        <li><strong>Títulos:</strong> passaram a trabalhar curiosidade e busca simultaneamente. Uma coisa é rankear. Outra é fazer a pessoa clicar. Os melhores títulos fazem as duas.</li>
        <li><strong>Thumbnails:</strong> redesenhadas para funcionar no mobile — onde mais de 70% dos acessos acontecem. Contraste alto, rosto visível, texto mínimo. Simples e brutalmente eficiente.</li>
        <li><strong>SEO técnico:</strong> descrições com palavras-chave reais, tags corretas, capítulos nos vídeos, telas finais configuradas para reter o usuário no canal em vez de deixá-lo ir embora.</li>
        <li><strong>Anúncios:</strong> reduzimos drasticamente a frequência. Preferimos ganhar menos por vídeo e ganhar mais no longo prazo — com um canal que as pessoas voltam a assistir.</li>
      </ul>

      <p><em>Thumbnail Comparison — A/B Testing — Comparação de Impacto Visual</em></p>

      <h2>O crescimento não explodiu. Ele foi construído.</h2>
      <p>Isso é importante dizer com honestidade. Não teve um vídeo viral que salvou tudo. Não teve um hack secreto. O canal foi de 100k para 700k inscritos em menos de dois anos de forma gradual, mês a mês — com uma média de aproximadamente 25 mil novos inscritos por mês durante o período em que gerenciei o canal.</p>

      <p>Julho de 2022 foi um dos meses de pico: +21.500 novos inscritos, 2,7 milhões de visualizações e R$18.448 de receita — números que confirmavam que o sistema estava funcionando de forma consistente. Não foi sorte. Foi o resultado de cada variável sendo otimizada ao mesmo tempo.</p>

      <p><em>Analytics July 2022 — Dados de Julho 2022 — Pico de Performance</em></p>

      <h2>O dado que mais me orgulha — e que poucas pessoas sabem</h2>
      <p>Quando encerrei a gestão do canal, outra equipe assumiu. Nos mais de dois anos seguintes — com a igreja ainda maior, mais presente e com mais recursos — o canal cresceu cerca de 200 mil inscritos.</p>

      <p>No mesmo período em que geríamos, a média era de 25 mil por mês. Isso não é crítica a ninguém. É uma prova objetiva de que o crescimento não veio porque a Abba Pai Church estava em expansão natural. Veio porque havia uma estratégia específica, executada com consistência, orientada por dados — e quando essa estratégia parou, o crescimento desacelerou proporcionalmente. O YouTube não perdoa ausência de método.</p>

      <p><em>Growth Comparison Chart — Visualização de Dados — Aceleração vs Desaceleração</em></p>

      <h2>O que você pode aplicar hoje</h2>
      <p>Se você tem um canal — de igreja, empresa ou criador — aqui estão as três primeiras perguntas que eu faria antes de qualquer coisa:</p>
      <ol>
        <li>Seus títulos geram curiosidade ou apenas descrevem o vídeo? Existe diferença enorme entre "Culto domingo 15/03" e "O que acontece quando você para de orar?"</li>
        <li>Sua thumbnail funciona em 80px de altura no celular? Esse é o tamanho real no feed mobile. Se o rosto some, o texto fica ilegível ou o contraste é baixo — você está invisível.</li>
        <li>Você configurou telas finais e cards? Cada vídeo sem tela final é um usuário que o YouTube manda embora do seu canal. É inscrito e receita que você deixa na mesa toda semana.</li>
      </ol>
      <p><em>Editorial Tech Setup — Estratégia, Dados e Execução — Foster Company</em></p>
    `
  },
  {
    id: "2",
    slug: "experimento-clone-voz-ia-rony-meisler",
    categoria: "/ experimento",
    titulo: "O clone de voz perfeito. Como treinamos a IA para falar como o Rony Meisler.",
    descricao: "Um mergulho técnico nos bastidores da criação do avatar do fundador da Reserva.",
    tempoLeitura: "4 min",
    data: "18 Mar 2026",
    autor: "Carlos Borges",
    tags: ["IA", "Clone de Voz", "Rony Meisler"],
    imagemCapa: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2340&auto=format&fit=crop",
    likes: 89,
    conteudo: `
      <p>Treinar uma Inteligência Artificial para replicar uma voz humana não é mais sobre tecnologia, é sobre nuances. Quando começamos o projeto com o Rony Meisler, o objetivo era claro: o avatar não poderia soar robótico.</p>
      
      <h2>A Ciência do Sotaque</h2>
      <p>O desafio não estava nas palavras, mas no ritmo. O sotaque carioca do Rony possui cadências específicas que os modelos padrão de IA costumam ignorar ou 'achatar' em busca de uma clareza artificial.</p>
      
      <p><em>Estúdio de gravação profissional — Captação de áudio base para o treinamento do modelo neurônico.</em></p>
      
      <h2>O Fluxo de Trabalho</h2>
      <p>Utilizamos uma técnica de 'finetuning' em três camadas. Primeiro, a limpeza do áudio base. Segundo, a extração de prosódia. Terceiro, o treinamento de resposta emocional.</p>
      
      <blockquote>"A tecnologia deve servir à essência, nunca o contrário."</blockquote>
      
      <ul>
        <li>Captura de 20 minutos de áudio em ambiente controlado.</li>
        <li>Mapeamento de expressões faciais síncronas com o áudio.</li>
        <li>Ajuste fino de 'pacing' para garantir pausas naturais entre parágrafos.</li>
      </ul>
      
      <h2>Conclusão</h2>
      <p>O resultado é o que você vê hoje nos canais do Rony. Uma ferramenta de escala que mantém a verdade do criador intacta.</p>
    `
  },
  {
    id: "3",
    slug: "empresa-usa-ia-sem-resultado-sinais",
    categoria: "/ inteligência",
    titulo: "Sua Empresa Usa IA. Mas Usa Direito? 4 Sinais de Que Você Está Gastando Sem Resultado",
    descricao: "89% das empresas já iniciaram projetos de IA, mas só 31% escalaram. Descubra os 4 sinais de alerta que indicam investimento sem retorno real.",
    tempoLeitura: "8 min",
    data: "02 Abr 2026",
    autor: "Time Foster IA",
    tags: ["IA nas empresas", "ROI de IA", "consultoria IA", "estratégia digital"],
    imagemCapa: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
    likes: 42,
    conteudo: `
      <p>Quase 42% das empresas brasileiras com mais de 100 funcionários já utilizam inteligência artificial na operação. Parece muito — até você olhar o outro lado do dado: apenas 31% dos projetos de IA passam da fase de piloto. O restante? Vira assinatura mensal sem impacto, ferramenta esquecida ou treinamento que ninguém aplicou. Se sua empresa já investiu em IA mas os resultados não aparecem no caixa, o problema provavelmente não é a tecnologia — é como ela foi implementada. Este artigo revela os 4 sinais mais comuns de empresas que gastam com IA sem retorno, e mostra o caminho para corrigir a rota antes que o investimento vire prejuízo.</p>
      
      <h2>O paradoxo da IA corporativa: todo mundo usa, poucos veem resultado</h2>
      <p>Existe uma diferença brutal entre "usar IA" e "usar IA de forma que gere resultado". A maioria das empresas brasileiras caiu na primeira categoria. Contrataram ChatGPT corporativo, liberaram acesso ao Copilot, talvez até fizeram um workshop sobre "IA no dia a dia". Mas quando você pergunta ao CFO qual foi o impacto financeiro dessas iniciativas, a resposta geralmente é um silêncio desconfortável.</p>
      <p>Isso acontece porque a adoção de IA no Brasil seguiu um padrão perigoso: entusiasmo primeiro, estratégia depois. Ou, em muitos casos, entusiasmo sem estratégia alguma.</p>

      <h2>Sinal 1: Ferramentas sem estratégia — o "efeito cardápio"</h2>
      <p>Sua empresa assina ChatGPT Teams, Copilot, Midjourney, talvez mais duas ou três ferramentas. Cada área usa o que quer, como quer. Marketing gera textos no ChatGPT. O jurídico consulta o Copilot. O financeiro fez uma planilha com fórmulas de IA. Tudo isolado. Nenhuma integração. Nenhum processo redesenhado.</p>
      <p>É o "efeito cardápio": sua empresa tem acesso a 15 ferramentas de IA, mas nenhuma está conectada ao fluxo real de trabalho. O resultado? O time gasta tempo aprendendo ferramentas novas, mas o processo em si continua o mesmo. A IA virou um acessório — não uma engrenagem.</p>
      <blockquote>O que deveria acontecer: antes de contratar qualquer ferramenta, alguém precisa mapear os processos internos, identificar onde a IA gera impacto real e selecionar a ferramenta certa para cada ponto. Não o contrário.</blockquote>

      <h2>Sinal 2: Dados sensíveis expostos sem que ninguém perceba</h2>
      <p>Este é o sinal mais perigoso — e o mais silencioso. Seus colaboradores estão usando IA todos os dias. Colam contratos no ChatGPT para pedir resumos. Jogam dados de clientes em ferramentas de análise. Compartilham planilhas financeiras com modelos de terceiros. E ninguém sabe para onde esses dados vão.</p>
      <p>O custo médio de uma violação de dados no Brasil já ultrapassa R$ 7 milhões, segundo pesquisas recentes. E a realidade é que somente 33% das empresas fazem auditorias regulares para checar o uso de IAs não autorizadas — o que o mercado chama de "Shadow IA".</p>
      <blockquote>O que deveria acontecer: a empresa precisa de uma auditoria de uso atual de IA, uma política interna clara sobre o que pode e o que não pode ser compartilhado com ferramentas externas, e adequação à LGPD no contexto de IA. Não amanhã — agora.</blockquote>

      <h2>Sinal 3: Processos que poderiam ser automatizados (mas ninguém mapeou)</h2>
      <p>Enquanto sua equipe gasta horas fazendo relatórios manuais, classificando e-mails, organizando documentos e tabulando dados, a IA poderia fazer isso em minutos. Mas ninguém parou para olhar o processo de ponta a ponta e perguntar: "Onde a IA pode entrar aqui?"</p>
      <p>A maioria das empresas perde 30% a 40% do tempo operacional em tarefas que poderiam ser automatizadas. Não estamos falando de substituir pessoas — estamos falando de liberar o time para fazer o que realmente importa: pensar, criar, decidir.</p>
      <blockquote>O que deveria acontecer: um diagnóstico operacional que mapeie cada processo, identifique gargalos e entregue um laudo com ROI estimado por oportunidade de automação. Isso não é "futurismo" — é engenharia de processos com IA aplicada.</blockquote>

      <h2>Sinal 4: Investimento sem retorno visível</h2>
      <p>Treinamentos de IA. Assinaturas mensais de ferramentas. Consultorias que entregaram slides bonitos mas nenhuma automação funcionando. Sua empresa gasta, mas a operação continua igual.</p>
      <p>O problema aqui não é o investimento em si — é a falta de métricas. "Usamos IA em 10 processos" não é resultado. Resultado é: "reduzimos o tempo de atendimento em 40%" ou "economizamos 120 horas por mês no jurídico". Sem KPIs claros definidos antes da implantação, qualquer projeto de IA vira gasto sem justificativa — e é cortado no primeiro orçamento apertado.</p>
      <blockquote>O que deveria acontecer: cada iniciativa de IA precisa nascer com métricas de impacto definidas: tempo médio de tarefa, custo por processo, taxa de erro. Medir antes. Implantar. Medir depois. Sem isso, não há como provar ROI.</blockquote>

      <h2>Como a Foster IA resolve isso: do diagnóstico à operação</h2>
      <p>Na Foster IA, trabalhamos em três frentes integradas: Consultoria e Mapeamento (mergulhamos na sua operação e entregamos um laudo técnico com oportunidades priorizadas por impacto), Implantação e Automação (selecionamos, configuramos e colocamos as ferramentas certas para rodar na sua operação real) e Compliance e LGPD (garantimos que tudo funcione dentro das normas, protegendo dados, marca e reputação).</p>
      <p>O processo começa com um diagnóstico gratuito de 60 minutos — uma conversa que já entrega mais clareza do que meses tentando sozinho.</p>

      <div class="mt-12 bg-f-dark/50 p-8 rounded-2xl border border-f-neon/20">
        <h3 class="text-xl font-bold mb-6">Perguntas Frequentes</h3>
        <ul class="space-y-6">
          <li><strong>Quanto tempo leva para ver resultado com IA na empresa?</strong><br/>Depende do nível de maturidade da operação, mas os primeiros resultados de automação geralmente aparecem entre 4 e 8 semanas após o diagnóstico inicial.</li>
          <li><strong>Preciso ter uma equipe de TI para implantar IA?</strong><br/>Não. A Foster IA faz a implantação completa — da seleção das ferramentas ao treinamento do time.</li>
          <li><strong>Minha empresa é pequena. IA faz sentido para mim?</strong><br/>Sim, especialmente se você tem processos repetitivos que consomem horas.</li>
        </ul>
      </div>

      <div class="mt-12 text-center">
        <p class="text-f-neon font-bold text-lg mb-4">Quer descobrir se sua empresa está no grupo dos 31% que escalam — ou dos 69% que travam?</p>
        <p>Agende um diagnóstico gratuito com a Foster IA e receba um mapa claro de onde a inteligência artificial pode gerar resultado real na sua operação.</p>
      </div>
    `
  }
];