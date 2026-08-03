import React from 'react';
import { 
  ShieldCheck, Sparkles, Building2, MapPin
} from 'lucide-react';
import AboutUsSection from './AboutUsSection';
import WhyChooseUs from './WhyChooseUs';

export default function AboutUsPage({ setActivePage, onOpenBookingModal }) {
  const companyFeatures = [
    { label: "Founded", value: "2022", icon: <Building2 className="w-5 h-5 text-emerald-600" /> },
    { label: "Primary Regions", value: "Hyderabad & Khammam", icon: <MapPin className="w-5 h-5 text-emerald-600" /> },
    { label: "Operation Type", value: "Transparent Retainer", icon: <ShieldCheck className="w-5 h-5 text-emerald-600" /> },
  ];

  return (
    <div className="bg-white font-sans">
      
      {/* 1. Page Header */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-emerald-50/70 via-slate-50 to-white overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight font-display">
            Connecting{' '}
            <span className="relative inline-block text-emerald-700 font-extrabold">
              <span className="relative z-10">Hearts</span>
              
              {/* Floating Doodle Heart Stroke Accent */}
              <svg 
                className="absolute -top-5 -right-6 sm:-top-7 sm:-right-8 w-8 h-8 sm:w-11 sm:h-11 text-rose-500 overflow-visible pointer-events-none animate-heart-pulse drop-shadow-sm"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path 
                  d="M 25 14 C 20 6, 8 10, 10 21 C 12 30, 25 38, 25 40 C 25 38, 38 30, 40 21 C 42 10, 30 6, 25 14 Z" 
                  stroke="currentColor" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="animate-heart-draw"
                />
              </svg>

              {/* Smooth Animated Doodle Underline Stroke */}
              <svg 
                className="absolute -bottom-2.5 left-0 w-full h-4 text-rose-500 overflow-visible pointer-events-none" 
                viewBox="0 0 100 20" 
                preserveAspectRatio="none"
                fill="none"
              >
                <path 
                  d="M 0 15 C 30 5, 70 22, 100 12" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  className="animate-heart-draw"
                />
              </svg>
            </span>{' '}
            Across Oceans & Safeguarding Homes in India
          </h1>

          {/* Highlighted Corporate Statement Card */}
          <div className="max-w-3xl mx-auto mt-6 bg-white p-6 sm:p-8 rounded-3xl border border-emerald-200/80 shadow-md text-left space-y-3 relative">
            <div className="flex items-center space-x-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>Company Overview & Identity</span>
            </div>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
              Founded in 2022 as a private limited company, NRI Connects operates with a small team of local field executives, healthcare attendants, and property managers specializing in services within Hyderabad and Khammam, India. The firm, distinct from larger entities with similar names, utilizes secure PayPal payments and maintains a transparent, retainer-based operational model.
            </p>
          </div>

          {/* Core Feature Badges (3 cards) */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {companyFeatures.map((st, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm text-center space-y-1 hover:border-emerald-300 transition-colors">
                <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-50 flex items-center justify-center mb-2">
                  {st.icon}
                </div>
                <div className="text-sm font-extrabold text-slate-900 font-display">{st.value}</div>
                <div className="text-[11px] font-semibold text-slate-500">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Core Collage & Features (3 Uploaded Images, Buttons & Eyebrow Hidden) */}
      <AboutUsSection 
        setActivePage={setActivePage} 
        onOpenBookingModal={onOpenBookingModal} 
        hideButtons={true} 
        hideEyebrow={true}
      />

      {/* 3. Why Families Trust Us Component */}
      <WhyChooseUs onOpenBookingModal={onOpenBookingModal} />

    </div>
  );
}
