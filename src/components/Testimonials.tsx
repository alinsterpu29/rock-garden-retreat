import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria și Alexandru",
      event: "Nuntă",
      rating: 5,
      text: "Rock Garden a transformat ziua noastră specială într-o amintire de neuitat. Grădina a fost perfectă, atmosfera magică, iar echipa a fost atentă la fiecare detaliu. Invitații încă vorbesc despre frumusețea locației!",
      image: "🌹"
    },
    {
      name: "Ana Popescu",
      event: "Botez",
      rating: 5,
      text: "Am ales Rock Garden pentru botezul fetiței mele și nu regret nicio clipă. Decorurile au fost de vis, spațiul perfect pentru copii și atmosfera caldă ne-a făcut să ne simțim ca acasă. Mulțumim pentru tot!",
      image: "👶"
    },
    {
      name: "George Ionescu",
      event: "Aniversare 50 ani",
      rating: 5,
      text: "Pentru aniversarea mea am vrut ceva special și Rock Garden a depășit toate așteptările. Grădina a oferit cadrul perfect pentru o petrecere elegantă, iar serviciile au fost impecabile. Recomand cu încredere!",
      image: "🎉"
    },
    {
      name: "SC TechVision SRL",
      event: "Eveniment corporate",
      rating: 5,
      text: "Am organizat un eveniment de team building pentru echipa noastră la Rock Garden. Locația a fost perfectă pentru activitățile în aer liber, iar atmosfera relaxantă a favorizat comunicarea între colegi. Profesionalism de top!",
      image: "💼"
    },
    {
      name: "Elena și Mihai",
      event: "Logodnă",
      rating: 5,
      text: "Petrecerea de logodnă la Rock Garden a fost exact cum ne-am dorit - intimă, elegantă și romantică. Decorurile florale au fost spectaculoase, iar luminile au creat o atmosferă de basm. Mulțumim pentru tot!",
      image: "💍"
    },
    {
      name: "Carmen Dumitrescu",
      event: "Aniversare copil",
      rating: 5,
      text: "Petrecerea de 6 ani a fiului meu a fost un succes total! Decorurile tematice cu unicorni, spațiul pentru joacă și atenția la detalii au făcut ca micuții să fie în culmea fericirii. O experiență minunată!",
      image: "🦄"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-accent fill-accent' : 'text-muted-foreground'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Poveștile clienților noștri
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Fiecare eveniment organizat la Rock Garden lasă amintiri de neuitat. 
              Iată ce spun clienții noștri despre experiența lor.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-premium transition-all duration-300 hover:-translate-y-2 bg-card border-border">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-accent opacity-60" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 bg-secondary/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
              Gata să creezi propria ta poveste?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Alătură-te familiei Rock Garden și lasă-ne să facem din evenimentul tău 
              o experiență de neuitat pentru tine și invitații tăi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold shadow-elegant"
              >
                Contactează-ne acum
              </a>
              <a 
                href="tel:+40123456789"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors font-semibold"
              >
                Sună direct
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;