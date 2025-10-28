import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import logo from '../assets/logo.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-blue/40 backdrop-blur-xl border-t border-white/10 pt-12 pb-6 shadow-[0_-4px_20px_rgba(107,78,255,0.1)]" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 text-accent-gold">
                {logo}
              </div>
              <span className="text-xl font-cinzel font-bold text-accent-gold">
                Ordem Vocacional
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Descubra sua verdadeira vocação através do nosso teste vocacional único, 
              inspirado em nosso RPG.
            </p>
            <div className="flex space-x-4" role="list" aria-label="Redes sociais">
              <a href="#" className="text-white hover:text-accent-gold transition-colors" aria-label="Facebook" role="listitem">
                <Facebook size={20} />
              </a>
              <Link to="/o-outro-lado" className="text-white hover:text-accent-gold transition-colors" aria-label="Instagram" role="listitem">
                <Instagram size={20} />
              </Link>
              <a href="#" className="text-white hover:text-accent-gold transition-colors" aria-label="Twitter" role="listitem">
                <Twitter size={20} />
              </a>
              <a href="mailto:ordemvocacional@gmail.com" className="text-white hover:text-accent-gold transition-colors" aria-label="Email" role="listitem">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h3 className="text-accent-gold font-medium mb-4">Links Rápidos</h3>
            <nav aria-label="Links rápidos">
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-accent-gold transition-colors">Início</Link></li>
                <li><Link to="/sobre" className="text-gray-300 hover:text-accent-gold transition-colors">Sobre o Teste</Link></li>
                <li><Link to="/teste" className="text-gray-300 hover:text-accent-gold transition-colors">Fazer Teste</Link></li>
                <li><Link to="/rpg" className="text-gray-300 hover:text-accent-gold transition-colors">RPG</Link></li>
              </ul>
            </nav>
          </div>

          {/* RPG Section */}
          <div className="col-span-1">
            <h3 className="text-accent-gold font-medium mb-4">RPG</h3>
            <nav aria-label="Links do RPG">
              <ul className="space-y-2">
                <li><Link to="/rpg#regras" className="text-gray-300 hover:text-accent-gold transition-colors">Regras</Link></li>
                <li><Link to="/rpg#cenarios" className="text-gray-300 hover:text-accent-gold transition-colors">Cenários</Link></li>
                <li><Link to="/rpg#personagens" className="text-gray-300 hover:text-accent-gold transition-colors">Personagens</Link></li>
                <li><Link to="/rpg#tokens" className="text-gray-300 hover:text-accent-gold transition-colors">Tokens</Link></li>
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-accent-gold font-medium mb-4">Contato</h3>
            <p className="text-gray-300 text-sm mb-2">
              Tem dúvidas ou sugestões? Entre em contato conosco.
            </p>
            <a 
              href="mailto:ordemvocacional@gmail.com" 
              className="text-white hover:text-accent-gold transition-colors"
              aria-label="Enviar email para ordemvocacional@gmail.com"
            >
              ordemvocacional@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-light-purple/20 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ordem Vocacional. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;