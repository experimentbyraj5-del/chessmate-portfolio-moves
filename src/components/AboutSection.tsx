export const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header with chess knight */}
          <div className="text-center mb-16 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl opacity-10">♞</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 relative z-10">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
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

            <div className="relative">
              {/* Decorative chessboard pattern */}
              <div className="chessboard-pattern rounded-xl p-8 shadow-chess">
                <div className="bg-white/90 backdrop-blur rounded-lg p-6 text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-serif font-semibold mb-2">My Philosophy</h3>
                  <p className="text-sm text-muted-foreground">
                    "In chess, as in AI, the beauty lies not in the complexity of the solution, 
                    but in the elegance of the strategy."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};