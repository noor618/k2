import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send
} from "lucide-react";
import HCaptcha from "@hcaptcha/react-hcaptcha"; // ✅ NEW import

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [hasKids, setHasKids] = React.useState<string>("no");
  const [kidsCount, setKidsCount] = React.useState<string>("");
  const [captchaToken, setCaptchaToken] = React.useState<string>(""); // ✅ NEW state

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!captchaToken) {
      setResult("Please complete the captcha before submitting.");
      return;
    }

    setResult("Sending...");
    const formData = new FormData(event.currentTarget);

    // ✅ Add Web3Forms Access Key
    formData.append("access_key", "724f14aa-142f-4e69-ba78-345b7a1ba9e2");

    // ✅ Append kids info
    formData.append("kidsUnder16", hasKids);
    if (hasKids === "yes" && kidsCount) {
      formData.append("kidsCount", kidsCount);
    }

    // ✅ Append captcha token
  

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      window.location.href = "/thank-you"; // ✅ redirect after success
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  // ✅ Contact Info Data
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content: "Skardu, Gilgit-Baltistan, Pakistan",
      description: "Located in the heart of the Karakoram"
    },
    {
      icon: Phone,
      title: "Phone / WhatsApp",
      content: [
        { number: "+92-123-456-7890" },
        { number: "+92-987-654-3210" },
        { number: "+92-555-666-7777" }
      ],
      description: "Tap a number to call or WhatsApp us"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@adventurebaltoro.com",
      description: "We respond within 24 hours"
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "9:00 AM - 6:00 PM PKT",
      description: "Monday to Saturday"
    }
  ];

  const expeditionTypes = [
    "8000m Peak Expedition",
    "7000m Peak Expedition",
    "Technical Climbing",
    "Base Camp Trek",
    "Cultural Tour",
    "Jeep Safari",
    "Custom Itinerary"
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero">
        <div className="absolute inset-0 bg-primary/20" />
        <div className="relative container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6">
            Contact Adventure Baltoro
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Ready to embark on your next great adventure? Get in touch with our expert team
            to start planning your dream expedition to Pakistan's magnificent peaks.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Plan Your Expedition
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our expedition planning team will get back to you
                within 24 hours with a personalized proposal.
              </p>

              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" placeholder="John" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" placeholder="Smith" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    pattern="[0-9+ -]*"
                    placeholder="+1-555-123-4567"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" name="country" placeholder="United States" />
                </div>

                <div>
                  <Label htmlFor="expeditionType">Type of Experience</Label>
                  <select
                    id="expeditionType"
                    name="expeditionType"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                  >
                    <option value="">Select your preferred experience</option>
                    {expeditionTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="groupSize">Group Size</Label>
                    <Input
                      id="groupSize"
                      name="groupSize"
                      type="number"
                      min="1"
                      placeholder="4"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferredDates">Preferred Dates</Label>
                    <Input id="preferredDates" name="preferredDates" placeholder="June 2024" />
                  </div>
                </div>

                {/* Kids Under 16 Section */}
                <div>
                  <Label>Any kids under 16?</Label>
                  <div className="flex items-center space-x-6 mt-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="kidsUnder16"
                        value="no"
                        checked={hasKids === "no"}
                        onChange={() => {
                          setHasKids("no");
                          setKidsCount("");
                        }}
                      />
                      <span>No</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="kidsUnder16"
                        value="yes"
                        checked={hasKids === "yes"}
                        onChange={() => setHasKids("yes")}
                      />
                      <span>Yes</span>
                    </label>
                  </div>
                </div>

                {hasKids === "yes" && (
                  <div>
                    <Label htmlFor="kidsCount">How many kids under 16?</Label>
                    <Input
                      id="kidsCount"
                      name="kidsCount"
                      type="number"
                      min="1"
                      placeholder="Enter number of kids"
                      required={hasKids === "yes"}
                      value={kidsCount}
                      onChange={(e) => setKidsCount(e.target.value)}
                    />
                  </div>
                )}

                <div>
                  <Label htmlFor="experience">Previous Experience</Label>
                  <Textarea
                    id="experience"
                    name="experience"
                    placeholder="Tell us about your mountaineering or trekking experience..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Any specific goals, dietary requirements, or questions you'd like to share..."
                    rows={4}
                  />
                </div>

                {/* ✅ hCaptcha Widget */}
                <div className="mt-4">
                  <HCaptcha
                    sitekey="b3f43d36-f2fe-47ae-9576-edea37588f74" // ✅ Your sitekey here
                    onVerify={(token) => setCaptchaToken(token)}
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full" type="submit">
                  <Send className="mr-2 h-4 w-4" />
                  Send Expedition Inquiry
                </Button>
              </form>
              <p className="mt-2 text-sm text-muted-foreground">{result}</p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Our experienced team is here to help you plan the perfect mountain adventure.
                Contact us through any of the methods below.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-accent p-3 rounded-lg">
                          <info.icon className="h-6 w-6 text-accent-foreground" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>

                          {/* If array, show clickable links */}
                          {Array.isArray(info.content) ? (
                            info.content.map((item, idx) => (
                              <p className="text-accent font-medium mb-1" key={idx}>
                                <a
                                  href={`https://wa.me/${item.number.replace(/\D/g, "")}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:underline"
                                >
                                  {item.number}
                                </a>
                              </p>
                            ))
                          ) : (
                            <p className="text-accent font-medium mb-1">
                              {info.content}
                            </p>
                          )}

                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
