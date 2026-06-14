/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React from 'react';
import { Glasses, Mail, Phone, MapPin, Clock, MessageSquare, ArrowUp, Facebook, Instagram, Share2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleFooterScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.offsetTop - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-navy-950 text-gray-350 pt-20 pb-8 border-t border-navy-900/50 relative overflow-hidden text-left">
      {/* Visual lighting spots */}
      <div className="absolute top-0 left-[20%] w-[400px] h-[400px] bg-navy-800/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1 - Brand Identity block */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-2.5">
              <div className="bg-navy-600 text-white p-2.5 rounded-xl">
                <Glasses className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-tight text-white leading-none">
                  LensFab Optical
                </span>
                <span className="font-sans text-[10px] uppercase tracking-widest font-semibold text-navy-400 mt-1">
                  Rashbehari Avenue • Kolkata
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-gray-400 leading-relaxed">
              Serving premium custom spectacles, computer lens coatings, designer shades, and clinical computerized eye examinations compiled by certified South Kolkata optometrists.
            </p>

            {/* Social media anchors */}
            <div className="flex items-center space-x-3.5 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                referrerPolicy="no-referrer"
                className="bg-navy-900 text-gray-400 hover:text-white p-2.5 rounded-xl hover:bg-navy-800 transition-colors"
                title="Follow LensFab on Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                referrerPolicy="no-referrer"
                className="bg-navy-900 text-gray-400 hover:text-white p-2.5 rounded-xl hover:bg-navy-800 transition-colors"
                title="Follow LensFab on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/918100325925"
                target="_blank"
                referrerPolicy="no-referrer"
                className="bg-[#24d366]/10 text-[#24d366] p-2.5 rounded-xl hover:bg-[#24d366] hover:text-white transition-colors"
                title="Direct Chat on WhatsApp"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick links */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="font-display text-xs uppercase text-white font-bold tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-sans text-xs">
              <li>
                <button
                  onClick={() => handleFooterScroll('home')}
                  className="hover:text-white text-gray-400 transition-colors cursor-pointer"
                >
                  Home Layout
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterScroll('why')}
                  className="hover:text-white text-gray-400 transition-colors cursor-pointer"
                >
                  About Trust
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterScroll('services')}
                  className="hover:text-white text-gray-400 transition-colors cursor-pointer"
                >
                  Optistry Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterScroll('products')}
                  className="hover:text-white text-gray-400 transition-colors cursor-pointer"
                >
                  Frames Catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterScroll('gallery')}
                  className="hover:text-white text-gray-400 transition-colors cursor-pointer"
                >
                  Boutique Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services quick links */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-display text-xs uppercase text-white font-bold tracking-wider">
              Our Vision Services
            </h4>
            <ul className="space-y-2.5 font-sans text-xs">
              <li>
                <button
                  onClick={() => handleFooterScroll('services')}
                  className="hover:text-white text-gray-400 transition-colors cursor-pointer"
                >
                  Computerized Refraction Check
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterScroll('services')}
                  className="hover:text-white text-gray-400 transition-colors cursor-pointer"
                >
                  Highcorridor Progressives
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterScroll('services')}
                  className="hover:text-white text-gray-400 transition-colors cursor-pointer"
                >
                  Disposable Contact Lenses
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterScroll('services')}
                  className="hover:text-white text-gray-400 transition-colors cursor-pointer"
                >
                  Polarized & UV Sunglasses
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterScroll('booking')}
                  className="hover:text-white text-gray-400 transition-colors cursor-pointer text-left"
                >
                  Home Diagnostics Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact information */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-display text-xs uppercase text-white font-bold tracking-wider">
              Contact & Hours
            </h4>
            
            <ul className="space-y-3 font-sans text-xs text-gray-400">
              <li className="flex items-start space-x-2.5">
                <MapPin className="h-4 w-4 text-navy-450 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  23B Sardar Sankar Road, 29 Rash Behari Avenue, Kolkata, West Bengal 700029
                </span>
              </li>
              
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-navy-450 flex-shrink-0" />
                <a href="tel:+918100325925" className="hover:text-white transition-colors">
                  +91 81003 25925
                </a>
              </li>

              <li className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-navy-450 flex-shrink-0" />
                <a href="mailto:info@lensfaboptical.com" className="hover:text-white transition-colors">
                  info@lensfaboptical.com
                </a>
              </li>

              <li className="flex items-start space-x-2.5 pt-1.5 border-t border-navy-900">
                <Clock className="h-4 w-4 text-[#fbbf24] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold block">Business Hours</span>
                  <span>Monday – Sunday: 10:00 AM – 9:00 PM</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Separator */}
        <div className="h-px bg-navy-900" />

        {/* Lower footer copyright & local disclaimer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          
          <div className="space-y-1.5 max-w-xl">
            <p className="font-sans text-xs text-navy-400 font-bold tracking-tight">
              LensFab Optical – Your Trusted Vision Care Partner in Rashbehari Avenue, Kolkata.
            </p>
            <p className="font-sans text-[10px] text-gray-500 leading-normal">
              © {currentYear} LensFab Optical. All original designs, specifications & optical logos reserved. Specially optimized for South Kolkata local search coordinates including Southern Avenue, Kalighat, Gariahat, and Ballygunge.
            </p>
          </div>

          {/* Quick legal anchors or credits */}
          <div className="flex space-x-4.5 font-sans text-[10px] text-gray-500">
            <span>License Ref: WB-OPT-925</span>
            <span className="h-3.5 w-px bg-navy-900" />
            <a href="#booking" className="hover:text-white transition-colors">Terms of Care</a>
          </div>

        </div>

      </div>
    </footer>
  );
}
