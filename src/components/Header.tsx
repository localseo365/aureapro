import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-navy-900 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <a href="#" className="text-gold-500 font-semibold text-2xl hover:text-gold-400 transition">
              AUREAPRO
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#servicios" className="hover:text-gold-400 transition">Servicios</a>
            <a href="#cobertura" className="hover:text-gold-400 transition">Área de Cobertura</a>
            <a href="#sobre-nosotros" className="hover:text-gold-400 transition">Sobre Nosotros</a>
            <a href="#contacto" className="hover:text-gold-400 transition">Contacto</a>
          </nav>

          <div className="hidden md:flex items-center">
            <a href="tel:+34690220944" className="bg-gold-500 text-navy-900 px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-gold-400 transition">
              <Phone size={18} />
              <span>690 22 09 44</span>
            </a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#servicios" className="block px-3 py-2 hover:bg-navy-700">Servicios</a>
            <a href="#cobertura" className="block px-3 py-2 hover:bg-navy-700">Área de Cobertura</a>
            <a href="#sobre-nosotros" className="block px-3 py-2 hover:bg-navy-700">Sobre Nosotros</a>
            <a href="#contacto" className="block px-3 py-2 hover:bg-navy-700">Contacto</a>
            <a href="tel:+34690220944" className="block px-3 py-2 text-gold-400">
              <Phone className="inline mr-2" size={18} />
              690 22 09 44
            </a>
          </div>
        </div>
      )}
    </header>
  );
}