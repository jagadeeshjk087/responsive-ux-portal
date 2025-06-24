
import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'React.js', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript/TypeScript', level: 90, color: 'from-yellow-500 to-orange-500' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'Python', level: 80, color: 'from-purple-500 to-pink-500' },
    { name: 'UI/UX Design', level: 88, color: 'from-pink-500 to-rose-500' },
    { name: 'Database Design', level: 82, color: 'from-indigo-500 to-purple-500' },
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

  return (
    <section ref={sectionRef} id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            My <span className="text-purple-400">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700/50">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-purple-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out ${
                      animatedBars[skill.name] ? `w-[${skill.level}%]` : 'w-0'
                    }`}
                    style={{ 
                      width: animatedBars[skill.name] ? `${skill.level}%` : '0%' 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-white mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'React', 'Vue.js', 'Angular', 'Node.js', 'Express', 'MongoDB',
                'PostgreSQL', 'Docker', 'AWS', 'Git', 'Figma', 'Tailwind CSS'
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white px-4 py-2 rounded-full border border-purple-500/30 hover:border-purple-400 transition-all duration-300 transform hover:scale-105"
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
