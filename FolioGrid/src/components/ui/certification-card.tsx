
import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

const CertificationCard = ({
  title,
  issuer,
  date,
  image,
  credentialUrl
}: CertificationCardProps) => {
  return (
    <div className="certification-card group">
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {credentialUrl && (
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <a 
              href={credentialUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-purple rounded-md flex items-center"
            >
              View Credential <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <p className="text-gray-600 mb-2">{issuer}</p>
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar size={14} className="mr-1" />
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
