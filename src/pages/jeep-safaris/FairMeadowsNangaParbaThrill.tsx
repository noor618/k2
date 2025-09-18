import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Car, Calendar, MapPin, Users, Star, AlertTriangle } from "lucide-react";
import fairyMeadowsImage from "/src/assets/fairy-meadows-jeep.jpg";

const FairMeadowsNangaParbaThrill = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src={fairyMeadowsImage} 
          alt="Fairy Meadows & Nanga Parbat Thrill Ride"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Fairy Meadows & Nanga Parbat Thrill Ride
            </h1>
            <p className="text-xl md:text-2xl font-medium">
              Edge of the World Journey
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center bg-card border-0">
              <CardContent className="pt-6">
                <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="font-semibold">5-7 Days</p>
                <p className="text-sm text-muted-foreground">Duration</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-card border-0">
              <CardContent className="pt-6">
                <Car className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="font-semibold">Moderate</p>
                <p className="text-sm text-muted-foreground">Difficulty</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-card border-0">
              <CardContent className="pt-6">
                <Calendar className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="font-semibold">May - October</p>
                <p className="text-sm text-muted-foreground">Best Season</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-card border-0">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="font-semibold">2-6 People</p>
                <p className="text-sm text-muted-foreground">Group Size</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                The Most Thrilling Jeep Track in Pakistan
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Experience the ultimate adrenaline rush on Pakistan's most famous and challenging jeep track to Fairy Meadows. This heart-stopping journey along narrow cliff-edge roads leads to one of the most spectacular viewpoints of Nanga Parbat, the world's ninth-highest mountain and the "Killer Mountain" of mountaineering legend.
              </p>
            </div>

            <Card className="bg-destructive/10 border border-destructive/20 mb-12">
              <CardHeader>
                <CardTitle className="text-xl font-heading text-destructive flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Adventure Warning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This is one of the world's most dangerous jeep tracks, with narrow roads carved into sheer cliff faces. Only experienced drivers and properly maintained vehicles should attempt this journey. Weather conditions can change rapidly, affecting road conditions.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <Card className="bg-card border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-heading">
                    <Star className="h-5 w-5 text-accent inline mr-2" />
                    Safari Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-accent mr-2 shrink-0" />
                    <span className="text-sm">Navigate the infamous cliff-edge track</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-accent mr-2 shrink-0" />
                    <span className="text-sm">Spectacular views of Nanga Parbat</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-accent mr-2 shrink-0" />
                    <span className="text-sm">Camp in pristine Fairy Meadows</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-accent mr-2 shrink-0" />
                    <span className="text-sm">Visit traditional Diamir villages</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-accent mr-2 shrink-0" />
                    <span className="text-sm">Experience extreme mountain adventure</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-heading">
                    <Car className="h-5 w-5 text-accent inline mr-2" />
                    What's Included
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>✓ Expert local driver and guide</p>
                  <p>✓ Specially modified 4x4 vehicle</p>
                  <p>✓ Camping equipment and meals</p>
                  <p>✓ Safety equipment and first aid</p>
                  <p>✓ Porter services for camp setup</p>
                  <p>✓ Emergency evacuation insurance</p>
                </CardContent>
              </Card>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Detailed Itinerary
              </h3>
              <div className="space-y-6">
                <Card className="bg-card border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">Day 1: Raikot Bridge to Tato</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Begin the thrilling jeep ride from Raikot Bridge, navigating the narrow track carved into the cliff face. The 12-kilometer journey to Tato village takes 2-3 hours due to the challenging terrain and stunning views that demand frequent stops.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">Days 2-3: Fairy Meadows Base Camp</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Trek from Tato to Fairy Meadows (3 hours), where you'll be rewarded with breathtaking views of Nanga Parbat's massive Diamir Face. Set up camp in this pristine alpine meadow and enjoy multiple days of photography, relaxation, and mountain appreciation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">Days 4-5: Return Journey & Cultural Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Return via the same thrilling route, with opportunities to visit local villages and experience the culture of the Diamir region. Weather permitting, enjoy additional viewpoints and photography opportunities on the descent.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="bg-accent/10 border border-accent/20 mb-12">
              <CardHeader>
                <CardTitle className="text-xl font-heading text-accent">
                  The Legend of Nanga Parbat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Known as the "Killer Mountain," Nanga Parbat claimed many lives before its first successful ascent in 1953. At 8,126 meters, it's the world's ninth-highest peak and offers one of the most dramatic mountain faces on Earth. From Fairy Meadows, you'll have an unobstructed view of this legendary summit.
                </p>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button variant="adventure" size="lg" className="px-8 py-3">
                Book This Thrill Ride
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Medical clearance and signed waiver required
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FairMeadowsNangaParbaThrill;