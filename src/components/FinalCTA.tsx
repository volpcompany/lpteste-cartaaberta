import { Button } from "@/components/ui/button";
import { Clock, Users, AlertTriangle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-graham-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Não Perca Esta
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Oportunidade Única
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
            Garante sua vaga agora mesmo. Vagas limitadas para manter 
            a exclusividade e qualidade do networking.
          </p>

          {/* Urgency Indicators */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Users className="w-8 h-8 mx-auto mb-3 text-white" />
              <div className="text-lg font-semibold mb-1">Apenas 50 Vagas</div>
              <div className="text-white/70">Networking exclusivo</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Clock className="w-8 h-8 mx-auto mb-3 text-white" />
              <div className="text-lg font-semibold mb-1">02 de Outubro</div>
              <div className="text-white/70">19h na UPF</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <AlertTriangle className="w-8 h-8 mx-auto mb-3 text-white" />
              <div className="text-lg font-semibold mb-1">Últimas Vagas</div>
              <div className="text-white/70">Não fique de fora</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-8">
            <Button variant="hero" size="lg" className="text-xl px-12 py-6 animate-pulse">
              🚀 Garantir Minha Vaga Agora
            </Button>
          </div>

          {/* Security Information */}
          <div className="text-center text-white/70">
            <div className="text-sm mb-2">✅ Evento 100% gratuito</div>
            <div className="text-sm mb-2">✅ Certificado de participação</div>
            <div className="text-sm">✅ Networking com investidores experientes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;