import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, ShieldCheck, CreditCard, Lock } from 'lucide-react';
import { CONTACT_INFO, SERVICES_CATALOG } from '../data/nriContent';

export default function Footer({ setActivePage, setLegalTab }) {
  return (
    <footer className="bg-[#0B0F19] text-slate-400 pt-20 pb-12 border-t border-slate-800/80 font-sans tracking-wide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Footer Top: Advisory CTA & Trust Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80 items-center">

          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-950/50 px-3.5 py-1 rounded-full border border-emerald-800/50">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Secure Platform</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
              Ready to secure peace of mind for parents in India?
            </h3>
            <p className="text-sm text-slate-400 font-normal leading-relaxed max-w-xl">
              Get in touch with an NRI Care Advisor today. We are available 24/7 to coordinate medical, property, or logistical support.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row items-center gap-4 w-full justify-end">
            <button
              onClick={() => { setActivePage('contact'); window.scrollTo(0, 0); }}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-xs shadow-md transition-all text-center flex items-center justify-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Contact NRI Advisory Desk</span>
            </button>

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold text-xs transition-all text-center flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Helpline</span>
            </a>
          </div>

        </div>

        {/* Footer Middle: Grid of Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Logo & Vitals */}
          <div className="lg:col-span-4 space-y-6">
            <button
              onClick={() => { setActivePage('home'); window.scrollTo(0, 0); }}
              className="flex items-center text-left focus:outline-none"
            >
              <img
                src="/assets/logo_footer.png"
                alt="NRI Connects"
                className="h-14 w-auto object-contain transition-transform hover:scale-102"
                onError={(e) => { e.target.onerror = null; e.target.src = "/logo.png"; }}
              />
            </button>
            <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-normal">
              NRI Connects provides physical parent health monitoring, geotagged plot inspections, legal documentation updates, and express homemade pickles courier dispatches.
            </p>

            {/* Helpline details in clean view */}
            <div className="space-y-2 text-xs">
              <span className="block text-slate-500 font-extrabold uppercase text-[9px] tracking-widest">Advisory Hotline</span>
              <p className="text-white font-bold flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{CONTACT_INFO.phone} (24/7 Global Desk)</span>
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest pb-1 border-b border-slate-800/80">Company</h4>
            <ul className="space-y-3 text-xs">
              <li>
                <button onClick={() => { setActivePage('home'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors flex items-center space-x-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('about'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors flex items-center space-x-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('gallery'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors flex items-center space-x-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Photo Gallery</span>
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('news'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors flex items-center space-x-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>News & Insights</span>
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('faq'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors flex items-center space-x-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>FAQs</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Primary Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest pb-1 border-b border-slate-800/80">Our Services</h4>
            <ul className="space-y-3 text-xs">
              {SERVICES_CATALOG.slice(0, 5).map((svc) => (
                <li key={svc.id}>
                  <button
                    onClick={() => { setActivePage('services'); window.scrollTo(0, 0); }}
                    className="hover:text-white transition-colors text-left flex items-center space-x-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{svc.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal and Office Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest pb-1 border-b border-slate-800/80">Legal & Compliance</h4>
            <ul className="space-y-3 text-xs">
              <li>
                <button onClick={() => { if (setLegalTab) setLegalTab('privacy'); setActivePage('legal'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors flex items-center space-x-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button onClick={() => { if (setLegalTab) setLegalTab('terms'); setActivePage('legal'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors flex items-center space-x-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Terms & Conditions</span>
                </button>
              </li>
              <li>
                <button onClick={() => { if (setLegalTab) setLegalTab('disclaimer'); setActivePage('legal'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors flex items-center space-x-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Legal Disclaimer</span>
                </button>
              </li>
            </ul>

            <div className="pt-2 text-xs space-y-1 leading-relaxed">
              <span className="block text-slate-500 font-extrabold uppercase text-[9px] tracking-widest">India Headquarters</span>
              <p className="text-slate-300 font-medium">{CONTACT_INFO.headquarters}</p>
            </div>
          </div>

        </div>

        {/* Footer Bottom: Socials, Copyright, Security seals */}
        <div className="border-t border-slate-800/80 pt-10 flex flex-col md:flex-row items-center justify-between text-xs gap-6">

          {/* Copyrights */}
          <div className="text-center md:text-left space-y-1">
            <p className="font-semibold">© {new Date().getFullYear()} NRI Connects. All rights reserved.</p>
            <p className="text-[15px] text-slate-500 font-normal">
              Crafted with precision for global Indian diaspora families.
            </p>
            <p className="text-[15px] text-slate-500 font-normal">
              Made with ❤️ by <a href="https://ofzen.in/" target="_blank" rel="noreferrer" className="text-white hover:underline hover:text-blue-600 font-bold">Ofzen</a>
            </p>
          </div>

          {/* Secure Payment Badges (Visa, MasterCard, PayPal, Stripe) */}
          <div className="flex items-center space-x-3 bg-slate-900/50 px-4 py-2 rounded-xl border border-slate-800/60 shadow-inner">
            <Lock className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
            <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mr-2 hidden sm:inline">Secure Payments</span>
            <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-bold">
              <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">Visa</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">MasterCard</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">PayPal</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">Stripe</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <a
              href={CONTACT_INFO.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-slate-900 hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center text-slate-400 shadow-md border border-slate-800/60"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={CONTACT_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-slate-900 hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center text-slate-400 shadow-md border border-slate-800/60"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={CONTACT_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-slate-900 hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center text-slate-400 shadow-md border border-slate-800/60"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
