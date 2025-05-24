"use client";
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import { projects } from '../constants/data';

export default function ProjectsPreview() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Featured <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </h2>
          <Link
            href="/projects"
            className="px-4 py-2 text-primary-600 dark:text-primary-400 font-medium hover:underline"
          >
            View All Projects →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}