import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const COUNTRIES = [
  { code: '+91', iso: 'in', name: 'India' },
  { code: '+1', iso: 'us', name: 'United States' },
  { code: '+44', iso: 'gb', name: 'United Kingdom' },
  { code: '+971', iso: 'ae', name: 'UAE' },
  { code: '+61', iso: 'au', name: 'Australia' },
  { code: '+65', iso: 'sg', name: 'Singapore' },
  { code: '+1', iso: 'ca', name: 'Canada' }
];

export default function CountryCodePicker({ selected, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const current = COUNTRIES.find(c => c.code === selected) || COUNTRIES[0];

  const handleSelect = (code) => {
    onChange(code);
    setIsOpen(false);
  };

  return (
    <div className={`relative flex-shrink-0 ${isOpen ? 'z-50' : ''}`}>

      {/* Trigger Button showing graphical flag image + code */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="h-full bg-slate-50 hover:bg-slate-100/80 border-r rounded-l-2xl border-slate-200 px-3  flex items-center space-x-2 text-xs font-bold text-slate-800 transition-colors focus:outline-none select-none "
      >
        <img
          src={`https://flagcdn.com/w20/${current.iso}.png`}
          srcSet={`https://flagcdn.com/w40/${current.iso}.png 2x`}
          width="20"
          height="15"
          alt={current.name}
          className="rounded shadow-sm object-cover flex-shrink-0"
        />
        <span>{current.code}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Click Away Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-transparent"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Custom Dropdown Option Panel */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-52 bg-white border border-slate-100 shadow-2xl rounded-2xl p-1.5 z-[100] max-h-60 overflow-y-auto custom-scrollbar animate-fadeIn">
          {COUNTRIES.map((c, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelect(c.code)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-left text-xs font-semibold hover:bg-slate-50 transition-colors ${c.code === selected ? 'bg-emerald-50/60 text-emerald-700' : 'text-slate-700'
                }`}
            >
              <img
                src={`https://flagcdn.com/w20/${c.iso}.png`}
                srcSet={`https://flagcdn.com/w40/${c.iso}.png 2x`}
                width="20"
                height="15"
                alt={c.name}
                className="rounded shadow-sm object-cover flex-shrink-0"
              />
              <span className="w-10 font-bold">{c.code}</span>
              <span className="text-slate-400 truncate text-[11px] font-normal">{c.name}</span>
            </button>
          ))}
        </div>
      )}

    </div>
  );
}
