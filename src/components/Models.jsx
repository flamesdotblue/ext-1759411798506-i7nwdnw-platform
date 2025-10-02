import React from 'react';
import { Gauge, Battery, Zap } from 'lucide-react';

const models = [
  {
    name: 'Apex R',
    tagline: 'Track-bred agility',
    specs: [
      { icon: Gauge, label: '0-60', value: '2.8s' },
      { icon: Zap, label: 'Power', value: '780 hp' },
      { icon: Battery, label: 'Range', value: '310 mi' }
    ]
  },
  {
    name: 'Evolve X',
    tagline: 'Electric grand tourer',
    specs: [
      { icon: Gauge, label: '0-60', value: '3.2s' },
      { icon: Zap, label: 'Power', value: '610 hp' },
      { icon: Battery, label: 'Range', value: '420 mi' }
    ]
  },
  {
    name: 'Urban S',
    tagline: 'Compact performance',
    specs: [
      { icon: Gauge, label: '0-60', value: '4.9s' },
      { icon: Zap, label: 'Power', value: '290 hp' },
      { icon: Battery, label: 'Range', value: '360 mi' }
    ]
  }
];

function Models() {
  return (
    <section id="models" className="py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Featured Models</h2>
        <p className="mt-3 text-neutral-400 max-w-2xl mx-auto">Choose your perfect balance of power, efficiency, and style.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {models.map((m) => (
          <article key={m.name} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900/60 to-neutral-900/30 p-6 transition-transform hover:-translate-y-1">
            <div className="mb-4 flex items-baseline justify-between">
              <div>
                <h3 className="text-xl font-semibold">{m.name}</h3>
                <p className="text-sm text-neutral-400">{m.tagline}</p>
              </div>
              <div className="h-10 w-10 rounded-lg bg-white text-neutral-900 grid place-items-center font-semibold">{m.name[0]}</div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {m.specs.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-neutral-900/40 p-3 text-center">
                  <s.icon size={18} className="mx-auto text-white" />
                  <div className="mt-1 text-xs text-neutral-400">{s.label}</div>
                  <div className="text-sm font-medium">{s.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <a href="#contact" className="text-sm text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">Request a test drive</a>
              <button className="text-sm rounded-full border border-white/20 bg-white/10 px-4 py-2 hover:bg-white/20 transition-colors">Configure</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Models;
