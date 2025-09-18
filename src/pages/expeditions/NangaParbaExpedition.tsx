import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mountain, Clock, TrendingUp, Calendar, Users, Shield, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NangaParbaExpedition = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/mountaineering-expedition.jpg" 
            alt="Nanga Parbat Expedition"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative container mx-auto px-6 lg:px-8">
          <Link to="/expeditions" className="inline-flex items-center text-primary-foreground/80 hover:text-accent transition-colors mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Expeditions
          </Link>
          
          <div className="max-w-4xl">
            <Badge variant="destructive" className="mb-4">
              Extreme / Professional
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Nanga Parbat Expedition
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Known as the "Killer Mountain," Nanga Parbat is the world's ninth-highest peak and one of the most revered 8000-meter giants.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  Expedition Overview
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-6">
                    Known as the "Killer Mountain," Nanga Parbat is the world's ninth-highest peak and one of the most revered 8000-meter giants. Its Rupal Face is the highest mountain face on earth, rising an astonishing 4,600 meters from its base.
                  </p>
                  <p className="mb-6">
                    This expedition, typically via the Diamir Face, is a serious undertaking for skilled mountaineers. It presents significant technical challenges and objective dangers, demanding excellent physical conditioning and high-altitude experience.
                  </p>
                  <p>
                    The mountain's reputation was earned through numerous early attempts that ended in tragedy, but modern climbing techniques and safety protocols have made successful ascents achievable for properly prepared expeditions.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  What Makes This Special
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Mountain className="h-5 w-5 mr-2 text-accent" />
                        Historic Challenge
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        The legendary "Killer Mountain" with the world's largest mountain face
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Shield className="h-5 w-5 mr-2 text-accent" />
                        Expert Guidance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Professional expedition management with modern safety protocols
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-heading">
                    Expedition Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-3 text-accent" />
                    <div>
                      <span className="font-medium">Duration:</span>
                      <span className="ml-2 text-muted-foreground">40-45 Days</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 mr-3 text-accent" />
                    <div>
                      <span className="font-medium">Difficulty:</span>
                      <span className="ml-2 text-muted-foreground">Extreme / Professional</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-3 text-accent" />
                    <div>
                      <span className="font-medium">Best Season:</span>
                      <span className="ml-2 text-muted-foreground">June - August</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Mountain className="h-4 w-4 mr-3 text-accent" />
                    <div>
                      <span className="font-medium">Elevation:</span>
                      <span className="ml-2 text-muted-foreground">8,126m</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-3 text-accent" />
                    <div>
                      <span className="font-medium">Location:</span>
                      <span className="ml-2 text-muted-foreground">Pakistan Himalayas</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-3 text-accent" />
                    <div>
                      <span className="font-medium">Group Size:</span>
                      <span className="ml-2 text-muted-foreground">4-6 climbers</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-heading">
                    Prerequisites
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Previous 7000m+ experience</li>
                    <li>• Technical ice climbing skills</li>
                    <li>• High-altitude acclimatization</li>
                    <li>• Excellent physical condition</li>
                    <li>• Mental resilience required</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <Button size="lg" className="w-full" asChild>
                  <Link to="/contact">
                    Inquire About This Expedition
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <Link to="/expeditions">
                    View All Expeditions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NangaParbaExpedition;