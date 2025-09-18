import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpeditionCarousel from "@/components/ExpeditionCarousel";
import TrekkingCarousel from "@/components/TrekkingCarousel";
import ToursCarousel from "@/components/ToursCarousel";
import JeepSafarisCarousel from "@/components/JeepSafarisCarousel";
import { 
  Shield, 
  Users, 
  Settings, 
  CheckCircle,
  ArrowRight,
  Star,
  Quote
} from "lucide-react";

// Import hero image
import heroImage from "@/assets/hero-k2-karakoram.jpg";

const Index = () => {
  const whyChooseUs = [
    {
      icon: Shield,
      title: "Unrivaled Safety Standards",
      description: "Your well-being is our highest priority. We employ certified guides, state-of-the-art equipment, and rigorous safety protocols."
    },
    {
      icon: Users,
      title: "Deep Local Knowledge",
      description: "Our team consists of local experts who possess an intimate understanding of the terrain, climate, and culture, ensuring a rich and authentic experience."
    },
    {
      icon: Settings,
      title: "Bespoke Itineraries",
      description: "Every journey is unique. We work closely with you to tailor expeditions and tours that match your skill level, goals, and interests."
    },
    {
      icon: CheckCircle,
      title: "End-to-End Logistics",
      description: "From permits to provisions, we manage every detail with precision, allowing you to focus purely on the adventure ahead."
    }
  ];

  const testimonials = [
    {
      quote: "An impeccably organized expedition. The Adventure Baltoro team's expertise and professionalism were second to none. A truly five-star experience.",
      author: "James Richardson",
      location: "United Kingdom"
    },
    {
      quote: "The K2 Base Camp trek was the adventure of a lifetime. The guides were incredible, and I felt safe and supported every step of the way.",
      author: "Maria Santos",
      location: "Spain"
    },
    {
      quote: "Adventure Baltoro made my dream of reaching the summit of Spantik Peak a reality. Their attention to detail and local knowledge is unmatched.",
      author: "David Chen",
      location: "Canada"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Experience the Majesty of the
            <span className="text-gradient-accent block mt-2">Karakoram</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Adventure Baltoro offers expertly guided expeditions and treks to Pakistan's 
            legendary peaks for the discerning adventurer.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="hero" size="hero" asChild>
              <Link to="/expeditions">
                Discover Our Journeys
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="hero" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-30 bg-background pt-[3px]">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">
            The Summit of Adventure, 
            <span className="text-gradient-accent block mt-2">Grounded in Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Adventure Baltoro, we are more than a tour operator; we are your trusted partner 
            in exploring the raw beauty of Pakistan. With decades of combined experience, our elite 
            team of local guides and logistics experts provides unparalleled safety, deep cultural 
            insight, and meticulously planned itineraries. We transform challenging expeditions into 
            seamless, life-changing journeys.
          </p>
        </div>
      </section>

      {/* Expeditions Carousel */}
      <ExpeditionCarousel />

      {/* Trekking Carousel */}
      <TrekkingCarousel />

      {/* Jeep Safaris Carousel */}
      <JeepSafarisCarousel />

      {/* Cultural Tours Carousel */}
      <ToursCarousel />

      {/* Why Choose Us Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              The Adventure Baltoro 
              <span className="text-gradient-accent block mt-2">Difference</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What sets us apart in delivering world-class mountain adventures with uncompromising standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-6 group-hover:shadow-glow transition-all duration-300">
                  <item.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Trusted by Adventurers 
              <span className="text-accent block mt-2">Worldwide</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our fellow adventurers have to say 
              about their transformative journeys with Adventure Baltoro.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-background/20 transition-all duration-300">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-accent mb-4" />
                  <p className="text-primary-foreground/90 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="flex space-x-1 mr-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-accent fill-current" />
                      ))}
                    </div>
                    <div>
                      <p className="text-primary-foreground font-semibold">
                        {testimonial.author}
                      </p>
                      <p className="text-primary-foreground/60 text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Begin Your Journey
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
