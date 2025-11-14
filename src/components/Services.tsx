import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Settings, Wrench, ArrowRight, Flame, Wind, Code } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Engineering & SITC",
      description: "Supply, Installation, Testing, and Commissioning of power systems, fire safety, green energy, and IT infrastructure.",
      features: ["UPS, VFD, DBR & LED Lighting", "Fire Safety Systems", "Biogas & Biomethanation Plants", "CCTV & AV Systems"],
    },
    {
      icon: Settings,
      title: "Maintenance & Operations",
      description: "Comprehensive AMCs and operations management for cranes, HVAC systems, and environmental plants.",
      features: ["EOT Cranes & Hoists AMC", "HVAC & DG Sets", "Plant O&M Services", "Load Testing & Commissioning"],
    },
    {
      icon: Code,
      title: "Specialized Services",
      description: "Custom software solutions, civil support, and event infrastructure for government and institutional clients.",
      features: ["Animal Inventory Management", "Civil & Utility Support", "Event Solutions", "Custom IT Systems"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive infrastructure solutions backed by decades of expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 animate-scale-in border-border hover:border-secondary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full group/btn">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
