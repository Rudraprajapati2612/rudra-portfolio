import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "SwapLiT – Decentralized Exchange (DEX)",
      description:
        "Uniswap-style AMM DEX supporting multi-hop routing, liquidity management, and advanced DeFi analytics. Built with enterprise-grade architecture for optimal performance.",
      techStack: ["Solidity", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Ethers.js", "React"],
      github: "https://github.com/Rudraprajapati2612",
      live: "#",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      title: "Skill Swap Platform",
      description:
        "Peer-to-peer skill exchange platform with user profiles, intelligent skill matching algorithms, and comprehensive admin analytics dashboard.",
      techStack: ["React", "Vite", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL"],
      github: "https://github.com/Rudraprajapati2612",
      live: "#",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Hostel Management System",
      description:
        "Full-featured MERN-based admin dashboard for managing student data, room allocations, secure authentication, and real-time updates.",
      techStack: ["React.js", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/Rudraprajapati2612",
      live: "#",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions across Web3, blockchain, and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card hover:glow-primary transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`h-2 w-full rounded-full bg-gradient-to-r ${project.gradient} mb-4`} />
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(project.github, "_blank")}
                  className="flex-1 group/btn"
                >
                  <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                  GitHub
                </Button>
                {project.live !== "#" && (
                  <Button
                    size="sm"
                    onClick={() => window.open(project.live, "_blank")}
                    className="flex-1 gradient-primary text-primary-foreground"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
