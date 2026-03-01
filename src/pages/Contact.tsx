import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-resume-green inline-block pb-2">
        Contact Me
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="text灰色-600 text-lg">
            I'm currently available for freelance work or full-time opportunities.
            If you have a project that needs some creative touch, let's talk.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg text蓝色-700">
              <Mail className="w-6 h-6" />
              <span>[邮箱地址]</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg text绿色-700">
              <Phone className="w-6 h-6" />
              <span>[电话号码]</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg text紫色-700">
              <MapPin className="w-6 h-6" />
              <span>[所在城市]</span>
            </div>
          </div>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-resume-blue focus:border-transparent outline-none transition-shadow" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-resume-blue focus:border-transparent outline-none transition-shadow" placeholder="your@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-resume-blue focus:border-transparent outline-none transition-shadow h-32" placeholder="Hello..." />
          </div>
          <button type="button" className="w-full py-3 bg-gradient-to-r from-resume-blue to-resume-purple text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            <Send className="w-5 h-5" /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
}