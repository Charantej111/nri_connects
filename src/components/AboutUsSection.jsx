import React from 'react';
import { Shield, Users, Award, Heart, CheckCircle2 } from 'lucide-react';

export default function AboutUsSection({ setActivePage, onOpenBookingModal }) {
  return (
    <div className="py-24 sm:py-32 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-fade-up">

        {/* About Main Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* 
            Left Column: Overlapping Collage of Images 
            Matching the template layout exactly with rounded cards.
          */}
          <div className="lg:col-span-6 relative h-[500px] sm:h-[600px] flex items-center justify-center">

            {/* Top-Left Image: Couple Laughing */}
            <div className="absolute top-8 left-4 w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden shadow-lg border-4 border-white transition-all duration-700 z-10 animate-float-1 hover:scale-105 hover:z-30 cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=400&q=80"
                alt="Active Seniors Laughing"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Center-Right Large Image: Elderly Couple Hugging */}
            <div className="absolute right-4 top-16 w-60 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white transition-all duration-700 z-20 animate-float-2 hover:scale-105 hover:z-30 cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=600&q=80"
                alt="Seniors Caring Relationship"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom-Left Image: Happy Elderly Lady with flowers */}
            <div className="absolute bottom-6 left-8 w-44 h-48 sm:w-52 sm:h-56 rounded-3xl overflow-hidden shadow-lg border-4 border-white transition-all duration-700 z-10 animate-float-3 hover:scale-105 hover:z-30 cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&q=80"
                alt="Elderly Lady Smiling"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* 
            Right Column: Copy Content & Feature Cards
            Matching Webflow styling with purple theme accents.
          */}
          <div className="lg:col-span-6 space-y-8">

            <div className="space-y-4">
              {/* Eyebrow Tag */}
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-4 py-1.5 rounded-full inline-block">
                About NRI Connects
              </span>

              {/* Highlighted Heading with Curved Underline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] font-display">
                The{' '}
                <span className="relative inline-block text-slate-900">
                  right care
                  <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-emerald-500" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,15 Q50,2 100,15" stroke="currentColor" strokeWidth="4.5" fill="none" />
                  </svg>
                </span>{' '}
                for your loved ones
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Connecting hearts across boundaries. We provide the most reliable, empathetic in-home parent support, instant emergency response, and transparent digital reporting so you never feel distant from your home.
              </p>
            </div>

            {/* 2x2 Feature Grid Redesigned as Webflow-like Hover Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Feature 1: 24/7 Nursing Staff */}
              <div className="flex items-start space-x-4 bg-slate-50 border border-slate-100 hover:bg-emerald-50/60 hover:border-emerald-200 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md cursor-default group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Heart className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">24/7 Nursing Staff</h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">Accredited medical partners ready to coordinate hospital care.</p>
                </div>
              </div>

              {/* Feature 2: Resident Care */}
              <div className="flex items-start space-x-4 bg-slate-50 border border-slate-100 hover:bg-emerald-50/60 hover:border-emerald-200 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md cursor-default group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">Resident Care</h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">Dedicated caregivers offering regular companion assistance.</p>
                </div>
              </div>

              {/* Feature 3: Quality Support */}
              <div className="flex items-start space-x-4 bg-slate-50 border border-slate-100 hover:bg-emerald-50/60 hover:border-emerald-200 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md cursor-default group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">Quality Support</h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">Strict background vetting for absolute safety & confidence.</p>
                </div>
              </div>

              {/* Feature 4: Caring Staff */}
              <div className="flex items-start space-x-4 bg-slate-50 border border-slate-100 hover:bg-emerald-50/60 hover:border-emerald-200 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md cursor-default group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">Caring Staff</h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">Local coordinators delivering empathetic and warm hospitality.</p>
                </div>
              </div>

            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => { setActivePage('about'); window.scrollTo(0, 0); }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-colors"
              >
                More about us
              </button>

              <button
                onClick={() => { setActivePage('services'); window.scrollTo(0, 0); }}
                className="bg-white border border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-7 py-3.5 rounded-full font-bold text-sm transition-colors"
              >
                Browse services
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
