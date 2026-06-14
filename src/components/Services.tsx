/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Eye, Glasses, Sparkles, Sun, ShoppingBag, Home, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Eye': return <Eye className="h-6 w-6" />;
    case 'Glasses': return <Glasses className="h-6 w-6" />;
    case 'Sparkles': return <Sparkles className="h-6 w-6" />;
    case 'Sun': return <Sun className="h-6 w-6" />;
    case 'ShoppingBag': return <ShoppingBag className="h-6 w-6" />;
    case 'Home': return <Home className="h-6 w-6" />;
    default: return <Eye className="h-6 w-6" />;
  }
};

export default function Services() {
  
  const handleServiceInquiry = (serviceTitle: string) => {
    const text = encodeURIComponent(`Hi LensFab Optical, checking in about your standard services: "${serviceTitle}". I'd like to book an appointment slot or ask details.`);
    window.open(`https://wa.me/918100325925?text=${text}`, '_blank', 'referrerpolicy=no-referrer');
  };

  const highlightDescription = (text: string, list: string[]) => {
    if (!list || list.length === 0) return text;
    
    // Create a regular expression from the word lists
    const escapedWords = list.map(word => word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
    const regex = new RegExp(`\\b(${escapedWords.join('|')})\\b`, 'gi');
    
    const parts = text.split(regex);
    return parts.map((part, index) => {
      const isMatch = list.some(word => word.toLowerCase() === part.toLowerCase());
      return isMatch ? (
        <span key={index} className="font-semibold text-navy-800">
          {part}
        </span>
      ) : (
        part
      );
    });
  };

  return (
    <section id="services" className="py-24 bg-transparent relative">
      {/* Visual Ambient Elements */}
      <div className="absolute top-[40%] left-[-5%] w-[400px] h-[400px] bg-navy-50/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-10%'} }
            className="font-sans text-[11px] font-extrabold text-navy-600 uppercase tracking-widest bg-navy-50 px-4 py-1.5 rounded-full"
          >
            Clinical Excellence & Fashion Eyewear
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight"
          >
            Our Professional Optical Services
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-base text-gray-500"
          >
            Equipped with modern high-accuracy computers and high-end frames, our optical store provides world-class optometry checkups and personalized care in Rashbehari Avenue.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service: Service, index: number) => {
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative bg-white rounded-2xl p-7 hover:shadow-2xl hover:shadow-navy-100/60 border border-gray-100 hover:border-navy-100/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Badge Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-navy-50 group-hover:bg-navy-600 text-navy-600 group-hover:text-white p-4 rounded-xl transition-all duration-300">
                      {getServiceIcon(service.iconName)}
                    </div>
                    {service.badge && (
                      <span className="bg-gold-500/10 text-gold-600 text-[10px] uppercase font-extrabold px-3 py-1 rounded-full font-sans tracking-widest animate-pulse-subtle">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-navy-900 group-hover:text-navy-700 transition-colors duration-250 mb-3">
                    {service.title}
                  </h3>

                  {/* Body description */}
                  <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6">
                    {highlightDescription(service.description, service.highlightWords)}
                  </p>
                </div>

                {/* Card CTA Actions */}
                <button
                  id={`service-inquire-btn-${service.id}`}
                  onClick={() => handleServiceInquiry(service.title)}
                  className="inline-flex items-center space-x-1.5 font-sans text-xs font-bold text-navy-600 hover:text-navy-800 transition-all group-2 border-t border-gray-50 pt-4 w-full text-left"
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
