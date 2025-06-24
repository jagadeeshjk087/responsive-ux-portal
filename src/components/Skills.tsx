
import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'React.js', level: 95, color: 'from-blue-500 to-cyan-500', icon: '⚛️' },
    { name: 'JavaScript/TypeScript', level: 90, color: 'from-yellow-500 to-orange-500', icon: '🚀' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500', icon: '🟢' },
    { name: 'Python', level: 80, color: 'from-purple-500 to-pink-500', icon: '🐍' },
    { name: 'UI/UX Design', level: 88, color: 'from-pink-500 to-rose-500', icon: '🎨' },
    { name: 'Database Design', level: 82, color: 'from-indigo-500 to-purple-500', icon: '🗄️' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate bars with staggered timing
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedBars(prev => ({ ...prev, [skill.name]: true }));
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CircularProgress = ({ skill, isAnimated }: { skill: typeof skills[0], isAnimated: boolean }) => {
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = isAnimated ? circumference - (skill.level / 100) * circumference : circumference;

    return (
      <div className="relative w-32 h-32 mx-auto mb-4">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#374151"
            strokeWidth="8"
            fill="transparent"
            className="opacity-20"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className="text-purple-500" stopColor="currentColor" />
              <stop offset="100%" className="text-pink-500" stopColor="currentColor" />
            </linearGradient>
          </defs>
        </svg>
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl mb-1">{skill.icon}</span>
          <span className="text-white font-bold text-lg">{skill.level}%</span>
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            My <span className="text-purple-400">Skills</span>
          </h2>

          {/* Circular Progress Skills */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto mb-16">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className={`text-center transform transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CircularProgress skill={skill} isAnimated={animatedBars[skill.name]} />
                <h3 className="text-white font-semibold text-sm">{skill.name}</h3>
              </div>
            ))}
          </div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Frontend</h3>
                <p className="text-gray-300 text-sm mb-4">Creating beautiful, responsive user interfaces</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['React', 'Vue.js', 'Angular', 'Tailwind CSS'].map((tech) => (
                    <span key={tech} className="bg-white/10 text-white px-2 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-8 rounded-2xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Backend</h3>
                <p className="text-gray-300 text-sm mb-4">Building robust server-side applications</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Node.js', 'Express', 'Python', 'MongoDB'].map((tech) => (
                    <span key={tech} className="bg-white/10 text-white px-2 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-8 rounded-2xl backdrop-blur-sm border border-green-500/20 hover:border-green-400/40 transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Tools & DevOps</h3>
                <p className="text-gray-300 text-sm mb-4">Streamlining development workflows</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Docker', 'AWS', 'Git', 'Figma'].map((tech) => (
                    <span key={tech} className="bg-white/10 text-white px-2 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Technologies */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'React', 'Vue.js', 'Angular', 'Node.js', 'Express', 'MongoDB',
                'PostgreSQL', 'Docker', 'AWS', 'Git', 'Figma', 'Tailwind CSS'
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
