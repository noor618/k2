import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Car, Calendar, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    location: "Hunza Valley, Karakoram Highway",
    description: "Experience the legendary Karakoram Highway, one of the world's highest paved roads, and discover the stunning Hunza Valley with its ancient culture and breathtaking mountain views.",
    image: k2higwayimage
  },
  {
    id: "skardu-deosai-plains-safari",
    title: "Skardu & Deosai Plains Safari",
    subtitle: "Land of Giants Expedition",
    duration: "7-10 Days",
    difficulty: "Easy",
    season: "July - September",
    location: "Skardu, Deosai Plains",
    description: "Explore the vast Deosai Plains, known as the Land of Giants, and the historic town of Skardu with its stunning lakes and proximity to the world's highest peaks.",
    image: deosaiPlainsImage
  },
  {
    id: "fairy-meadows-nanga-parbat-thrill-ride",
    title: "Fairy Meadows & Nanga Parbat Thrill Ride",
    subtitle: "Edge of the World Journey",
    duration: "5-7 Days",
    difficulty: "Moderate",
    season: "May - October",
    location: "Fairy Meadows, Nanga Parbat",
    description: "Navigate the thrilling jeep track to Fairy Meadows and witness the majestic Nanga Parbat, the world's ninth-highest mountain, in all its glory.",
    image: fairyMeadowsImage
  }
];

const getDifficultyColor = (difficulty: string) => {
  if (difficulty === "Moderate") return "secondary";
  return "default";
};

const JeepSafaris = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6">
            Jeep Safaris
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Embark on thrilling 4x4 adventures through Pakistan's most spectacular and remote landscapes. Experience the ultimate off-road journey to places where ordinary vehicles cannot reach.
          </p>
        </div>
      </section>

      {/* Safaris Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safaris.map((safari) => (
              <Card key={safari.id} className="group hover:shadow-premium transition-all duration-500 border-0 bg-card overflow-hidden">
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
                      <CardTitle className="text-xl font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                        {safari.title}
                      </CardTitle>
                      <p className="text-sm text-accent font-medium mb-3">
                        {safari.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {safari.description}
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
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-accent" />
                      <span>{safari.location}</span>
                    </div>
                  </div>
                  <Button variant="adventure" className="w-full" asChild>
                    <Link to="/contact">
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default JeepSafaris;