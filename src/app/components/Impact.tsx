import { TrendingUp, MapPin, Clock, Users } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, start]);

  return count;
}

export function Impact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const puits = useCountUp(200, 2000, isVisible);
  const annees = useCountUp(3, 1500, isVisible);
  const collectes = useCountUp(2, 1000, isVisible);
  const familles = useCountUp(1000, 2500, isVisible);

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#016B61' }}>
            Notre Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Des chiffres qui témoignent de notre engagement et de l'impact concret de vos dons
          </p>
        </div>

        <div ref={sectionRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer" style={{ backgroundColor: '#016B61' }}>
            <div className="flex justify-center mb-4">
              <MapPin className="w-12 h-12 text-white" />
            </div>
            <div className="text-5xl mb-2 text-white">{puits}+</div>
            <p className="text-white/90">Puits construits</p>
          </div>

          <div className="text-center p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer" style={{ backgroundColor: '#CB5B05' }}>
            <div className="flex justify-center mb-4">
              <Clock className="w-12 h-12 text-white" />
            </div>
            <div className="text-5xl mb-2 text-white">{annees}</div>
            <p className="text-white/90">Années d'expérience</p>
          </div>

          <div className="text-center p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer" style={{ backgroundColor: '#016B61' }}>
            <div className="flex justify-center mb-4">
              <TrendingUp className="w-12 h-12 text-white" />
            </div>
            <div className="text-5xl mb-2 text-white">{collectes}x</div>
            <p className="text-white/90">Collectes par mois</p>
          </div>

          <div className="text-center p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer" style={{ backgroundColor: '#CB5B05' }}>
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-white" />
            </div>
            <div className="text-5xl mb-2 text-white">{familles}+</div>
            <p className="text-white/90">Familles aidées</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl mb-6" style={{ color: '#CB5B05' }}>
              Chaque puits construit est une victoire
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Chacun de nos 200+ puits représente l'espoir pour des centaines de personnes.
              L'accès à l'eau potable réduit les maladies, permet aux enfants d'aller à l'école
              plutôt que de marcher des kilomètres pour chercher de l'eau, et libère les familles
              pour qu'elles puissent se concentrer sur leur développement.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Depuis bientôt 3 ans, nous avons touché plus de 1000 familles à travers tout le Sénégal,
              des régions rurales aux zones semi-urbaines, partout où le besoin se fait sentir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
