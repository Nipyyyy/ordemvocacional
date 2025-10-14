// Arquivo com as perguntas do teste vocacional

export interface TestQuestion {
  id: number;
  question: string;
  options: TestOption[];
}

export interface TestOption {
  id: string;
  text: string;
  points: {
    [key: string]: number;
  };
}

// Áreas profissionais disponíveis
export type VocationalProfile =
  | 'informatica'
  | 'medicina'
  | 'zoologia'
  | 'publicidade'
  | 'jornalismo'
  | 'artes'
  | 'administracao'
  | 'direito'
  | 'cinema'
  | 'professor';

export const vocationalProfiles: Record<VocationalProfile, {
  title: string;
  description: string;
  careers: string[];
  strengths: string[];
  challenges: string[];
  skillsToImprove: string[];
  imageUrl: string;
}> = {
  'informatica': {
    title: 'Tecnologia da Informação',
    description: 'Você demonstra forte aptidão para a área de tecnologia, com excelente raciocínio lógico e interesse em solução de problemas através de recursos computacionais. Sua capacidade analítica e interesse por inovação são características marcantes.',
    careers: [
      'Desenvolvedor de Software',
      'Analista de Sistemas',
      'Engenheiro de Software',
      'Cientista de Dados',
      'Administrador de Redes',
      'Analista de Segurança',
      'Arquiteto de Software',
      'Especialista em Cloud Computing',
      'Analista de Business Intelligence',
      'Gestor de TI'
    ],
    strengths: [
      'Raciocínio lógico',
      'Resolução de problemas',
      'Pensamento sistemático',
      'Capacidade de aprendizado contínuo',
      'Adaptabilidade tecnológica'
    ],
    challenges: [
      'Manter-se atualizado com novas tecnologias',
      'Equilibrar aspectos técnicos e comunicação',
      'Gerenciar projetos complexos',
      'Trabalhar em equipe mantendo foco técnico'
    ],
    skillsToImprove: [
      'Comunicação interpessoal',
      'Gestão de tempo',
      'Habilidades de apresentação',
      'Visão de negócios'
    ],
    imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  'medicina': {
    title: 'Medicina',
    description: 'Você possui uma forte vocação para a área da saúde, combinando capacidade analítica com empatia e cuidado com as pessoas. Sua dedicação ao bem-estar humano e interesse por ciências biológicas são evidentes.',
    careers: [
      'Médico Clínico Geral',
      'Cirurgião',
      'Pediatra',
      'Cardiologista',
      'Neurologista',
      'Psiquiatra',
      'Dermatologista',
      'Médico do Trabalho',
      'Pesquisador Médico',
      'Médico de Família'
    ],
    strengths: [
      'Empatia',
      'Capacidade analítica',
      'Tomada de decisão',
      'Trabalho sob pressão',
      'Atenção aos detalhes'
    ],
    challenges: [
      'Equilibrar vida profissional e pessoal',
      'Lidar com situações de emergência',
      'Manter-se atualizado com avanços médicos',
      'Gestão emocional em casos críticos'
    ],
    skillsToImprove: [
      'Comunicação com pacientes',
      'Gestão de stress',
      'Liderança em equipe médica',
      'Habilidades administrativas'
    ],
    imageUrl: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  'zoologia': {
    title: 'Zoologia',
    description: 'Sua paixão por animais e interesse em ciências naturais se destacam. Você demonstra forte aptidão para estudar e trabalhar com a vida animal, combinando conhecimento científico com dedicação à preservação das espécies.',
    careers: [
      'Zoólogo',
      'Pesquisador de Vida Selvagem',
      'Conservacionista',
      'Biólogo Marinho',
      'Veterinário de Zoo',
      'Comportamentalista Animal',
      'Consultor Ambiental',
      'Educador Ambiental',
      'Gestor de Reservas Naturais',
      'Pesquisador de Biodiversidade'
    ],
    strengths: [
      'Observação detalhada',
      'Pesquisa científica',
      'Paciência',
      'Trabalho em campo',
      'Consciência ambiental'
    ],
    challenges: [
      'Condições de trabalho variáveis',
      'Financiamento de pesquisas',
      'Conservação em face do desenvolvimento',
      'Documentação científica'
    ],
    skillsToImprove: [
      'Análise estatística',
      'Comunicação científica',
      'Gestão de projetos',
      'Tecnologia aplicada'
    ],
    imageUrl: 'https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  'publicidade': {
    title: 'Publicidade e Propaganda',
    description: 'Você demonstra forte criatividade e capacidade de comunicação estratégica. Sua habilidade em combinar pensamento criativo com objetivos de marketing é um diferencial importante nesta área.',
    careers: [
      'Diretor de Arte',
      'Redator Publicitário',
      'Planejador de Mídia',
      'Gestor de Marketing Digital',
      'Diretor Criativo',
      'Estrategista de Marca',
      'Social Media Manager',
      'Analista de Marketing',
      'Produtor de Conteúdo',
      'Consultor de Comunicação'
    ],
    strengths: [
      'Criatividade',
      'Comunicação estratégica',
      'Pensamento inovador',
      'Análise de mercado',
      'Adaptabilidade'
    ],
    challenges: [
      'Prazos apertados',
      'Demandas do cliente',
      'Mercado competitivo',
      'Tendências em constante mudança'
    ],
    skillsToImprove: [
      'Ferramentas digitais',
      'Análise de dados',
      'Gestão de projetos',
      'Negociação'
    ],
    imageUrl: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  'jornalismo': {
    title: 'Jornalismo',
    description: 'Sua capacidade de investigação e comunicação se destaca, junto com um forte senso de justiça social e interesse em contar histórias importantes. Você demonstra habilidade em analisar informações e transmiti-las de forma clara e objetiva.',
    careers: [
      'Repórter',
      'Editor',
      'Jornalista Digital',
      'Apresentador',
      'Correspondente Internacional',
      'Produtor de Conteúdo',
      'Assessor de Imprensa',
      'Jornalista Investigativo',
      'Editor de Vídeo',
      'Analista de Mídia'
    ],
    strengths: [
      'Comunicação clara',
      'Investigação',
      'Senso crítico',
      'Adaptabilidade',
      'Trabalho sob pressão'
    ],
    challenges: [
      'Prazos curtos',
      'Imparcialidade',
      'Verificação de fontes',
      'Mudanças na mídia'
    ],
    skillsToImprove: [
      'Mídias digitais',
      'Edição multimídia',
      'Análise de dados',
      'Storytelling'
    ],
    imageUrl: 'https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  'artes': {
    title: 'Artes Visuais e Design',
    description: 'Sua criatividade e expressão artística são notáveis, combinadas com habilidade técnica e sensibilidade estética. Você demonstra capacidade de traduzir conceitos em elementos visuais impactantes.',
    careers: [
      'Designer Gráfico',
      'Ilustrador',
      'Artista Digital',
      'Designer de UX/UI',
      'Diretor de Arte',
      'Designer de Produto',
      'Artista Conceitual',
      'Designer Editorial',
      'Motion Designer',
      'Designer de Identidade Visual'
    ],
    strengths: [
      'Criatividade',
      'Sensibilidade estética',
      'Domínio técnico',
      'Pensamento visual',
      'Inovação'
    ],
    challenges: [
      'Demandas do cliente',
      'Prazos criativos',
      'Equilíbrio arte/comercial',
      'Tendências em mudança'
    ],
    skillsToImprove: [
      'Ferramentas digitais',
      'Gestão de projetos',
      'Comunicação com cliente',
      'Marketing pessoal'
    ],
    imageUrl: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  'administracao': {
    title: 'Administração',
    description: 'Você possui forte capacidade de gestão e visão estratégica. Sua habilidade em organizar recursos e liderar equipes, combinada com pensamento analítico, são características essenciais para o sucesso nesta área.',
    careers: [
      'Gestor de Projetos',
      'Administrador Financeiro',
      'Consultor Empresarial',
      'Gestor de Recursos Humanos',
      'Analista de Negócios',
      'Gestor de Operações',
      'Empreendedor',
      'Gestor de Marketing',
      'Analista de Processos',
      'Diretor Executivo'
    ],
    strengths: [
      'Liderança',
      'Organização',
      'Visão estratégica',
      'Tomada de decisão',
      'Gestão de recursos'
    ],
    challenges: [
      'Mercado competitivo',
      'Gestão de conflitos',
      'Mudanças econômicas',
      'Pressão por resultados'
    ],
    skillsToImprove: [
      'Tecnologia empresarial',
      'Línguas estrangeiras',
      'Inteligência emocional',
      'Inovação'
    ],
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  'direito': {
    title: 'Direito',
    description: 'Você demonstra forte senso de justiça e capacidade analítica. Sua habilidade em interpretar informações complexas e argumentar de forma lógica são características fundamentais para a área jurídica.',
    careers: [
      'Advogado',
      'Juiz',
      'Promotor',
      'Defensor Público',
      'Procurador',
      'Consultor Jurídico',
      'Delegado',
      'Advogado Empresarial',
      'Mediador',
      'Especialista em Direito Digital'
    ],
    strengths: [
      'Análise crítica',
      'Argumentação',
      'Interpretação legal',
      'Ética profissional',
      'Comunicação formal'
    ],
    challenges: [
      'Atualização constante',
      'Pressão processual',
      'Complexidade legal',
      'Equilíbrio trabalho-vida'
    ],
    skillsToImprove: [
      'Tecnologia jurídica',
      'Oratória',
      'Gestão de tempo',
      'Networking'
    ],
    imageUrl: 'https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  'cinema': {
    title: 'Cinema e Audiovisual',
    description: 'Sua criatividade narrativa e visão artística se destacam, junto com habilidade técnica em produção audiovisual. Você demonstra capacidade de contar histórias através de imagens e sons.',
    careers: [
      'Diretor',
      'Produtor',
      'Roteirista',
      'Editor de Vídeo',
      'Diretor de Fotografia',
      'Sound Designer',
      'Produtor Executivo',
      'Diretor de Arte',
      'Montador',
      'Documentarista'
    ],
    strengths: [
      'Criatividade visual',
      'Narrativa',
      'Direção artística',
      'Trabalho em equipe',
      'Visão estética'
    ],
    challenges: [
      'Financiamento',
      'Prazos de produção',
      'Gestão de equipe',
      'Mercado competitivo'
    ],
    skillsToImprove: [
      'Tecnologia audiovisual',
      'Gestão de projetos',
      'Marketing',
      'Networking'
    ],
    imageUrl: 'https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  'professor': {
    title: 'Educação',
    description: 'Você possui forte vocação para o ensino e desenvolvimento de pessoas. Sua capacidade de transmitir conhecimento e inspirar outros, combinada com paciência e empatia, são características essenciais.',
    careers: [
      'Professor',
      'Coordenador Pedagógico',
      'Orientador Educacional',
      'Pesquisador em Educação',
      'Designer Instrucional',
      'Gestor Escolar',
      'Professor de Educação Especial',
      'Consultor Educacional',
      'Educador Social',
      'Professor de Idiomas'
    ],
    strengths: [
      'Comunicação didática',
      'Empatia',
      'Organização',
      'Adaptabilidade',
      'Criatividade no ensino'
    ],
    challenges: [
      'Gestão de sala',
      'Diferentes aprendizados',
      'Recursos limitados',
      'Atualização pedagógica'
    ],
    skillsToImprove: [
      'Tecnologia educacional',
      'Gestão de conflitos',
      'Metodologias ativas',
      'Avaliação'
    ],
    imageUrl: 'https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1600'
  }
};

export const testQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "Seus amigos te descreveriam como uma pessoa...",
    options: [
      {
        id: "a",
        text: "Persuasiva",
        points: { jornalismo: 3, publicidade: 3 }
      },
      {
        id: "b",
        text: "Intelectual",
        points: { informatica: 3, direito: 3 }
      },
      {
        id: "c",
        text: "Cautelosa",
        points: { zoologia: 3, medicina: 3 }
      },
      {
        id: "d",
        text: "Realista",
        points: { administracao: 3 }
      },
      {
        id: "e",
        text: "Sensível",
        points: { artes: 3, cinema: 3, professor: 3 }
      }
    ]
  },
  {
    id: 2,
    question: "Em um projeto em grupo, qual papel você geralmente assume?",
    options: [
      {
        id: "a",
        text: "Tentando sempre manter a comunicação entre todos e nas apresentações",
        points: { publicidade: 3, cinema: 3 }
      },
      {
        id: "b",
        text: "Colocando a mão na massa e fazendo as ações de fato",
        points: { medicina: 3, professor: 3, zoologia: 3 }
      },
      {
        id: "c",
        text: "Buscando informações e referências pra deixar o projeto mais completo",
        points: { jornalismo: 3, direito: 3 }
      },
      {
        id: "d",
        text: "Organizando e direcionando o grupo",
        points: { administracao: 3, informatica: 3 }
      },
      {
        id: "e",
        text: "Dando ideias e sugestões criativas",
        points: { artes: 3 }
      }
    ]
  },
  {
    id: 3,
    question: "Quais tipos de temas mais despertam sua curiosidade no dia a dia?",
    options: [
      {
        id: "a",
        text: "Organização, finanças e dinâmicas de trabalho",
        points: { administracao: 3 }
      },
      {
        id: "b",
        text: "Diferentes formas de expressão e cultura",
        points: { cinema: 3, artes: 3 }
      },
      {
        id: "c",
        text: "Relações entre grupos e comunidades",
        points: { publicidade: 3, jornalismo: 3 }
      },
      {
        id: "d",
        text: "Novidades e avanços que transformam o cotidiano",
        points: { informatica: 3, direito: 3 }
      },
      {
        id: "e",
        text: "Questões sobre bem-estar e qualidade de vida",
        points: { medicina: 3, professor: 3, zoologia: 3 }
      }
    ]
  },
  {
    id: 4,
    question: "Qual tipo de atividade mais te energiza?",
    options: [
      {
        id: "a",
        text: "Criar algo original, seja de forma visual, verbal ou outra",
        points: { artes: 3, cinema: 3 }
      },
      {
        id: "b",
        text: "Organizar atividades ou recursos pra atingir um objetivo",
        points: { jornalismo: 3, publicidade: 3 }
      },
      {
        id: "c",
        text: "Estar presente pra apoiar os outros, mesmo em pequenos detalhes",
        points: { medicina: 3, professor: 3 }
      },
      {
        id: "d",
        text: "Lidar com situações que exigem soluções práticas e eficazes",
        points: { informatica: 3, administracao: 3 }
      },
      {
        id: "e",
        text: "Investigar, analisar e encontrar sentido nas coisas",
        points: { zoologia: 3, direito: 3 }
      }
    ]
  },
  {
    id: 5,
    question: "Para você, um bom professor é aquele que...",
    options: [
      {
        id: "a",
        text: "Estimula o aluno a questionar e aprofundar conhecimentos",
        points: { informatica: 3, professor: 3 }
      },
      {
        id: "b",
        text: "Dá a chance do aluno ter ou fazer suas experiências",
        points: { artes: 3, zoologia: 3 }
      },
      {
        id: "c",
        text: "Transmite o conteúdo completo, sem deixar nada pra trás",
        points: { administracao: 3, direito: 3 }
      },
      {
        id: "d",
        text: "Ensina a trabalhar em grupo",
        points: { cinema: 3, publicidade: 3, jornalismo: 3 }
      },
      {
        id: "e",
        text: "Ajuda a identificar os interesses e talentos de seus alunos",
        points: { medicina: 3, professor: 3 }
      }
    ]
  },
  {
    id: 6,
    question: "Você imagina se destacar profissionalmente...",
    options: [
      {
        id: "a",
        text: "Pela sua ótima capacidade de análise",
        points: { zoologia: 3, administracao: 3 }
      },
      {
        id: "b",
        text: "Pela sua excelência em estruturar processos",
        points: { direito: 3 }
      },
      {
        id: "c",
        text: "Pelas suas ótimas habilidades de Comunicação",
        points: { jornalismo: 3, publicidade: 3 }
      },
      {
        id: "d",
        text: "Por propor novas formas de fazer as coisas ou pelo seu senso estético aguçado",
        points: { artes: 3, cinema: 3 }
      },
      {
        id: "e",
        text: "Pela sua objetividade",
        points: { informatica: 3, direito: 3 }
      }
    ]
  },
  {
    id: 7,
    question: "Em um problema complexo, qual aspecto você prioriza?",
    options: [
      {
        id: "a",
        text: "Consequências e responsabilidades envolvidas",
        points: { zoologia: 3, medicina: 3 }
      },
      {
        id: "b",
        text: "Originalidade e inovação",
        points: { cinema: 3, artes: 3 }
      },
      {
        id: "c",
        text: "Viabilidade e resultados",
        points: { administracao: 3 }
      },
      {
        id: "d",
        text: "Eficiência e praticidade da solução",
        points: { informatica: 3, direito: 3 }
      },
      {
        id: "e",
        text: "Impacto nas pessoas envolvidas",
        points: { jornalismo: 3, publicidade: 3, professor: 3 }
      }
    ]
  },
  {
    id: 8,
    question: "Qual característica mais se destaca em você?",
    options: [
      {
        id: "a",
        text: "Naturalmente assumo a frente em projetos, organizando pessoas e tarefas com clareza",
        points: { jornalismo: 3, publicidade: 3 }
      },
      {
        id: "b",
        text: "Tenho uma vontade constante de aprender mais e entender a fundo aquilo que me intriga",
        points: { direito: 3, zoologia: 3 }
      },
      {
        id: "c",
        text: "Gosto de encontrar soluções pra problemas complexos e analisar os fatos de forma objetiva",
        points: { informatica: 3, administracao: 3 }
      },
      {
        id: "d",
        text: "Tenho facilidade em pensar fora da caixa e me expresso bem por meio de ideias ou criações",
        points: { artes: 3, cinema: 3 }
      },
      {
        id: "e",
        text: "Costumo perceber o que os outros sentem e me preocupo em ajudar",
        points: { professor: 3, medicina: 3 }
      }
    ]
  },
  {
    id: 9,
    question: "Você gosta mais de atividades que envolvam...",
    options: [
      {
        id: "a",
        text: "Criação, expressão ou beleza",
        points: { cinema: 3, artes: 3 }
      },
      {
        id: "b",
        text: "Planejamento, ordenação ou cálculo",
        points: { direito: 3, administracao: 3 }
      },
      {
        id: "c",
        text: "Máquinas, atividade corporal, alimentos, plantas ou animais",
        points: { medicina: 3, zoologia: 3 }
      },
      {
        id: "d",
        text: "Estratégia, compra e venda",
        points: { publicidade: 3 }
      },
      {
        id: "e",
        text: "Relacionamento, cuidado ou mediação interpessoal",
        points: { jornalismo: 3 }
      }
    ]
  },
  {
    id: 10,
    question: "Com qual frase você mais se identifica?",
    options: [
      {
        id: "a",
        text: "Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito bela para ser insignificante. - Charles Chaplin",
        points: { publicidade: 3, zoologia: 3 }
      },
      {
        id: "b",
        text: "Existe apenas um bem, o saber; e apenas um mal, a ignorância. - Sócrates",
        points: { professor: 3, direito: 3 }
      },
      {
        id: "c",
        text: "Mais vale um pássaro na mão do que dois voando",
        points: { informatica: 3, administracao: 3 }
      },
      {
        id: "d",
        text: "A sensibilidade e a imaginação conservam a mocidade imortal da alma. - Anne Louise Germaine de Staël",
        points: { artes: 3, cinema: 3 }
      },
      {
        id: "e",
        text: "Uma grama de ação vale uma tonelada de teoria. - Friedrich Engels",
        points: { jornalismo: 3 }
      }
    ]
  }
];