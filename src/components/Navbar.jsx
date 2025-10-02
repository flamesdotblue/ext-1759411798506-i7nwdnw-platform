import React from 'react';

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-neutral-900/50 px-4 py-3 backdrop-blur-md">
          <a href="#home" className="font-semibold tracking-tight text-white">AutoMotion</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#models" className="hover:text-white transition-colors">Models</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <a href="#models" className="inline-flex items-center rounded-full bg-white text-neutral-900 px-4 py-2 text-sm font-medium shadow hover:bg-neutral-200 transition-colors">Explore</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
