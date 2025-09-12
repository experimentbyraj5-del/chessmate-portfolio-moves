import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Brand & Quote */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">Priyanshu Rajpoot</h3>
            <p className="text-sm opacity-75 italic leading-relaxed">
              "Every expert was once a beginner. Every pro was once an amateur. 
              Every icon was once an unknown."
            </p>
            <div className="flex items-center gap-2 text-accent">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Building the future, one move at a time</span>
            </div>
          </div>

          {/* Chess Board Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold mb-4">Navigation</h4>
            <div className="grid grid-cols-4 gap-2 max-w-xs">
              {/* Chess board coordinates as navigation */}
              {['A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8'].map((coord, index) => {
                const labels = ['About', 'Projects', 'Skills', 'Resume', 'Contact', 'GitHub', 'LinkedIn', 'Blog'];
                return (
                  <div
                    key={coord}
                    className={`
                      w-12 h-12 flex items-center justify-center text-xs border border-white/20 
                      cursor-pointer hover:bg-accent/20 transition-colors
                      ${index % 2 === 0 ? 'bg-white/10' : 'bg-white/5'}
                    `}
                    title={labels[index]}
                  >
                    {coord}
                  </div>
                );
              })}
            </div>
            <p className="text-xs opacity-60">
              Each square represents a section of my portfolio
            </p>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold mb-4">Let's Connect</h4>
            <p className="text-sm opacity-75 mb-4">
              Ready to make the next strategic move together?
            </p>
            
            <div className="flex flex-col gap-3">
              <Button 
                variant="outline" 
                className="justify-start border-white/30 text-white hover:bg-white/10"
              >
                <Github className="mr-2 h-4 w-4" />
                github.com/priyanshu
              </Button>
              <Button 
                variant="outline"
                className="justify-start border-white/30 text-white hover:bg-white/10"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                linkedin.com/in/priyanshu
              </Button>
              <Button 
                variant="outline"
                className="justify-start border-white/30 text-white hover:bg-white/10"
              >
                <Mail className="mr-2 h-4 w-4" />
                priyanshu@example.com
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-75">
            © {currentYear} Priyanshu Rajpoot. Crafted with strategy and precision.
          </p>
          
          <div className="flex items-center gap-4 text-sm opacity-75">
            <span>♔ Think Strategic</span>
            <span>•</span>
            <span>♕ Build Elegant</span>
            <span>•</span>
            <span>♘ Move Forward</span>
          </div>
        </div>
      </div>
    </footer>
  );
};