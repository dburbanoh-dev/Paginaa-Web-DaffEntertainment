import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { createWhatsAppUrl, generateGeneralWhatsAppMessage } from '../utils/whatsapp';

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 4 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = createWhatsAppUrl(generateGeneralWhatsAppMessage());

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Tooltip Chat Bubble Popup */}
      {showTooltip && (
        <div className="relative glass-panel bg-slate-900/95 p-4 rounded-2xl border-emerald-500/40 shadow-2xl shadow-emerald-950/50 max-w-xs animate-fadeIn text-slate-100">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-white p-1"
            aria-label="Cerrar notificación"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2 mb-1.5">
            <img src="/logo.png" alt="Daff Logo" className="w-5 h-5 rounded-full object-cover border border-amber-400/50" />
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-xs font-bold text-emerald-400">Atención en Línea 24/7</span>
          </div>

          <p className="text-xs text-slate-200 leading-relaxed font-medium">
            ¡Hola! 👋 ¿Necesitas información o quieres pedir tu cuenta ? Escríbeme
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-1.5 px-3 rounded-lg w-full justify-center transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>Hablar por WhatsApp</span>
          </a>
        </div>
      )}

      {/* Floating Button with Pulse animation */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-400 text-white shadow-2xl shadow-emerald-950 hover:shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Pulsing ring behind button */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping -z-10"></span>

        <MessageCircle className="w-7 h-7 fill-white text-white group-hover:rotate-12 transition-transform" />

        {/* Online Status Badge */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-400 border-2 border-slate-900 rounded-full"></span>
      </a>

    </div>
  );
};
