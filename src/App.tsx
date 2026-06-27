import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import AppointmentView from './components/AppointmentView';
import { ViewType } from './types';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setView] = useState<ViewType>('home');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 select-none antialiased">
      {/* Top persistent Navigation Bar */}
      <Navbar currentView={currentView} setView={setView} />

      {/* Main view content body */}
      <main className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <div key="home">
              <HomeView setView={setView} />
            </div>
          )}
          {currentView === 'about' && (
            <div key="about">
              <AboutView setView={setView} />
            </div>
          )}
          {currentView === 'services' && (
            <div key="services">
              <ServicesView setView={setView} />
            </div>
          )}
          {currentView === 'appointment' && (
            <div key="appointment">
              <AppointmentView />
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom persistent Footer */}
      <Footer setView={setView} />
    </div>
  );
}
