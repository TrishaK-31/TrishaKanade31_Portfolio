import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, CheckCircle2 } from 'lucide-react';
export const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = [
    'All',
    'Internship',
    'Workshop & Training',
    'Technical Diploma',
    'Competition',
    'Professional Membership',
  ];
  const certifications = PORTFOLIO_DATA.certifications || [];
  const filtered =
    selectedCategory === 'All'
      ? certifications
      : certifications.filter((c) =>
          selectedCategory === 'Competition'
            ? c.category?.includes('Competition') ||
              c.category?.includes('Quiz') ||
              c.category?.includes('Co-curricular')
            : c.category === selectedCategory,
        );
  return (
    <section id="certifications" className="py-16 md:py-20 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-6 mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Verified Credentials</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">Certifications</h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Professional credentials, technical diplomas, workshops, and competition recognitions.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap md:flex-nowrap items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-lg shadow-2xs self-start">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold whitespace-nowrap rounded-md transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certification Names Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filtered.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Award className="w-4 h-4" />
                  </div>
                  {cert.category && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      {cert.category}
                    </span>
                  )}
                </div>

                {/* Certification Name */}
                <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-600 transition-colors">
                  {cert.name}
                </h3>

                {/* Issuer */}
                {cert.issuer && <p className="text-xs text-slate-600 mt-2 font-medium">{cert.issuer}</p>}
              </div>

              {/* Footer info: Verified status & year */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="inline-flex items-center gap-1 text-[11px] text-teal-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  <span>Credential</span>
                </span>
                {cert.year && (
                  <span className="font-mono text-[11px] text-slate-500 font-semibold bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                    {cert.year}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
