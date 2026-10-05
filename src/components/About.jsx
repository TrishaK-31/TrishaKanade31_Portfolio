import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';
export const About = () => {
  const { aboutText } = PORTFOLIO_DATA.personal;
  const coreStrengths = [
    {
      title: 'Engineering Mindset',
      description: 'Systematic approach to problem-solving, circuit analysis, and structured architectural design.',
    },
    {
      title: 'Modern Web Interfaces',
      description: 'Building clean, responsive layouts using HTML, CSS, JavaScript, React.js, and Tailwind CSS.',
    },
    {
      title: 'Hardware & Telecommunications',
      description:
        'Hands-on familiarity with PCB design workflows, IoT architectures, and wireless communication concepts.',
    },
    {
      title: 'Technical Research & Emerging Tech',
      description: 'Enthusiasm for emerging tech, quick adoption of new frameworks, and thorough documentation.',
    },
  ];
  return (
    <section id="about" className="py-16 md:py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Section Header & Narrative */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Background &amp; Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">About Me</h2>
            </div>

            {/* Exact Content Required */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 leading-relaxed text-base shadow-2xs">
              <p className="font-normal">{aboutText}</p>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              My engineering education in Electronics &amp; Telecommunication provides a strong foundation in hardware
              systems, communication protocols, and analytical thinking. In parallel, my practical projects in web
              development allow me to create accessible, elegant user interfaces that bring complex systems to life for
              everyday users.
            </p>

            <div className="pt-2">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>B.Tech Student (EXTC)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Frontend Developer</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>IETE Member</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Open to Internships</span>
                </span>
              </div>
            </div>
          </div>

          {/* Core Strengths Grid */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Core Focus Areas</h3>
            <div className="space-y-3">
              {coreStrengths.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors"
                >
                  <h4 className="text-sm font-semibold text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-normal">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
