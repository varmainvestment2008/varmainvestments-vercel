import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Content } from "@shared/schema";
import testimonial1 from "@assets/generated_images/Client_testimonial_photo_1_19cb2db6.png";
import testimonial2 from "@assets/generated_images/Client_testimonial_photo_2_fa377f81.png";
import testimonial3 from "@assets/generated_images/Client_testimonial_photo_3_63e50639.png";

const testimonialImages = [testimonial1, testimonial2, testimonial3];

export default function Testimonials() {
  const { data: content } = useQuery<Content>({
    queryKey: ["/api/content"],
  });

  if (!content) return null;

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-testimonials-title">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real success stories from investors who trust us with their financial future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 border-l-4 border-l-ring relative"
              data-testid={`card-testimonial-${index}`}
            >
              <Quote className="h-8 w-8 text-ring/20 absolute top-6 right-6" />
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-16 w-16" data-testid={`avatar-client-${index}`}>
                  <AvatarImage src={testimonialImages[index]} alt={testimonial.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-foreground" data-testid={`text-client-name-${index}`}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{testimonial.investment}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
