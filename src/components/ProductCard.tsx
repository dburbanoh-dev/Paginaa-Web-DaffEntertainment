import React from 'react';
import type { ServiceItem } from '../data/servicesData';
import { formatCurrency, createWhatsAppUrl, generateServiceWhatsAppMessage } from '../utils/whatsapp';
import { Check, MessageCircle, Sparkles, Film, Music, Tv, Palette, Server, Trophy, Play } from 'lucide-react';

interface ProductCardProps {
  service: ServiceItem;
  onSelectService: (service: ServiceItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ service }) => {

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Film': return <Film className="w-6 h-6 text-white" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-white" />;
      case 'Tv': return <Tv className="w-6 h-6 text-white" />;
      case 'Music': return <Music className="w-6 h-6 text-white" />;
      case 'Palette': return <Palette className="w-6 h-6 text-white" />;
      case 'Server': return <Server className="w-6 h-6 text-white" />;
      case 'Trophy': return <Trophy className="w-6 h-6 text-white" />;
      default: return <Play className="w-6 h-6 text-white" />;
    }
  };

  const getBadgeStyle = (badgeType?: string) => {
    switch (badgeType) {
      case 'hot': return 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-red-900/50';
      case 'sale': return 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-emerald-900/50';
      case 'new': return 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-purple-900/50';
      default: return 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-amber-900/50';
    }
  };

  const defaultOption = service.options[0];
  const directMessage = generateServiceWhatsAppMessage(service, defaultOption);

  return (
    <div className="group relative glass-panel rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-slate-600 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-red-950/20">
      
      {/* Top Header */}
      <div>
        {/* Badge & Category */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800">
            {service.categoryLabel}
          </span>
          {service.badge && (
            <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md ${getBadgeStyle(service.badgeType)}`}>
              {service.badge}
            </span>
          )}
        </div>

        {/* Brand Icon + Name Header */}
        <div className="flex items-start gap-3.5 mb-3">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${service.logoBg} shadow-lg shadow-black/40 group-hover:scale-110 transition-transform duration-300 mt-1`}>
            {renderIcon(service.iconName)}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors leading-tight">
              {service.name}
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              {service.tagline}
            </p>
          </div>
        </div>

        {/* Pricing Banner */}
        <div className="my-4 p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-baseline justify-between">
          <div>
            <span className="text-[11px] text-slate-400 block font-medium">Precio desde</span>
            <span className="text-2xl font-black text-white tracking-tight">
              {formatCurrency(service.basePrice)}
            </span>
            <span className="text-xs font-semibold text-slate-400 ml-1">COP / mes</span>
          </div>
          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded-md border border-emerald-800/60">
            Garantizado 30 Días
          </span>
        </div>

        {/* Features list - Complete text without line clipping */}
        <ul className="space-y-2.5 mb-6 text-xs text-slate-200">
          {service.features.map((feat, index) => (
            <li key={index} className="flex items-start gap-2 leading-snug">
              <div className="w-4 h-4 rounded-full bg-emerald-950 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-700/60">
                <Check className="w-2.5 h-2.5 text-emerald-400 stroke-[3]" />
              </div>
              <span className="break-words font-medium">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button: Direct WhatsApp Purchase */}
      <div className="pt-2 border-t border-slate-800/80">
        <a
          href={createWhatsAppUrl(directMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-950/60 transition-all active:scale-[0.98] hover:scale-[1.02]"
        >
          <MessageCircle className="w-4.5 h-4.5 fill-white" />
          <span>Pedir por WhatsApp ({formatCurrency(service.basePrice)})</span>
        </a>
      </div>

    </div>
  );
};
