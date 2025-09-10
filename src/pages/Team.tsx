import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Code, Palette, BookOpen } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Pyetro",
      role: "Dev do Site",
      description: "O fluxo que banha o outro lado",
      image: "https://images.pexels.com/photos/33851655/pexels-photo-33851655.png",
      icon: <Code size={24} />,
      color: "from-red-600 to-red-800"
    },
    {
      id: 2,
      name: "Renato",
      role: "Musica & Designer",
      description: "Todas as coisas precisam de um fim",
      image: "https://images.pexels.com/photos/33851658/pexels-photo-33851658.png?_gl=1*14upyb5*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTc1MDYwNjYkbzEyJGcxJHQxNzU3NTA2NDc5JGo0OCRsMCRoMA..",
      icon: <Palette size={24} />,
      color: "from-gray-800 to-black"
    },
    {
      id: 3,
      name: "Gustavo",
      role: "Desenhista",
      description: "Saber tudo é perder tudo",
      image: "https://images.pexels.com/photos/33851657/pexels-photo-33851657.png?_gl=1*756zs3*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTc1MDYwNjYkbzEyJGcxJHQxNzU3NTA2NTgzJGo1NSRsMCRoMA..",
      icon: <Heart size={24} />,
      color: "from-yellow-500 to-yellow-700"
    },
    {
      id: 4,
      name: "Alice",
      role: "Orientadora Vocacional",
      description: "O CAOS É INEVITÁVEL",
      image: "https://images.pexels.com/photos/33851656/pexels-photo-33851656.png",
      icon: <BookOpen size={24} />,
      color: "from-purple-600 to-purple-800"
    },
    {
      id: 5,
      name: "Paulo",
      role: "Gerente de Projeto",
      description: "Mantém tudo organizado e no prazo. A cola que une toda a equipe.",
      image: "https://images.pexels.com/photos/33851654/pexels-photo-33851654.png",
      icon: <Users size={24} />,
      color: "from-gray-300 to-gray-500"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Novo fundo degradê secreto com vermelho, preto, amarelo, roxo e branco */}
      <div className="absolute inset-0 -z-10">
        <div
          className="w-full h-full"
          style={{
            background: "linear-gradient(135deg, #ff0000 0%, #000000 25%, #ffd700 50%, #800080 75%, #ffffff 100%)"
          }}
        />
      </div>
      {/* Overlay para legibilidade */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>
      <div className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-white mb-6 text-shadow-lg">
              O Outro Lado
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-shadow">
              Conheça as mentes por trás da Ordem Vocacional. 
              Somos mais que desenvolvedores - somos sonhadores, criadores e guias vocacionais.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="h-1 w-32 bg-white/80 rounded-full"></div>
            </div>
          </motion.div>

          {/* Grid centralizada */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col items-center"
              >
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105 hover:bg-white/15">
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                      <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/30 group-hover:border-white/60 transition-all duration-500">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className={`absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white/30`}>
                        {member.icon}
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-cinzel font-bold text-white text-center mb-2">
                      {member.name}
                    </h3>
                    <p className="text-white/80 text-center font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-white/70 text-xs md:text-sm text-center leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Banner da Equipe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 overflow-hidden">
              {/* Título da seção */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-white mb-4">
                  Nossa Jornada Juntos
                </h2>
                <p className="text-white/80 max-w-2xl mx-auto">
                  Unidos pela paixão de ajudar pessoas a descobrirem seu verdadeiro potencial. 
                  Cada um de nós traz uma perspectiva única para criar algo extraordinário.
                </p>
              </div>

              {/* Banner da equipe */}
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                {/* Imagem de fundo estilo banner */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-purple-600/20 to-yellow-500/20"></div>
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Equipe Ordem Vocacional"
                  className="w-full h-full object-cover opacity-80"
                />
                
                {/* Overlay com texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                  <div className="p-8 w-full">
                    <h3 className="text-2xl md:text-3xl font-cinzel font-bold text-white mb-2">
                      Equipe Ordem Vocacional
                    </h3>
                    <p className="text-white/90 text-lg">
                      "Transformando vidas através da descoberta vocacional"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mensagem especial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-cinzel font-bold text-white mb-4">
                Uma Mensagem da Equipe
              </h3>
              <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
                Cada linha de código, cada pixel desenhado, cada pergunta do teste foi pensada 
                com carinho para você. Acreditamos que todos têm um propósito único, e nossa 
                missão é ajudar você a descobrir o seu. Obrigado por fazer parte desta jornada conosco! ❤️
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Team;