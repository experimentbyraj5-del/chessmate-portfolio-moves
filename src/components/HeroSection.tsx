import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-chess text-white relative overflow-hidden">
      {/* Background chess pieces as decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl">♞</div>
        <div className="absolute top-20 right-20 text-6xl">♗</div>
        <div className="absolute bottom-20 left-20 text-7xl">♖</div>
        <div className="absolute bottom-10 right-10 text-5xl">♕</div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight">
            Priyanshu Rajpoot
          </h1>
          
          <div className="relative inline-block mb-8">
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              Building AI-driven, chess-like solutions where logic meets creativity.
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-gold rounded-full"></div>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </div>

          <div className="text-sm text-white/60">
            <p>Scroll down to explore my work ↓</p>
          </div>
        </div>
      </div>
    </section>
  );
};