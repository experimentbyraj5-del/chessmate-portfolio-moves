const techStack = [
  { 
    name: "Python", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    projects: ["Knight Vision", "Xorify", "Chat Caster"]
  },
  { 
    name: "JavaScript", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    projects: ["Inbox Guard", "Gifly"]
  },
  { 
    name: "Streamlit", 
    logo: "https://streamlit.io/images/brand/streamlit-mark-color.svg",
    projects: ["Xorify"]
  },
  { 
    name: "PyQt5", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg",
    projects: ["Knight Vision"]
  },
  { 
    name: "OpenCV", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    projects: ["Knight Vision"]
  },
  { 
    name: "PyTorch", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    projects: ["Chat Caster"]
  },
  { 
    name: "NumPy", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    projects: ["Knight Vision"]
  },
  { 
    name: "HTML5", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    projects: ["Inbox Guard", "Gifly"]
  },
  { 
    name: "CSS3", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    projects: ["Inbox Guard", "Gifly"]
  },
  { 
    name: "Hugging Face", 
    logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    projects: ["Chat Caster"]
  },
  { 
    name: "Chrome API", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
    projects: ["Inbox Guard", "Gifly"]
  },
  { 
    name: "Stockfish", 
    logo: "https://stockfishchess.org/images/logo/icon_256x256.png",
    projects: ["Knight Vision"]
  },
  { 
    name: "Tesseract OCR", 
    logo: "https://raw.githubusercontent.com/tesseract-ocr/tesseract/main/doc/tesseract_logo.png",
    projects: ["Knight Vision"]
  },
  { 
    name: "RegEx", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/regex/regex-original.svg",
    projects: ["Chat Caster"]
  },
  { 
    name: "Threading", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    projects: ["Knight Vision", "Chat Caster"]
  },
  { 
    name: "Transformers", 
    logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    projects: ["Chat Caster", "Inbox Guard"]
  }
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
                    tech-tile group relative cursor-pointer
                    ${isLight ? 'bg-chess-light' : 'bg-chess-dark'}
                  `}
                  title={tech.name}
                >
                  <div className="flex flex-col items-center gap-2 relative z-10">
                    <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={tech.logo} 
                        alt={tech.name}
                        className="w-full h-full object-contain"
                        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                      />
                    </div>
                    <span className="text-xs font-medium text-center leading-tight opacity-75 group-hover:opacity-100 transition-opacity">
                      {tech.name}
                    </span>
                  </div>

                  {/* Hover effect with project list */}
                  <div className="absolute inset-0 bg-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Project tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                    <div className="bg-background border border-border rounded-lg px-3 py-2 shadow-lg min-w-max">
                      <p className="text-xs font-medium text-foreground mb-1">Used in:</p>
                      {tech.projects.map((project, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground">
                          • {project}
                        </div>
                      ))}
                    </div>
                  </div>
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