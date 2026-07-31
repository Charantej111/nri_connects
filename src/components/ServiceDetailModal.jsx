import React from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, PhoneCall } from 'lucide-react';
import { CONTACT_INFO } from '../data/nriContent';

export default function ServiceDetailModal({ service, onClose, onOpenBookingModal }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn font-sans">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden relative my-8 max-h-[90vh] flex flex-col">
        
        {/* Header Image Strip */}
        <div className="relative h-64 sm:h-72 flex-shrink-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/80 backdrop-blur-md text-slate-800 p-2 rounded-full hover:bg-white transition-colors shadow-md"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title & Badge Overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <div className="flex items-center space-x-2">
              <span className="bg-emerald-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {service.badge}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight font-display">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 custom-scrollbar">
          
          {/* Detailed Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">Service Overview</h4>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              {service.detailedDescription}
            </p>
          </div>

          {/* Key Inclusions & Features */}
          <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-200/60">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3">Key Features & Inclusions</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Workflow */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">How We Execute This Service</h4>
            <div className="space-y-2.5">
              {service.workflow.map((step, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-xs font-semibold text-slate-800">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Guarantee Box */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-900">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <div>
                <span className="block text-xs font-bold">100% Satisfaction & Verification Guarantee</span>
                <span className="block text-[11px] text-amber-800/80">Geotagged reports & verified personnel for every service</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <div className="text-center sm:text-left">
            <span className="block text-xs text-slate-500">Estimated Fulfillment</span>
            <span className="text-sm font-bold text-slate-900">{service.priceRange}</span>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex-1 sm:flex-none px-4 py-3 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors flex items-center justify-center space-x-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
              <span>Call Helpline</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenBookingModal();
              }}
              className="flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl text-xs font-bold shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <span>Book Service Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
