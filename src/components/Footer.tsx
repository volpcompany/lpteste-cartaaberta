import { Calendar, MapPin, Clock, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Event Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-graham-black">
              Informações do Evento
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-graham-gray">02 de Outubro de 2024</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-graham-gray">19h00 às 22h00</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-graham-gray">Universidade de Passo Fundo (UPF)</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-graham-black">
              Contato
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-graham-gray">contato@graham.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-graham-gray">(54) 9999-9999</span>
              </div>
            </div>
          </div>

          {/* Organization */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-graham-black">
              Realização
            </h3>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                GRAHAM
              </div>
              <div className="text-sm text-graham-gray font-medium">
                INVESTIMENTOS
              </div>
            </div>
            <p className="text-graham-gray text-sm">
              Parceria com XP Investimentos para levar educação financeira 
              de qualidade para todo o Brasil.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-graham-gray text-sm mb-4 md:mb-0">
            © 2024 Graham Investimentos. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-graham-gray hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-graham-gray hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;