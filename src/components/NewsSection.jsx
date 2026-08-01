import React from 'react';
import { ExternalLink } from 'lucide-react';
import { NEWS_ARTICLES } from '../data/nriContent';
import CommunityBanner from './CommunityBanner';

export default function NewsSection({ setActivePage, onOpenBookingModal }) {
  return (
    <div className="py-24 sm:py-32 bg-[#FAF7F5] font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 reveal-fade-up">

        {/* Header - Centered as per Reference Image */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            Latest News & Articles
          </h1>
          <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
            Curated elder care protocols, property protection insights, legal updates, and diaspora news for NRIs worldwide.
          </p>
        </div>

        {/* Stacked Newsletter Cards List - Matching Reference UI */}
        <div className="space-y-6">
          {NEWS_ARTICLES.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 group block text-left relative overflow-hidden"
            >
              {/* Meta Top Line: DATE & CATEGORY */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs sm:text-sm font-bold text-slate-500 tracking-wider">
                  {article.date}
                </span>

                <span className="bg-emerald-50 text-emerald-700 text-[10px] sm:text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider border border-emerald-100">
                  {article.category}
                </span>
              </div>

              {/* Article Title */}
              <h3 className="text-lg sm:text-2xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug font-display mb-3">
                {article.title}
              </h3>

              {/* Excerpt Snippet */}
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal mb-6">
                {article.snippet}
              </p>

              {/* Bottom Source & External Redirection Link */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-bold">
                <div className="flex items-center space-x-1.5 text-emerald-700 group-hover:text-emerald-800">
                  <span>Read full news on {article.source || 'Original News Source'}</span>
                  <ExternalLink className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <span className="text-slate-400 text-[11px] font-semibold">{article.readTime}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Webflow Leaf-Pattern CTA Banner */}
        <CommunityBanner
          title="Get the latest elder care insights & NRI updates"
          primaryBtnText="Speak to Advisor"
          primaryBtnAction={onOpenBookingModal}
          secondaryBtnText="Browse services"
          secondaryBtnAction={() => { setActivePage('services'); window.scrollTo(0, 0); }}
          variant="news"
        />

      </div>
    </div>
  );
}

