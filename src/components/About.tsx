import { Card, CardContent } from "@/components/ui/card";
import { Heart, Leaf, Sparkles, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Eleganță",
      description: "Fiecare detaliu este gândit pentru a crea o atmosferă rafinată și memorabilă."
    },
    {
      icon: <Leaf className="h-8 w-8 text-accent" />,
      title: "Naturalețe",
      description: "Îmbinăm frumusețea naturii cu designul modern pentru experiențe autentice."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-accent" />,
      title: "Atenție la detalii",
      description: "Personalizăm fiecare eveniment să reflecte personalitatea și visurile tale."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Experiență completă",
      description: "Oferim servicii complete pentru ca tu să te bucuri pe deplin de momentul tău special."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Povestea Rock Garden
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Rock Garden este mai mult decât o locație pentru evenimente - este un spațiu magic 
              unde visurile prind viață în mijlocul unei grădini de poveste.
            </p>
          </div>

          {/* Story Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                Un refugiu de eleganță în natură
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Conceput ca un oază de liniște și frumusețe, Rock Garden oferă cadrul perfect 
                pentru cele mai importante momente din viață. Grădina noastră premium combină 
                eleganța designului contemporan cu farmecul natural al florii și verzii.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Fiecare colțișor este amenajat cu grijă pentru a crea atmosfera perfectă pentru 
                nunți de vis, botezuri emoționante, aniversări memorabile și evenimente corporate 
                de succes. Pergolele noastre cu lumini decorative, grădinile de flori colorate și 
                spațiile de relaxare creează un decor natural spectaculos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cu o atenție deosebită la detalii și o echipă dedicată excelenței, transformăm 
                fiecare eveniment într-o experiență de neuitat pentru tine și invitații tăi.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-elegant">
                  <img 
                    src="/lovable-uploads/7046843c-69ba-4644-90d8-12d858f8520c.png" 
                    alt="Pergolă cu lumini decorative"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-elegant">
                  <img 
                    src="/lovable-uploads/d6536cc2-35a0-4e1c-9972-d812db8d81ee.png" 
                    alt="Grădină cu flori roz"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-elegant">
                  <img 
                    src="/lovable-uploads/4f31d989-8d78-4c4f-91bf-a10f3dbd8980.png" 
                    alt="Peisaj grădină premium"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-elegant">
                  <img 
                    src="/lovable-uploads/0520e63a-8b4f-475b-ad86-ca0441f5e6f4.png" 
                    alt="Trandafiri și decoruri naturale"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-3xl font-serif font-bold text-primary text-center mb-12">
              Valorile noastre
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-premium transition-all duration-300 hover:-translate-y-2 bg-card border-border">
                  <CardContent className="p-0">
                    <div className="mb-4 flex justify-center">
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-primary mb-3">{value.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;