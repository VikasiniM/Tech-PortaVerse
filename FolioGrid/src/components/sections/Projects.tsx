
import React from 'react';
import ProjectCard from '../ui/project-card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with Spring Boot, MySQL, and React.",
      image: "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["Java", "Spring Boot", "MySQL", "React"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates and notifications.",
      image: "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "Banking API System",
      description: "A secure banking API system with transaction management and user authentication.",
      image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
      tags: ["Java", "Spring Boot", "MySQL", "REST API"],
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Hospital Management System",
      description: "A comprehensive solution for hospital administration, patient records, and appointment scheduling.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Projects</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
          
          <div className="project-card flex flex-col justify-center items-center text-center p-8 bg-purple/5 border-2 border-dashed border-purple/20">
            <h3 className="text-xl font-medium mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-600 mb-6">Check back later for more of my work or visit my GitHub profile.</p>
            <Button variant="outline" className="btn-outline">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
