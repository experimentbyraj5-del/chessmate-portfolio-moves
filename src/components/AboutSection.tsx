import meImage from "@/assets/me.png";

export const AboutSection = () => {
  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header with chess knight */}
          <div className="text-center mb-12 sm:mb-16 relative">
            <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 text-4xl sm:text-6xl opacity-10">♞</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 relative z-10">
              About Me
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-gold mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
            <div className="flex-1 space-y-4 sm:space-y-6 order-2 lg:order-1">
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                I am a Python learner specializing in Artificial Intelligence, Natural Language Processing, 
                and Machine Learning. My expertise includes prompt engineering, developing custom modules, 
                and integrating them to build intelligent software solutions powered by GPT tools.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                I focus on creating scalable, efficient, and practical systems by combining strategic 
                problem-solving with clean development practices.
              </p>

              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 pt-4">
                <div className="flex space-x-2">
                  <span className="text-xl sm:text-2xl">♟</span>
                  <span className="text-lg sm:text-xl opacity-75">→</span>
                  <span className="text-xl sm:text-2xl">♕</span>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground font-medium text-center sm:text-left">
                  Always evolving, always improving
                </span>
              </div>
            </div>

            <div className="flex-shrink-0 order-1 lg:order-2">
              <img 
                src={meImage} 
                alt="Priyanshu Rajpoot" 
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover object-center rounded-xl shadow-chess"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};