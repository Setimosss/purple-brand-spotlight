import { Camera, Video, Palette, Music } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Produção de Vídeo",
      description: "Captamos momentos e criamos histórias visuais que emocionam e inspiram"
    },
    {
      icon: Camera,
      title: "Fotografia",
      description: "Imagens que capturam a essência e energia de cada momento especial"
    },
    {
      icon: Music,
      title: "Design de Capas",
      description: "Arte visual para álbuns musicais que reflete a identidade sonora"
    },
    {
      icon: Palette,
      title: "Branding Visual",
      description: "Identidade visual completa para marcas que querem se destacar"
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A Criar Experiências que marcam
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card-glass p-8 rounded-2xl hover-lift space-y-4 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors glow">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
