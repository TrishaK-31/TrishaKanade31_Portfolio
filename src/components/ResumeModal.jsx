import React from 'react';
import { X, Printer, Eye, Mail, Github, Linkedin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        {/* Modal Toolbar (hidden on print) */}
        <div className="print:hidden flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/90">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-2xs">
              TK
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-slate-900 leading-none">
                  {PORTFOLIO_DATA.personal.name} — Resume
                </h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  <Eye className="w-3 h-3 text-blue-600" />
                  <span>View Only</span>
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Electronics &amp; Telecommunication Engineering Student · Frontend Developer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-slate-700 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
              title="Print Document"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Print Document</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors ml-2 cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Viewport */}
        <div className="overflow-y-auto p-6 sm:p-10 text-slate-800 font-sans print:p-0 print:overflow-visible">
          {/* Resume Header */}
          <div className="border-b border-slate-300 pb-5 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                {PORTFOLIO_DATA.personal.name}
              </h1>
              <p className="text-sm font-semibold text-blue-700">{PORTFOLIO_DATA.personal.headline}</p>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:underline">
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-slate-500" />
                <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="hover:underline">
                  github.com/trishakanade
                </a>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-slate-500" />
                <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                  linkedin.com/in/trisha-kanade
                </a>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{PORTFOLIO_DATA.personal.aboutText}</p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
              Education &amp; Academic Scores
            </h2>
            <div className="space-y-3">
              {PORTFOLIO_DATA.education.map((edu) => (
                <div key={edu.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline font-semibold text-slate-900">
                    <span>{edu.degree}</span>
                    <span className="text-slate-500 text-xs font-normal">{edu.period}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 text-xs mt-0.5">
                    <span>{edu.institution}</span>
                    <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">
                      {edu.scoreLabel}: {edu.scoreValue}
                    </span>
                  </div>
                  {edu.details && <p className="text-slate-600 text-xs mt-0.5">{edu.details}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {PORTFOLIO_DATA.skills.map((cat) => (
                <div key={cat.title}>
                  <span className="font-semibold text-slate-900">{cat.title}: </span>
                  <span className="text-slate-700">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
              Projects
            </h2>
            <div className="space-y-3">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-slate-900">{proj.title}</span>
                    <span className="text-slate-500 text-[11px]">{proj.type}</span>
                  </div>
                  {proj.contribution && (
                    <p className="text-teal-800 font-semibold text-[11px]">Contribution: {proj.contribution}</p>
                  )}
                  <p className="text-slate-700 leading-relaxed mt-0.5">{proj.description}</p>
                  <p className="text-slate-500 text-[11px] mt-0.5">
                    <strong>Tech:</strong> {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div className="mb-6">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
              Industry Internships
            </h2>
            <div className="space-y-3">
              {PORTFOLIO_DATA.experience.map((exp) => (
                <div key={exp.id} className="text-xs">
                  <div className="flex justify-between items-baseline font-semibold text-slate-900">
                    <span>
                      {exp.role} · <span className="font-normal text-slate-700">{exp.organization}</span>
                    </span>
                    <span className="text-slate-500 text-xs font-normal">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside mt-1 text-slate-600 space-y-0.5">
                    {exp.description.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* College Workshops & Practical Training */}
          <div className="mb-6">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
              College Workshops &amp; Practical Training
            </h2>
            <div className="space-y-3">
              {PORTFOLIO_DATA.workshops.map((ws) => (
                <div key={ws.id} className="text-xs">
                  <div className="flex justify-between items-baseline font-semibold text-slate-900">
                    <span>
                      {ws.title} · <span className="font-normal text-slate-700">{ws.organizer}</span>
                    </span>
                    <span className="text-slate-500 text-xs font-normal">{ws.period}</span>
                  </div>
                  <ul className="list-disc list-inside mt-1 text-slate-600 space-y-0.5">
                    {ws.description.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications (Names Only) */}
          {PORTFOLIO_DATA.certifications && PORTFOLIO_DATA.certifications.length > 0 && (
            <div>
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-2">
                Certifications
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                {PORTFOLIO_DATA.certifications.map((c) => (
                  <li key={c.id} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    <span>
                      <strong>{c.name}</strong> {c.issuer ? `— ${c.issuer}` : ''} {c.year ? `(${c.year})` : ''}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
