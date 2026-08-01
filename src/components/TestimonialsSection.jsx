import React, { useState, useEffect } from 'react';
import { Star, Quote, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/nriContent';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Touch Swipe state for mobile
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const minSwipeDistance = 40; // px threshold to trigger swipe

  // Auto-play timer for sliding testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 300);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchEndX(0);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const activeTestimonial = TESTIMONIALS[activeIndex];

  // Helper to extract initials from name
  const getInitials = (name) => {
    if (!name) return "";
    return name
      .split(' ')
      .filter(n => n.length > 0 && n !== '&')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F5] relative font-sans overflow-hidden">
      
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 reveal-fade-up">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Real NRI Stories
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            What NRIs Around the World Say
          </h2>
          <p className="text-sm text-slate-600 font-normal">
            Hear from children living in the US, UK, UAE, and Canada who rely on NRI Connects for parent care and asset protection in India.
          </p>
        </div>

        {/* Testimonials Interactive Carousel Block */}
        <div className="relative flex items-center justify-between">
          
          {/* Desktop Previous Arrow Button */}
          <button
            onClick={handlePrev}
            className="hidden md:flex w-12 h-12 rounded-full bg-white hover:bg-emerald-600 hover:text-white text-slate-600 border border-slate-200/80 shadow-md flex-shrink-0 items-center justify-center transition-all hover:scale-105"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Testimonial Active Display Card with Touch Swipe Support */}
          <div className="w-full md:mx-6 max-w-3xl mx-auto">
            <div 
              key={activeIndex}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className={`bg-white p-6 sm:p-12 rounded-3xl sm:rounded-[2.5rem] border border-slate-200/85 shadow-lg relative min-h-[280px] sm:min-h-[300px] flex flex-col justify-between transition-all duration-500 ease-out transform select-none touch-pan-y cursor-grab active:cursor-grabbing ${
                isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100 animate-fadeIn'
              }`}
            >
              {/* Large quote watermark */}
              <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-600/10 absolute top-6 right-6 sm:top-8 sm:right-8 pointer-events-none" />

              <div className="space-y-4 sm:space-y-6">
                
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed font-semibold italic">
                  "{activeTestimonial.quote}"
                </p>
              </div>

              {/* Author Info Block */}
              <div className="flex items-center space-x-4 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-100">
                
                {/* Initials Circle Placeholder */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-100 text-emerald-700 font-extrabold text-xs sm:text-sm flex items-center justify-center border border-emerald-200 shadow-inner flex-shrink-0">
                  {getInitials(activeTestimonial.name)}
                </div>

                <div className="text-left min-w-0 flex-1">
                  <h4 className="text-sm sm:text-base font-extrabold text-slate-900 leading-none">
                    {activeTestimonial.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-bold mt-1 truncate">
                    {activeTestimonial.role}
                  </p>
                  <span className="inline-flex items-center space-x-1 text-[10px] text-emerald-700 font-extrabold mt-0.5 sm:mt-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span className="truncate">Parent Care in {activeTestimonial.city}, India</span>
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* Desktop Next Arrow Button */}
          <button
            onClick={handleNext}
            className="hidden md:flex w-12 h-12 rounded-full bg-white hover:bg-emerald-600 hover:text-white text-slate-600 border border-slate-200/80 shadow-md flex-shrink-0 items-center justify-center transition-all hover:scale-105"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Carousel Indicators / Mobile Swiper Controls */}
        <div className="flex items-center justify-center space-x-3 pt-2">
          {/* Mobile Prev Button */}
          <button
            onClick={handlePrev}
            className="md:hidden w-8 h-8 rounded-full bg-white text-slate-600 border border-slate-200 shadow-sm flex items-center justify-center active:scale-95 transition-transform"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Indicators */}
          <div className="flex items-center space-x-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveIndex(idx);
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-8 bg-emerald-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to Testimonial Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Mobile Next Button */}
          <button
            onClick={handleNext}
            className="md:hidden w-8 h-8 rounded-full bg-white text-slate-600 border border-slate-200 shadow-sm flex items-center justify-center active:scale-95 transition-transform"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
