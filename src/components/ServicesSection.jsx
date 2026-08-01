import React, { useState } from 'react';
import {
  Building2, HeartPulse, UserCheck, Activity, Wrench, FileCheck,
  PackageCheck, Utensils, Compass, Plane, FileText, ArrowRight
} from 'lucide-react';
import { SERVICES_CATALOG } from '../data/nriContent';
import { getAssetUrl } from '../utils/assets';

// Landing Page service card images (local _2 images uploaded by user)
const service2Photos = {
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
};

// Shift the focus of specific service images slightly downward to fit better
const getObjectPosition = (id) => {
  const positions = {
    'quick-medical-facility': 'center 30%',
    'provision-of-attendants': 'center 30%',
    'routine-health-exercise': 'center 30%',
    'house-maintenance': 'center 15%',
    'pensioners-assistance': 'center 30%',
    'home-made-pickles': 'center 30%',
    'recreation-and-outing': 'center 15%',
    'tours-and-travels-abroad': 'center 30%',
  };
  return positions[id] || 'center 50%';
};

export default function ServicesSection({ onSelectService, setActivePage, onOpenBookingModal }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'property', label: 'Property & Asset Care' },
    { id: 'healthcare', label: 'Healthcare & Elders' },
    { id: 'concierge', label: 'Logistics & Documentation' },
    { id: 'travel', label: 'Travel & Visa' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_CATALOG
    : SERVICES_CATALOG.filter(s => s.category === activeCategory);

  const getServiceIcon = (id) => {
    switch (id) {
      case 'property-care': return <Building2 className="w-5 h-5 text-[#EF531C]" />;
      case 'quick-medical-facility': return <HeartPulse className="w-5 h-5 text-[#EF531C]" />;
      case 'provision-of-attendants': return <UserCheck className="w-5 h-5 text-[#EF531C]" />;
      case 'routine-health-exercise': return <Activity className="w-5 h-5 text-[#EF531C]" />;
      case 'house-maintenance': return <Wrench className="w-5 h-5 text-[#EF531C]" />;
      case 'pensioners-assistance': return <FileCheck className="w-5 h-5 text-[#EF531C]" />;
      case 'courier-services': return <PackageCheck className="w-5 h-5 text-[#EF531C]" />;
      case 'home-made-pickles': return <Utensils className="w-5 h-5 text-[#EF531C]" />;
      case 'recreation-and-outing': return <Compass className="w-5 h-5 text-[#EF531C]" />;
      case 'tours-and-travels-abroad': return <Plane className="w-5 h-5 text-[#EF531C]" />;
      case 'visa-assistance': return <FileText className="w-5 h-5 text-[#EF531C]" />;
      default: return <Building2 className="w-5 h-5 text-[#EF531C]" />;
    }
  };

  const handleServiceClick = (svc) => {
    onSelectService(svc);
    setActivePage('service-detail');
    window.scrollTo(0, 0);
  };

  return (
    <section id="services-section" className="py-20 sm:py-28 bg-white relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-fade-up">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#EF531C] bg-[#FFF2EE] px-3.5 py-1.5 rounded-full">
            SENIOR CARE & PROPERTY SERVICES
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E2E50] tracking-tight leading-tight">
            We provide high quality{' '}
            <span className="relative inline-block text-[#EF531C]">
              care services
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#EF531C]/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q50 0 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-sm text-slate-600 font-normal">
            Select any service below to view full details, photo documentation, and book an appointment.
          </p>

          {/* Category Filter Pills (Touch Swipeable on Mobile) */}
          <div className="pt-3 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-2 px-4 sm:px-0 -mx-4 sm:mx-0 flex-nowrap sm:flex-wrap">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              const catBtnStyle = isSelected
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-[#F8FAFC] text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200/60';
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap flex-shrink-0 ${catBtnStyle}`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean Webflow Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((svc) => {
            const cardPhoto = service2Photos[svc.id] || svc.image;
            return (
              <div
                key={svc.id}
                id={`service-${svc.id}`}
                onClick={() => handleServiceClick(svc)}
                className="bg-white rounded-[2rem] overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between hover:-translate-y-1.5"
              >
                {/* Image Container with Icon Badge */}
                <div className="relative h-56 overflow-hidden m-3 rounded-[1.5rem]">
                  <img
                    src={cardPhoto}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: getObjectPosition(svc.id) }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = svc.image;
                    }}
                  />

                  <div className="absolute bottom-4 left-4 w-11 h-11 rounded-2xl bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center text-emerald-600">
                    {getServiceIcon(svc.id)}
                  </div>
                </div>

                {/* Minimalist Card Body */}
                <div className="p-6 pt-2 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-normal">
                      {svc.shortDesc}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center space-x-1.5 text-xs font-bold text-emerald-600 group-hover:underline">
                    <span>View service details & photos</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
