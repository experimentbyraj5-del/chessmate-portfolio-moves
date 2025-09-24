import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Brand & Quote */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl font-serif font-bold">Priyanshu Rajpoot</h3>
            <p className="text-xs sm:text-sm opacity-75 italic leading-relaxed px-4">
              "Every expert was once a beginner. Every pro was once an amateur. 
              Every icon was once an unknown."
            </p>
            <div className="flex items-center justify-center gap-2 text-accent">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm">Building the future, one move at a time</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm opacity-75 text-center md:text-left">
            © {currentYear} Priyanshu Rajpoot. Crafted with strategy and precision.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm opacity-75">
            <span>♔ Think Strategic</span>
            <span className="hidden sm:inline">•</span>
            <span>♕ Build Elegant</span>
            <span className="hidden sm:inline">•</span>
            <span>♘ Move Forward</span>
          </div>
        </div>
      </div>
    </footer>
  );
};