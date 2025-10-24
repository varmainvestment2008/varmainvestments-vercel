import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Content } from "@shared/schema";
import heroImage from "@assets/generated_images/Financial_investment_hero_background_8a7433eb.png";

const iconMap = {
  "shield": Shield,
  "trending-up": TrendingUp,
  "users": Users,
};

export default function Hero() {
  const { data: content } = useQuery<Content>({
    queryKey: ["/api/content"],
  });

  const openWhatsAppChat = () => {
    window.open("https://wa.me/919403034505", "_blank");
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!content) return null;

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6" data-testid="text-hero-title">
            {content.hero.title}
          </h1>
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-4 font-medium">
            {content.hero.subtitle}
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8">
            {content.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground text-base font-semibold"
              onClick={openWhatsAppChat}
              data-testid="button-free-consultation"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent text-primary-foreground border-primary-foreground/30 backdrop-blur-sm text-base"
              onClick={scrollToServices}
              data-testid="button-learn-services"
            >
              Learn About Our Services
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
            {content.hero.trustIndicators.map((indicator, index) => {
              const IconComponent = iconMap[indicator.icon as keyof typeof iconMap] || Shield;
              return (
                <div key={index} className="flex items-center gap-3 text-primary-foreground" data-testid={`trust-indicator-${index}`}>
                  <IconComponent className="h-6 w-6 text-ring" />
                  <span className="text-sm font-medium">{indicator.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
