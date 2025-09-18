import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Shield, 
  Users, 
  Award, 
  Globe,
  Mountain,
  Heart,
  ArrowRight,
  Star
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Our unwavering commitment to safety is the foundation of every expedition. We employ the highest safety standards and protocols."
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "Our team consists of local experts who possess generations of mountain knowledge and cultural understanding."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, from planning to execution to post-expedition support."
    },
    {
      icon: Globe,
      title: "Responsible Tourism",
      description: "We are committed to sustainable tourism practices that benefit local communities and preserve mountain environments."
    }
  ];

  const team = [
    {
      name: "Ahmad Hassan",
      role: "Founder & Lead Guide",
      experience: "25+ years",
      description: "Born in Skardu, Ahmad has led over 200 expeditions to peaks above 7000m, including multiple successful K2 summits."
    },
    {
      name: "Fatima Noor",
      role: "Operations Director",
      experience: "15+ years",
      description: "Expert in expedition logistics and cultural tours, Fatima ensures every detail is perfectly orchestrated."
    },
    {
      name: "Karim Baltoro",
      role: "Senior Mountain Guide",
      experience: "20+ years",
      description: "Specialist in technical climbing and glacier travel, with extensive experience on all major Karakoram peaks."
    }
  ];

  const achievements = [
    "200+ Successful Expeditions",
    "98% Client Satisfaction Rate",
    "Zero Major Incidents",
    "50+ International Awards",
    "Local Community Partner",
    "Environmental Stewardship"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero">
        <div className="absolute inset-0 bg-primary/20" />
        <div className="relative container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6">
            About Adventure Baltoro
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Born from the peaks and valleys of Pakistan, we are your trusted companions 
            in exploring the world's most magnificent mountain landscapes.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>
                Adventure Baltoro was founded in 1998 by a group of passionate local mountaineers 
                who dreamed of sharing Pakistan's incredible mountain heritage with the world. 
                What began as a small guiding operation in Skardu has grown into Pakistan's 
                premier expedition company, trusted by adventurers from over 50 countries.
              </p>
              <p>
                Our name "Baltoro" comes from the legendary Baltoro Glacier, the gateway to 
                the world's greatest concentration of high peaks. Like the glacier itself, 
                we serve as a pathway for adventurers to reach their highest aspirations 
                while respecting the magnificent environment that surrounds us.
              </p>
              <p>
                Over more than two decades, we have maintained our core mission: to provide 
                safe, authentic, and transformative mountain experiences while supporting 
                local communities and preserving the pristine wilderness that makes Pakistan 
                truly special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every expedition and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-6 group-hover:shadow-glow transition-all duration-300">
                  <value.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals who make your mountain dreams a reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-premium transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Mountain className="h-12 w-12 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.experience}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Our Achievements
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              A testament to our commitment to excellence and safety in mountain guiding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-background/10 backdrop-blur-sm rounded-lg p-6 text-center border border-primary-foreground/20">
                <Star className="h-8 w-8 text-accent mx-auto mb-4" />
                <p className="text-primary-foreground font-semibold text-lg">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Ready to Begin Your Adventure?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join us in exploring Pakistan's magnificent mountains. Let our expertise 
            guide you to experiences that will last a lifetime.
          </p>
          <Button variant="hero" size="hero" asChild>
            <a href="/contact">
              Start Planning Your Expedition
              <ArrowRight className="ml-2" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;