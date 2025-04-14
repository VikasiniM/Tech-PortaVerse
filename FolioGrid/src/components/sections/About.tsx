
import React from 'react';
import { Briefcase, GraduationCap, MapPin, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          <div className="w-full lg:w-2/5">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple/10 rounded-lg mr-4">
                  <User className="text-purple" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Personal Info</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 mb-1">Name</p>
                  <p className="font-medium">Vikasini Mohanasundaram</p>
                </div>
                
                <div>
                  <p className="text-gray-500 mb-1">Email</p>
                  <p className="font-medium">vikasini@example.com</p>
                </div>
                
                <div className="flex items-center">
                  <MapPin size={18} className="text-purple mr-2" />
                  <p>Chennai, Tamil Nadu, India</p>
                </div>
                
                <div className="flex items-center">
                  <Briefcase size={18} className="text-purple mr-2" />
                  <p>Available for opportunities</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-3/5">
            <h3 className="text-2xl font-semibold mb-4">I'm a Full Stack Developer with expertise in Java & Spring Boot</h3>
            
            <p className="text-gray-700 mb-6">
              Passionate about creating robust, scalable web applications with clean, maintainable code. 
              I specialize in Java backend development with Spring Boot and have extensive experience
              working with MySQL databases and responsive frontend implementations.
            </p>
            
            <p className="text-gray-700 mb-8">
              With over 5 years of industry experience, I've successfully delivered numerous 
              enterprise-level applications, focusing on performance optimization and user experience.
              I'm constantly learning new technologies and methodologies to stay at the forefront of 
              software development practices.
            </p>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-2">
                  <GraduationCap size={20} className="text-purple mr-2" />
                  <h4 className="text-lg font-medium">Education</h4>
                </div>
                <div className="ml-7 space-y-4">
                  <div>
                    <p className="font-medium">M.Tech in Computer Science</p>
                    <p className="text-gray-600">College of Engineering, Chennai (2015-2017)</p>
                  </div>
                  <div>
                    <p className="font-medium">B.E in Computer Science</p>
                    <p className="text-gray-600">Anna University, Chennai (2011-2015)</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <Briefcase size={20} className="text-purple mr-2" />
                  <h4 className="text-lg font-medium">Work Experience</h4>
                </div>
                <div className="ml-7 space-y-4">
                  <div>
                    <p className="font-medium">Senior Java Developer</p>
                    <p className="text-gray-600">Tech Solutions Inc. (2020-Present)</p>
                  </div>
                  <div>
                    <p className="font-medium">Software Engineer</p>
                    <p className="text-gray-600">Global Systems Ltd. (2017-2020)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
