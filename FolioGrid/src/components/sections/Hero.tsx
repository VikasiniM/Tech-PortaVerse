
import React from 'react';
import { ArrowDown, Code, FileText, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 animate-fade-in">
            <p className="text-purple font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Vikasini Mohanasundaram
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Full Stack Developer & Software Engineer specializing in Java and Spring Boot
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="btn-primary flex items-center gap-2">
                <FileText size={18} />
                Download CV
              </Button>
              
              <Button variant="outline" size="lg" className="btn-outline flex items-center gap-2">
                <Github size={18} />
                GitHub Profile
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple/10 rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple/5 rounded-full"></div>
              
              <div className="relative bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-10">
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                  <Code size={60} className="mx-auto text-purple mb-4" />
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">Vikasini Mohanasundaram</h3>
                    <p className="text-gray-600">Software Engineer</p>
                    <p className="text-purple font-medium">5+ Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-gray-400 hover:text-purple transition-colors">
            <ArrowDown size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
