import { Gift } from "lucide-react";
import bonusRoteiros from "@/assets/bonus-roteiros-sessoes.png";
import bonusChecklist from "@/assets/bonus-checklist-pecs.png";
import bonusFichas from "@/assets/bonus-fichas-clinicas.png";
import bonusCartoes from "@/assets/bonus-cartoes-visuais.png";

const BonusSection = () => {
  const bonuses = [{
    image: bonusRoteiros,
    title: "BÔNUS 1: 10 Roteiros de Sessões Prontas",
    description: "Roteiros estruturados e prontos para aplicar imediatamente em suas sessões terapêuticas.",
    value: "R$ 97,00",
    highlight: "GRÁTIS"
  }, {
    image: bonusChecklist,
    title: "BÔNUS 2: Checklist de Progresso PECS (1-6)",
    description: "Sistema completo de avaliação do progresso nas 6 fases do PECS para acompanhamento preciso.",
    value: "R$ 67,00",
    highlight: "GRÁTIS"
  }, {
    image: bonusFichas,
    title: "BÔNUS 3: Fichas Clínicas de Aplicação",
    description: "Fichas prontas para registrar e documentar o progresso de cada paciente de forma organizada.",
    value: "R$ 87,00",
    highlight: "GRÁTIS"
  }, {
    image: bonusCartoes,
    title: "BÔNUS 4: Kit com Cartões Visuais",
    description: "Coleção completa de cartões visuais prontos para impressão e uso imediato nas sessões.",
    value: "R$ 197,00",
    highlight: "GRÁTIS"
  }];
  return <section className="bg-gradient-surface py-[33px]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-6 py-3 rounded-full text-sm font-bold backdrop-blur-sm border border-accent/30 mb-6">
            <Gift className="w-5 h-5" />
            OFERTA ESPECIAL
          </div>
          <h2 className="text-display text-foreground mb-6">
            Além disso... Adquirindo hoje você ainda leva 
            <span className="text-gradient block">+4 BÔNUS EXCLUSIVOS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Materiais complementares que vão revolucionar sua prática clínica
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {bonuses.map((bonus, index) => <div key={index} className="bg-card rounded-2xl p-8 shadow-lg hover-lift border border-border/50 relative overflow-hidden group">
              {/* Highlight Badge */}
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                {bonus.highlight}
              </div>

              {/* Content */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden shadow-md">
                  <img 
                    src={bonus.image} 
                    alt={bonus.title}
                    className="w-full h-full object-cover hover-scale"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {bonus.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {bonus.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground line-through">
                      Valor: {bonus.value}
                    </span>
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-bold">
                      INCLUÍDO GRÁTIS
                    </span>
                  </div>
                </div>
              </div>
            </div>)}
        </div>

        {/* Total Value */}
        <div className="text-center">
          <div className="inline-block bg-card rounded-2xl p-8 shadow-lg border border-border/50">
            <div className="text-muted-foreground mb-2">Valor total dos bônus:</div>
            <div className="text-3xl font-bold text-primary mb-2 line-through">R$ 448,00</div>
            <div className="text-xl text-accent font-bold">
              TUDO INCLUSO NO SEU INVESTIMENTO
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BonusSection;