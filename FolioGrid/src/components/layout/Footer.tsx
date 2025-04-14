
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-purple mb-2">Vikasini Mohanasundaram</h3>
            <p className="text-gray-600">Full Stack Developer & Software Engineer</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-purple">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-purple">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-purple">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="mailto:contact@example.com" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-purple">
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Vikasini Mohanasundaram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
