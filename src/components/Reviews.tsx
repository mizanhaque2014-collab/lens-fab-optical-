/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, MessageSquare, Quote } from 'lucide-react';
import { REVIEWS_DATA } from '../data';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  const current = REVIEWS_DATA[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative backdrop elements */}
      <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] bg-navy-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-[11px] font-extrabold text-navy-600 uppercase tracking-widest bg-navy-50 px-4 py-1.5 rounded-full inline-block">
            Customer Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
            Hear From Our Happy Patrons
          </h2>
          <p className="font-sans text-sm text-gray-500">
            With 180+ verified high-rating ratings, we take pride in delivering absolute vision precision and bespoke style to Kolkata residents.
          </p>
        </div>

        {/* Testimonials Main Slider Box */}
        <div className="relative bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 max-w-4xl mx-auto">
          
          {/* Quote Icon watermark */}
          <div className="absolute top-8 right-8 text-navy-100/40 pointer-events-none">
            <Quote className="h-16 w-16 transform scale-x-[-1]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col md:flex-row items-center md:items-start gap-8"
            >
              {/* Reviewer Avatar */}
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-navy-500 rounded-full blur-md opacity-25" />
                <img
                  src={current.avatar}
                  alt={current.name}
                  referrerPolicy="no-referrer"
                  className="relative w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>

              {/* Review Text */}
              <div className="flex-1 text-center md:text-left space-y-4">
                {/* Stars Indicator */}
                <div className="flex justify-center md:justify-start space-x-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                {/* Comment Body */}
                <p className="font-sans text-base text-gray-600 leading-relaxed italic">
                  "{current.comment}"
                </p>

                {/* Reviewer Metadata */}
                <div>
                  <h4 className="font-display text-base font-bold text-navy-950">
                    {current.name}
                  </h4>
                  <p className="font-sans text-xs text-gray-400">
                    {current.role} • <span className="font-medium text-navy-500">{current.date}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Control Navigation Keys */}
          <div className="flex items-center justify-between md:justify-end space-x-4 mt-8 pt-6 border-t border-gray-50">
            <span className="font-mono text-xs text-gray-400">
              0{currentIndex + 1} / 0{REVIEWS_DATA.length}
            </span>

            <div className="flex space-x-2">
              <button
                id="review-prev-slide"
                onClick={prevReview}
                className="p-3 border border-gray-100 hover:border-navy-200 text-navy-700 hover:text-navy-900 bg-white hover:bg-navy-50 rounded-xl cursor-pointer shadow-xs transition-all"
                title="Previous testimonial"
              >
                <ChevronLeft className="h-4.5 w-4.5" />
              </button>

              <button
                id="review-next-slide"
                onClick={nextReview}
                className="p-3 border border-gray-100 hover:border-navy-200 text-navy-700 hover:text-navy-900 bg-white hover:bg-navy-50 rounded-xl cursor-pointer shadow-xs transition-all"
                title="Next testimonial"
              >
                <ChevronRight className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>

        </div>

        {/* GMB aggregate badge */}
        <div className="mt-12 flex justify-center items-center">
          <div className="bg-white px-6 py-4.5 rounded-2xl border border-gray-100 shadow-md flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="bg-navy-600 text-white font-display text-lg font-bold px-3 py-1 bg-radial rounded-xl">
              G
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center space-x-1.5 justify-center md:justify-start">
                <span className="font-sans text-sm font-bold text-navy-950">4.9 Star Rating</span>
                <div className="flex text-gold-400">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                </div>
              </div>
              <p className="font-sans text-xs text-gray-400">Based on 184+ customer recommendations in Kolkata, West Bengal</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
