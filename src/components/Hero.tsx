import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import QuoteForm from "./QuoteForm";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-[120px] sm:pt-[140px] lg:pt-[160px]"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern Infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        <div className="max-w-4xl mx-auto sm:ml-0">


          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-slide-in leading-tight">
            100% Trusted<br />
            <span className="text-secondary">Infrastructure Solutions</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-in">
            Partnering with Government and Industry to deliver cutting-edge electrical, mechanical, and custom infrastructure projects
          </p>
          <div className=" inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Shield className="w-4 h-3 text-secondary" />
            <span className="text-sm font-medium text-primary-foreground">Trusted Government Contractor Since 2007</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 mb-12 animate-fade-in">
            <QuoteForm>
              <Button variant="hero" size="sm" className="group">
                Get a Quote
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </QuoteForm>
            <Button
              variant="outline"
              size="sm"
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mb-20">
            <div className="text-center p-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20 animate-scale-in">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">18+</div>
              <div className="text-sm text-primary-foreground/80">Years Excellence</div>
            </div>
            <div className="text-center p-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">10+</div>
              <div className="text-sm text-primary-foreground/80">Govt Partners</div>
            </div>
            <div className="text-center p-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">10+</div>
              <div className="text-sm text-primary-foreground/80">Dealerships</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" /> */}
    </section>
  );
};

export default Hero;
