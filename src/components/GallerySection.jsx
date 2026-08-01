import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ShieldCheck, Sparkles, ZoomIn, X } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';
import CommunityBanner from './CommunityBanner';

export default function GallerySection({ setActivePage, onOpenBookingModal }) {
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Healthcare', 'Property', 'Elder Care', 'Documentation', 'Logistics'];

  const galleryItems = [
    {
      id: 'attendants',
      title: "Senior Attendant & Daily Companionship",
      category: "Elder Care",
      image: getAssetUrl('Provision of Attendants_1.jpg')
    },
    {
      id: 'property',
      title: "Geotagged Land & Boundary Audit",
      category: "Property",
      image: getAssetUrl('Property Care_1.jpg')
    },
    {
      id: 'exercise',
      title: "Routine Senior Vitals & Yoga Exercises",
      category: "Healthcare",
      image: getAssetUrl('Routine Health Exercise_1.jpg')
    },
    {
      id: 'medical',
      title: "24/7 SOS Rapid Medical Response",
      category: "Healthcare",
      image: getAssetUrl('Quick Medical Facility_1.jpeg')
    },
    {
      id: 'outing',
      title: "Guided Senior Pilgrimage Outing",
      category: "Elder Care",
      image: getAssetUrl('Recreation and Outing_1.png')
    },
    {
      id: 'pension',
      title: "Doorstep Jeevan Pramaan Filing",
      category: "Documentation",
      image: getAssetUrl('Pensioners Assistance_1.png')
    },
    {
      id: 'pickles',
      title: "Homemade Delicacies & Parcel Packing",
      category: "Logistics",
      image: getAssetUrl('Home Made Pickles_1.png')
    },
    {
      id: 'maintenance',
      title: "In-Home Repairs & Plumbing Checks",
      category: "Property",
      image: getAssetUrl('House Maintenance_1.png')
    }
  ];

  // Lock body scroll and listen for Escape key when lightbox modal is active
  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setSelectedImg(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedImg]);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="py-16 sm:py-24 bg-[#FAF7F5] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Category Pills Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/70 pb-6 reveal-fade-up">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-emerald-800 bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-200/50 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span>Our Gallery</span>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isCatActive = activeCategory === cat;
              const filterBtnStyle = isCatActive
                ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20 scale-[1.02]'
                : 'bg-white text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200/80 hover:border-emerald-200';
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 transform active:scale-95 ${filterBtnStyle}`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Reference Layout Grid matching uploaded image */}
        {activeCategory === 'All' ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">

            {/* LEFT SECTION (Col Span 6): Text Block Top + 2-Column Photo Collage Bottom */}
            <div className="md:col-span-6 flex flex-col justify-between space-y-6">

              {/* Animated Text Block (Requested Content) */}
              <div className="pt-2 pr-2 space-y-3 reveal-fade-up">
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-display font-medium text-slate-800 leading-[1.35] tracking-tight">
                  At <span className="font-semibold text-emerald-800">NRI Connects</span>, we care for what matters most:{' '}
                  <span className="font-serif-luxury italic text-emerald-800 font-semibold">your loved ones</span>.
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  From dedicated parent healthcare to trusted on-ground support, we're here to help you stay connected and worry less, no matter where you are in the world.
                </p>
                <p className="font-cursive text-emerald-600 text-2xl sm:text-3xl font-normal pt-1">
                  Because family is always worth caring for.
                </p>
              </div>

              {/* Bottom-Left 2-Column Photos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">

                {/* Photo 1: Far-Left Tall Portrait */}
                <div
                  onClick={() => setSelectedImg(galleryItems[0])}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-emerald-950/15 hover:-translate-y-1.5 transition-all duration-500 group cursor-pointer border border-slate-200/70 relative h-[360px] sm:h-[400px] reveal-fade-up"
                >
                  <img
                    src={galleryItems[0].image}
                    alt={galleryItems[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cubic-bezier(0.16,1,0.3,1)"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {galleryItems[0].category}
                    </span>
                    <p className="text-white text-xs font-semibold leading-snug transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {galleryItems[0].title}
                    </p>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                    <ZoomIn className="w-4 h-4 text-emerald-700" />
                  </div>
                </div>

                {/* Center-Left Stacked Photos (Photo 2 & Photo 3) */}
                <div className="flex flex-col gap-5">
                  {/* Photo 2 (Top) */}
                  <div
                    onClick={() => setSelectedImg(galleryItems[1])}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-emerald-950/15 hover:-translate-y-1.5 transition-all duration-500 group cursor-pointer border border-slate-200/70 relative h-[170px] sm:h-[190px] reveal-fade-up"
                  >
                    <img
                      src={galleryItems[1].image}
                      alt={galleryItems[1].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cubic-bezier(0.16,1,0.3,1)"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        {galleryItems[1].category}
                      </span>
                      <p className="text-white text-xs font-semibold leading-snug transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {galleryItems[1].title}
                      </p>
                    </div>
                    <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur-md text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                      <ZoomIn className="w-3.5 h-3.5 text-emerald-700" />
                    </div>
                  </div>

                  {/* Photo 3 (Bottom) */}
                  <div
                    onClick={() => setSelectedImg(galleryItems[2])}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-emerald-950/15 hover:-translate-y-1.5 transition-all duration-500 group cursor-pointer border border-slate-200/70 relative h-[170px] sm:h-[190px] reveal-fade-up"
                  >
                    <img
                      src={galleryItems[2].image}
                      alt={galleryItems[2].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cubic-bezier(0.16,1,0.3,1)"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        {galleryItems[2].category}
                      </span>
                      <p className="text-white text-xs font-semibold leading-snug transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {galleryItems[2].title}
                      </p>
                    </div>
                    <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur-md text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                      <ZoomIn className="w-3.5 h-3.5 text-emerald-700" />
                    </div>
                  </div>
                </div>

              </div>

            </div>


            {/* RIGHT SECTION (Col Span 6): Photo 4 (Tall), Photo 5 (Tall), and Photo 6 (Bottom Landscape) */}
            <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">

              {/* Photo 4: Tall Center-Right Portrait (Aligned top with text block) */}
              <div
                onClick={() => setSelectedImg(galleryItems[3])}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-emerald-950/15 hover:-translate-y-1.5 transition-all duration-500 group cursor-pointer border border-slate-200/70 relative h-[420px] sm:h-[480px] reveal-fade-up"
              >
                <img
                  src={galleryItems[3].image}
                  alt={galleryItems[3].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cubic-bezier(0.16,1,0.3,1)"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {galleryItems[3].category}
                  </span>
                  <p className="text-white text-xs font-semibold leading-snug transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {galleryItems[3].title}
                  </p>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                  <ZoomIn className="w-4 h-4 text-emerald-700" />
                </div>
              </div>

              {/* Photo 5: Tall Far-Right Portrait (Offset top or aligned top) */}
              <div
                onClick={() => setSelectedImg(galleryItems[4])}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-emerald-950/15 hover:-translate-y-1.5 transition-all duration-500 group cursor-pointer border border-slate-200/70 relative h-[360px] sm:h-[400px] sm:mt-6 reveal-fade-up"
              >
                <img
                  src={galleryItems[4].image}
                  alt={galleryItems[4].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cubic-bezier(0.16,1,0.3,1)"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {galleryItems[4].category}
                  </span>
                  <p className="text-white text-xs font-semibold leading-snug transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {galleryItems[4].title}
                  </p>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                  <ZoomIn className="w-4 h-4 text-emerald-700" />
                </div>
              </div>

              {/* Photo 6: Bottom Right Landscape (Spans across bottom right under Photo 4 & 5) */}
              <div
                onClick={() => setSelectedImg(galleryItems[5])}
                className="sm:col-span-2 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-emerald-950/15 hover:-translate-y-1.5 transition-all duration-500 group cursor-pointer border border-slate-200/70 relative h-[180px] sm:h-[210px] reveal-fade-up"
              >
                <img
                  src={galleryItems[5].image}
                  alt={galleryItems[5].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cubic-bezier(0.16,1,0.3,1)"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {galleryItems[5].category}
                  </span>
                  <p className="text-white text-xs font-semibold leading-snug transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {galleryItems[5].title}
                  </p>
                </div>


                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                  <ZoomIn className="w-4 h-4 text-emerald-700" />
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* Filtered Category Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedImg(item)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-emerald-950/15 hover:-translate-y-1.5 transition-all duration-500 group cursor-pointer border border-slate-200/80 relative h-72 animate-fadeIn"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cubic-bezier(0.16,1,0.3,1)"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-semibold text-white mt-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                  <ZoomIn className="w-4 h-4 text-emerald-700" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Community / CTA Banner */}
        <CommunityBanner
          title="See how we care for your parents & assets in India"
          primaryBtnText="Book Consultation"
          primaryBtnAction={onOpenBookingModal}
          secondaryBtnText="Browse services"
          secondaryBtnAction={() => { setActivePage('services'); window.scrollTo(0, 0); }}
          variant="gallery"
        />

        {/* Lightbox Modal Rendered via Portal directly to document.body to prevent layout distortion */}
        {selectedImg && createPortal(
          <div
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[9999] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          >
            <div
              className="max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl space-y-4 p-4 sm:p-6 transform transition-all duration-300 animate-fadeIn relative"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative group overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={selectedImg.image}
                  alt={selectedImg.title}
                  className="w-full h-[320px] sm:h-[450px] object-cover rounded-2xl"
                />
                <button
                  onClick={() => setSelectedImg(null)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors shadow-lg"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100/80">
                    {selectedImg.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mt-2">{selectedImg.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedImg(null)}
                  className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-semibold text-xs transition-all shadow-md shadow-emerald-700/20 self-start sm:self-auto"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}

      </div>
    </div>
  );
}


