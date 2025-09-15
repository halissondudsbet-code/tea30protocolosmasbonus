import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen, Users, Target, Clock, Award, ArrowRight, Zap } from "lucide-react";
const SolutionSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [{
    icon: <BookOpen className="w-6 h-6" />,
    title: "30 Protocolos Completos",
    description: "Estruturados passo a passo, baseados em evidências científicas"
  }, {
    icon: <Target className="w-6 h-6" />,
    title: "Organizado por Níveis",
    description: "Do pré-linguístico à pragmática infantil, progressão natural"
  }, {
    icon: <Clock className="w-6 h-6" />,
    title: "Aplicação Imediata",
    description: "Protocolos prontos para usar nas suas sessões hoje mesmo"
  }, {
    icon: <Users className="w-6 h-6" />,
    title: "Multiprofissional",
    description: "Para fonoaudiólogos, TOs, psicopedagogos e educadores"
  }, {
    icon: <Award className="w-6 h-6" />,
    title: "Baseado em Evidências",
    description: "VB-MAPP, PEAK, ABLLS-R e M-CHAT-R/F validados cientificamente"
  }, {
    icon: <Zap className="w-6 h-6" />,
    title: "Resultados Acelerados",
    description: "Metodologia comprovada para evolução mais rápida"
  }];
  const benefits = ["Mais segurança e clareza nas suas sessões", "Acelere a evolução dos seus pacientes", "Elimine horas de preparação de material", "Aumente sua credibilidade profissional", "Protocolos adaptáveis para diferentes níveis", "Suporte para generalização em casa e escola"];
  return <section className="bg-background py-[18px]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Solution */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                Solução Profissional
              </div>
              <h2 className="text-display text-foreground">
                A Solução <span className="text-gradient">Definitiva</span> para seus Atendimentos TEA
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Um sistema completo e estruturado que transforma sua prática clínica 
                e acelera os resultados dos seus pacientes.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gradient-surface border border-border/50 hover-lift">
                  <div className="text-primary mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>)}
            </div>

            <Button 
              variant="primary" 
              size="xl" 
              className="w-full sm:w-auto group whitespace-normal text-center leading-snug px-0 my-[15px] py-0 mx-0"
              onClick={scrollToPricing}
            >
              QUERO TRANSFORMAR MEUS ATENDIMENTOS
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right Side - Benefits */}
          <div className="space-y-8">
            <div className="bg-gradient-primary rounded-3xl p-8 text-white shadow-premium">
              <h3 className="text-2xl font-bold mb-6">Benefícios Imediatos:</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-light" />
                    <span className="font-medium">{benefit}</span>
                  </div>)}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Profissionais Usando</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">92%</div>
                <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SolutionSection;