/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Activity, Award, Sparkles, PiggyBank, Truck, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Latest Eye Testing Equipment',
      description: 'Fully computerized autorefractor optical instruments mapping precise spherical, cylindrical, and axis coordinates within minutes.',
      icon: <Activity className="h-5 w-5 text-navy-600" />
    },
    {
      title: 'Experienced Optical Experts',
      description: 'Our certified lens-smiths carry over 15+ years of clinical consultation and progressive corridor fitting mapping experience.',
      icon: <Award className="h-5 w-5 text-navy-600" />
    },
    {
      title: 'Large Frame Collection',
      description: 'Over 500+ designs! Pick gorgeous lightweight rounds, classic bold squares, full rim alloy aviators, or silicone kid structures.',
      icon: <Sparkles className="h-5 w-5 text-navy-600" />
    },
    {
      title: 'Affordable Pricing',
      description: 'Premium eye-care at comfortable, direct-to-customer pricing! No excessive middle commissions or inflated store Markups.',
      icon: <PiggyBank className="h-5 w-5 text-navy-600" />
    },
    {
      title: 'Genuine Lenses Guarantee',
      description: 'All digital progressive or high-index lenses deliver equipped with original manufacturer warranty and QR authenticity cards.',
      icon: <ShieldCheck className="h-5 w-5 text-navy-600" />
    },
    {
      title: 'Fast Delivery & Surfacing',
      description: 'Near-instant processing! Custom single-vision frames surface and fit inside 2-4 hours; progressive options hand over in 24 hours.',
      icon: <Truck className="h-5 w-5 text-navy-600" />
    },
    {
      title: 'Customer Satisfaction',
      description: 'Priding ourselves in accommodating over 5000+ satisfied walk-ins and referrals in South Kolkata with full adjustability audits.',
      icon: <HeartHandshake className="h-5 w-5 text-navy-600" />
    }
  ];

  return (
    <section id="why" className="py-24 bg-transparent relative">
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-navy-50/20 rounded-l-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block - Text Summary & Counts */}
          <div className="lg:col-span-5 flex flex-col space-y-6 text-left">
            <span className="font-sans text-[11px] font-extrabold text-navy-600 uppercase tracking-widest bg-navy-50 px-4 py-1.5 rounded-full w-fit">
              Trust & Legacy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight leading-snug">
              Why Rashbehari Avenue Trusts LensFab Optical
            </h2>
            <p className="font-sans text-sm text-gray-500 leading-relaxed">
              We believe eye care should never make compromises. By integrating clinical high-accuracy technologies with beautiful lightweight materials, LensFab has emerged as the premier vision care destination in South Kolkata.
            </p>

            {/* Quick stats numbers bar */}
            <div className="grid grid-cols-2 gap-6 pt-5 border-t border-gray-100">
              <div className="space-y-1">
                <span className="font-display text-3xl font-bold text-navy-900 block">
                  15+ Yrs
                </span>
                <span className="font-sans text-xs text-gray-400 font-medium">
                  Optician Experience
                </span>
              </div>
              <div className="space-y-1">
                <span className="font-display text-3xl font-bold text-navy-900 block">
                  5,000+
                </span>
                <span className="font-sans text-xs text-gray-400 font-medium">
                  Patrons in South Kolkata
                </span>
              </div>
            </div>

            {/* Local areas served disclaimer */}
            <div className="bg-navy-50/50 p-4 rounded-xl border border-navy-100/40">
              <span className="font-sans text-[10px] uppercase font-bold text-navy-600 tracking-wider block mb-1">
                Serving Nearby Areas:
              </span>
              <p className="font-sans text-xs text-navy-800 leading-relaxed font-semibold">
                Gariahat • Ballygunge • Kalighat • Lake Market • Deshapriya Park • Hazra • Southern Avenue
              </p>
            </div>
          </div>

          {/* Right Block - Features Grid layout */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5.5">
            {features.map((feat, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white p-5 rounded-xl border border-gray-100 hover:border-navy-150 shadow-xs hover:shadow-md transition-all duration-300 flex space-x-4 text-left"
                >
                  <div className="flex-shrink-0 bg-navy-50/80 p-3 h-11 w-11 rounded-lg flex items-center justify-center">
                    {feat.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display text-sm font-bold text-navy-950">
                      {feat.title}
                    </h4>
                    <p className="font-sans text-xs text-gray-400 leading-normal">
                      {feat.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
