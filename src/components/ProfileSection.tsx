const ProfileSection = () => {
  const profiles = [
    {
      platform: "GitHub",
      username: "jainras-peter",
      link: "https://github.com/Jainras-Peter",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
       stats: "10+ Repositories"
    },
    {
      platform: "LeetCode",
      username: "Jainras",
      link: "https://leetcode.com/u/Jainras/",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.8-2.265-6.894-1.855-9.13 1.003l-4.131 4.424a5.282 5.282 0 0 0-1.306 2.279 5.26 5.26 0 0 0-.125.581A5.285 5.285 0 0 0 .669 15.6a6.03 6.03 0 0 0 .557 1.245 6.096 6.096 0 0 0 1.469 1.963l4.277 4.193c3.042 2.927 7.986 2.87 11.008-.153l2.396-2.392c1.58-1.58 1.58-4.146 0-5.725a4.831 4.831 0 0 0-6.83 0l-2.396 2.392a.7.7 0 0 1-.989 0 .7.7 0 0 1 0-.99l2.396-2.391a6.7 6.7 0 0 1 9.483 9.482l-2.396 2.392c-3.94 3.94-10.317 4.015-14.31.153l-4.277-4.193a7.928 7.928 0 0 1-2.018-2.581 7.827 7.827 0 0 1-.723-1.668 7.27 7.27 0 0 1-.118-2.311 7.207 7.207 0 0 1 .172-.792 7.206 7.206 0 0 1 1.79-3.085L9.13 5.928c3.023-3.237 8.056-3.473 11.31-.539l3.5 2.831c2.142 1.731 2.48 4.859.758 7.002-.859 1.069-2.16 1.654-3.662 1.654s-2.803-.585-3.662-1.654l-3.5-2.831c-.859-.695-2.16-1.069-3.662-1.069s-2.803.374-3.662 1.069L5.253 13.49c-1.58 1.58-1.58 4.146 0 5.725a4.831 4.831 0 0 0 6.83 0l2.396-2.392a.7.7 0 0 1 .989 0 .7.7 0 0 1 0 .99l-2.396 2.391a6.7 6.7 0 0 1-9.483-9.482l2.396-2.392c3.94-3.94 10.317-4.015 14.31-.153l4.277 4.193a7.928 7.928 0 0 1 2.018 2.581 7.827 7.827 0 0 1 .723 1.668 7.27 7.27 0 0 1 .118 2.311 7.207 7.207 0 0 1-.172.792 7.206 7.206 0 0 1-1.79 3.085L14.87 18.072c-3.023 3.237-8.056 3.473-11.31.539l-3.5-2.831C-1.182 14.049-1.52 10.921.202 8.778c.859-1.069 2.16-1.654 3.662-1.654s2.803.585 3.662 1.654l3.5 2.831c.859.695 2.16 1.069 3.662 1.069s2.803-.374 3.662-1.069l1.896-1.896c1.58-1.58 1.58-4.146 0-5.725z"/>
        </svg>
      ),
      stats: "200+ Problems Solved"
    },
    {
      platform: "Geeks For Geeks",
      username: "jainsuh3d2",
      link: "https://www.geeksforgeeks.org/user/jainsuh3d2/",
      icon: (
        // GFG logo SVG
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="#681c1cff"/>
          <text x="16" y="21" textAnchor="middle" fontSize="14" fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold">GFG</text>
        </svg>
      ),
      stats: "150+ Problems Solved"
    },
    
    {
      platform: "HackerRank",
      username: "jainsubha30",
      link: "https://www.hackerrank.com/profile/jainsubha30",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .642 1.114.642 10.886 0 12-.642 1.114-9.107 6-10.392 6s-9.75-4.886-10.392-6c-.642-1.114-.642-10.886 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V7.057c0-.143-.116-.258-.258-.258H8.963c-.141 0-.258.115-.258.258v9.886c0 .141.117.258.258.258h.742c.142 0 .258-.117.258-.258v-4.630h4.074v4.630c0 .141.116.258.258.258h.742c.141 0 .258-.117.258-.258V7.057c0-.143-.117-.258-.258-.258h-.742z"/>
        </svg>
      ),
      stats: "5 Star in Problem Solving"
    }
  ];

  return (
    <section id="profile" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Coding Profiles</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Connect with me on various coding platforms and explore my programming journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:bg-surface-elevated group animate-slide-up block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {profile.icon}
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {profile.platform}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-3">
                {profile.username}
              </p>
              
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                {profile.stats}
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </a>
          ))}
        </div>

       
        
      </div> 
    </section>
  );
};

export default ProfileSection;