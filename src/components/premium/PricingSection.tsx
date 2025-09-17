import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Gift, Shield, ArrowRight, Zap } from "lucide-react";
const PricingSection = () => {
  const bonuses = [{
    title: "Checklist de Progresso PECS (1-6)",
    originalPrice: "R$ 19,90",
    description: "Acompanhe o progresso em cada fase do PECS com clareza total"
  }, {
    title: "Fichas Clínicas de Aplicação",
    originalPrice: "R$ 19,90",
    description: "PDFs preenchíveis para registrar e acompanhar a evolução"
  }, {
    title: "10 Roteiros de Sessões Prontas",
    originalPrice: "R$ 29,90",
    description: "Planos completos combinando protocolos e materiais visuais"
  }, {
    title: "Kit com Cartões Visuais",
    originalPrice: "R$ 37,00",
    description: "Acervo completo de imagens por categorias essenciais"
  }];
  const guarantees = ["7 dias de garantia incondicional", "Acesso vitalício ao material", "Formato 100% digital em PDF", "Download imediato após compra"];
  return <section id="pricing" className="bg-background relative overflow-hidden py-0">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-display text-foreground mb-6">
            <span className="text-gradient">Oferta Limitada</span> - Apenas Hoje
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aproveite o desconto especial e receba 4 bônus exclusivos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Offer Card */}
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white shadow-premium mb-8 relative overflow-hidden">
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-warning text-warning-foreground font-bold text-lg rotate-12 shadow-lg rounded-full px-[10px] py-[23px] mx-[10px]">
              73% OFF
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    30 Protocolos Fonoaudiológicos TEA Infantil
                  </h3>
                  <p className="text-primary-foreground/90 text-lg">
                    Material completo + 4 bônus exclusivos
                  </p>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl line-through text-primary-foreground/60">De R$ 203,60</span>
                    <span className="bg-warning text-warning-foreground px-3 py-1 rounded-full text-sm font-bold">
                      ÚLTIMO DIA
                    </span>
                  </div>
                  <div className="text-5xl font-bold">R$ 37,90</div>
                  <div className="text-primary-foreground/80">
                    ou 8x de <strong>R$ 4,62</strong> sem juros
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-4">
                  <a href="https://pay.sunize.com.br/TbYUEHHz" target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="accent" size="xl" className="w-full text-lg animate-pulse-slow group whitespace-normal text-center leading-snug mx-0 px-[27px] py-0 my-[7px]">
                      <Zap className="w-5 h-5 mr-2" />
                      SIM! QUERO APLICAR AGORA
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/80">
                    <Clock className="w-4 h-4" />
                    Acesso imediato após confirmação do pagamento
                  </div>
                </div>
              </div>

              {/* Right Side - What's Included */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold mb-4">✨ Você recebe TUDO isso:</h4>
                
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-accent-light" />
                    <span className="font-semibold">30 Protocolos Fonoaudiológicos</span>
                    <span className="text-sm bg-white/20 px-2 py-1 rounded">R$ 97,00</span>
                  </div>
                  
                  {bonuses.map((bonus, index) => <div key={index} className="flex items-center gap-3 mb-3">
                      <Gift className="w-5 h-5 text-warning" />
                      <span className="font-medium">{bonus.title}</span>
                      <span className="text-sm bg-white/20 px-2 py-1 rounded">{bonus.originalPrice}</span>
                    </div>)}
                  
                  <div className="border-t border-white/20 pt-3 mt-3">
                    <div className="flex justify-between items-center font-bold">
                      <span>Valor Total:</span>
                      <span className="text-2xl">R$ 203,60</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
            <div className="text-center mb-6">
              <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Garantia Incondicional de 7 Dias
              </h3>
              <p className="text-muted-foreground">
                Teste o material por 7 dias. Se não ficar satisfeito, devolvemos 100% do seu investimento.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {guarantees.map((guarantee, index) => <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">{guarantee}</span>
                </div>)}
            </div>
          </div>

          {/* Urgency Message */}
          <div className="text-center mt-8 p-6 bg-warning/10 rounded-2xl border border-warning/20">
            <Clock className="w-6 h-6 text-warning mx-auto mb-2" />
            <p className="text-warning font-semibold">
              ⚠️ Esta oferta expira em algumas horas. Não perca esta oportunidade única!
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default PricingSection;
