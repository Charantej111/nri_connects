import React, { useState } from 'react';
import { Send, CheckCircle2, MapPin, Phone, Mail, Clock } from 'lucide-react';
import CommunityBanner from './CommunityBanner';
import CountryCodePicker from './CountryCodePicker';
import CustomSelect from './CustomSelect';
import { CONTACT_INFO } from '../data/nriContent';

const serviceOptions = [
  { value: 'Property Care', label: 'Property Care' },
  { value: 'Quick Medical Facility', label: 'Quick Medical Facility' },
  { value: 'Provision of Attendants', label: 'Provision of Attendants' },
  { value: 'Routine Health Exercise', label: 'Routine Health Exercise' },
  { value: 'House Maintenance', label: 'House Maintenance' },
  { value: 'Pensioners Assistance', label: 'Pensioners Assistance' },
  { value: 'Courier Services', label: 'Courier Services' },
  { value: 'Home Made Pickles', label: 'Home Made Pickles' },
  { value: 'Recreation and Outing', label: 'Recreation and Outing' },
  { value: 'Tours and Travels Abroad', label: 'Tours and Travels Abroad' },
  { value: 'Visa Assistance', label: 'Visa Assistance' }
];

export default function ContactSection({ setActivePage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+1',
    phone: '',
    serviceInterest: 'Property Care',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="py-20 sm:py-28 bg-[#FAF7F5] font-sans relative overflow-hidden" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal-fade-up">

        {/* Heading Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Get in{' '}
            <span className="relative inline-block text-slate-900">
              touch
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-500/50" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="6" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
            Have questions or need assistance? Our team is here to support you and your family. Reach out today.
          </p>
        </div>

        {/* Two-Column Grid: Map & Contact Info vs Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 grid-rows23 gap-12 items-stretch mb-20 relative">

          {/* Peeking Background Accents */}
          <div className="absolute -top-5 -right-5 w-64 h-64 bg-[#EBE5FF] rounded-[2.5rem] -z-10 pointer-events-none opacity-40 lg:opacity-100" />
          <div className="absolute -bottom-5 -left-5 w-64 h-64 bg-[#FFEBE6] rounded-[2.5rem] -z-10 pointer-events-none opacity-40 lg:opacity-100" />

          {/* Info Cards Container */}
          <div className="lg:col-span-5 bg-white/80 backdrop-blur-sm p-8 rounded-[2.5rem] border border-slate-200/60 shadow-lg space-y-6 flex-1 flex flex-col justify-center">

            <h2 className="text-2xl font-black text-slate-900 mb-2">Our Headquarters</h2>

            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Headquarters</h4>
                <p className="text-sm font-semibold text-slate-800 leading-snug mt-0.5">
                  {CONTACT_INFO.headquarters}
                </p>
              </div>
            </div>

            {/* USA Office */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">USA Office</h4>
                <p className="text-sm font-semibold text-slate-800 leading-snug mt-0.5">
                  {CONTACT_INFO.usaOffice}
                </p>
              </div>
            </div>

            {/* Call Details */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Helpline / Whatsapp</h4>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">
                  <a href={`tel:${CONTACT_INFO.phone}`} className="hover:underline hover:text-emerald-700 transition-colors">{CONTACT_INFO.phone}</a>
                </p>
              </div>
            </div>

            {/* Email Details */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Email Address</h4>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline hover:text-emerald-700 transition-colors">{CONTACT_INFO.email}</a>
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Support Hours</h4>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">
                  {CONTACT_INFO.workingHours}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column (lg:col-span-7): The Contact Form Card */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-[2.5rem] border border-slate-200/60 shadow-xl space-y-8 relative z-10 flex flex-col justify-center">

            {sent ? (
              <div className="bg-emerald-50 text-emerald-900 p-8 rounded-[2rem] border border-emerald-200 text-center space-y-3 animate-fadeIn my-auto">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-extrabold text-lg">Thank You! Your message has been received.</h4>
                <p className="text-s text-emerald-700">Our advisory team will reach out to you via WhatsApp / Email shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-s font-bold text-slate-800 tracking-wide">Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 text-s font-semibold focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-s font-bold text-slate-800 tracking-wide">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 text-s font-semibold focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all bg-white"
                    />
                  </div>
                </div>

                {/* Row 2: Phone and Service Interest */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-s font-bold text-slate-800 tracking-wide">Phone Number *</label>
                    <div className="relative flex border border-slate-200 rounded-2xl focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500 bg-white transition-all">
                      <CountryCodePicker
                        selected={formData.countryCode}
                        onChange={(val) => setFormData({ ...formData, countryCode: val })}
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-5 py-4 text-s font-semibold focus:outline-none bg-transparent rounded-r-2xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-s font-bold text-slate-800 tracking-wide">Interested Service *</label>
                    <CustomSelect
                      value={formData.serviceInterest}
                      onChange={(val) => setFormData({ ...formData, serviceInterest: val })}
                      options={serviceOptions}
                      placeholder="Select Service"
                    />
                  </div>
                </div>

                {/* Row 3: Message Textarea */}
                <div className="space-y-2">
                  <label className="block text-s font-bold text-slate-800 tracking-wide">Your Message / Inquiry *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us how we can support your family in India..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 text-s font-semibold focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all bg-white"
                  />
                </div>

                {/* Left Aligned Send Button */}
                <div className="pt-2 text-left">
                  <button
                    type="submit"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-s shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Send message
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Google Map location taken from nri connects website source details */}
          <div className="h-64 lg:col-span-12 row-span-1 sm:h-72 rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-200/60 relative">
            <iframe
              title="NRI Connects Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.406771831766!2d78.3653341!3d17.535809699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb933dbd41a7e9%3A0xc07b8a836ee6e187!2sNRI%20CONNECTS!5e0!3m2!1sen!2sin!4v1785516954341!5m2!1sen!2sin"
              className="w-full h-full border-none"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>

        {/* Webflow Leaf-Pattern CTA Banner */}
        <CommunityBanner
          title="Need immediate advisory support? Call our helpline"
          primaryBtnText="Call Support"
          primaryBtnAction={() => { window.location.href = "tel:+919885880017"; }}
          secondaryBtnText="Browse services"
          secondaryBtnAction={() => { setActivePage('services'); window.scrollTo(0, 0); }}
          variant="contact"
        />

      </div>
    </div>
  );
}
