import React, { useState, useEffect } from 'react';
import { Menu, X, Eye } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
export const Navbar = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];
  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200'
          : 'bg-white/80 backdrop-blur-xs border-b border-slate-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <a
            href="#home"
            className="group flex items-center gap-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-semibold text-sm shadow-xs group-hover:bg-blue-700 transition-colors">
              TK
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-900 text-base leading-tight tracking-tight">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-[11px] text-slate-500 font-medium hidden sm:block">
                Electronics &amp; Telecom · Frontend
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-5 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="transition-colors hover:text-blue-600 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-all shadow-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
          </nav>

          {/* Mobile Menu Trigger & Mobile Resume Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs"
              title="View Resume"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Resume</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="max-w-6xl mx-auto px-4 pt-3 pb-5 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
