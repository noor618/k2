import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mountain, Clock, TrendingUp, Calendar, Users, Shield, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SpantikPeakExpedition = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/spantik-peak.jpg" 
            alt="Spantik Peak Expedition"
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
            <Badge variant="secondary" className="mb-4">
              High / Technical
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Spantik Peak Expedition
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Spantik, also known as the Golden Peak, stands at 7,027 meters and is renowned for its spectacular beauty and relative accessibility.
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
                    Spantik, also known as the Golden Peak, stands at 7,027 meters and is renowned for its spectacular beauty and relative accessibility, making it an ideal first 7000-meter peak. The climb is via the southeast ridge, a long snow slope with some technical sections that offers a perfect training ground for higher altitudes.
                  </p>
                  <p className="mb-6">
                    The approach through the picturesque Nagar Valley adds to its appeal, offering cultural experiences alongside the mountaineering challenge. The mountain's golden appearance at sunrise and sunset has earned it its poetic name.
                  </p>
                  <p>
                    This expedition provides an excellent stepping stone for climbers aspiring to tackle 8000-meter peaks, offering genuine high-altitude experience in a relatively controlled environment with spectacular rewards.
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
                        Perfect Training Peak
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Ideal first 7000m peak with manageable technical difficulty
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Shield className="h-5 w-5 mr-2 text-accent" />
                        Stunning Beauty
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        The "Golden Peak" offers spectacular photographic opportunities
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
                      <span className="ml-2 text-muted-foreground">35-40 Days</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 mr-3 text-accent" />
                    <div>
                      <span className="font-medium">Difficulty:</span>
                      <span className="ml-2 text-muted-foreground">High / Technical</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-3 text-accent" />
                    <div>
                      <span className="font-medium">Best Season:</span>
                      <span className="ml-2 text-muted-foreground">June - September</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Mountain className="h-4 w-4 mr-3 text-accent" />
                    <div>
                      <span className="font-medium">Elevation:</span>
                      <span className="ml-2 text-muted-foreground">7,027m</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-3 text-accent" />
                    <div>
                      <span className="font-medium">Location:</span>
                      <span className="ml-2 text-muted-foreground">Nagar Valley, Karakoram</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-3 text-accent" />
                    <div>
                      <span className="font-medium">Group Size:</span>
                      <span className="ml-2 text-muted-foreground">4-8 climbers</span>
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
                    <li>• Some high-altitude experience</li>
                    <li>• Basic ice climbing skills</li>
                    <li>• Good physical fitness</li>
                    <li>• Mountaineering experience</li>
                    <li>• Positive mental attitude</li>
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

export default SpantikPeakExpedition;