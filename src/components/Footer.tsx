import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-indigo-400 mb-4">Atulyam</h3>
            <p className="text-slate-400 text-sm">
              Building beautiful, performant web experiences with modern technologies.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">About</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition">Twitter</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">GitHub</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© {currentYear} Atulyam. All rights reserved.</p>
          <p className="text-slate-500 text-xs mt-4 sm:mt-0">Made with ❤️ using React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
