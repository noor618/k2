import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mountain, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gradient-hero">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="bg-gradient-accent p-4 rounded-full inline-block mb-8">
            <Mountain className="h-16 w-16 text-accent-foreground" />
          </div>
          <h1 className="text-6xl font-heading font-bold text-primary-foreground mb-4">404</h1>
          <h2 className="text-2xl font-heading font-semibold text-primary-foreground mb-4">
            Peak Not Found
          </h2>
          <p className="text-primary-foreground/80 mb-8 leading-relaxed">
            It seems you've wandered off the trail. Let's get you back to base camp.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Return to Base Camp
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
