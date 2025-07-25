const EducationSection = () => {
  const education = [
    {
      institution: "Sri Venkateswara College of Engineering",
      degree: "Bachelor of Engineering in Computer Science",
      duration: "2022 - 2026",
      cgpa: "8.4 / 10 CGPA",
      description: "I learned the core principles of computer science and engineering, including programming, data structures, algorithms, databases, networks, and software development during my B.E. in CSE."
    },
    {
      institution: "P.A.K Palanisamy Higher Secondary School",
      degree: "12TH",
      duration: "2022",
      cgpa: "94% Percentage",
      description: "I learned advanced topics in Mathematics, Physics, and Computer Science, which strengthened my logical thinking and introduced me to programming fundamentals."
    },
    {
      institution: "P.A.K Palanisamy Higher Secondary School",
      degree: "10TH",
      duration: "2020",
      cgpa: "92% Percentage",
      description: "I learned the foundational concepts across subjects like Mathematics, Science, and English, which built my analytical and problem-solving skills."
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            My academic journey ..
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            {education.map((edu, index) => (
              <div 
                key={index}
                className="relative flex items-start mb-12 animate-slide-in-left"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                
                {/* Content */}
                <div className="ml-20 card-glass rounded-xl p-6 w-full transition-all duration-300 hover:bg-surface-elevated group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg text-primary font-semibold">
                        {edu.institution}
                      </h4>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {edu.duration}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Score : {edu.cgpa}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted leading-relaxed">
                    {edu.description}
                  </p>
                  
                  {/* Decorative element */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;