import { useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/images/gallery/puits-1.webp', alt: 'Puits réalisé 1' },
  { src: '/images/gallery/puits-2.webp', alt: 'Puits réalisé 2' },
  { src: '/images/gallery/puits-3.webp', alt: 'Puits réalisé 3' },
  { src: '/images/gallery/puits-4.webp', alt: 'Puits réalisé 4' },
  { src: '/images/gallery/puits-5.webp', alt: 'Puits réalisé 5' },
  { src: '/images/gallery/puits-6.webp', alt: 'Puits réalisé 6' },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="galerie" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#016B61' }}>
            Galerie
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-uns des puits que nous avons réalisés à travers le Sénégal
          </p>
        </div>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:overflow-x-visible sm:snap-none sm:pb-0">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[80%] snap-center sm:w-auto overflow-hidden rounded-2xl shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[280px] object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-4 sm:hidden">
            <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center" style={{ color: '#016B61' }}>
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center" style={{ color: '#016B61' }}>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Vue agrandie"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
