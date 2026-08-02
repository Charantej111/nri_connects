import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, SERVICES_CATALOG } from '../data/nriContent';
import { getAssetUrl } from '../utils/assets';

// _2 images matched exactly to each service for the hero section
const heroService2Images = {
  'property-care': getAssetUrl('Property Care_2.png'),
  'quick-medical-facility': getAssetUrl('Quick Medical Facility_2.png'),
  'provision-of-attendants': getAssetUrl('Provision Of Attendants_2.png'),
  'routine-health-exercise': getAssetUrl('Routine Health Exercise_2.png'),
  'house-maintenance': getAssetUrl('House Maintenance_2.png'),
  'pensioners-assistance': getAssetUrl('Pensioners Assistance_2.png'),
  'courier-services': getAssetUrl('Courier Services_2.png'),
  'home-made-pickles': getAssetUrl('Home Made Pickles_2.png'),
  'recreation-and-outing': getAssetUrl('Recreation and Outing_2.png'),
  'tours-and-travels-abroad': getAssetUrl('Tours and Travels Abroad_2.png'),
  'visa-assistance': getAssetUrl('Visa Assistance_2.png'),
  'false-ceiling-installation-and-design': getAssetUrl('False Ceiling Installation_2.png'),
  'commercial-land-leasing': getAssetUrl('Commercial Land Leasing_2.png'),
  'site-preparation-and-grading': getAssetUrl('Site preparation and grading_2.png'),
};

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80';

