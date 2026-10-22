import React from 'react';
import { ShieldCheck, Heart, MessageCircle } from 'lucide-react';
import { STORE_CONFIG } from '../data/servicesData';
import { createWhatsAppUrl, generateGeneralWhatsAppMessage } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-11 h-11 rounded-full p-[1.5px] bg-gradient-to-tr from-amber-400 via-amber-600 to-yellow-300 shadow-lg shadow-amber-900/30 overflow-hidden">
                <img
                  src="/logo.png"
                  alt="DaffEntertainment Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-xl font-extrabold text-white">
                Daff<span className="text-gradient-red">Entertainment</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Plataforma especializada en la provisión de cuentas de entretenimiento, streaming de cine, deportes en vivo y herramientas digitales con garantía asegurada y atención post-venta inmediata.
            </p>

            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Garantía continua de 30 días en todas las suscripciones</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#catalogo" className="hover:text-white transition-colors">Catálogo Completo</a></li>
              <li><a href="#combos" className="hover:text-white transition-colors">Combos en Oferta</a></li>
              <li><a href="#garantias" className="hover:text-white transition-colors">Garantía & Ventajas</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contacto & Soporte
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Atención por WhatsApp:</span>
                <a
                  href={createWhatsAppUrl(generateGeneralWhatsAppMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-bold hover:underline flex items-center gap-1.5 text-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-400" />
                  {STORE_CONFIG.whatsappFormatted}
                </a>
              </li>
              <li>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Horario de Atención:</span>
                <span className="text-slate-300 font-medium">Lunes a Domingo • 24 Horas</span>
              </li>
              <li>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Medios de Pago:</span>
                <span className="text-emerald-400 font-bold">Nequi y Llaves Bre-B</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Note */}
        <div className="border-t border-slate-900 pt-6 pb-4 text-[11px] text-slate-500 leading-relaxed">
          <p>
            * Aviso Legal: DaffEntertainment es una marca de servicios independientes. Los logos, nombres y marcas comerciales (Netflix, Disney+, Max, Prime Video, Spotify, YouTube, Canva, MagisTV, Crunchyroll, Paramount+, Plex, Universal, ViX, DirecTV GO) pertenecen a sus respectivos propietarios y se utilizan únicamente con fines descriptivos del servicio ofrecido.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-900 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} DaffEntertainment. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Diseñado con <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" /> para ofrecer la mejor experiencia SPA.
          </p>
        </div>

      </div>
    </footer>
  );
};
