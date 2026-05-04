const videos = [
  { src: '/videos/temoignage-1.mp4', title: 'Témoignage village 1' },
  { src: '/videos/temoignage-2.mp4', title: 'Témoignage village 2' },
  { src: '/videos/temoignage-3.mp4', title: 'Témoignage village 3' },
];

export function Testimonials() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <video
                src={video.src}
                controls
                className="w-full h-[300px] object-cover bg-black"
                preload="metadata"
              />
              <div className="p-4 bg-gray-50">
                <h3 className="text-lg font-medium" style={{ color: '#016B61' }}>
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
