import { Heart, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/rock-garden-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Acasă", href: "#home" },
    { label: "Despre noi", href: "#about" },
    { label: "Servicii", href: "#services" },
    { label: "Galerie", href: "#gallery" },
    { label: "Testimoniale", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Nunți în aer liber",
    "Botezuri elegante", 
    "Aniversări speciale",
    "Evenimente corporate",
    "Ședințe foto",
    "Pachete personalizate"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Rock Garden" className="h-16 w-auto brightness-0 invert" />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Rock Garden este locația perfectă pentru evenimente memorabile în mijlocul naturii. 
              Creăm experiențe de neuitat pentru cele mai importante momente din viața ta.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://facebook.com/rockgarden" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground p-3 rounded-full transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://instagram.com/rockgarden" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground p-3 rounded-full transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Navigare rapidă</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Serviciile noastre</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-primary-foreground/80 py-1 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <span>© {currentYear} Rock Garden.</span>
              <span>Creat cu</span>
              <Heart className="h-4 w-4 text-accent fill-accent" />
              <span>pentru experiențe de neuitat</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-primary-foreground/80">
              <a href="/termeni" className="hover:text-accent transition-colors duration-300">
                Termeni și condiții
              </a>
              <a href="/privacy" className="hover:text-accent transition-colors duration-300">
                Politica de confidențialitate
              </a>
              <a href="/gdpr" className="hover:text-accent transition-colors duration-300">
                GDPR
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="mt-6 pt-6 border-t border-primary-foreground/20 text-center md:text-left">
            <div className="flex flex-col md:flex-row gap-4 text-sm text-primary-foreground/80">
              <span>📍 Strada Grădinilor, nr. 15, Sector 2, București</span>
              <span>📞 <a href="tel:+40123456789" className="hover:text-accent transition-colors">+40 123 456 789</a></span>
              <span>✉️ <a href="mailto:contact@rockgarden.ro" className="hover:text-accent transition-colors">contact@rockgarden.ro</a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;