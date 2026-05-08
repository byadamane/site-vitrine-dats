import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="pt-28">
      <div className="relative h-[500px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-dats.jpg"
            alt="Puits au Sénégal"
            className="w-full h-full object-cover object-right sm:object-center"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 leading-snug">
              D'après 'Abdallah Ibn 'Abbas, le Prophète (ﷺ) a dit : « La meilleure aumône est de donner de l'eau à boire »
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-200">
              Depuis bientôt 3 ans, Dar At Taqwah Social construit des puits à travers le Sénégal
              pour apporter l'accès à l'eau potable aux communautés qui en ont le plus besoin.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollToSection('participer')}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-lg text-white text-base transition-all hover:opacity-90 shadow-lg"
                style={{ backgroundColor: '#CB5B05' }}
              >
                Participer aux collectes
              </button>
              <button
                onClick={() => scrollToSection('a-propos')}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-lg border-2 border-white text-white text-base transition-all hover:bg-white/10"
              >
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
