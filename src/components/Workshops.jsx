import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CheckCircle2, Calendar } from 'lucide-react';
export const Workshops = () => {
  return (
    <section id="workshops" className="py-16 md:py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            College Technical Training
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Workshops &amp; Practical Training
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Intensive hands-on technical workshops organized and attended through college to develop circuit prototyping
            and hardware skills.
          </p>
        </div>

        {/* Workshops Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.workshops.map((ws) => (
            <div
              key={ws.id}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-semibold tracking-wide bg-teal-50 text-teal-700 border border-teal-200/70 mb-2">
                      {ws.type}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">{ws.title}</h3>
                    <p className="text-sm font-medium text-slate-700 mt-0.5">{ws.organizer}</p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium shrink-0 pt-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{ws.period}</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600">
                  {ws.description.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Topics Tags */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {ws.keyTopics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-50 text-slate-700 border border-slate-200"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
