import meImage from "@/assets/me.png";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header with chess knight */}
          <div className="text-center mb-16 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl opacity-10">♞</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 relative z-10">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Like a grandmaster studying the board, I approach every project with strategic thinking 
                and calculated precision. My expertise lies at the intersection of artificial intelligence 
                and elegant software solutions.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Every line of code is a calculated move, every algorithm a strategic gambit. 
                I believe in creating solutions that are not just functional, but intellectually 
                beautiful—much like the perfect chess game.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex space-x-2">
                  <span className="text-2xl">♟</span>
                  <span className="text-xl opacity-75">→</span>
                  <span className="text-2xl">♕</span>
                </div>
                <span className="text-sm text-muted-foreground font-medium">
                  Always evolving, always improving
                </span>
              </div>
            </div>

            <div className="flex-shrink-0">
              <img 
                src={meImage} 
                alt="Priyanshu Rajpoot" 
                className="w-96 h-96 object-cover object-center rounded-xl shadow-chess"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};