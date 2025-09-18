import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Esse manual serve apenas para fonoaudiólogos ou outros profissionais também podem aplicar?",
      answer: "Não. Apesar de ter sido desenvolvido com base em práticas fonoaudiológicas, o manual foi pensado para ser usado também por terapeutas ocupacionais, psicólogos infantis, psicopedagogos, educadores especiais e professores de apoio. Cada profissional pode aplicar os protocolos e recursos dentro do seu contexto de atendimento, ampliando a comunicação funcional da criança."
    },
    {
      question: "Como eu vou receber esse material?",
      answer: "Todo o material vem em formato digital e de alta qualidade. Assim que você compra, ele fica imediatamente habilitado em seu e-mail para download. Você receberá um link de acesso direto com todos os arquivos organizados."
    },
    {
      question: "O material é só teórico ou traz atividades práticas para aplicar nas sessões?",
      answer: "O manual é 100% prático. Você terá 27 protocolos clínicos estruturados + bônus passo a passo, além de cartões, pranchas de comunicação, fichas e checklists para aplicar em sessão sem precisar criar nada do zero. Cada protocolo vem com instruções detalhadas de aplicação."
    },
    {
      question: "O material é em PDF mesmo? Vou poder imprimir?",
      answer: "Sim! O guia é 100% digital em PDF de alta qualidade. Você terá acesso imediato após a compra e poderá usar no celular, computador ou imprimir para ter em mãos durante as sessões. Os arquivos são otimizados para impressão profissional."
    },
    {
      question: "Existe alguma garantia que o programa funciona?",
      answer: "Você conta com 7 dias de garantia incondicional. Se dentro desse período sentir que o material não atendeu às suas expectativas, basta solicitar o reembolso e seu investimento será devolvido integralmente, sem perguntas."
    },
    {
      question: "Os protocolos são baseados em quais métodos?",
      answer: "Todos os protocolos são baseados em métodos reconhecidos mundialmente e validados cientificamente: VB-MAPP (Verbal Behavior Milestones Assessment and Placement Program), PEAK (Promoting the Emergence of Advanced Knowledge), ABLLS-R (Assessment of Basic Language and Learning Skills-Revised) e M-CHAT-R/F (Modified Checklist for Autism in Toddlers-Revised)."
    },
    {
      question: "Posso usar os protocolos em ambiente escolar?",
      answer: "Absolutamente! Os protocolos foram desenvolvidos para serem aplicados tanto em ambiente clínico quanto escolar. Cada protocolo inclui sugestões específicas para adaptação ao ambiente educacional e orientações para professores e cuidadores."
    },
    {
      question: "O material inclui orientações para os pais?",
      answer: "Sim! Cada protocolo inclui modelos de devolutiva para famílias e orientações específicas para generalização em casa. Você terá templates prontos para orientar os pais sobre como dar continuidade ao trabalho desenvolvido nas sessões."
    }
  ];

  return (
    <section className="py-24 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-display text-foreground mb-6">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire todas as suas dúvidas sobre os protocolos fonoaudiológicos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border/50 px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-foreground font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still have questions? */}
          <div className="text-center mt-12 p-8 bg-card rounded-2xl shadow-lg border border-border/50">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para ajudar você com qualquer questão sobre os protocolos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contato@caminhopuro.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Enviar E-mail
              </a>
              <a 
                href="https://wa.me/5511999999999"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;