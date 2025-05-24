"use client";

import { skills } from '../constants/data';

export default function SkillsSection() {
  const skillCategories = [
    {
    name: 'Frontend',
    filter: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS']
  },
  {
    name: 'Backend',
    filter: ['Node.js', 'Express', 'Python', 'Django', 'SQL', 'MongoDB', 'C#', '.NET'] // <== dodane tutaj
  },
  {
    name: 'Tools',
    filter: ['Git', 'Docker', 'Figma', 'VS Code', 'Postman']
  }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
          My <span className="text-primary-600 dark:text-primary-400">Skills</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Here are the technologies and tools I work with on a regular basis.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const categorySkills = skills.filter(skill => 
              category.filter.includes(skill.name)
            );
            
            return (
              <div key={category.name} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {category.name}
                </h3>
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="flex items-start gap-4">

                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center mr-4"
                        style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                      >
                        <span className="text-xl">{skill.icon}</span>
                      </div>
                      <div className="flex-1">
                            <h4 className="font-medium text-gray-900 dark:text-white">{skill.name}</h4>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                                <div 
                                className="h-2 rounded-full transition-all duration-500"
                                style={{ 
                                    width: `${skill.level}%`,
                                    backgroundColor: skill.color
                                }}
                                ></div>
                            </div>
                            </div>

                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}