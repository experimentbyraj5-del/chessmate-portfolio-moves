import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "AI Chess Engine",
    description: "Deep learning chess AI with advanced position evaluation and strategic planning capabilities.",
    piece: "♕", // Queen - versatility
    category: "Versatility",
    tech: ["Python", "TensorFlow", "Chess.js"],
    status: "completed"
  },
  {
    id: 2,
    title: "NLP Sentiment Analyzer",
    description: "Natural language processing system for real-time sentiment analysis with chess-like strategic decision making.",
    piece: "♗", // Bishop - algorithms  
    category: "Algorithms",
    tech: ["Python", "NLTK", "Transformers"],
    status: "in-progress"
  },
  {
    id: 3,
    title: "Backend Chess Platform",
    description: "Scalable backend infrastructure supporting thousands of concurrent chess matches with real-time updates.",
    piece: "♖", // Rook - backend
    category: "Backend",
    tech: ["Node.js", "Socket.io", "MongoDB"],
    status: "completed"
  },
  {
    id: 4,
    title: "Creative Chess Visualizer",
    description: "Interactive data visualization tool that transforms chess games into beautiful, artistic representations.",
    piece: "♘", // Knight - creativity
    category: "Creativity", 
    tech: ["React", "D3.js", "WebGL"],
    status: "concept"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="portfolio-card cursor-pointer group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className={`
                    text-6xl mb-4 transition-transform duration-500 
                    ${hoveredProject === project.id ? 'scale-125 animate-pulse' : ''}
                  `}>
                    {project.piece}
                  </div>
                  
                  <Badge variant="outline" className="mb-2">
                    {project.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-serif font-semibold mb-3 text-center">
                  {project.title}
                </h3>

                <div className={`
                  transition-all duration-300 overflow-hidden
                  ${hoveredProject === project.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className={`
                  mt-4 text-center transition-all duration-300
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