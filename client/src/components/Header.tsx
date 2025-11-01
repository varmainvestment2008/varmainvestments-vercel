import { Link } from "wouter";
import logoImage from "@assets/generated_images/vlogo.png";

export default function Header() {
  return (
    <header className="bg-background border-b sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src={logoImage} 
              alt="Varma Investments Logo" 
              className="h-12 w-12 object-contain"
              data-testid="img-logo"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">Varma Investments</span>
              <span className="text-xs text-muted-foreground">Rahata</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="#services" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              }}
              data-testid="link-services"
            >
              Services
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              data-testid="link-contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
