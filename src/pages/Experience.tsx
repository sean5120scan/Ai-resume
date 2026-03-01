import { Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "[职位]",
    company: "[公司]",
    period: "2023 - Present",
    description: "Responsible for developing modern web applications using React and TypeScript. Improved site performance by 30%.",
  },
  {
    id: 2,
    role: "[前职位]",
    company: "[前公司]",
    period: "2021 - 2023",
    description: "Collaborated with cross-functional teams to deliver high-quality software solutions. Implemented responsive designs.",
  },
];

export default function Experience() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-resume-green inline-block pb-2">
        Work Experience
      </h2>
      
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-resume-blue text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Calendar className="w-5 h-5" />
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900">{exp.role}</div>
                <time className="font-caveat font-medium text-resume-purple">{exp.period}</time>
              </div>
              <div className="text-slate-500 font-semibold mb-2">{exp.company}</div>
              <div className="text-slate-600 text-sm">{exp.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}