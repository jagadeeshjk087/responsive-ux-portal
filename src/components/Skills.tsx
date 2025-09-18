import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'React JS', level: 95, icon: '⚛️' },
    { name: 'JavaScript', level: 90, icon: '🚀' },
    { name: 'HTML/CSS', level: 88, icon: '🎨' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'Express.js', level: 82, icon: '⚡' },
    { name: 'MongoDB', level: 80, icon: '🗄️' },
  ];

  const categories = [
    {
      title: 'Frontend',
      icon: '💻',
      description: 'Creating beautiful, responsive user interfaces',
      techs: ['React JS', 'JavaScript', 'HTML/CSS'],
      gradient: 'from-purple-600/20 to-pink-600/20',
      border: 'border-purple-500/20 hover:border-purple-400/40'
    },
    {
      title: 'Backend',
      icon: '⚙️',
      description: 'Building robust server-side applications',
      techs: ['Node.js', 'Express.js', 'MongoDB'],
      gradient: 'from-blue-600/20 to-cyan-600/20',
      border: 'border-blue-500/20 hover:border-blue-400/40'
    },
    {
      title: 'Tools & Development',
      icon: '🛠️',
      description: 'Modern development tools and practices',
      techs: ['Git', 'VS Code', 'NPM', 'REST APIs'],
      gradient: 'from-green-600/20 to-emerald-600/20',
      border: 'border-green-500/20 hover:border-green-400/40'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            My <span className="text-purple-400">Skills</span>
          </h2>

          {/* Skills Bar Chart Style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className={`bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm transition-all duration-700 hover:border-purple-400/50 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                  <span className="ml-auto text-purple-400 font-bold text-lg">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 150}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <div 
                key={category.title}
                className={`bg-gradient-to-br ${category.gradient} p-8 rounded-2xl backdrop-blur-sm border ${category.border} transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.techs.map((tech) => (
                      <span key={tech} className="bg-white/10 text-white px-2 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technologies Tags */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'React JS', 'JavaScript', 'HTML/CSS', 'Node.js', 'Express.js', 'MongoDB',
                'Git', 'REST APIs', 'JSON', 'NPM', 'VS Code', 'Responsive Design'
              ].map((tech, index) => (
                <span
                  key={tech}
                  className={`bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white px-4 py-2 rounded-full border border-purple-500/30 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;