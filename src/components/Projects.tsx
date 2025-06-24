
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Code, Projector } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include product management, user authentication, and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/placeholder.svg',
      demoLink: '#',
      codeLink: '#',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['Vue.js', 'Socket.io', 'Express', 'PostgreSQL'],
      image: '/placeholder.svg',
      demoLink: '#',
      codeLink: '#',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with beautiful charts, real-time data, and automated reporting features.',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      image: '/placeholder.svg',
      demoLink: '#',
      codeLink: '#',
      gradient: 'from-green-500 to-emerald-500'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Featured <span className="text-purple-400">Projects</span>
          </h2>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group bg-slate-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.demoLink}
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors group/link"
                    >
                      <Projector size={18} className="mr-2" />
                      <span className="mr-1">Demo</span>
                      <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={project.codeLink}
                      className="flex items-center text-gray-400 hover:text-white transition-colors group/link"
                    >
                      <Code size={18} className="mr-2" />
                      <span className="mr-1">Code</span>
                      <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
