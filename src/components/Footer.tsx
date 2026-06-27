import React from 'react';
import { ViewType } from '../types';
import { Phone, Mail, MapPin, ShieldCheck, HeartPulse, Send, Globe } from 'lucide-react';

interface FooterProps {
  setView: (view: ViewType) => void;
}

export default function Footer({ setView }: FooterProps) {
  return (
    <footer className="bg-[#041a3a] text-white pt-16 pb-28 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand & Description */}
        <div className="space-y-4">
          <div 
            onClick={() => setView('home')} 
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <img 
              src="/images/logo-icon.png" 
              alt="Jeevan Parivartan Logo" 
              className="w-10 h-10 object-contain group-hover:scale-105 transition-all"
            />
            <span className="font-sans text-xl font-extrabold text-white">Jeevan Parivartan</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
            The leading government-approved Nasha Mukti Kendra in Lucknow, Uttar Pradesh. We provide ethical, medically supervised, and highly compassionate rehabilitation services for holistic recovery.
          </p>
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3.5 py-1.5 rounded-xl max-w-max text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Govt. Reg. Rehab & Wellness Center</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-base font-sans tracking-wide">Quick Navigation</h4>
          <nav className="flex flex-col gap-2.5">
            <button 
              onClick={() => setView('home')} 
              className="text-slate-300 hover:text-emerald-400 transition-colors text-sm text-left hover:underline"
            >
              Home & Recovery Goals
            </button>
            <button 
              onClick={() => setView('about')} 
              className="text-slate-300 hover:text-emerald-400 transition-colors text-sm text-left hover:underline"
            >
              Our Mission & Philosophy
            </button>
            <button 
              onClick={() => setView('services')} 
              className="text-slate-300 hover:text-emerald-400 transition-colors text-sm text-left hover:underline"
            >
              Specialized Treatment Programs
            </button>
            <button 
              onClick={() => setView('appointment')} 
              className="text-slate-300 hover:text-emerald-400 transition-colors text-sm text-left hover:underline"
            >
              Get Free Consultation
            </button>
          </nav>
        </div>

        {/* Contact Info & Location */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-base font-sans tracking-wide">Contact Details</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Jeevan parivartan Nasha Mukti kendra, GGI Rd, nearby Vidhaya Hospital, Harikanshgadi, Mohanlalganj, Uttar Pradesh 226301</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-amber-400 shrink-0" />
              <a href="tel:8423667868" className="text-amber-400 hover:text-amber-300 transition-colors font-extrabold text-base">
                +91 84236 67868
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
              <a href="mailto:jeevanparivartan2@gmail.com" className="hover:text-emerald-400 transition-colors">
                jeevanparivartan2@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-slate-400">Serving all over North India</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom copyright */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 mt-12 pt-6 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
        <p>© {new Date().getFullYear()} Jeevan Parivartan Nasha Mukti Kendra Lucknow. All rights reserved.</p>
        <p className="text-slate-500">Confidentiality Assured • Ethically Operated • Medical-Grade Care</p>
      </div>
    </footer>
  );
}
