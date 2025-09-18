import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Clock, Car, Calendar } from "lucide-react";

// Import images
import k2higwayimage from "/src/assets/Karakoaram highway and hunza discovery.jpg";
import deosaiPlainsImage from "/src/assets/SkarduDeosai Plains Safari.jpeg";
import fairyMeadowsImage from "/src/assets/fairy-meadows-nanga-parbat-thrill-ride.jpeg";

const safaris = [
  {
    id: "karakoram-highway-hunza-discovery",
    title: "Karakoram Highway & Hunza Discovery",
    subtitle: "The Ultimate Road Adventure",
    duration: "8-12 Days",
    difficulty: "Moderate",
    season: "April - November",
    image: k2higwayimage
  },
  {
    id: "skardu-deosai-plains-safari",
    title: "Skardu & Deosai Plains Safari",
    subtitle: "Land of Giants Expedition",
    duration: "7-10 Days",
    difficulty: "Easy",
    season: "July - September",
    image: deosaiPlainsImage
  },
  {
    id: "fairy-meadows-nanga-parbat-thrill-ride",
    title: "Fairy Meadows & Nanga Parbat Thrill Ride",
    subtitle: "Edge of the World Journey",
    duration: "5-7 Days",
    difficulty: "Moderate",
    season: "May - October",
    image: fairyMeadowsImage
  }
];

const getDifficultyColor = (difficulty: string) => {
  if (difficulty === "Moderate") return "secondary";
  return "default";
};

const JeepSafarisCarousel = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Thrilling 4x4 Jeep Safaris
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the ultimate off-road adventure through Pakistan's most spectacular landscapes in our rugged 4x4 vehicles.
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
              {safaris.map((safari) => (
                <CarouselItem key={safari.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                <Card className="h-full group hover:shadow-premium transition-all duration-500 border-0 bg-card">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={safari.image} 
                      alt={safari.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                          {safari.title}
                        </CardTitle>
                        <p className="text-sm text-accent font-medium mt-1">
                          {safari.subtitle}
                        </p>
                      </div>
                      <Badge variant={getDifficultyColor(safari.difficulty)} className="ml-2 shrink-0">
                        {safari.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2 text-accent" />
                        <span>{safari.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Car className="h-4 w-4 mr-2 text-accent" />
                        <span>{safari.difficulty}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-accent" />
                        <span>{safari.season}</span>
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

export default JeepSafarisCarousel;