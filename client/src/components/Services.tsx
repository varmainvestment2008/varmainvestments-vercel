import { Card } from "@/components/ui/card";
import { TrendingUp, PieChart, Shield } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Content } from "@shared/schema";

const iconMap = {
  "trending-up": TrendingUp,
  "pie-chart": PieChart,
  "shield": Shield,
};

export default function Services() {
  const { data: content } = useQuery<Content>({
    queryKey: ["/api/content"],
  });

  if (!content) return null;

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
            Our Investment Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive investment solutions tailored to your financial goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {content.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || TrendingUp;
            return (
              <Card 
                key={index} 
                className="p-8 hover-elevate transition-all duration-300"
                data-testid={`card-service-${index}`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-ring" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
