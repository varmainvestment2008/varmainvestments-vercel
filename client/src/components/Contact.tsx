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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

        <Card className="overflow-hidden" data-testid="card-map">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.9863422967887!2d74.4777!3d19.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQzJzAwLjEiTiA3NMKwMjgnMzkuNyJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Varma Investments Location - Rahata"
              data-testid="iframe-map"
            />
          </div>
          <div className="p-6 bg-card">
            <h3 className="font-semibold text-foreground mb-2" data-testid="text-map-title">
              Our Location
            </h3>
            <p className="text-sm text-muted-foreground">
              {content.contact.address.line1}, {content.contact.address.line2}, {content.contact.address.line3}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
