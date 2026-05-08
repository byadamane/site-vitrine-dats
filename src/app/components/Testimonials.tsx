import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  { src: '/videos/temoignage-1.mp4', title: 'Témoignage village 1' },
  { src: '/videos/temoignage-2.mp4', title: 'Témoignage village 2' },
  { src: '/videos/temoignage-3.mp4', title: 'Témoignage village 3' },
];

export function Testimonials() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handlePlay = (index: number) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.85;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="temoignages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#016B61' }}>
            Témoignages
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Écoutez les villageois partager leur expérience et l'impact de nos puits sur leur quotidien
          </p>
        </div>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-x-visible md:snap-none md:pb-0">
            {videos.map((video, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85%] snap-center md:w-auto rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <video
                  ref={(el) => { videoRefs.current[index] = el; }}
                  src={video.src}
                  controls
                  className="w-full h-[300px] object-cover bg-black"
                  preload="metadata"
                  onPlay={() => handlePlay(index)}
                />
                <div className="p-4 bg-gray-50">
                  <h3 className="text-lg font-medium" style={{ color: '#016B61' }}>
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-4 md:hidden">
            <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center" style={{ color: '#016B61' }}>
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center" style={{ color: '#016B61' }}>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
