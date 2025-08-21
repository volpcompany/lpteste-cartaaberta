import { CheckCircle } from "lucide-react";

const ProgramContent = () => {
  const topics = [
    {
      title: "Déficit da Previdência",
      description: "A realidade dos números e por que você precisa de uma estratégia alternativa"
    },
    {
      title: "O que é Consórcio e Por que Usá-lo",
      description: "Desmistificando o consórcio como ferramenta de investimento"
    },
    {
      title: "Tripé do Futuro",
      description: "Os 3 pilares fundamentais para sua independência financeira"
    },
    {
      title: "Alavancagem Financeira",
      description: "Como multiplicar seus recursos de forma inteligente e segura"
    },
    {
      title: "Alavancagem Patrimonial",
      description: "Estratégias para construir um patrimônio sólido e duradouro"
    },
    {
      title: "Alavancagem de Investimentos",
      description: "Técnicas avançadas para otimizar seus rendimentos"
    },
    {
      title: "Casos Reais",
      description: "Histórias de sucesso de clientes que transformaram suas vidas"
    },
    {
      title: "Ferramentas Exclusivas",
      description: "Acesso a recursos únicos para acelerar seus resultados"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-graham-black">
              Conteúdo Programático
            </h2>
            <p className="text-xl text-graham-gray">
              Um roteiro completo para sua transformação financeira
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {topics.map((topic, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 rounded-lg border border-border hover:shadow-elegant transition-all duration-300 group"
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-graham-black group-hover:text-primary transition-colors duration-300">
                    {topic.title}
                  </h3>
                  <p className="text-graham-gray">
                    {topic.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramContent;