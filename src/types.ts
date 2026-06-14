/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  highlightWords: string[];
}

export interface Product {
  id: string;
  name: string;
  category: 'frames' | 'sunglasses' | 'lenses' | 'computer' | 'kids';
  categoryLabel: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  isPopular?: boolean;
  features: string[];
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'testing' | 'frames' | 'customers';
  imageUrl: string;
  description: string;
}

export interface Appointment {
  id: string;
  name: string;
  mobile: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  status: 'Pending' | 'Confirmed' | 'Completed';
  createdAt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
