import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    effort: 0
  });

  const targetValues = {
    experience: 1,
    projects: 3,
    effort: 100
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        experience: Math.floor(targetValues.experience * progress),
        projects: Math.floor(targetValues.projects * progress),
        effort: Math.floor(targetValues.effort * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targetValues);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const techStack = [
    { name: 'HTML5', icon: (
      <svg viewBox="0 0 32 32" width="32" height="32" fill="none"><path d="M5.5 27.5L3 3h26l-2.5 24.5L16 30l-10.5-2.5z" fill="#E44D26"/><path d="M16 28.1l8.5-2 2.1-21.1H16v23.1z" fill="#F16529"/><path d="M16 13.2h-4.2l-.3-3.2H16V7.1H8.7l.1 1.2.7 7.7H16v-2.8zm0 6.7l-.01.003-3.5-.9-.2-2.2H9.8l.3 3.7 5.9 1.6.01-.003V20.1zm0-6.7v2.8h3.8l-.4 4.2-3.4.9v2.6l5.9-1.6.1-1.1.7-7.7.1-1.2H16v2.6zm0-6.3v2.6h7.1l-.1-1.2-.7-7.7H16z" fill="#fff"/></svg>
    ) },
    { name: 'CSS3', icon: (
      <svg viewBox="0 0 32 32" width="32" height="32" fill="none"><path d="M5.5 27.5L3 3h26l-2.5 24.5L16 30l-10.5-2.5z" fill="#264DE4"/><path d="M16 28.1l8.5-2 2.1-21.1H16v23.1z" fill="#2965F1"/><path d="M16 13.2h-4.2l-.3-3.2H16V7.1H8.7l.1 1.2.7 7.7H16v-2.8zm0 6.7l-.01.003-3.5-.9-.2-2.2H9.8l.3 3.7 5.9 1.6.01-.003V20.1zm0-6.7v2.8h3.8l-.4 4.2-3.4.9v2.6l5.9-1.6.1-1.1.7-7.7.1-1.2H16v2.6zm0-6.3v2.6h7.1l-.1-1.2-.7-7.7H16z" fill="#fff"/></svg>
    ) },
    { name: 'JavaScript', icon: (
      <svg viewBox="0 0 32 32" width="32" height="32" fill="none"><rect width="32" height="32" rx="6" fill="#F7DF1E"/><text x="7" y="24" fontSize="18" fontWeight="bold" fontFamily="Arial, Helvetica, sans-serif" fill="#222">JS</text></svg>
    ) },
    { name: 'React', icon: (
      <svg viewBox="0 0 32 32" width="32" height="32" fill="none"><circle cx="16" cy="16" r="2.5" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="2"><ellipse rx="13" ry="5.5" transform="matrix(.866 .5 -.866 .5 16 16)"/><ellipse rx="13" ry="5.5" transform="matrix(-.866 .5 .866 .5 16 16)"/><ellipse rx="13" ry="5.5" transform="matrix(0 1 -1 0 16 16)"/></g></svg>
    ) },
    { name: 'Node.js', icon: (
      <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
        <polygon points="16,3 29,10.5 29,25.5 16,33 3,25.5 3,10.5" fill="#393" />
        <text x="7" y="22" fontSize="10" fontWeight="bold" fontFamily="Arial, Helvetica, sans-serif" fill="#fff">Node</text>
        <rect x="19" y="15" width="7" height="7" rx="1.5" fill="#fff"/>
        <text x="20.5" y="21" fontSize="7" fontWeight="bold" fontFamily="Arial, Helvetica, sans-serif" fill="#393">js</text>
      </svg>
    ) },
    { name: 'Express', icon: (
      <svg viewBox="0 0 32 32" width="32" height="32" fill="none"><text x="0" y="24" fontSize="20" fontFamily="Arial, Helvetica, sans-serif" fill="#fff">Ex</text></svg>
    ) },
    { name: 'MongoDB', icon: (
      <svg viewBox="0 0 32 32" width="32" height="32" fill="none"><path d="M16.6 3.2c-.2-.4-.4-.4-.6 0-.5.8-6.2 10.7-6.2 15.2 0 5.2 4.1 9.5 6.2 10.4.2.1.4.1.6 0 2.1-.9 6.2-5.2 6.2-10.4 0-4.5-5.7-14.4-6.2-15.2zm-.6 20.2c-1.2-.7-4.7-4.2-4.7-8.6 0-3.7 3.2-9.6 4.7-12.2 1.5 2.6 4.7 8.5 4.7 12.2 0 4.4-3.5 7.9-4.7 8.6z" fill="#47A248"/><path d="M16 28.5c-.3 0-.5-.2-.5-.5v-3.2c0-.3.2-.5.5-.5s.5.2.5.5v3.2c0 .3-.2.5-.5.5z" fill="#47A248"/></svg>
    ) },
    { 
      name: 'MySQL', 
      icon: (
    <svg viewBox="0 0 64 64" width="32" height="32" fill="none">
      <path d="M32 2C18 2 6 14 6 28c0 11 15 28 26 34 11-6 26-23 26-34 0-14-12-26-26-26zm0 52c-9-5-22-19-22-26 0-11 9-20 22-20s22 9 22 20c0 7-13 21-22 26z" fill="#00758F"/>
      <path d="M32 12c-3 0-6 2-6 5 0 3 3 5 6 5s6-2 6-5c0-3-3-5-6-5zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" fill="#00758F"/>
    </svg>
  ) 
}

  ];

  return (
    <section id="about" className="section-padding bg-surface/50">
      <div className="section-container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
           I am a passionate Computer Science student with a solid foundation in problem-solving and algorithms,
            specializing in web development. My skills in full-stack development and real-time systems enable me to
            effectively build web-based applications. I thrive on learning new technologies to create efficient and
            scalable solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Skills Counter */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 card-glass rounded-xl">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {counters.experience}+
                </div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center p-6 card-glass rounded-xl">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {counters.projects}+
                </div>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="text-center p-6 card-glass rounded-xl">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {counters.effort}%
                </div>
                <p className="text-muted-foreground">Effort</p>
              </div>
            </div>

            <div className="card-glass rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">What I Do</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted">Frontend Development with React </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted">Backend APIs with Node.js & Express</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted">Database Design & Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted">Cloud Deployment & DevOps</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-semibold mb-8 text-center">Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <div 
                  key={tech.name}
                  className="card-glass rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:bg-surface-elevated group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center items-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h4 className="font-semibold text-sm">{tech.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
