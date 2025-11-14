import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Nisargruna Biomethanation Plant O&M",
      client: "MCGM - Deonar Abattoir",
      image: project2,
      metric: "₹27.7M Contract Value",
      description: "Biennial operation and maintenance contract for environmental sustainability",
    },
    {
      title: "Critical Facility Maintenance",
      client: "BARC",
      image: project1,
      metric: "₹12.8M Multi-Facility AMC",
      description: "Comprehensive AMCs for EOT cranes, AC, refrigeration & deep-freezers across TSD, CFB, TSH facilities",
    },
    {
      title: "Animal Inventory Management System",
      client: "MCGM - Deonar Abattoir",
      image: project1,
      metric: "₹7.7M IT Solution",
      description: "Custom software design and commissioning for inventory management and Eid services",
    },
    {
      title: "LED Street Lighting Project",
      client: "MCGM",
      image: project2,
      metric: "Energy-Efficient Infrastructure",
      description: "Supply and installation of LED street lights and high mast lights across Ghatkopar, Chembur, Bhandup wards",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-14">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence across critical government infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 animate-scale-in border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                  {project.client}
                </Badge>

                <div className="absolute bottom-4 left-4 right-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <TrendingUp className="w-4 h-4 text-secondary" />
                    {project.metric}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
