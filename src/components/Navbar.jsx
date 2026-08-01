import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight, ShieldCheck, HeartHandshake, PhoneCall } from 'lucide-react';
import { SERVICES_CATALOG, CONTACT_INFO } from '../data/nriContent';
import { getAssetUrl } from '../utils/assets';

export default function Navbar({ activePage, setActivePage, onOpenBookingModal, onSelectService }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
  ];

  const secondaryNavItems = [
    { id: 'gallery', label: 'Gallery' },
    { id: 'news', label: 'News' },
    { id: 'contact', label: 'Contact' },
    { id: 'payment', label: 'Pay Online' },
  ];

  const handleServiceClick = (svc) => {
    onSelectService(svc);
    setActivePage('service-detail');
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans">
      <nav className={`transition-all duration-300 border-b border-slate-100 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-1' : 'bg-white py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <button
              onClick={() => { setActivePage('home'); window.scrollTo(0, 0); }}
              className="flex items-center text-left focus:outline-none flex-shrink-0"
            >
              <img
                src={getAssetUrl('logo.png')}
                alt="NRI Connects Logo"
                className="h-16 sm:h-20 lg:h-[56px] w-auto max-w-[280px] object-contain transition-transform hover:scale-105"
              />
            </button>

            {/* Menu Links with dynamic Services Hover Dropdown */}
            <div className="hidden lg:flex items-center space-x-1 flex-shrink-0">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setActivePage(item.id); window.scrollTo(0, 0); }}
                  className={`px-3.5 py-1.5 rounded-full text-s font-bold transition-all ${activePage === item.id
                    ? 'text-emerald-700 '
                    : 'text-slate-700 hover:text-emerald-700'
                    }`}
                >
                  {item.label}
                </button>
              ))}

              {/* SERVICES DROPDOWN (Hover Triggered) */}
              <div className="relative group py-1.5 px-3.5">
                <button
                  onClick={() => { setActivePage('services'); window.scrollTo(0, 0); }}
                  className={`flex items-center space-x-1 text-s font-bold transition-all ${activePage === 'services' || activePage === 'service-detail'
                    ? 'text-emerald-700'
                    : 'text-slate-700 hover:text-emerald-700'
                    }`}
                >
                  <span>Services</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* 2-Column Glassmorphic Dropdown Panel */}
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[540px] bg-white/95 backdrop-blur-md border border-slate-100 shadow-2xl rounded-2xl p-5 grid grid-cols-2 gap-x-6 gap-y-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">

                  {SERVICES_CATALOG.map((svc) => (
                    <button
                      key={svc.id}
                      onClick={() => handleServiceClick(svc)}
                      className="text-left px-3 py-2 rounded-xl text-s font-bold text-slate-700 hover: hover:text-emerald-700 transition-colors"
                    >
                      {svc.title}
                    </button>
                  ))}
                </div>
              </div>

              {secondaryNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setActivePage(item.id); window.scrollTo(0, 0); }}
                  className={`px-3.5 py-1.5 rounded-full text-s font-bold transition-all ${activePage === item.id
                    ? 'text-emerald-700 '
                    : 'text-slate-700 hover:text-emerald-700'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Login, Sign Up & Book CTA */}
            <div className="hidden lg:flex items-center space-x-2.5 flex-shrink-0">
              <button
                onClick={() => { setActivePage('login'); window.scrollTo(0, 0); }}
                className="px-4 py-2 border border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-600 transition-colors rounded-full text-xs font-bold whitespace-nowrap"
              >
                Login
              </button>

              <button
                onClick={() => { setActivePage('signup'); window.scrollTo(0, 0); }}
                className=" text-emerald-700 hover:bg-emerald-100 px-4 py-2 rounded-full text-xs font-bold transition-colors whitespace-nowrap"
              >
                Sign Up
              </button>

              <button
                onClick={onOpenBookingModal}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-md transition-all whitespace-nowrap"
              >
                Book Consultation
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={onOpenBookingModal}
                className="bg-emerald-600 text-white px-3 py-1.5 rounded-full font-bold text-xs shadow-sm"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-xl text-slate-700 hover:bg-slate-100"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 space-y-1.5 mt-1 shadow-xl animate-fadeIn max-h-[85vh] overflow-y-auto custom-scrollbar">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${activePage === item.id
                  ? 'bg-emerald-700 text-white'
                  : 'text-slate-700 hover:bg-slate-50'
                  }`}
              >
                {item.label}
              </button>
            ))}

            {/* Collapsible Mobile Services Dropdown (Desktop-Styled Panel) */}
            <div className="border-y border-slate-100 py-1">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${activePage === 'services' || activePage === 'service-detail'
                  ? 'text-emerald-700 '
                  : 'text-slate-700 hover:bg-slate-50'
                  }`}
              >
                <span className="flex items-center space-x-2">
                  <span>Services</span>
                  <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full border border-emerald-200/50">
                    {SERVICES_CATALOG.length}
                  </span>
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-emerald-700' : ''}`} />
              </button>

              {/* Desktop-Styled Mobile Dropdown Panel */}
              {mobileServicesOpen && (
                <div className="px-4 space-y-3 animate-fadeIn">

                  {/* Service Items Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                    {SERVICES_CATALOG.map((svc) => (
                      <button
                        key={svc.id}
                        onClick={() => handleServiceClick(svc)}
                        className="text-left px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-white hover: hover:text-emerald-700 transition-colors border border-slate-100 shadow-xs flex items-center justify-between"
                      >
                        <span>{svc.title}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                    ))}
                  </div>

                  {/* View All Footer Option */}
                  <button
                    onClick={() => {
                      setActivePage('services');
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                      window.scrollTo(0, 0);
                    }}
                    className="w-full text-center py-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-100/50 hover:bg-emerald-100 rounded-xl transition-colors block border border-emerald-200/50"
                  >
                    View All Services Catalog →
                  </button>
                </div>
              )}
            </div>

            {secondaryNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${activePage === item.id
                  ? 'bg-emerald-700 text-white'
                  : 'text-slate-700 hover:bg-slate-50'
                  }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-2.5 border-t border-slate-100 space-y-2">
              <button
                onClick={() => { setMobileMenuOpen(false); setActivePage('login'); }}
                className="w-full text-center py-2.5 border border-slate-200 text-slate-700 rounded-xl text-xs font-bold"
              >
                Login
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); setActivePage('signup'); }}
                className="w-full text-center py-2.5 bg-emerald-100 text-emerald-800 rounded-xl text-xs font-bold"
              >
                Sign Up
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBookingModal(); }}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl font-bold text-xs text-center shadow-sm"
              >
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
