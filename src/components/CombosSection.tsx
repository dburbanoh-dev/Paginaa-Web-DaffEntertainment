import React from 'react';
import { COMBOS_LIST } from '../data/servicesData';
import type { ComboItem } from '../data/servicesData';
import { formatCurrency, createWhatsAppUrl, generateComboWhatsAppMessage } from '../utils/whatsapp';
import { MessageCircle, Flame, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CombosSection: React.FC = () => {

  const handleOrderCombo = (combo: ComboItem) => {
    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    } catch (e) {}

    const message = generateComboWhatsAppMessage(combo.title, combo.comboPrice, combo.servicesIncluded);
    const url = createWhatsAppUrl(message);
    window.open(url, '_blank');
  };

  return (
    <section id="combos" className="py-16 relative">
      
      {/* Background Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-950/80 border border-purple-800/60 rounded-full px-4 py-1 mb-4 text-xs font-bold text-purple-400">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Paquetes con Descuento Especial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Combos de Streaming & Entretenimiento
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3">
            Junta tus plataformas favoritas y ahorra hasta <span className="text-amber-400 font-bold">$6.000 COP</span> cada mes.
          </p>
        </div>

        {/* Combos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMBOS_LIST.map((combo) => (
            <div
              key={combo.id}
              className="relative glass-panel rounded-3xl p-6 sm:p-8 border-slate-700/80 hover:border-purple-500/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-purple-950/30 flex flex-col justify-between overflow-hidden group"
            >
              {/* Top Banner Badge */}
              <div className="flex items-center justify-between gap-2 mb-6">
                <span className="bg-amber-400/10 text-amber-400 border border-amber-500/40 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  {combo.badge}
                </span>
                {combo.popular && (
                  <span className="bg-red-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest shadow-md animate-pulse">
                    MÁS VENDIDO 🔥
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors mb-2">
                  {combo.title}
                </h3>
                <p className="text-sm font-semibold text-slate-300 mb-6">
                  {combo.subtitle}
                </p>

                {/* Included Services Pills */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs text-slate-400 font-medium block">Servicios incluidos en este combo:</span>
                  <div className="flex flex-wrap gap-2">
                    {combo.servicesIncluded.map((serv, idx) => (
                      <div key={idx} className="bg-slate-900 border border-slate-700 text-slate-200 text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{serv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 line-through">
                    <span>Precio Normal: {formatCurrency(combo.originalPrice)} COP</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white">
                      {formatCurrency(combo.comboPrice)}
                    </span>
                    <span className="text-xs font-bold text-emerald-400">COP / mes</span>
                  </div>
                </div>

                <button
                  onClick={() => handleOrderCombo(combo)}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-2xl shadow-lg shadow-purple-950 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Pedir Combo por WhatsApp</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
