import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mountain, Clock, TrendingUp, Calendar, Users, Shield, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const K2Expedition = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/k2-expedition.jpg" 
            alt="K2 Expedition"
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
              K2 Expedition
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              The ultimate prize for mountaineers, K2 is the second-highest peak on Earth and arguably the most challenging.
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
                    Located on the border of Pakistan and China, K2's formidable pyramid shape and extreme weather conditions demand respect, skill, and endurance. This is a true expedition for the experienced climber, requiring proficiency on steep ice and snow, and the mental fortitude to perform at extreme altitudes.
                  </p>
                  <p className="mb-6">
                    The ascent follows a sustained and technical route, typically the Abruzzi Spur, requiring the establishment of multiple high camps. Every aspect of this expedition demands the highest level of mountaineering skill and physical conditioning.
                  </p>
                  <p>
                    This expedition is reserved for mountaineers with extensive high-altitude experience, including previous successful ascents of 7000m+ peaks. The technical and physical demands, combined with the extreme weather conditions, make K2 one of the most challenging mountains on Earth.
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
                        Elite Challenge
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Second highest peak on Earth with extreme technical difficulty
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Shield className="h-5 w-5 mr-2 text-accent" />
                        Expert Support
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Experienced high-altitude guides and comprehensive safety protocols
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
                      <span className="ml-2 text-muted-foreground">50-60 Days</span>
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
                      <span className="ml-2 text-muted-foreground">8,611m</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-3 text-accent" />
                    <div>
                      <span className="font-medium">Location:</span>
                      <span className="ml-2 text-muted-foreground">Pakistan-China Border</span>
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
                    <li>• Successful 7000m+ peak ascents</li>
                    <li>• Advanced ice climbing skills</li>
                    <li>• Excellent physical condition</li>
                    <li>• High-altitude experience</li>
                    <li>• Mental resilience</li>
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

export default K2Expedition;