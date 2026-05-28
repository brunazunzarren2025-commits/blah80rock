import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="font-display text-2xl font-bold neon-glow cursor-pointer" onClick={() => scrollToSection('hero')}>
          BLAH80
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <button onClick={() => scrollToSection('sobre')} className="text-sm font-heading uppercase hover:text-primary transition-colors">
            Sobre
          </button>
          <button onClick={() => scrollToSection('integrantes')} className="text-sm font-heading uppercase hover:text-primary transition-colors">
            Integrantes
          </button>
          <button onClick={() => scrollToSection('agenda')} className="text-sm font-heading uppercase hover:text-primary transition-colors">
            Agenda
          </button>
          <button onClick={() => scrollToSection('musicas')} className="text-sm font-heading uppercase hover:text-primary transition-colors">
            Músicas
          </button>
          <button onClick={() => scrollToSection('galeria')} className="text-sm font-heading uppercase hover:text-primary transition-colors">
            Galeria
          </button>
          <button onClick={() => scrollToSection('contato')} className="btn-neon text-xs">
            Contratar
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('sobre')} className="text-sm font-heading uppercase hover:text-primary transition-colors text-left">
              Sobre
            </button>
            <button onClick={() => scrollToSection('integrantes')} className="text-sm font-heading uppercase hover:text-primary transition-colors text-left">
              Integrantes
            </button>
            <button onClick={() => scrollToSection('agenda')} className="text-sm font-heading uppercase hover:text-primary transition-colors text-left">
              Agenda
            </button>
            <button onClick={() => scrollToSection('musicas')} className="text-sm font-heading uppercase hover:text-primary transition-colors text-left">
              Músicas
            </button>
            <button onClick={() => scrollToSection('galeria')} className="text-sm font-heading uppercase hover:text-primary transition-colors text-left">
              Galeria
            </button>
            <button onClick={() => scrollToSection('contato')} className="btn-neon text-xs w-full">
              Contratar
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
