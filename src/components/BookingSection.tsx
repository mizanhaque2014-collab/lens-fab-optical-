/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Appointment } from '../types';
import { Calendar, Phone, Mail, User, Clock, MessageSquare, CheckCircle, Smartphone } from 'lucide-react';

interface BookingSectionProps {
  onAddAppointment: (appointment: Appointment) => void;
}

export default function BookingSection({ onAddAppointment }: BookingSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    preferredDate: '',
    preferredTime: '10:30 AM - 12:00 PM',
    message: '',
    serviceType: 'Store Computerized test'
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const timeSlots = [
    '10:30 AM - 12:00 PM',
    '12:00 PM - 02:00 PM',
    '02:00 PM - 04:30 PM',
    '04:30 PM - 07:00 PM',
    '07:00 PM - 08:30 PM'
  ];

  // Restrict date input to today onwards
  const todayString = new Date().toISOString().split('T')[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const constructWhatsAppMessage = (data: typeof formData) => {
    return encodeURIComponent(
      `*LENSFAB OPTICAL APPOINTMENT BOOKING*\n\n` +
      `• *Name:* ${data.name}\n` +
      `• *Mobile:* ${data.mobile}\n` +
      `• *Email:* ${data.email || 'N/A'}\n` +
      `• *Service:* ${data.serviceType}\n` +
      `• *Preferred Date:* ${data.preferredDate}\n` +
      `• *Preferred Time Slot:* ${data.preferredTime}\n` +
      `• *Request Message:* ${data.message || 'Standard computerized eye testing.'}\n\n` +
      `_Please confirm my slot availability at the Rashbehari Avenue showroom._`
    );
  };

  const handleSubmit = (e: React.FormEvent, method: 'direct' | 'whatsapp') => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.preferredDate) {
      alert('Please fill out your Name, Mobile Number, and Preferred Date.');
      return;
    }

    setSubmitting(true);

    const newAppointment: Appointment = {
      id: 'app-' + Math.random().toString(36).substr(2, 9),
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      message: `${formData.serviceType}: ${formData.message}`,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };

    setTimeout(() => {
      onAddAppointment(newAppointment);
      setSubmitting(false);
      setIsSuccess(true);

      if (method === 'whatsapp') {
        const waText = constructWhatsAppMessage(formData);
        window.open(`https://wa.me/918100325925?text=${waText}`, '_blank', 'referrerpolicy=no-referrer');
      }

      // Reset Form fields
      setFormData({
        name: '',
        mobile: '',
        email: '',
        preferredDate: '',
        preferredTime: '10:30 AM - 12:00 PM',
        message: '',
        serviceType: 'Store Computerized test'
      });
    }, 850);
  };

  return (
    <section id="booking" className="py-24 bg-transparent relative">
      {/* Decorative blobs */}
      <div className="absolute top-[20%] left-[-15%] w-[400px] h-[400px] bg-navy-100/25 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block - Informational Details */}
          <div className="lg:col-span-5 flex flex-col space-y-7 text-left">
            <span className="font-sans text-[11px] font-extrabold text-navy-600 uppercase tracking-widest bg-navy-50 px-4 py-1.5 rounded-full w-fit">
              Direct Bookings
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight leading-snug">
              Schedule Your Precision Eye Check-up Today
            </h2>
            <p className="font-sans text-sm text-gray-500 leading-relaxed">
              Skip wait queues and secure standard eye check-up slots. We use computer-controlled auto-refractors to quickly analyze vision power requirements. Home testing is available across Kolkata upon slot confirmation.
            </p>

            {/* Structured details checklist */}
            <div className="space-y-4 pt-3">
              <div className="flex items-start space-x-3.5">
                <div className="bg-navy-50 text-navy-600 p-2 rounded-lg mt-0.5">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-display text-sm font-bold text-navy-900">10-15 Minutes Evaluation</h4>
                  <p className="font-sans text-xs text-gray-400">Quick, precise results with trial frame adjustments on spot.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="bg-navy-50 text-navy-600 p-2 rounded-lg mt-0.5">
                  <Smartphone className="h-4 w-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-display text-sm font-bold text-navy-900">Direct WhatsApp Integration</h4>
                  <p className="font-sans text-xs text-gray-400">Receive instant updates and slot confirmations directly on WhatsApp.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="bg-navy-50 text-navy-600 p-2 rounded-lg mt-0.5">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-display text-sm font-bold text-navy-900">No Hidden Costs</h4>
                  <p className="font-sans text-xs text-gray-400">Clinical eye tests are fully complementary upon purchasing spectacles.</p>
                </div>
              </div>
            </div>

            {/* Quick call support banner */}
            <div className="bg-white p-5 rounded-xl border border-gray-100 flex items-center space-x-4">
              <div className="bg-[#25D366]/10 text-emerald-600 p-3 rounded-xl">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <span className="font-sans text-[10px] text-gray-400 font-bold uppercase tracking-wide">Prefer calling directly?</span>
                <p className="font-sans text-sm text-navy-950 font-bold">
                  WhatsApp Support: <a href="tel:+918100325925" className="text-navy-600 hover:underline">+91 81003 25925</a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Block - Booking Form with glassmorphism */}
          <div className="lg:col-span-7">
            <motion.div
              layout
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100/95 p-7 md:p-9 text-left relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5.5"
                  >
                    <h3 className="font-display text-xl font-bold text-navy-950 mb-1">
                      Choose Your Time Slot
                    </h3>
                    <p className="font-sans text-xs text-gray-400 -mt-2">
                      Please fill out valid coordinates. Select the WhatsApp option to forward details directly.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label className="font-sans text-xs font-bold text-navy-800 flex items-center gap-1">
                          <User className="h-3.5 w-3.5 text-navy-500" />
                          <span>Full Name *</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-navy-50/50 border border-gray-100 focus:border-navy-500 rounded-xl font-sans text-sm outline-hidden transition-all shadow-xs"
                        />
                      </div>

                      {/* Mobile phone input */}
                      <div className="space-y-1.5">
                        <label className="font-sans text-xs font-bold text-navy-800 flex items-center gap-1">
                          <Smartphone className="h-3.5 w-3.5 text-navy-500" />
                          <span>Mobile Number *</span>
                        </label>
                        <input
                          type="tel"
                          name="mobile"
                          required
                          placeholder="e.g. +91 81003 25925"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-navy-50/50 border border-gray-100 focus:border-navy-500 rounded-xl font-sans text-sm outline-hidden transition-all shadow-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Email Input */}
                      <div className="space-y-1.5">
                        <label className="font-sans text-xs font-bold text-navy-800 flex items-center gap-1">
                          <Mail className="h-3.5 w-3.5 text-navy-500" />
                          <span>Email Address (Optional)</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Your email address"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-navy-50/50 border border-gray-100 focus:border-navy-500 rounded-xl font-sans text-sm outline-hidden transition-all shadow-xs"
                        />
                      </div>

                      {/* Service selector */}
                      <div className="space-y-1.5">
                        <label className="font-sans text-xs font-bold text-navy-800 flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-navy-500" />
                          <span>Check-up Option</span>
                        </label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-navy-50/50 border border-gray-100 focus:border-navy-500 rounded-xl font-sans text-sm outline-hidden transition-all shadow-xs"
                        >
                          <option value="Store Computerized test">Computerized Test (Mouth/Showroom)</option>
                          <option value="Home Eye Check-up requested">Home Eye Check-up (Kolkata region)</option>
                          <option value="Spectacle adjustment consultation">Frame Consultation & Repairs</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Preferred Date */}
                      <div className="space-y-1.5">
                        <label className="font-sans text-xs font-bold text-navy-800 flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-navy-500" />
                          <span>Preferred Date *</span>
                        </label>
                        <input
                          type="date"
                          name="preferredDate"
                          required
                          min={todayString}
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-navy-50/50 border border-gray-100 focus:border-navy-500 rounded-xl font-sans text-sm outline-hidden transition-all shadow-xs"
                        />
                      </div>

                      {/* Preferred Time slots */}
                      <div className="space-y-1.5">
                        <label className="font-sans text-xs font-bold text-navy-800 flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-navy-500" />
                          <span>Preferred Hour slot</span>
                        </label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-navy-50/50 border border-gray-100 focus:border-navy-500 rounded-xl font-sans text-sm outline-hidden transition-all shadow-xs"
                        >
                          {timeSlots.map(slot => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Short message */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-xs font-bold text-navy-800">
                        Any messages or vision remarks?
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="e.g. Booking for my father, suffers from blurriness reading papers..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-navy-50/50 border border-gray-100 focus:border-navy-500 rounded-xl font-sans text-sm outline-hidden transition-all shadow-xs resize-none"
                      />
                    </div>

                    {/* Dual booking Actions */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <button
                        type="button"
                        id="submit-book-appointment-direct"
                        disabled={submitting}
                        onClick={(e) => handleSubmit(e, 'direct')}
                        className="bg-navy-600 hover:bg-navy-700 disabled:bg-gray-200 text-white font-sans text-sm font-semibold py-3.5 rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center space-x-1.5 cursor-pointer"
                      >
                        {submitting ? 'Scheduling...' : 'Book Appointment'}
                      </button>

                      <button
                        type="button"
                        id="submit-book-appointment-whatsapp"
                        disabled={submitting}
                        onClick={(e) => handleSubmit(e, 'whatsapp')}
                        className="bg-[#25D366] hover:bg-emerald-600 disabled:bg-gray-200 text-white font-sans text-sm font-semibold py-3.5 rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center space-x-1.5 cursor-pointer"
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span>Book & WhatsApp</span>
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  /* Success Screen layout */
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-6 flex flex-col items-center"
                  >
                    <div className="bg-emerald-50 text-emerald-600 p-4.5 rounded-full inline-flex animate-bounce">
                      <CheckCircle className="h-10 w-10" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-bold text-navy-950">
                        Appointment Slot Requested!
                      </h3>
                      <p className="font-sans text-sm text-gray-500 max-w-sm mx-auto">
                        Your check-up requests have been stored. If you selected 'Book & WhatsApp', the coordinated template has been dispatched. Our team will verify and dial shortly.
                      </p>
                    </div>

                    <button
                      id="reset-form-success-btn"
                      onClick={() => setIsSuccess(false)}
                      className="border-2 border-navy-100 hover:border-navy-300 text-navy-800 font-sans text-xs font-bold px-6 py-2.5 rounded-xl cursor-pointer"
                    >
                      Book Another Slot
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
