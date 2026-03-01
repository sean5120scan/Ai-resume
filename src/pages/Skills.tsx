export default function Skills() {
  const skills = [
    { name: "React", level: 90, color: "bg-blue-400" },
    { name: "TypeScript", level: 85, color: "bg-blue-600" },
    { name: "Tailwind CSS", level: 95, color: "bg-cyan-400" },
    { name: "Node.js", level: 80, color: "bg-green-500" },
    { name: "Design", level: 75, color: "bg-purple-400" },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-resume-purple inline-block pb-2">
        Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-700">Technical Proficiency</h3>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify之间 mb-1">
                  <span className="text-base font-medium text-gray-700">{skill.name}</span>
                  <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-700">Tools & Others</h3>
          <div className="flex flex-wrap gap-3">
            {["Git", "VS Code", "Figma", "Docker", "AWS", "Vercel", "Agile", "CI/CD"].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg shadow-sm border border-gray-100 hover:bg-resume蓝色 hover:text-white transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}