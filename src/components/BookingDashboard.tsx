/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, MessageSquare, Trash2, Check, CheckCircle2, User, Phone, Mail, Award } from 'lucide-react';
import { Appointment } from '../types';

interface BookingDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  appointments: Appointment[];
  onRemoveAppointment: (id: string) => void;
  onUpdateStatus: (id: string, status: 'Pending' | 'Confirmed' | 'Completed') => void;
}

export default function BookingDashboard({
  isOpen,
  onClose,
  appointments,
  onRemoveAppointment,
  onUpdateStatus,
}: BookingDashboardProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop glass */}
        <motion.div
          id="dashboard-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-navy-950/60 backdrop-blur-xs"
        />

        {/* Dashboard Main body */}
        <motion.div
          id="dashboard-popup-card"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-gray-150 p-6 md:p-8 flex flex-col max-h-[85vh] z-10 text-left"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-150 pb-4 mb-5">
            <div className="space-y-0.5">
              <h3 className="font-display text-xl font-bold text-navy-950 flex items-center gap-2">
                <Calendar className="h-5.5 w-5.5 text-navy-600" />
                <span>My Appointment Manager</span>
              </h3>
              <p className="font-sans text-xs text-gray-400">
                Manage your scheduledized computerized eye checks and home visits at LensFab.
              </p>
            </div>

            <button
              id="close-dashboard-modal"
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full text-gray-500 hover:text-navy-950 cursor-pointer"
              title="Close Booking Panel"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* List Area */}
          <div className="flex-1 overflow-y-auto pr-1 space-y-4 max-h-[50vh] scrollbar-thin">
            {appointments.length === 0 ? (
              /* Beautiful Empty state */
              <div className="text-center py-14 bg-navy-50/50 rounded-2xl border border-dashed border-navy-100/50 max-w-sm mx-auto my-4 space-y-4">
                <div className="bg-navy-100 p-3 rounded-full text-navy-500 w-fit mx-auto">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="space-y-1 px-4">
                  <h4 className="font-display text-sm font-bold text-navy-950">No Slots Scheduled Yet</h4>
                  <p className="font-sans text-[11px] text-gray-400">
                    Use our live eye-test booking form. Slots saved here synchronize in real-time across your browser session.
                  </p>
                </div>
              </div>
            ) : (
              <AnimatePresence mode="popLayout animate-stagger">
                {appointments.map((app) => {
                  return (
                    <motion.div
                      layout
                      key={app.id}
                      id={`booking-report-${app.id}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="bg-white rounded-xl border border-gray-100 shadow-xs p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-navy-100 hover:shadow-md transition-all duration-200"
                    >
                      {/* Left: Info */}
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center space-x-2.5">
                          {/* Profile Badge */}
                          <div className="bg-navy-50 p-1.5 rounded-md text-navy-600">
                            <User className="h-4 w-4" />
                          </div>
                          <h4 className="font-display text-sm font-bold text-navy-950">
                            {app.name}
                          </h4>

                          {/* Status pill mapping */}
                          <span
                            className={`font-sans text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                              app.status === 'Completed'
                                ? 'bg-emerald-50 text-emerald-600'
                                : app.status === 'Confirmed'
                                ? 'bg-blue-50 text-blue-600'
                                : 'bg-gold-50 text-gold-600'
                            }`}
                          >
                            {app.status}
                          </span>
                        </div>

                        {/* Timing, Address/Email detail rows */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 font-sans text-xs text-gray-500">
                          <div className="flex items-center space-x-1.5">
                            <Calendar className="h-3.5 w-3.5 text-navy-400" />
                            <span>Date: <strong className="text-navy-900">{app.preferredDate}</strong></span>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <Clock className="h-3.5 w-3.5 text-navy-400" />
                            <span>Time: <strong className="text-navy-900">{app.preferredTime}</strong></span>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <Phone className="h-3.5 w-3.5 text-navy-400" />
                            <span>Mobile: <strong className="text-navy-900">{app.mobile}</strong></span>
                          </div>
                          {app.email && (
                            <div className="flex items-center space-x-1.5">
                              <Mail className="h-3.5 w-3.5 text-navy-400" />
                              <span className="truncate">Email: {app.email}</span>
                            </div>
                          )}
                        </div>

                        {/* Customer remarks */}
                        <div className="bg-navy-50/50 p-2 rounded-lg border border-gray-100/10 text-xs text-gray-500 flex items-start space-x-1.5">
                          <MessageSquare className="h-3.5 w-3.5 text-navy-400 mt-0.5 flex-shrink-0" />
                          <p className="line-clamp-2 leading-relaxed">
                            {app.message || 'No additional remarks.'}
                          </p>
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex md:flex-col items-center justify-between md:justify-center gap-2 pt-2 md:pt-0 border-t md:border-t-0 md:pl-4 border-gray-100/80">
                        {/* Status updates toggles */}
                        <div className="flex items-center space-x-1.5">
                          {app.status === 'Pending' && (
                            <button
                              id={`confirm-slot-${app.id}`}
                              onClick={() => onUpdateStatus(app.id, 'Confirmed')}
                              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg cursor-pointer transition-all flex items-center space-x-1 text-[10px] font-bold uppercase tracking-wide font-sans"
                              title="Set slot as Confirmed"
                            >
                              <Check className="h-3.5 w-3.5" />
                              <span>Confirm</span>
                            </button>
                          )}
                          {app.status === 'Confirmed' && (
                            <button
                              id={`complete-slot-${app.id}`}
                              onClick={() => onUpdateStatus(app.id, 'Completed')}
                              className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-lg cursor-pointer transition-all flex items-center space-x-1 text-[10px] font-bold uppercase tracking-wide font-sans"
                              title="Set slot as Completed"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              <span>Complete</span>
                            </button>
                          )}
                        </div>

                        {/* Remove button */}
                        <button
                          id={`erase-report-btn-${app.id}`}
                          onClick={() => onRemoveAppointment(app.id)}
                          className="text-red-500 hover:bg-red-50 p-2 rounded-lg cursor-pointer transition-all hover:text-red-700 self-end md:self-auto flex items-center space-x-1 text-[10px] font-bold uppercase tracking-wide font-sans border border-transparent hover:border-red-100"
                          title="Purge appointment entry"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            )}
          </div>

          {/* Footer details info */}
          <div className="mt-6 pt-5 border-t border-gray-150 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <Award className="h-4.5 w-4.5 text-navy-500" />
              Slot changes store in client localStorage.
            </span>
            <button
              id="clear-dashboard-footer"
              onClick={onClose}
              className="bg-navy-600 hover:bg-navy-700 text-white font-semibold px-5 py-2 rounded-lg cursor-pointer shadow-xs transition-all text-xs"
            >
              Done Managing
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
