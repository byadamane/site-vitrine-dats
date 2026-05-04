import { useState } from 'react';
import { X } from 'lucide-react';

const images = [
  { src: '/images/gallery/puits-1.jpg', alt: 'Puits réalisé 1' },
  { src: '/images/gallery/puits-2.jpg', alt: 'Puits réalisé 2' },
  { src: '/images/gallery/puits-3.jpg', alt: 'Puits réalisé 3' },
  { src: '/images/gallery/puits-4.jpg', alt: 'Puits réalisé 4' },
  { src: '/images/gallery/puits-5.jpg', alt: 'Puits réalisé 5' },
  { src: '/images/gallery/puits-6.jpg', alt: 'Puits réalisé 6' },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
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
