import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Calendar, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    location: "Hunza Valley",
    description: "Experience the stunning autumn colors of Hunza Valley while immersing yourself in the ancient culture of the Hunzakuts. Visit historic forts, meet local families, and witness traditional crafts.",
    image: hunzaAutumnImage
  },
  {
    id: "skardu-shigar-heritage-tour",
    title: "Skardu & Shigar Heritage Tour", 
    subtitle: "Ancient Balti Culture",
    duration: "7-10 Days",
    difficulty: "Easy",
    season: "April - October",
    location: "Skardu, Shigar Valley",
    description: "Discover the rich Balti heritage in historic Skardu and beautiful Shigar Valley. Explore ancient palaces, traditional architecture, and experience authentic local hospitality.",
    image: SHToursImage
  },
  {
    id: "chitral-kalash-festival-tour",
    title: "Chitral & Kalash Festival Tour",
    subtitle: "Living Ancient Culture",
    duration: "10-12 Days",
    difficulty: "Easy",
    season: "May - October",
    location: "Chitral, Kalash Valleys",
    description: "Journey to the unique Kalash valleys and witness one of the world's most ancient surviving cultures. Participate in colorful festivals and learn about their fascinating traditions.",
    image: chitralImage
  },
  {
    id: "gilgit-baltistan-discovery-tour",
    title: "Gilgit-Baltistan Discovery Tour",
    subtitle: "Complete Northern Experience",
    duration: "14-16 Days",
    difficulty: "Easy",
    season: "April - October",
    location: "Gilgit-Baltistan",
    description: "A comprehensive journey through the diverse cultures, landscapes, and heritage sites of Gilgit-Baltistan. Perfect for those seeking a complete cultural immersion.",
    image: gbimage
  },
  {
    id: "karakoram-highway-tour",
    title: "Karakoram Highway Tour",
    subtitle: "Eighth Wonder Journey",
    duration: "12-14 Days",
    difficulty: "Easy",
    season: "April - November",
    location: "Karakoram Highway",
    description: "Travel the legendary Karakoram Highway, meeting diverse ethnic groups and experiencing the cultural melting pot along this historic Silk Road route.",
    image: k2road
  },
  {
    id: "lahore-islamabad-heritage-tour",
    title: "Lahore & Islamabad Heritage Tour",
    subtitle: "Mughal Legacy",
    duration: "5-7 Days",
    difficulty: "Easy",
    season: "October - March",
    location: "Lahore, Islamabad",
    description: "Explore Pakistan's political and cultural capitals, from the Mughal monuments of Lahore to the modern architecture of Islamabad.",
    image: lahoreimage
  }
];

const getDifficultyColor = (difficulty: string) => {
  if (difficulty === "Moderate") return "secondary";
  return "default";
};

const CulturalTours = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6">
            Cultural Tours
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Immerse yourself in authentic experiences and discover the rich heritage, ancient traditions, and diverse cultures that make Pakistan truly extraordinary.
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Card key={tour.id} className="group hover:shadow-premium transition-all duration-500 border-0 bg-card overflow-hidden">
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
                      <CardTitle className="text-xl font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                        {tour.title}
                      </CardTitle>
                      <p className="text-sm text-accent font-medium mb-3">
                        {tour.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {tour.description}
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
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-accent" />
                      <span>{tour.location}</span>
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

export default CulturalTours;