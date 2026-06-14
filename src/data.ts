/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Product, Review, GalleryItem, FAQItem } from './types';

// High-quality, reliable Unsplash image links curated for an optical store
export const SERVICES_DATA: Service[] = [
  {
    id: 'eye-testing',
    title: 'Computerized Eye Testing',
    description: 'Highly precise computerized vision tests and refractive indices mapped by standard certified optometrists using state-of-the-art autorefractor technology.',
    iconName: 'Eye',
    badge: 'Popular',
    highlightWords: ['computerized', 'optometrists', 'autorefractor']
  },
  {
    id: 'prescription-glasses',
    title: 'Prescription Glasses',
    description: 'Custom lenses tailored perfectly for your power. Choose from Single Vision, Bifocals, or High-Definition Progressives with digital precision layout.',
    iconName: 'Glasses',
    highlightWords: ['Single Vision', 'Bifocals', 'Progressives']
  },
  {
    id: 'contact-lenses',
    title: 'Contact Lenses',
    description: 'Explore soft contact lenses, premium toric, and spherical options. Available in Daily, Monthly, and extended-wear disposables from leading global brands.',
    iconName: 'Sparkles',
    highlightWords: ['toric', 'spherical', 'Daily', 'Monthly']
  },
  {
    id: 'sunglasses',
    title: 'Branded Sunglasses',
    description: 'Premium curated UV-400 and Polarized sunglasses. Safe glare blocking coupled with contemporary high-fashion aesthetics for Kolkata summers.',
    iconName: 'Sun',
    badge: 'Trending',
    highlightWords: ['UV-400', 'Polarized', 'sunglasses']
  },
  {
    id: 'frame-collection',
    title: 'Frame Collection',
    description: 'Over 500+ premium designs in Titanium, Acetate, Ultem, and flexible TR90. Stylish frames designed carefully for men, women, and modern professionals.',
    iconName: 'ShoppingBag',
    highlightWords: ['Titanium', 'Acetate', 'TR90', 'frames']
  },
  {
    id: 'home-checkup',
    title: 'Home Eye Check-up',
    description: 'Unable to travel? Schedule an appointment-based optical expert check-up with diagnostic, trial frame units, and delivery right to your doorstep.',
    iconName: 'Home',
    highlightWords: ['appointment-based', 'doorstep', 'trial frame']
  }
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'p1',
    name: 'Titanium Premium Round-Frame',
    category: 'frames',
    categoryLabel: 'Premium Frames',
    description: 'Ultra-lightweight aerospace grade pure titanium round spectacles in matte charcoal.',
    price: '₹3,499',
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600&q=80',
    isPopular: true,
    features: ['Hypoallergenic Metal', 'Only 8 grams wt.', 'Corrosion Resistant', 'Flexible temples']
  },
  {
    id: 'p2',
    name: 'Polarized Aviator Sunglasses',
    category: 'sunglasses',
    categoryLabel: 'Sunglasses',
    description: 'Classic double-bridge aviator styling with deep green polarized glass & gold alloy rim.',
    price: '₹4,250',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80',
    isPopular: true,
    features: ['100% UV400 Protection', 'Anti-Glare coating', 'Reinforced Hinges', 'Premium hard case']
  },
  {
    id: 'p3',
    name: 'Blue-Cut Smart Computer Glasses',
    category: 'computer',
    categoryLabel: 'Computer Glasses',
    description: 'Crystal-clear lenses with standard electromagnetic blue-shining reflection coating.',
    price: '₹1,899',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=600&q=80',
    features: ['Blocks 98% Blue Light', 'Zero yellow tint', 'Oleophobic coating', 'TR90 Flexi-Frame']
  },
  {
    id: 'p4',
    name: 'Retro Double-Bridge Aviators',
    category: 'frames',
    categoryLabel: 'Premium Frames',
    description: 'Classic elegance and lightweight precision. Sleek metallic double-bridge frames in refined surgical-grade steel.',
    price: '₹2,899',
    image: '/src/assets/images/retro_double_bridge_aviators_1781442487965.jpg',
    features: ['Surgical-grade steel', 'Double-bridge design', 'Comfort flex-hinges', 'All-day ergonomic fit']
  },
  {
    id: 'p5',
    name: 'LensFab Minimalist Wireframe Collection',
    category: 'frames',
    categoryLabel: 'Premium Frames',
    description: 'An elegant curation of ultra-lightweight metallic frames, showcasing classic round and aviator wire arches with comfortable acetate temple tips.',
    price: '₹3,499',
    image: '/src/assets/images/elegant_wireframes_collection_1781442953856.jpg',
    isPopular: true,
    features: ['High-tensile steel wire', 'Ergonomic nose pads', 'Comfort flex-hinges', 'Ultra-lightweight feel']
  },
  {
    id: 'p6',
    name: 'Bespoke Designer Eyewear Collection',
    category: 'sunglasses',
    categoryLabel: 'Designer Sunglasses',
    description: 'An elite assortment featuring icons from Gucci, Prada, and Miu Miu. Masterpieces in bold acetate profiles and refined round wire arches.',
    price: '₹5,500',
    image: '/src/assets/images/designer_luxury_flatlay_1781443323154.jpg',
    features: ['Gucci Acetate Shells', 'Prada Gold Bridges', 'Signature Miu Miu Pink', '100% UV Protection Glass']
  },
  {
    id: 'p7',
    name: 'Italian Crystal Clear Acetate Specs',
    category: 'frames',
    categoryLabel: 'Designer Frames',
    description: 'Modern transparent crystal-clear frame styled from lightweight, hand-polished organic Italian acetate blocks.',
    price: '₹3,999',
    image: '/src/assets/images/crystal_clear_acetate_specs_1781444274747.jpg',
    features: ['Crystal-clear transparency', 'Subtle gold-core temples', 'Comfort flex-hinges', 'Organic plant-based blocks']
  },
  {
    id: 'p8',
    name: 'Glamorous Statement Sunglasses',
    category: 'sunglasses',
    categoryLabel: 'Sunglasses',
    description: 'Striking oversized black acetate lenses adorned with sparkling handcrafted crystal rows on the outer temples.',
    price: '₹4,799',
    image: '/src/assets/images/glamorous_sunglasses_portrait_1781443341663.jpg',
    features: ['Polished hand-set crystals', 'Shatter-proof gradient tint', 'Scratch-resistant core', 'Ergonomic thick temples']
  },
  {
    id: 'p9',
    name: 'Kids Smart-Fit Flexible Specs',
    category: 'kids',
    categoryLabel: 'Kids Frames',
    description: 'Ultra-flexible, shatterproof, and comfortable lightweight frames configured perfectly for active school kids.',
    price: '₹1,850',
    image: '/src/assets/images/kids_smart_fit_specs_1781444790787.jpg',
    features: ['Shatterproof flexy material', 'BPA-free medical silicone', 'Smart non-slip temple tips', 'Ergonomic light comfort']
  },
  {
    id: 'p10',
    name: 'Pure Hazel Premium Cosmetic Lenses',
    category: 'lenses',
    categoryLabel: 'Contact Lenses',
    description: 'Ultra-breathable cosmetic contact lenses in lovely Pure Hazel tone with Hydraclear Plus tech.',
    price: '₹1,450',
    originalPrice: '₹1,850',
    image: '/src/assets/images/pure_hazel_cosmetic_lens_1781445625573.jpg',
    features: ['Biocompatible Hazel tint', 'Class 1 UV-blocking core', '14-hour moisture lock', 'Exceptional comfort fit']
  },
  {
    id: 'p11',
    name: 'Platinum Gray Luxury Contact Lenses',
    category: 'lenses',
    categoryLabel: 'Contact Lenses',
    description: 'Stunning light ash-grey cosmetic lenses with deep dark outer ring definition for daily wear.',
    price: '₹1,550',
    originalPrice: '₹1,999',
    image: '/src/assets/images/platinum_gray_cosmetic_lens_1781445645135.jpg',
    features: ['Contrast ash-grey pigments', 'High oxygen permeability', 'Ultra-soft hydrogel matrix', 'Tear-film friendly structure']
  },
  {
    id: 'p12',
    name: 'Sparkle Star Blue Premium Lenses',
    category: 'lenses',
    categoryLabel: 'Contact Lenses',
    description: 'Cosmetic blue contact lenses featuring starry pupil accents and long-lasting absolute hydration.',
    price: '₹1,650',
    originalPrice: '₹2,100',
    image: '/src/assets/images/sparkling_blue_cosmetic_lens_1781445665164.jpg',
    features: ['Shining starburst azure', 'Anti-dryness Hydraclear plus', 'Zero-friction edge mold', 'Protective corneal shield']
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Modern Optical Boutique Showroom',
    category: 'store',
    imageUrl: '/src/assets/images/luxury_optical_showroom_1781441996186.jpg',
    description: 'Inside our boutique store at Rashbehari Avenue, South Kolkata featuring high-end showcases.'
  },
  {
    id: 'g2',
    title: 'Precision Slit-Lamp Eye Examination',
    category: 'testing',
    imageUrl: '/src/assets/images/computerized_eye_testing_autograde_1781450028093.jpg',
    description: 'Highly detailed computerized slit-lamp biomicroscope check to capture exact refractive index and ocular health mapping.'
  },
  {
    id: 'g3',
    title: 'Designer Frame Cabinets',
    category: 'frames',
    imageUrl: '/src/assets/images/crystal_clear_acetate_specs_1781444274747.jpg',
    description: 'Browse through over 500+ contemporary specifications in dynamic sizes and styles.'
  },
  {
    id: 'g4',
    title: 'Satisfied Customer Fitting',
    category: 'customers',
    imageUrl: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=80',
    description: 'A happy patron from Southern Avenue receiving their customized progressive frames.'
  },
  {
    id: 'g5',
    title: 'Clinical Retinal Verification',
    category: 'testing',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    description: 'High magnification exam ensuring structural eye health is perfectly aligned.'
  },
  {
    id: 'g6',
    title: 'Custom Eyewear Handcrafted Delivery',
    category: 'customers',
    imageUrl: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=800&q=80', // Elegant boutique shelves with beautiful spectacles on display
    description: 'Our standard fast-delivery packaging crafted beautifully with high-tensile microfiber cases.'
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'r1',
    name: 'Sayan Banerjee',
    role: 'Local Guide, Southern Avenue',
    rating: 5,
    comment: 'Amazing experience! Got my progressive lenses from LensFab. Their computerized testing is highly accurate, and the optician spent 20 minutes explaining which corridor width fits my screen habit. Highly professional team in South Kolkata!',
    date: '3 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'r2',
    name: 'Priyanka Sen',
    role: 'IT Engineer, Ballygunge',
    rating: 5,
    comment: 'I highly suggest their Blue-Cut lenses if you stand hours near a computer. LensFab has a stellar designer collection. The prices are extremely competitive compared to major chains, and they delivered in just 24 hours. Incredible speed and customer care!',
    date: '1 month ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'r3',
    name: 'Subhashish Das',
    role: 'Retired Professor, Gariahat',
    rating: 5,
    comment: 'Booked their home eye-check up service for my mother. Optometrist came perfectly on time with full portable diagnostic assets and trial frame blocks. Truly a savior service for elderly citizens in South Kolkata. Extremely polite!',
    date: '2 months ago',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'r4',
    name: 'Neha Mukherjee',
    role: 'Student, Lake Market',
    rating: 5,
    comment: 'Loved the custom pink polycarbonate specs I bought here! Super robust and bendable. The shop assistants are incredibly patient and let you trial multiple options. Highly recommended store in Rashbehari Avenue!',
    date: '1 week ago',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Do you charge extra for Computerized Eye Testing?",
    answer: "Our automated computerized examinations are completely complementary if you choose your customized spectacles or lenses from our vast collection! Otherwise, it is a nominal fee of just ₹100."
  },
  {
    question: "How long does it take for prescription lens fittings?",
    answer: "Most single-vision spherical and blue-cut lenses are fitted and handed over within 2 to 4 hours. Progressive or specialized high-refractive high-index lenses are digitally surfaced and delivered within 1 to 2 business days."
  },
  {
    question: "Are your branded frames and lenses genuine?",
    answer: "Absolutely. LensFab Optical guarantees 100% genuine products sourced directly from authorized brand distributors. All premium lenses (like Essilor, Zeiss, Nova, or Shamir) are supplied with original authenticity certificate cards."
  },
  {
    question: "How do I secure an appointment for a Home Eye Check-up?",
    answer: "You can book easily right here on our booking form! Choose your desired date and preferred hour slot and select 'Home Visit requested' in your message, or simply send a WhatsApp message to +91 81003 25925. Our coordinator will call to confirm."
  },
  {
    question: "Do you support frame repairs or prescription updates for old frames?",
    answer: "Yes, we support prescription updates using your custom existing frames (subject to frame structural testing). We also offer instant free nose pad replacements, ultrasonic deep cleaning, and alignment adjustments on spot."
  }
];
