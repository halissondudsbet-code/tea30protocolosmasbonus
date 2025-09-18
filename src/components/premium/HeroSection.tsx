import { Button } from "@/components/ui/button";
import { CheckCircle, Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import booksImage from "@/assets/books-image.png";
import inesPhoto from "@/assets/ines-medeiros.jpg";
import patyPhoto from "@/assets/paty.jpg";
import neidePhoto from "@/assets/neide-venancio.jpg";
import claudiaPhoto from "@/assets/claudia.jpg";
import ritaPhoto from "@/assets/rita.jpg";
const HeroSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const heroAvatars = [inesPhoto, patyPhoto, neidePhoto, claudiaPhoto, ritaPhoto];
  return <section className="relative min-h-screen bg-hero-blue overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-accent/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-primary-light/20 rounded-full animate-float" style={{
      animationDelay: "2s"
    }} />
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-warning/20 rounded-full animate-float" style={{
      animationDelay: "4s"
    }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm border border-white/20 max-w-full whitespace-nowrap overflow-hidden text-ellipsis">
              <Star className="w-4 h-4 text-accent fill-accent" />
              Baseado em Evidências Científicas
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight break-words">
              27 Protocolos Fonoaudiológicos
              <span className="block text-white mt-2">TEA Infantil + Bônus</span>
            </h1>

            {/* Books Image */}
            <div className="flex justify-center sm:justify-start">
              <img src={booksImage} alt="Coleção de 27 protocolos fonoaudiológicos para TEA infantil + bônus" className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-contain hover-lift animate-fade-in-up" style={{
              animationDelay: "0.5s"
            }} loading="eager" />
            </div>

            {/* Subheadline */}
            <p className="text-lg text-white/90 leading-relaxed">
              Materiais completos, organizados por nível de comunicação, 
              do pré-linguístico à pragmática infantil.
            </p>

            {/* Highlight Text */}
            <div className="bg-white/10 border-l-4 border-white px-4 py-3 rounded-r backdrop-blur-sm">
              <p className="text-white font-semibold">
                Protocolos estruturados, passo a passo, baseados em evidências científicas.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-2">
              {["Mais segurança e clareza nas suas sessões", "Acelere a evolução dos seus pacientes", "Protocolos prontos para aplicar na clínica"].map((benefit, index) => <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>)}
            </div>

            {/* CTA Section */}
            <div className="space-y-4 pt-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" onClick={scrollToPricing} className="group whitespace-normal text-center sm:whitespace-nowrap font-extrabold text-white bg-gray-950 hover:bg-gray-800 rounded-none">
                  QUERO APLICAR AGORA
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                
              </div>
              
              {/* Price */}
              <div className="flex items-center gap-3">
                
                
                
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {heroAvatars.map((src, idx) => <img key={idx} src={src} alt={`Profissional ${idx + 1} aplicando protocolos`} className="w-8 h-8 rounded-full ring-2 ring-white object-cover" loading="lazy" />)}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-warning fill-warning" />)}
                </div>
                <p className="text-sm text-white/80">
                  <strong>500+</strong> profissionais já aplicam
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:ml-8 max-w-full overflow-hidden">
            <div className="relative">
              <img src={heroImage} alt="Profissional aplicando protocolos fonoaudiológicos com criança autista" className="w-full h-auto rounded-3xl shadow-premium hover-lift" />
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -left-4 glass rounded-2xl p-4 animate-float px-[22px] py-[23px]">
                <div className="text-2xl font-bold text-primary py-px px-[4px]">27</div>
                <div className="text-sm text-muted-foreground">Protocolos</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 animate-float" style={{
              animationDelay: "1s"
            }}>
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Profissionais</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default HeroSection;