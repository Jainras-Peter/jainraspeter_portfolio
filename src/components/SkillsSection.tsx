const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "Python", "C","C++"],
      icon: "💻"
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "Bootstrap", "React", "Node.js", "Express.js"],
      icon: "🌐"
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"],
      icon: "📝"
    },
    {
      title: "Authentication",
      skills: ["JWT", "Passport.js"],
      icon: "🛠️"
    },
    {
      title: "Tools",
      skills: ["Git","GitHub","VS Code","Postman"],
      icon: "🧠"
    },
    {
      title: "Deployment",
      skills: ["Vercel","Render"],
      icon: "🧠"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise across different domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="card-glass rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:bg-surface-elevated group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category Icon
              <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div> */}
              
              {/* Category Title */}
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-4 text-center">
                {category.title}
              </h3>
              
              {/* Skills List */}
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/20 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
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

export default SkillsSection;