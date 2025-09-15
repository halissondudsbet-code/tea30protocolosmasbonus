import HeroSection from "@/components/premium/HeroSection";
import ProblemSection from "@/components/premium/ProblemSection";
import SolutionSection from "@/components/premium/SolutionSection";
import ReceiveSection from "@/components/premium/ReceiveSection";
import BonusSection from "@/components/premium/BonusSection";
import TestimonialSection from "@/components/premium/TestimonialSection";
import WhatsAppTestimonialSection from "@/components/premium/WhatsAppTestimonialSection";
import PricingSection from "@/components/premium/PricingSection";
import FAQSection from "@/components/premium/FAQSection";
import ScrollToTop from "@/components/premium/ScrollToTop";
import WelcomeBonusPopup from "@/components/premium/WelcomeBonusPopup";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ReceiveSection />
      <BonusSection />
      <TestimonialSection />
      <WhatsAppTestimonialSection />
      <PricingSection />
      <FAQSection />
      <ScrollToTop />
      <WelcomeBonusPopup />
    </main>
  );
};

export default Index;
