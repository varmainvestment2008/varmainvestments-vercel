import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Content } from "@shared/schema";

export default function Contact() {
  const { data: content } = useQuery<Content>({
    queryKey: ["/api/content"],
  });

  if (!content) return null;

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        content.contact.address.line1,
        content.contact.address.line2,
        content.contact.address.line3,
      ],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        content.contact.phone.primary,
        content.contact.phone.hours,
      ],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        content.contact.email.primary,
        content.contact.email.note,
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: content.contact.businessHours,
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-contact-title">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Visit our office in Rahata or reach out to us through any of these channels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <Card key={index} className="p-6" data-testid={`card-contact-${index}`}>
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <info.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-3" data-testid={`text-contact-title-${index}`}>
                {info.title}
              </h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                {info.details.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
