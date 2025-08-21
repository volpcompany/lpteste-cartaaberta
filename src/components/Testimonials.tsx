import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empresária",
      content: "Graças às estratégias do Paulo, consegui triplicar meu patrimônio em 3 anos. O consórcio se tornou minha principal ferramenta de investimento.",
      rating: 5,
      result: "300% de crescimento patrimonial"
    },
    {
      name: "Carlos Eduardo",
      role: "Engenheiro",
      content: "Estava perdido com minha aposentadoria. Hoje tenho um plano sólido e já vejo os resultados. É impressionante como o método funciona.",
      rating: 5,
      result: "Aposentadoria garantida aos 55 anos"
    },
    {
      name: "Ana Costa",
      role: "Médica",
      content: "O evento mudou completamente minha visão sobre investimentos. Agora tenho clareza e estratégia para construir meu futuro financeiro.",
      rating: 5,
      result: "Portfolio diversificado e rentável"
    },
    {
      name: "Roberto Santos",
      role: "Comerciante",
      content: "Nunca pensei que o consórcio poderia ser usado dessa forma. Em 2 anos já consegui adquirir 3 imóveis para renda passiva.",
      rating: 5,
      result: "R$ 15 mil/mês de renda passiva"
    }
  ];

  return (
    <section className="py-20 bg-graham-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-graham-black">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-xl text-graham-gray">
              Histórias reais de transformação financeira
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg text-graham-black mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-graham-black">
                        {testimonial.name}
                      </h4>
                      <p className="text-graham-gray text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-primary font-semibold text-sm">
                        Resultado:
                      </div>
                      <div className="text-graham-black font-medium text-sm">
                        {testimonial.result}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;