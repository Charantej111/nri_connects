import React, { useState } from 'react';
import { MapPin, ZoomIn } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/nriContent';
import CommunityBanner from './CommunityBanner';

export default function GallerySection({ setActivePage, onOpenBookingModal }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  const categories = ['All', 'Healthcare', 'Property', 'Outings', 'Documentation', 'Food'];

  const filteredGallery = activeCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <div className="py-24 sm:py-32 bg-[#FAF7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 reveal-fade-up">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full">
            REAL VISIT PROOF GALLERY
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Care & Inspection Photo Gallery
          </h1>
          <p className="text-sm text-slate-600 font-normal">
            Authentic snapshots from physical plot inspections, home nurse health checkups, doorstep life certificate filing, and senior outings across India.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${activeCategory === cat
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-emerald-50 border border-slate-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Crossfades on category change using key-binding */}
        <div key={activeCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImg(item)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-1.5 relative duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-emerald-700 text-[11px] font-extrabold px-3 py-1 rounded-full shadow">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <h3 className="text-base font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-xs text-amber-300">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow duration-300">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Webflow Leaf-Pattern CTA Banner */}
        <CommunityBanner
          title="See how we care for your parents in India"
          primaryBtnText="Book Consultation"
          primaryBtnAction={onOpenBookingModal}
          secondaryBtnText="Browse services"
          secondaryBtnAction={() => { setActivePage('services'); window.scrollTo(0, 0); }}
          variant="gallery"
        />

        {/* Lightbox Modal with Entry Animation */}
        {selectedImg && (
          <div
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          >
            <div className="max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl space-y-4 p-4 transform scale-100 transition-transform duration-300" onClick={e => e.stopPropagation()}>
              <img src={selectedImg.image} alt={selectedImg.title} className="w-full h-[400px] object-cover rounded-2xl" />
              <div className="px-2 space-y-1">
                <h3 className="text-xl font-bold text-slate-900">{selectedImg.title}</h3>
                <p className="text-xs font-semibold text-emerald-700">{selectedImg.location} • {selectedImg.category}</p>
              </div>
              <button
                onClick={() => setSelectedImg(null)}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl font-bold text-xs"
              >
                Close Preview
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
