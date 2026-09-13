import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const TechDashboard = () => {
  const [techList, setTechList] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const themeGradient = "from-orange-500 via-pink-500 to-violet-600";

  const svgIcons = {
    react: <svg viewBox="0 0 24 24" className="h-10 w-10 text-cyan-400 fill-current"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>,
    vue: <svg viewBox="0 0 24 24" className="h-10 w-10 text-emerald-500 fill-current"><path d="M12 2L2 22h4l6-12 6 12h4L12 2z"/></svg>,
    svelte: <svg viewBox="0 0 24 24" className="h-10 w-10 text-orange-600 fill-current"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/></svg>,
    nextjs: <svg viewBox="0 0 24 24" className="h-10 w-10 text-black fill-current"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9L17 12l-6 4.5z"/></svg>,
    nodejs: <svg viewBox="0 0 24 24" className="h-10 w-10 text-green-600 fill-current"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm-1 14.5v-9L17 12l-6 4.5z"/></svg>,
    postgresql: <svg viewBox="0 0 24 24" className="h-10 w-10 text-blue-600 fill-current"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>,
    redis: <svg viewBox="0 0 24 24" className="h-10 w-10 text-red-600 fill-current"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"/></svg>,
    javascript: <svg viewBox="0 0 24 24" className="h-10 w-10 text-amber-400 fill-current"><path d="M3 3v18h18V3H3zm14.5 12h-2v3h-2v-3h-2v-2h6v2z"/></svg>,
    typescript: <svg viewBox="0 0 24 24" className="h-10 w-10 text-blue-500 fill-current"><path d="M3 3v18h18V3H3zm11.5 11h-2v4h-2v-4h-2v-2h6v2z"/></svg>,
    java: <svg viewBox="0 0 24 24" className="h-10 w-10 text-orange-500 fill-current"><path d="M2 21h20v-2H2v2zM20 8h-2V6h2v2zm-4 4h-2v-2h2v2zm4 0h-2v-2h2v2zM6 12h2v2H6v-2zm0-4h2v2H6V8z"/></svg>,
    tailwind: <svg viewBox="0 0 24 24" className="h-10 w-10 text-sky-400 fill-current"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 14.5c-3.04 0-5.5-2.46-5.5-5.5S8.96 6.5 12 6.5s5.5 2.46 5.5 5.5-2.46 5.5-5.5 5.5z"/></svg>,
    docker: <svg viewBox="0 0 24 24" className="h-10 w-10 text-blue-500 fill-current"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-2 10h-4v-4h4v4z"/></svg>
  };

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setTechList(data);
          setIsLoading(false);
        }, 500);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    const exists = selectedStack.some((item) => item.id === tech.id);
    if (exists) {
      toast.error(`"${tech.name}" is already in your workspace stack!`, {
        position: "top-right",
        autoClose: 3000
      });
      return;
    }
    setSelectedStack([...selectedStack, tech]);
    toast.success(`Successfully added ${tech.name} to your stack!`, {
      position: "top-right",
      autoClose: 2000
    });
  };

  const handleRemoveItem = (tech) => {
    const updated = selectedStack.filter((item) => item.id !== tech.id);
    setSelectedStack(updated);
    toast.info(`Removed ${tech.name} from your stack.`, {
      position: "top-right",
      autoClose: 2000
    });
  };

  const handleClearAll = () => {
    setSelectedStack([]);
    toast.warn("Cleared all technologies from your workspace.", {
      position: "top-right",
      autoClose: 2000
    });
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center py-32 gap-4">
        <span className="loading loading-spinner loading-lg text-pink-600"></span>
        <p className="text-sm font-semibold text-gray-500">Loading DevStack components...</p>
      </div>
    );
  }
  return (
    <div id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <div className="mb-10 text-center lg:text-left">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Explore the{' '}
          <span className={`bg-gradient-to-r ${themeGradient} bg-clip-text text-transparent`}>
            Technologies
          </span>
        </h2>
        <p className="mt-2 text-gray-500">Pick technologies to construct your production deployment workflow.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:col-span-3 gap-6">
          {techList.map((tech) => {
            const isAdded = selectedStack.some((item) => item.id === tech.id);
            return (
              <div key={tech.id} className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-1 bg-gray-50 rounded-lg">
                      {svgIcons[tech.id] || svgIcons.react}
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
                    disabled={isAdded}
                    className={`w-full h-11 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                      isAdded
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-not-allowed'
                        : `bg-gradient-to-r ${themeGradient} text-white hover:opacity-90 shadow-sm`
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
                ? 'No technologies selected yet.' 
                : `${selectedStack.length} Technology Selected`
              }
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
                      <div className="h-10 w-10 flex items-center justify-center scale-75">
                        {svgIcons[item.id]}
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
                      <svg xmlns="http://w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
