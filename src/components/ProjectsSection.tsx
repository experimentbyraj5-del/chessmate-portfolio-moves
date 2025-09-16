import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import giflyLogo from "@/assets/gifly.png";
import inboxGuardLogo from "@/assets/inbox-guard.png";
import xorifyLogo from "@/assets/xorify.png";
import chatCasterLogo from "@/assets/chat-caster.png";
import knightVisionLogo from "@/assets/knight-vision.png";

const projects = [
  {
    id: 1,
    title: "Gifly",
    description: "AI-powered GIF generator with advanced customization and real-time rendering capabilities.",
    logo: giflyLogo,
    category: "AI Generation",
    tech: ["React", "TensorFlow", "WebGL"],
    status: "completed",
    theme: {
      primary: "hsl(280, 85%, 60%)",
      secondary: "hsl(280, 85%, 95%)",
      accent: "hsl(280, 85%, 80%)"
    }
  },
  {
    id: 2,
    title: "Inbox Guard",
    description: "Advanced email security system with ML-powered threat detection and automated response protocols.",
    logo: inboxGuardLogo,
    category: "Security",
    tech: ["Python", "Machine Learning", "Email APIs"],
    status: "completed",
    theme: {
      primary: "hsl(220, 85%, 55%)",
      secondary: "hsl(220, 85%, 95%)",
      accent: "hsl(220, 85%, 75%)"
    }
  },
  {
    id: 3,
    title: "Xorify",
    description: "Cross-platform data encryption and secure communication tool with end-to-end encryption.",
    logo: xorifyLogo,
    category: "Cryptography", 
    tech: ["Node.js", "Cryptography", "Socket.io"],
    status: "completed",
    theme: {
      primary: "hsl(160, 85%, 45%)",
      secondary: "hsl(160, 85%, 95%)",
      accent: "hsl(160, 85%, 70%)"
    }
  },
  {
    id: 4,
    title: "Chat Caster",
    description: "Real-time broadcasting platform with intelligent chat moderation and analytics dashboard.",
    logo: chatCasterLogo,
    category: "Communication",
    tech: ["React", "WebRTC", "Redis"],
    status: "in-progress",
    theme: {
      primary: "hsl(30, 85%, 55%)",
      secondary: "hsl(30, 85%, 95%)",
      accent: "hsl(30, 85%, 75%)"
    }
  },
  {
    id: 5,
    title: "Knight Vision",
    description: "AI Chess Assistant with computer vision for board analysis and strategic move recommendations.",
    logo: knightVisionLogo,
    category: "AI Chess",
    tech: ["Python", "Computer Vision", "Chess Engine"],
    status: "completed",
    theme: {
      primary: "hsl(45, 85%, 50%)",
      secondary: "hsl(45, 85%, 95%)",
      accent: "hsl(45, 85%, 70%)"
    }
  }
];

const TypewriterText = ({ text, isVisible }: { text: string; isVisible: boolean }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!isVisible) {
      setDisplayText("");
      return;
    }

    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [text, isVisible]);

  return <span>{displayText}</span>;
};

export const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each project showcases unique technical expertise and creative problem-solving approaches.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="relative cursor-pointer group overflow-hidden border-0 transition-all duration-500 ease-out"
              style={{
                background: hoveredProject === project.id 
                  ? `linear-gradient(135deg, ${project.theme.secondary}, ${project.theme.accent})`
                  : 'transparent',
                boxShadow: hoveredProject === project.id 
                  ? `0 20px 60px -10px ${project.theme.primary}30`
                  : 'none'
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardContent className="p-0 relative h-80">
                {/* Logo Container */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <img 
                    src={project.logo} 
                    alt={project.title} 
                    className={`
                      max-w-full max-h-full object-contain transition-all duration-700 ease-out
                      ${hoveredProject === project.id ? 'opacity-0 scale-90 blur-sm' : 'opacity-100 scale-100'}
                    `}
                  />
                </div>

                {/* Project Details Overlay */}
                <div 
                  className={`
                    absolute inset-0 flex flex-col justify-center items-center p-8 transition-all duration-700 ease-out
                    ${hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                  `}
                  style={{
                    background: hoveredProject === project.id 
                      ? `linear-gradient(135deg, ${project.theme.primary}10, ${project.theme.accent}20)`
                      : 'transparent'
                  }}
                >
                  <Badge 
                    variant="outline" 
                    className="mb-4 border-current text-current"
                    style={{ 
                      borderColor: hoveredProject === project.id ? project.theme.primary : undefined,
                      color: hoveredProject === project.id ? project.theme.primary : undefined
                    }}
                  >
                    {project.category}
                  </Badge>
                  
                  <h3 
                    className="text-2xl font-serif font-bold mb-4 text-center"
                    style={{ color: hoveredProject === project.id ? project.theme.primary : undefined }}
                  >
                    <TypewriterText text={project.title} isVisible={hoveredProject === project.id} />
                  </h3>
                  
                  <div className={`
                    transition-all duration-500 delay-300
                    ${hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                  `}>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed text-center max-w-md">
                      <TypewriterText text={project.description} isVisible={hoveredProject === project.id} />
                    </p>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.tech.map((tech, index) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className={`
                            text-xs transition-all duration-300
                            ${hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}
                          `}
                          style={{ 
                            transitionDelay: `${(index + 1) * 100}ms`,
                            backgroundColor: hoveredProject === project.id ? `${project.theme.primary}20` : undefined,
                            color: hoveredProject === project.id ? project.theme.primary : undefined
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Instruction */}
                <div className={`
                  absolute bottom-6 left-0 right-0 text-center transition-all duration-300
                  ${hoveredProject === project.id ? 'opacity-0 -translate-y-2' : 'opacity-60 translate-y-0'}
                `}>
                  <p className="text-sm text-muted-foreground">
                    Hover to explore project details
                  </p>
                </div>

                {/* Subtle Border Accent */}
                <div 
                  className={`
                    absolute bottom-0 left-0 right-0 h-1 transition-all duration-500
                    ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}
                  `}
                  style={{ 
                    background: hoveredProject === project.id 
                      ? `linear-gradient(90deg, ${project.theme.primary}, ${project.theme.accent})`
                      : 'transparent'
                  }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};