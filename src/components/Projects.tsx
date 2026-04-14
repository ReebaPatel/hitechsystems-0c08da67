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
  <div className="container mx-auto px-6 sm:px-10 lg:px-14">

    {/* Header */}
    <div className="text-center mb-14 animate-fade-in">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
        Featured Projects
      </h2>
      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
        Delivering excellence across critical government infrastructure
      </p>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
      {projects.map((project, index) => (
        <Card
          key={project.title}
          className="group overflow-hidden hover:shadow-2xl transition-all duration-500 animate-scale-in border-border"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative h-52 sm:h-64 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t 
              from-primary/90 to-transparent opacity-0 
              group-hover:opacity-100 transition-opacity duration-300" 
            />

            {/* Badge */}
            <Badge className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-secondary text-secondary-foreground text-[10px] sm:text-xs px-2 py-0.5 sm:px-3 sm:py-1">
              {project.client}
            </Badge>

            {/* Metric */}
            <div className="absolute bottom-3 sm:bottom-4 left-3 right-3 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
                <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary" />
                {project.metric}
              </div>
            </div>
          </div>

          {/* Content */}
          <CardContent className="p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
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
