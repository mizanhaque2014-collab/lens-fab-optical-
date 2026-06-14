/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, Calendar, MessageSquare, Phone, ArrowDown, Award, Eye, Layers, ChevronRight, Store, MapPin, BadgeCheck, CheckCircle } from 'lucide-react';

const luxuryOpticalShowroom = '/src/assets/images/luxury_optical_showroom_1781441996186.jpg';

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
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=700&q=80',
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
    luxuryOpticalShowroom, // Luxurious modern custom optical boutique showroom design
    'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=2000&q=90', // Luxurious modern sunglasses showcase display array
    'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=2000&q=90'  // Elegant optical boutique shelves with warm lighting
  ];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [activeShowroomId, setActiveShowroomId] = useState<string>('titanium-gold');
  const [activePanel, setActivePanel] = useState<'store_banner' | 'frame_designer'>('store_banner');

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
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Images with Zoom, Depth, & Multi-Layer Cross-Fade */}
      <div className="absolute inset-0 z-0">
        {bgImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${img}')` }}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{
              opacity: currentImgIndex === idx ? 0.38 : 0,
              scale: currentImgIndex === idx ? 1.02 : 1.08
            }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
          />
        ))}
        
        {/* Advanced Dark Ambient Glass Mask & Soft warm lighting filters */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/85 to-slate-950/98 pointer-events-none" />
        <div className="absolute -top-[20%] -right-[15%] w-[80%] h-[80%] bg-amber-500/10 rounded-full blur-[140px] animate-pulse pointer-events-none" style={{ animationDuration: '10s' }} />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '12s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-6 md:py-12">
        
        {/* ADVANCED FLOATING GLASSMORPHISM INTERACTIVE DECK LAYER */}
        <motion.div
          id="hero-glass-deck"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-[2rem] p-6 sm:p-10 lg:p-14 shadow-[0_32px_64px_rgba(0,0,0,0.85)] relative overflow-hidden"
        >
          {/* Subtle Reflective Diagonal Sheen overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-6 flex flex-col space-y-7 text-left lg:pr-4">
              
              {/* Trust Banner with Pulsing Icon (Upgraded styling) */}
              <motion.div
                id="trust-banner"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-white/[0.04] border border-white/10 px-4 py-2 rounded-full w-fit shadow-lg backdrop-blur-xs"
              >
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                </span>
                <span className="font-sans text-[10px] sm:text-[11px] font-extrabold text-amber-400 uppercase tracking-widest flex items-center gap-1.5 label-tag">
                  <Award className="h-3.5 w-3.5 text-amber-400" />
                  South Kolkata’s Premium Optical Store
                </span>
              </motion.div>

              {/* Core Display Headline with high contrast gold gradient typography */}
              <motion.div
                id="hero-headlines"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="space-y-3.5"
              >
                <h1 className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
                  South Kolkata’s<br />
                  <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-md">
                    Premium Optical Store
                  </span>
                </h1>
                <p className="font-display text-lg sm:text-xl font-bold text-slate-250 tracking-tight">
                  Computerized Eye Testing & Designer Eyewear Boutique
                </p>
              </motion.div>

              {/* Subheadline description with supreme readability */}
              <motion.p
                id="hero-subheadline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl"
              >
                Experience the absolute pinnacle of optical clarity and global style design. Located conveniently at
                {' '}<strong className="text-amber-300 font-bold underline decoration-amber-400/50 decoration-2 underline-offset-4">
                  Rashbehari Avenue
                </strong>{' '}
                (near Ballygunge & Gariahat), we deliver precision prescription lenses and custom-curated frames designed for supreme comfort.
              </motion.p>

              {/* Interactive CTA Buttons - High contrast premium layout */}
              <motion.div
                id="hero-cta-buttons"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3.5 pt-1.5"
              >
                <a
                  id="hero-cta-book"
                  href="#booking"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-sans text-xs sm:text-sm font-extrabold px-7 py-4 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 group cursor-pointer"
                >
                  <Calendar className="h-4.5 w-4.5 text-slate-950" />
                  <span>Book Free Eye Test</span>
                </a>

                <a
                  id="hero-cta-whatsapp"
                  href="https://wa.me/918100325925?text=Hello%20LensFab%20Optical%20Kolkata!%20I%2520visited%2520your%2520Premium%2520Store%2520website%2520and%2520would%2520like%2520to%2520inquire%2520about%2520eyeglass%2520lenses%2520and%2520eye%2520testing."
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="bg-[#25D366] hover:bg-emerald-600 text-white font-sans text-xs sm:text-sm font-bold px-7 py-4 rounded-xl shadow-md hover:shadow-lg hover:shadow-emerald-500/15 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 cursor-pointer"
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
              </motion.div>

              {/* Feature Highlights beneath buttons */}
              <motion.div
                id="hero-features-small"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap items-center gap-4 pt-1 font-sans text-[11px] text-slate-350 font-bold"
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
              </motion.div>

            </div>

            {/* Right Column: Premium Interactive Showroom / Modern Store Banner Display */}
            <div className="lg:col-span-6 flex flex-col space-y-5">
              
              {/* Toggle Panels: Store View vs Frame Showcase */}
              <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10 w-full shadow-xs backdrop-blur-xs">
                <button
                  id="toggle-store-banner"
                  onClick={() => setActivePanel('store_banner')}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs font-sans font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                    activePanel === 'store_banner'
                      ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Store className="h-4 w-4" />
                  <span>Rashbehari Showroom</span>
                </button>
                <button
                  id="toggle-frame-designer"
                  onClick={() => setActivePanel('frame_designer')}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs font-sans font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                    activePanel === 'frame_designer'
                      ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Layers className="h-4 w-4" />
                  <span>Glasses Virtual Showcase</span>
                </button>
              </div>

              <AnimatePresence mode="wait">
                {activePanel === 'store_banner' ? (
                  /* PHYSICAL STORE BANNER CARD WITH 3D HOVER PARALLAX */
                  <motion.div
                    key="store_panel"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.35 }}
                    className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col relative group text-left"
                  >
                    {/* Modern Optical Storefront Display inside warm lighting banner layout */}
                    <div 
                      onMouseMove={handleMouseMove}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => {
                        setIsHovering(false);
                        setTilt({ x: 0, y: 0 });
                      }}
                      className="relative aspect-video w-full overflow-hidden bg-slate-950 cursor-pointer p-[1px]"
                      style={{ perspective: '1200px' }}
                    >
                      {/* Single Premium Modern Optical Boutique Display Image */}
                      <motion.img
                        src={luxuryOpticalShowroom}
                        alt="LensFab Modern Premium Eyewear Boutique Display Showroom Kolkata with designer collections"
                        referrerPolicy="no-referrer"
                        animate={{
                          scale: isHovering ? 1.07 : 1,
                          rotateX: isHovering ? tilt.y * -18 : 0,
                          rotateY: isHovering ? tilt.x * 18 : 0,
                          z: isHovering ? 32 : 0
                        }}
                        transition={{ type: 'spring', stiffness: 130, damping: 15 }}
                        className="object-cover w-full h-full transform"
                      />
                      
                      {/* Dark premium gradient overlay mapping */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent pointer-events-none z-10" />
                      
                      {/* 3D Lens Glare simulation overlay */}
                      <div 
                        className="absolute inset-0 pointer-events-none z-20 mix-blend-color-dodge transition-opacity duration-300"
                        style={{
                          opacity: isHovering ? 0.6 : 0.15,
                          background: `radial-gradient(circle at ${(tilt.x + 0.5) * 100}% ${(tilt.y + 0.5) * 100}%, rgba(255, 255, 255, 0.45) 0%, transparent 60%)`
                        }}
                      />

                      {/* Luxury Badges overlaid */}
                      <div className="absolute top-4 left-4 bg-amber-500 text-slate-950 font-sans text-[9px] font-extrabold tracking-widest uppercase px-3 py-1.5 rounded-md z-30 shadow-md flex items-center gap-1">
                        <Sparkles className="h-3 w-3 animate-pulse" />
                        Premium Boutique Showroom
                      </div>

                      <div className="absolute top-4 right-4 bg-emerald-500 text-white font-sans text-[9px] font-extrabold z-30 px-3 py-1.5 rounded-md shadow-md">
                        OPEN DAILY
                      </div>

                      {/* Bottom overlay card text details */}
                      <div className="absolute bottom-4 left-4 right-4 text-white z-35 space-y-1">
                        <div className="flex items-center gap-1.5 text-amber-200 text-[10px] font-bold tracking-wide uppercase">
                          <MapPin className="h-3.5 w-3.5 text-amber-400" />
                          <span>Rashbehari Ave, Ballygunge</span>
                        </div>
                        <h3 className="font-display text-base sm:text-lg font-extrabold leading-tight text-white">
                          Luxury Eyewear Boutique & Designer Frame Lounge
                        </h3>
                      </div>
                    </div>

                    {/* Showroom Physical Experience Description & bullet perks with dark glassy design */}
                    <div className="p-6 space-y-4.5 bg-slate-900/80">
                      <p className="font-sans text-xs text-slate-300 leading-relaxed">
                        Step inside our digital optician boutique at <strong className="text-white font-bold">Rashbehari Avenue</strong>. We combine luxurious Italian acetate frames, bulletproof titanium builds, and zero-error computerized auto-refractor checking arrays in an elegant, air-conditioned retail space.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4.5 w-4.5 text-amber-400 mt-0.5 shrink-0" />
                          <div className="text-left">
                            <span className="font-sans text-xs font-extrabold text-white block">Digital Diagnostics</span>
                            <span className="font-sans text-[11px] text-slate-400">Zeiss computer calibration</span>
                          </div>
                        </div>

                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4.5 w-4.5 text-amber-400 mt-0.5 shrink-0" />
                          <div className="text-left">
                            <span className="font-sans text-xs font-extrabold text-white block">500+ Masterworks</span>
                            <span className="font-sans text-[11px] text-slate-400">Aero-lite & Italian block-cut</span>
                          </div>
                        </div>

                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4.5 w-4.5 text-amber-400 mt-0.5 shrink-0" />
                          <div className="text-left">
                            <span className="font-sans text-xs font-extrabold text-white block">Comfort Lounging</span>
                            <span className="font-sans text-[11px] text-slate-400">Complimentary warm tea & cafe</span>
                          </div>
                        </div>

                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4.5 w-4.5 text-amber-400 mt-0.5 shrink-0" />
                          <div className="text-left">
                            <span className="font-sans text-xs font-extrabold text-white block">Surfaced Lenses</span>
                            <span className="font-sans text-[11px] text-slate-400">Essilor & Zeiss certified dispatch</span>
                          </div>
                        </div>
                      </div>

                      {/* Action buttons inside the physical store banner */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/5">
                        <a
                          href="#booking"
                          className="flex-1 inline-flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-sans text-xs font-bold py-3.5 px-4 rounded-xl shadow-md cursor-pointer transition-all active:scale-[0.98]"
                        >
                          <Calendar className="h-4 w-4" />
                          <span>Book Premium Visit</span>
                        </a>
                        
                        <a
                          href="#gallery"
                          className="flex-1 inline-flex items-center justify-center space-x-2 border border-white/10 hover:border-white/20 hover:bg-white/5 text-white font-sans text-xs font-bold py-3.5 px-4 rounded-xl cursor-pointer transition-all active:scale-[0.98]"
                        >
                          <Eye className="h-4 w-4 text-slate-300" />
                          <span>View Store Photos</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  /* INTERACTIVE FRAME DESIGNER SHOWCASE WITH 3D HOVER TILT AND REALISTIC LENS GLARE */
                  <motion.div
                    key="frame_panel"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col space-y-4"
                  >
                    {/* Showroom Interactive Tabs with minimal glassy border */}
                    <div className="flex items-center justify-between bg-white/5 p-1 rounded-xl border border-white/10 max-w-full">
                      <span className="font-sans text-[9px] font-bold text-slate-400 uppercase tracking-wider pl-3.5 hidden sm:block">
                        Showroom Display
                      </span>
                      <div className="flex items-center gap-1 w-full sm:w-auto">
                        {SHOWROOM_FRAMES.map((f) => {
                          const isActive = f.id === activeShowroomId;
                          return (
                            <button
                              key={f.id}
                              id={`showroom-tab-${f.id}`}
                              onClick={() => setActiveShowroomId(f.id)}
                              className={`text-[10px] sm:text-xs font-bold font-sans px-3 py-2 rounded-lg transition-all cursor-pointer flex-1 sm:flex-initial whitespace-nowrap ${
                                isActive
                                  ? 'bg-amber-500 text-slate-950 shadow-sm font-extrabold'
                                  : 'text-slate-300 hover:bg-white/5'
                              }`}
                            >
                              {f.id === 'titanium-gold' ? 'Titanium Gold' : f.id === 'classic-tortoise' ? 'Demi-Acetate' : 'Swiss Rimless'}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Showroom Visualizer Card with Glass Frame style background */}
                    <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col relative group text-left">
                      
                      {/* Product Visual Showcase Box with mouse movement tracking */}
                      <div 
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => {
                          setIsHovering(false);
                          setTilt({ x: 0, y: 0 });
                        }}
                        className="relative aspect-video w-full overflow-hidden bg-slate-950 flex items-center justify-center p-4 cursor-crosshair overflow-hidden"
                        style={{ perspective: '1200px' }}
                      >
                        
                        {/* Active Tag Label overlays */}
                        <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-sans text-[9px] font-extrabold tracking-widest uppercase px-3 py-1.5 rounded-md z-10 shadow-lg">
                          {activeFrame.badge}
                        </div>

                        <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-xs text-white font-mono text-[9px] font-bold border border-white/10 z-10 px-2.5 py-1.5 rounded">
                          {activeFrame.refCode}
                        </div>

                        {/* Main animated image element with smooth 3D translation & rotation */}
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={activeFrame.id}
                            src={activeFrame.image}
                            alt={activeFrame.name}
                            referrerPolicy="no-referrer"
                            initial={{ opacity: 0, scale: 0.95, z: -50 }}
                            animate={{ 
                              opacity: 1, 
                              scale: isHovering ? 1.05 : 1,
                              rotateX: isHovering ? tilt.y * -25 : 0,
                              rotateY: isHovering ? tilt.x * 25 : 0,
                              z: isHovering ? 30 : 0
                            }}
                            exit={{ opacity: 0, scale: 0.95, z: -50 }}
                            transition={{ 
                              type: 'spring', 
                              stiffness: 150, 
                              damping: 18,
                              mass: 0.8
                            }}
                            className="object-cover w-full h-full rounded-lg shadow-2xl origin-center pointer-events-none"
                          />
                        </AnimatePresence>

                        {/* HIGHLY REALISTIC LENS GLARE REFLECTION OVERLAY */}
                        <div 
                          className="absolute inset-0 pointer-events-none z-20 mix-blend-color-dodge transition-all duration-300"
                          style={{
                            opacity: isHovering ? 0.75 : 0.22,
                            background: isHovering 
                              ? `radial-gradient(circle at ${(tilt.x + 0.5) * 100}% ${(tilt.y + 0.5) * 100}%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.15) 35%, transparent 70%)`
                              : 'linear-gradient(135deg, rgba(255,255,255,0) 20%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 80%)',
                            transform: isHovering 
                              ? `translate3d(${tilt.x * 30}px, ${tilt.y * 30}px, 45px)` 
                              : 'none'
                          }}
                        />
                      </div>

                      {/* Product details info pad with glassy night background */}
                      <div className="p-5 text-left space-y-3.5 bg-slate-900/80">
                        
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="font-sans text-[10px] text-amber-400 uppercase font-bold tracking-wide">
                              {activeFrame.origin}
                            </span>
                            <span className="font-sans text-[10px] text-white bg-white/5 border border-white/10 px-2.5 py-0.5 rounded font-bold">
                              {activeFrame.priceQuote}
                            </span>
                          </div>
                          
                          <h3 className="font-display text-base sm:text-lg font-bold text-white">
                            {activeFrame.name}
                          </h3>
                          
                          <span className="font-sans text-xs text-amber-250 font-semibold block">
                            Material Composition: {activeFrame.material}
                          </span>
                        </div>

                        <p className="font-sans text-xs text-slate-350 leading-relaxed">
                          {activeFrame.description}
                        </p>

                        {/* Call to action within the card */}
                        <div className="flex items-center justify-between pt-3.5 border-t border-white/5">
                          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase">
                            <Eye className="h-3.5 w-3.5 text-amber-400" />
                            <span>Instant Showroom Match</span>
                          </div>

                          <button
                            id={`showroom-cta-whatsapp-${activeFrame.id}`}
                            onClick={() => handleShowroomInquiry(activeFrame)}
                            className="inline-flex items-center justify-center space-x-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-sans text-[11px] font-extrabold px-4.5 py-2.5 rounded-lg transition-all cursor-pointer shadow-xs"
                          >
                            <MessageSquare className="h-3.5 w-3.5 text-slate-950" />
                            <span>Inquire About This Frame</span>
                            <ChevronRight className="h-3.5 w-3.5 text-slate-950" />
                          </button>
                        </div>

                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* In-store rating label */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 px-1 pt-1">
                <span>*We offer fully custom surfaced customized lens fittings.</span>
                <span className="font-semibold text-amber-405">4.9★ Rated Rashbehari Star</span>
              </div>

            </div>

          </div>
        </motion.div>
      </div>

      {/* Downward Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-15 flex flex-col items-center">
        <button
          id="scroll-to-next-sect"
          onClick={handleHeroScrollDown}
          className="p-2.5 border border-white/10 hover:border-white/20 text-amber-500 hover:text-amber-400 bg-slate-950/80 backdrop-blur-md shadow-md hover:shadow-lg rounded-full cursor-pointer transition-all duration-300 active:scale-95 flex items-center justify-center animate-bounce"
          title="Explore Services and Collection"
        >
          <ArrowDown className="h-4.5 w-4.5" />
        </button>
      </div>
    </section>
  );
}
