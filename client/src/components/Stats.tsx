import { useQuery } from "@tanstack/react-query";
import type { Content } from "@shared/schema";

export default function Stats() {
  const { data: content } = useQuery<Content>({
    queryKey: ["/api/content"],
  });

  if (!content) return null;

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {content.stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-item-${index}`}>
              <div className="text-4xl lg:text-5xl font-bold text-ring mb-2" data-testid={`text-stat-number-${index}`}>
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-1" data-testid={`text-stat-label-${index}`}>
                {stat.label}
              </div>
              <div className="text-sm text-primary-foreground/70">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
