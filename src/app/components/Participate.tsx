import { Calendar, HandHeart, MessageCircle } from 'lucide-react';

export function Participate() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="participer" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#016B61' }}>
            Comment Participer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Rejoignez notre mission et contribuez à apporter l'eau potable aux communautés du Sénégal
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Collectes régulières */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: '#016B61' }}
            >
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-4">Collectes Régulières</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Nous organisons deux collectes par mois pour rassembler les fonds nécessaires à la 
              construction de nouveaux puits. Chaque contribution, petite ou grande, fait une différence.
            </p>
            <ul className="space-y-3 mb-6 text-gray-700">
              <li className="flex items-start">
                <span
                  className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                  style={{ backgroundColor: '#016B61' }}
                />
                <span>Deux collectes organisées chaque mois</span>
              </li>
              <li className="flex items-start">
                <span
                  className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                  style={{ backgroundColor: '#016B61' }}
                />
                <span>Transparence totale sur l'utilisation des fonds</span>
              </li>
              <li className="flex items-start">
                <span
                  className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                  style={{ backgroundColor: '#016B61' }}
                />
                <span>Suivi de chaque projet de construction</span>
              </li>
            </ul>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full px-6 py-3 rounded-lg text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#016B61' }}
            >
              Rejoindre les collectes
            </button>
          </div>

          {/* Prise en charge complète */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: '#CB5B05' }}
            >
              <HandHeart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-4">Prise en Charge d'un Puits</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Vous souhaitez avoir un impact immédiat et durable ? Prenez en charge la construction 
              complète d'un puits et changez la vie de toute une communauté.
            </p>
            <ul className="space-y-3 mb-6 text-gray-700">
              <li className="flex items-start">
                <span
                  className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                  style={{ backgroundColor: '#CB5B05' }}
                />
                <span>Construction d'un puits complet à votre nom</span>
              </li>
              <li className="flex items-start">
                <span
                  className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                  style={{ backgroundColor: '#CB5B05' }}
                />
                <span>Choix de la localisation avec notre équipe</span>
              </li>
              <li className="flex items-start">
                <span
                  className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                  style={{ backgroundColor: '#CB5B05' }}
                />
                <span>Documentation complète du projet</span>
              </li>
            </ul>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full px-6 py-3 rounded-lg text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#CB5B05' }}
            >
              Contacter le bureau
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="rounded-2xl p-8 md:p-12 text-white text-center"
          style={{ backgroundColor: '#016B61' }}
        >
          <MessageCircle className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl mb-4">Besoin d'informations ?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
            Notre équipe est disponible pour répondre à toutes vos questions sur nos projets, 
            nos collectes, ou pour vous accompagner dans la prise en charge d'un puits.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 rounded-lg border-2 border-white text-white transition-all hover:bg-white/10"
          >
            Contactez-nous maintenant
          </button>
        </div>
      </div>
    </section>
  );
}
