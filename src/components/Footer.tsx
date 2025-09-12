import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Brand & Quote */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">Priyanshu Rajpoot</h3>
            <p className="text-sm opacity-75 italic leading-relaxed">
              "Every expert was once a beginner. Every pro was once an amateur. 
              Every icon was once an unknown."
            </p>
            <div className="flex items-center justify-center gap-2 text-accent">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Building the future, one move at a time</span>
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