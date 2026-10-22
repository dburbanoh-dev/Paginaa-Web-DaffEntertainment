import React from 'react';
import type { ServiceItem } from '../data/servicesData';
import { ProductCard } from './ProductCard';
import { Frown } from 'lucide-react';

interface ProductGridProps {
  services: ServiceItem[];
  searchTerm: string;
  onSelectService: (service: ServiceItem) => void;
  onClearSearch: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  services,
  searchTerm,
  onSelectService,
  onClearSearch,
}) => {

  if (services.length === 0) {
    return (
      <div className="glass-panel rounded-2xl p-10 text-center max-w-lg mx-auto my-12 border-slate-800">
        <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-4 text-red-500">
          <Frown className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          No encontramos "{searchTerm}"
        </h3>
        <p className="text-sm text-slate-400 mb-6">
          Intenta buscar con otros términos como "Netflix", "Disney", "Spotify", "MagisTV" o borra el filtro.
        </p>
        <button
          onClick={onClearSearch}
          className="bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs py-2.5 px-5 rounded-xl transition-colors border border-slate-700"
        >
          Limpiar Búsqueda
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <span>Catálogo Disponibles</span>
            <span className="text-xs bg-red-950 text-red-400 border border-red-800/60 px-2.5 py-0.5 rounded-full font-semibold">
              {services.length} Cuentas
            </span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Precios garantizados con entrega inmediata por WhatsApp.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service) => (
          <ProductCard
            key={service.id}
            service={service}
            onSelectService={onSelectService}
          />
        ))}
      </div>
    </div>
  );
};
