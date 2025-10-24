import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2, Clock, UserCheck } from "lucide-react";

export default function ConsultationForm() {
  const openWhatsAppChat = () => {
    window.open("https://wa.me/919403034505", "_blank");
  };

  return (
    <section id="consultation" className="py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-consultation-title">
            Schedule Your Free Consultation
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Get expert investment advice tailored to your financial goals. No obligation, no hidden fees.
          </p>
          <Button 
            size="lg" 
            onClick={openWhatsAppChat}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base font-semibold"
            data-testid="button-whatsapp-consultation"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Chat with us on WhatsApp
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex items-start gap-3 text-sm">
            <CheckCircle2 className="h-5 w-5 text-ring shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block">No Obligation</span>
              <span className="text-primary-foreground/70">Free consultation with no commitment</span>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <Clock className="h-5 w-5 text-ring shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block">30-Min Session</span>
              <span className="text-primary-foreground/70">Personalized investment guidance</span>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <UserCheck className="h-5 w-5 text-ring shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block">Expert Advisors</span>
              <span className="text-primary-foreground/70">Certified professionals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
