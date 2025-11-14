import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">H</span>
              </div>
              <span className="text-xl font-bold">HiTech Systems</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Leading government contractor specializing in electrical, mechanical, and custom infrastructure solutions since 2007.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/#services" className="text-primary-foreground/80 hover:text-secondary transition-colors">Services</a></li>
              <li><a href="/#projects" className="text-primary-foreground/80 hover:text-secondary transition-colors">Projects</a></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="w-4 h-4 text-secondary" />
                <a href="mailto:hitech_s@msn.com" className="text-sm hover:text-secondary transition-colors">
                  hitech_s@msn.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="w-4 h-4 text-secondary" />
                <div className="text-sm">
                  <div>0251-2328313</div>
                  <div>+91 9819877289</div>
                </div>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                <span className="text-sm">123 & 124, Blossom Commercial Centre, Raheja Complex, Kalyan (W)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} HiTech Systems. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
