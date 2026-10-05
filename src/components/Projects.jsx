import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Github, Users, User, FolderGit2 } from 'lucide-react';
export const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Featured Work</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">Projects</h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            A chronological portfolio of web applications, interfaces, and collaborative engineering projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header: Number, Title, and Type */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-xs font-mono text-slate-400">0{index + 1}.</span>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-medium shrink-0 ${
                      project.type.includes('Team')
                        ? 'bg-amber-50 text-amber-800 border border-amber-200/70'
                        : 'bg-slate-50 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {project.type.includes('Team') ? (
                      <Users className="w-3 h-3 text-amber-600" />
                    ) : (
                      <User className="w-3 h-3 text-slate-500" />
                    )}
                    <span>{project.type}</span>
                  </span>
                </div>

                {/* Team Contribution Notice for Smart Krishi */}
                {project.contribution && (
                  <div className="mb-3 px-3 py-1.5 rounded-lg bg-teal-50/70 border border-teal-200/80 text-teal-800 text-xs">
                    <span className="font-semibold text-teal-900">My Contribution:</span>{' '}
                    <span>{project.contribution}</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 mb-4">{project.description}</p>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-50 text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action / Information Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {/* GitHub button (only if available) */}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors shadow-2xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                      <FolderGit2 className="w-3.5 h-3.5 text-slate-400" />
                      <span>Project #{index + 1}</span>
                    </span>
                  )}
                </div>

                <span className="text-[11px] text-slate-400 font-mono">{project.technologies[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
