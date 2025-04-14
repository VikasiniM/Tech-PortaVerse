
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl
}: ProjectCardProps) => {
  return (
    <div className="project-card h-full">
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-purple/10 text-purple text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between mt-auto pt-4 border-t border-gray-100">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-purple transition-colors"
            >
              <Github size={18} className="mr-1" />
              <span>Code</span>
            </a>
          )}
          
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-purple transition-colors ml-auto"
            >
              <span>Live Demo</span>
              <ExternalLink size={18} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
