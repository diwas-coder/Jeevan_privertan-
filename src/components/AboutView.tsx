import React from 'react';
import { ViewType } from '../types';
import { ShieldCheck, Sparkles, UserCheck, EyeOff, CheckCircle, Award, ShieldAlert, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import EditableImage from './EditableImage';

interface AboutViewProps {
  setView: (view: ViewType) => void;
}

export default function AboutView({ setView }: AboutViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="space-y-16 pb-12 px-4 md:px-10"
      id="about-view-root"
    >
      {/* 1. MISSION & RENEWAL HERO SECTION */}
      <section className="relative py-16 px-6 md:px-12 overflow-hidden bg-slate-900 rounded-[3rem] shadow-2xl" id="mission-hero-section">
        {/* Background Image with Tint Overlay */}
        <div className="absolute inset-0 z-0">
          <EditableImage 
            imageKey="about-header"
            alt="Healing Campus background" 
            className="w-full h-full"
            overlayClass="opacity-20 filter blur-[2px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-900/90 to-slate-950"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Mission Left Content */}
          <div className="space-y-6 animate-fade-in" id="mission-left-content">
            <div className="inline-flex items-center gap-2 bg-amber-500/15 text-amber-400 px-4 py-1.5 rounded-full shadow-sm" id="badge-clinical-care">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider">
                COMPASSIONATE CLINICAL CARE
              </span>
            </div>

            <h2 className="font-sans text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight" id="about-heading">
              Our Mission is Your <span className="text-amber-400">Renewal</span>
            </h2>

            <p className="font-sans text-xs md:text-sm text-slate-300 leading-relaxed" id="about-description">
              At Jeevan Parivartan Nasha Mukti Kendra, we believe every individual possesses the inner strength to transform their life. Our clinical expertise combined with empathetic support provides the foundation for sustainable recovery, family reconciliation, and a future of dignity.
            </p>

            <div className="flex flex-wrap gap-4 pt-2" id="about-features">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-amber-500/15 rounded-lg text-amber-400">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="font-sans text-xs font-bold text-slate-200">Scientific Approach</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-amber-500/15 rounded-lg text-amber-400">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="font-sans text-xs font-bold text-slate-200">24/7 Medical Support</span>
              </div>
            </div>
          </div>

          {/* Mission Right Image */}
          <div className="relative group" id="mission-image-container">
            <div className="absolute -inset-4 bg-amber-500/10 rounded-[2rem] blur-2xl group-hover:bg-amber-500/15 transition-all"></div>
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-slate-950 shadow-2xl">
              <EditableImage 
                imageKey="about-mission"
                alt="Jeevan Parivartan Interior Room" 
                className="w-full aspect-[4/3]"
                overlayClass="group-hover:scale-[1.02] transition-transform duration-500 opacity-90"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. CORE VALUES CARDS */}
      <section className="relative py-16 px-6 md:px-12 overflow-hidden bg-slate-900 rounded-[3rem] shadow-2xl" id="values-section">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h3 className="font-sans text-2xl font-extrabold text-white mb-2">Our Pillars of Recovery</h3>
            <p className="text-slate-300 text-xs leading-relaxed max-w-lg mx-auto">
              Our treatment philosophy is built on three core foundations: transparency, high clinical standards, and 100% confidential emotional healing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Our Vision */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col gap-4 hover:border-amber-400/40 hover:translate-y-[-2px] transition-all duration-300 shadow-xl text-white" id="card-vision">
              <div className="w-12 h-12 bg-amber-500/15 text-amber-400 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-base font-bold text-amber-300">Our Vision</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                To eliminate the stigma associated with addiction and build a compassionate, supportive community where recovery is celebrated through evidence-based clinical practices and peer networks.
              </p>
            </div>

            {/* Expert Team */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col gap-4 hover:border-amber-400/40 hover:translate-y-[-2px] transition-all duration-300 shadow-xl text-white" id="card-expert-team">
              <div className="w-12 h-12 bg-amber-500/15 text-amber-400 rounded-2xl flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-base font-bold text-amber-300">Expert Care Team</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our state-of-the-art facility is staffed by government-approved, certified psychiatrists, experienced psychological counselors, and general physicians dedicated exclusively to personalized patient wellness.
              </p>
            </div>

            {/* Safe Haven */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col gap-4 hover:border-amber-400/40 hover:translate-y-[-2px] transition-all duration-300 shadow-xl text-white" id="card-safe-haven">
              <div className="w-12 h-12 bg-amber-500/15 text-amber-400 rounded-2xl flex items-center justify-center">
                <EyeOff className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-base font-bold text-amber-300">Confidential Safe Haven</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We provide a secure, home-like clinical environment that completely shields patients from community triggers and focuses entirely on holistic psychological healing, physical health, and long-term sobriety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLINICAL FRAMEWORK / ACCREDITATIONS (Enhances about view content) */}
      <section className="relative py-16 px-6 md:px-12 overflow-hidden bg-slate-900 rounded-[3rem] shadow-2xl" id="clinical-framework-section">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/15 text-amber-400 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Government Registration Standards</span>
              </div>
              <h3 className="font-sans text-2xl font-extrabold text-white">Licensed & Governed Admissions</h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                Jeevan Parivartan is fully licensed and recognized by the department of social welfare. We maintain stringent medical standards, clean living spaces, healthy dining, and customized fitness protocols.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex gap-3">
                  <Heart className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Empathy-First Approach</h5>
                    <p className="text-[10px] text-slate-300 mt-0.5">We strictly prohibit corporal punishment or harsh treatment.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">100% Confidentiality</h5>
                    <p className="text-[10px] text-slate-300 mt-0.5">No client information is shared with third parties.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps Timeline visual */}
            <div className="space-y-4 bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Our Guided Path to Transformation</h4>
              
              <div className="relative border-l border-white/10 pl-6 space-y-6">
                <div className="relative">
                  <div className="absolute -left-[31px] top-0.5 bg-amber-500 text-slate-950 text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">1</div>
                  <h5 className="text-xs font-bold text-amber-300">Initial Assessment & Safe Detox</h5>
                  <p className="text-[11px] text-slate-300 mt-0.5">A comprehensive clinical mapping of psychological markers, physical health, and drug withdrawal planning.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[31px] top-0.5 bg-amber-500 text-slate-950 text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">2</div>
                  <h5 className="text-xs font-bold text-amber-300">Therapeutic Inner Healing</h5>
                  <p className="text-[11px] text-slate-300 mt-0.5">Dual-diagnosis care, CBT counseling, group therapy, meditation, and relapse prevention workshops.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[31px] top-0.5 bg-amber-500 text-slate-950 text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">3</div>
                  <h5 className="text-xs font-bold text-amber-300">Community Re-Integration</h5>
                  <p className="text-[11px] text-slate-300 mt-0.5">Structured family meetings, career mentoring, emotional coping roadmaps, and continuous outpatient therapy.</p>
                </div>
              </div>

              <div className="pt-2 text-center">
                <button 
                  onClick={() => setView('appointment')}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-lg shadow-amber-500/15 active:scale-95"
                >
                  Get Free Consultation
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </motion.div>
  );
}
