import profilePhoto from '@/assets/jainras.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-surface-elevated"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <div className="mb-6">
              <p className="text-primary text-lg font-semibold mb-2">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
                Jainras Peter 
              </h1>
              <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
                 <span className="text-gradient">Full StackDeveloper</span>
              </h2>
            </div>
            
            <p className="text-xl text-muted mb-8 max-w-2xl">
              Turning ideas into full stack solutions with modern technologies and creative problem-solving.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                  href="https://drive.google.com/drive/folders/135i66Vnl2fjGYGKVQMcT389h_4rBK-Rg?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-4 inline-block text-center"
                >
                Download Resume
              </a>
              
            </div>
          </div>
          
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 profile-glow animate-float">
                <img 
                  src={profilePhoto} 
                  alt="John Developer Profile" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-glow/30 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;