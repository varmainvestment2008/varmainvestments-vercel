import { Separator } from "@/components/ui/separator";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import type { Content } from "@shared/schema";

export default function Footer() {
  const { data: content } = useQuery<Content>({
    queryKey: ["/api/content"],
  });

  if (!content) return null;

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-ring" />
              <h3 className="text-xl font-bold">{content.footer.companyName}</h3>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              {content.footer.tagline}
            </p>
            <p className="text-sm text-primary-foreground/60">
              {content.footer.registration}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#services" className="hover-elevate inline-block transition-colors" data-testid="link-services">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#consultation" className="hover-elevate inline-block transition-colors" data-testid="link-consultation">
                  Free Consultation
                </a>
              </li>
              <li>
                <a href="#" className="hover-elevate inline-block transition-colors" data-testid="link-about">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover-elevate inline-block transition-colors" data-testid="link-contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-3 text-primary-foreground/80 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-ring" />
                <span>{content.contact.address.line1}, {content.contact.address.line2}, {content.contact.address.line3}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0 text-ring" />
                <span>{content.contact.phone.primary}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0 text-ring" />
                <span>{content.contact.email.primary}</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>{content.footer.copyright}</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover-elevate transition-colors" data-testid="link-privacy">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover-elevate transition-colors" data-testid="link-terms">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="hover-elevate transition-colors" data-testid="link-disclaimer">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
