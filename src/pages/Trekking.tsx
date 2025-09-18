import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, TrendingUp, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const treks = [
  {
    id: "k2-base-camp-trek",
    title: "K2 Base Camp Trek",
    subtitle: "The Throne Room of Mountain Gods",
    duration: "18-21 Days",
    difficulty: "Strenuous",
    season: "June - September",
    image: "/src/assets/k2basecamp.jpg",
    description: "This world-famous trek takes you into the heart of the Karakoram to the base of K2. The route follows the Braldu River valley before ascending the vast Baltoro Glacier, walking through an amphitheater of the world's highest and most dramatic mountains."
  },
  {
    id: "k2-gondogoro-la-trek",
    title: "K2 Gondogoro La Trek",
    subtitle: "The Ultimate Circuit",
    duration: "21-24 Days",
    difficulty: "Very Strenuous / Technical",
    season: "June - August",
    image: "/src/assets/K2 Gondogoro.jpg",
    description: "The ultimate extension of the classic K2 Base Camp trek. After reaching Concordia and visiting K2 Base Camp, the route crosses the challenging Gondogoro La pass (5,585m) with unparalleled dawn views."
  },
  {
    id: "snow-lake-hispar-la-trek",
    title: "Snow Lake & Hispar La Trek",
    subtitle: "The Great Glacial Traverse",
    duration: "22-25 Days",
    difficulty: "Very Strenuous / Technical",
    season: "July - August",
    image: "/src/assets/Snow Lake Hispar.jpg",
    description: "A true wilderness expedition traversing the vast ice-fields of Snow Lake (Lukpe Lawo) and crossing the high Hispar La pass (5,151m) to connect Baltistan and Hunza. One of the world's great glacial traverses."
  },
  {
    id: "nanga-parbat-base-camp-trek",
    title: "Nanga Parbat Base Camp Trek",
    subtitle: "Fairy Meadows Paradise",
    duration: "10-12 Days",
    difficulty: "Moderate",
    season: "May - October",
    image: "/src/assets/NangaCamp Trek.jpg",
    description: "Journey to the legendary Fairy Meadows, a lush green paradise with direct, awe-inspiring views of Nanga Parbat's Raikot Face. One of the most accessible and beautiful treks in Pakistan."
  },
  {
    id: "rush-lake-trek",
    title: "Rush Lake Trek",
    subtitle: "Highest Alpine Lake",
    duration: "10-14 Days",
    difficulty: "Strenuous",
    season: "June - September",
    image: "/src/assets/Rush Lake Trek.jpg",
    description: "Trek to Rush Lake, one of the highest alpine lakes in Pakistan at over 4,694 meters, with stunning panoramic views of Spantik (Golden Peak), Malubiting, and Miar Peak."
  },
  {
    id: "rakaposhi-base-camp-trek",
    title: "Rakaposhi Base Camp Trek",
    subtitle: "The Accessible Giant",
    duration: "8-10 Days",
    difficulty: "Moderate",
    season: "May - October",
    image: "/src/assets/signature-treks.jpg",
    description: "A relatively short trek delivering huge rewards with up-close views of the majestic Rakaposhi. The trail winds through beautiful pine forests and meadows of the Minapin Glacier."
  },
  {
    id: "haramosh-la-trek",
    title: "Haramosh La Trek",
    subtitle: "The Rarely Traveled Route",
    duration: "15-18 Days",
    difficulty: "Very Strenuous",
    season: "July - August",
    image: "/src/assets/Haramosh.jpg",
    description: "A challenging and rarely traveled trek connecting the Haramosh valley with Baltistan, crossing the demanding Haramosh La pass (4,800m) with incredible views of Rakaposhi and Haramosh Peak."
  },
  {
    id: "tirich-mir-base-camp-trek",
    title: "Tirich Mir Base Camp Trek",
    subtitle: "Hindu Kush Adventure",
    duration: "18-20 Days",
    difficulty: "Strenuous",
    season: "July - September",
    image: "/src/assets/Tirich Mir Base Camp Trek.jpg",
    description: "Journey to the heart of the Hindu Kush range to the base of Tirich Mir (7,708m), the highest mountain outside the Himalayas and Karakoram. Experience the culturally rich Chitral region."
  },
];

const getDifficultyColor = (difficulty: string) => {
  if (difficulty.includes("Very Strenuous")) return "destructive";
  if (difficulty.includes("Strenuous")) return "secondary";
  return "default";
};

const Trekking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-hero">
        <div className="absolute inset-0 bg-primary/20" />
        <div className="relative container mx-auto px-6 lg:px-8 text-center">
          <MapPin className="h-16 w-16 mx-auto mb-6 text-accent" />
          <h1 className="text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
            Signature Treks in Pakistan
          </h1>
          <h2 className="text-2xl lg:text-3xl font-heading font-medium text-primary-foreground/90 mb-8">
            Journey Through the World's Greatest Mountain Scenery
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Trekking in Pakistan is an experience without parallel. From the legendary Baltoro Glacier, home to a confluence of the world's highest peaks, to the serene alpine meadows of Nanga Parbat, our treks immerse you in landscapes of staggering scale and beauty. Adventure Baltoro offers a curated selection of world-class treks, guided by local experts who know the trails, the culture, and the environment intimately. Whether you are a seasoned trekker seeking a new challenge or embarking on your first Himalayan adventure, our itineraries are designed to be safe, rewarding, and truly unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Treks Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treks.map((trek) => (
              <Card key={trek.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={trek.image} 
                    alt={trek.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                        {trek.title}
                      </CardTitle>
                      <CardDescription className="text-sm font-medium text-muted-foreground mt-1">
                        {trek.subtitle}
                      </CardDescription>
                    </div>
                    <Badge variant={getDifficultyColor(trek.difficulty)} className="ml-2">
                      {trek.difficulty.split(' / ')[0]}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {trek.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
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

                  <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground" asChild>
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

export default Trekking;