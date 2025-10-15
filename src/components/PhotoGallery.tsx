import { useState } from "react";

const PhotoGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const photos = [
    {
      title: "Álbum Indie Rock",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=800&fit=crop",
      category: "Música"
    },
    {
      title: "Capa Hip Hop",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop",
      category: "Música"
    },
    {
      title: "Festival de Verão",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=800&fit=crop",
      category: "Evento"
    },
    {
      title: "Sessão de Estúdio",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=800&fit=crop",
      category: "Música"
    },
    {
      title: "Concerto ao Vivo",
      image: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&h=800&fit=crop",
      category: "Evento"
    },
    {
      title: "Arte Visual",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=800&fit=crop",
      category: "Design"
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold">
            Galeria de <span className="text-gradient">Fotos</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Momentos eternizados em imagens
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer hover-lift"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`} />

              <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 ${
                hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm mb-2 backdrop-blur-sm">
                  {photo.category}
                </span>
                <h3 className="text-xl font-bold">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
