/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, Calendar, MessageSquare, Phone, ArrowDown, Award, Eye, Layers, ChevronRight, Store, MapPin, BadgeCheck, CheckCircle } from 'lucide-react';

const luxuryOpticalShowroom = '/images/lensfab-store.webp';

interface ShowroomFrame {
  id: string;
  name: string;
  material: string;
  origin: string;
  image: string;
  badge: string;
  priceQuote: string;
  description: string;
  refCode: string;
}

const SHOWROOM_FRAMES: ShowroomFrame[] = [
  {
    id: 'titanium-gold',
    name: 'Optima Retro-Gold Round',
    material: 'Beta-Titanium, 18K IP Gold Plated',
    origin: 'Handcrafted Japanese Engineering',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=700&q=80',
    badge: 'Luxury Masterpiece',
    priceQuote: 'Premium Collection',
    description: 'Super-flexible beta-titanium core with ultra-light bridges for flawless all-day wear. Weightless look and feel.',
    refCode: 'LF-TITAN-09'
  },
  {
    id: 'classic-tortoise',
    name: 'Vantage Demi-Acetate',
    material: 'Bio-Cellulose Italian Acetate',
    origin: 'Milled Milanese Heritage Craft',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80',
    badge: 'Artisan Favorite',
    priceQuote: 'High End Style',
    description: 'Cured organic cotton-extract blocks, hand-polished over 72 hours for an rich gloss and profound depth of color.',
    refCode: 'LF-ACET-37'
  },
  {
    id: 'rimless-silver',
    name: 'Aero-Lite Geometric Trim',
    material: 'Surgical Stainless Alloy & Silicon Tech',
    origin: 'Modern Swiss minimalist build',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=700&q=80',
    badge: 'Ultra-Minimalist',
    priceQuote: 'Sleek Airweight',
    description: 'Zero-rim system secured by premium compression bushings. Offers perfect wide-angle peripheral view coverage.',
    refCode: 'LF-AERO-52'
  }
];

