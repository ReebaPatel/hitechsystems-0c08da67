import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import QuoteForm from "./QuoteForm";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItems = [
    { name: "Home", href: "/", type: "route" },
    { name: "Services", href: "#services", type: "hash" },
    { name: "Projects", href: "#projects", type: "hash" },
    { name: "About", href: "/about", type: "route" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-2 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-primary-foreground font-bold text-xl">H</span>
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">Hitech Systems</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              item.type === "route" ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground font-medium text-[15px] transition-colors relative group py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={isHome ? item.href : `/${item.href}`}
                  className="text-muted-foreground hover:text-foreground font-medium text-[15px] transition-colors relative group py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
                </a>
              )
            ))}
            <QuoteForm>
              <Button variant="secondary" size="default" className="ml-4">
                Get Quote
              </Button>
            </QuoteForm>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              item.type === "route" ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block py-3 text-muted-foreground hover:text-foreground font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={isHome ? item.href : `/${item.href}`}
                  className="block py-3 text-muted-foreground hover:text-foreground font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              )
            ))}
            <div className="pt-4">
              <QuoteForm>
                <Button variant="secondary" size="default" className="w-full">
                  Get Quote
                </Button>
              </QuoteForm>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
