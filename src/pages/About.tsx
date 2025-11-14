import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Award, Leaf, TrendingUp, Phone, Mail, MapPin } from "lucide-react";

const About = () => {
  const clients = [
    {
      name: "BARC",
      projects: "AMCs for cranes, AC, refrigeration & UPS systems",
      value: "₹12.8M",
    },
    {
      name: "MCGM",
      projects: "Nisargruna Plant O&M, LED Lighting, IT Systems",
      value: "₹35.4M",
    },
    {
      name: "GeM",
      projects: "Engineering supply orders",
      value: "Multiple Orders",
    },
  ];

  const strengths = [
    {
      icon: Building2,
      title: "Since 2007",
      description: "17+ years of trusted engineering excellence",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled engineers, technicians & IT specialists",
    },
    {
      icon: Award,
      title: "Government Trust",
      description: "Trusted partner to BARC, MCGM & other institutions",
    },
    {
      icon: Leaf,
      title: "Green Focus",
      description: "Biogas plants & energy-efficient solutions",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Corporate Profile</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About HITECH SYSTEMS
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded in 2007, HITECH SYSTEMS is a trusted engineering and technical services 
              company headquartered in Mumbai, Maharashtra. We specialize in delivering innovative, 
              reliable, and sustainable solutions for government, municipal, and institutional clients.
            </p>
          </div>
        </div>
      </section>

      {/* Company Strengths */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-muted-foreground">
              100% Trust | Proven Excellence | Sustainable Solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {strengths.map((strength, index) => (
              <Card
                key={strength.title}
                className="text-center hover:shadow-xl transition-all duration-300 animate-scale-in border-border hover:border-secondary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <strength.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{strength.title}</h3>
                  <p className="text-muted-foreground">{strength.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Core Service Areas
            </h2>
            
            <div className="space-y-8">
              <Card className="border-border hover:border-secondary transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="w-2 h-8 bg-secondary rounded-full" />
                    Engineering & SITC
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Power Systems: UPS, VFD, DBR, LED lighting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Fire Safety: Alarms, hydrants, extinguishers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Green Energy: Biogas & biomethanation plants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>IT & Surveillance: CCTV, AV systems, networking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-secondary transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="w-2 h-8 bg-secondary rounded-full" />
                    Maintenance & Operations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>EOT Cranes & Hoists: AMCs and load testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>HVAC & Utilities: ACs, DG sets, refrigeration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Plant O&M: Pumping & chlorination plants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Nisargruna plant operations & maintenance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-secondary transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="w-2 h-8 bg-secondary rounded-full" />
                    Specialized Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Custom Software: Animal Inventory Management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Civil & Utility Support: Fabrication, signage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Event Solutions: Temporary electrification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Festival support: CCTV & lighting installations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Major Clients */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Major Clients & Projects
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {clients.map((client, index) => (
                <Card
                  key={client.name}
                  className="hover:shadow-xl transition-all duration-300 animate-scale-in border-border hover:border-secondary"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl">{client.name}</CardTitle>
                      <TrendingUp className="w-6 h-6 text-secondary" />
                    </div>
                    <Badge variant="secondary" className="w-fit">{client.value}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{client.projects}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Green Technology */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Green Technology Focus
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              HITECH SYSTEMS is committed to supporting sustainable growth through innovative 
              green technologies and energy-efficient solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <Card className="border-border">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-foreground mb-2">Biogas Plants</h3>
                  <p className="text-muted-foreground text-sm">Design and execution of biogas & biomethanation facilities</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-foreground mb-2">LED Lighting</h3>
                  <p className="text-muted-foreground text-sm">Energy-efficient street lighting solutions across Mumbai</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-foreground mb-2">Green Infrastructure</h3>
                  <p className="text-muted-foreground text-sm">Deployment of sustainable technologies in public projects</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Contact */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Leadership */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-3xl">Leadership & Team</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Proprietor</h3>
                    <p className="text-muted-foreground">Mr. F.A. Patel</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Our Workforce</h3>
                    <p className="text-muted-foreground">
                      A skilled team of engineers, technicians, and IT specialists capable of 
                      delivering complex projects and maintaining long-term service contracts 
                      with efficiency and reliability.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-3xl">Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Corporate Office</h3>
                      <p className="text-muted-foreground">
                        123 & 124, Blossom Commercial Centre<br />
                        Raheja Complex, Kalyan (W)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                    <div>
                      <p className="text-muted-foreground">0251-2328313</p>
                      <p className="text-muted-foreground">+91 9819877289</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                    <a href="mailto:hitech_s@msn.com" className="text-muted-foreground hover:text-secondary transition-colors">
                      hitech_s@msn.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
