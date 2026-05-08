import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const sections = ['accueil', 'a-propos', 'impact', 'galerie', 'temoignages', 'participer', 'contact'];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => scrollToSection('accueil')}>
              <img src="/images/logo-dats.png" alt="DATS - Dar At Taqwah Social" className="h-14 w-auto" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('accueil')}
              className={`transition-colors ${activeSection === 'accueil' ? 'text-[#016B61] font-semibold' : 'text-gray-700 hover:text-[#016B61]'}`}
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('a-propos')}
              className={`transition-colors ${activeSection === 'a-propos' ? 'text-[#016B61] font-semibold' : 'text-gray-700 hover:text-[#016B61]'}`}
            >
              À Propos
            </button>
            <button
              onClick={() => scrollToSection('impact')}
              className={`transition-colors ${activeSection === 'impact' ? 'text-[#016B61] font-semibold' : 'text-gray-700 hover:text-[#016B61]'}`}
            >
              Notre Impact
            </button>
            <button
              onClick={() => scrollToSection('galerie')}
              className={`transition-colors ${activeSection === 'galerie' ? 'text-[#016B61] font-semibold' : 'text-gray-700 hover:text-[#016B61]'}`}
            >
              Galerie
            </button>
            <button
              onClick={() => scrollToSection('temoignages')}
              className={`transition-colors ${activeSection === 'temoignages' ? 'text-[#016B61] font-semibold' : 'text-gray-700 hover:text-[#016B61]'}`}
            >
              Témoignages
            </button>
            <button
              onClick={() => scrollToSection('participer')}
              className={`transition-colors ${activeSection === 'participer' ? 'text-[#016B61] font-semibold' : 'text-gray-700 hover:text-[#016B61]'}`}
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
                className={`text-left py-2 transition-colors ${activeSection === 'accueil' ? 'text-[#016B61] font-semibold' : 'text-gray-700 hover:text-[#016B61]'}`}
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('a-propos')}
                className={`text-left py-2 transition-colors ${activeSection === 'a-propos' ? 'text-[#016B61] font-semibold' : 'text-gray-700 hover:text-[#016B61]'}`}
              >
                À Propos
              </button>
              <button
                onClick={() => scrollToSection('impact')}
                className={`text-left py-2 transition-colors ${activeSection === 'impact' ? 'text-[#016B61] font-semibold' : 'text-gray-700 hover:text-[#016B61]'}`}
              >
                Notre Impact
              </button>
              <button
                onClick={() => scrollToSection('galerie')}
                className={`text-left py-2 transition-colors ${activeSection === 'galerie' ? 'text-[#016B61] font-semibold' : 'text-gray-700 hover:text-[#016B61]'}`}
              >
                Galerie
              </button>
              <button
                onClick={() => scrollToSection('temoignages')}
                className={`text-left py-2 transition-colors ${activeSection === 'temoignages' ? 'text-[#016B61] font-semibold' : 'text-gray-700 hover:text-[#016B61]'}`}
              >
                Témoignages
              </button>
              <button
                onClick={() => scrollToSection('participer')}
                className={`text-left py-2 transition-colors ${activeSection === 'participer' ? 'text-[#016B61] font-semibold' : 'text-gray-700 hover:text-[#016B61]'}`}
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
