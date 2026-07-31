import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { MEMBERSHIP_PACKAGES } from '../data/nriContent';

export default function PricingPackages({ onOpenBookingModal }) {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="packages-section" className="py-20 lg:py-28 bg-emerald-50/40 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-white border border-emerald-300 px-3.5 py-1.5 rounded-full shadow-sm">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Transparent Membership Plans
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            All-Inclusive Care Plans for Every Family
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Choose a recurring care plan to ensure ongoing property checks, 24/7 emergency response, and regular health vitals monitoring for your parents in India.
          </p>

          {/* Monthly / Annual Billing Toggle */}
          <div className="pt-4 flex items-center justify-center space-x-3">
            <span className={`text-xs font-bold ${!isAnnual ? 'text-emerald-700' : 'text-slate-500'}`}>Monthly Billing</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-emerald-600 rounded-full p-1 transition-colors relative focus:outline-none"
            >
              <div 
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <div className="flex items-center space-x-1.5">
              <span className={`text-xs font-bold ${isAnnual ? 'text-emerald-700' : 'text-slate-500'}`}>Annual Billing</span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                Save 15%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between relative ${
                pkg.popular
                  ? 'bg-white border-2 border-emerald-600 shadow-lg transform -translate-y-2'
                  : 'bg-white border border-slate-200 shadow-md'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[11px] font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {pkg.badge}
                </div>
              )}

              <div className="space-y-6">
                
                {/* Header */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-display">{pkg.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 min-h-[32px] font-normal">{pkg.tagline}</p>
                </div>

                {/* Price Display */}
                <div className="py-4 border-y border-slate-100 flex items-baseline space-x-1">
                  <span className="text-4xl font-extrabold text-slate-900 font-display">
                    ${isAnnual ? Math.round(pkg.annualPrice / 12) : pkg.monthlyPrice}
                  </span>
                  <span className="text-xs font-bold text-slate-500">/ month</span>
                  {isAnnual && (
                    <span className="text-[10px] text-emerald-600 font-semibold block ml-2">
                      (Billed ${pkg.annualPrice}/yr)
                    </span>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Included Services</span>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-700 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenBookingModal}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs shadow-sm transition-all text-center ${
                    pkg.popular
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  Select Plan
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
