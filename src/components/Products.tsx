/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Filter, 
  MessageSquare, 
  ArrowRight, 
  Star, 
  ShoppingBag, 
  BadgeCheck, 
  Eye, 
  Layers, 
  Laptop, 
  Check, 
  Sparkles, 
  Info, 
  X,
  HelpCircle,
  TrendingUp,
  Zap,
  Shield,
  Sliders,
  Sun,
  Activity,
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data';
import { Product } from '../types';

interface LensTypeGuide {
  id: 'blue-cut' | 'anti-glare' | 'progressive';
  name: string;
  badge: string;
  tagline: string;
  bestFor: string;
  description: string;
  benefits: string[];
  specs: {
    glareBlock: string;
    blueLightBlock: string;
    focalRanges: string;
    uvBlock: string;
    priceRange: string;
  };
  sampleImageUrl: string;
  simulateLabelBefore: string;
  simulateLabelAfter: string;
  simulateStyleBefore: string;
  simulateStyleAfter: string;
}

interface CompressionDetail {
  index: '1.50' | '1.56' | '1.61' | '1.67' | '1.74';
  title: string;
  category: string;
  thicknessPercent: number;
  weightSaving: string;
  bestRange: string;
  abbeValue: string;
  durability: string;
  pros: string;
  lensFeatureIcons: {
    icon: 'shield' | 'zap' | 'clarity' | 'edge';
    label: string;
    description: string;
  }[];
}

