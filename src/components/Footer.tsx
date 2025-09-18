import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              {/* Logo without yellow border */}
              <img
                src="/logo.jpg"
                alt="Adventure Baltoro"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-heading font-bold">
                  Adventure Baltoro
                </h3>
                <p className="text-xs text-primary-foreground/80 font-medium tracking-wide">
                  Pakistan Expeditions
                </p>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Your trusted partner in exploring Pakistan's majestic mountains.
              We transform challenging expeditions into seamless, life-changing journeys.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/expeditions" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Expeditions
                </Link>
              </li>
              <li>
                <Link to="/trekking" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Trekking
                </Link>
              </li>
              <li>
                <Link to="/cultural-tours" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Cultural Tours
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Responsible Travel
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <a
                  href="mailto:info@adventurebaltoro.com"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  info@adventurebaltoro.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <a
                  href="tel:+92-123-456-7890"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +92-123-456-7890
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <p className="text-sm text-primary-foreground/80">
                  Skardu, Gilgit-Baltistan
                  <br />
                  Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Adventure Baltoro | All Rights Reserved
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
