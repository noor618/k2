import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Clock, TrendingUp, Calendar } from "lucide-react";

// Import images

import k2baseImage from "/src/assets/k2basecamp.jpg";
import k2bgonImage from "/src/assets/K2 Gondogoro.jpg";
import snowImage from "/src/assets/Snow Lake Hispar.jpg";
import rushImage from "/src/assets/Rush Lake Trek.jpg";
import nangaImage from "/src/assets/NangaCamp Trek.jpg";
import haraImage from "/src/assets/Haramosh.jpg";
import triImage from "/src/assets/Tirich Mir Base Camp Trek.jpg";



import gondogoroTrekImage from "/src/assets/gondogoro-trek.jpg";
import signatureTreksImage from "/src/assets/signature-treks.jpg";
import hunzaAutumnImage from "/src/assets/hunza-autumn.jpg";

const treks = [
  {
    id: "k2-base-camp-trek",
    title: "K2 Base Camp Trek",
    subtitle: "The Throne Room of Mountain Gods",
    duration: "18-21 Days",
    difficulty: "Strenuous",
    season: "June - September",
    image: k2baseImage
  },
  {
    id: "k2-gondogoro-la-trek",
    title: "K2 Gondogoro La Trek",
    subtitle: "The Ultimate Circuit",
    duration: "21-24 Days",
    difficulty: "Very Strenuous",
    season: "June - August",
    image: k2bgonImage
  },
  {
    id: "snow-lake-hispar-la-trek",
    title: "Snow Lake & Hispar La Trek",
    subtitle: "The Great Glacial Traverse",
    duration: "22-25 Days",
    difficulty: "Very Strenuous",
    season: "July - August",
    image: snowImage
  },
  {
    id: "nanga-parbat-base-camp-trek",
    title: "Nanga Parbat Base Camp Trek",
    subtitle: "Fairy Meadows Paradise",
    duration: "10-12 Days",
    difficulty: "Moderate",
    season: "May - October",
    image: nangaImage
  },
  {
    id: "rush-lake-trek",
    title: "Rush Lake Trek",
    subtitle: "Highest Alpine Lake",
    duration: "10-14 Days",
    difficulty: "Strenuous",
    season: "June - September",
    image: rushImage
  },
  {
    id: "rakaposhi-base-camp-trek",
    title: "Rakaposhi Base Camp Trek",
    subtitle: "The Accessible Giant",
    duration: "8-10 Days",
    difficulty: "Moderate",
    season: "May - October",
    image: signatureTreksImage
  },
  {
    id: "haramosh-la-trek",
    title: "Haramosh La Trek",
    subtitle: "The Rarely Traveled Route",
    duration: "15-18 Days",
    difficulty: "Very Strenuous",
    season: "July - August",
    image: haraImage
  },
  {
    id: "tirich-mir-base-camp-trek",
    title: "Tirich Mir Base Camp Trek",
    subtitle: "Hindu Kush Adventure",
    duration: "18-20 Days",
    difficulty: "Strenuous",
    season: "July - September",
    image: triImage
  },
];

const getDifficultyColor = (difficulty: string) => {
  if (difficulty.includes("Very Strenuous")) return "destructive";
  if (difficulty.includes("Strenuous")) return "secondary";
  return "default";
};

const TrekkingCarousel = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Signature Treks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Journey through breathtaking landscapes on our curated treks to Pakistan's most spectacular destinations.
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
              {treks.map((trek) => (
                <CarouselItem key={trek.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                <Card className="h-full group hover:shadow-premium transition-all duration-500 border-0 bg-card">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={trek.image} 
                      alt={trek.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                          {trek.title}
                        </CardTitle>
                        <p className="text-sm text-accent font-medium mt-1">
                          {trek.subtitle}
                        </p>
                      </div>
                      <Badge variant={getDifficultyColor(trek.difficulty)} className="ml-2 shrink-0">
                        {trek.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2 text-accent" />
                        <span>{trek.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <TrendingUp className="h-4 w-4 mr-2 text-accent" />
                        <span>{trek.difficulty}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-accent" />
                        <span>{trek.season}</span>
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

export default TrekkingCarousel;