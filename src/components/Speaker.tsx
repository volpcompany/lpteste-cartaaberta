import { Award, Users, TrendingUp, Star } from "lucide-react";
import pauloImage from "@/assets/paulo-tenreiro.jpg";

const Speaker = () => {
  const achievements = [
    {
      icon: Award,
      metric: "14 anos",
      description: "de experiência no mercado financeiro"
    },
    {
      icon: Users,
      metric: "+10 mil",
      description: "clientes atendidos e transformados"
    },
    {
      icon: TrendingUp,
      metric: "+1 bilhão",
      description: "em consórcios administrados"
    },
    {
      icon: Star,
      metric: "98%",
      description: "de satisfação dos clientes"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-graham-black to-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Sobre o Palestrante
            </h2>
            <p className="text-xl text-white/80">
              Conheça quem vai transformar sua visão sobre investimentos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo and Basic Info */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-8">
                <img
                  src={pauloImage}
                  alt="Paulo Tenreiro"
                  className="w-80 h-80 rounded-full object-cover shadow-glow border-4 border-white/20"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-elegant">
                  <Award className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-2">
                Paulo Tenreiro
              </h3>
              <p className="text-xl text-white/80 mb-6">
                Especialista em Investimentos e Consórcios
              </p>
              
              <blockquote className="text-lg text-white/90 italic leading-relaxed bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                "Acredito que todos merecem ter acesso a estratégias financeiras que realmente funcionam. 
                Minha missão é democratizar o conhecimento que transforma vidas e constrói patrimônios sólidos."
              </blockquote>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {achievement.metric}
                      </div>
                      <div className="text-white/80">
                        {achievement.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;