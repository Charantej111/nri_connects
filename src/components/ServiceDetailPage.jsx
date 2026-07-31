import React, { useState } from 'react';
import { CheckCircle2, ArrowLeft, PhoneCall, Send } from 'lucide-react';
import { CONTACT_INFO, CITIES_SERVICED, SERVICES_CATALOG } from '../data/nriContent';
import CommunityBanner from './CommunityBanner';
import CountryCodePicker from './CountryCodePicker';
import CustomSelect from './CustomSelect';
import CustomDatePicker from './CustomDatePicker';

const cityOptions = CITIES_SERVICED.map(city => ({ value: city, label: city }));

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

export default function ServiceDetailPage({ service, setActivePage, onOpenBookingModal, onSelectService }) {
  if (!service) {
    return (
      <div className="pt-28 pb-20 text-center space-y-4 font-sans">
        <p className="text-sm text-slate-500">Service not found.</p>
        <button onClick={() => setActivePage('services')} className="text-xs font-bold text-emerald-600 hover:underline">
          Back to Services
        </button>
      </div>
    );
  }

  const currentIndex = SERVICES_CATALOG.findIndex(s => s.id === service.id);
  const prevService = currentIndex > 0 ? SERVICES_CATALOG[currentIndex - 1] : null;
  const nextService = currentIndex < SERVICES_CATALOG.length - 1 ? SERVICES_CATALOG[currentIndex + 1] : null;

  const navigateToService = (svc) => {
    if (onSelectService) {
      onSelectService(svc);
      window.scrollTo(0, 0);
    }
  };

  // Compact Appointment Form State
  const [form, setForm] = useState({
    name: '',
    email: '',
    countryCode: '+1',
    phone: '',
    city: 'Hyderabad & Cyberabad',
    preferredDate: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // PRIMARY Photo: local _2 images (used in landing page cards & detail page primary view)
  const primaryPhotos = {
    'property-care': '/assets/Property Care_2.png',
    'quick-medical-facility': '/assets/Quick Medical Facility_2.png',
    'provision-of-attendants': '/assets/Provision Of Attendants_2.png',
    'routine-health-exercise': '/assets/Routine Health Exercise_2.png',
    'house-maintenance': '/assets/House Maintenance_2.png',
    'pensioners-assistance': '/assets/Pensioners Assistance_2.png',
    'courier-services': '/assets/Courier Services_2.png',
    'home-made-pickles': '/assets/Home Made Pickles_2.png',
    'recreation-and-outing': '/assets/Recreation and Outing_2.png',
    'tours-and-travels-abroad': '/assets/Tours and Travels Abroad_2.png',
    'visa-assistance': '/assets/Visa Assistance_2.png',
  };

  // SECONDARY Photo: local _1 images (on-ground field execution photos)
  const secondaryPhotos = {
    'property-care': '/assets/Property Care_1.jpg',
    'quick-medical-facility': '/assets/Quick Medical Facility_1.jpeg',
    'provision-of-attendants': '/assets/Provision of Attendants_1.jpg',
    'routine-health-exercise': '/assets/Routine Health Exercise_1.jpg',
    'house-maintenance': '/assets/House Maintenance_1.png',
    'pensioners-assistance': '/assets/Pensioners Assistance_1.png',
    'courier-services': '/assets/Courier Services_1.jpg',
    'home-made-pickles': '/assets/Home Made Pickles_1.png',
    'recreation-and-outing': '/assets/Recreation and Outing_1.png',
    'tours-and-travels-abroad': '/assets/Tours and Travels Abroad_1.png',
    'visa-assistance': '/assets/Visa Assistance_1.jpg',
  };

  const primaryPhoto = primaryPhotos[service.id] || service.image;
  const secondPhoto = secondaryPhotos[service.id] || '/logo.png';

  return (
    <div className="pt-28 pb-20 bg-[#FAF7F5] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Navigation & Clean Header */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <button
              onClick={() => { setActivePage('services'); window.scrollTo(0, 0); }}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-800 hover:text-emerald-700 transition-colors bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm self-start"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Services</span>
            </button>

            {/* Quick Switcher Between Services */}
            <div className="flex items-center space-x-2">
              <button
                disabled={!prevService}
                onClick={() => navigateToService(prevService)}
                className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full border text-xs font-bold transition-all shadow-sm ${prevService
                  ? 'bg-white border-slate-200 text-slate-800 hover:text-emerald-700 hover:border-emerald-700/30'
                  : 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed'
                  }`}
              >
                <span>&larr; Prev Service</span>
              </button>
              <button
                disabled={!nextService}
                onClick={() => navigateToService(nextService)}
                className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full border text-xs font-bold transition-all shadow-sm ${nextService
                  ? 'bg-white border-slate-200 text-slate-800 hover:text-emerald-700 hover:border-emerald-700/30'
                  : 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed'
                  }`}
              >
                <span>Next Service &rarr;</span>
              </button>
            </div>
          </div>

          {/* Clean Title Block */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-2">
            <div className="flex items-center space-x-3">
              <span className="bg-emerald-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                {service.badge}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {service.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-3xl leading-relaxed">
              {service.shortDesc}
            </p>
          </div>
        </div>

        {/* Main Content Layout: Stacked Photos (NOT side-by-side) & Content vs Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Stacked Content & Photos */}
          <div className="lg:col-span-7 space-y-8">

            {/* STACKED PHOTO 1 (Primary View - _2 image) */}
            <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-sm border border-slate-200">
              <img
                src={primaryPhoto}
                alt={`${service.title} Primary View`}
                className="w-full h-full object-cover"
                style={{ objectPosition: getObjectPosition(service.id) }}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80'; }}
              />
            </div>

            {/* Service Description */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-3">
              <h3 className="text-lg font-bold text-slate-900">Service Overview</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {service.detailedDescription}
              </p>
            </div>

            {/* Inclusions */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-3">
              <h3 className="text-lg font-bold text-slate-900">Key Highlights & Inclusions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs font-semibold text-slate-800 bg-[#FAF7F5] p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* STACKED PHOTO 2 (On-Ground Field Execution Photo - Separated vertically) */}
            <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-sm border border-slate-200">
              <img
                src={secondPhoto}
                alt={`${service.title} Field Execution View`}
                className="w-full h-full object-cover"
                style={{ objectPosition: getObjectPosition(service.id) }}
              />
              <span className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-lg">

              </span>
            </div>

            {/* Workflow Steps */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-3">
              <h3 className="text-lg font-bold text-slate-900">Execution Workflow</h3>
              <div className="space-y-2">
                {service.workflow.map((step, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3 rounded-xl bg-[#FAF7F5] border border-slate-100">
                    <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </div>
                    <span className="text-xs font-semibold text-slate-800">{step}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Compact Appointment Form */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/80 shadow-md space-y-4 max-w-md mx-auto">

              <div>

                <h3 className="text-lg font-extrabold text-slate-900 mt-1">
                  Book Appointment
                </h3>
                <p className="text-[11px] text-slate-500">
                  Schedule consultation or service visit for {service.title}.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 text-emerald-900 p-4 rounded-2xl border border-emerald-200 text-center space-y-2 animate-fadeIn">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-xs">Appointment Request Sent!</h4>
                  <p className="text-[11px] text-emerald-800">
                    Our team will contact you at {form.countryCode} {form.phone} within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[11px] font-bold text-emerald-600 underline pt-1"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleAppointmentSubmit} className="space-y-3">

                  <div>
                    <label className="block text-[11px] font-bold text-slate-800 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Reddy"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-800 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  {/* Phone with Country Code Flag Selector */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-800 mb-1">Phone / WhatsApp *</label>
                    <div className="relative flex border border-slate-200 rounded-xl focus-within:border-emerald-500">
                      <CountryCodePicker
                        selected={form.countryCode}
                        onChange={(val) => setForm({ ...form, countryCode: val })}
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-3 py-2 text-xs font-semibold focus:outline-none rounded-r-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-800 mb-1">City in India *</label>
                      <CustomSelect
                        value={form.city}
                        onChange={(val) => setForm({ ...form, city: val })}
                        options={cityOptions}
                        placeholder="Select City"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-800 mb-1">Preferred Date</label>
                      <CustomDatePicker
                        value={form.preferredDate}
                        onChange={(val) => setForm({ ...form, preferredDate: val })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-800 mb-1">Special Requirements</label>
                    <textarea
                      rows={2}
                      placeholder="Specify address or medical needs..."
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold text-xs shadow-sm transition-all flex items-center justify-center space-x-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Appointment Request</span>
                  </button>

                  <div className="text-center pt-1">
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-[11px] font-bold text-emerald-600 hover:underline inline-flex items-center space-x-1"
                    >
                      <PhoneCall className="w-3 h-3 text-emerald-600" />
                      <span>Helpline: {CONTACT_INFO.phone}</span>
                    </a>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* Webflow Leaf-Pattern CTA Banner */}
        <CommunityBanner
          title={`Ready to start premium care for ${service.title}?`}
          primaryBtnText="Request Consultation"
          primaryBtnAction={onOpenBookingModal}
          secondaryBtnText="Explore other services"
          secondaryBtnAction={() => { setActivePage('services'); window.scrollTo(0, 0); }}
        />

      </div>
    </div>
  );
}
