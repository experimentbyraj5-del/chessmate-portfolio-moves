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
            <Button variant="outline" size="lg" className="border-white/30 text-black bg-white hover:bg-gray-100">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-blue-600 bg-white hover:bg-blue-50">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-green-600 bg-white hover:bg-green-50">
              <span className="mr-2 text-lg">♕</span>
              Chess Profile
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600">
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
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