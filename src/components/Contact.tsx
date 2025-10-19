import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rudraprajapati2612@gmail.com",
      link: "mailto:rudraprajapati2612@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 72268 95828",
      link: "tel:+917226895828",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/Rudraprajapati2612",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/rudra-prajapati-12099128a/",
    },
    {
      icon: Twitter,
      label: "X (Twitter)",
      url: "https://x.com/RudraPraja83070",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on your next Web3 or full-stack project
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card glow-primary animate-scale-in">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-accent/10 transition-colors group"
                    >
                      <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-accent group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-semibold">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="border-t border-border pt-8">
                <p className="text-center text-muted-foreground mb-4">Connect with me on</p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="lg"
                        onClick={() => window.open(social.url, "_blank")}
                        className="group hover:border-primary transition-colors"
                      >
                        <Icon className="h-5 w-5 mr-2 group-hover:text-primary transition-colors" />
                        {social.label}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          <footer className="mt-12 text-center text-muted-foreground">
            <p>© 2025 Rudra Prajapati | Built with React + Tailwind CSS</p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
