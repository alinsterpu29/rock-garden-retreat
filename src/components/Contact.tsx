import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guests: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.eventType) {
      toast({
        title: "Completează câmpurile obligatorii",
        description: "Te rugăm să completezi toate câmpurile marcate cu *",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Mesaj trimis cu succes! 🌿",
      description: "Îți mulțumim pentru interesul acordat! Te vom contacta în maximum 24 de ore pentru a discuta detaliile evenimentului tău.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      guests: "",
      message: ""
    });
  };

  const handleWhatsApp = () => {
    const message = `Bună ziua! Sunt interesat(ă) de organizarea unui eveniment la Rock Garden. Vă rog să mă contactați pentru detalii.`;
    const whatsappUrl = `https://wa.me/40123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Contactează-ne
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Suntem aici să te ajutăm să organizezi evenimentul perfect. 
              Contactează-ne pentru o consultație gratuită sau o vizită la locație.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-premium bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">
                  Solicită o ofertă personalizată
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-primary font-medium">Nume complet *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nume și prenume"
                        className="border-border focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-primary font-medium">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="adresa@email.com"
                        className="border-border focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-primary font-medium">Telefon *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0723 456 789"
                        className="border-border focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventType" className="text-primary font-medium">Tip eveniment *</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, eventType: value })}>
                        <SelectTrigger className="border-border focus:border-primary">
                          <SelectValue placeholder="Selectează tipul" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nunta">Nuntă</SelectItem>
                          <SelectItem value="botez">Botez</SelectItem>
                          <SelectItem value="aniversare">Aniversare</SelectItem>
                          <SelectItem value="corporate">Eveniment corporate</SelectItem>
                          <SelectItem value="logodna">Logodnă</SelectItem>
                          <SelectItem value="altele">Altele</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="eventDate" className="text-primary font-medium">Data evenimentului</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests" className="text-primary font-medium">Numărul de invitați</Label>
                      <Input
                        id="guests"
                        type="number"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        placeholder="ex: 50"
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-primary font-medium">Mesajul tău</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Descrie-ne viziunea ta pentru eveniment..."
                      rows={4}
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      type="submit" 
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
                    >
                      Trimite cererea
                    </Button>
                    <Button 
                      type="button"
                      onClick={handleWhatsApp}
                      variant="outline"
                      className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="shadow-premium bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-primary">
                    Informații de contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Adresa</h4>
                      <p className="text-muted-foreground">
                        Strada Grădinilor, nr. 15<br />
                        Sector 2, București<br />
                        România
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Telefon</h4>
                      <p className="text-muted-foreground">
                        <a href="tel:+40123456789" className="hover:text-primary transition-colors">
                          +40 123 456 789
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Email</h4>
                      <p className="text-muted-foreground">
                        <a href="mailto:contact@rockgarden.ro" className="hover:text-primary transition-colors">
                          contact@rockgarden.ro
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Program</h4>
                      <div className="text-muted-foreground text-sm space-y-1">
                        <p>Luni - Vineri: 09:00 - 18:00</p>
                        <p>Sâmbătă - Duminică: 10:00 - 16:00</p>
                        <p className="text-accent">Vizitele se fac doar cu programare</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Maps */}
              <Card className="shadow-premium bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-primary">
                    Locația noastră
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video rounded-b-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.0899!2d26.1025384!3d44.4267674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI1JzM2LjQiTiAyNsKwMDYnMDkuMSJF!5e0!3m2!1sen!2sro!4v1620000000000!5m2!1sen!2sro"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Rock Garden Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;