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
  <div className="container mx-auto px-6 sm:px-10 lg:px-14">

    {/* Header */}
    <div className="text-center mb-16 animate-fade-in">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
        Our Services
      </h2>
      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
        Comprehensive infrastructure solutions backed by decades of expertise
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {services.map((service, index) => (
        <Card
          key={service.title}
          className="group h-full hover:shadow-xl transition-all duration-300 animate-scale-in border-border hover:border-secondary"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardHeader>
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
              <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-secondary" />
            </div>

            <CardTitle className="text-xl sm:text-2xl mb-2">
              {service.title}
            </CardTitle>

            <CardDescription className="text-sm sm:text-base">
              {service.description}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <ul className="space-y-2 mb-6">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center text-xs sm:text-sm text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

  );
};

export default Services;
