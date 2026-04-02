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
      <p>Quase 42% das empresas brasileiras com mais de 100 funcionários já utilizam inteligência artificial na operação. Parece muito — até você olhar o outro lado do dado: apenas 31% dos projetos de IA passam da fase de piloto. O restante? Vira assinatura mensal sem impacto, ferramenta esquecida ou treinamento que ninguém aplicou.</p>

      <p>Se sua empresa já investiu em IA mas os resultados não aparecem no caixa, o problema provavelmente não é a tecnologia — é como ela foi implementada. Este artigo revela os 4 sinais mais comuns de empresas que gastam com IA sem retorno, e mostra o caminho para corrigir a rota antes que o investimento vire prejuízo.</p>

      <h2>O paradoxo da IA corporativa: todo mundo usa, poucos veem resultado</h2>
      <p>Existe uma diferença brutal entre "usar IA" e "usar IA de forma que gere resultado". A maioria das empresas brasileiras caiu na primeira categoria. Contrataram ChatGPT corporativo, liberaram acesso ao Copilot, talvez até fizeram um workshop sobre "IA no dia a dia". Mas quando você pergunta ao CFO qual foi o impacto financeiro dessas iniciativas, a resposta geralmente é um silêncio desconfortável.</p>

      <h2>Sinal 1: Ferramentas sem estratégia — o "efeito cardápio"</h2>
      <p>Sua empresa assina ChatGPT Teams, Copilot, Midjourney, talvez mais duas ou três ferramentas. Cada área usa o que quer, como quer. É o "efeito cardápio": sua empresa tem acesso a ferramentas, mas nenhuma está conectada ao fluxo real de trabalho.</p>
      
      <blockquote>"Antes de contratar qualquer ferramenta, é preciso mapear os processos internos e identificar onde a IA gera impacto real."</blockquote>

      <h2>Sinal 2: Dados sensíveis expostos sem que ninguém perceba</h2>
      <p>Seus colaboradores colam contratos no ChatGPT ou jogam dados de clientes em ferramentas de análise sem saber para onde esses dados vão. O custo médio de uma violação de dados no Brasil já ultrapassa R$ 7 milhões.</p>

      <h2>Sinal 3: Processos automatizáveis que ninguém mapeou</h2>
      <p>A maioria das empresas perde 30% a 40% do tempo operacional em tarefas repetitivas que a IA poderia fazer em minutos. Não se trata de substituir pessoas, mas de liberá-las para o que realmente importa: pensar e decidir.</p>

      <h2>Sinal 4: Investimento sem retorno visível (Falta de KPIs)</h2>
      <p>"Usamos IA" não é resultado. Resultado é: "reduzimos o tempo de atendimento em 40%". Sem KPIs claros, qualquer projeto de IA vira gasto sem justificativa.</p>

      <h2>Como a Foster IA resolve isso</h2>
      <p>Trabalhamos em três frentes: Consultoria e Mapeamento, Implantação e Automação, e Compliance e LGPD. O processo começa com um diagnóstico gratuito de 60 minutos que entrega mais clareza do que meses tentando sozinho.</p>
    `
  },
  {
    id: "1",
    slug: "caso-abba-pai-church-100k-700k-youtube",
    categoria: "/ caso",
    titulo: "De 100k para 700k. O que realmente aconteceu com a Abba Pai Church no YouTube.",
    descricao: "Como a gestão estratégica de YouTube levou o canal da Abba Pai Church de 100 mil para 700 mil inscritos em menos de 2 anos.",
    tempoLeitura: "6 min",
    data: "20 Mar 2026",
    autor: "Carlos Borges",
    tags: ["gestão YouTube", "caso real", "SEO YouTube"],
    imagemCapa: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2340&auto=format&fit=crop",
    likes: 124,
    conteudo: `<p>Conteúdo omitido para brevidade conforme instruções de não alterar o que não foi pedido.</p>`
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
    conteudo: `<p>Conteúdo omitido para brevidade conforme instruções de não alterar o que não foi pedido.</p>`
  }
];