import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "[项目名称 1]",
    tech: "React, Tailwind, Node.js",
    description: "A full-stack application that helps users manage their tasks efficiently. Features include real-time updates and team collaboration.",
    color: "bg-resume-green",
  },
  {
    id: 2,
    title: "[项目名称 2]",
    tech: "Vue, Firebase",
    description: "An e-commerce platform with a custom shopping cart and payment integration. Optimized for mobile devices.",
    color: "bg-resume-blue",
  },
  {
    id: 3,
    title: "[项目名称 3]",
    tech: "Next.js, Prisma",
    description: "A blog platform with markdown support and SEO optimization. High lighthouse score.",
    color: "bg-resume-purple",
  },
];

export default function Projects() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-resume-blue inline-block pb-2">
        Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className={`h-2 bg-gradient-to-r from-transparent via-${project.color.replace("bg-", "")} to-transparent opacity-50`} />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-sm font-medium text-resume-purple mb-4">{project.tech}</p>
              <p className="text-gray-600 mb-6">{project.description}</p>
              
              <div className="flex gap-4">
                <a href="#" className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-resume-blue transition-colors">
                  <Github className="w-4 h-4" /> Code
                </a>
                <a href="#" className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-resume-blue transition-colors">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}