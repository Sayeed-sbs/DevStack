import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import reactIcon from '/src/assets/react.svg';
import vueIcon from '/src/assets/vue.svg';
import svelteIcon from '/src/assets/svelte.svg';
import nextjsIcon from '/src/assets/nextjs.svg';
import nodejsIcon from '/src/assets/nodejs.svg';
import postgresqlIcon from '/src/assets/postgresql.svg';
import redisIcon from '/src/assets/redis.svg';
import javascriptIcon from '/src/assets/javascript.svg';
import typescriptIcon from '/src/assets/typescript.svg';
import javaIcon from '/src/assets/java.svg';
import tailwindIcon from '/src/assets/tailwind.svg';
import dockerIcon from '/src/assets/docker.svg';

const TechDashboard = () => {
  const [techList, setTechList] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const themeGradient = "from-orange-500 via-pink-500 to-violet-600";

  const localIcons = {
    react: reactIcon,
    vue: vueIcon,
    svelte: svelteIcon,
    nextjs: nextjsIcon,
    nodejs: nodejsIcon,
    postgresql: postgresqlIcon,
    redis: redisIcon,
    javascript: javascriptIcon,
    typescript: typescriptIcon,
    java: javaIcon,
    tailwind: tailwindIcon,
    docker: dockerIcon
  };

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechList(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    const found = selectedStack.find((item) => item.id === tech.id);
    if (found) {
      toast.error(`${tech.name} already added`);
      return;
    }
    setSelectedStack([...selectedStack, tech]);
    toast.success(`${tech.name} added`);
  };

  const handleRemoveItem = (tech) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== tech.id));
    toast.info(`${tech.name} removed`);
  };

  const handleClearAll = () => {
    setSelectedStack([]);
    toast.warn("Stack cleared");
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center py-32 gap-4">
        <span className="loading loading-spinner loading-lg text-pink-600"></span>
        <p className="text-sm font-semibold text-gray-500">Loading...</p>
      </div>
    );
  }
    return (
    <div id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <div className="mb-10 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore the{' '}
          <span className={`bg-gradient-to-r ${themeGradient} bg-clip-text text-transparent`}>
            Technologies
          </span>
        </h2>
        <p className="mt-2 text-gray-500">
          Select technologies and build your own stack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:col-span-3 gap-6">
          {techList.map((tech) => {
            const isAdded = selectedStack.some((item) => item.id === tech.id);
            return (
              <div 
                key={tech.id} 
                className={`bg-white rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative ${
                  isAdded
                    ? 'border-2 border-emerald-500 bg-emerald-50/20 shadow-sm ring-1 ring-emerald-500/10'
                    : 'border border-gray-100 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-gray-50 p-1 border border-gray-100 shadow-inner">
                      <img src={localIcons[tech.id]} alt={tech.name} className="h-8 w-8 object-contain" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-md bg-blue-50 text-blue-600">
                      {tech.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-500 line-clamp-3 mb-4">{tech.description}</p>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-medium">
                    <span className="px-2 py-1 bg-gray-50 text-gray-600 rounded-md border border-gray-100">
                      {tech.category}
                    </span>
                    <span className="px-2 py-1 bg-gray-50 text-gray-600 rounded-md border border-gray-100">
                      {tech.difficulty}
                    </span>
                    <span className="flex items-center gap-1 ml-auto text-amber-500 font-bold">
                      ★ {tech.rating}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToStack(tech)}
                    className={`w-full h-11 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                      isAdded
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100/50'
                        : 'bg-black text-white hover:bg-gray-800 shadow-sm'
                    }`}
                  >
                    {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm lg:sticky lg:top-24 flex flex-col justify-between min-h-[300px]">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Your Stack</h3>
            <p className="text-sm text-gray-400 mt-1 font-normal">
              {selectedStack.length === 0
                ? "No technology selected"
                : `${selectedStack.length} selected`}
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {selectedStack.length === 0 ? (
                <div className="border border-dashed border-gray-200 rounded-2xl py-12 px-4 text-center">
                  <p className="text-sm font-medium text-gray-400">Your stack is empty.</p>
                </div>
              ) : (
                selectedStack.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-50 p-1">
                        <img src={localIcons[item.id]} alt={item.name} className="h-8 w-8 object-contain" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 leading-tight">{item.name}</h4>
                        <p className="text-[11px] text-gray-400 mt-0.5">{item.category}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item)}
                      className="text-gray-400 hover:text-red-500 p-1 rounded-md hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <svg
                        xmlns="http://w3.org"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {selectedStack.length > 0 && (
            <button
              onClick={handleClearAll}
              className="mt-6 w-full h-12 text-[15px] font-bold text-red-600 bg-white border border-red-200 rounded-xl hover:bg-red-50 transition-all cursor-pointer"
            >
              Remove All
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default TechDashboard;
