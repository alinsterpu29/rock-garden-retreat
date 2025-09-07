import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/lovable-uploads/7046843c-69ba-4644-90d8-12d858f8520c.png",
      alt: "Pergolă elegantă cu lumini decorative și scaune moderne",
      category: "Spații evenimente"
    },
    {
      src: "/lovable-uploads/bbcbbc5e-af6d-494f-8fb9-f08ab913e60a.png",
      alt: "Petrecere tematică cu unicorn și decoruri roz",
      category: "Evenimente copii"
    },
    {
      src: "/lovable-uploads/e8e87c48-224e-47ad-8764-e36113b4a3ed.png",
      alt: "Cină elegantă cu baloane roz și decoruri premium",
      category: "Evenimente private"
    },
    {
      src: "/lovable-uploads/f61fc126-6fe8-4900-9ce8-45b70efd7d1f.png",
      alt: "Petrecere în seră cu baloane verzi și decoruri naturale",
      category: "Evenimente tematice"
    },
    {
      src: "/lovable-uploads/d201a10d-2164-4927-b016-6a3d755a07ba.png",
      alt: "Masă rustică cu decoruri naturale și pampas grass",
      category: "Styling natural"
    },
    {
      src: "/lovable-uploads/4f31d989-8d78-4c4f-91bf-a10f3dbd8980.png",
      alt: "Grădină cu flori roz și peisaj verde luxuriant",
      category: "Grădina noastră"
    },
    {
      src: "/lovable-uploads/d6536cc2-35a0-4e1c-9972-d812db8d81ee.png",
      alt: "Gard decorativ cu trandafiri roz și amenajare premium",
      category: "Grădina noastră"
    },
    {
      src: "/lovable-uploads/0520e63a-8b4f-475b-ad86-ca0441f5e6f4.png",
      alt: "Trandafiri cățărători și decoruri de grădină elegante",
      category: "Grădina noastră"
    },
    {
      src: "/lovable-uploads/f7238a9a-27c9-4bc4-a595-a390ab6f26ac.png",
      alt: "Masa de picnic cu decoruri naturale și perne colorate",
      category: "Styling casual"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Galeria noastră
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Descoperă atmosfera magică a Rock Garden prin imaginile noastre. 
              De la decoruri elaborate la momente spontane de bucurie.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {galleryImages.map((image, index) => (
              <Card 
                key={index} 
                className="group cursor-pointer overflow-hidden bg-card border-border hover:shadow-premium transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-background/90 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium text-primary">{image.category}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Vezi mai multe pe Instagram
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>

          <div className="max-w-4xl max-h-[90vh] flex items-center justify-center">
            <img 
              src={galleryImages[selectedImage].src} 
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
            <span className="text-sm">{selectedImage + 1} / {galleryImages.length}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;