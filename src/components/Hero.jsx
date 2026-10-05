import React from 'react';
import {
  ArrowRight,
  Eye,
  Mail,
  Cpu,
  Globe,
  Radio,
  Sparkles,
  BookOpen,
  Layers,
  GraduationCap,
  Award,
  Briefcase,
  Github,
  Linkedin,
  CheckCircle2,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
export const Hero = ({ onOpenResume }) => {
  const { name, headline, email, github, linkedin } = PORTFOLIO_DATA.personal;
  const highlightPillars = [
    { label: 'Frontend Development', icon: Globe },
    { label: 'Electronics & Telecommunication', icon: Cpu },
    { label: 'Emerging Technologies', icon: Sparkles },
    { label: 'Wireless Communication', icon: Radio },
    { label: 'Research', icon: BookOpen },
    { label: 'Practical Technology Projects', icon: Layers },
  ];
  return (
    <section
      id="home"
      className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30"
    >
      {/* Subtle background ambient touch */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl" />
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-teal-50/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Introduction & Primary Actions */}
          <div className="lg:col-span-7">
            {/* Status / Expected Graduation kicker */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold tracking-wide uppercase text-blue-700 bg-blue-50/90 px-3 py-1 rounded-md border border-blue-200/80 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span>Expected Graduation: 2027</span>
            </div>

            {/* Primary Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Hi, I'm <span className="text-blue-600">{name}</span>
            </h1>

            {/* Exact Professional Headline */}
            <p className="mt-3 text-lg sm:text-xl lg:text-2xl font-medium text-slate-800 leading-snug">{headline}</p>

            {/* Professional Introduction */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Welcome to my engineering portfolio. I am passionate about combining electronics and telecommunication
              fundamentals with modern frontend development to build clean, practical, and user-friendly digital
              solutions. My interests include technical research, emerging technologies, and innovative engineering
              projects, with a focus on continuous learning and practical problem-solving.
            </p>

            {/* Interest Areas Checklist / Grid */}
            <div className="mt-6 pt-5 border-t border-slate-200/80">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Core Focus Areas &amp; Technical Interests
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {highlightPillars.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-slate-200 shadow-2xs text-xs font-medium text-slate-700 hover:border-blue-200 transition-colors"
                    >
                      <IconComponent className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {/* Primary: View Resume */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-all shadow-xs hover:shadow-md focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              {/* Secondary: View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-white text-slate-700 border border-slate-300 hover:border-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-colors shadow-2xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>

              {/* Tertiary: Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-white text-slate-700 border border-slate-300 hover:border-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-colors shadow-2xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Engineering Profile & Credentials Showcase (covers empty space) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden">
              {/* Subtle top accent gradient */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-teal-500" />

              {/* Header profile info */}
              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-bold text-lg flex items-center justify-center shadow-xs">
                    TK
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-tight">{name}</h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      Electronics &amp; Telecom Engineering (EXTC)
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Open to Internships</span>
                </span>
              </div>

              {/* Metric stats row */}
              <div className="grid grid-cols-3 gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 mb-5 text-center">
                <div className="px-1 py-1">
                  <span className="block text-lg sm:text-xl font-bold text-blue-600">9.45</span>
                  <span className="text-[11px] font-medium text-slate-500">Active CGPA</span>
                </div>
                <div className="px-1 py-1 border-x border-slate-200/80">
                  <span className="block text-lg sm:text-xl font-bold text-slate-900">2026</span>
                  <span className="text-[11px] font-medium text-slate-500">Internships</span>
                </div>
                <div className="px-1 py-1">
                  <span className="block text-lg sm:text-xl font-bold text-teal-600">10+</span>
                  <span className="text-[11px] font-medium text-slate-500">Credentials</span>
                </div>
              </div>

              {/* Highlights & credentials quick checklist */}
              <div className="space-y-2.5 text-xs text-slate-600 mb-6">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>
                    <strong>B.Tech EXTC</strong> · Expected Graduation 2027
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Briefcase className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>
                    <strong>Industry Intern</strong> · PCB Design &amp; Digital Outreach
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>
                    <strong>Diploma in Web Design</strong> · Distinction Grade
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    <strong>IETE Member</strong> &amp; Competition Participant
                  </span>
                </div>
              </div>

              {/* Primary Interactive Viewer Action */}
              <button
                onClick={onOpenResume}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 active:bg-blue-800 transition-all shadow-xs cursor-pointer group"
              >
                <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>View Full Interactive Resume</span>
              </button>

              {/* Quick Contact Links */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium text-[11px] text-slate-400">Connect:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${email}`}
                    className="p-1.5 rounded-md hover:bg-slate-100 text-slate-600 hover:text-blue-600 transition-colors"
                    title={`Email ${email}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md hover:bg-slate-100 text-slate-600 hover:text-blue-600 transition-colors"
                    title="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md hover:bg-slate-100 text-slate-600 hover:text-blue-600 transition-colors"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
