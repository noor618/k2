import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mountain, Clock, TrendingUp, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const expeditions = [
  {
    id: "k2-expedition",
    title: "K2 Expedition",
    subtitle: "The Ultimate Challenge",
    duration: "50-60 Days",
    difficulty: "Extreme / Professional",
    season: "June - August",
    image: "/src/assets/k2-expedition.jpg",
    description: "The ultimate prize for mountaineers, K2 is the second-highest peak on Earth and arguably the most challenging. Located on the border of Pakistan and China, its formidable pyramid shape and extreme weather conditions demand respect, skill, and endurance."
  },
  {
    id: "nanga-parbat-expedition",
    title: "Nanga Parbat Expedition",
    subtitle: "The Killer Mountain",
    duration: "40-45 Days",
    difficulty: "Extreme / Professional",
    season: "June - August",
    image: "/src/assets/mountaineering-expedition.jpg",
    description: "Known as the \"Killer Mountain,\" Nanga Parbat is the world's ninth-highest peak and one of the most revered 8000-meter giants. Its Rupal Face is the highest mountain face on earth."
  },
  {
    id: "gasherbrum-i-expedition",
    title: "Gasherbrum I Expedition",
    subtitle: "Hidden Peak",
    duration: "45-50 Days",
    difficulty: "Extreme",
    season: "June - August",
    image: "/src/assets/Gasherbrum-1.jpg",
    description: "Gasherbrum I, or \"Hidden Peak,\" is the 11th highest mountain in the world at 8,080 meters. Located in a remote corner of the Karakoram, it is considered one of the more challenging 8000-meter peaks."
  },
  {
    id: "broad-peak-expedition",
    title: "Broad Peak Expedition",
    subtitle: "The Accessible Giant",
    duration: "45-52 Days",
    difficulty: "Very High / Challenging",
    season: "June - August",
    image: "/src/assets/broadp.jpg",
    description: "Standing at 8,051 meters, Broad Peak is one of the most accessible 8000-meter peaks and an excellent choice for climbers looking to summit their first major Himalayan giant."
  },
  {
    id: "gasherbrum-ii-expedition",
    title: "Gasherbrum II Expedition",
    subtitle: "The Achievable 8000er",
    duration: "45-50 Days",
    difficulty: "Very High / Challenging",
    season: "June - August",
    image: "/src/assets/g2.jpg",
    description: "At 8,035 meters, Gasherbrum II is the 13th highest peak in the world and is widely regarded as one of the most achievable 8000-meter summits."
  },
  {
    id: "masherbrum-expedition",
    title: "Masherbrum Expedition",
    subtitle: "K1 - The Elite Challenge",
    duration: "50-55 Days",
    difficulty: "Extreme / Professional",
    season: "June - August",
    image: "/src/assets/Masherbrum-7821m.jpg",
    description: "Masherbrum (7,821m), also known as K1, is one of the most difficult and sought-after peaks in the Karakoram. Its sheer, steep faces and technical difficulty have thwarted many attempts."
  },
  {
    id: "spantik-peak-expedition",
    title: "Spantik Peak Expedition",
    subtitle: "The Golden Peak",
    duration: "35-40 Days",
    difficulty: "High / Technical",
    season: "June - September",
    image: "/src/assets/Spantik.jpeg",
    description: "Spantik, also known as the Golden Peak, stands at 7,027 meters and is renowned for its spectacular beauty and relative accessibility, making it an ideal first 7000-meter peak."
  },
  {
    id: "laila-peak-expedition",
    title: "Laila Peak Expedition",
    subtitle: "The Beautiful Spear",
    duration: "20-25 Days",
    difficulty: "Very Technical",
    season: "June - August",
    image: "/src/assets/LailaPeak.jpg",
    description: "With its dramatic, spear-like northwest face, Laila Peak (6,096m) is arguably one of the most beautiful mountains in the world. While its altitude is modest, the climb is a serious technical challenge."
  },
  {
    id: "diran-peak-expedition",
    title: "Diran Peak Expedition",
    subtitle: "The Training Ground",
    duration: "35-40 Days",
    difficulty: "High / Avalanche Prone",
    season: "May - September",
    image: "/src/assets/Diran Peak.jpg",
    description: "Diran Peak (7,266m) is a stunning mountain located in the Rakaposhi-Haramosh massif. While beautiful, it is notorious for its avalanche risk and requires careful route planning."
  },
  {
    id: "rakaposhi-expedition",
    title: "Rakaposhi Expedition",
    subtitle: "The Prominent Giant",
    duration: "40-45 Days",
    difficulty: "Very High / Technical",
    season: "June - August",
    image: "/src/assets/Rakaposhi Expedition.jpeg",
    description: "Rakaposhi (7,788m) dominates the skyline of the Hunza Valley, rising uninterrupted for nearly 6,000 meters from the valley floor, making it one of the most prominent peaks in the world."
  }
];

const getDifficultyColor = (difficulty: string) => {
  if (difficulty.includes("Extreme")) return "destructive";
  if (difficulty.includes("Very High") || difficulty.includes("Very Technical")) return "secondary";
  return "default";
};

const Expeditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-hero">
        <div className="absolute inset-0 bg-primary/20" />
        <div className="relative container mx-auto px-6 lg:px-8 text-center">
          <Mountain className="h-16 w-16 mx-auto mb-6 text-accent" />
          <h1 className="text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
            Mountaineering Expeditions in Pakistan
          </h1>
          <h2 className="text-2xl lg:text-3xl font-heading font-medium text-primary-foreground/90 mb-8">
            The Ultimate Test of Skill and Spirit
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              For the mountaineer with ambition, Pakistan presents the ultimate prize. Home to a staggering concentration of the world's highest peaks, the Karakoram and Himalayan ranges offer a lifetime of challenge and reward. Adventure Baltoro specializes in leading safe, meticulously planned, and fully supported expeditions to these legendary summits. Our deep local expertise, seasoned high-altitude guides, and unwavering commitment to safety ensure that you can focus on your climb while we manage every logistical detail. Whether you dream of standing atop an 8000-meter giant or tackling a technical 7000-meter peak, our expeditions are designed to help you achieve your summit.
            </p>
          </div>
        </div>
      </section>

      {/* Expeditions Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expeditions.map((expedition) => (
              <Card key={expedition.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={expedition.image} 
                    alt={expedition.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                        {expedition.title}
                      </CardTitle>
                      <CardDescription className="text-sm font-medium text-muted-foreground mt-1">
                        {expedition.subtitle}
                      </CardDescription>
                    </div>
                    <Badge variant={getDifficultyColor(expedition.difficulty)} className="ml-2">
                      {expedition.difficulty.split(' / ')[0]}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {expedition.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
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

export default Expeditions;