import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex flex-col">
              <span className="font-bold text-xl" style={{ color: '#016B61' }}>
                Dar At Taqwah Social
              </span>
              <span className="text-sm text-gray-600">DATS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('accueil')}
              className="text-gray-700 hover:text-[#016B61] transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('a-propos')}
              className="text-gray-700 hover:text-[#016B61] transition-colors"
            >
              À Propos
            </button>
            <button
              onClick={() => scrollToSection('impact')}
              className="text-gray-700 hover:text-[#016B61] transition-colors"
            >
              Notre Impact
            </button>
            <button
              onClick={() => scrollToSection('participer')}
              className="text-gray-700 hover:text-[#016B61] transition-colors"
            >
              Participer
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 rounded-lg text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#CB5B05' }}
            >
              Contactez-nous
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" style={{ color: '#016B61' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: '#016B61' }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('accueil')}
                className="text-left text-gray-700 hover:text-[#016B61] py-2 transition-colors"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('a-propos')}
                className="text-left text-gray-700 hover:text-[#016B61] py-2 transition-colors"
              >
                À Propos
              </button>
              <button
                onClick={() => scrollToSection('impact')}
                className="text-left text-gray-700 hover:text-[#016B61] py-2 transition-colors"
              >
                Notre Impact
              </button>
              <button
                onClick={() => scrollToSection('participer')}
                className="text-left text-gray-700 hover:text-[#016B61] py-2 transition-colors"
              >
                Participer
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left px-6 py-2.5 rounded-lg text-white transition-all hover:opacity-90"
                style={{ backgroundColor: '#CB5B05' }}
              >
                Contactez-nous
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
