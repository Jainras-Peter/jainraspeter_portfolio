import blogImg from "../assets/bloggg.png";
import mapzyImg from "../assets/travel.jpg";
import chatImg from "../assets/chatt.jpg";
import SecureHR from "../assets/Encryption.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Blog Page",
      description: "A full-stack blog application that allows users to create, read, update, and delete blog posts with a clean UI and backend integration.",
      techStack: ["Node.js", "MongoDB", "Express","EJS"],
      githubLink: "https://github.com/Jainras-Peter/Blog_page",
      liveLink: "https://blog-page-aaxe.onrender.com",
      // image: "🛒",
      imageUrl: blogImg
    },
    {
      name: "MAPZY-Travel Guide",
      description: "A travel guide web app that helps users explore tourist spots with integrated maps and location-based search.",
      techStack: ["Node.js", "Express", "MongoDB", "EJS","Bootstrap"],
      githubLink: "https://github.com/Jainras-Peter/Mapzy",
      liveLink: "https://mapzy.onrender.com",
      // image: "📋",
      imageUrl: mapzyImg
    },
    {
      name: "Chat APP",
      description: "A real-time chat application enabling instant messaging between users using WebSockets and Node.js.",
      techStack: ["Socket.IO", "Node.js"],
      githubLink: "https://github.com/Jainras-Peter/ChatApp",
      liveLink: "https://chatapp-prxl.onrender.com",
      // image: "🌤️",
      imageUrl: chatImg
    },
    {
      name: "SecureHR-Employee Management System",
      description: "The main purpose of this application is to protect sensitive employee and organizational data in a web application.",
      techStack: ["Python", "MySQL", "AES & Bcrypt", "KMS"],
      githubLink: "https://github.com/Jainras-Peter/EMS-SecureHR",
      liveLink: "https://github.com/Jainras-Peter/EMS-SecureHR",
      image: "🔐",
      imageUrl:SecureHR
    }
    // {
    //   name: "Portfolio Website",
    //   description: "Responsive personal portfolio website with modern design, smooth animations, and optimized performance.",
    //   techStack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    //   githubLink: "https://github.com/username/portfolio",
    //   liveLink: "https://portfolio-demo.com",
    //   image: "💼",
    //   imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80"
    // }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills in full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card-glass rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:bg-surface-elevated group animate-slide-up relative overflow-hidden"
              style={{ 
                animationDelay: `${index * 100}ms`,
                backgroundImage: `url('${project.imageUrl}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-black/40 z-0 rounded-xl pointer-events-none"></div>
              {/* Project Icon */}
              <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300 relative z-10 text-white">
                {/* {project.image} */}
              </div>
              
              {/* Project Info */}
              <div className="space-y-4 relative z-10">
                <h3 className="text-xl font-bold text-white group-hover:text-primary/90 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-white/90 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-primary/80 text-white px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex space-x-4 pt-4">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white/80 hover:text-primary/90 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-sm">GitHub</span>
                  </a>
                  
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white/80 hover:text-primary/90 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
              
              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
