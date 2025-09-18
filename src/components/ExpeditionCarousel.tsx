import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Clock, TrendingUp, Calendar } from "lucide-react";

// Import images
import k2ExpeditionImage from "/src/assets/k2-expedition.jpg";
import mountaineeringImage from "/src/assets/mountaineering-expedition.jpg";
import broadPeakImage from "/src/assets/broadp.jpg";
import gasherbrumIImage from "/src/assets/Gasherbrum-1.jpg";
import g2 from "/src/assets/g2.jpg";
import masherbrum from "/src/assets/Masherbrum-7821m.jpg";
import Spantik from "/src/assets/Spantik.jpeg";
import Diran from "/src/assets/Diran Peak.jpg";
import Rakaposhi from "/src/assets/Rakaposhi Expedition.jpeg";
import LailaPeak from "/src/assets/LailaPeak.jpg";





const expeditions = [
  {
    id: "k2-expedition",
    title: "K2 Expedition",
    subtitle: "The Ultimate Challenge",
    duration: "50-60 Days",
    difficulty: "Extreme",
    season: "June - August",
    image: k2ExpeditionImage
  },
  {
    id: "nanga-parbat-expedition",
    title: "Nanga Parbat Expedition",
    subtitle: "The Killer Mountain",
    duration: "40-45 Days",
    difficulty: "Extreme",
    season: "June - August",
    image: mountaineeringImage
  },
  {
    id: "gasherbrum-i-expedition",
    title: "Gasherbrum I Expedition",
    subtitle: "Hidden Peak",
    duration: "45-50 Days",
    difficulty: "Extreme",
    season: "June - August",
    image: gasherbrumIImage
    
  },
  {
    id: "broad-peak-expedition",
    title: "Broad Peak Expedition",
    subtitle: "The Accessible Giant",
    duration: "45-52 Days",
    difficulty: "Very High",
    season: "June - August",
    image: broadPeakImage
  },
  {
    id: "gasherbrum-ii-expedition",
    title: "Gasherbrum II Expedition",
    subtitle: "The Achievable 8000er",
    duration: "45-50 Days",
    difficulty: "Very High",
    season: "June - August",
    image: g2
  },
  {
    id: "masherbrum-expedition",
    title: "Masherbrum Expedition",
    subtitle: "K1 - The Elite Challenge",
    duration: "50-55 Days",
    difficulty: "Extreme",
    season: "June - August",
    image: masherbrum
  },
  {
    id: "spantik-peak-expedition",
    title: "Spantik Peak Expedition",
    subtitle: "The Golden Peak",
    duration: "35-40 Days",
    difficulty: "High",
    season: "June - September",
    image: Spantik
  },
  {
    id: "laila-peak-expedition",
    title: "Laila Peak Expedition",
    subtitle: "The Beautiful Spear",
    duration: "20-25 Days",
    difficulty: "Very Technical",
    season: "June - August",
    image: LailaPeak
  },
  {
    id: "diran-peak-expedition",
    title: "Diran Peak Expedition",
    subtitle: "The Training Ground",
    duration: "35-40 Days",
    difficulty: "High",
    season: "May - September",
    image: Diran
  },
  {
    id: "rakaposhi-expedition",
    title: "Rakaposhi Expedition",
    subtitle: "The Prominent Giant",
    duration: "40-45 Days",
    difficulty: "Very High",
    season: "June - August",
    image: Rakaposhi
  }
];

const getDifficultyColor = (difficulty: string) => {
  if (difficulty.includes("Extreme")) return "destructive";
  if (difficulty.includes("Very High") || difficulty.includes("Very Technical")) return "secondary";
  return "default";
};

const ExpeditionCarousel = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Mountaineering Expeditions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conquer the world's highest peaks with our expertly guided expeditions to Pakistan's legendary summits.
          </p>
        </div>

        <div className="relative max-w-full overflow-hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {expeditions.map((expedition) => (
                <CarouselItem key={expedition.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                <Card className="h-full group hover:shadow-premium transition-all duration-500 border-0 bg-card">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={expedition.image} 
                      alt={expedition.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                          {expedition.title}
                        </CardTitle>
                        <p className="text-sm text-accent font-medium mt-1">
                          {expedition.subtitle}
                        </p>
                      </div>
                      <Badge variant={getDifficultyColor(expedition.difficulty)} className="ml-2 shrink-0">
                        {expedition.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2 text-accent" />
                        <span>{expedition.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <TrendingUp className="h-4 w-4 mr-2 text-accent" />
                        <span>{expedition.difficulty}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-accent" />
                        <span>{expedition.season}</span>
                      </div>
                    </div>
                    <Button variant="adventure" className="w-full" asChild>
                      <Link to="/contact">
                        Learn More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="right-2 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ExpeditionCarousel;