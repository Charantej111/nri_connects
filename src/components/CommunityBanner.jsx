import React from 'react';

// LeafBranch draws a beautiful organic stem with symmetrical leaves.
const LeafBranch = ({ className }) => (
  <svg viewBox="0 0 120 120" className={`fill-current text-white pointer-events-none ${className}`}>
    <path d="M60 110 C60 80 30 50 10 60 C30 40 50 65 60 110 Z" />
    <path d="M60 110 C60 85 90 60 110 70 C90 50 70 75 60 110 Z" />
    <path d="M60 70 C60 40 35 20 15 30 C35 15 50 35 60 70 Z" />
    <path d="M60 70 C60 45 85 25 105 35 C85 15 70 35 60 70 Z" />
    <path d="M60 40 C60 15 40 0 25 10 C40 -5 50 15 60 40 Z" />
    <path d="M60 40 C60 20 80 5 95 15 C80 -5 70 15 60 40 Z" />
    <path d="M60 110 L60 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Circles/Bubbles for Gallery
const CirclesPattern = () => (
  <svg className="absolute inset-0 w-full h-full text-white pointer-events-none select-none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10%" cy="80%" r="90" className="opacity-[0.06] fill-current" />
    <circle cx="35%" cy="20%" r="60" className="opacity-[0.04] fill-current" />
    <circle cx="70%" cy="75%" r="120" className="opacity-[0.07] fill-current" />
    <circle cx="90%" cy="15%" r="80" className="opacity-[0.05] fill-current" />
  </svg>
);

// Geometrics for News/Blogs
const GeometricsPattern = () => (
  <svg className="absolute inset-0 w-full h-full text-white pointer-events-none select-none" xmlns="http://www.w3.org/2000/svg">
    <rect x="-40" y="20" width="120" height="120" rx="20" transform="rotate(45 40 80)" className="opacity-[0.06] stroke-white stroke-2 fill-none" />
    <rect x="40%" y="-30" width="90" height="90" rx="16" transform="rotate(15 400 20)" className="opacity-[0.04] stroke-white stroke-2 fill-none" />
    <rect x="75%" y="40" width="160" height="160" rx="28" transform="rotate(30 800 120)" className="opacity-[0.07] stroke-white stroke-2 fill-none" />
  </svg>
);

// Waves/Ribbons for Contact
const WavesPattern = () => (
  <svg className="absolute inset-0 w-full h-full text-white pointer-events-none select-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200" preserveAspectRatio="none">
    <path d="M0,60 Q250,140 500,60 T1000,60 L1000,200 L0,200 Z" className="opacity-[0.04] fill-current" />
    <path d="M0,100 Q300,40 600,120 T1000,100" stroke="currentColor" strokeWidth="3" fill="none" className="opacity-[0.07]" />
    <path d="M0,140 Q200,80 500,150 T1000,120" stroke="currentColor" strokeWidth="1.5" fill="none" className="opacity-[0.05]" />
  </svg>
);

export default function CommunityBanner({ 
  title = "Join our wonderful community today",
  primaryBtnText = "Browse plans",
  primaryBtnAction,
  secondaryBtnText = "Browse services",
  secondaryBtnAction,
  variant = "leaf" // "leaf", "gallery", "news", "contact"
}) {
  
  // Custom styling mappings per variant
  const styles = {
    leaf: {
      bg: "bg-gradient-to-r from-emerald-600 via-teal-700 to-emerald-800",
      pattern: (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <LeafBranch className="absolute -left-12 -bottom-16 w-80 h-80 opacity-[0.08] transform rotate-45" />
          <LeafBranch className="absolute left-1/4 -top-24 w-64 h-64 opacity-[0.05] transform -rotate-12" />
          <LeafBranch className="absolute right-1/3 -bottom-20 w-72 h-72 opacity-[0.06] transform rotate-90" />
          <LeafBranch className="absolute -right-16 -top-16 w-96 h-96 opacity-[0.09] transform -rotate-45" />
        </div>
      ),
      textBtn: "text-emerald-700"
    },
    gallery: {
      bg: "bg-gradient-to-r from-teal-600 to-[#0F766E]",
      pattern: <CirclesPattern />,
      textBtn: "text-teal-700"
    },
    news: {
      bg: "bg-gradient-to-r from-indigo-600 to-[#3730A3]",
      pattern: <GeometricsPattern />,
      textBtn: "text-indigo-700"
    },
    contact: {
      bg: "bg-gradient-to-r from-purple-700 to-[#5B21B6]",
      pattern: <WavesPattern />,
      textBtn: "text-purple-800"
    }
  };

  const currentStyle = styles[variant] || styles.leaf;

  return (
    <div className="max-w-6xl mx-auto px-4 mt-8">
      <div className={`relative rounded-3xl ${currentStyle.bg} text-white p-8 sm:p-12 shadow-xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6`}>
        
        {/* Render the specialized SVG watermark pattern */}
        {currentStyle.pattern}

        {/* Content on left */}
        <div className="space-y-2 z-10 text-center md:text-left max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display leading-tight">
            {title}
          </h2>
        </div>

        {/* Action Buttons on right */}
        <div className="flex flex-col sm:flex-row items-center gap-4 z-10 flex-shrink-0 w-full sm:w-auto">
          
          {primaryBtnText && (
            <button 
              onClick={primaryBtnAction}
              className={`w-full sm:w-auto bg-white ${currentStyle.textBtn} hover:bg-white/90 px-8 py-3.5 rounded-2xl text-sm font-extrabold transition-all shadow-sm text-center`}
            >
              {primaryBtnText}
            </button>
          )}

          {secondaryBtnText && (
            <button 
              onClick={secondaryBtnAction}
              className="w-full sm:w-auto border border-white/60 text-white hover:bg-white/10 px-8 py-3.5 rounded-2xl text-sm font-extrabold transition-all text-center"
            >
              {secondaryBtnText}
            </button>
          )}

        </div>

      </div>
    </div>
  );
}
