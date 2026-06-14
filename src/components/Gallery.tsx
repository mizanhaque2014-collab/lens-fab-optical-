/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Eye, Image as ImageIcon } from 'lucide-react';
import { GALLERY_DATA } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'store', label: 'Store Interior' },
    { value: 'testing', label: 'Eye Testing' },
    { value: 'frames', label: 'Frames Collections' },
    { value: 'customers', label: 'Happy Customers' },
  ];

  const filteredItems = GALLERY_DATA.filter((item) => {
    return activeCategory === 'all' || item.category === activeCategory;
  });

  const openLightbox = (id: string) => {
    const idx = GALLERY_DATA.findIndex((item) => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_DATA.length);
    }
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="font-sans text-[11px] font-extrabold text-navy-600 uppercase tracking-widest bg-navy-50 px-4 py-1.5 rounded-full inline-block">
            Showroom Gallery
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
            Inside LensFab Optical Showroom
          </h2>
          <p className="font-sans text-sm text-gray-500">
            A glimpse into our state-of-the-art vision checking devices, pristine designer rows, and delighted patients at Rashbehari Avenue.
          </p>
        </div>

        {/* Categories Tab List */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 overflow-x-auto pb-1">
          <div className="flex items-center gap-1 bg-navy-50/50 p-1.5 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat.value}
                id={`gallery-cat-${cat.value}`}
                onClick={() => setActiveCategory(cat.value)}
                className={`font-sans text-xs font-semibold px-4.5 py-2.5 rounded-lg whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.value
                    ? 'bg-navy-600 text-white shadow-sm'
                    : 'text-navy-900 hover:text-navy-600 hover:bg-navy-100/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid Masonry */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: GalleryItem) => (
              <motion.div
                layout
                key={item.id}
                id={`gallery-item-card-${item.id}`}
                initial={{ opacity: 0, scale: 0.93 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(item.id)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 bg-gray-50 aspect-4/3"
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="object-cover w-full h-full transform group-hover:scale-106 transition-transform duration-500"
                />

                {/* Cover Hover Overlay */}
                <div className="absolute inset-0 bg-navy-950/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                  <div className="bg-white/95 backdrop-blur-xs p-1.5 rounded-full absolute top-4 right-4 text-navy-900 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="h-4 w-4" />
                  </div>
                  
                  <div className="space-y-1 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-navy-400 font-sans">
                      {item.category.toUpperCase()}
                    </span>
                    <h4 className="font-display text-sm font-bold text-white uppercase">
                      {item.title}
                    </h4>
                    <p className="font-sans text-[11px] text-gray-200 line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full Screen Lightbox Modal Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            id="gallery-lightbox-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy-950/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* ESC or Close Key */}
            <button
              id="close-lightbox-btn"
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-full cursor-pointer transition-all"
              title="Close gallery viewer"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Previous Key */}
            <button
              id="prev-lightbox-slide"
              onClick={prevSlide}
              className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full cursor-pointer transition-all"
              title="Previous Photo"
            >
              <ChevronLeft className="h-5.5 w-5.5" />
            </button>

            {/* Main Lightbox Content wrapper */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[80vh] flex flex-col justify-center items-center"
            >
              <img
                src={GALLERY_DATA[lightboxIndex].imageUrl}
                alt={GALLERY_DATA[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="object-contain max-h-[70vh] rounded-xl shadow-2xl"
              />

              {/* Mini detail strip below image */}
              <div className="mt-4 text-center text-white space-y-1 px-4">
                <span className="bg-navy-600 font-sans text-[9px] uppercase font-bold px-3 py-1 rounded-full text-center">
                  {GALLERY_DATA[lightboxIndex].category}
                </span>
                <h3 className="font-display text-base font-bold uppercase tracking-tight pt-1.5">
                  {GALLERY_DATA[lightboxIndex].title}
                </h3>
                <p className="font-sans text-xs text-gray-400">
                  {GALLERY_DATA[lightboxIndex].description}
                </p>
              </div>
            </motion.div>

            {/* Next Key */}
            <button
              id="next-lightbox-slide"
              onClick={nextSlide}
              className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full cursor-pointer transition-all"
              title="Next Photo"
            >
              <ChevronRight className="h-5.5 w-5.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
