/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Glasses, Menu, X, Phone, Calendar, MessageSquare, Inbox } from 'lucide-react';

interface HeaderProps {
  onOpenDashboard: () => void;
  bookingCount: number;
}

export default function Header({ onOpenDashboard, bookingCount }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#why' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section spy
      const scrollPosition = window.scrollY + 120;
      for (const item of menuItems) {
        const targetId = item.href.slice(1);
        const element = document.getElementById(targetId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(targetId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 glass-effect shadow-md border-b border-navy-100/50'
          : 'py-5 bg-white/50 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            id="brand-logo-nav"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-2.5 group"
          >
            <div className="bg-navy-600 group-hover:bg-navy-700 text-white p-2.5 rounded-xl shadow-lg shadow-navy-600/20 transition-all duration-300 rotate-0 group-hover:rotate-12">
              <Glasses className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-tight text-navy-900 leading-none">
                LensFab
              </span>
              <span className="font-sans text-[10px] uppercase tracking-widest font-semibold text-navy-500 mt-1">
                Optical • Kolkata
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-navbar" className="hidden lg:flex items-center space-x-7">
            {menuItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  id={`nav-link-${item.href.slice(1)}`}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative font-sans text-[14px] font-medium tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-navy-600 font-semibold'
                      : 'text-gray-600 hover:text-navy-600'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-navy-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions Button */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Direct Bookings Manager */}
            <button
              id="header-draft-bookings-btn"
              onClick={onOpenDashboard}
              className="relative p-2.5 text-navy-600 hover:bg-navy-50 rounded-xl transition-all duration-200"
              title="View requested eye testing appointments"
            >
              <Inbox className="h-5.5 w-5.5" />
              {bookingCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold-500 text-white font-sans text-[10px] font-extrabold px-1.5 py-0.5 rounded-full ring-2 ring-white">
                  {bookingCount}
                </span>
              )}
            </button>

            <a
              id="header-booking-cta"
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#booking');
              }}
              className="bg-navy-600 hover:bg-navy-700 text-white font-sans text-xs font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-navy-600/10 transition-all duration-200 flex items-center space-x-1.5"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Appointment</span>
            </a>

            <a
              id="header-call-shortcut"
              href="tel:+918100325925"
              className="border-2 border-navy-100 hover:border-navy-200 text-navy-700 p-2.5 rounded-xl transition-all duration-200"
            >
              <Phone className="h-4.5 w-4.5" />
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center space-x-3">
            {/* Direct Bookings Manager */}
            <button
              id="mobile-header-bookings-btn"
              onClick={onOpenDashboard}
              className="relative p-2 text-navy-600 hover:bg-navy-50 rounded-lg"
            >
              <Inbox className="h-5 w-5" />
              {bookingCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold-500 text-white font-sans text-[9px] font-black px-1.5 py-0.5 rounded-full ring-1 ring-white">
                  {bookingCount}
                </span>
              )}
            </button>

            {/* Mobile Toggle */}
            <button
              id="mobile-hamburger-nav"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-navy-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-b border-gray-100 px-5 py-6 flex flex-col space-y-4 lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-3.5">
              {menuItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.label}
                    id={`mobile-link-${item.href.slice(1)}`}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`font-sans text-base font-semibold px-4 py-2 rounded-xl transition-all ${
                      isActive
                        ? 'bg-navy-500 text-white'
                        : 'text-navy-900 hover:bg-navy-50'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="h-px bg-gray-100 my-2" />

            <div className="grid grid-cols-2 gap-3.5 pt-2">
              <a
                id="mobile-nav-call"
                href="tel:+918100325925"
                className="flex items-center justify-center space-x-2 border border-gray-200 p-3 rounded-xl font-sans text-sm font-semibold text-navy-900 active:bg-gray-50"
              >
                <Phone className="h-4 w-4 text-navy-600" />
                <span>Call Store</span>
              </a>

              <a
                id="mobile-nav-whatsapp"
                href="https://wa.me/918100325925?text=Hi%20LensFab%20Optical,%20I'd%20like%20to%20query%20about%20your%20frames%20and%20eye%20testing."
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center space-x-2 bg-[#25D366] text-white p-3 rounded-xl font-sans text-sm font-semibold hover:bg-emerald-600 active:scale-95 transition-all"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              id="mobile-nav-booking"
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.getElementById('booking');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-navy-600 text-white text-center py-3.5 rounded-xl font-display text-sm font-bold shadow-md shadow-navy-600/10 active:scale-95 transition-all flex items-center justify-center space-x-2"
            >
              <Calendar className="h-4.5 w-4.5" />
              <span>Book Appointment Slot</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