export default function Hero() {
  const bgImages = [
    luxuryOpticalShowroom, // Luxurious modern sunglasses showcase display array
    'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=2000&q=90', // Elegant optical shelves with beautiful spectacles on display
    'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=2000&q=90'  // Sunlit luxury sunglasses boutique collection
  ];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [activeShowroomId, setActiveShowroomId] = useState<string>('titanium-gold');

  // Parallax 3D & Lens Glare Tracking State
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // [-0.5, 0.5]
    const y = (e.clientY - rect.top) / rect.height - 0.5; // [-0.5, 0.5]
    setTilt({ x, y });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % bgImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleHeroScrollDown = () => {
    const el = document.getElementById('why');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeFrame = SHOWROOM_FRAMES.find(f => f.id === activeShowroomId) || SHOWROOM_FRAMES[0];

  const handleShowroomInquiry = (frame: ShowroomFrame) => {
    const text = encodeURIComponent(
      `Hi LensFab Optical! I noticed the beautiful "${frame.name}" (${frame.refCode}) premium frame from South Kolkata’s Premium Optical Store on your layout. I would love to check the exact price, availability, and lens prescription options!`
    );
    window.open(`https://wa.me/918100325925?text=${text}`, '_blank', 'referrerpolicy=no-referrer');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center pt-24 pb-16 overflow-hidden bg-slate-950 text-white"
    >
      {/* Premium ambient backdrop background glow effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute top-1/4 left-1/4 w-[60%] h-[40%] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center space-y-8 md:space-y-12">
        
        {/* 1. BRAND STOREFRONT PICTURE SHOWCASE - Fully clear, vivid, 100% opacity */}
        <motion.div
          id="hero-storefront-showcase"
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl relative group mt-4"
        >
          {/* Subtle neon halo surrounding the storefront picture card */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-85 group-hover:opacity-100 transition duration-1000" />
          
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_24px_50px_rgba(0,0,0,0.7)] bg-slate-900 aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/10] w-full">
            <img 
              src={luxuryOpticalShowroom} 
              alt="LensFab Premium Optical Showroom Facade" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 select-none pb-0" 
            />
            {/* Elegant vignette shade over the very bottom edge of the storefront card */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* 2. PREMIUM TEXT, CREDENTIALS, AND BOOKING OPTIONS (PLACED "UNDER DOWN" INTEGRAL CARD) */}
        <motion.div
          id="hero-glass-deck"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="w-full max-w-4xl backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] relative overflow-hidden"
        >
          {/* Subtle reflective sheen gradient sweep */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center space-y-6 sm:space-y-7">
            
            {/* Centered Trust Banner with Pulsing Icon */}
            <div
              id="trust-banner"
              className="inline-flex items-center space-x-2 bg-white/[0.04] border border-white/10 px-4 py-2 rounded-full w-fit shadow-lg backdrop-blur-xs mx-auto"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
              <span className="font-sans text-[10px] sm:text-[11px] font-extrabold text-amber-400 uppercase tracking-widest flex items-center gap-1.5 label-tag">
                <Award className="h-3.5 w-3.5 text-amber-400" />
                South Kolkata’s Premium Optical Store
              </span>
            </div>

            {/* Core Display Headline */}
            <div
              id="hero-headlines"
              className="space-y-3 w-full"
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.08] max-w-2xl mx-auto">
                South Kolkata’s<br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-md">
                  Premium Optical Store
                </span>
              </h1>
              <p className="font-display text-lg sm:text-xl font-bold text-slate-250 tracking-tight">
                Computerized Eye Testing & Designer Eyewear Boutique
              </p>
            </div>

            {/* Subheadline description with supreme readability */}
            <p
              id="hero-subheadline"
              className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto"
            >
              Experience the absolute pinnacle of optical clarity and global style design. Located conveniently at
              {' '}<strong className="text-amber-300 font-bold underline decoration-amber-400/50 decoration-2 underline-offset-4 font-sans">
                Rashbehari Avenue
              </strong>{' '}
              (near Ballygunge & Gariahat), we deliver precision prescription lenses and custom-curated frames designed for supreme comfort.
            </p>

            {/* Interactive CTA Buttons */}
            <div
              id="hero-cta-buttons"
              className="flex flex-col sm:flex-row gap-3.5 pt-1.5 justify-center w-full max-w-lg mx-auto"
            >
              <a
                id="hero-cta-book"
                href="#booking"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-sans text-xs sm:text-sm font-extrabold px-7 py-4 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 group cursor-pointer flex-1"
              >
                <Calendar className="h-4.5 w-4.5 text-slate-950" />
                <span>Book Free Eye Test</span>
              </a>

              <a
                id="hero-cta-whatsapp"
                href="https://wa.me/918100325925?text=Hello%20LensFab%20Optical%20Kolkata!%20I%20visited%20your%20Premium%20Store%20website%20and%20would%20like%20to%20inquire%20about%20eyeglass%20lenses%20and%20eye%20testing."
                target="_blank"
                referrerPolicy="no-referrer"
                className="bg-[#25D366] hover:bg-emerald-600 text-white font-sans text-xs sm:text-sm font-bold px-7 py-4 rounded-xl shadow-md hover:shadow-lg hover:shadow-emerald-500/15 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 cursor-pointer flex-1"
              >
                <MessageSquare className="h-4.5 w-4.5" />
                <span>Inquire on WhatsApp</span>
              </a>

              <a
                id="hero-cta-call"
                href="tel:+918100325925"
                className="border border-white/20 hover:border-white/30 text-white font-sans text-xs sm:text-sm font-bold px-6 py-4 rounded-xl bg-white/[0.02] hover:bg-white/5 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Phone className="h-4.5 w-4.5 text-slate-300" />
                <span>Call Store</span>
              </a>
            </div>

            {/* Feature Highlights beneath buttons */}
            <div
              id="hero-features-small"
              className="flex flex-wrap items-center justify-center gap-4 pt-1 font-sans text-[11px] text-slate-350 font-bold mx-auto"
            >
              <div className="flex items-center space-x-1.5">
                <Sparkles className="h-4 w-4 text-amber-400" />
                <span>Zero-Error Digital Testing</span>
              </div>
              <div className="h-3 w-px bg-white/10 hidden sm:block" />
              <div className="flex items-center space-x-1.5">
                <Shield className="h-4 w-4 text-blue-400" />
                <span>100% Authentic Quality Duty</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Downward Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-15 flex flex-col items-center">
        <button
          id="scroll-to-next-sect"
          onClick={handleHeroScrollDown}
          className="p-2 border border-white/10 hover:border-white/20 text-amber-500 hover:text-amber-400 bg-slate-950/80 backdrop-blur-md shadow-md hover:shadow-lg rounded-full cursor-pointer transition-all duration-300 active:scale-95 flex items-center justify-center animate-bounce"
          title="Explore Services and Collection"
        >
          <ArrowDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
