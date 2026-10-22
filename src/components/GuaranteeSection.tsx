import React from 'react';
import { ShieldCheck, Zap, Headphones, CreditCard, CheckCircle } from 'lucide-react';
import { STORE_CONFIG } from '../data/servicesData';

export const GuaranteeSection: React.FC = () => {
  const guarantees = [
    {
      icon: Zap,
      color: 'text-amber-400',
      bg: 'bg-amber-950/40 border-amber-800/40',
      title: 'Entrega en Minutos',
      description: `Una vez realizado tu reporte de pago por Nequi o Llaves Bre-B, tus credenciales son entregadas en ${STORE_CONFIG.deliveryTime}.`
    },
    {
      icon: ShieldCheck,
      color: 'text-emerald-400',
      bg: 'bg-emerald-950/40 border-emerald-800/40',
      title: 'Garantía Total 30 Días',
      description: 'Tu compra está protegida de principio a fin. Ante cualquier caída de perfil te brindamos reemplazo inmediato.'
    },
    {
      icon: Headphones,
      color: 'text-purple-400',
      bg: 'bg-purple-950/40 border-purple-800/40',
      title: 'Soporte Post-Venta 24/7',
      description: 'Atención personalizada en español a través de WhatsApp para cualquier duda de configuración en tus dispositivos.'
    },
    {
      icon: CreditCard,
      color: 'text-cyan-400',
      bg: 'bg-cyan-950/40 border-cyan-800/40',
      title: 'Pagos Fáciles & Directos',
      description: 'Paga de forma instantánea únicamente a través de Nequi o Llaves Bre-B.'
    }
  ];

  return (
    <section id="garantias" className="py-16 bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest bg-red-950/60 border border-red-800/50 px-3 py-1 rounded-full">
            ¿Por qué elegir DaffEntertainment?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Seguridad, Rapidez y Garantía Real
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Brindamos un servicio transparente para que solo te preocupes por disfrutar tu contenido.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-4 ${item.bg}`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Payment Methods Banner */}
        <div className="mt-12 glass-panel p-6 rounded-2xl border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              Medios de Pago Exclusivos Aceptados
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Transferencia directa rápida sin comisiones ocultas.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {STORE_CONFIG.paymentMethods.map((pm, i) => (
              <span
                key={i}
                className="bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-sm font-extrabold px-4 py-2 rounded-xl shadow-md"
              >
                {pm}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
