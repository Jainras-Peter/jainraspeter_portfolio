const ExperienceSection = () => {
  const experiences = [
    {
      company: "Zaigo Infotech",
      role: "Web Development Intern",
      duration: "Dec 2023 - Jan 2024",
      tasks: [
        "Created and maintained responsive web pages using HTML, CSS, JavaScript, and EJS templates. Ensured cross-browser compatibility and mobile responsiveness.",
        "Worked on backend development using Node.js and Express.js to build RESTful APIs and integrate them with MongoDB for database operations.",
        "Used Git and GitHub for version control, collaborated with team members through pull requests, and maintained clean, well-documented code.",
        "Contributed to real-time web applications, such as chat features or blog modules, gaining hands-on experience in full-stack development and understanding deployment workflows."
      ]
    },
    // {
    //   company: "StartupXYZ",
    //   role: "Frontend Developer Intern",
    //   duration: "Jan 2023 - May 2023",
    //   tasks: [
    //     "Built interactive UI components with React and TypeScript",
    //     "Integrated third-party APIs and payment gateways",
    //     "Maintained code quality through testing and code reviews",
    //     "Improved user engagement by 25% with new features"
    //   ]
    // },
    // {
    //   company: "Digital Agency Pro",
    //   role: "Web Developer Intern",
    //   duration: "Sep 2022 - Dec 2022",
    //   tasks: [
    //     "Created modern websites using HTML5, CSS3, and JavaScript",
    //     "Ensured cross-browser compatibility and mobile responsiveness",
    //     "Worked directly with clients to understand requirements",
    //     "Delivered 5+ projects on time and within budget"
    //   ]
    // }
  ];

  return (
    <section id="experience" className="section-padding bg-surface/50">
      <div className="section-container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            My professional journey and hands-on experience in Web development.
          </p>
        </div>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="card-glass rounded-xl p-6 md:p-8 transition-all duration-300 hover:bg-surface-elevated group animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg text-primary font-semibold">
                    {exp.company}
                  </h4>
                </div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  {exp.duration}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {exp.tasks.map((task, taskIndex) => (
                  <div 
                    key={taskIndex}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-background/50 transition-all duration-300 hover:bg-primary/5"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted text-sm leading-relaxed">{task}</span>
                  </div>
                ))}
              </div>

              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-glow rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;