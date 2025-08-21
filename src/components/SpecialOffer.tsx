import { Button } from "@/components/ui/button";
import { Gift, BookOpen, Calculator, HeadphonesIcon, GraduationCap, Package } from "lucide-react";

const SpecialOffer = () => {
  const bonuses = [
    {
      icon: BookOpen,
      title: "E-book Exclusivo",
      description: "\"Guia Definitivo do Consórcio Inteligente\" (Valor: R$ 297)"
    },
    {
      icon: Calculator,
      title: "Planilha de Cálculos",
      description: "Ferramenta para simular seus investimentos (Valor: R$ 197)"
    },
    {
      icon: HeadphonesIcon,
      title: "Consultoria Gratuita",
      description: "1 hora de mentoria personalizada (Valor: R$ 500)"
    },
    {
      icon: GraduationCap,
      title: "Curso Fortune Journey",
      description: "Acesso completo ao curso online (Valor: R$ 997)"
    },
    {
      icon: Package,
      title: "Kit de Boas-vindas",
      description: "Materiais exclusivos e surpresas especiais"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-graham-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Gift className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">OFERTA ESPECIAL PARA PARTICIPANTES</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Bônus Exclusivos
            </h2>
            
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Participantes da Imersão Carta Aberta terão acesso a ferramentas 
              inéditas e bônus exclusivos que vão acelerar seus resultados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {bonuses.map((bonus, index) => {
              const Icon = bonus.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {bonus.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {bonus.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 mb-8">
            <div className="text-center">
              <div className="text-sm text-white/60 mb-2">Valor Total dos Bônus:</div>
              <div className="text-3xl font-bold line-through text-white/60 mb-2">R$ 1.991</div>
              <div className="text-4xl font-bold text-white mb-4">GRATUITO</div>
              <div className="text-lg text-white/90">para participantes do evento</div>
            </div>
          </div>

          <Button variant="hero" size="lg" className="text-xl px-12 py-6">
            🎁 Quero os Bônus Exclusivos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;