export default function HeroSection({ setActivePage, onOpenBookingModal }) {

  // Build slide deck: all services with matched _2 images
  const slides = [
    ...SERVICES_CATALOG.map(service => ({
      id: service.id,
      badge: service.badge.toUpperCase(),
      title: service.title,
      desc: service.shortDesc,
      image: heroService2Images[service.id] || service.image,
      actionText: 'Learn More',
      targetPage: 'services',
    })),
  ];

  /*
   * slideCounter — ever-incrementing number, never loops back.
   * activeIdx  = slideCounter % slides.length  → current slide index
   * prevIdx    = (slideCounter - 1) % slides.length → exiting slide index
   *
   * The key trick: each time slideCounter increments, the active div gets a
   * NEW key ("enter-N"), so React unmounts & remounts it → CSS Ken Burns
   * animation restarts cleanly from scale(1) with every slide advance.
   */
  const [slideCounter, setSlideCounter] = useState(0);
  const [isInitialPhase, setIsInitialPhase] = useState(true); // first 2.5s landing anim
  const [loopActive, setLoopActive] = useState(false);

  const activeIdx = slideCounter % slides.length;
  const prevIdx = slideCounter > 0 ? (slideCounter - 1) % slides.length : null;

  // After 2.5 s the initial blur-in finishes → start the loop
  useEffect(() => {
    const t1 = setTimeout(() => setIsInitialPhase(false), 2500);
    const t2 = setTimeout(() => setLoopActive(true), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Advance every 5 s (matches Ken Burns animation duration)
  useEffect(() => {
    if (!loopActive) return;
    const timer = setInterval(() => setSlideCounter(c => c + 1), 5000);
    return () => clearInterval(timer);
  }, [loopActive]);

  const currentSlide = slides[activeIdx];

  // Wrap the last 2 words of every title in a purple curved-underline highlight
  const renderHighlightedTitle = (title) => {
    const words = title.split(' ');
    if (words.length <= 2) {
      return (
        <span className="relative inline-block text-white lg:text-slate-900">
          {title}
          <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-500 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
            <path d="M0,15 Q50,2 100,15" stroke="currentColor" strokeWidth="4.5" fill="none" />
          </svg>
        </span>
      );
    }
    const normalText = words.slice(0, words.length - 2).join(' ');
    const highlightedText = words.slice(words.length - 2).join(' ');
    return (
      <>
        {normalText}{' '}
        <span className="relative inline-block text-white lg:text-slate-900">
          {highlightedText}
          <svg className="absolute -bottom-2.5 left-0 w-full h-3 text-emerald-500" viewBox="0 0 100 20" preserveAspectRatio="none">
            <path d="M0,15 Q50,2 100,15" stroke="currentColor" strokeWidth="4.5" fill="none" />
          </svg>
        </span>
      </>
    );
  };

  // Text animation class: landing once, then cycle on every slide advance
  const textAnimClass = (slideCounter === 0 && isInitialPhase)
    ? 'animate-landing-text'
    : slideCounter > 0
      ? 'animate-cycle-text'
      : ''; // slideCounter=0, initial phase done → keep at full opacity

  return (
    <section className="relative pt-48 sm:pt-36 pb-20 sm:pb-36 bg-[#FAF7F5] overflow-hidden font-sans">
      {/* Premium subtle dotted pattern with smooth rightward fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-full lg:w-[55%] pointer-events-none opacity-[0.08] z-0 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to bottom right, black 60%, transparent 95%)',
          WebkitMaskImage: 'linear-gradient(to bottom right, black 60%, transparent 95%)'
        }}
      >
        <svg width="100%" height="100%">
          <pattern id="premium-hero-dots" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="1.8" fill="#10B981" />
            <circle cx="20" cy="20" r="1.8" fill="#059669" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#premium-hero-dots)" />
        </svg>
      </div>

      {/*
        ─── BACKGROUND IMAGE SLIDESHOW (Full-bleed Mobile & Soft-feathered Desktop Split) ──
        Two-layer Ken Burns + crossfade:
          • Layer A (Exit): the PREVIOUS slide fades out over 1.4 s
          • Layer B (Enter): the CURRENT slide fades in while slowly zooming
            from scale(1) → scale(1.1) over 5 s (Ken Burns)
        ──────────────────────────────────────────────────────────────────── */}
      <div className="absolute right-0 top-0 bottom-1 w-full lg:w-[62%] z-0 pointer-events-none overflow-hidden hero-desktop-mask">

        {/* Layer A — Exiting slide */}
        {slideCounter > 0 && prevIdx !== null && (
          <div
            key={`exit-${slideCounter}`}
            className="absolute inset-0 hero-slide-exit"
            style={{ zIndex: 10 }}
          >
            <img
              src={slides[prevIdx].image}
              alt="previous"
              className="w-full h-full object-cover object-[70%_center] lg:object-right"
              onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMG; }}
            />
          </div>
        )}

        {/* Layer B — Active slide */}
        <div
          key={slideCounter === 0 ? 'initial-slot' : `enter-${slideCounter}`}
          className={`absolute inset-0 ${isInitialPhase && slideCounter === 0 ? 'animate-landing-blur' : 'hero-slide-enter'}`}
          style={{ zIndex: 20 }}
        >
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="w-full h-full object-cover object-[70%_center] lg:object-right"
            onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMG; }}
          />
        </div>

        {/* Soft wide multi-stop left-edge gradient on desktop (Desktop only) */}
        <div
          className="absolute inset-y-0 left-0 bg-transparent lg:bg-gradient-to-r from-[#FAF7F5] via-30% via-[#FAF7F5]/45 to-transparent w-full lg:w-[280px] pointer-events-none hidden lg:block"
          style={{ zIndex: 30 }}
        />

        {/* Organic subtle SVG curve sweep overlay for dynamic, non-linear separation */}
        <svg
          className="absolute inset-y-0 -left-2 h-full w-44 text-[#FAF7F5] hidden lg:block pointer-events-none opacity-40"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          style={{ zIndex: 31 }}
        >
          <path d="M0,0 L100,0 Q30,50 100,100 L0,100 Z" fill="currentColor" />
        </svg>

        {/* Mobile Dark Contrast Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/60 to-slate-950/10 lg:hidden pointer-events-none" style={{ zIndex: 25 }} />
        {/* Bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#FAF7F5] to-transparent h-48 pointer-events-none" style={{ zIndex: 30 }} />
      </div>

      {/* ─── CONTENT ─────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto mt-20 md:mt-0 px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 sm:pb-12">

          {/* Left column text */}
          <div className="lg:col-span-6 pt-6 pb-4 flex flex-col justify-center text-center lg:text-left">
            <div
              key={slideCounter}
              className={`space-y-4 min-h-[250px] sm:min-h-[280px] flex flex-col justify-center text-center lg:text-left ${textAnimClass}`}
            >

              {/* Eyebrow Badge */}
              <div className="inline-block">
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100/90 border border-emerald-200/80 px-4 py-1.5 rounded-full shadow-sm">
                  {currentSlide.badge}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white lg:text-slate-900 tracking-tight leading-[1.15] font-display">
                {renderHighlightedTitle(currentSlide.title)}
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-100 lg:text-slate-600 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
                {currentSlide.desc}
              </p>

              {/* CTA & Slide Dots */}
              <div className="pt-1 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <button
                  onClick={() => { setActivePage(currentSlide.targetPage); window.scrollTo(0, 0); }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center space-x-2"
                >
                  <span>{currentSlide.actionText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Touch Slide Dots */}
                <div className="flex items-center justify-center space-x-1.5 pt-2 sm:pt-3">
                  {slides.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setSlideCounter(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${activeIdx === idx ? 'w-6 bg-emerald-500' : 'w-2 bg-white/60 lg:bg-slate-300 hover:bg-slate-400'
                        }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>

            {/* ─── CONTACT OVERLAY CARDS (Desktop version: ultra-compact, right under Learn More button) ─────────────────────── */}
            <div className="mt-3 hidden md:block">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-1.5 sm:p-2 shadow-md border border-slate-200/80 grid grid-cols-3 gap-1.5 max-w-md mx-auto lg:mx-0">

                {/* Call Us */}
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center space-x-2 p-1.5 rounded-lg hover:bg-emerald-50/80 transition-colors group min-w-0"
                >
                  <div className="w-7 h-7 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <h4 className="text-[11px] font-extrabold text-slate-900 font-display leading-tight">Call us</h4>
                    <p className="text-[10px] font-semibold text-slate-500 truncate">{CONTACT_INFO.phone}</p>
                  </div>
                </a>

                {/* Email Us */}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center space-x-2 p-1.5 rounded-lg hover:bg-emerald-50/80 transition-colors group border-x border-slate-100 min-w-0"
                >
                  <div className="w-7 h-7 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <h4 className="text-[11px] font-extrabold text-slate-900 font-display leading-tight">Email us</h4>
                    <p className="text-[10px] font-semibold text-slate-500 truncate">{CONTACT_INFO.email}</p>
                  </div>
                </a>

                {/* Visit Us */}
                <button
                  onClick={() => { setActivePage('contact'); window.scrollTo(0, 0); }}
                  className="flex items-center space-x-2 p-1.5 rounded-lg hover:bg-teal-50/80 transition-colors group text-left min-w-0"
                >
                  <div className="w-7 h-7 rounded-md bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <h4 className="text-[11px] font-extrabold text-slate-900 font-display leading-tight">Visit us</h4>
                    <p className="text-[10px] font-semibold text-slate-500 truncate">{CONTACT_INFO.headquarters}</p>
                  </div>
                </button>

              </div>
            </div>

          </div>

          {/* Right column spacer (image sits in absolute background panel on desktop) */}
          <div className="hidden lg:block lg:col-span-6 h-[400px]" />

        </div>

      </div>

      {/*
        Smooth curved wave divider — merges into the white ServicesSection below.
      */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none  pointer-events-none">
        <svg className="relative block w-full h-[50px] lg:h-[90px]" viewBox="0 0 1200 120" transform="matrix(-1,0,0,1,0,0)" preserveAspectRatio="none">
          <path d="M0,0 C400,180 850,20 1200,0 L1200,120 L0,120 Z" fill="#FFFFFF"></path>
        </svg>
      </div>

    </section>
  );
}
