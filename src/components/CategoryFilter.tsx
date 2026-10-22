import React from 'react';
import { Film, Music, Tv2, Zap, Palette, LayoutGrid } from 'lucide-react';

interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  counts: { [key: string]: number };
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  setActiveCategory,
  counts,
}) => {
  const categories = [
    { id: 'all', label: 'Todos los Servicios', icon: LayoutGrid },
    { id: 'streaming', label: 'Cine & Series', icon: Film },
    { id: 'music', label: 'Música & Audio', icon: Music },
    { id: 'tv', label: 'TV & Deportes', icon: Tv2 },
    { id: 'anime', label: 'Anime', icon: Zap },
    { id: 'tools', label: 'Herramientas', icon: Palette },
  ];

  return (
    <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar scroll-smooth">
      {categories.map((cat) => {
        const Icon = cat.icon;
        const isActive = activeCategory === cat.id;
        const count = counts[cat.id] || 0;

        return (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap shrink-0 ${
              isActive
                ? 'bg-gradient-to-r from-red-600 via-rose-600 to-purple-600 text-white shadow-lg shadow-red-900/40 border border-red-500/50 scale-105'
                : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
            <span>{cat.label}</span>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                isActive
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-800 text-slate-400'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
