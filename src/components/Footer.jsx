import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer id="contact" className="mt-10 border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold">AutoMotion</h3>
            <p className="mt-2 text-neutral-400 max-w-sm">Performance automobiles crafted for those who demand more from every drive.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-neutral-300">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2 text-neutral-300"><Mail size={16} /> hello@automotion.com</li>
              <li className="flex items-center gap-2 text-neutral-300"><Phone size={16} /> +1 (555) 012-3456</li>
              <li className="flex items-center gap-2 text-neutral-300"><MapPin size={16} /> 500 Performance Ave, Velocity City</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-neutral-300">Newsletter</h4>
            <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="Your email" className="w-full rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20" />
              <button className="shrink-0 rounded-xl bg-white px-4 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-200 transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} AutoMotion. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-300">Privacy</a>
            <a href="#" className="hover:text-neutral-300">Terms</a>
            <a href="#" className="hover:text-neutral-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
