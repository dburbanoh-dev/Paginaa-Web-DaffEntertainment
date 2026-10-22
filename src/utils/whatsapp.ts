import { STORE_CONFIG } from '../data/servicesData';
import type { ServiceItem, PricingOption } from '../data/servicesData';

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

export const createWhatsAppUrl = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodedMessage}`;
};

export const generateServiceWhatsAppMessage = (
  service: ServiceItem,
  selectedOption?: PricingOption,
  durationMonths: number = 1
): string => {
  const option = selectedOption || service.options[0];
  const totalPrice = option.price * durationMonths;

  return `¡Hola *${STORE_CONFIG.storeName}*! 👋

Me interesa adquirir la siguiente cuenta:

📌 *Servicio:* ${service.name}
✨ *Plan:* ${option.name}
⏱️ *Duración:* ${durationMonths} ${durationMonths === 1 ? 'Mes' : 'Meses'}
💰 *Precio Total:* ${formatCurrency(totalPrice)} COP

 Quedo atento a los medios de pago disponibles (Nequi / Daviplata / Bancolombia) para realizar la consignación y recibir mi cuenta. ¡Muchas gracias!`;
};

export const generateComboWhatsAppMessage = (
  comboTitle: string,
  price: number,
  servicesIncluded: string[]
): string => {
  return `¡Hola *${STORE_CONFIG.storeName}*! 👋

Quiero aprovechar la super oferta del *${comboTitle}*:

📦 *Servicios Incluidos:* ${servicesIncluded.join(' + ')}
💰 *Precio de Combo:* ${formatCurrency(price)} COP

Por favor indíquenme los datos para realizar el pago por Nequi/Daviplata/Bancolombia. ¡Gracias!`;
};

export const generateGeneralWhatsAppMessage = (): string => {
  return `¡Hola *${STORE_CONFIG.storeName}*! 👋 Quisiera más información sobre el catálogo de cuentas de streaming, combos en oferta y métodos de pago.`;
};
