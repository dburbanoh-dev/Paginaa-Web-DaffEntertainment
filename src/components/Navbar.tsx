import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Search, ShieldCheck } from 'lucide-react';
import { STORE_CONFIG } from '../data/servicesData';
import { createWhatsAppUrl, generateGeneralWhatsAppMessage } from '../utils/whatsapp';

interface NavbarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onSearchFocus?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ searchTerm, setSearchTerm, onSearchFocus }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Combos Oferta', href: '#combos' },
    { name: 'Garantía 24/7', href: '#garantias' },
    { name: 'Preguntas Frecuentes', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-gradient-to-b from-[#070a12]/90 to-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-full p-[1.5px] bg-gradient-to-tr from-amber-400 via-amber-600 to-yellow-300 shadow-lg shadow-amber-900/30 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
              <img
                src="/logo.png"
                alt="DaffEntertainment Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                Daff<span className="text-gradient-red">Entertainment</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Cuentas Streaming 24/7
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors hover:scale-105 transform duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Search + WhatsApp Action */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Quick Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar cuenta (ej: Netflix, Spotify)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={onSearchFocus}
                className="w-56 bg-slate-900/80 border border-slate-700/60 rounded-full py-1.5 pl-9 pr-4 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:w-64 transition-all duration-300"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            {/* Direct WhatsApp CTA */}
            <a
              href={createWhatsAppUrl(generateGeneralWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs py-2.5 px-4 rounded-full shadow-lg shadow-emerald-900/40 hover:shadow-emerald-600/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Directo</span>
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setShowSearchInput(!showSearchInput)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 rounded-lg"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 rounded-lg"
              aria-label="Abrir Menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-red-500" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Search Expandable */}
        {showSearchInput && (
          <div className="md:hidden pt-3 pb-2 animate-fadeIn">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar Netflix, Spotify, Disney..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={onSearchFocus}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2 pl-10 pr-4 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-red-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        )}

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-red-400 py-1 border-b border-slate-800/50"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-800/40">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Garantía continua de 30 días en tu suscripción</span>
            </div>
            
            <a
              href={createWhatsAppUrl(generateGeneralWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-emerald-950"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Chatear por WhatsApp ({STORE_CONFIG.whatsappFormatted})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
