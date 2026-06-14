/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_DATA } from '../data';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-transparent border-t border-navy-100/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3.5">
          <span className="font-sans text-[11px] font-extrabold text-navy-600 uppercase tracking-widest bg-navy-50 px-4 py-1.5 rounded-full inline-block">
            Frequently Asked Questions
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
            Vision Care FAQs
          </h2>
          <p className="font-sans text-xs text-gray-500">
            Find answers regarding computerized ocular scans, bifocal progressive deliveries, premium tints, and home services at Rashbehari.
          </p>
        </div>

        {/* FAQs Accordion Grid */}
        <div className="space-y-4 text-left">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-accordion-item-${index}`}
                className="bg-[#FAFDFE] rounded-2xl border border-gray-150/90 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200"
              >
                {/* Trigger head */}
                <button
                  id={`faq-trigger-${index}`}
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4.5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className="h-5 w-5 text-navy-505 flex-shrink-0" />
                    <span className="font-sans text-sm font-bold text-navy-950 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-gray-100 text-navy-600">
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {/* Collapsible details body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 pt-1.5 border-t border-gray-100 text-xs text-gray-500 leading-relaxed bg-white">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
