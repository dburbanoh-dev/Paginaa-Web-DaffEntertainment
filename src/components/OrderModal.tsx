import React, { useState } from 'react';
import type { ServiceItem, PricingOption } from '../data/servicesData';
import { formatCurrency, createWhatsAppUrl, generateServiceWhatsAppMessage } from '../utils/whatsapp';
import { X, Check, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface OrderModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const [selectedOption, setSelectedOption] = useState<PricingOption>(service.options[0]);
  const [durationMonths, setDurationMonths] = useState<number>(1);

  const totalPrice = selectedOption.price * durationMonths;
  const whatsappMessage = generateServiceWhatsAppMessage(service, selectedOption, durationMonths);
  const whatsappUrl = createWhatsAppUrl(whatsappMessage);

  const handleWhatsAppRedirect = () => {
    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log('Confetti effect');
    }
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 border-slate-700/80 shadow-2xl shadow-red-950/30 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${service.logoBg} shadow-lg shadow-black/50`}>
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-red-400 uppercase tracking-widest">
              Personaliza tu Orden
            </span>
            <h2 className="text-2xl font-extrabold text-white">
              {service.name}
            </h2>
            <p className="text-xs text-slate-400">
              {service.categoryLabel} • Entrega en 5-15 Min
            </p>
          </div>
        </div>

        {/* Description & Features */}
        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 mb-6 text-xs text-slate-300">
          <p className="mb-3 leading-relaxed">{service.description}</p>
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
            {service.features.map((feat, i) => (
              <span key={i} className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md text-[10px] font-medium flex items-center gap-1">
                <Check className="w-3 h-3 text-emerald-400" />
                {feat}
              </span>
            ))}
          </div>
        </div>

        {/* Step 1: Select Plan / Screen Option */}
        <div className="mb-6">
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
            1. Selecciona el Tipo de Cuenta / Perfil:
          </label>
          <div className="space-y-2.5">
            {service.options.map((opt) => {
              const isSelected = selectedOption.id === opt.id;
              return (
                <div
                  key={opt.id}
                  onClick={() => setSelectedOption(opt)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? 'bg-gradient-to-r from-red-950/60 to-purple-950/60 border-red-500 shadow-md'
                      : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? 'border-red-500 bg-red-600' : 'border-slate-600'}`}>
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-2">
                        {opt.name}
                        {opt.popular && (
                          <span className="text-[9px] bg-red-600 text-white font-extrabold px-2 py-0.5 rounded-full uppercase">
                            Popular
                          </span>
                        )}
                      </div>
                      {opt.description && (
                        <p className="text-[11px] text-slate-400 mt-0.5">{opt.description}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-base font-extrabold text-white">
                      {formatCurrency(opt.price)}
                    </span>
                    <span className="text-[10px] block text-slate-400">COP / mes</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 2: Duration Selector */}
        <div className="mb-6">
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
            2. Selecciona la Duración:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[1, 3, 6].map((months) => {
              const isSelected = durationMonths === months;
              return (
                <button
                  key={months}
                  onClick={() => setDurationMonths(months)}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-900/40'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {months} {months === 1 ? 'Mes' : 'Meses'}
                  {months > 1 && (
                    <span className="block text-[9px] text-amber-300 font-semibold mt-0.5">
                      Continuidad Garantizada
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Total Price & Summary Box */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 mb-6 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 block">Total a Pagar ({durationMonths} {durationMonths === 1 ? 'Mes' : 'Meses'}):</span>
            <span className="text-3xl font-black text-white tracking-tight">
              {formatCurrency(totalPrice)}
            </span>
            <span className="text-xs font-bold text-emerald-400 ml-1">COP</span>
          </div>
          <div className="text-right text-[11px] text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400 font-semibold justify-end">
              <ShieldCheck className="w-3.5 h-3.5" />
              Garantía Activa
            </span>
            <span>Atención Inmediata</span>
          </div>
        </div>

        {/* Submit to WhatsApp Button */}
        <button
          onClick={handleWhatsAppRedirect}
          className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base py-4 rounded-2xl shadow-xl shadow-emerald-950/80 hover:shadow-emerald-600/40 transition-all hover:scale-[1.02] active:scale-95"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span>Enviar Pedido a WhatsApp</span>
        </button>

      </div>
    </div>
  );
};
