import React from 'react';
import { Search, ShieldCheck, Zap, Star, CheckCircle, ArrowDown } from 'lucide-react';
import { STORE_CONFIG } from '../data/servicesData';

interface HeroProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  scrollToCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ searchTerm, setSearchTerm, scrollToCatalog }) => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-red-600/20 via-purple-600/20 to-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Background Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center z-10">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-red-950/80 via-slate-900 to-purple-950/80 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold text-amber-300 shadow-xl shadow-red-950/40 animate-float">
          <img src="/logo.png" alt="Daff Logo" className="w-5 h-5 rounded-full object-cover border border-amber-400/60" />
          <span>Servicio Oficial DaffEntertainment • Cuentas 100% Garantizadas</span>
          <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">COP</span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Tu Entretenimiento Favorito <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-400 to-cyan-400">
            al Mejor Precio Garantizado
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
          Accede a <span className="text-white font-semibold">Netflix, Disney+ Premium, HBO Max, Spotify, Canva Pro, MagisTV, YouTube Premium</span> y más. 
          Entrega rápida de <span className="text-emerald-400 font-semibold">{STORE_CONFIG.deliveryTime}</span> con garantía total durante toda tu suscripción.
        </p>

        {/* Hero Interactive Search Bar */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative glass-panel rounded-2xl p-2 shadow-2xl shadow-purple-950/20 border border-slate-700/60 focus-within:border-red-500 transition-all duration-300">
            <div className="flex items-center gap-2">
              <div className="pl-3 text-slate-400">
                <Search className="w-5 h-5 text-red-500" />
              </div>
              <input
                type="text"
                placeholder="¿Qué cuenta buscas? (ej. Netflix 14mil, Disney, Spotify, Magis...)"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  scrollToCatalog();
                }}
                className="w-full bg-transparent py-2.5 px-2 text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none"
              />
              <button
                onClick={scrollToCatalog}
                className="bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-lg transition-transform active:scale-95 whitespace-nowrap"
              >
                Ver Catálogo
              </button>
            </div>
          </div>
        </div>

        {/* Quick Trust Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-12">
          <div className="glass-panel p-3 rounded-xl flex items-center justify-center gap-2 border-slate-800">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-medium text-slate-200">Entrega 5-10 Min</span>
          </div>
          <div className="glass-panel p-3 rounded-xl flex items-center justify-center gap-2 border-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-medium text-slate-200">30 Días Garantía</span>
          </div>
          <div className="glass-panel p-3 rounded-xl flex items-center justify-center gap-2 border-slate-800">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-xs font-medium text-slate-200">+500 Clientes</span>
          </div>
          <div className="glass-panel p-3 rounded-xl flex items-center justify-center gap-2 border-slate-800">
            <CheckCircle className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-medium text-slate-200">Nequi & Llaves Bre-B</span>
          </div>
        </div>

        {/* Quick Brands Ticker */}
        <div className="pt-4 border-t border-slate-800/60 max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
            Plataformas Populares Disponibles
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 opacity-90">
            {['Netflix', 'Disney+', 'HBO Max', 'Prime Video', 'Spotify', 'YouTube', 'Canva Pro', 'Magis TV', 'Crunchyroll', 'Plex', 'Paramount+', 'DirecTV GO'].map((brand) => (
              <span
                key={brand}
                className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                onClick={() => {
                  setSearchTerm(brand);
                  scrollToCatalog();
                }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Down Scroll Button */}
      <button
        onClick={scrollToCatalog}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white transition-colors animate-bounce"
        aria-label="Ir al catálogo"
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </section>
  );
};
