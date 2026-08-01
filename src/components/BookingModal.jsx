import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, Send } from 'lucide-react';
import { CITIES_SERVICED, SERVICES_CATALOG } from '../data/nriContent';
import CountryCodePicker from './CountryCodePicker';
import CustomSelect from './CustomSelect';

const serviceOptions = SERVICES_CATALOG.map(svc => ({ value: svc.id, label: svc.title }));
const cityOptions = CITIES_SERVICED.map(city => ({ value: city, label: city }));

export default function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [bookingData, setBookingData] = useState({
    serviceId: 'property-care',
    city: 'Hyderabad & Cyberabad',
    preferredDate: '',
    parentName: '',
    parentCountryCode: '+91',
    parentPhone: '',
    nriName: '',
    nriEmail: '',
    nriCountryCode: '+1',
    nriPhone: '',
    notes: ''
  });
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCompleted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6 animate-fadeIn">
      <div className="bg-white w-full max-w-xl rounded-t-[2rem] sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden relative my-0 sm:my-8 max-h-[92vh] overflow-y-auto">

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-emerald-100 hover:text-white p-2 rounded-full hover:bg-emerald-800/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-emerald-800 uppercase tracking-widest bg-white px-2.5 py-0.5 rounded-full inline-block">
              NRI Consultation Request
            </span>
            <h2 className="text-2xl font-extrabold text-white">Book Free Care Consultation</h2>
            <p className="text-xs text-emerald-100">Schedule a video call or doorstep service visit for family in India</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">

          {isCompleted ? (
            <div className="text-center py-8 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-purple-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Consultation Requested!</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Thank you, {bookingData.nriName}! Our local city care manager in {bookingData.city} has received your request and will contact you via WhatsApp ({bookingData.nriCountryCode} {bookingData.nriPhone}) or Email ({bookingData.nriEmail}) within 2 hours.
              </p>
              <button
                onClick={onClose}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold text-xs shadow-md mt-4 transition-colors"
              >
                Close & Return to Site
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Select Service & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Select Service Needed</label>
                  <CustomSelect
                    value={bookingData.serviceId}
                    onChange={(val) => setBookingData({ ...bookingData, serviceId: val })}
                    options={serviceOptions}
                    placeholder="Select Service"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">City Location in India</label>
                  <CustomSelect
                    value={bookingData.city}
                    onChange={(val) => setBookingData({ ...bookingData, city: val })}
                    options={cityOptions}
                    placeholder="Select City"
                  />
                </div>
              </div>

              {/* NRI Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Name (NRI)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Reddy"
                    value={bookingData.nriName}
                    onChange={(e) => setBookingData({ ...bookingData, nriName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="ananya@gmail.com"
                    value={bookingData.nriEmail}
                    onChange={(e) => setBookingData({ ...bookingData, nriEmail: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* NRI Phone with Flag Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Mobile (NRI)</label>
                <div className="relative flex border border-slate-200 rounded-xl focus-within:border-emerald-500">
                  <CountryCodePicker
                    selected={bookingData.nriCountryCode}
                    onChange={(val) => setBookingData({ ...bookingData, nriCountryCode: val })}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="NRI Phone Number"
                    value={bookingData.nriPhone}
                    onChange={(e) => setBookingData({ ...bookingData, nriPhone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs font-semibold focus:outline-none rounded-r-xl"
                  />
                </div>
              </div>

              {/* Parent Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Parent Name in India</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. K. S. Rao"
                    value={bookingData.parentName}
                    onChange={(e) => setBookingData({ ...bookingData, parentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {/* Parent Phone with Flag Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Parent Phone Number</label>
                  <div className="relative flex border border-slate-200 rounded-xl focus-within:border-emerald-500">
                    <CountryCodePicker
                      selected={bookingData.parentCountryCode}
                      onChange={(val) => setBookingData({ ...bookingData, parentCountryCode: val })}
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Parent Phone Number"
                      value={bookingData.parentPhone}
                      onChange={(e) => setBookingData({ ...bookingData, parentPhone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs font-semibold focus:outline-none rounded-r-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Preferred Date & Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date / Special Notes</label>
                <textarea
                  rows={2}
                  placeholder="Mention any specific health concerns, property address, or time preference..."
                  value={bookingData.notes}
                  onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-xl font-bold text-xs shadow-md transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Consultation Booking</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
