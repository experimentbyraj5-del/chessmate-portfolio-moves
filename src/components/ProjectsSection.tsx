import { useState } from "react";
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
    piece: "♕", // Queen - versatility
    category: "AI Generation",
    tech: ["React", "TensorFlow", "WebGL"],
    status: "completed"
  },
  {
    id: 2,
    title: "Inbox Guard",
    description: "Advanced email security system with ML-powered threat detection and automated response protocols.",
    logo: inboxGuardLogo,
    piece: "♖", // Rook - backend protection
    category: "Security",
    tech: ["Python", "Machine Learning", "Email APIs"],
    status: "completed"
  },
  {
    id: 3,
    title: "Xorify",
    description: "Cross-platform data encryption and secure communication tool with end-to-end encryption.",
    logo: xorifyLogo,
    piece: "♗", // Bishop - algorithms
    category: "Cryptography", 
    tech: ["Node.js", "Cryptography", "Socket.io"],
    status: "completed"
  },
  {
    id: 4,
    title: "Chat Caster",
    description: "Real-time broadcasting platform with intelligent chat moderation and analytics dashboard.",
    logo: chatCasterLogo,
    piece: "♘", // Knight - creativity
    category: "Communication",
    tech: ["React", "WebRTC", "Redis"],
    status: "in-progress"
  },
  {
    id: 5,
    title: "Knight Vision",
    description: "AI Chess Assistant with computer vision for board analysis and strategic move recommendations.",
    logo: knightVisionLogo,
    piece: "♞", // Knight - AI chess
    category: "AI Chess",
    tech: ["Python", "Computer Vision", "Chess Engine"],
    status: "completed"
  }
];

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
            Each project represents a unique chess piece in my portfolio, 
            showcasing different strengths and strategic approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="relative cursor-pointer group min-h-[200px] border-0 bg-transparent"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardContent className="p-6 relative h-full">
                <div className="text-center mb-4">
                  <img 
                    src={project.logo} 
                    alt={project.title} 
                    className={`
                      w-16 h-16 mx-auto object-contain transition-all duration-500
                      ${hoveredProject === project.id ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}
                    `}
                  />
                </div>


                <div className={`
                  absolute inset-0 flex flex-col justify-center items-center p-6 transition-all duration-500
                  ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}
                `}>
                  <Badge variant="outline" className="mb-3">
                    {project.category}
                  </Badge>
                  
                  <h3 className="text-xl font-serif font-semibold mb-3 text-center">
                    {project.title}
                  </h3>
                  
                  <div className={`
                    ${hoveredProject === project.id ? 'animate-fade-in' : ''}
                  `}>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-center">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 justify-center">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`
                  absolute bottom-4 left-0 right-0 text-center transition-all duration-300
                  ${hoveredProject === project.id ? 'opacity-0' : 'opacity-100'}
                `}>
                  <p className="text-sm text-muted-foreground">
                    Hover to reveal details
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};