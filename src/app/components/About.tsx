import { Heart, Users, Droplet } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="a-propos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#016B61' }}>
            À Propos de DATS
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dar At Taqwah Social est un groupe solidaire dédié à améliorer l'accès à l'eau potable 
            dans les zones rurales du Sénégal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/images/mission-dats.jpg"
              alt="Mission DATS"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl mb-6" style={{ color: '#CB5B05' }}>
              Notre Mission
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Depuis notre création, nous nous engageons à fournir un accès durable à l'eau potable 
              aux communautés sénégalaises. Chaque puits que nous construisons transforme la vie de 
              centaines de familles en leur offrant une ressource vitale à proximité de leur foyer.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Notre approche est simple mais efficace : grâce à des collectes régulières et à la 
              générosité de nos donateurs, nous identifions les zones prioritaires et y construisons 
              des puits de qualité qui serviront les générations futures.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#016B61' }}
            >
              <Droplet className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl mb-3">Accès à l'eau</h4>
            <p className="text-gray-600">
              Nous apportons l'eau potable là où elle manque le plus
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#CB5B05' }}
            >
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl mb-3">Communauté</h4>
            <p className="text-gray-600">
              Nous travaillons avec les communautés locales pour un impact durable
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#016B61' }}
            >
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl mb-3">Solidarité</h4>
            <p className="text-gray-600">
              Chaque don contribue à changer des vies de manière concrète
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
