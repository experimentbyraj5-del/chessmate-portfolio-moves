const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Python", icon: "🐍" },
  { name: "Node.js", icon: "🟢" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Git", icon: "📚" },
  { name: "Linux", icon: "🐧" },
  { name: "GraphQL", icon: "📊" },
  { name: "Redis", icon: "🔴" },
  { name: "Kubernetes", icon: "⚓" },
  { name: "FastAPI", icon: "⚡" },
  { name: "Next.js", icon: "▲" }
];

export const TechStackSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Tech Arsenal
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Like pieces on a chessboard, each technology serves a strategic purpose 
            in crafting the perfect solution.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Chessboard-style grid */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2 p-4 bg-white rounded-xl shadow-chess border">
            {techStack.map((tech, index) => {
              const row = Math.floor(index / 8);
              const col = index % 8;
              const isLight = (row + col) % 2 === 0;
              
              return (
                <div
                  key={tech.name}
                  className={`
                    tech-tile group relative
                    ${isLight ? 'bg-chess-light' : 'bg-chess-dark'}
                  `}
                  title={tech.name}
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                      {tech.icon}
                    </span>
                    <span className="text-xs font-medium text-center leading-tight opacity-75 group-hover:opacity-100 transition-opacity">
                      {tech.name}
                    </span>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>

          {/* Chess coordinates */}
          <div className="flex justify-between mt-4 px-4">
            {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(letter => (
              <div key={letter} className="w-12 text-center text-sm font-semibold text-muted-foreground">
                {letter}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};