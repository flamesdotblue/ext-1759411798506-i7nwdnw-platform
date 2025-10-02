import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Models from './components/Models';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <section className="px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
          <Features />
          <Models />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
