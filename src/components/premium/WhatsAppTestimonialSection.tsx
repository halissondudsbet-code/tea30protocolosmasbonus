import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import whatsappScreenshot1 from "@/assets/whatsapp-screenshot-1.jpg";
import whatsappScreenshot2 from "@/assets/whatsapp-screenshot-2.jpg";
import whatsappScreenshot3 from "@/assets/whatsapp-screenshot-3.jpg";
import whatsappScreenshot4 from "@/assets/whatsapp-screenshot-4.jpg";
const WhatsAppTestimonialSection = () => {
  const screenshots = [{
    id: 1,
    image: whatsappScreenshot1,
    alt: "Conversa real no WhatsApp - Depoimento de cliente satisfeita"
  }, {
    id: 2,
    image: whatsappScreenshot2,
    alt: "Feedback geral de clientes no WhatsApp"
  }, {
    id: 3,
    image: whatsappScreenshot3,
    alt: "Mais feedbacks positivos de clientes"
  }, {
    id: 4,
    image: whatsappScreenshot4,
    alt: "Depoimento real de cliente no WhatsApp"
  }];
  return <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">📱 Conversas de nosso grupo no Whatsapp</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Veja o que nossos clientes estão falando
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Conversas no WhatsApp com profissionais que já transformaram suas práticas com nosso método</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {screenshots.map((screenshot, index) => <Card key={screenshot.id} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-lg">
                  <img src={screenshot.image} alt={screenshot.alt} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            ✅ <span className="font-semibold">Conversas 100% autênticas</span> • 
            📱 <span className="font-semibold">Clientes Satisfeitos</span> • 
            🎯 <span className="font-semibold">Resultados comprovados</span>
          </p>
        </div>
      </div>
    </section>;
};
export default WhatsAppTestimonialSection;