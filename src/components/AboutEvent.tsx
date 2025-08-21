import { Shield, TrendingUp, Users, Target } from "lucide-react";

const AboutEvent = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Segurança Financeira",
      description: "Estratégias comprovadas para construir um futuro sólido"
    },
    {
      icon: TrendingUp,
      title: "Alavancagem Patrimonial",
      description: "Maximize seus investimentos com inteligência"
    },
    {
      icon: Users,
      title: "Networking Exclusivo",
      description: "Conecte-se com investidores de alto nível"
    },
    {
      icon: Target,
      title: "Resultados Práticos",
      description: "Ferramentas e estratégias que você pode aplicar imediatamente"
    }
  ];

  return (
    <section className="py-20 bg-graham-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-graham-black">
            Sobre o Evento
          </h2>
          <p className="text-xl text-graham-gray leading-relaxed">
            Descubra como usar o consórcio como ferramenta de alavancagem patrimonial, 
            geração de renda e aposentadoria sólida. Uma oportunidade única de aprender 
            com quem já transformou a vida de milhares de pessoas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-graham-black">
                  {benefit.title}
                </h3>
                <p className="text-graham-gray">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutEvent;