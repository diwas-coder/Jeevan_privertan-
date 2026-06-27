import React, { useState } from 'react';
import { ViewType } from '../types';
import { Menu, X, Phone, HeartPulse, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
}

export default function Navbar({ currentView, setView }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: 'home' as ViewType },
    { label: 'About Us', value: 'about' as ViewType },
    { label: 'Our Services', value: 'services' as ViewType },
    { label: 'Get Free Consultation', value: 'appointment' as ViewType },
  ];

  const handleNavClick = (view: ViewType) => {
    setView(view);
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0px_4px_20px_rgba(30,58,138,0.05)] transition-all">
        <div className="flex justify-between items-center px-4 md:px-10 h-16 w-full max-w-7xl mx-auto">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <img 
              src="/images/logo-icon.png" 
              alt="Jeevan Parivartan Logo" 
              className="w-10 h-10 object-contain group-hover:scale-105 transition-all"
            />
            <div>
              <span className="font-sans text-lg md:text-xl font-extrabold tracking-tight text-primary block leading-none">
                Jeevan Parivartan
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">
                Rehabilitation Center
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`font-sans text-sm font-semibold transition-all relative py-1 ${
                  currentView === item.value 
                    ? 'text-primary' 
                    : 'text-slate-500 hover:text-primary'
                }`}
              >
                {item.label}
                {currentView === item.value && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Action Button & Menu Icon */}
          <div className="flex items-center gap-3">
            <a 
              href="tel:8423667868" 
              className="bg-amber-500 text-slate-950 px-5 py-2.5 rounded-full font-sans text-sm font-bold hover:bg-amber-400 transition-all active:scale-95 flex items-center gap-2 shadow-md shadow-amber-500/10"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call +91 84236 67868</span>
              <span className="sm:hidden">Call Now</span>
            </a>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-slate-700 p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar / Drawer */}
      <div 
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <aside 
        className={`fixed top-0 bottom-0 left-0 w-72 bg-white z-50 shadow-2xl transition-transform duration-300 ease-out md:hidden flex flex-col p-6 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-6 h-6 text-primary" />
            <span className="font-sans text-base font-extrabold text-primary">Jeevan Parivartan</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-slate-500 hover:text-primary p-1.5 rounded-lg hover:bg-slate-50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-2 flex-grow">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left font-sans text-sm font-semibold transition-all ${
                currentView === item.value 
                  ? 'bg-blue-50 text-primary border-l-4 border-primary' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto border-t border-slate-100 pt-6">
          <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-100">
            <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">Emergency 24/7 Helpline</h4>
            <a href="tel:8423667868" className="text-amber-600 font-extrabold text-sm hover:underline block mb-2">
              +91 84236 67868
            </a>
            <p className="text-[11px] text-slate-500">Call anytime to speak with our compassionate rehab counselors.</p>
          </div>
        </div>
      </aside>
    </>
  );
}
