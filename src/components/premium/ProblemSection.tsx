import { AlertTriangle, Clock, Target, TrendingDown } from "lucide-react";
const ProblemSection = () => {
  const problems = [{
    icon: <Clock className="w-8 h-8 text-destructive" />,
    title: "Tempo Perdido",
    description: "Horas criando protocolos do zero para cada paciente"
  }, {
    icon: <AlertTriangle className="w-8 h-8 text-warning" />,
    title: "Falta de Estrutura",
    description: "Sessões sem direcionamento claro e objetivos específicos"
  }, {
    icon: <TrendingDown className="w-8 h-8 text-destructive" />,
    title: "Resultados Lentos",
    description: "Evolução limitada sem protocolos baseados em evidências"
  }, {
    icon: <Target className="w-8 h-8 text-warning" />,
    title: "Insegurança Profissional",
    description: "Dúvidas sobre qual abordagem usar em cada caso"
  }];
  return <section className="bg-gradient-surface py-[94px]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display text-foreground mb-6">
            Você está enfrentando esses <span className="text-destructive">desafios</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A maioria dos profissionais de fonoaudiologia no TEA infantil enfrentam os mesmos obstáculos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => <div key={index} className="bg-card rounded-2xl p-6 shadow-lg hover-lift border border-border/50 text-center space-y-4">
              <div className="flex justify-center">{problem.icon}</div>
              <h3 className="text-xl font-semibold text-foreground">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>)}
        </div>

        {/* Pain Point Stats */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-2xl font-bold text-destructive">78% dos profissionais</p>
          <p className="text-lg text-muted-foreground">
            relatam sentir insegurança ao atender crianças com TEA por falta de protocolos estruturados
          </p>
        </div>
      </div>
    </section>;
};
export default ProblemSection;