'use client';
import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// Mock project data - replace with your own projects
const projectsData = [
  {
    id: 1,
    title: "title-1",
    description: "description-1",
    technologies: ["technologies-1-1", "technologies-1-2", "technologies-1-3"],
    image: "/images/projects/project1.jpg", // Add your project image
    githubUrl: "https://github.com/yourusername/project-repo",
    liveUrl: "https://project-demo.com",
    category: "web"
  },
  {
    id: 2,
    title: "title-2",
    description: "description-2",
    technologies: ["technologies-2-1", "technologies-2-2", "technologies-2-3"],
    image: "/images/projects/project2.jpg", // Add your project image
    githubUrl: "https://github.com/yourusername/project-repo",
    liveUrl: "https://project-demo.com",
    category: "app"
  },
  {
    id: 3,
    title: "title-3",
    description: "description-3",
    technologies: ["technologies-3-1", "technologies-3-2", "technologies-3-3"],
    image: "/images/projects/project3.jpg", // Add your project image
    githubUrl: "https://github.com/yourusername/project-repo",
    liveUrl: "https://project-demo.com",
    category: "web"
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  
  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            <button 
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md ${filter === "all" ? "bg-blue-500 text-white" : "bg-white"}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter("web")}
              className={`px-4 py-2 rounded-md ${filter === "web" ? "bg-blue-500 text-white" : "bg-white"}`}
            >
              Web
            </button>
            <button 
              onClick={() => setFilter("app")}
              className={`px-4 py-2 rounded-md ${filter === "app" ? "bg-blue-500 text-white" : "bg-white"}`}
            >
              Apps
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200">
                {/* Replace with your project image */}
                <div className="w-full h-full flex items-center justify-center bg-gray-300">
                  {/* Uncomment when images are added */}
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  /> */}
                  <p className="text-gray-600">Project Image</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
