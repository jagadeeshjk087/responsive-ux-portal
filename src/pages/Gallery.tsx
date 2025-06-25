
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projectImages = {
    'e-commerce': [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop'
    ],
    'task-management': [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop'
    ],
    'social-dashboard': [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop'
    ]
  };

  const projectTitles = {
    'e-commerce': 'E-Commerce Platform',
    'task-management': 'Task Management App',
    'social-dashboard': 'Social Media Dashboard'
  };

  const images = projectImages[projectId as keyof typeof projectImages] || projectImages['e-commerce'];
  const title = projectTitles[projectId as keyof typeof projectTitles] || 'Project Gallery';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-4"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Projects
            </button>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {title} <span className="text-purple-400">Gallery</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Explore the visual journey of this project through these screenshots and design mockups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image}
                    alt={`${title} Screenshot ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-1">
                    Screenshot {index + 1}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {title} interface design
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
              <p className="text-gray-300 leading-relaxed">
                This gallery showcases the various screens and features of the {title.toLowerCase()}. 
                Each image represents different aspects of the user interface, demonstrating the 
                thoughtful design and attention to detail that went into creating this application.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
