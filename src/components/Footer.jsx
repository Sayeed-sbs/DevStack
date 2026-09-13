import React from 'react';
import logoText from '/src/assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-16 pb-8 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12">
          
          <div className="lg:col-span-2 flex flex-col gap-4 text-center md:text-left items-center md:items-start">
            <a href="#home" className="flex items-center justify-center md:justify-start">
              <img src={logoText} alt="DevStack" className="h-8 w-auto object-contain" />
            </a>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm text-center md:text-left mx-auto md:mx-0">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 mt-2 text-gray-500">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-pink-600 transition-colors text-sm font-medium">GitHub</a>
              <span className="text-gray-300 hidden md:inline">•</span>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-pink-600 transition-colors text-sm font-medium">Twitter</a>
              <span className="text-gray-300 hidden md:inline">•</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-pink-600 transition-colors text-sm font-medium">LinkedIn</a>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-center md:text-left">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Product</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-500">
              <li><a href="#home" className="hover:text-pink-600 transition-colors">Home</a></li>
              <li><a href="#technologies" className="hover:text-pink-600 transition-colors">Technologies</a></li>
              <li><a href="#projects" className="hover:text-pink-600 transition-colors">Projects</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 text-center md:text-left">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-500">
              <li><a href="#about" className="hover:text-pink-600 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-pink-600 transition-colors">Contact</a></li>
              <li><a href="#careers" className="hover:text-pink-600 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 text-center md:text-left">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Legal</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-500">
              <li><a href="#privacy" className="hover:text-pink-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-pink-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 border-t border-gray-100">
          <p>&copy; 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
