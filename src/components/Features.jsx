import React from 'react';
import { Car, Gauge, Cog, Shield } from 'lucide-react';

const features = [
  {
    icon: Gauge,
    title: 'Hyper-Responsive Performance',
    desc: 'Adaptive drive modes and instant torque deliver breathtaking acceleration and precision handling.'
  },
  {
    icon: Shield,
    title: 'Advanced Safety Suite',
    desc: 'Multi-sensor awareness, lane intelligence, and predictive braking keep you protected in every moment.'
  },
  {
    icon: Cog,
    title: 'Intelligent Powertrain',
    desc: 'High-efficiency hybrid and EV architectures optimized for both range and thrills.'
  },
  {
    icon: Car,
    title: 'Crafted Aerodynamics',
    desc: 'Wind-tunnel shaped exteriors and active aero components reduce drag and increase stability.'
  }
];

function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Engineered for Excellence</h2>
        <p className="mt-3 text-neutral-400 max-w-2xl mx-auto">
          A harmonious blend of power, safety, and intelligence—designed to elevate every drive.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-neutral-900">
              <Icon size={22} />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
