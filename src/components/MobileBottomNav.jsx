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
        <svg className="w-5 h-5 fill-[#25D366]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.776 0-3.517-.476-5.045-1.378l-.362-.214-3.75.983.999-3.657-.235-.374a9.98 9.98 0 01-1.503-5.279c0-5.516 4.487-10 10-10 2.673 0 5.186 1.041 7.076 2.93 1.89 1.889 2.93 4.403 2.93 7.076 0 5.517-4.488 10-10 10m0-18c-4.411 0-8 3.589-8 8 0 1.547.44 3.036 1.272 4.316l.169.26-.843 3.087 3.16-.828.256.152A7.962 7.962 0 0012.051 20c4.411 0 8-3.589 8-8s-3.589-8-8-8" />
        </svg>
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
