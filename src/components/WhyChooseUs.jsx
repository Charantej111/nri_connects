import React from 'react';
import { ShieldCheck, HeartHandshake, Eye, Award, Check } from 'lucide-react';

export default function WhyChooseUs({ onOpenBookingModal }) {
  const points = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      title: "Vetted Local Personnel",
      desc: "Every caregiver, plumber, and driver undergoes strict background verification and police records validation."
    },
    {
      icon: <Eye className="w-5 h-5 text-emerald-600" />,
      title: "100% Digital Transparency",
      desc: "HD inspection photographs, physical GPS logs, and vital charts delivered to your NRI dashboard instantly."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-emerald-600" />,
      title: "Empathetic Companionship",
      desc: "Our attendants treat your parents with the exact warmth, care, and respectful dignity as their own family."
    },
    {
      icon: <Award className="w-5 h-5 text-emerald-600" />,
      title: "24/7 Operations Desk",
      desc: "Around-the-clock emergency medical response and dispatch officers active in India."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Images Collage Column */}
          <div className="lg:col-span-6">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80" 
                  alt="Senior Medical Checkup in India" 
                  className="w-full h-64 object-cover rounded-3xl shadow-lg border-2 border-white"
                />
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80" 
                  alt="Property Inspection in India" 
                  className="w-full h-64 object-cover rounded-3xl shadow-lg border-2 border-white mt-8"
                />
              </div>

              {/* Floating Badge with Logo Emerald Gradient */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-5 rounded-3xl shadow-2xl border-4 border-white max-w-xs text-center">
                <HeartHandshake className="w-8 h-8 text-white mx-auto mb-2" />
                <span className="block text-2xl font-extrabold">100% Trust</span>
                <span className="block text-xs text-emerald-100 mt-1">
                  Empowering NRIs to care for family in Hyderabad & Khammam with confidence.
                </span>
              </div>

            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-4 py-1.5 rounded-full inline-block">
                Why Families Trust NRI Connects
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-display">
                Designed for Complete Transparency Across Oceans
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                We bridge the geographic gap between you and your family in India with real-time digital reporting, trusted local personnel, and 24/7 care support.
              </p>
            </div>

            {/* Feature Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((pt, idx) => (
                <div key={idx} className="bg-[#FAF7F5] p-5 rounded-2xl border border-slate-200/80 space-y-2 hover:border-emerald-500/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-100">
                    {pt.icon}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">{pt.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{pt.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onOpenBookingModal}
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                Schedule Free NRI Consultation
              </button>

              <span className="text-xs text-slate-500 font-semibold">
                No credit card required • Instant response
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
