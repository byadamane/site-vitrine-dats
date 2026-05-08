import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: '#016B61' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <a href="#accueil">
              <img src="/images/logo-dats.png" alt="DATS - Dar At Taqwah Social" className="h-14 w-auto mb-4" />
            </a>
            <p className="text-white/80 leading-relaxed">
              Un groupe solidaire dédié à la construction de puits au Sénégal depuis bientôt 3 ans.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4 text-white">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-white/80 hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#a-propos" className="text-white/80 hover:text-white transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#impact" className="text-white/80 hover:text-white transition-colors">
                  Notre Impact
                </a>
              </li>
              <li>
                <a href="#participer" className="text-white/80 hover:text-white transition-colors">
                  Participer
                </a>
              </li>
            </ul>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-xl mb-4 text-white">Notre Mission</h3>
            <p className="text-white/80 leading-relaxed">
              Apporter l'accès à l'eau potable aux communautés qui en ont le plus besoin à travers 
              tout le Sénégal.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80">
            © 2026 Dar At Taqwah Social. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
