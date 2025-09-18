import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Car, Calendar, MapPin, Users, Star } from "lucide-react";
import deosaiPlainsImage from "/src/assets/deosai-plains-safari.jpg";

const SkarduDeosaiPlainsSafari = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src={deosaiPlainsImage} 
          alt="Skardu & Deosai Plains Safari"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Skardu & Deosai Plains Safari
            </h1>
            <p className="text-xl md:text-2xl font-medium">
              Land of Giants Expedition
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
                <p className="font-semibold">7-10 Days</p>
                <p className="text-sm text-muted-foreground">Duration</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-card border-0">
              <CardContent className="pt-6">
                <Car className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="font-semibold">Easy</p>
                <p className="text-sm text-muted-foreground">Difficulty</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-card border-0">
              <CardContent className="pt-6">
                <Calendar className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="font-semibold">July - September</p>
                <p className="text-sm text-muted-foreground">Best Season</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-card border-0">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="font-semibold">2-12 People</p>
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
                Explore the Land of Giants
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Journey to the mystical Deosai Plains, known as the "Land of Giants," on this spectacular jeep safari that showcases one of the world's highest plateaus. At over 4,000 meters above sea level, Deosai is a vast wilderness of rolling hills, alpine flowers, and crystal-clear streams, home to the endangered Himalayan brown bear and countless other wildlife species.
              </p>
            </div>

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
                    <span className="text-sm">Cross the vast Deosai Plateau</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-accent mr-2 shrink-0" />
                    <span className="text-sm">Wildlife spotting including brown bears</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-accent mr-2 shrink-0" />
                    <span className="text-sm">Visit stunning Sheosar Lake</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-accent mr-2 shrink-0" />
                    <span className="text-sm">Explore historic Skardu town</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-accent mr-2 shrink-0" />
                    <span className="text-sm">Experience nomadic culture</span>
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
                  <p>✓ Specialized high-altitude 4x4 vehicle</p>
                  <p>✓ Expert wildlife guide</p>
                  <p>✓ Camping equipment and tents</p>
                  <p>✓ All meals and refreshments</p>
                  <p>✓ National park permits</p>
                  <p>✓ Photography guidance</p>
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
                    <CardTitle className="text-lg">Days 1-2: Skardu Arrival & Acclimatization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Arrive in Skardu and explore this historic town nestled among towering peaks. Visit Skardu Fort, local markets, and prepare for the high-altitude adventure ahead. Enjoy views of the Indus River and surrounding mountains.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">Days 3-5: Deosai Plains Expedition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Drive into the heart of Deosai Plains, setting up camp in this pristine wilderness. Explore the plateau, visit Sheosar Lake, and search for wildlife including the elusive Himalayan brown bear. Experience the silence and grandeur of this high-altitude desert.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">Days 6-7: Photography & Return</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Dedicated photography sessions during golden hours, capturing the unique landscape and wildlife. Gradual return to Skardu with stops at scenic viewpoints and traditional villages along the way.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="bg-accent/10 border border-accent/20 mb-12">
              <CardHeader>
                <CardTitle className="text-xl font-heading text-accent">
                  Wildlife Watching Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The best time for wildlife spotting is early morning and late afternoon. Deosai is home to over 124 bird species, Himalayan brown bears, ibex, and countless smaller mammals. Our expert guides will help you spot and photograph these magnificent creatures in their natural habitat.
                </p>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button variant="adventure" size="lg" className="px-8 py-3">
                Book This Safari
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Special wildlife photography packages available
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkarduDeosaiPlainsSafari;