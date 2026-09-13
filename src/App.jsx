import React from 'react';
import Navbar from '/src/components/Navbar';
import Hero from '/src/components/Hero';
import TechDashboard from '/src/components/TechDashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TechDashboard />
      <ToastContainer />
    </div>
  );
}

export default App;
