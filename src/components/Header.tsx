import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.tsx';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-blue/40 backdrop-blur-xl shadow-lg shadow-purple-500/10 border-b border-white/10' : 'bg-dark-blue/20 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-10 h-10 text-accent-gold">
              {logo}
            </div>
            <span className="text-xl font-cinzel font-bold tracking-wider text-accent-gold">
              Ordem Vocacional
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav id="navigation" className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Navegação principal">
            <Link to="/" className={`hover:text-accent-gold transition-colors ${location.pathname === '/' ? 'text-accent-gold' : 'text-white'}`}>Início</Link>
            <Link to="/sobre" className={`hover:text-accent-gold transition-colors ${location.pathname === '/sobre' ? 'text-accent-gold' : 'text-white'}`}>Sobre o Teste</Link>
            <Link to="/teste" className={`hover:text-accent-gold transition-colors ${location.pathname === '/teste' ? 'text-accent-gold' : 'text-white'}`}>Fazer Teste</Link>
            <Link to="/rpg" className={`hover:text-accent-gold transition-colors ${location.pathname === '/rpg' ? 'text-accent-gold' : 'text-white'}`}>RPG</Link>
            <Link to="/tokens-e-mapas" className={`hover:text-accent-gold transition-colors ${location.pathname === '/tokens-e-mapas' ? 'text-accent-gold' : 'text-white'}`}>Tokens e Mapas</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav id="mobile-menu" className="md:hidden bg-dark-blue/40 backdrop-blur-xl border-t border-white/10 animate-fade-in shadow-lg shadow-purple-500/10" role="navigation" aria-label="Navegação móvel">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className={`py-2 ${location.pathname === '/' ? 'text-accent-gold' : 'text-white'}`} onClick={closeMenu}>Início</Link>
            <Link to="/sobre" className={`py-2 ${location.pathname === '/sobre' ? 'text-accent-gold' : 'text-white'}`} onClick={closeMenu}>Sobre o Teste</Link>
            <Link to="/teste" className={`py-2 ${location.pathname === '/teste' ? 'text-accent-gold' : 'text-white'}`} onClick={closeMenu}>Fazer Teste</Link>
            <Link to="/rpg" className={`py-2 ${location.pathname === '/rpg' ? 'text-accent-gold' : 'text-white'}`} onClick={closeMenu}>RPG</Link>
            <Link to="/tokens-e-mapas" className={`py-2 ${location.pathname === '/tokens-e-mapas' ? 'text-accent-gold' : 'text-white'}`} onClick={closeMenu}>Tokens e Mapas</Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;