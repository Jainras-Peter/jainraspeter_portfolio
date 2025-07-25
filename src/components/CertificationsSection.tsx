const CertificationsSection = () => {
  const certifications = [
    {
      title: "Full Stack Web Development BootCamp",
      issuer: "Udemy",
      date: "2025",
      logo: "☁️",
      description: "I learned to build complete web applications by working on both frontend (HTML, CSS, JavaScript, React) and backend (Node.js, Express, MongoDB) technologies, along with API integration and deployment.",
      certificateLink: "https://drive.google.com/file/d/1z6KxoFtlIOK5NZw0KqIGhza8iBKE6Qsr/view?usp=drive_link"
    },
    {
      title: "Python Foundation Certification",
      issuer: "Infosys Springboard",
      date: "2025",
      logo: "⚛️",
      description: "I learned the core concepts of Python programming, including data types, control structures, functions, and object-oriented principles, to build basic applications and scripts.",
      certificateLink: "https://drive.google.com/file/d/1APWYAS-cFaitK06B1VMSezjm4tiqUTRf/view?usp=drive_link"
    },
    {
      title: "Git Foundation Certification",
      issuer: "Udemy",
      date: "2025",
      logo: "🔥",
      description: "I learned the fundamentals of version control, core Git commands, and collaborative workflows for efficient code management.",
      certificateLink: "https://drive.google.com/file/d/1kTHK9thMIB7Gnx4DLsVQTmhEhftQjZgs/view?usp=drive_link"
    },
    {
      title: "ReactJs",
      issuer: "Infosys Springboard",
      date: "2024",
      logo: "📘",
      description: "I learned how to build dynamic and reusable user interfaces using React components, state, props, and JSX",
      certificateLink: "https://drive.google.com/file/d/1nG72S2ZXaj6Y62mMs4gWhuAmY1_zaw78/view?usp=drive_link"
    },
    {
      title: "Advance MERN Development",
      issuer: "Infosys Springboard",
      date: "2024",
      logo: "🟢",
      description: "I learned to develop full-stack web applications using the MERN stack — MongoDB for database management, Express.js and Node.js for backend development, and React.js for building dynamic frontend interfaces.",
      certificateLink: "https://drive.google.com/file/d/1p92BZx2fRpsgyi7VJm7lnZ6hjVg5gpLf/view?usp=drive_link"
    },
    {
      title: " Introduction to MongoDB for Students",
      issuer: "MongoDB",
      date: "2024",
      logo: "🍃",
      description: "I learned to build complete web applications by working on both frontend (HTML, CSS, JavaScript, React) and backend (Node.js, Express, MongoDB) technologies, along with API integration and deployment.",
      certificateLink: "https://drive.google.com/file/d/1APWYAS-cFaitK06B1VMSezjm4tiqUTRf/view?usp=drive_link"
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-surface/50">
      <div className="section-container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="card-glass rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:bg-surface-elevated group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Certificate Logo
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {cert.logo}
              </div> */}
              
              {/* Certificate Info */}
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-primary font-semibold mb-2">
                {cert.issuer}
              </p>
              
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                {cert.date}
              </div>
              
              <p className="text-muted text-sm leading-relaxed mb-4">
                {cert.description}
              </p>
              
              {/* Show Certificate Button */}
              {cert.certificateLink && (
                <a
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block mt-2"
                >
                  Show Certificate
                </a>
              )}
              
              {/* Decorative element */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;