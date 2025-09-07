import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Baby, PartyPopper, Briefcase, Camera, Gift } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Heart className="h-12 w-12 text-accent" />,
      title: "Nunți de vis",
      description: "Creăm atmosfera perfectă pentru ziua cea mai importantă din viața ta. De la ceremonia în aer liber până la petrecerea sub stele, ne ocupăm de fiecare detaliu.",
      features: ["Ceremonie în grădină", "Recepție sub pergolă", "Decoruri florale premium", "Coordinare completă"]
    },
    {
      icon: <Baby className="h-12 w-12 text-accent" />,
      title: "Botezuri memorabile",
      description: "Sărbătorește prima tainică a micuțului tău într-un cadru natural și elegant, cu decoruri delicate și o atmosferă caldă și primitoare.",
      features: ["Decoruri tematice", "Mese aranjate special", "Spații pentru copii", "Fotografii în natură"]
    },
    {
      icon: <PartyPopper className="h-12 w-12 text-accent" />,
      title: "Aniversări speciale",
      description: "Marchează momentele importante cu o petrecere în mijlocul naturii. Personalizăm fiecare detaliu după preferințele tale.",
      features: ["Teme personalizate", "Decoruri baloane", "Tort aniversar", "Animație pentru copii"]
    },
    {
      icon: <Briefcase className="h-12 w-12 text-accent" />,
      title: "Evenimente corporate",
      description: "Impresionează-ți partenerii și echipa cu evenimente corporate de calitate într-un cadru profesional și relaxant.",
      features: ["Team building", "Conferințe în aer liber", "Networking events", "Catering premium"]
    },
    {
      icon: <Camera className="h-12 w-12 text-accent" />,
      title: "Ședințe foto/video",
      description: "Grădina noastră oferă fundalul perfect pentru ședințe foto profesionale, de la portrete de familie la shooting-uri comerciale.",
      features: ["Locații diverse", "Lumină naturală", "Decoruri adaptabile", "Acces profesionaliști"]
    },
    {
      icon: <Gift className="h-12 w-12 text-accent" />,
      title: "Pachete personalizate",
      description: "Creăm pachete speciale adaptate nevoilor tale, combinând serviciile noastre pentru experiența perfectă.",
      features: ["Consultanță gratuită", "Pachete flexibile", "Prețuri competitive", "Servicii complete"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Serviciile noastre
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              De la evenimente intime la celebrări grandioase, oferim servicii complete 
              pentru toate momentele speciale din viața ta.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-premium transition-all duration-300 hover:-translate-y-2 bg-card border-border">
                <CardHeader className="text-center pb-4">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-serif text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-secondary/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
              Pregătit să-ți planifici evenimentul perfect?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Contactează-ne pentru o consultație gratuită și să discutăm cum putem transforma 
              visul tău într-o realitate spectaculoasă.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant">
                Consultație gratuită
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Vezi pachete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;