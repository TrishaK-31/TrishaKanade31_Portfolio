import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Calendar, CheckCircle2 } from 'lucide-react';
export const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Professional Background</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Internships &amp; Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Professional industry internship engagements in PCB designing, digital communications, and project outreach.
          </p>
        </div>

        {/* Experience Cards / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.experience.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-semibold tracking-wide bg-blue-50 text-blue-700 border border-blue-200/60 mb-2">
                      {exp.type}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">{exp.role}</h3>
                    <p className="text-sm font-medium text-slate-700 mt-0.5">{exp.organization}</p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium shrink-0 pt-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600">
                  {exp.description.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {exp.skillsUsed.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-200/80"
                  >
                    {skill}
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
