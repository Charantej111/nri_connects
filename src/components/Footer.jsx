import React from 'react';
import { MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { SERVICES_CATALOG, CONTACT_INFO } from '../data/nriContent';
import { getAssetUrl } from '../utils/assets';

export default function Footer({ setActivePage, setLegalTab, onSelectService }) {
  return (
    <footer className="bg-[#0B0F19] text-slate-400 pt-12 sm:pt-16 pb-10 sm:pb-12 border-t border-slate-800/80 font-sans tracking-wide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Footer Middle: Grid of Links & Corporate Vitals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">

          {/* Logo & Corporate Vitals */}
          <div className="lg:col-span-3 space-y-4">
            <button
              onClick={() => { setActivePage('home'); window.scrollTo(0, 0); }}
              className="flex items-center text-left focus:outline-none"
            >
              <img
                src={getAssetUrl('logo_footer.png')}
                alt={CONTACT_INFO.companyLegalName}
                className="h-12 w-auto object-contain transition-transform hover:scale-102"
              />
            </button>

            <div className="space-y-1.5">
              <span className="block text-[16px] font-bold text-emerald-400 uppercase tracking-wider">
                {CONTACT_INFO.companyLegalName}
              </span>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Every service at NRI Connects is tailored and manually managed by dedicated field officers. We deliver physical parent health check-ins, geotagged plot inspections, legal documentation, and doorstep logistics.
              </p>
            </div>

            {/* Helpline Details Card */}
            <div className="space-y-1 text-xs bg-slate-900/90 p-3.5 rounded-xl border border-slate-800/80">
              <span className="block text-slate-400 font-bold uppercase text-[9px] tracking-widest">24/7 Human Advisory Desk</span>
              <p className="text-white font-bold flex items-center space-x-2 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{CONTACT_INFO.phone}</span>
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest pb-1 border-b border-slate-800/80">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
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

          {/* Primary Services Column - Displays All 14 Services in 2 columns */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest pb-1 border-b border-slate-800/80">Our Services</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2 text-xs">
              {SERVICES_CATALOG.map((svc) => (
                <li key={svc.id}>
                  <button
                    onClick={() => {
                      if (onSelectService) onSelectService(svc);
                      setActivePage('service-detail');
                      window.scrollTo(0, 0);
                    }}
                    className="hover:text-white transition-colors text-left flex items-start space-x-1.5 group py-0.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1.5" />
                    <span className="leading-tight">{svc.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Headquarter & Legal Info Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest pb-1 border-b border-slate-800/80">Headquarters & Legal</h4>

            {/* Address Box */}
            <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80 space-y-2">
              <div className="flex items-start space-x-2 text-xs">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Corporate Office</span>
                  <p className="text-slate-200 font-medium text-xs leading-snug mt-0.5">{CONTACT_INFO.headquarters}</p>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <ul className="space-y-2 text-xs pt-1">
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

            {/* Social Links placed directly below Legal */}
            <div className="pt-2">
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Connect With Us</span>
              <div className="flex items-center space-x-3">
                <a
                  href={CONTACT_INFO.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-slate-900 hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center text-slate-400 shadow-md border border-slate-800/60"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href={CONTACT_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-slate-900 hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center text-slate-400 shadow-md border border-slate-800/60"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href={CONTACT_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-slate-900 hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center text-slate-400 shadow-md border border-slate-800/60"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Bottom: Copyright & Credits */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-3">
          <p className="font-semibold text-slate-300 text-center sm:text-left">
            © {new Date().getFullYear()} {CONTACT_INFO.companyLegalName}. All rights reserved.
          </p>
          <p className="text-[11px] text-slate-400 font-normal text-center sm:text-right">
            Made with ❤️ by{' '}
            <a
              href="https://ofzen.in/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:underline hover:text-emerald-400 font-bold transition-colors"
            >
              Ofzen
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}

