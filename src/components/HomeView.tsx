import React from 'react';
import { ViewType } from '../types';
import { ShieldCheck, Phone, CheckCircle, Compass, Users, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import EditableImage from './EditableImage';

interface HomeViewProps {
  setView: (view: ViewType) => void;
}

export default function HomeView({ setView }: HomeViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="space-y-16 pb-12"
    >
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 rounded-[3rem] shadow-2xl py-16 px-4 md:px-10" id="home-hero-section">
        {/* Background Image with Tint Overlay */}
        <div className="absolute inset-0 z-0">
          <EditableImage 
            imageKey="hero-bg"
            alt="Wellness Background" 
            className="w-full h-full"
            overlayClass="opacity-15 filter blur-[1px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-900/90 to-slate-950"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
          
          {/* Hero Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/15 text-amber-400 px-4 py-1.5 rounded-full shadow-sm">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider">
                GOVERNMENT APPROVED REHABILITATION CENTER
              </span>
            </div>

            <h1 className="font-sans text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Start Your Journey to a <span className="text-amber-400 block sm:inline">Better Life</span>
            </h1>

            <p className="font-sans text-xs md:text-sm text-slate-300 leading-relaxed max-w-lg">
              At Jeevan Parivartan, we provide a compassionate, safe, and scientifically grounded path to recovery. Rediscover your purpose through expert medical care, psychiatric support, and holistic healing.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="tel:8423667868" 
                className="bg-amber-500 text-slate-950 px-8 py-4 rounded-2xl font-sans text-sm font-bold hover:bg-amber-400 transition-all active:scale-95 shadow-md flex items-center gap-2.5 shadow-amber-500/10"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>

              <a 
                href="https://wa.me/918423667868?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20rehabilitation%20center.%20Please%20contact%20me." 
                target="_blank" 
                rel="noreferrer"
                className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-sans text-sm font-semibold hover:bg-emerald-700 transition-all active:scale-95 shadow-md flex items-center gap-2.5"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>WhatsApp</span>
              </a>

              <button 
                onClick={() => setView('appointment')}
                className="w-full sm:w-auto border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-sans text-sm font-semibold hover:bg-white/5 hover:border-amber-400 transition-all active:scale-95"
              >
                Get Free Consultation
              </button>
            </div>
          </div>

          {/* Hero Right Image & Stats Float Card */}
          <div className="relative group">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-amber-500/10 rounded-[2.5rem] blur-2xl group-hover:bg-amber-500/15 transition-all"></div>
            
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-950 shadow-2xl">
              <EditableImage 
                imageKey="hero-right"
                alt="Jeevan Parivartan Wellness Room" 
                className="w-full aspect-[4/3] md:aspect-square"
                overlayClass="group-hover:scale-[1.02] transition-transform duration-500 opacity-90"
              />
            </div>

            {/* Stats Floating Card */}
            <div className="absolute -bottom-6 -left-4 md:-left-8 bg-slate-950 p-5 rounded-2xl shadow-xl border border-white/10 max-w-[240px] flex flex-col gap-2">
              <div className="flex items-center gap-3.5">
                <div className="bg-amber-500/15 p-2.5 rounded-xl text-amber-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-white leading-none">500+</div>
                  <div className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Families Reunited</div>
                </div>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full w-[88%] rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. BENTO STYLE QUICK INFO CARDS */}
      <section className="py-8 px-4 md:px-10" id="quick-info-section">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Location Card */}
          <div className="bg-slate-900 p-8 rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col gap-4 hover:border-amber-400/40 hover:translate-y-[-2px] transition-all duration-300 text-white">
            <div className="w-12 h-12 bg-amber-500/15 text-amber-400 rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl font-bold">location_on</span>
            </div>
            <h3 className="font-sans text-xl font-bold text-white">Center Location</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Jeevan parivartan Nasha Mukti kendra, GGI Rd, nearby Vidhaya Hospital, Harikanshgadi, Mohanlalganj, Uttar Pradesh 226301. Secluded and beautifully landscaped to promote complete mental peace.
            </p>
            
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Jeevan+parivartan+Nasha+Mukti+kendra,+GGI+Rd,+nearby+Vidhaya+Hospital,+Harikanshgadi,+Mohanlalganj,+Uttar+Pradesh+226301" 
              target="_blank" 
              rel="noreferrer"
              className="mt-2 w-full bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-amber-500/10 active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-base">directions</span>
              <span>Get Directions</span>
            </a>

            <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between text-xs text-amber-400 font-bold">
              <span>Mohanlalganj, Lucknow, UP</span>
              <Compass className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
          </div>

          {/* 24/7 Support Card */}
          <div className="bg-slate-900 p-8 rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col gap-4 hover:border-amber-400/40 hover:translate-y-[-2px] transition-all duration-300 text-white">
            <div className="w-12 h-12 bg-amber-500/15 text-amber-400 rounded-2xl flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-sans text-xl font-bold text-white">24/7 Support & Care</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Active medical supervision, psychiatric emergency management, and friendly counselor support are available round the clock. We are here to listen and help whenever you call.
            </p>
            <div className="mt-auto pt-4 border-t border-white/10 flex items-center gap-2">
              <div className="flex -space-x-2">
                <EditableImage 
                  imageKey="info-avatar-1"
                  alt="Doctor Avatar 1" 
                  className="w-7 h-7 rounded-full border-2 border-slate-900 overflow-hidden"
                  overlayClass="object-cover"
                />
                <EditableImage 
                  imageKey="info-avatar-2"
                  alt="Doctor Avatar 2" 
                  className="w-7 h-7 rounded-full border-2 border-slate-900 overflow-hidden"
                  overlayClass="object-cover"
                />
                <div className="w-7 h-7 rounded-full bg-amber-500 text-[10px] text-slate-950 font-bold flex items-center justify-center border-2 border-slate-900 z-10">
                  +12
                </div>
              </div>
              <span className="text-xs text-slate-300 font-medium">Certified On-Call Clinicians</span>
            </div>
          </div>

          {/* Map/Visual Card */}
          <div className="relative group overflow-hidden rounded-[2.5rem] aspect-[4/3] md:aspect-auto border border-white/10 shadow-2xl">
            <EditableImage 
              imageKey="info-map"
              alt="Lucknow Map Overview" 
              className="w-full h-full"
              overlayClass="group-hover:scale-105 transition-transform duration-500 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-6">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Jeevan+parivartan+Nasha+Mukti+kendra,+GGI+Rd,+nearby+Vidhaya+Hospital,+Harikanshgadi,+Mohanlalganj,+Uttar+Pradesh+226301" 
                target="_blank" 
                rel="noreferrer"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide uppercase transition-all flex items-center gap-1.5 shadow-lg shadow-amber-500/10 w-full justify-center"
              >
                <span>View On Interactive Map</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. WHY CHOOSE US / HEALING PHILOSOPHY */}
      <section className="relative py-16 px-6 md:px-12 overflow-hidden bg-slate-900 rounded-[3rem] shadow-2xl" id="healing-philosophy-section">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center mb-12">
            <h2 className="font-sans text-3xl font-extrabold text-white mb-3">Our Healing Philosophy</h2>
            <p className="text-slate-300 max-w-xl mx-auto text-xs md:text-sm leading-relaxed">
              We blend state-of-the-art medical and psychiatric detoxification with highly empathetic, personalized therapy to ensure sustained mental and physical recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Bullets */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0 p-1.5 bg-amber-500/15 rounded-lg text-amber-400">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-base font-bold text-amber-300">Personalized Detox Support</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    Customized medical detoxification programs managed by specialist physicians, easing withdrawal symptoms safely and comfortably under continuous monitoring.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0 p-1.5 bg-amber-500/15 rounded-lg text-amber-400">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-base font-bold text-amber-300">Cognitive Behavioral Therapy (CBT)</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    One-on-one psychological counseling, cognitive exercises, and family counseling to address and heal the emotional root causes of addiction.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0 p-1.5 bg-amber-500/15 rounded-lg text-amber-400">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-base font-bold text-amber-300">Structured Aftercare & Re-integration</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    Extended post-treatment counseling, relapse prevention planning, and social skill-building to ensure a confident, successful return to society.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Photo/Accent Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-2xl aspect-square bg-slate-950 border border-white/10">
                  <EditableImage 
                    imageKey="philosophy-garden"
                    alt="Lush healing garden walk" 
                    className="w-full h-full"
                    overlayClass="hover:scale-105 transition-transform duration-300 opacity-90"
                  />
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-white shadow-2xl backdrop-blur-md">
                  <h5 className="font-sans text-base font-bold mb-1 text-amber-300">Safe Haven Setting</h5>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    A peaceful, secure, and confidential environment designed to remove stressors and maximize natural healing.
                  </p>
                </div>
              </div>

              <div className="pt-8 space-y-4">
                <div className="bg-amber-500 p-6 rounded-2xl text-slate-950 shadow-2xl font-semibold">
                  <h5 className="font-sans text-base font-bold mb-1 text-slate-950">Expert Treatment Team</h5>
                  <p className="text-[11px] text-slate-900 leading-relaxed">
                    Overseen by certified doctors, psychiatrists, and dedicated support staff committed to dignity and high success rates.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl aspect-square bg-slate-950 border border-white/10">
                  <EditableImage 
                    imageKey="philosophy-consult"
                    alt="Quiet calm consulting office" 
                    className="w-full h-full"
                    overlayClass="hover:scale-105 transition-transform duration-300 opacity-90"
                  />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. CTA BANNER SECTION */}
      <section className="py-8 px-4 md:px-10" id="cta-banner-section">
        <div className="max-w-7xl mx-auto bg-slate-950 border border-white/10 text-white rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_24px]"></div>
          
          <div className="max-w-2xl relative z-10 text-center md:text-left space-y-4">
            <h2 className="font-sans text-2xl md:text-3xl font-extrabold">Recovery is Possible. Start Today.</h2>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              Do not let addiction control your life or the life of a beloved family member. Get absolute guidance and take your first step towards a clean, bright future with Jeevan Parivartan.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="tel:8423667868" 
                className="bg-amber-500 text-slate-950 px-8 py-4 rounded-xl font-sans text-sm font-bold hover:bg-amber-400 transition-all text-center flex items-center justify-center gap-2 shadow-lg active:scale-95 shadow-amber-500/20"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 84236 67868</span>
              </a>

              <a 
                href="https://wa.me/918423667868?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20rehabilitation%20center.%20Please%20contact%20me." 
                target="_blank" 
                rel="noreferrer"
                className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-sans text-sm font-bold hover:bg-emerald-700 transition-all text-center flex items-center justify-center gap-2 shadow-lg active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Connect via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
