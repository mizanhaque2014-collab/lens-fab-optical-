/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Phone, Calendar, ArrowUp } from 'lucide-react';

export default function FloatingControls() {
  const [isVisible, setIsVisible] = useState(false);

  // Monitor scroll for 'Back to Top' secondary visibility
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleBookingScroll = () => {
    const el = document.getElementById('booking');
    if (el) {
      const topOffset = el.offsetTop - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3.5 select-none pointer-events-auto">
      
      {/* Back to Top button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            id="back-to-top-hotkey"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="p-3 bg-white/95 text-navy-800 hover:text-navy-950 border border-gray-150 shadow-md rounded-full hover:shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer"
            title="Scroll to top"
          >
            <ArrowUp className="h-4.5 w-4.5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Eye Test appointment booking */}
      <button
        id="floating-book-slot-btn"
        onClick={handleBookingScroll}
        className="p-4 bg-gold-500 hover:bg-gold-605 text-white shadow-lg rounded-full hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer relative group flex items-center justify-center animate-pulse-subtle"
        title="Schedule Eye-test Slot"
      >
        <Calendar className="h-5.5 w-5.5" />
        <span className="absolute right-full mr-3.5 bg-navy-950 text-white font-sans text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
          Book Appointment Check-up
        </span>
      </button>

      {/* Persistent General Call Support */}
      <a
        id="floating-call-hotline"
        href="tel:+918100325925"
        className="p-4 bg-navy-600 hover:bg-navy-700 text-white shadow-lg rounded-full hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center relative group"
        title="Dial LensFab Optical Call Center"
      >
        <Phone className="h-5.5 w-5.5" />
        <span className="absolute right-full mr-3.5 bg-navy-950 text-white font-sans text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
          Call Showroom: +91 81003 25925
        </span>
      </a>

      {/* Persistent WhatsApp Support Hotkey with Ripple pulse */}
      <a
        id="floating-whatsapp-hotkey"
        href="https://wa.me/918100325925?text=Hi%20LensFab%20Optical,%20I'd%20like%20to%20query%20about%20your%20frames%20and%20avail%20eye%20testing."
        target="_blank"
        referrerPolicy="no-referrer"
        className="p-4 bg-[#25D366] hover:bg-emerald-600 text-white shadow-lg rounded-full hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center relative group"
        title="Instant WhatsApp Support Chat"
      >
        {/* Pulsing ring behind green circle */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />
        
        <MessageSquare className="h-5.5 w-5.5 relative z-10" />
        <span className="absolute right-full mr-3.5 bg-navy-950 text-white font-sans text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
          WhatsApp Chat
        </span>
      </a>

    </div>
  );
}
