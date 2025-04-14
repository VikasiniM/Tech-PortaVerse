
import React from 'react';
import { Code, Database, FileCode, Globe, Layout, Server } from 'lucide-react';
import SkillCard from '../ui/skill-card';

const Skills = () => {
  const skills = [
    { id: 1, title: "Java", icon: Code, level: 5, color: "text-purple" },
    { id: 2, title: "Spring Boot", icon: Server, level: 5, color: "text-purple" },
    { id: 3, title: "MySQL", icon: Database, level: 4, color: "text-purple" },
    { id: 4, title: "REST APIs", icon: Globe, level: 5, color: "text-purple" },
    { id: 5, title: "JavaScript", icon: FileCode, level: 4, color: "text-purple" },
    { id: 6, title: "HTML/CSS", icon: Layout, level: 4, color: "text-purple" },
    { id: 7, title: "React", icon: Code, level: 3, color: "text-purple" },
    { id: 8, title: "Docker", icon: Server, level: 3, color: "text-purple" }
  ];

  return (
    <section id="skills" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Skills</h2>
        
        <div className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <SkillCard
                key={skill.id}
                icon={skill.icon}
                title={skill.title}
                level={skill.level}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
