import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { NEWS_ARTICLES } from '../data/nriContent';
import CommunityBanner from './CommunityBanner';

export default function NewsSection({ setActivePage, onOpenBookingModal }) {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 reveal-fade-up">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full">
            NRI INSIGHTS & UPDATES
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Latest News & Articles
          </h1>
          <p className="text-sm text-slate-600 font-normal">
            Stay informed with expert advice on managing parent healthcare, legal land documentation, emergency response, and international express logistics in India.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="bg-[#FAF7F5] rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-emerald-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-3 text-xs text-slate-400 font-medium">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{article.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-normal">
                    {article.snippet}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenBookingModal}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-600 group-hover:underline"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
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
