import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Engineering",
      institution: "CHARUSAT University",
      period: "2023 – 2027",
      gpa: "7.5/10",
      icon: GraduationCap,
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "RMG Maheshwari English High School, Surat",
      period: "2023",
      gpa: "75%",
      icon: GraduationCap,
    },
  ];

  const certifications = [
    {
      title: "Data Structures & Algorithms using Java",
      issuer: "NPTEL (IIT Kharagpur)",
      icon: Award,
    },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Education & <span className="gradient-primary bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic background and professional achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <Card
                    key={index}
                    className="glass-card hover:glow-primary transition-all duration-300 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold mb-1">{edu.degree}</CardTitle>
                          <p className="text-muted-foreground">{edu.institution}</p>
                        </div>
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{edu.period}</span>
                        <span className="font-semibold gradient-primary bg-clip-text text-transparent">
                          {edu.gpa}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-accent" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <Card
                    key={index}
                    className="glass-card hover:glow-accent transition-all duration-300 animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-xl font-bold mb-1">{cert.title}</CardTitle>
                          <p className="text-muted-foreground">{cert.issuer}</p>
                        </div>
                        <Icon className="h-8 w-8 text-accent" />
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
