
import React, { useEffect, useRef, useState } from 'react';
import { User, Code, Settings } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            About <span className="text-purple-400">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Passionate Developer & Designer
              </h3>
              <p className="text-gray-300 leading-relaxed">
                With over 5 years of experience in web development, I specialize in creating 
                modern, responsive applications using React, Node.js, and cutting-edge design 
                principles. I'm passionate about turning complex problems into simple, 
                beautiful designs.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open source projects, or sharing knowledge with the developer community.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  Problem Solver
                </span>
                <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                  Team Player
                </span>
                <span className="bg-pink-600/20 text-pink-300 px-3 py-1 rounded-full text-sm">
                  Creative Thinker
                </span>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20">
                <div className="flex items-center mb-4">
                  <User className="text-purple-400 mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-white">Experience</h4>
                </div>
                <p className="text-gray-300">5+ years building web applications</p>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-6 rounded-lg backdrop-blur-sm border border-blue-500/20">
                <div className="flex items-center mb-4">
                  <Code className="text-blue-400 mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-white">Projects</h4>
                </div>
                <p className="text-gray-300">50+ successful projects delivered</p>
              </div>

              <div className="bg-gradient-to-r from-pink-600/20 to-red-600/20 p-6 rounded-lg backdrop-blur-sm border border-pink-500/20">
                <div className="flex items-center mb-4">
                  <Settings className="text-pink-400 mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-white">Technologies</h4>
                </div>
                <p className="text-gray-300">Modern stack with latest frameworks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
