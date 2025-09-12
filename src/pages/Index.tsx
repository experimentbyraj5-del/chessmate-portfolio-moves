import { useState } from "react";
import { ChessBoard } from "@/components/ChessBoard";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ResumeSection } from "@/components/ResumeSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [hasEnteredPortfolio, setHasEnteredPortfolio] = useState(false);

  const handleChessMove = () => {
    setHasEnteredPortfolio(true);
  };

  if (!hasEnteredPortfolio) {
    return <ChessBoard onMove={handleChessMove} />;
  }

  return (
    <div className="min-h-screen">
      <div className="animate-slide-up">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TechStackSection />
        <ResumeSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;