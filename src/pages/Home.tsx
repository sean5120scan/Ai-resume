export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
      <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-resume-green via-resume-blue to-resume-purple p-1 shadow-lg animate-spin-slow">
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
             {/* Placeholder for Avatar */}
             <span className="text-4xl">🧑‍💻</span>
        </div>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-resume-blue to-resume-purple">
        Hi, I'm [姓名]
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
        A [职位] at [公司] passionate about building beautiful and functional web experiences.
      </p>
      
      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 rounded-full bg-resume-blue text-white font-semibold shadow-lg hover:bg-blue-500 transition-all transform hover:scale-105">
          Download CV
        </button>
        <button className="px-6 py-3 rounded-full border-2 border-resume-purple text-resume-purple font-semibold hover:bg-resume-purple hover:text-white transition-all transform hover:scale-105">
          Contact Me
        </button>
      </div>
    </div>
  );
}