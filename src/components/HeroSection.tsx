import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-gradient-hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Exclusive Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="text-sm font-medium">✨ EVENTO EXCLUSIVO - VAGAS LIMITADAS</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            IMERSÃO
            <br />
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              CARTA ABERTA
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
            A estratégia que transforma consórcio em patrimônio e aposentadoria segura.
          </p>
          
          {/* Event Details */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">02 de Outubro</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">19h</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">UPF – Passo Fundo</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              🎯 Quero Garantir Minha Vaga
            </Button>
            <Button variant="outline-white" size="lg" className="text-lg px-8 py-4">
              Saiba Mais
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-white/80">
              <div className="text-center">
                <div className="font-bold text-xl text-white">14 anos</div>
                <div>de experiência</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl text-white">+10 mil</div>
                <div>clientes atendidos</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl text-white">+1 bilhão</div>
                <div>em consórcios</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;