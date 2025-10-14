import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { vocationalProfiles, VocationalProfile } from '../data/testQuestions';
import { professionCategories } from '../data/tokensData';

interface ProfessionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const professionList: Array<{ id: VocationalProfile; name: string }> = [
  { id: 'informatica', name: 'Tecnologia da Informação' },
  { id: 'medicina', name: 'Medicina' },
  { id: 'zoologia', name: 'Zoologia' },
  { id: 'publicidade', name: 'Publicidade e Propaganda' },
  { id: 'jornalismo', name: 'Jornalismo' },
  { id: 'artes', name: 'Artes Visuais e Design' },
  { id: 'administracao', name: 'Administração' },
  { id: 'direito', name: 'Direito' },
  { id: 'cinema', name: 'Cinema e Audiovisual' },
  { id: 'professor', name: 'Educação' },
];

const ProfessionModal: React.FC<ProfessionModalProps> = ({ isOpen, onClose }) => {
  const [selectedProfession, setSelectedProfession] = useState<VocationalProfile | null>(null);

  if (!isOpen) return null;

  const handleProfessionSelect = (professionId: VocationalProfile) => {
    setSelectedProfession(professionId);
  };

  const handleBack = () => {
    setSelectedProfession(null);
  };

  const selectedProfile = selectedProfession ? vocationalProfiles[selectedProfession] : null;
  const selectedCategory = selectedProfession ? professionCategories.find(
    cat => cat.id === selectedProfession ||
    (selectedProfession === 'professor' && cat.id === 'educacao')
  ) : null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-dark-blue border border-light-purple/20 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-accent-gold">
              {selectedProfession ? selectedProfile?.title : 'Explorar Profissões'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              <X size={24} />
            </button>
          </div>

          {!selectedProfession ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {professionList.map((profession) => (
                <button
                  key={profession.id}
                  onClick={() => handleProfessionSelect(profession.id)}
                  className="text-left p-4 rounded-md border border-light-purple/20 bg-dark-purple/30 hover:bg-dark-purple/50 hover:border-accent-gold/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-cinzel font-semibold text-accent-gold mb-2">
                    {profession.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Clique para ver detalhes
                  </p>
                </button>
              ))}
            </div>
          ) : (
            <div>
              <button
                onClick={handleBack}
                className="flex items-center text-accent-gold hover:text-accent-gold/80 mb-4 transition-colors"
              >
                <ChevronLeft size={20} />
                <span>Voltar para lista</span>
              </button>

              <div className="space-y-6">
                <div className="bg-dark-purple/30 p-6 rounded-lg border border-light-purple/20">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img
                        src={selectedProfile?.imageUrl}
                        alt={selectedProfile?.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-cinzel font-semibold text-accent-gold mb-3">
                        Sobre esta profissão
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedProfile?.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-dark-purple/30 p-6 rounded-lg border border-light-purple/20">
                  <h3 className="text-xl font-cinzel font-semibold text-accent-gold mb-4">
                    Carreiras Recomendadas
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProfile?.careers.map((career, index) => (
                      <div
                        key={index}
                        className="bg-dark-blue/50 p-3 rounded-md border border-light-purple/10"
                      >
                        <span className="text-white text-sm">{career}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedCategory && (
                  <div className="bg-dark-purple/30 p-6 rounded-lg border border-light-purple/20">
                    <h3 className="text-xl font-cinzel font-semibold text-accent-gold mb-4">
                      Tokens da Profissão
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {selectedCategory.tokens.map((token) => (
                        <div
                          key={token.id}
                          className="bg-dark-blue/50 rounded-lg p-3 border border-light-purple/10"
                        >
                          <div className="aspect-square rounded-lg overflow-hidden mb-2 bg-dark-purple/30">
                            <img
                              src={token.imagePath}
                              alt={token.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <h4 className="text-sm font-cinzel font-semibold text-accent-gold">
                            {token.name}
                          </h4>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex justify-end mt-6">
            <button onClick={onClose} className="btn-primary">
              Fechar
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProfessionModal;
