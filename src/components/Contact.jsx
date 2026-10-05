import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Github, Linkedin, Copy, Check, Send, ExternalLink } from 'lucide-react';
export const Contact = () => {
  const { email, github, linkedin, location } = PORTFOLIO_DATA.personal;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sentNotice, setSentNotice] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 5000);
  };
  return (
    <section id="contact" className="py-16 md:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Get In Touch</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">Contact Me</h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                I am actively seeking internship opportunities, frontend developer roles, and practical technology
                projects. Feel free to reach out directly via email or connect with me on GitHub and LinkedIn.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-200/60 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Email Address</p>
                    <a
                      href={`mailto:${email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors truncate block"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-teal-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* GitHub Card */}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs flex items-center justify-between gap-3 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">GitHub Profile</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      github.com/trishakanade
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
              </a>

              {/* LinkedIn Card */}
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs flex items-center justify-between gap-3 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200/60 shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">LinkedIn</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      linkedin.com/in/trisha-kanade
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">Send a Message</h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Fill out the form below to send an email inquiry directly to my inbox.
              </p>

              {sentNotice && (
                <div className="mb-4 p-3 rounded-lg bg-teal-50 border border-teal-200 text-xs text-teal-800 flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span>Your email client has been launched with the message details.</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Subject</label>
                  <input
                    type="text"
                    placeholder="Internship opportunity / Project collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hello Trisha, I reviewed your portfolio and would like to connect regarding..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-xs cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Email Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
