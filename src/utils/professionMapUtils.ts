import { VocationalProfile } from '../data/testQuestions';

interface MapInfo {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  details: string;
}

const professionToMapId: Record<VocationalProfile, string> = {
  medicina: 'hospital',
  informatica: 'office',
  professor: 'school',
  jornalismo: 'courthouse',
  zoologia: 'laboratory',
  publicidade: 'advertising_agency',
  artes: 'art_studio',
  cinema: 'film_studio',
  administracao: 'social_center',
  direito: 'tech_company',
};

export const maps: MapInfo[] = [
  {
    id: 'hospital',
    name: 'Posto de Saúde',
    description: 'Mapa detalhado de um hospital com salas de emergência, consultórios e atendimento.',
    imagePath: 'https://images.pexels.com/photos/33444068/pexels-photo-33444068.png',
    details: 'Este mapa inclui: Recepção principal, Salas de emergência, Consultórios médicos, Centro cirúrgico, UTI, Farmácia interna, Laboratórios, Salas de espera e Corredores de acesso.',
  },
  {
    id: 'office',
    name: 'Empresa TI',
    description: 'Ambiente corporativo com salas de reunião, escritórios e áreas comuns.',
    imagePath: 'https://images.pexels.com/photos/33444067/pexels-photo-33444067.png?_gl=1*8hkknd*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTUxNzk2MTYkbzckZzEkdDE3NTUxODA5NTYkajU5JGwwJGgw',
    details: 'Este mapa inclui: Recepção corporativa, Escritórios individuais, Salas de reunião, Open space, Sala de diretoria, Copa/cozinha, Banheiros e Área de descanso.',
  },
  {
    id: 'school',
    name: 'Escola Publica',
    description: 'Ambiente escolar completo com salas de aula, laboratórios e biblioteca.',
    imagePath: 'https://images.pexels.com/photos/33444069/pexels-photo-33444069.png',
    details: 'Este mapa inclui: Salas de aula, Biblioteca, Laboratório de ciências, Laboratório de informática, Quadra esportiva, Pátio, Cantina, Diretoria e Sala dos professores.',
  },
  {
    id: 'courthouse',
    name: 'Sala de Jornalismo',
    description: 'Um mapa que conduz o visitante pelos bastidores do jornalismo, mostrando redações, estúdios e áreas onde as histórias ganham vida.',
    imagePath: 'https://images.pexels.com/photos/33444072/pexels-photo-33444072.png?_gl=1*12dp8bu*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTUxNzk2MTYkbzckZzEkdDE3NTUxODExMTUkajU2JGwwJGgw',
    details: 'Este mapa inclui: Mesas com computadores, câmeras, microfones e um quadro de pautas repleto de notícias.',
  },
  {
    id: 'laboratory',
    name: 'Zoológico',
    description: 'Um mapa colorido que guia os visitantes pelas trilhas e recintos do zoológico, revelando cada área cheia de vida e descoberta.',
    imagePath: 'https://images.pexels.com/photos/33444071/pexels-photo-33444071.png?_gl=1*139j44p*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTUxNzk2MTYkbzckZzEkdDE3NTUxODEyMzUkajUxJGwwJGgw',
    details: 'Este mapa inclui: Area de animais, utensilios, area de hidratação.',
  },
  {
    id: 'advertising_agency',
    name: 'Agência de Publicidade',
    description: 'Escritório criativo com salas de brainstorm e estúdio de produção.',
    imagePath: 'https://images.pexels.com/photos/33444070/pexels-photo-33444070.png',
    details: 'Este mapa inclui: Área criativa, Salas de brainstorm, Estúdio de produção, Sala de apresentação, Atendimento, Diretoria, Copa e Área de descanso.',
  },
  {
    id: 'art_studio',
    name: 'Estúdio de Arte',
    description: 'Estúdio de arte com espaços para pintura, escultura e design.',
    imagePath: 'https://images.pexels.com/photos/34282804/pexels-photo-34282804.png?_gl=1*1p5jt5d*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NjAzNTM1NTMkbzMxJGcxJHQxNzYwMzUzNzE5JGo1MSRsMCRoMA..',
    details: 'Este mapa inclui: Ateliês de pintura, Sala de escultura, Área de design digital, Galeria de exposição, Depósito de materiais, Sala de aula e Recepção.',
  },
  {
    id: 'film_studio',
    name: 'Estúdio de Cinema',
    description: 'Complexo de produção audiovisual com sets e salas de edição.',
    imagePath: 'https://images.pexels.com/photos/34244468/pexels-photo-34244468.png?_gl=1*krs4ko*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NjAxMDI3MjUkbzI3JGcxJHQxNzYwMTAzOTMyJGo1NiRsMCRoMA..',
    details: 'Este mapa inclui: Sets de filmagem, Salas de edição, Estúdio de som, Camarins, Depósito de equipamentos, Sala de produção, Recepção e Área técnica.',
  },
  {
    id: 'social_center',
    name: 'Escritorio de Administração',
    description: 'Escritório de administração com salas de reunioes e atividades.',
    imagePath: 'https://images.pexels.com/photos/34244968/pexels-photo-34244968.png?_gl=1*1u3ba0m*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NjAxMDYwMDMkbzI4JGcxJHQxNzYwMTA2MjY1JGo1OSRsMCRoMA..',
    details: 'Este mapa inclui: Recepção corporativa, Escritórios individuais, Salas de reunião, Open space, Sala de diretoria, Copa/cozinha, Banheiros e Área de descanso.',
  },
  {
    id: 'tech_company',
    name: 'Tribunal',
    description: 'Ambiente formal com salas de audiência, escritórios e áreas de espera.',
    imagePath: 'https://images.pexels.com/photos/34282805/pexels-photo-34282805.png?_gl=1*11rcw6t*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NjAzNTM1NTMkbzMxJGcxJHQxNzYwMzUzNzczJGo1OSRsMCRoMA..',
    details: 'Este mapa inclui: Salas de audiência, Gabinetes de juízes, Escritórios de advogados, Sala de testemunhas, Área de espera, Recepção e Segurança.',
  },
];

export const getMapForProfession = (professionId: VocationalProfile): MapInfo | undefined => {
  const mapId = professionToMapId[professionId];
  return maps.find((map) => map.id === mapId);
};
