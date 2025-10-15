const About = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-overlay" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold">
            A Tua Visão{" "}
            <span className="text-gradient">Ganha Vida</span>{" "}
            Connosco
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Na <span className="font-bold text-primary">Leave Your Mark</span>, acreditamos que não basta existir, 
            é necessário deixar uma marca. Cada projeto é uma oportunidade para criar algo único, 
            com identidade e propósito.
          </p>

          <div className="grid md:grid-cols-3 gap-8 pt-12">
            {[
              {
                title: "Criatividade",
                description: "Transformamos ideias em experiências únicas e memoráveis"
              },
              {
                title: "Identidade",
                description: "Cada projeto reflete a essência e propósito da tua marca"
              },
              {
                title: "Impacto",
                description: "Criamos trabalhos que deixam uma marca duradoura"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="card-glass p-8 rounded-2xl hover-lift space-y-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-gradient">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
