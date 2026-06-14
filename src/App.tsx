/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Products from './components/Products';
import BookingSection from './components/BookingSection';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import GoogleMap from './components/GoogleMap';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import FloatingControls from './components/FloatingControls';
import BookingDashboard from './components/BookingDashboard';
import { Appointment } from './types';

export default function App() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  // Load appointments from localStorage and inject 1 local review sample so visitors have mock dashboard info on start
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lensfab_appointments');
      if (saved) {
        setAppointments(JSON.parse(saved));
      } else {
        const initialMockApp: Appointment = {
          id: 'mock-1',
          name: 'Anirudh Roy',
          mobile: '+91 98300 12345',
          email: 'anirudh.roy@gmail.com',
          preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0], // 2 days from now
          preferredTime: '12:00 PM - 02:00 PM',
          message: 'Store Computerized test: Wants premium anti-glare single-vision frames.',
          status: 'Confirmed',
          createdAt: new Date().toISOString(),
        };
        const initialList = [initialMockApp];
        localStorage.setItem('lensfab_appointments', JSON.stringify(initialList));
        setAppointments(initialList);
      }
    } catch (e) {
      console.error('LocalStorage failed to load:', e);
    }
  }, []);

  const saveAppointmentsToCache = (list: Appointment[]) => {
    setAppointments(list);
    try {
      localStorage.setItem('lensfab_appointments', JSON.stringify(list));
    } catch (e) {
      console.error('LocalStorage write failed:', e);
    }
  };

  const handleAddAppointment = (newApp: Appointment) => {
    const updated = [newApp, ...appointments];
    saveAppointmentsToCache(updated);
  };

  const handleRemoveAppointment = (id: string) => {
    const filtered = appointments.filter((app) => app.id !== id);
    saveAppointmentsToCache(filtered);
  };

  const handleUpdateStatus = (id: string, newStatus: 'Pending' | 'Confirmed' | 'Completed') => {
    const updated = appointments.map((app) => {
      if (app.id === id) {
        return { ...app, status: newStatus };
      }
      return app;
    });
    saveAppointmentsToCache(updated);
  };

  return (
    <div id="lensfab-store-applet" className="min-h-screen bg-[#FBFBFC] flex flex-col relative w-full text-left overflow-x-hidden antialiased">
      
      {/* Luxurious Glass-Refraction Ambient Background Nodes */}
      <div className="absolute top-[10%] left-[-15%] w-[60vw] h-[60vw] max-w-[700px] bg-gradient-to-tr from-navy-100/35 to-indigo-50/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[35%] right-[-15%] w-[55vw] h-[55vw] max-w-[650px] bg-gradient-to-bl from-gold-100/15 to-navy-50/25 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[60%] left-[-10%] w-[58vw] h-[58vw] max-w-[680px] bg-gradient-to-br from-indigo-50/20 to-navy-100/30 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-[82%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] bg-gradient-to-tl from-navy-100/20 to-gold-50/15 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Decorative vertical light stripes inspired by optical line focal corridors */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(244,246,250,0.15)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(244,246,250,0.15)_1.5px,transparent_1.5px)] bg-[size:6rem_6rem] pointer-events-none z-0 opacity-40" />
      
      {/* Dynamic Sticky Header Navigation */}
      <Header
        onOpenDashboard={() => setIsDashboardOpen(true)}
        bookingCount={appointments.filter((app) => app.status === 'Pending').length}
      />

      {/* Main Sections */}
      <main className="flex-1 w-full">
        {/* Animated Hero Header */}
        <Hero />

        {/* Why Choose Us legacy indicators */}
        <WhyChooseUs />

        {/* Services block */}
        <Services />

        {/* Product categories collections catalog */}
        <Products />

        {/* Eye checking appointment scheduler form */}
        <BookingSection onAddAppointment={handleAddAppointment} />

        {/* Client feedback sliding cards */}
        <Reviews />

        {/* Modern store masonry gallery */}
        <Gallery />

        {/* Location maps directions anchor */}
        <GoogleMap />

        {/* Local SEO frequently asked questions */}
        <FAQs />
      </main>

      {/* Footer copyright tagline layout links */}
      <Footer />

      {/* Floating Call, Booking & WhatsApp pulsing overlays */}
      <FloatingControls />

      {/* Toggle Dashboard Modal - Manage appointments */}
      <BookingDashboard
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
        appointments={appointments}
        onRemoveAppointment={handleRemoveAppointment}
        onUpdateStatus={handleUpdateStatus}
      />

    </div>
  );
}

