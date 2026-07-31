import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQS, CONTACT_INFO } from '../data/nriContent';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="py-20 lg:py-28 bg-[#FAF7F5] font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full">
            <HelpCircle className="w-4 h-4 text-emerald-700" />
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Got Questions?</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-slate-600 font-normal">
            Clear answers regarding emergency medical response, digital visit reports, payment options, and service guarantees for international NRIs.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between space-x-4 focus:outline-none hover:bg-emerald-50/60 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug font-display">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-emerald-600 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-fadeIn font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Helpline Box */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md text-center space-y-4">
          <h3 className="text-lg font-bold text-slate-900 font-display">Still have a specific question?</h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto font-normal">
            Our NRI customer support team is available 24/7 on WhatsApp and phone to assist you with customized plans for your family in India.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all flex items-center space-x-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call +91 988 588 0017</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
