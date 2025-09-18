import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Clock, Users, Calendar } from "lucide-react";

// Import images
import hunzaAutumnImage from "@/assets/Hunza Valley.jpg";
import culturalToursImage from "@/assets/cultural-tours.jpg";
import SHToursImage from "@/assets/skardu-shigar-heritage-tou.jpeg";
import chitralImage from "@/assets/Chitral  Kalash Festival .jpeg";
import gbimage from "@/assets/Gilgit-Baltistan Discovery Tour.jpg";
import k2road from "@/assets/karakoram-highway-tour.jpg";
import lahoreimage from "@/assets/Lahore-Fort.jpg";


const tours = [
  {
    id: "hunza-valley-cultural-tour",
    title: "Hunza Valley Cultural Tour",
    subtitle: "Autumn Splendor",
    duration: "8-12 Days",
    difficulty: "Easy",
    season: "September - November",
    image: hunzaAutumnImage
  },
  {
    id: "skardu-shigar-heritage-tour",
    title: "Skardu & Shigar Heritage Tour", 
    subtitle: "Ancient Balti Culture",
    duration: "7-10 Days",
    difficulty: "Easy",
    season: "April - October",
    image: SHToursImage
  },
  {
    id: "chitral-kalash-festival-tour",
    title: "Chitral & Kalash Festival Tour",
    subtitle: "Living Ancient Culture",
    duration: "10-12 Days",
    difficulty: "Easy",
    season: "May - October",
    image: chitralImage
  },
  {
    id: "gilgit-baltistan-discovery-tour",
    title: "Gilgit-Baltistan Discovery Tour",
    subtitle: "Complete Northern Experience",
    duration: "14-16 Days",
    difficulty: "Easy",
    season: "April - October",
    image: gbimage
  },
  {
    id: "karakoram-highway-tour",
    title: "Karakoram Highway Tour",
    subtitle: "Eighth Wonder Journey",
    duration: "12-14 Days",
    difficulty: "Easy",
    season: "April - November",
    image: k2road
  },
  {
    id: "lahore-islamabad-heritage-tour",
    title: "Lahore & Islamabad Heritage Tour",
    subtitle: "Mughal Legacy",
    duration: "5-7 Days",
    difficulty: "Easy",
    season: "October - March",
    image: lahoreimage
  },
  
];

const getDifficultyColor = (difficulty: string) => {
  if (difficulty === "Moderate") return "secondary";
  return "default";
};

const ToursCarousel = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Cultural Tours
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in authentic experiences and discover the rich heritage of Pakistan's diverse regions.
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
              {tours.map((tour) => (
                <CarouselItem key={tour.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                <Card className="h-full group hover:shadow-premium transition-all duration-500 border-0 bg-card">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={tour.image} 
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                          {tour.title}
                        </CardTitle>
                        <p className="text-sm text-accent font-medium mt-1">
                          {tour.subtitle}
                        </p>
                      </div>
                      <Badge variant={getDifficultyColor(tour.difficulty)} className="ml-2 shrink-0">
                        {tour.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2 text-accent" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-2 text-accent" />
                        <span>{tour.difficulty}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-accent" />
                        <span>{tour.season}</span>
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

export default ToursCarousel;