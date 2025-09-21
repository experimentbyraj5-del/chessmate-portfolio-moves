import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import giflyLogo from "@/assets/gifly.png";
import inboxGuardLogo from "@/assets/inbox-guard.png";
import xorifyLogo from "@/assets/xorify.png";
import chatCasterLogo from "@/assets/chat-caster.png";
import knightVisionLogo from "@/assets/knight-vision.png";
import ptextorLogo from "@/assets/ptextor.png";

const projects = [
  {
    id: 1,
    title: "Gifly",
    description: "Gifly is a lightweight Chrome extension that transforms music playback into a fun, vibey experience. Users load local audio files to create playlists.",
    logo: giflyLogo,
    category: "Chrome Extension",
    tech: ["Chrome Extension", "JavaScript", "HTML", "CSS"],
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
    description: "A Chrome extension that analyzes email sentiment (positive, negative, neutral) in Gmail or pasted text using local AI (DistilBERT). No APIs needed, ensuring privacy. Click to scrape the current email or input manually. Fast, user-friendly popup with color-coded results. Install easily, runs offline after initial model load.",
    logo: inboxGuardLogo,
    category: "AI Security",
    tech: ["DistilBERT", "Transformers", "PyTorch", "Chrome Extension", "JavaScript"],
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
    description: "Xorify is a sleek encryption platform built on the XOR cipher, designed to make data security accessible and practical. With support for text and file encryption, QR code generation, and a user-friendly interface, Xorify bridges simplicity and professionalism.",
    logo: xorifyLogo,
    category: "Cryptography", 
    tech: ["Python", "PyQt5", "CustomTkinter"],
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
    description: "Chat_Caster is an AI-powered tool that transforms WhatsApp chat histories into realistic, interactive personas. By analyzing conversations, it trains lightweight GPT models to simulate natural dialogues, letting users relive, study, or extend chat experiences.",
    logo: chatCasterLogo,
    category: "AI Communication",
    tech: ["Transformers", "DistilBERT", "PyTorch", "Streamlit"],
    status: "completed",
    theme: {
      primary: "hsl(30, 85%, 55%)",
      secondary: "hsl(30, 85%, 95%)",
      accent: "hsl(30, 85%, 75%)"
    }
  },
  {
    id: 5,
    title: "Knight Vision",
    description: "Project KnightVision is a real-time chess analysis tool that uses your camera to recognize a physical chessboard and provide AI-powered move suggestions. Built with OpenCV, Stockfish, and PyQt5, it detects the board, identifies pieces, generates FEN positions, and evaluates the best moves directly in a clean GUI.",
    logo: knightVisionLogo,
    category: "AI Chess",
    tech: ["OpenCV", "Stockfish", "PyQt5", "Python"],
    status: "completed",
    theme: {
      primary: "hsl(45, 85%, 50%)",
      secondary: "hsl(45, 85%, 95%)",
      accent: "hsl(45, 85%, 70%)"
    }
  },
  {
    id: 6,
    title: "PTEXTOR",
    description: "PTEXTOR bridges plain text editing with web-based animations, making it suitable for creating dynamic content like interactive stories or presentations without requiring web development skills. The project emphasizes modularity, with separate modules for parsing, GUI, utilities, and file handling.",
    logo: ptextorLogo,
    category: "Desktop Software",
    tech: ["Python", "PyQt5", "QWebEngine", "Winreg"],
    status: "completed",
    theme: {
      primary: "hsl(210, 85%, 55%)",
      secondary: "hsl(210, 85%, 95%)",
      accent: "hsl(210, 85%, 75%)"
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
            Each project is built using GPT tools and my applied learning, with the goal of addressing real-world problems through practical and innovative solutions.
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