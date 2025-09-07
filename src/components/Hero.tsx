import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-garden.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Rock Garden - Grădină premium pentru evenimente" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in leading-tight">
          Rock Garden
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-slide-up font-light leading-relaxed">
          Evenimente memorabile în mijlocul naturii
        </p>
        <p className="text-lg md:text-xl mb-12 animate-slide-up opacity-90 max-w-2xl mx-auto leading-relaxed">
          Descoperă locația perfectă pentru nunți, botezuri, aniversări și evenimente corporate 
          în mijlocul unei grădini de vis, decorată cu atenție la fiecare detaliu.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-zoom-in">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-premium px-8 py-6 text-lg font-semibold group"
          >
            Rezervă acum
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg font-semibold"
          >
            Vezi galeria
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;