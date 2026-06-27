import React, { useState } from 'react';
import { ViewType } from '../types';
import { CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import EditableImage from './EditableImage';

interface ServicesViewProps {
  setView: (view: ViewType) => void;
}

interface ServiceProgram {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  timeline: string;
  approaches: string[];
}

export default function ServicesView({ setView }: ServicesViewProps) {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services: ServiceProgram[] = [
    {
      id: 'alcohol',
      icon: 'local_bar',
      title: 'Alcohol Addiction Treatment',
      shortDesc: 'Safe medical detoxification and behavioral therapy to overcome physical and psychological dependence on alcohol.',
      longDesc: 'Our Alcohol Treatment program integrates safe, clinically managed medical detox with evidence-based behavioral therapy. We closely monitor vital signs to ease withdrawal symptoms, followed by intensive Cognitive Behavioral Therapy (CBT) and Motivational Interviewing to rewrite coping mechanisms.',
      timeline: 'Typically 30 to 90 Days',
      approaches: ['Medically Supervised Detox', 'CBT & Rational Emotive Therapy', 'Family Integration Sessions']
    },
    {
      id: 'pickup',
      icon: 'airport_shuttle',
      title: '24*7 Home Pick-up',
      shortDesc: 'Compassionate, safe, and swift assistance to pick up patients from their residence and transport them securely to our campus.',
      longDesc: 'We offer a secure and highly compassionate 24*7 home pick-up service across Lucknow and nearby regions. Our trained counselor-led medical transit team safely coordinates with the family, helping the patient transit into care with minimal distress and complete safety.',
      timeline: 'Available 24/7 on demand',
      approaches: ['Counselor-Guided Support', 'Safe & Comfortable Transit', 'Prompt Coordination']
    },
    {
      id: 'drugs',
      icon: 'medication',
      title: 'Drug Addiction Treatment',
      shortDesc: 'Holistic recovery plans for various substances, focusing on physiological detox, root causes, and lifestyle reconstruction.',
      longDesc: 'Designed to target chemical dependency on opioids, prescription pills, or stimulants. We treat the entire person by rebuilding physical stamina, re-establishing sleep hygiene, and healing psychiatric triggers through tailored psychotherapeutic programs.',
      timeline: 'Typically 60 to 120 Days',
      approaches: ['Neurotransmitter Balancing Support', 'Symptom-Targeted Medical Detox', 'Relapse Prevention Planning']
    },
    {
      id: 'counseling',
      icon: 'psychology',
      title: 'Professional Counseling & Psychotherapy',
      shortDesc: 'One-on-one sessions with licensed therapists to address psychological trauma, triggers, and cognitive patterns.',
      longDesc: 'Emotional healing is core to de-addiction. Our clinical psychologists provide one-on-one counseling using trauma-informed therapy, schema therapy, and dialectical behavior therapy (DBT). This helps patients develop resilient, substance-free mental models.',
      timeline: 'Ongoing Throughout & Post Rehab',
      approaches: ['Trauma-Informed Care', 'Dialectical Behavior Therapy (DBT)', 'Individualized Recovery Roadmap']
    },
    {
      id: 'physiotherapy',
      icon: 'accessibility_new',
      title: 'Physiotherapy & Physical Rehabilitation',
      shortDesc: 'Tailored physical therapy, muscle restoration, and active physical wellness sessions to rebuild bodily strength during recovery.',
      longDesc: 'Our physical rehabilitation program is designed to restore muscular health, relieve joint pain, and improve mobility weakened by prolonged substance dependency. Certified therapists conduct regular physical therapy, posture correction, massage sessions, and light therapeutic exercise routines.',
      timeline: 'Customized Weekly Therapy Sessions',
      approaches: ['Muscle Stimulation & Heat Therapy', 'Therapeutic Exercise & Joint Mobilization', 'Posture and Ergonomics Restoration']
    },
    {
      id: 'detox',
      icon: 'medical_services',
      title: 'Medical Detox Support',
      shortDesc: '24/7 medically monitored withdrawal management to ensure safety, physical stability, and comfort during the initial phase.',
      longDesc: 'Withdrawal can be physically demanding and sometimes dangerous. Our dedicated detox unit is staffed 24/7 with doctors and nursing practitioners who use safe pharmacological assistance to manage withdrawal symptoms safely, ensuring physical comfort.',
      timeline: 'First 7 to 15 Days',
      approaches: ['Continuous Vitals & ECG Monitoring', 'Safe Withdrawal Pharmacy Management', 'Nutritional Infusion Therapy']
    },
    {
      id: 'mental',
      icon: 'spa',
      title: 'Mental Health Support',
      shortDesc: 'Integrated care for dual-diagnosis/co-occurring disorders like depression, anxiety, trauma, and stress-related conditions.',
      longDesc: 'Often, addiction co-exists with mental health conditions. We provide dual-diagnosis care, addressing underlying depression, anxiety, panic disorders, or PTSD simultaneously. Our psychiatrists prescribe targeted therapies to harmonize mental health.',
      timeline: 'Customized Dual-Diagnosis Track',
      approaches: ['Psychiatrist-Led Medication Management', 'Stress & Anxiety Reduction Training', 'Mindfulness & Meditation Sessions']
    },
    {
      id: 'family',
      icon: 'family_restroom',
      title: 'Family Guidance & Healing',
      shortDesc: 'Education and counseling for families to heal relationships, break enabling patterns, and create a supportive home environment.',
      longDesc: 'Addiction affects the entire family. Our program educates family members on the biology of addiction, heals codependency, and teaches constructive boundary-setting. This ensures the home environment is a safe launchpad for long-term sobriety.',
      timeline: 'Weekly Family Support Sessions',
      approaches: ['Codependency Education Workshops', 'Restorative Dialogue Sessions', 'Home-Coming Transition Guidance']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="space-y-16 pb-12"
      id="services-view-root"
    >
      {/* 1. SPECIALIZED RECOVERY PROGRAMS */}
      <section className="relative py-16 px-4 md:px-10 overflow-hidden bg-slate-900 rounded-[3rem] shadow-2xl" id="programs-section">
        {/* Background Image with Tint Overlay */}
        <div className="absolute inset-0 z-0">
          <EditableImage 
            imageKey="services-main"
            alt="Healing Campus background" 
            className="w-full h-full"
            overlayClass="opacity-20 filter blur-[2px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-900/90 to-slate-950"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center mb-12">
            <h2 className="font-sans text-3xl font-extrabold text-white mb-3">Specialized Recovery Programs</h2>
            <p className="text-slate-300 max-w-xl mx-auto text-xs md:text-sm leading-relaxed">
              Comprehensive treatment paths tailored to the unique journey of each individual and family, incorporating physiological restoration, active rehabilitation, and mental resilience.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div 
                key={svc.id}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-amber-400/40 transition-all group shadow-xl"
                id={`service-card-${svc.id}`}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-amber-500/15 text-amber-400 rounded-xl flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <span className="material-symbols-outlined text-2xl">{svc.icon}</span>
                  </div>
                  <h4 className="font-sans text-base font-bold text-white group-hover:text-amber-300 transition-colors">{svc.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{svc.shortDesc}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <button 
                    onClick={() => setExpandedService(expandedService === svc.id ? null : svc.id)}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 hover:underline"
                  >
                    <span>{expandedService === svc.id ? 'Close Details' : 'Expand Program Details'}</span>
                    <span className="material-symbols-outlined text-sm">
                      {expandedService === svc.id ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                </div>

                {/* Expandable Panel */}
                <AnimatePresence>
                  {expandedService === svc.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden mt-4 pt-4 border-t border-white/10 space-y-3"
                    >
                      <p className="text-xs text-slate-200 leading-relaxed bg-white/5 border border-white/5 p-3 rounded-xl">
                        {svc.longDesc}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold">
                        <CalendarCheck className="w-4 h-4 text-emerald-400" />
                        <span>Duration: {svc.timeline}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Key Interventions:</div>
                        <ul className="grid grid-cols-1 gap-1 text-[11px] text-slate-300 list-disc pl-4">
                          {svc.approaches.map((app, idx) => (
                            <li key={idx}>{app}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

    </motion.div>
  );
}
