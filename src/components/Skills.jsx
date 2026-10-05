import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code2, Globe, Cpu, Radio, FileSearch, Wrench } from 'lucide-react';
export const Skills = () => {
  const categoryIcons = {
    'Frontend Development': <Code2 className="w-5 h-5 text-blue-600" />,
    'Web Technologies': <Globe className="w-5 h-5 text-indigo-600" />,
    Electronics: <Cpu className="w-5 h-5 text-teal-600" />,
    Telecommunication: <Radio className="w-5 h-5 text-sky-600" />,
    'Technical Research': <FileSearch className="w-5 h-5 text-amber-600" />,
    Tools: <Wrench className="w-5 h-5 text-slate-700" />,
  };
  return (
    <section id="skills" className="py-16 md:py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Competencies &amp; Toolkit
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">Skills</h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Organized technical competencies covering frontend development, web technologies, electronics,
            telecommunication, research, and tools.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skills.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/80">
                    {categoryIcons[cat.title] || <Code2 className="w-5 h-5 text-blue-600" />}
                  </div>
                  <h3 className="font-semibold text-slate-900 text-base">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>{cat.skills.length} competencies</span>
                <span className="text-slate-400 font-mono">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
