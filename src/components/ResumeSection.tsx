import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const ResumeSection = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Priyanshu_Rajpoot_Resume.pdf';
    link.download = 'Priyanshu_Rajpoot_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-12 sm:py-20 bg-gradient-chess text-white relative overflow-hidden">
      {/* Background chess pieces */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 sm:top-16 left-8 sm:left-16 text-6xl sm:text-9xl">♟</div>
        <div className="absolute top-16 sm:top-32 right-16 sm:right-32 text-5xl sm:text-7xl animate-pulse">♕</div>
        <div className="absolute bottom-8 sm:bottom-16 left-1/3 text-4xl sm:text-6xl">♟</div>
        <div className="absolute bottom-16 sm:bottom-32 right-8 sm:right-16 text-6xl sm:text-8xl">♟</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6">
            Ready for the Next Move?
          </h2>
          
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed px-4">
            Feel interested to add my resume to hire me select the pawn.
          </p>

          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <div 
              onClick={handleResumeDownload}
              className="cursor-pointer group flex flex-col items-center gap-3 sm:gap-4"
            >
              <div className="text-5xl sm:text-6xl transition-all duration-700 group-hover:scale-125">
                <span className="group-hover:hidden">♟</span>
                <span className="hidden group-hover:inline animate-pulse">♕</span>
              </div>
              <span className="text-base sm:text-lg font-semibold opacity-75 group-hover:opacity-100 transition-opacity">
                Click to Download Resume
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm opacity-75">
              <span>♟ → ♕</span>
              <span className="hidden sm:inline">•</span>
              <span>Pawn to Queen</span>
              <span className="hidden sm:inline">•</span>
              <span>Evolution in Action</span>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-white/10 backdrop-blur rounded-xl border border-white/20">
            <h3 className="text-lg sm:text-xl font-serif font-semibold mb-3 sm:mb-4">
              What You'll Find Inside
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="text-accent text-lg">♖</span>
                <span>Robust Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent text-lg">♗</span>
                <span>Strategic Skills</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent text-lg">♘</span>
                <span>Creative Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};