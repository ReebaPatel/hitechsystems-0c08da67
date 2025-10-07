import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Settings, Wrench, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Electrical Solutions",
      description: "Complete electrical installations, maintenance, and power distribution systems for government facilities and industrial complexes.",
      features: ["Power Distribution", "Installation & Maintenance", "Emergency Systems"],
    },
    {
      icon: Settings,
      title: "Mechanical Services",
      description: "Industrial machinery, HVAC systems, and process equipment installation with precision engineering and quality assurance.",
      features: ["HVAC Systems", "Industrial Machinery", "Process Equipment"],
    },
    {
      icon: Wrench,
      title: "Custom Projects",
      description: "Tailored infrastructure solutions designed specifically for government requirements with compliance and security in mind.",
      features: ["Turnkey Solutions", "Compliance Ready", "24/7 Support"],
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
