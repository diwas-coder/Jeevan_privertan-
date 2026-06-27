import React, { useState, useEffect } from 'react';
import { Appointment, GalleryItem } from '../types';
import { Phone, Mail, MapPin, Send, Trash2, Calendar, CheckCircle2, Maximize2, ExternalLink, Loader2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import EditableImage from './EditableImage';
import { useCustomImages } from '../hooks/useCustomImages';

export default function AppointmentView() {
  const { images } = useCustomImages();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    addictionType: '',
    visitDate: '',
    message: ''
  });

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');

  // Load appointments and set default live date on mount
  useEffect(() => {
    const saved = localStorage.getItem('jeevan_appointments');
    if (saved) {
      try {
        setAppointments(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }

    // Set live date to today
    const today = new Date().toISOString().split('T')[0];
    setFormData(prev => ({ ...prev, visitDate: today }));

    // Set live clock
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-IN', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.age || !formData.addictionType || !formData.visitDate) {
      setSubmitError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setShowSuccess(false);

    try {
      const templateParams = {
        to_email: 'jeevanparivartan2@gmail.com',
        fullName: formData.name,
        full_name: formData.name,
        name: formData.name,
        phone_number: formData.phone,
        phoneNumber: formData.phone,
        phone: formData.phone,
        patient_age: formData.age,
        patientAge: formData.age,
        age: formData.age,
        addiction_type: formData.addictionType,
        addictionType: formData.addictionType,
        addiction: formData.addictionType,
        preferred_visit_date: formData.visitDate,
        preferredVisitDate: formData.visitDate,
        visit_date: formData.visitDate,
        visitDate: formData.visitDate,
        date: formData.visitDate,
        message: formData.message || 'No message provided'
      };

      await emailjs.send(
        'service_0qhxxaa',
        'template_cnyhnce',
        templateParams,
        'aO_Slhqwdynq2HUQB'
      );

      const newAppointment: Appointment = {
        id: `app-${Date.now()}`,
        name: formData.name,
        phone: formData.phone,
        age: parseInt(formData.age),
        addictionType: formData.addictionType,
        visitDate: formData.visitDate,
        message: formData.message,
        createdAt: new Date().toLocaleDateString('en-IN', { dateStyle: 'medium' }),
        status: 'Pending'
      };

      const updated = [newAppointment, ...appointments];
      setAppointments(updated);
      localStorage.setItem('jeevan_appointments', JSON.stringify(updated));

      // Clear form
      setFormData({
        name: '',
        phone: '',
        age: '',
        addictionType: '',
        visitDate: new Date().toISOString().split('T')[0],
        message: ''
      });

      setShowSuccess(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitError("Something went wrong. Please try again or call us at 8423667868.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const deleteAppointment = (id: string) => {
    const updated = appointments.filter(app => app.id !== id);
    setAppointments(updated);
    localStorage.setItem('jeevan_appointments', JSON.stringify(updated));
  };

  const galleryItems: GalleryItem[] = [
    {
      id: 'gallery-1',
      title: 'Group Counseling & Therapy Class',
      category: 'Therapy',
      imageUrl: images['gallery-1'],
      description: 'A dedicated interactive space where residents engage in supportive group sessions, counseling classes, and peer mentoring to foster shared healing.'
    },
    {
      id: 'gallery-2',
      title: 'Entrance Lobby & Reception Environment',
      category: 'Facility',
      imageUrl: images['gallery-2'],
      description: 'A positive and welcoming entrance featuring motivational signs and a therapeutic aquarium to ensure a calm and comfortable environment.'
    },
    {
      id: 'gallery-3',
      title: 'Comfortable Resident Living Ward',
      category: 'Facility',
      imageUrl: images['gallery-3'],
      description: 'Spacious, air-conditioned accommodations with clean beds and supportive layouts designed to prioritize comfort and physical wellness.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="space-y-16 pb-12"
    >
      {/* Immersive Background Section with Twilight Glassmorphic Booking Form */}
      <section className="relative py-16 px-4 md:px-10 overflow-hidden bg-slate-900 rounded-[3rem] shadow-2xl">
        {/* Background Image with Tint Overlay */}
        <div className="absolute inset-0 z-0">
          <EditableImage 
            imageKey="appointment-bg"
            alt="Healing Campus Garden background" 
            className="w-full h-full"
            overlayClass="opacity-30 filter blur-[1px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-900/90 to-slate-950"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-12">
          {/* Hero Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="font-sans text-3xl md:text-4xl font-extrabold tracking-tight text-white">Your Path to Renewal</h2>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
              Taking the first step toward recovery is a sign of courage. Register your confidential consultation, or call us directly.
            </p>
          </div>

          {/* Main Grid: Form + Contacts */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Booking Form Card */}
            <div className="lg:col-span-7 bg-white/10 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl space-y-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-amber-500 text-slate-950 rounded-xl">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="font-sans text-lg font-bold text-white">Get Free Consultation</h3>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter full name"
                      required
                      className="w-full bg-white/5 border border-white/15 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-400 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 73073 98945"
                      required
                      className="w-full bg-white/5 border border-white/15 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-400 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Patient Age</label>
                    <input 
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="Enter age"
                      required
                      className="w-full bg-white/5 border border-white/15 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-400 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Addiction Category</label>
                    <select
                      name="addictionType"
                      value={formData.addictionType}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border border-white/15 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-400 transition-all [&_option]:text-slate-900"
                    >
                      <option value="">Select Addiction Type</option>
                      <option value="Alcohol Addiction">Alcohol Addiction</option>
                      <option value="Drug Addiction">Drug Addiction</option>
                      <option value="Cannabis (Ganja/Charas)">Cannabis (Ganja/Charas)</option>
                      <option value="Opioids (Heroin/Smack/Brown Sugar)">Opioids (Heroin/Smack/Brown Sugar)</option>
                      <option value="Prescription Medicine Addiction">Prescription Medicine Addiction</option>
                      <option value="Tobacco / Cigarette Addiction">Tobacco / Cigarette Addiction</option>
                      <option value="Gutkha / Pan Masala Addiction">Gutkha / Pan Masala Addiction</option>
                      <option value="Nicotine Addiction">Nicotine Addiction</option>
                      <option value="Injection Drug Use">Injection Drug Use</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Preferred Consultation Date</label>
                  <input 
                    type="date"
                    name="visitDate"
                    value={formData.visitDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    className="w-full bg-white/5 border border-white/15 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-400 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Optional Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your situation or list any questions for our therapists..."
                    rows={3}
                    className="w-full bg-white/5 border border-white/15 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-400 transition-all"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 text-slate-950 py-3.5 rounded-xl text-xs font-bold hover:bg-amber-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/15 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Consultation Request</span>
                    </>
                  )}
                </button>
              </form>

              {/* Success Alert */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 p-4 rounded-2xl text-xs leading-relaxed flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-white">Appointment Registered Successfully</h5>
                      <p className="mt-1 text-slate-300">
                        Thank you! Your appointment request has been submitted successfully. We will contact you shortly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Alert */}
              <AnimatePresence>
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-rose-500/10 border border-rose-500/20 text-rose-300 p-4 rounded-2xl text-xs leading-relaxed flex items-start gap-3"
                  >
                    <div className="w-5 h-5 text-rose-400 shrink-0 mt-0.5 flex items-center justify-center font-bold border border-rose-400/30 rounded-full text-[10px]">!</div>
                    <div>
                      <h5 className="font-bold text-white">Submission Failed</h5>
                      <p className="mt-1 text-slate-300">
                        {submitError}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* List of Scheduled Appointments */}
              {appointments.length > 0 && (
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">My Scheduled Requests</div>
                  <div className="grid grid-cols-1 gap-3">
                    {appointments.map((app) => (
                      <div key={app.id} className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-start justify-between">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <h5 className="text-xs font-bold text-white">{app.name}</h5>
                            <span className="bg-amber-500/20 text-amber-400 text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                              {app.status}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-300">
                            Program: {app.addictionType} • Date: {app.visitDate}
                          </p>
                        </div>
                        <button 
                          onClick={() => deleteAppointment(app.id)}
                          className="text-slate-400 hover:text-red-400 p-1.5 hover:bg-white/5 rounded-lg transition-colors"
                          title="Cancel Appointment"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Live Admissions Desk Card (Interactive & Highly Attractive) */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 text-white p-6 rounded-3xl space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-bold tracking-wider text-emerald-400 uppercase">Live Admissions Desk</span>
                  </div>
                  <span className="text-[10px] bg-white/10 px-2.5 py-1 rounded-full text-slate-300 font-bold uppercase tracking-wider">Serving Now</span>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Current Local Time</div>
                  <div className="text-3xl font-mono font-extrabold tracking-tight text-white">{currentTime || "Loading..."}</div>
                </div>

                <div className="border-t border-white/10 pt-3 space-y-2 text-xs text-slate-300 leading-relaxed">
                  <p>
                    Our specialized recovery coordinators are actively reviewing assessment queues. All submissions are processed within 15 minutes.
                  </p>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-2.5 rounded-xl flex items-center gap-2 text-[11px] font-bold">
                    <span className="material-symbols-outlined text-[16px]">verified_user</span>
                    <span>100% HIPAA Compliance & Anonymous</span>
                  </div>
                </div>
              </div>

              {/* Quick Contacts */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl space-y-4">
                <h4 className="font-sans text-base font-bold text-white mb-4">Contact Us Directly</h4>
                <div className="grid grid-cols-1 gap-3">
                  <a 
                    href="tel:8423667868" 
                    className="flex items-center gap-4 p-4 bg-amber-500 hover:bg-amber-400 rounded-2xl transition-all group shadow-md shadow-amber-500/10"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-900 uppercase tracking-wider">Call Our Helpline</div>
                      <div className="text-sm font-extrabold text-slate-950">+91 84236 67868</div>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/918423667868?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20rehabilitation%20center.%20Please%20contact%20me." 
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 hover:bg-emerald-500/10 rounded-2xl transition-all group text-white"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">chat</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">WhatsApp Support</div>
                      <div className="text-sm font-extrabold text-emerald-400">+91 84236 67868</div>
                    </div>
                  </a>

                  <a 
                    href="mailto:jeevanparivartan2@gmail.com" 
                    className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 hover:bg-white/10 rounded-2xl transition-all group text-white"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-700 text-white flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Email Us</div>
                      <div className="text-sm font-extrabold text-slate-200">jeevanparivartan2@gmail.com</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Lucknow Map card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl space-y-4 text-white">
                <h4 className="font-sans text-base font-bold text-white mb-2">Our Campus Location</h4>
                <div className="flex items-start gap-2 text-xs text-slate-200 mb-4 bg-white/5 p-3 rounded-xl border border-white/5">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Address:</strong> Jeevan parivartan Nasha Mukti kendra, GGI Rd, nearby Vidhaya Hospital, Harikanshgadi, Mohanlalganj, Uttar Pradesh 226301
                  </span>
                </div>
                
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-slate-950 border border-white/10 mb-3">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA2u6frm1fcoWIEdWfhHTDBDOvzbdmcRIAOhabNFKPq-Ze2ScfEDdNbsVPms8YYqJM0YbeOZUsCPYakFcSRr2r5__dmyajD0WZvCV2a68-VbhyLEJpPPN9iIkYAUOzT6_--3TqGGerFSa4hxK3qX5R25lf7IFgJlptEhkLj4FTlv5XxGZIebIn7E7WbzhWbwfJ8nOPqP7Uy3NskPT9QFuZm3wqjYn2QLx7UG_PfhBX0GlPN6rcaavJxkE6m_VqRo2c-1rSnUY0eN6z" 
                    alt="Lucknow Map Preview" 
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>

                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Jeevan+parivartan+Nasha+Mukti+kendra,+GGI+Rd,+nearby+Vidhaya+Hospital,+Harikanshgadi,+Mohanlalganj,+Uttar+Pradesh+226301" 
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/15 active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined text-base">directions</span>
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Interactive Campus Gallery Section */}
      <section className="bg-slate-900 p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl space-y-8" id="campus-gallery-section">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h3 className="font-sans text-2xl md:text-3xl font-extrabold text-white">Our Healing Center Gallery</h3>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            Take a visual tour of our facilities in Mohanlalganj, Lucknow. These actual spaces are designed specifically for clinical safety, peaceful recovery, and supportive community living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-slate-950 border border-white/10 rounded-2xl overflow-hidden group/gallery shadow-xl flex flex-col relative"
              id={`gallery-card-${item.id}`}
            >
              {/* Customizable Image Wrapper */}
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <EditableImage 
                  imageKey={item.id as any}
                  alt={item.title}
                  className="w-full h-full"
                  overlayClass="group-hover/gallery:scale-105 transition-transform duration-500"
                />
                
                {/* Lightbox Trigger button */}
                <button
                  onClick={() => setActiveLightbox(item)}
                  className="absolute bottom-3 left-3 bg-slate-900/80 hover:bg-slate-900 text-white p-2 rounded-xl border border-white/10 opacity-0 group-hover/gallery:opacity-100 transition-all z-10"
                  title="Enlarge Photo"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <span className="absolute top-3 right-3 bg-amber-500 text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                  {item.category}
                </span>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="font-sans text-sm font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Immersive Overlay */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-md flex items-center justify-center z-[99999] p-4"
            onClick={() => setActiveLightbox(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-amber-400 bg-white/10 hover:bg-white/15 p-2 rounded-full transition-colors"
              onClick={() => setActiveLightbox(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <div 
              className="max-w-4xl w-full space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[16/10] w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
                <img 
                  src={images[activeLightbox.id as any] || activeLightbox.imageUrl} 
                  alt={activeLightbox.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center space-y-1 bg-slate-900/60 p-4 rounded-2xl border border-white/5 backdrop-blur-md">
                <span className="text-[10px] text-amber-400 font-extrabold uppercase tracking-widest">{activeLightbox.category}</span>
                <h4 className="font-sans text-base font-bold text-white">{activeLightbox.title}</h4>
                <p className="text-xs text-slate-300 max-w-xl mx-auto">{activeLightbox.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
