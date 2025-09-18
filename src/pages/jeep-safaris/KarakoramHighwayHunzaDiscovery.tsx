import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Car, Calendar, MapPin, Users, Star } from "lucide-react";
import karakoramHighwayImage from "/src/assets/karakoram-highway-jeep.jpg";

const KarakoramHighwayHunzaDiscovery = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src={karakoramHighwayImage} 
          alt="Karakoram Highway & Hunza Discovery Safari"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Karakoram Highway & Hunza Discovery
            </h1>
            <p className="text-xl md:text-2xl font-medium">
              The Ultimate Road Adventure
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
                <p className="font-semibold">8-12 Days</p>
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
                <p className="font-semibold">April - November</p>
                <p className="text-sm text-muted-foreground">Best Season</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-card border-0">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="font-semibold">2-8 People</p>
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
                Journey Along the Eighth Wonder of the World
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Experience the legendary Karakoram Highway, often called the "Eighth Wonder of the World," on this epic jeep safari through some of the most spectacular mountain scenery on Earth. This adventure combines the thrill of off-road driving with cultural immersion in the ancient Hunza Valley, where time seems to stand still amid towering peaks and glacier-fed rivers.
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
                    <span className="text-sm">Drive the highest paved international road</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-accent mr-2 shrink-0" />
                    <span className="text-sm">Explore ancient Hunza Valley culture</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-accent mr-2 shrink-0" />
                    <span className="text-sm">Visit historic Altit and Baltit Forts</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-accent mr-2 shrink-0" />
                    <span className="text-sm">Experience Hunza's famous hospitality</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-accent mr-2 shrink-0" />
                    <span className="text-sm">Navigate through dramatic mountain passes</span>
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
                  <p>✓ Professional 4x4 vehicle and driver</p>
                  <p>✓ Experienced local guide</p>
                  <p>✓ Accommodation in guesthouses</p>
                  <p>✓ All meals during the safari</p>
                  <p>✓ Cultural site entry fees</p>
                  <p>✓ Emergency support and communication</p>
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
                    <CardTitle className="text-lg">Days 1-2: Islamabad to Hunza</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Depart Islamabad and begin the journey north along the Karakoram Highway. Stop at Naran and experience the dramatic landscape changes as you enter the high mountains. Arrive in Karimabad, the heart of Hunza Valley.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">Days 3-5: Hunza Valley Exploration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Explore the ancient Altit and Baltit Forts, visit traditional villages, and experience Hunza's unique culture. Take day trips to Khunjerab Pass (weather permitting) and enjoy spectacular views of Rakaposhi and other 7,000m peaks.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">Days 6-8: Skardu Extension (Optional)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Continue the adventure with an optional extension to Skardu via the dramatic mountain roads. Experience the contrast between Hunza's green valleys and Skardu's stark, high-altitude desert landscape.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-center">
              <Button variant="adventure" size="lg" className="px-8 py-3">
                Book This Safari
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Contact us for custom itineraries and group bookings
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KarakoramHighwayHunzaDiscovery;