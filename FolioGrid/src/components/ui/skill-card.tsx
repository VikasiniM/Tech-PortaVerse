
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  level: number;
  color?: string;
}

const SkillCard = ({ icon: Icon, title, level, color = "text-purple" }: SkillCardProps) => {
  const getProgressLevel = () => {
    return Array(5).fill(0).map((_, i) => (
      <div 
        key={i} 
        className={`h-1.5 w-6 rounded-full ${i < level ? color : 'bg-gray-200'}`}
      />
    ));
  };

  return (
    <div className="skill-card group">
      <div className={`p-4 rounded-full bg-gray-50 mb-4 group-hover:bg-purple/10 transition-colors duration-300`}>
        <Icon className={`w-8 h-8 ${color}`} />
      </div>
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <div className="flex gap-1 mt-auto">
        {getProgressLevel()}
      </div>
    </div>
  );
};

export default SkillCard;
