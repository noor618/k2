import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Clock, TrendingUp, Calendar, Users, Shield, Mountain } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const K2BaseCampTrek = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/gondogoro-trek.jpg" 
            alt="K2 Base Camp Trek"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative container mx-auto px-6 lg:px-8">
          <Link to="/trekking" className="inline-flex items-center text-primary-foreground/80 hover:text-accent transition-colors mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Trekking
          </Link>
          
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-4">
              Strenuous
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              K2 Base Camp Trek
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              This world-famous trek takes you into the heart of the Karakoram to the base of K2, the "Throne Room of Mountain Gods."
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
                  Trek Overview
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-6">
                    This world-famous trek takes you into the heart of the Karakoram to the base of K2. The route follows the Braldu River valley before ascending the vast Baltoro Glacier. You will walk through an amphitheater of the world's highest and most dramatic mountains, including Paiju Peak, Trango Towers, Masherbrum, and Broad Peak.
                  </p>
                  <p className="mb-6">
                    The culmination is reaching Concordia, aptly named the "Throne Room of the Mountain Gods," where four massive glaciers converge surrounded by more 8000-meter peaks than anywhere else on Earth. From here, the trail continues to K2 Base Camp for an intimate encounter with the world's second-highest mountain.
                  </p>
                  <p>
                    This trek is considered one of the world's greatest mountain journeys, offering unparalleled access to the planet's most spectacular high-altitude scenery. The scale and grandeur of the landscape is simply beyond description.
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
                        Concordia
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        The "Throne Room of Mountain Gods" with 360° mountain views
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <MapPin className="h-5 w-5 mr-2 text-accent" />
                        Baltoro Glacier
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Trek on one of the world's longest non-polar glaciers
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Shield className="h-5 w-5 mr-2 text-accent" />
                        K2 Base Camp
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Stand at the base of the world's second highest mountain
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Users className="h-5 w-5 mr-2 text-accent" />
                        Trango Towers
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Marvel at the world's most dramatic granite spires
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
                    Trek Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-3 text-accent" />
                    <div>
                      <span className="font-medium">Duration:</span>
                      <span className="ml-2 text-muted-foreground">18-21 Days</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 mr-3 text-accent" />
                    <div>
                      <span className="font-medium">Difficulty:</span>
                      <span className="ml-2 text-muted-foreground">Strenuous</span>
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
                      <span className="font-medium">Max Elevation:</span>
                      <span className="ml-2 text-muted-foreground">5,200m</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-3 text-accent" />
                    <div>
                      <span className="font-medium">Location:</span>
                      <span className="ml-2 text-muted-foreground">Baltoro Glacier, Karakoram</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-3 text-accent" />
                    <div>
                      <span className="font-medium">Group Size:</span>
                      <span className="ml-2 text-muted-foreground">6-12 trekkers</span>
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
                    <li>• Excellent physical fitness</li>
                    <li>• Previous high-altitude experience</li>
                    <li>• Multi-day trekking experience</li>
                    <li>• Mental resilience</li>
                    <li>• Comfortable with camping</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <Button size="lg" className="w-full" asChild>
                  <Link to="/contact">
                    Inquire About This Trek
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <Link to="/trekking">
                    View All Treks
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

export default K2BaseCampTrek;