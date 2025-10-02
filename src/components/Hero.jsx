import React from 'react';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8fw9Z-c-rqW3nWBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Decorative gradient overlay - does not block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl">
          <p className="mb-3 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-neutral-200 backdrop-blur">Next-gen Automotive</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Feel the rush. Drive the future.
          </h1>
          <p className="mt-4 text-neutral-300 leading-relaxed">
            Precision engineering meets immersive technology. Explore our performance lineup engineered for speed, safety, and sustainability.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#models" className="inline-flex items-center rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-medium shadow hover:bg-neutral-200 transition-colors">Browse Models</a>
            <a href="#features" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors">See Features</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