const COMPRESSION_DATA: CompressionDetail[] = [
  {
    index: '1.50',
    title: 'Standard Core Lenses',
    category: 'Legacy Basic',
    thicknessPercent: 100,
    weightSaving: '0% (Standard heft)',
    bestRange: 'Plano to ±1.50 SPH',
    abbeValue: '58 (Highest optical purity)',
    durability: 'Standard scratch-resistance coating.',
    pros: 'Excellent visual comfort, ideal for lower budgets.',
    lensFeatureIcons: [
      { icon: 'clarity', label: 'Abbe 58 Purity', description: 'Maximum resolution accuracy with zero outer color rainbow distortion.' },
      { icon: 'shield', label: 'Basic Scratch', description: 'Tough outer varnish defense.' }
    ]
  },
  {
    index: '1.56',
    title: 'Mid-Index Thin Lenses',
    category: 'Value Comfort',
    thicknessPercent: 82,
    weightSaving: '15% Lighter than standard',
    bestRange: '±1.75 to ±3.00 SPH',
    abbeValue: '38 (Sharp focus)',
    durability: 'Enriched tensile security. Fits securely in metal frame contours.',
    pros: 'A smart affordable upgrade, slims down lens edges cleanly.',
    lensFeatureIcons: [
      { icon: 'clarity', label: 'Balanced Abbe 38', description: 'Solid transmission for high clarity.' },
      { icon: 'zap', label: '18% Thinner Edge', description: 'Reduces heavy pressure marks on the nose bridge.' },
      { icon: 'shield', label: 'High Durability', description: 'Ideal for day-to-day work structures.' }
    ]
  },
  {
    index: '1.61',
    title: 'High-Index Shatterproof Lenses',
    category: 'Premium Active Touch',
    thicknessPercent: 68,
    weightSaving: '28% Lighter than standard',
    bestRange: '±3.25 to ±5.00 SPH',
    abbeValue: '42 (Highly sharp)',
    durability: 'Virtually shatterproof compound resin. Essential for active sports and rimless frames.',
    pros: '30%+ thinner. Immensely impact resistant, perfect for children or drill mounts.',
    lensFeatureIcons: [
      { icon: 'clarity', label: 'Abbe 42 Sharpness', description: 'Superior clean vision, rare for dense materials.' },
      { icon: 'zap', label: '32% Lighter', description: 'Restricts annoying outer lens slide.' },
      { icon: 'shield', label: 'Heavy Duty MR-8', description: 'Ultra-tough polymer with outstanding structural protection.' }
    ]
  },
  {
    index: '1.67',
    title: 'Super-Thin Elite Lenses',
    category: 'Modern Elegance',
    thicknessPercent: 55,
    weightSaving: '38% Featherlight weight',
    bestRange: '±5.25 to ±7.00 SPH',
    abbeValue: '32 (Coating compensated)',
    durability: 'Outstanding structural stiffness. Ideal for designer metal frames.',
    pros: 'Aesthetics champion. Flattens circular eye-warping rings on face edges.',
    lensFeatureIcons: [
      { icon: 'clarity', label: 'Aspheric Curves', description: 'Flatter front profiles to stop face "indentation" visuals.' },
      { icon: 'zap', label: '45% Extreme Slim', description: 'No unsightly glass protrusions behind round rims.' },
      { icon: 'edge', label: 'Aberration Control', description: 'Optimized corners to expand crystal periphery focus.' }
    ]
  },
  {
    index: '1.74',
    title: 'Ultra-Thin Bi-Aspheric Lenses',
    category: 'Ultimate Precision',
    thicknessPercent: 45,
    weightSaving: '48% Featherweight profile',
    bestRange: 'Above ±7.25 SPH (Deep corrections)',
    abbeValue: '33 (Dual surface corrected)',
    durability: 'High-density organic compound structural safety.',
    pros: 'The absolute slimmest lens technology ever engineered. Unrivaled layout.',
    lensFeatureIcons: [
      { icon: 'clarity', label: 'Dual-Aspheric profile', description: 'Warp-free continuous focus up to the extreme lens border.' },
      { icon: 'zap', label: '55% Thinnest Layout', description: 'Incredibly lightweight. Eradicates standard heavy glass drops.' },
      { icon: 'edge', label: 'Zero Magnification', description: 'Prevents standard "bug-eye" magnification seen from outside.' }
    ]
  }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showLensGuide, setShowLensGuide] = useState<boolean>(true);
  const [activeLensTab, setActiveLensTab] = useState<'blue-cut' | 'anti-glare' | 'progressive'>('blue-cut');

  // Interactive Lens Selection help tabs
  const [activeGuideView, setActiveGuideView] = useState<'comparator' | 'selector' | 'compression'>('comparator');
  
  // Quiz selector inputs
  const [selectorHabit, setSelectorHabit] = useState<'screen' | 'driving' | 'all-day' | 'outdoors'>('screen');
  const [selectorPower, setSelectorPower] = useState<'plano' | 'low' | 'moderate' | 'high'>('low');

  // Lens Compression active option
  const [selectedCompressionIndex, setSelectedCompressionIndex] = useState<'1.50' | '1.56' | '1.61' | '1.67' | '1.74'>('1.61');

  const getSelectorRecommendation = (habit: 'screen' | 'driving' | 'all-day' | 'outdoors', power: 'plano' | 'low' | 'moderate' | 'high') => {
    let lensType = '';
    let lensIndex = '';
    let featuresList: string[] = [];
    let customTitle = '';
    let descriptionText = '';
    let priceEstimate = '';

    // Determine type
    if (habit === 'screen') {
      lensType = 'Blue-Cut Digital Shield with ARC';
      customTitle = 'LensFab Smart Blue-Cut Elite';
      descriptionText = 'Engineered specifically for screen-heavy routines. Filters blue screen emissions while keeping background colors crisp.';
      priceEstimate = '₹1,200 – ₹1,800';
      featuresList = ['98% Blue-violet protection', 'Extreme glare relief', 'Oleophobic touch resistance'];
    } else if (habit === 'driving') {
      lensType = 'Anti-Glare Night-Vision (ARC) Multi-Coat';
      customTitle = 'LensFab DriveGuard Clarity';
      descriptionText = 'Optimized with vacuum multi-coats to curb headlight starburst and halo effects during late-night street drives.';
      priceEstimate = '₹950 – ₹1,500';
      featuresList = ['Zero halo glare', 'Rain & dust repellent water-beading', 'High 99.8% light transmission'];
    } else if (habit === 'outdoors') {
      lensType = 'Polarized UV400 / Smart Photochromic';
      customTitle = 'LensFab Active Outdoor Adaptive';
      descriptionText = 'Quickly darkens on direct sunlight exposure to block harsh solar radiation. Remains absolutely clear indoors.';
      priceEstimate = '₹1,800 – ₹3,200';
      featuresList = ['Instant solar transition', '100% UVA/UVB blockage', 'High glare polarized filter'];
    } else {
      lensType = 'All-Day Premium Comfort Multi-Coat';
      customTitle = 'LensFab Everyday Omnishield';
      descriptionText = 'An excellent daily choice combining subtle amber blue-cut, scratch fortification, and reflection suppression.';
      priceEstimate = '₹750 – ₹1,200';
      featuresList = ['All-in-one smart defense', 'Pristine optical clarity', 'Static-free repel film'];
    }

    // Determine index based on prescription
    if (power === 'plano') {
      lensIndex = '1.50 Standard or 1.56 Mid-Index';
      featuresList.push('Ultra lightweight baseline', 'Robust mechanical safety');
    } else if (power === 'low') {
      lensIndex = '1.56 Mid-Index Thin';
      featuresList.push('18% Thinner profile', 'Perfect fits for round wireframes');
    } else if (power === 'moderate') {
      lensIndex = '1.61 High-Index Active-Thin';
      featuresList.push('32% Slimmer borders', 'MR-8 high resilience resin material');
    } else {
      lensIndex = '1.67 Super-Thin Aspheric or 1.74 Ultra-Thin';
      featuresList.push('Up to 55% thickness compression', 'Zero side-view magnifying warping effect');
    }

    return {
      customTitle,
      lensType,
      lensIndex,
      featuresList,
      description: descriptionText,
      price: priceEstimate,
    };
  };

  const currentRecommendation = useMemo(() => {
    return getSelectorRecommendation(selectorHabit, selectorPower);
  }, [selectorHabit, selectorPower]);

  const handleSelectorWhatsAppInquire = () => {
    const text = encodeURIComponent(
      `Hi LensFab Optical! I just used your Lens Selector Tool on the web layout. My primary usage is "${selectorHabit.toUpperCase()}" with a "${selectorPower.toUpperCase()}" prescription power index. It recommended the "${currentRecommendation.customTitle}" (${currentRecommendation.lensType}) with "${currentRecommendation.lensIndex}" compression. Could you please guide me on pricing quotes, and frame options for this custom setup?`
    );
    window.open(`https://wa.me/918100325925?text=${text}`, '_blank', 'referrerpolicy=no-referrer');
  };

  const categories = [
    { value: 'all', label: 'All Premium Collection' },
    { value: 'frames', label: 'Designer Frames' },
    { value: 'sunglasses', label: 'Sunglasses' },
    { value: 'computer', label: 'Blue-Cut & Progressives' },
    { value: 'lenses', label: 'Contact Lenses' },
    { value: 'kids', label: 'Kids Frames' },
  ];

  const lensGuideData: LensTypeGuide[] = [
    {
      id: 'blue-cut',
      name: 'Blue-Cut Tech Lenses',
      badge: 'Digital Shield',
      tagline: 'Best-in-class screen defense & sleep rhythm guard.',
      bestFor: 'Software Engineers, gamers, screen power-users, and remote professionals.',
      description: 'Specially engineered with high-tech monomers that block high-energy blue-violet light emitted by modern digital screens, smartphones, and LEDs.',
      benefits: [
        'Blocks 98% harmful blue wavelengths',
        'Relieves digital eye strain and dry-eye symptoms',
        'Improves circadian sleep and natural melatonin release',
        'Double-sided anti-smudge and anti-scratch protection'
      ],
      specs: {
        glareBlock: 'High (With Built-in ARC Coating)',
        blueLightBlock: '98% Heavy Duty Blue Light Filtration',
        focalRanges: 'Single-Vision / Computer focused',
        uvBlock: 'UV400 Safe (Max Solar Protection)',
        priceRange: 'Starts at ₹1,200 (Free testing)'
      },
      sampleImageUrl: 'https://i.postimg.cc/TPWJqYS2/Chat-GPT-Image-Jun-14-2026-08-39-04-AM.png',
      simulateLabelBefore: 'Standard Lens (Suffer Screen Glare & Fatigue)',
      simulateLabelAfter: 'LensFab Blue-Cut (Soothing Warm Contrast Protection)',
      simulateStyleBefore: 'brightness-125 grayscale-[10%] saturate-125 border-r border-[#3b82f6]/40 shadow-inner after:absolute after:inset-0 after:bg-blue-600/15',
      simulateStyleAfter: 'brightness-100 saturate-100 bg-amber-50/10'
    },
    {
      id: 'anti-glare',
      name: 'Anti-Glare (ARC) Lenses',
      badge: 'Highway & Night Clear',
      tagline: 'Ultra-pure clarity & reflection-free night drives.',
      bestFor: 'Night drivers, photographers, creators, and public speakers.',
      description: 'Infused with durable hydrophobic vacuum multi-coats to eliminate annoying visual reflections, direct glare spots, and high-intensity starry halos.',
      benefits: [
        'Reduces starbursts & headlights halos significantly',
        'Provides 99.8% light transmission for high-contrast viewing',
        'Virtually invisible in photos and webinar video calls',
        'Super hydrophobic film repels raindrops and dust'
      ],
      specs: {
        glareBlock: 'Maximum (Advanced Multi-Coat)',
        blueLightBlock: 'Standard spectrum protection',
        focalRanges: 'Single-Vision / Bifocal option',
        uvBlock: 'UV380 Protection included',
        priceRange: 'Starts at ₹750 (Value match)'
      },
      sampleImageUrl: 'https://i.postimg.cc/fbDBZ0R4/Chat-GPT-Image-Jun-14-2026-10-20-34-AM.png',
      simulateLabelBefore: 'Bare eye (Starry Headlights Blinding Drive)',
      simulateLabelAfter: 'Anti-Glare ARC (Flawless High-Contrast Visual safety)',
      simulateStyleBefore: 'blur-[1.5px] scale-102 contrast-90 after:absolute after:inset-0 after:bg-white/10 after:radial-gradient(ellipse_at_center,_white,_transparent_70%) overflow-hidden',
      simulateStyleAfter: 'blur-none contrast-110 saturate-105'
    },
    {
      id: 'progressive',
      name: 'HD Progressive Lenses',
      badge: 'No-Line Multifocal',
      tagline: 'Seamless multi-distance vision fields in one design.',
      bestFor: 'Presbyopes (Age 40+), reading + screen multi-taskers.',
      description: 'Features a wide, digitally surfaced corridor offering a seamless drop-down lens transition from distance views to target PC and desktop screens, down to near reading, with zero visible bifocal lines.',
      benefits: [
        'No ugly visible bifocal lines across the center',
        'Seamless gaze shifts across Far, Mid, & Close views',
        'Zero "image jump" during desktop-keyboard rapid transition',
        'Optimized wide intermediate corridor for computer screens'
      ],
      specs: {
        glareBlock: 'High Premium ARC coated standard',
        blueLightBlock: 'Double Protection coating enabled',
        focalRanges: 'Continuous Dynamic Multi-Corridor',
        uvBlock: 'UV400 High Ocular Guard',
        priceRange: 'Starts at ₹3,500 (Certified authenticity)'
      },
      sampleImageUrl: 'https://i.postimg.cc/YqF5CYMQ/Chat-GPT-Image-Jun-14-2026-10-24-10-AM.png',
      simulateLabelBefore: 'Standard Bifocal / Blurry Distances',
      simulateLabelAfter: 'LensFab Progressive (Continuous Crystal Focus Everywhere)',
      simulateStyleBefore: 'after:content-[""] after:absolute after:left-0 after:right-0 after:top-1/2 after:h-[1.5px] after:bg-gray-400/80 after:shadow-sm filter contrast-90 blur-[1px] md:after:top-[45%]',
      simulateStyleAfter: 'backdrop-blur-none blur-none'
    }
  ];

  const selectedLensDetails = useMemo(() => {
    return lensGuideData.find(lens => lens.id === activeLensTab) || lensGuideData[0];
  }, [activeLensTab]);

  // Dynamic products filtering
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.price.includes(searchQuery);
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleProductInquiry = (product: Product) => {
    const text = encodeURIComponent(
      `Hi LensFab Optical! I am interested in inquiring about "${product.name}" listed at ${product.price}. Could you please confirm if this model and my prescription power are currently in stock at the Rashbehari Avenue showroom?`
    );
    window.open(`https://wa.me/918100325925?text=${text}`, '_blank', 'referrerpolicy=no-referrer');
  };

  const handleLensTabInquiry = (lensName: string) => {
    const text = encodeURIComponent(
      `Hi LensFab Optical! I would like to query about custom power fitting with "${lensName}". Could you please guide me on pricing, testing times, and brand options available at your store?`
    );
    window.open(`https://wa.me/918100325925?text=${text}`, '_blank', 'referrerpolicy=no-referrer');
  };

  return (
    <section id="products" className="py-24 bg-transparent relative">
      {/* Decorative Blur Backing */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-navy-100/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-blue-100/25 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl text-left">
            <span className="font-sans text-[11px] font-extrabold text-navy-600 uppercase tracking-widest bg-navy-50 px-4 py-1.5 rounded-full inline-block mb-3">
              Premium Catalogue
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
              Explore Our Signature Collection
            </h2>
            <p className="font-sans text-sm text-gray-500 mt-2">
              Browse titanium spectacles, vintage Italian acetate frames, UV-safe sunglasses, and computerized zero-strain lenses. Click on any model to inquire directly.
            </p>
          </div>

          {/* Real-time Filter Search + Guide Toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:max-w-md">
            <button
              id="toggle-lens-tech-guide"
              onClick={() => setShowLensGuide(!showLensGuide)}
              className={`font-sans text-xs font-bold px-4 py-3 rounded-xl transition-all flex items-center justify-center gap-2 border cursor-pointer ${
                showLensGuide 
                  ? 'bg-navy-50 border-navy-200 text-navy-800 hover:bg-navy-100' 
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
              }`}
            >
              <Layers className="h-4 w-4 text-navy-600" />
              <span>{showLensGuide ? 'Collapse Lens Guide' : 'Compare Lens Tech'}</span>
            </button>

            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="h-4.5 w-4.5 text-gray-400" />
              </div>
              <input
                id="product-search-input"
                type="text"
                placeholder="Search frames, lenses, price..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 focus:border-navy-500 rounded-xl font-sans text-sm outline-hidden transition-all shadow-xs"
              />
            </div>
          </div>
        </div>

        {/* Interactive Comparison Guide Container */}
        <AnimatePresence>
          {showLensGuide && (
            <motion.div
              id="lens-tech-comparison-widget"
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: 'auto', marginBottom: 56 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="bg-white rounded-3xl border border-navy-100/70 p-6 md:p-8 shadow-md text-left relative">
                
                {/* Header widget */}
                <div className="flex items-start justify-between border-b border-gray-100 pb-5 mb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-navy-600 font-sans text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Lens Technology Suite</span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-navy-950">
                      Vision Upgrade Centre: Find Your Perfect Match
                    </h3>
                    <p className="font-sans text-xs text-gray-550">
                      Access professional recommendations, index thickness profiles, and simulate high-performance filters instantly.
                    </p>
                  </div>
                  <button
                    id="close-guide-bubble-btn"
                    onClick={() => setShowLensGuide(false)}
                    className="p-1.5 hover:bg-gray-100 text-gray-400 hover:text-navy-900 rounded-full cursor-pointer transition-colors"
                    title="Dismiss Guide"
                  >
                    <X className="h-4.5 w-4.5" />
                  </button>
                </div>

                {/* Core Navigation Tabs Bar */}
                <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                  <button
                    id="guide-tab-comparator"
                    onClick={() => setActiveGuideView('comparator')}
                    className={`px-4 py-2 font-sans text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeGuideView === 'comparator'
                        ? 'bg-navy-600 text-white shadow-xs'
                        : 'bg-navy-50/70 text-navy-900 hover:bg-navy-100/70'
                    }`}
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>Lens Category Guide</span>
                  </button>
                  
                  <button
                    id="guide-tab-selector"
                    onClick={() => setActiveGuideView('selector')}
                    className={`px-4 py-2 font-sans text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeGuideView === 'selector'
                        ? 'bg-navy-600 text-white shadow-xs'
                        : 'bg-navy-50/70 text-navy-900 hover:bg-navy-100/70'
                    }`}
                  >
                    <Sliders className="h-3.5 w-3.5" />
                    <span>Lens Selector Tool</span>
                  </button>

                  <button
                    id="guide-tab-compression"
                    onClick={() => setActiveGuideView('compression')}
                    className={`px-4 py-2 font-sans text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeGuideView === 'compression'
                        ? 'bg-navy-600 text-white shadow-xs'
                        : 'bg-navy-50/70 text-navy-900 hover:bg-navy-100/70'
                    }`}
                  >
                    <Layers className="h-3.5 w-3.5" />
                    <span>Lens Compression Guide</span>
                  </button>
                </div>

                {/* Tab layout switching */}
                {activeGuideView === 'comparator' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
                    
                    {/* Left Column (5/12): Tabs & Visual Showcase */}
                    <div className="lg:col-span-5 flex flex-col space-y-6">
                      
                      {/* Action Selector Tabs */}
                      <div className="space-y-2">
                        <span className="font-sans text-[10px] font-extrabold uppercase text-gray-400 tracking-wider block">
                          Select Lens Category
                        </span>
                        <div className="grid grid-cols-3 gap-1.5 bg-navy-50/50 p-1.5 rounded-xl border border-navy-100/10">
                          {lensGuideData.map((lens) => {
                            const isActive = activeLensTab === lens.id;
                            return (
                              <button
                                key={lens.id}
                                id={`lens-tab-${lens.id}`}
                                onClick={() => setActiveLensTab(lens.id)}
                                className={`py-2 text-[11px] font-bold font-sans rounded-lg transition-all cursor-pointer ${
                                  isActive
                                    ? 'bg-white text-navy-950 shadow-xs border-b border-navy-200/40'
                                    : 'text-gray-550 hover:text-navy-950 hover:bg-white/50'
                                }`}
                              >
                                {lens.id === 'blue-cut' ? 'Blue-Cut' : lens.id === 'anti-glare' ? 'Anti-Glare' : 'Progressive'}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Visual Showcase Card */}
                      <div className="space-y-2.5">
                        <span className="font-sans text-[10px] font-extrabold uppercase text-gray-400 tracking-wider block flex items-center gap-1.5">
                          <Eye className="h-3.5 w-3.5 text-navy-600" />
                          <span>Technology Showcase</span>
                        </span>
                        
                        <div className="relative h-64 rounded-2xl overflow-hidden border border-gray-150 shadow-xs bg-white flex items-center justify-center p-2.5">
                          <img
                            src={selectedLensDetails.sampleImageUrl}
                            alt="Lens Simulation Visual"
                            className="max-h-full max-w-full object-contain rounded-xl"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Information panel describing standard vs protected */}
                        <div className="text-center text-[11px] font-sans leading-relaxed text-gray-550 bg-gray-55/60 p-3 rounded-xl border border-gray-100/60 shadow-xs">
                          {selectedLensDetails.id === 'blue-cut' ? (
                            <span>
                              <strong>Blue-Cut Protection:</strong> Comparison chart illustrating a standard lens passing blue light spikes versus a safe, shielded <strong>LensFab Blue-Cut</strong> ocular barrier filter.
                            </span>
                          ) : selectedLensDetails.id === 'anti-glare' ? (
                            <span>
                              <strong>Anti-Reflective Coating:</strong> High-performance multi-coating design specifically structured to reduce annoying starglaring and headlight spikes.
                            </span>
                          ) : (
                            <span>
                              <strong>HD Progressive Corridors:</strong> Seamless drop-down correction zones offering continuous, clear sight from reading distances to screens.
                            </span>
                          )}
                        </div>
                      </div>

                    </div>

                    {/* Right Column (7/12): Detailed features & Comparative Table */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                      
                      {/* Active Lens details content */}
                      <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-display text-base font-bold text-navy-950 flex items-center gap-1.5">
                          {selectedLensDetails.id === 'blue-cut' && <Laptop className="h-4 w-4 text-navy-600" />}
                          {selectedLensDetails.id === 'anti-glare' && <Eye className="h-4 w-4 text-navy-600" />}
                          {selectedLensDetails.id === 'progressive' && <Layers className="h-4 w-4 text-navy-600" />}
                          <span>{selectedLensDetails.name}</span>
                        </span>
                        <span className="bg-gold-50 text-gold-700 text-[9px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full border border-gold-200/40">
                          {selectedLensDetails.badge}
                        </span>
                      </div>

                      <div className="bg-[#FAFDFE] p-4.5 rounded-2xl border border-gray-100 space-y-3">
                        <h4 className="font-sans text-xs italic font-bold text-navy-900">
                          "{selectedLensDetails.tagline}"
                        </h4>
                        
                        <p className="font-sans text-xs text-gray-550 leading-relaxed">
                          {selectedLensDetails.description}
                        </p>
                        
                        <p className="font-sans text-xs text-gray-400 bg-white px-3 py-2 rounded-lg border border-gray-50">
                          <strong className="text-navy-900">Best for:</strong> {selectedLensDetails.bestFor}
                        </p>
                      </div>

                      {/* Bullet Benefits lists */}
                      <div className="space-y-2">
                        <span className="font-sans text-[10px] font-extrabold uppercase text-gray-400 tracking-wider block">
                          Premium Comfort Benefits
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
                          {selectedLensDetails.benefits.map((benefit, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-2">
                              <div className="bg-emerald-50 text-emerald-600 p-0.5 rounded-md mt-0.5 flex-shrink-0">
                                <Check className="h-3 w-3" />
                              </div>
                              <span className="font-sans text-xs leading-relaxed">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Quick Core Specification Table mapping */}
                    <div className="space-y-2">
                      <span className="font-sans text-[10px] font-extrabold uppercase text-gray-400 tracking-wider block">
                        Technical Feature Comparison Matrix
                      </span>
                      <div className="overflow-x-auto border border-gray-100 rounded-xl bg-gray-50/50">
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="bg-navy-950 text-white font-sans text-[9px] font-bold uppercase tracking-wider divider border-b border-navy-900">
                              <th className="py-2.5 px-3">Specs Feature</th>
                              <th className="py-2.5 px-3">Blue-Cut Def.</th>
                              <th className="py-2.5 px-3">Anti-Glare ARC</th>
                              <th className="py-2.5 px-3">HD Progressive</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 bg-white font-sans text-[11px] text-gray-650">
                            <tr>
                              <td className="py-2 px-3 font-semibold text-navy-900 bg-gray-50/30">Blue light Filtration</td>
                              <td className="py-2 px-3 text-navy-700 bg-blue-50/10 font-bold">98% Blocked</td>
                              <td className="py-2 px-3 text-gray-400">Standard Level</td>
                              <td className="py-2 px-3 text-gray-500">Optional Add-on</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-3 font-semibold text-navy-900 bg-gray-50/30">Halo & Starburst Control</td>
                              <td className="py-2 px-3 text-gray-500">High Protection</td>
                              <td className="py-2 px-3 text-navy-700 bg-blue-50/10 font-bold">Maximum Block</td>
                              <td className="py-2 px-3 text-gray-500">High Protection</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-3 font-semibold text-navy-900 bg-gray-50/30">Focal Corridors</td>
                              <td className="py-2 px-3 text-gray-500">Single Focus</td>
                              <td className="py-2 px-3 text-gray-500">Single focus / Bifocal</td>
                              <td className="py-2 px-3 text-navy-700 bg-blue-50/10 font-bold">No-Line Continuous</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-3 font-semibold text-navy-900 bg-gray-50/30">Best Price Guarantee</td>
                              <td className="py-2 px-3 text-navy-800 font-semibold">₹1,200 Onwards</td>
                              <td className="py-2 px-3 text-navy-800 font-semibold">₹750 Onwards</td>
                              <td className="py-2 px-3 text-navy-800 font-semibold">₹3,500 Onwards</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Bottom CTA to WhatsApp Inquiry with details */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3.5 border-t border-gray-100 text-xs text-gray-500">
                      <span className="flex items-center gap-1.5 font-sans">
                        <Info className="h-4 w-4 text-gold-505" />
                        <span>All custom lenses include authentic authorized warranty cards from brands like Essilor or Zeiss.</span>
                      </span>
                      
                      <button
                        id="inquire-lens-tech-selection-cta"
                        onClick={() => handleLensTabInquiry(selectedLensDetails.name)}
                        className="inline-flex items-center justify-center space-x-2 bg-navy-600 hover:bg-navy-700 text-white font-sans text-[11px] font-bold px-4 py-2.5 rounded-lg transition-all shadow-xs active:scale-95 cursor-pointer"
                      >
                        <MessageSquare className="h-3.5 w-3.5" />
                        <span>Inquire About {selectedLensDetails.name}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>

                  </div>
                </div>
              )}

                {/* Active Lens Selector Quiz Tool */}
                {activeGuideView === 'selector' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full animate-fadeIn">
                    
                    {/* Left Column (5/12): Interactive Quiz Inputs */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                      
                      {/* Habit selection */}
                      <div className="space-y-3">
                        <span className="font-sans text-[10px] font-extrabold uppercase text-gray-400 tracking-wider block">
                          Step 1: Your Primary Lifestyle Activity
                        </span>
                        
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            id="habit-screen-opt"
                            onClick={() => setSelectorHabit('screen')}
                            className={`p-3 text-left rounded-xl border transition-all cursor-pointer flex flex-col gap-1.5 ${
                              selectorHabit === 'screen'
                                ? 'bg-navy-50/70 border-navy-500 hover:bg-navy-100/50'
                                : 'bg-white border-gray-150 hover:bg-gray-50'
                            }`}
                          >
                            <div className="text-navy-600">
                              <Laptop className="h-4.5 w-4.5" />
                            </div>
                            <div className="space-y-0.5">
                              <span className="font-sans text-[11px] font-bold text-navy-950 block">Screen & Gaming</span>
                              <span className="font-sans text-[9px] text-gray-450 block leading-tight">Laptop, coding, phone scrolls</span>
                            </div>
                          </button>

                          <button
                            id="habit-driving-opt"
                            onClick={() => setSelectorHabit('driving')}
                            className={`p-3 text-left rounded-xl border transition-all cursor-pointer flex flex-col gap-1.5 ${
                              selectorHabit === 'driving'
                                ? 'bg-navy-50/70 border-navy-500 hover:bg-navy-100/50'
                                : 'bg-white border-gray-150 hover:bg-gray-50'
                            }`}
                          >
                            <div className="text-navy-600">
                              <Eye className="h-4.5 w-4.5" />
                            </div>
                            <div className="space-y-0.5">
                              <span className="font-sans text-[11px] font-bold text-navy-950 block">Driving & Halos</span>
                              <span className="font-sans text-[9px] text-gray-450 block leading-tight">Night commute, highway beams</span>
                            </div>
                          </button>

                          <button
                            id="habit-allday-opt"
                            onClick={() => setSelectorHabit('all-day')}
                            className={`p-3 text-left rounded-xl border transition-all cursor-pointer flex flex-col gap-1.5 ${
                              selectorHabit === 'all-day'
                                ? 'bg-navy-50/70 border-navy-500 hover:bg-navy-100/50'
                                : 'bg-white border-gray-150 hover:bg-gray-50'
                            }`}
                          >
                            <div className="text-navy-600">
                              <Sparkles className="h-4.5 w-4.5" />
                            </div>
                            <div className="space-y-0.5">
                              <span className="font-sans text-[11px] font-bold text-navy-950 block">General Daily Duty</span>
                              <span className="font-sans text-[9px] text-gray-450 block leading-tight">Comfort books, social life</span>
                            </div>
                          </button>

                          <button
                            id="habit-outdoors-opt"
                            onClick={() => setSelectorHabit('outdoors')}
                            className={`p-3 text-left rounded-xl border transition-all cursor-pointer flex flex-col gap-1.5 ${
                              selectorHabit === 'outdoors'
                                ? 'bg-navy-50/70 border-navy-500 hover:bg-navy-100/50'
                                : 'bg-white border-gray-150 hover:bg-gray-50'
                            }`}
                          >
                            <div className="text-navy-600">
                              <Sun className="h-4.5 w-4.5" />
                            </div>
                            <div className="space-y-0.5">
                              <span className="font-sans text-[11px] font-bold text-navy-900 block">Outdoors & Action</span>
                              <span className="font-sans text-[9px] text-gray-450 block leading-tight">Bright sun, golf, driving outdoor</span>
                            </div>
                          </button>
                        </div>
                      </div>

                      {/* Prescription selection */}
                      <div className="space-y-3">
                        <span className="font-sans text-[10px] font-extrabold uppercase text-gray-400 tracking-wider block">
                          Step 2: Approximate Prescription Range
                        </span>

                        <div className="grid grid-cols-1 gap-2">
                          {(['plano', 'low', 'moderate', 'high'] as const).map((pwr) => {
                            const isP = selectorPower === pwr;
                            const titleStr = pwr === 'plano' ? 'Plano (Zero Power) / Protective' 
                                            : pwr === 'low' ? 'Mild Correction (Plano to ±2.00 Diopters)'
                                            : pwr === 'moderate' ? 'Moderate Correction (±2.25 to ±4.50 Diopters)'
                                            : 'High Correction (Above ±4.50 Diopters)';
                            const descStr = pwr === 'plano' ? 'Just need filtration from blue lights and strain. Perfect cosmetic index fits.'
                                            : pwr === 'low' ? 'Requires light compression. Best value is mid-index 1.56.'
                                            : pwr === 'moderate' ? 'Needs noticeable edge flattening. High Index 1.61 or 1.67 recommended.'
                                            : 'Requires max thinness to avoid heavy lenses. Ultra 1.74 or 1.67 is mandatory.';
                            return (
                              <button
                                key={pwr}
                                id={`pwr-opt-${pwr}`}
                                onClick={() => setSelectorPower(pwr)}
                                className={`p-3 text-left rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                                  isP
                                    ? 'bg-navy-50/70 border-navy-500 shadow-xs'
                                    : 'bg-white border-gray-150 hover:bg-gray-50'
                                }`}
                              >
                                <div className="mt-0.5">
                                  <div className={`h-4 w-4 rounded-full border flex items-center justify-center ${isP ? 'border-navy-600' : 'border-gray-300'}`}>
                                    {isP && <div className="h-2 w-2 rounded-full bg-navy-600" />}
                                  </div>
                                </div>
                                <div className="space-y-0.5">
                                  <span className="font-sans text-xs font-bold text-navy-950 block leading-none">{titleStr}</span>
                                  <span className="font-sans text-[10px] text-gray-400 block leading-tight">{descStr}</span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                    </div>

                    {/* Right Column (7/12): Recommendation Outputs */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                      
                      {/* Detailed recommended outcome output Card */}
                      <div className="bg-navy-50/45 p-6 rounded-3xl border border-navy-100/50 space-y-5">
                        
                        <div className="space-y-1">
                          <span className="font-sans text-[9px] font-extrabold text-navy-600 uppercase tracking-widest bg-white px-2.5 py-1 rounded-md border border-navy-100/15 w-fit block">
                            Our Optical Diagnostic Advice
                          </span>
                          <h4 className="font-display text-base font-bold text-navy-950 pt-1.5 flex items-center gap-1.5">
                            <Sparkles className="h-4.5 w-4.5 text-navy-600 animate-pulse" />
                            <span>{currentRecommendation.customTitle}</span>
                          </h4>
                        </div>

                        <div className="space-y-3 font-sans text-xs text-gray-650">
                          <p>{currentRecommendation.description}</p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                            <div className="bg-white p-3.5 rounded-xl border border-gray-100 space-y-1">
                              <span className="font-sans text-[9px] uppercase font-bold text-gray-400 tracking-wider">Recommended Coating Tech</span>
                              <span className="font-sans text-xs text-navy-950 font-bold block leading-relaxed">{currentRecommendation.lensType}</span>
                            </div>
                            <div className="bg-white p-3.5 rounded-xl border border-gray-100 space-y-1">
                              <span className="font-sans text-[9px] uppercase font-bold text-gray-400 tracking-wider">Recommended Index Compression</span>
                              <span className="font-sans text-xs text-navy-950 font-bold block leading-relaxed">{currentRecommendation.lensIndex}</span>
                            </div>
                          </div>
                        </div>

                        {/* Bullet Benefits lists from recommendations */}
                        <div className="space-y-2">
                          <span className="font-sans text-[9px] font-extrabold uppercase text-gray-400 tracking-wider block">
                            Recommended Functional Features
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600 bg-white p-4 rounded-xl border border-gray-100/60">
                            {currentRecommendation.featuresList.map((feat, fIdx) => (
                              <div key={fIdx} className="flex items-center gap-2">
                                <div className="bg-indigo-50 text-indigo-600 p-0.5 rounded-md flex-shrink-0">
                                  <BadgeCheck className="h-3.5 w-3.5" />
                                </div>
                                <span className="font-sans text-xs leading-relaxed font-semibold text-gray-700">{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white/85 p-3 rounded-lg flex items-center justify-between text-xs font-sans text-gray-500 border border-navy-100/10">
                          <span>Est. Lens Pricing range (Exclusive of frame):</span>
                          <strong className="text-navy-900 font-bold">{currentRecommendation.price}</strong>
                        </div>

                      </div>

                      {/* Selector WhatsApp Inquiry CTA */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3.5 border-t border-gray-100 text-xs text-gray-500">
                        <span className="flex items-center gap-1.5 font-sans justify-start">
                          <Info className="h-4 w-4 text-navy-500" />
                          <span>We support power prescription verification and computerized zeroing in-store.</span>
                        </span>
                        
                        <button
                          id="submit-selector-quiz-to-whatsapp"
                          onClick={handleSelectorWhatsAppInquire}
                          className="inline-flex items-center justify-center space-x-2.5 bg-navy-600 hover:bg-navy-700 text-white font-sans text-[11px] font-bold px-5 py-3 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer text-nowrap"
                        >
                          <MessageSquare className="h-4 w-4" />
                          <span>WhatsApp Quote Request</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>

                    </div>

                  </div>
                )}

                {/* Active Lens Compression Thickness Guide */}
                {activeGuideView === 'compression' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full animate-fadeIn">
                    
                    {/* Left Column (5/12): Index selection buttons & Edge Simulation */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                      
                      {/* Index selection */}
                      <div className="space-y-2">
                        <span className="font-sans text-[10px] font-extrabold uppercase text-gray-400 tracking-wider block">
                          Select Compression Index (Refractive Index)
                        </span>
                        <div className="grid grid-cols-5 gap-1 bg-navy-50/50 p-1 rounded-xl border border-navy-100/10">
                          {(['1.50', '1.56', '1.61', '1.67', '1.74'] as const).map((idx) => {
                            const isSel = selectedCompressionIndex === idx;
                            return (
                              <button
                                key={idx}
                                id={`comp-tab-${idx}`}
                                onClick={() => setSelectedCompressionIndex(idx)}
                                className={`py-2 text-xs font-bold font-sans rounded-lg transition-all cursor-pointer ${
                                  isSel
                                    ? 'bg-navy-600 text-white shadow-xs'
                                    : 'text-gray-550 hover:text-navy-950 hover:bg-white/50'
                                }`}
                              >
                                {idx}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Edge thickness simulator */}
                      <div className="space-y-4 bg-navy-50/30 p-4.5 rounded-2xl border border-gray-155 shadow-inner">
                        <div className="flex items-center justify-between">
                          <span className="font-sans text-[10px] font-extrabold uppercase text-navy-600 tracking-wider block">
                            Lens Lateral Edge Profile Thickness
                          </span>
                          <span className="font-mono text-[9px] font-bold text-gray-450">Prescription -6.00 Diopter SPH</span>
                        </div>

                        {/* Comparative graphical bar bars */}
                        <div className="space-y-3 pt-2">
                          {(['1.50', '1.56', '1.61', '1.67', '1.74'] as const).map((idx) => {
                            const currentComp = COMPRESSION_DATA.find(c => c.index === idx)!;
                            const isCurrentSelected = idx === selectedCompressionIndex;
                            return (
                              <div key={idx} className="space-y-1">
                                <div className="flex justify-between text-[10px] font-sans">
                                  <span className={`${isCurrentSelected ? 'text-navy-900 font-bold' : 'text-gray-400'}`}>
                                    Index {idx} {isCurrentSelected ? '(Active View)' : ''}
                                  </span>
                                  <span className={`${isCurrentSelected ? 'text-navy-600 font-extrabold' : 'text-gray-500'}`}>
                                    {Math.round(currentComp.thicknessPercent / 20 * 10) / 10} mm boundary profile
                                  </span>
                                </div>
                                <div className="relative h-2.5 w-full bg-gray-200/60 rounded-full overflow-hidden">
                                  {/* Schematic representation bar */}
                                  <div
                                    style={{ width: `${currentComp.thicknessPercent}%` }}
                                    className={`absolute left-0 top-0 h-full rounded-full transition-all duration-500 ${
                                      isCurrentSelected
                                        ? 'bg-gradient-to-r from-navy-500 to-navy-600 shadow-xs'
                                        : 'bg-navy-200/40'
                                    }`}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        
                        <p className="font-sans text-[10px] text-gray-400 text-center italic">
                          *Simulation scales based on direct horizontal edge measurements. Real values vary with frame sizes.
                        </p>
                      </div>

                    </div>

                    {/* Right Column (7/12): Detailed stats & feature icons */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                      
                      {/* Active index card info */}
                      {(() => {
                        const currentC = COMPRESSION_DATA.find(c => c.index === selectedCompressionIndex)!;
                        return (
                          <div className="space-y-5">
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className="font-display text-base font-bold text-navy-950">
                                {currentC.title}
                              </h4>
                              <span className="bg-emerald-50 text-emerald-700 text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border border-emerald-200/30">
                                {currentC.category}
                              </span>
                            </div>

                            <p className="font-sans text-xs text-gray-550 leading-relaxed">
                              Optimal compression index is critical to preventing thicker lens blocks extending outside thin metal frame structures. {currentC.pros}
                            </p>

                            {/* Core key statistics */}
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-white p-3 rounded-xl border border-gray-100">
                                <span className="font-sans text-[9px] text-gray-450 uppercase font-bold block">Weight Reduction ratio</span>
                                <span className="font-sans text-xs text-navy-900 font-extrabold block mt-0.5">{currentC.weightSaving}</span>
                              </div>
                              <div className="bg-white p-3 rounded-xl border border-gray-100">
                                <span className="font-sans text-[9px] text-gray-450 uppercase font-bold block">Ideal Correction limits</span>
                                <span className="font-sans text-xs text-navy-900 font-extrabold block mt-0.5">{currentC.bestRange}</span>
                              </div>
                              <div className="bg-[#FAFDFE] p-3 rounded-xl border border-gray-100">
                                <span className="font-sans text-[9px] text-gray-450 uppercase font-bold block">Abbe Clarity Coefficient</span>
                                <span className="font-sans text-xs text-navy-900 font-extrabold block mt-0.5">{currentC.abbeValue}</span>
                              </div>
                              <div className="bg-[#FAFDFE] p-3 rounded-xl border border-gray-100">
                                <span className="font-sans text-[9px] text-gray-450 uppercase font-bold block">Resilience Rating</span>
                                <span className="font-sans text-xs text-navy-900 font-semibold block mt-0.5 leading-tight">{currentC.durability}</span>
                              </div>
                            </div>

                            {/* Upgraded Professional Lens Feature Icons list */}
                            <div className="space-y-2.5">
                              <span className="font-sans text-[10px] font-extrabold uppercase text-gray-400 tracking-wider block">
                                Professional Performance Metrics
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {currentC.lensFeatureIcons.map((feat, fIdx) => (
                                  <div key={fIdx} className="bg-white p-3.5 rounded-xl border border-gray-150 shadow-xs hover:border-navy-200 transition-all text-left space-y-1">
                                    <div className="text-navy-600 bg-navy-50/70 p-1.5 rounded-lg w-fit">
                                      {feat.icon === 'clarity' && <Eye className="h-4 w-4" />}
                                      {feat.icon === 'zap' && <Zap className="h-4 w-4" />}
                                      {feat.icon === 'shield' && <Shield className="h-4 w-4" />}
                                      {feat.icon === 'edge' && <Sparkles className="h-4 w-4" />}
                                    </div>
                                    <h5 className="font-sans text-xs font-bold text-navy-950 pt-1 leading-none">{feat.label}</h5>
                                    <p className="font-sans text-[10px] text-gray-450 leading-snug">{feat.description}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })()}

                      {/* Compression Inquiry CTA */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3.5 border-t border-gray-100 text-xs text-gray-500">
                        <span className="flex items-center gap-1.5 font-sans">
                          <Info className="h-4 w-4 text-navy-500" />
                          <span>We stock 1.56, 1.61, 1.67, and 1.74 indices in double aspheric premium brands.</span>
                        </span>
                        
                        <button
                          id="inquire-compression-inquiry"
                          onClick={() => {
                            const text = encodeURIComponent(
                              `Hi LensFab Optical! I am interested in getting glasses made with your "Index ${selectedCompressionIndex}" compressed lenses. Could you guide me on the compatible frame models and pricing quotes?`
                            );
                            window.open(`https://wa.me/918100325925?text=${text}`, '_blank', 'referrerpolicy=no-referrer');
                          }}
                          className="inline-flex items-center justify-center space-x-2 bg-navy-600 hover:bg-navy-700 text-white font-sans text-[11px] font-bold px-4 py-2.5 rounded-lg transition-all shadow-xs active:scale-95 cursor-pointer"
                        >
                          <MessageSquare className="h-3.5 w-3.5" />
                          <span>Inquire Index {selectedCompressionIndex} Quote</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>

                    </div>

                  </div>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Categories Tab list */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-1.5 bg-navy-50/50 p-1 rounded-xl">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  id={`cat-tab-${cat.value}`}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`font-sans text-xs font-bold px-4.5 py-2.5 rounded-lg whitespace-nowrap transition-all duration-200 ${
                    isSelected
                      ? 'bg-navy-600 text-white shadow-md'
                      : 'text-navy-900 hover:text-navy-600 hover:bg-navy-100/55'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty State check */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-white border border-dashed border-navy-100 rounded-3xl max-w-sm mx-auto">
            <ShoppingBag className="h-10 w-10 text-navy-300 mx-auto mb-3" />
            <h3 className="font-display font-medium text-navy-950 text-base">No models match your search</h3>
            <p className="font-sans text-xs text-gray-400 mt-1 px-4">
              Try searching another keyword (e.g., "progressive", "titanium", "polarized") or check a different category.
            </p>
          </div>
        ) : (
          /* Products Grid with staggering entry */
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product: Product, index: number) => {
                return (
                  <motion.div
                    layout
                    key={product.id}
                    id={`product-card-${product.id}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className="group bg-white rounded-2xl border border-gray-100/95 overflow-hidden hover:shadow-xl hover:shadow-navy-100/40 hover:border-navy-100/70 transition-all duration-300 flex flex-col h-full"
                  >
                    
                    {/* Aspect Image Box */}
                    <div className="relative aspect-square overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                      
                      {/* Popular Indicator badge */}
                      {product.isPopular && (
                        <span className="absolute top-3 left-3 bg-navy-600 text-white font-sans text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full z-10 inline-flex items-center gap-1 shadow-xs">
                          <Star className="h-2.5 w-2.5 fill-gold-400 text-gold-400" />
                          <span>Popular</span>
                        </span>
                      )}

                      <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-navy-700 font-sans text-[9px] font-extrabold px-2 py-1 rounded-md border border-gray-100 z-10">
                        {product.categoryLabel}
                      </span>

                      {product.originalPrice && (
                        <span className="absolute bottom-3 left-3 bg-emerald-600 text-white font-sans text-[9px] font-extrabold tracking-widest uppercase px-2 py-1 rounded-md z-10 shadow-sm">
                          Special Offer
                        </span>
                      )}

                      {/* Image tag with security referer policy */}
                      <img
                        src={product.image}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="object-cover w-full h-full group-hover:scale-108 transition-transform duration-500 rounded-xl"
                      />

                      {/* Instant hover Overlay blur */}
                      <div className="absolute inset-0 bg-navy-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button
                          id={`hover-inquiry-${product.id}`}
                          onClick={() => handleProductInquiry(product)}
                          className="bg-white/95 text-navy-900 font-sans text-xs font-bold px-4 py-2.5 rounded-lg shadow-lg flex items-center space-x-1.5 hover:bg-navy-600 hover:text-white transition-all scale-90 group-hover:scale-100 duration-300"
                        >
                          <MessageSquare className="h-4 w-4" />
                          <span>WhatsApp Inquiry</span>
                        </button>
                      </div>
                    </div>

                    {/* Metadata specs */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div className="space-y-1.5 mb-4">
                        
                        {/* Title and local tags */}
                        <h3 className="font-display text-sm font-bold text-navy-950 line-clamp-1 group-hover:text-navy-600 transition-colors">
                          {product.name}
                        </h3>
                        
                        <p className="font-sans text-xs text-gray-400 line-clamp-2">
                          {product.description}
                        </p>

                        {/* Display custom specs bullets as small badges */}
                        <div className="flex flex-wrap gap-1 pt-1.5">
                          {product.features.slice(0, 2).map((feat, fIdx) => (
                            <span key={fIdx} className="font-sans text-[10px] text-navy-500 bg-navy-50/70 px-2 py-0.5 rounded-sm flex items-center gap-1 font-medium">
                              <BadgeCheck className="h-3 w-3 text-navy-400" />
                              {feat}
                            </span>
                          ))}
                        </div>

                      </div>

                      {/* Footer Actions */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                        <div className="flex flex-col">
                          <span className="font-sans text-[10px] text-gray-400 font-semibold uppercase">Pricing</span>
                          <div className="flex items-baseline gap-2">
                            <span className="font-display text-base font-bold text-navy-900">
                              {product.price}
                            </span>
                            {product.originalPrice && (
                              <span className="font-sans text-xs text-red-500/80 line-through font-medium">
                                {product.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>

                        <button
                          id={`bottom-inquiry-btn-${product.id}`}
                          onClick={() => handleProductInquiry(product)}
                          className="text-navy-600 hover:text-navy-950 p-2 hover:bg-navy-50 rounded-xl transition-all"
                          title="Ask pricing & prescription match"
                        >
                          <ArrowRight className="h-4.5 w-4.5" />
                        </button>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
