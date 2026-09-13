import React, { useState } from 'react';
import logoText from '/src/assets/logo-text.png';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const themeGradient = "from-orange-500 via-pink-500 to-violet-600";

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 min-h-[72px] items-center lg:flex lg:justify-between lg:p-0">
          
          <div className="justify-self-start flex items-center lg:navbar-start w-auto">
            <div className="dropdown lg:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-gray-700 flex items-center justify-center">
                <svg xmlns="http://w3.org" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-3 shadow-xl bg-white rounded-2xl w-52 border border-gray-100 gap-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setActiveTab(item.id)}
                      className={`font-medium py-2 rounded-xl transition-all ${
                        activeTab === item.id 
                          ? 'text-pink-600 bg-pink-50' 
                          : 'text-gray-600 active:bg-transparent'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="justify-self-center flex items-center lg:navbar-start lg:w-auto">
            <a href="#home" onClick={() => setActiveTab('home')} className="flex items-center">
              <img src={logoText} alt="DevStack" className="h-8 w-auto object-contain" />
            </a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-8 text-[15px]">
              {navItems.map((item) => (
                <li key={item.id} className="relative py-2 list-none">
                  <a
                    href={`#${item.id}`}
                    onClick={() => setActiveTab(item.id)}
                    className={`font-medium transition-colors duration-300 relative block pb-1 ${
                      activeTab === item.id ? 'text-pink-600' : 'text-gray-600 hover:text-pink-600'
                    }`}
                  >
                    {item.label}
                    <span 
                      className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 ${
                        activeTab === item.id ? 'w-full' : 'w-0'
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="justify-self-end flex items-center lg:navbar-end w-auto gap-2 sm:gap-4">
            <button className="h-10 px-2 sm:px-4 text-[14px] font-semibold text-gray-600 hover:text-white hover:bg-black rounded-full transition-all duration-300 bg-transparent border-none cursor-pointer whitespace-nowrap">
              Sign In
            </button>
            <button className={`h-10 px-4 sm:px-5 text-[14px] font-semibold text-white rounded-full bg-gradient-to-r ${themeGradient} hover:opacity-90 transition-opacity shadow-sm cursor-pointer whitespace-nowrap`}>
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
