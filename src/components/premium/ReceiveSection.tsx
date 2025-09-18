import { FileText, Target, TrendingUp, CheckCircle, BookOpen, Users, Lightbulb, Trophy } from "lucide-react";
const ReceiveSection = () => {
  const protocolParts = [{
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: "PARTE I - AVALIAÇÃO",
    description: "Protocolos estruturados para avaliação completa do perfil comunicativo da criança",
    items: ["Avaliação do perfil funcional da comunicação", "Identificação do nível de desenvolvimento", "Instrumentos de coleta de dados objetivos"]
  }, {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "PARTE II - PROTOCOLOS TERAPÊUTICOS",
    description: "27 protocolos organizados por níveis de complexidade comunicativa",
    items: ["Nível Pré-Linguístico (9 protocolos)", "Nível de Primeiras Palavras (9 protocolos)", "Nível de Pragmática Infantil (9 protocolos)"]
  }, {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "PARTE III - GENERALIZAÇÃO",
    description: "Estratégias para consolidar e expandir os ganhos comunicativos",
    items: ["Técnicas de generalização para contextos naturais", "Orientações para familiares e cuidadores", "Protocolos de manutenção dos resultados"]
  }];
  const pillars = [{
    icon: <BookOpen className="w-6 h-6 text-accent" />,
    title: "Baseado em Evidências",
    description: "Protocolos fundamentados em pesquisas científicas atuais"
  }, {
    icon: <Users className="w-6 h-6 text-accent" />,
    title: "Organização Clara",
    description: "Material estruturado de forma didática e prática"
  }, {
    icon: <Lightbulb className="w-6 h-6 text-accent" />,
    title: "Aplicação Imediata",
    description: "Pronto para usar nas suas sessões terapêuticas"
  }, {
    icon: <Trophy className="w-6 h-6 text-accent" />,
    title: "Resultados Garantidos",
    description: "Metodologia testada por mais de 500 profissionais"
  }];
  return <section className="bg-background py-0">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display text-foreground mb-6">
            Veja tudo o que <span className="text-gradient">Você vai Receber</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            27 Protocolos Fonoaudiológicos TEA Infantil + Bônus organizados em 3 partes fundamentais
          </p>
        </div>

        {/* Protocol Parts */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {protocolParts.map((part, index) => <div key={index} className="bg-card rounded-2xl p-8 shadow-lg hover-lift border border-border/50 text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {part.icon}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {part.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {part.description}
              </p>
              
              <div className="space-y-3">
                {part.items.map((item, itemIndex) => <div key={itemIndex} className="flex items-start gap-3 text-left">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>)}
              </div>
            </div>)}
        </div>

        {/* Four Pillars */}
        <div className="bg-gradient-surface rounded-3xl p-12 py-0">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              4 Pilares que Garantem o Sucesso
            </h3>
            <p className="text-muted-foreground">
              O que torna nossos protocolos únicos e eficazes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => <div key={index} className="text-center group">
                <div className="bg-accent/10 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                
                <h4 className="font-bold text-foreground mb-3">
                  {pillar.title}
                </h4>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ReceiveSection;