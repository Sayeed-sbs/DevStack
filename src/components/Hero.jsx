import React from 'react';
import bannerImg from '../assets/banner-stack.png';

const Hero = () => {
  return (
    <div id="home" className="relative w-full bg-white pt-10 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col justify-center text-center lg:text-left max-w-2xl mx-auto lg:mx-0 order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Build Your Ideal
              <span className="block mt-2 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>
            
            <p className="mt-6 text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href="#technologies"
                className="h-12 px-6 flex items-center justify-center text-[15px] font-semibold text-white rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-90 transition-all shadow-md cursor-pointer"
              >
                Explore Technologies
              </a>
            <a 
              href="#about"
              className="h-12 px-6 flex items-center justify-center text-[15px] font-semibold text-gray-700 rounded-xl border border-gray-200 bg-transparent hover:border-black hover:text-gray-100 hover:bg-black transition-all duration-300 cursor-pointer"
            >
              Learn More
            </a>

            </div>
          </div>

          <div className="flex justify-center items-center order-2 w-full max-w-md lg:max-w-full mx-auto">
            <img 
              src={bannerImg} 
              alt="Development Stack Illustration" 
              className="w-full h-auto max-h-[450px] object-contain drop-shadow-xl transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

        </div>
      </div>
    </div>
    
  );
};

export default Hero;
