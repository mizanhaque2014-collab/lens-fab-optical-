/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Globe, ExternalLink, Navigation } from 'lucide-react';

export default function GoogleMap() {
  const addressQuery = encodeURIComponent('LensFab Optical 23B Sardar Sankar Road Rash Behari Kolkata');
  const gMapsDirectUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;

  return (
    <section id="location-map" className="py-16 bg-transparent border-t border-navy-100/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-navy-50/50 p-6 md:p-8 rounded-3xl border border-navy-100/30">
          
          {/* Map Info Panel */}
          <div className="lg:col-span-4 text-left space-y-5">
            <div className="bg-navy-600 text-white p-3 rounded-2xl w-fit">
              <MapPin className="h-6 w-6 animate-bounce" />
            </div>
            
            <div className="space-y-1.5">
              <span className="font-sans text-[10px] font-extrabold text-navy-600 uppercase tracking-widest block">
                Showroom Location
              </span>
              <h3 className="font-display text-2xl font-bold text-navy-950 tracking-tight">
                Visit Us Today
              </h3>
              <p className="font-sans text-xs text-gray-500 leading-normal">
                Conveniently located at the crossing of Sardar Sankar Road and Rashbehari Avenue, South Kolkata. Easily reachable from Gariahat & Kalighat metro station.
              </p>
            </div>

            {/* Address cards */}
            <div className="bg-white p-4 rounded-xl border border-gray-105 shadow-inner space-y-2">
              <span className="font-sans text-[10px] text-gray-400 font-bold uppercase tracking-wide block">Address</span>
              <p className="font-sans text-xs text-navy-900 font-semibold leading-relaxed">
                23B Sardar Sankar Road, 29 Rash Behari Avenue, Kolkata, West Bengal 700029
              </p>
            </div>

            {/* Direct navigation hotkeys */}
            <a
              id="gmaps-direct-navigator"
              href={gMapsDirectUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="inline-flex items-center space-x-2 bg-navy-600 hover:bg-navy-700 text-white font-sans text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-md active:scale-95"
            >
              <Navigation className="h-4 w-4" />
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {/* Interactive Responsive Iframe Map */}
          <div className="lg:col-span-8 h-[350px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative group bg-gray-100">
            <iframe
              id="gmaps-responsive-iframe"
              title="LensFab Optical Google Map"
              src="https://maps.google.com/maps?q=LensFab%20Optical,%2023B%20Sardar%20Sankar%20Road,%2029%20Rash%20Behari%20Avenue,%20Kolkata&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter contrast-105 grayscale-12 hover:grayscale-0 transition-all duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
