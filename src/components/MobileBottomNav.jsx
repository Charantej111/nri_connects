import React from 'react';
import { Home, LayoutGrid, PhoneCall, CalendarCheck, MessageCircle } from 'lucide-react';

export default function MobileBottomNav({ activePage, setActivePage, onOpenBookingModal }) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-2xl px-2 py-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))] flex items-center justify-around font-sans">
      
      {/* Home */}
      <button
        onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 ${
          activePage === 'home'
            ? 'text-emerald-700 font-bold scale-105'
            : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <Home className="w-5 h-5" />
        <span className="text-[10px] font-semibold mt-0.5">Home</span>
      </button>

      {/* Services */}
      <button
        onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 ${
          activePage === 'services' || activePage === 'service-detail'
            ? 'text-emerald-700 font-bold scale-105'
            : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <LayoutGrid className="w-5 h-5" />
        <span className="text-[10px] font-semibold mt-0.5">Services</span>
      </button>

      {/* SOS / Call Helpline Button (Prominent Center Accent Button) */}
      <a
        href="tel:+919885880017"
        className="flex flex-col items-center justify-center -mt-4"
        title="24/7 Emergency Helpline"
      >
        <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 border-2 border-white transform active:scale-90 transition-transform">
          <PhoneCall className="w-5 h-5 animate-pulse" />
        </div>
        <span className="text-[10px] font-extrabold text-emerald-800 mt-0.5">24/7 Call</span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919885880017"
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center py-1 px-3 rounded-xl text-slate-500 hover:text-[#25D366] transition-all"
      >
        <MessageCircle className="w-5 h-5 text-[#25D366]" />
        <span className="text-[10px] font-semibold mt-0.5">WhatsApp</span>
      </a>

      {/* Book Care */}
      <button
        onClick={onOpenBookingModal}
        className="flex flex-col items-center justify-center py-1 px-3 rounded-xl text-slate-500 hover:text-emerald-700 transition-all active:scale-95"
      >
        <CalendarCheck className="w-5 h-5" />
        <span className="text-[10px] font-semibold mt-0.5">Book</span>
      </button>

    </div>
  );
}
