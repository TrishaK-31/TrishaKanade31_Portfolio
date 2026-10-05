import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, Check } from 'lucide-react';
export const Education = () => {
  return (
    <section id="education" className="py-16 md:py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Academic Background</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">Education</h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Formal engineering degree studies, specialized diplomas, and foundational academic achievements.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200/80 text-blue-600 shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">{edu.degree}</h3>
                    <p className="text-sm font-medium text-slate-700 mt-0.5">{edu.institution}</p>
                    {edu.details && (
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">{edu.details}</p>
                    )}
                  </div>
                </div>

                <div className="sm:text-right shrink-0 flex flex-col items-start sm:items-end gap-1.5">
                  <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200">
                    {edu.period}
                  </span>
                  {edu.scoreValue && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200/80">
                      <Award className="w-3.5 h-3.5 text-blue-600" />
                      <span>
                        {edu.scoreLabel}: <strong>{edu.scoreValue}</strong>
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {edu.highlights && edu.highlights.length > 0 && (
                <div className="mt-4 pt-4 border-t border-slate-100 sm:ml-12">
                  <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Key Highlights &amp; Activities
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                    {edu.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
