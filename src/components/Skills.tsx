import { Code2, Database, Globe, Blocks, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Web3 & Blockchain",
      icon: Blocks,
      skills: ["Solidity", "Ethereum", "Solana", "Anchor", "Rust", "AMM/DEX", "ERC-20/721"],
      gradient: "from-purple-500 to-blue-500",
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Vite", "Framer Motion"],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Backend Development",
      icon: Code2,
      skills: ["Node.js", "Express.js", "REST APIs", "Prisma ORM", "WebSockets"],
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "Redis", "Prisma"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Languages & Tools",
      icon: Wrench,
      skills: ["Python", "C++", "Java", "Git", "Postman", "VS Code", "Docker"],
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical <span className="gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="glass-card hover:glow-primary transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
