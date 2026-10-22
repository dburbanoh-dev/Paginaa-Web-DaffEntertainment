import React, { useState } from 'react';
import { FAQ_LIST } from '../data/servicesData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl, generateGeneralWhatsAppMessage } from '../utils/whatsapp';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-1 mb-3 text-xs font-bold text-slate-300">
            <HelpCircle className="w-4 h-4 text-red-500" />
            <span>Resuelve tus Dudas</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Todo lo que necesitas saber antes de solicitar tu cuenta con nosotros.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-red-400 transition-colors"
                >
                  <span>{faq.question}</span>
                  <div className={`p-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-red-500 bg-red-950/40 border-red-800/40' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 text-center p-6 glass-panel rounded-2xl border-slate-800">
          <h3 className="text-base font-bold text-white mb-2">
            ¿Tienes alguna otra duda o consulta especial?
          </h3>
          <p className="text-xs text-slate-400 mb-4">
            Escríbenos directamente y nuestro equipo te asesorará en minutos.
          </p>
          <a
            href={createWhatsAppUrl(generateGeneralWhatsAppMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 px-5 rounded-xl shadow-md transition-transform hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
