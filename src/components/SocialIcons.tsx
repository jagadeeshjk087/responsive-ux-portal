import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const SocialIcons = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/johndoe',
      color: 'text-blue-500 hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/johndoe',
      color: 'text-gray-300 hover:text-white'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:john.doe@example.com',
      color: 'text-purple-500 hover:text-purple-400'
    },
    {
      name: 'Phone',
      icon: Phone,
      url: 'tel:+15551234567',
      color: 'text-green-500 hover:text-green-400'
    }
  ];

  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col space-y-3">
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.color} bg-slate-800/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-slate-700/50 transition-all duration-300 hover:scale-110 hover:shadow-xl group`}
            title={social.name}
          >
            <IconComponent size={20} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;