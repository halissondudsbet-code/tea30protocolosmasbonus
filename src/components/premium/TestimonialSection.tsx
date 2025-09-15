import { Star, Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import inesPhoto from "@/assets/ines-medeiros.jpg";
import patyPhoto from "@/assets/paty.jpg";
import neidePhoto from "@/assets/neide-venancio.jpg";
import claudiaPhoto from "@/assets/claudia.jpg";
import gislenePhoto from "@/assets/gislene.jpg";
import ritaPhoto from "@/assets/rita.jpg";
const TestimonialSection = () => {
  const testimonials = [{
    name: "Inês Medeiros",
    role: "Fonoaudióloga",
    avatar: "I",
    photo: inesPhoto,
    rating: 5,
    text: "Excelente material! Muito bem estruturado e de fácil compreensão. Os protocolos são claros e objetivos, facilitando muito o trabalho clínico. Recomendo!"
  }, {
    name: "Paty",
    role: "Terapeuta",
    avatar: "P",
    photo: patyPhoto,
    rating: 5,
    text: "Material fantástico! Super bem organizado e prático. Consegui aplicar imediatamente com meus pacientes e os resultados são visíveis. Vale muito a pena!"
  }, {
    name: "Neide Venancio",
    role: "Fonoaudióloga",
    avatar: "N",
    photo: neidePhoto,
    rating: 5,
    text: "Protocolos muito bem elaborados! A organização por níveis facilita demais a aplicação clínica. Material de excelente qualidade e muito prático."
  }, {
    name: "Claudia",
    role: "Psicopedagoga",
    avatar: "C",
    photo: claudiaPhoto,
    rating: 5,
    text: "Simplesmente perfeito! Os protocolos são detalhados e fáceis de seguir. Transformou completamente minha forma de trabalhar com TEA. Super recomendo!"
  }, {
    name: "Gislene",
    role: "Terapeuta Ocupacional",
    avatar: "G",
    photo: gislenePhoto,
    rating: 5,
    text: "Material incrível! Muito bem estruturado e fundamentado. Os protocolos são práticos e eficazes. Investimento que vale cada centavo!"
  }, {
    name: "Rita",
    role: "Fonoaudióloga",
    avatar: "R",
    photo: ritaPhoto,
    rating: 5,
    text: "Excelente trabalho! Os protocolos são muito bem organizados e de fácil aplicação. Material essencial para quem trabalha com TEA."
  }];
  return <section className="bg-gradient-surface my-0 px-0 py-[20px]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display text-foreground mb-6">
            O que dizem os <span className="text-gradient">Profissionais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 500 profissionais já transformaram sua prática clínica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-card rounded-2xl p-6 shadow-lg hover-lift border border-border/50 relative group">
              {/* WhatsApp Badge */}
              <div className="absolute top-4 right-4 bg-green-500/10 text-green-600 px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                WhatsApp
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-warning fill-warning" />)}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10 hover-scale">
                  <AvatarImage 
                    src={testimonial.photo} 
                    alt={`Foto de ${testimonial.name}`}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-primary/10 text-primary font-bold text-sm">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>)}
        </div>

        {/* Social Proof Stats */}
        <div className="text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 bg-card rounded-2xl p-6 shadow-lg max-w-full">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Profissionais</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">4.9</div>
              <div className="text-sm text-muted-foreground">Avaliação</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning mb-2">92%</div>
              <div className="text-sm text-muted-foreground">Recomendam</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialSection;