export interface PricingOption {
  id: string;
  name: string;
  price: number;
  period: string;
  description?: string;
  popular?: boolean;
}

export interface ServiceItem {
  id: string;
  name: string;
  category: 'streaming' | 'music' | 'anime' | 'tv' | 'tools';
  categoryLabel: string;
  tagline: string;
  badge?: string;
  badgeType?: 'hot' | 'sale' | 'new' | 'guaranteed';
  basePrice: number;
  options: PricingOption[];
  features: string[];
  gradient: string;
  accentColor: string;
  logoBg: string;
  iconName: string;
  description: string;
  available: boolean;
}

export interface ComboItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  servicesIncluded: string[];
  originalPrice: number;
  comboPrice: number;
  savings: number;
  popular?: boolean;
  gradient: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const STORE_CONFIG = {
  storeName: "DaffEntertainment",
  whatsappNumber: "573233445867",
  whatsappFormatted: "+57 323 344 5867",
  currencySymbol: "$",
  currencyCode: "COP",
  deliveryTime: "5 - 10 Minutos",
  guaranteeDays: 30,
  paymentMethods: ["Nequi", "Llaves Bre-B"]
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'netflix',
    name: 'Netflix',
    category: 'streaming',
    categoryLabel: 'Streaming & Cine',
    tagline: 'Tus películas y series favoritas en Ultra HD 4K.',
    badge: 'MÁS VENDIDO 🔥',
    badgeType: 'hot',
    basePrice: 14000,
    options: [
      { id: 'screen', name: '1 Pantalla UHD 4K (Perfil con PIN)', price: 14000, period: '1 Mes', popular: true, description: 'Tu propio perfil privado con PIN de seguridad en cuenta compartida.' },
      { id: 'full', name: 'Cuenta Completa (4 Pantallas)', price: 42000, period: '1 Mes', description: 'Cuenta exclusiva sin compartir con nadie.' }
    ],
    features: [
      'Calidad Ultra HD 4K',
      'Perfil privado con PIN',
      'Sin anuncios',
      'Garantía total 30 días',
      'Soporte post-venta rápido'
    ],
    gradient: 'from-red-600 via-rose-700 to-black',
    accentColor: '#E50914',
    logoBg: 'bg-red-600',
    iconName: 'Film',
    description: 'Disfruta del mayor catálogo de streaming mundial. Garantizamos cero caídas y reemplazo inmediato si requieres asistencia.',
    available: true
  },
  {
    id: 'disney-premium',
    name: 'Disney+ Premium',
    category: 'streaming',
    categoryLabel: 'Streaming & Cine',
    tagline: 'Incluye ESPN, Star+, Disney, Pixar, Marvel y Star Wars.',
    badge: 'OFERTA TOP ✨',
    badgeType: 'sale',
    basePrice: 14000,
    options: [
      { id: 'screen', name: '1 Pantalla Premium + ESPN (4K)', price: 14000, period: '1 Mes', popular: true, description: 'Perfil privado en plan Premium con todo el catálogo de deportes ESPN.' },
      { id: 'full', name: 'Cuenta Completa Premium', price: 38000, period: '1 Mes', description: 'Cuenta completa 4 pantallas en simultáneo.' }
    ],
    features: [
      'Disney+, Pixar, Marvel, Star Wars & ESPN',
      'Deportes en vivo (Champions, F1, Tenis)',
      'Calidad 4K UHD + Dolby Atmos',
      'Descargas ilimitadas',
      'Garantía continua'
    ],
    gradient: 'from-blue-600 via-indigo-800 to-black',
    accentColor: '#1E40AF',
    logoBg: 'bg-blue-600',
    iconName: 'Sparkles',
    description: 'El plan Premium más completo de Disney. Disfruta los mejores eventos deportivos en vivo por ESPN y el catálogo de entretenimiento familiar.',
    available: true
  },
  {
    id: 'hbo-max',
    name: 'Max (HBO Max)',
    category: 'streaming',
    categoryLabel: 'Streaming & Cine',
    tagline: 'Warner Bros, DC, HBO, Champions League y películas de cine.',
    badge: 'RECOMENDADO ⭐',
    badgeType: 'hot',
    basePrice: 12000,
    options: [
      { id: 'screen', name: '1 Perfil 4K UHD', price: 12000, period: '1 Mes', popular: true, description: 'Perfil propio en cuenta Premium de Max.' },
      { id: 'full', name: 'Cuenta Completa', price: 28000, period: '1 Mes', description: 'Acceso total a la cuenta.' }
    ],
    features: [
      'Series originales exclusivas de HBO',
      'Estrenos directo de cine',
      'Calidad 4K Ultra HD',
      '3 dispositivos en simultáneo',
      'Garantía 100%'
    ],
    gradient: 'from-purple-700 via-indigo-900 to-black',
    accentColor: '#7C3AED',
    logoBg: 'bg-purple-700',
    iconName: 'Tv',
    description: 'La casa de House of the Dragon, The Last of Us, Harry Potter y el universo DC.',
    available: true
  },
  {
    id: 'prime-video',
    name: 'Prime Video',
    category: 'streaming',
    categoryLabel: 'Streaming & Cine',
    tagline: 'Series exclusivas, películas y envíos de entretenimiento.',
    badge: 'ECONÓMICO 💡',
    badgeType: 'sale',
    basePrice: 12000,
    options: [
      { id: 'screen', name: '1 Perfil con PIN (4K)', price: 12000, period: '1 Mes', popular: true, description: 'Perfil personalizado.' },
      { id: 'full', name: 'Cuenta Completa (3 Pantallas)', price: 26000, period: '1 Mes', description: 'Toda la cuenta para ti.' }
    ],
    features: [
      'Series Amazon Originals',
      'Calidad 4K Ultra HD',
      'Perfil con nombre y PIN',
      'Multi-dispositivo',
      'Garantía activa'
    ],
    gradient: 'from-cyan-600 via-blue-800 to-black',
    accentColor: '#00A8E1',
    logoBg: 'bg-cyan-600',
    iconName: 'Play',
    description: 'Disfruta de The Boys, Rings of Power, Fallout y cientos de películas taquilleras.',
    available: true
  },
  {
    id: 'spotify',
    name: 'Spotify Premium',
    category: 'music',
    categoryLabel: 'Música & Audio',
    tagline: 'Música ilimitada sin anuncios y descargas offline.',
    badge: 'MÚSICA TOP 🎵',
    badgeType: 'hot',
    basePrice: 11000,
    options: [
      { id: 'personal', name: 'Renovación / Cuenta Personal', price: 11000, period: '1 Mes', popular: true, description: 'Se activa en tu propio correo o te damos cuenta nueva.' },
      { id: 'quarterly', name: 'Plan 3 Meses Premium', price: 28000, period: '3 Meses', description: 'Ahorro especial por trimestre.' }
    ],
    features: [
      'Música sin anuncios ni interrupciones',
      'Descarga tus playlists para escuchar sin internet',
      'Calidad de audio alta definición',
      'Salto de canciones ilimitado',
      'Compatible con todos los dispositivos'
    ],
    gradient: 'from-emerald-600 via-green-800 to-black',
    accentColor: '#22C55E',
    logoBg: 'bg-emerald-600',
    iconName: 'Music',
    description: 'Escucha más de 100 millones de canciones y podcasts sin comerciales en tu celular, tablet o parlante inteligente.',
    available: true
  },
  {
    id: 'youtube-premium',
    name: 'YouTube Premium',
    category: 'music',
    categoryLabel: 'Música & Audio',
    tagline: 'Videos sin anuncios + YouTube Music incluido.',
    badge: 'SÚPER POPULAR 🔥',
    badgeType: 'hot',
    basePrice: 17000,
    options: [
      { id: 'email', name: 'Invitación a tu propio correo Gmail', price: 17000, period: '1 Mes', popular: true, description: 'Activación directa en tu correo sin cambiar de cuenta.' },
      { id: 'account', name: 'Cuenta Nueva Preparada', price: 16000, period: '1 Mes', description: 'Te entregamos credenciales listas para usar.' }
    ],
    features: [
      'Sin anuncios en todo YouTube',
      'Reproducción en segundo plano (pantalla apagada)',
      'YouTube Music Premium Incluido',
      'Descarga de videos en HD',
      'Funciona en Smart TV, Móvil y PC'
    ],
    gradient: 'from-red-600 via-rose-900 to-black',
    accentColor: '#FF0000',
    logoBg: 'bg-red-600',
    iconName: 'Video',
    description: 'La mejor experiencia de YouTube. Olvídate de la publicidad molesta y disfruta de música y videos sin interrupciones.',
    available: true
  },
  {
    id: 'canva-pro',
    name: 'Canva Pro',
    category: 'tools',
    categoryLabel: 'Herramientas & Trabajo',
    tagline: 'Diseño gráfico profesional, fotos stock y quitador de fondos IA.',
    badge: 'DISEÑO PRO 🎨',
    badgeType: 'hot',
    basePrice: 10000,
    options: [
      { id: 'personal', name: 'Activación en Tu Propio Correo', price: 10000, period: '1 Mes', popular: true, description: 'Se vincula a tu correo de Canva sin perder tus diseños anteriores.' },
      { id: 'annual', name: 'Plan Anual Canva Pro', price: 45000, period: '1 Año', description: 'Acceso continuo durante todo el año.' }
    ],
    features: [
      'Quitador de fondos instantáneo con IA',
      'Más de 100 millones de fotos, videos y elementos Premium',
      'Redimensionador mágico de diseños',
      'Kits de marca personalizados',
      'Garantía durante la suscripción'
    ],
    gradient: 'from-teal-500 via-cyan-700 to-black',
    accentColor: '#00C4CC',
    logoBg: 'bg-teal-500',
    iconName: 'Palette',
    description: 'Crea contenido impactante para tus redes sociales, negocios o proyectos con las herramientas Pro e Inteligencia Artificial de Canva.',
    available: true
  },
  {
    id: 'magistv',
    name: 'Magis TV',
    category: 'tv',
    categoryLabel: 'TV en Vivo & Deportes',
    tagline: '+1000 Canales en vivo, deportes premium y cine actualizado.',
    badge: 'TV EN VIVO ⚡',
    badgeType: 'hot',
    basePrice: 11000,
    options: [
      { id: 'device', name: '1 Dispositivo (TV Box / FireStick / Android)', price: 11000, period: '1 Mes', popular: true, description: 'Código de acceso directo para tu dispositivo Android o Smart TV.' },
      { id: 'multi', name: '3 Dispositivos en Simultáneo', price: 25000, period: '1 Mes', description: 'Para ver en toda la casa.' }
    ],
    features: [
      'Más de 1,200 Canales en Vivo HD/FHD',
      'Deportes en Vivo (Liga local, Champions, UFC, NBA, F1)',
      'Películas y Series de todas las plataformas',
      'Sección de canales infantiles y premium',
      'Soporte técnico directo'
    ],
    gradient: 'from-amber-600 via-orange-800 to-black',
    accentColor: '#F59E0B',
    logoBg: 'bg-amber-600',
    iconName: 'Tv2',
    description: 'El servicio líder de TV por internet. Funciona en Android TV, Fire TV Stick, TV Box y celulares Android.',
    available: true
  },
  {
    id: 'paramount',
    name: 'Paramount+',
    category: 'streaming',
    categoryLabel: 'Streaming & Cine',
    tagline: 'Cine de Hollywood, Nickelodeon, Showtime y Copa Libertadores.',
    badge: 'PRECIO ESPECIAL 💥',
    badgeType: 'sale',
    basePrice: 12000,
    options: [
      { id: 'screen', name: '1 Perfil HD/4K', price: 12000, period: '1 Mes', popular: true, description: 'Perfil privado.' },
      { id: 'full', name: 'Cuenta Completa', price: 24000, period: '1 Mes', description: 'Toda la cuenta.' }
    ],
    features: [
      'Fútbol en vivo Copa Libertadores y Sudamericana',
      'Series exclusivas de Showtime',
      'Todo el contenido de Nickelodeon y MTV',
      'Películas de Paramount Pictures',
      'Calidad HD / 4K'
    ],
    gradient: 'from-blue-700 via-sky-900 to-black',
    accentColor: '#0064FF',
    logoBg: 'bg-blue-700',
    iconName: 'Film',
    description: 'Disfruta del entretenimiento de clase mundial con el catálogo de Paramount, Nickelodeon y transmisiones de fútbol.',
    available: true
  },
  {
    id: 'plex',
    name: 'Plex Pass / Server',
    category: 'streaming',
    categoryLabel: 'Streaming & Cine',
    tagline: 'Biblioteca masiva de películas 4K, series y estrenos sin límites.',
    badge: 'BIBLIOTECA VIP 🎬',
    badgeType: 'guaranteed',
    basePrice: 10000,
    options: [
      { id: 'screen', name: 'Acceso a Servidor VIP (1 Pantalla)', price: 10000, period: '1 Mes', popular: true, description: 'Acceso directo a nuestro servidor Plex con miles de títulos.' },
      { id: 'duo', name: 'Acceso 2 Pantallas', price: 18000, period: '1 Mes', description: 'Para ver en 2 dispositivos a la vez.' }
    ],
    features: [
      'Más de 20,000 Películas y Series en 4K/1080p',
      'Actualización diaria con estrenos de cine',
      'Subtítulos en español latino impecables',
      'Compatible con Smart TV, PC, Celulares y Consolas',
      'Servidores ultra rápidos sin almacenamiento local'
    ],
    gradient: 'from-yellow-600 via-amber-800 to-black',
    accentColor: '#E5A00D',
    logoBg: 'bg-yellow-600',
    iconName: 'Server',
    description: 'Ten todas las plataformas en un solo lugar. Plex te da acceso a una biblioteca cinematográfica gigantesca en máxima calidad.',
    available: true
  },
  {
    id: 'universal-plus',
    name: 'Universal+',
    category: 'streaming',
    categoryLabel: 'Streaming & Cine',
    tagline: 'Cine de Universal Studios, series exclusivas y entretenimiento.',
    badge: 'ESTRENO ⭐',
    badgeType: 'new',
    basePrice: 15000,
    options: [
      { id: 'screen', name: '1 Perfil HD/4K', price: 15000, period: '1 Mes', popular: true, description: 'Perfil privado con PIN.' },
      { id: 'full', name: 'Cuenta Completa', price: 32000, period: '1 Mes', description: 'Cuenta independiente.' }
    ],
    features: [
      'Series de Universal Studios y NBC',
      'Canales Universal Cinema, Crime, Comedy y Reality',
      'Estrenos cinematográficos de Hollywood',
      'Transmisión en alta definición',
      'Garantía total'
    ],
    gradient: 'from-violet-700 via-purple-900 to-black',
    accentColor: '#6D28D9',
    logoBg: 'bg-violet-700',
    iconName: 'Tv',
    description: 'Accede a los canales premium y series exclusivas de Universal en una sola app.',
    available: true
  },
  {
    id: 'vix-plus',
    name: 'VIX+ (ViX Premium)',
    category: 'streaming',
    categoryLabel: 'Streaming & Cine',
    tagline: 'El mayor contenido en español: novelas, series y Liga MX.',
    badge: 'EN ESPAÑOL 🇲🇽',
    badgeType: 'sale',
    basePrice: 10000,
    options: [
      { id: 'screen', name: '1 Perfil ViX Premium', price: 10000, period: '1 Mes', popular: true, description: 'Perfil con clave de acceso.' },
      { id: 'full', name: 'Cuenta Completa (3 Dispositivos)', price: 22000, period: '1 Mes', description: 'Acceso total.' }
    ],
    features: [
      'Partidos de fútbol en vivo (Liga MX, Champions en español)',
      'Series y películas originales 100% en español',
      'Telenovelas clásicas y estrenos exclusivos',
      'Sin anuncios',
      'Garantía inmediata'
    ],
    gradient: 'from-orange-600 via-red-800 to-black',
    accentColor: '#EA580C',
    logoBg: 'bg-orange-600',
    iconName: 'Flame',
    description: 'La plataforma líder en contenido de habla hispana con deportes en vivo y producciones originales.',
    available: true
  },
  {
    id: 'crunchyroll',
    name: 'Crunchyroll Mega Fan',
    category: 'anime',
    categoryLabel: 'Anime & Manga',
    tagline: 'Todo el anime del mundo en simulcast directo desde Japón.',
    badge: 'ANIME KING ⛩️',
    badgeType: 'hot',
    basePrice: 10000,
    options: [
      { id: 'screen', name: '1 Perfil Mega Fan (4K)', price: 10000, period: '1 Mes', popular: true, description: 'Perfil privado sin comerciales.' },
      { id: 'full', name: 'Cuenta Completa Mega Fan (4 Dispositivos)', price: 22000, period: '1 Mes', description: 'Para compartir con amigos.' }
    ],
    features: [
      'Simulcasts 1 hora después de Japón',
      'Sin anuncios y en calidad Full HD / 4K',
      'Descargas offline en app móvil',
      'Catálogo de mangas digitales',
      'Garantía continua'
    ],
    gradient: 'from-orange-500 via-amber-700 to-black',
    accentColor: '#F97316',
    logoBg: 'bg-orange-500',
    iconName: 'Zap',
    description: 'Dragon Ball, Attack on Titan, Demon Slayer, Jujutsu Kaisen, One Piece y miles de episodios de anime.',
    available: true
  },
  {
    id: 'directv-go',
    name: 'DirecTV GO (DGO)',
    category: 'tv',
    categoryLabel: 'TV en Vivo & Deportes',
    tagline: 'Canales de TV en vivo con DSPORTS exclusivo y deportes.',
    badge: 'DEPORTES ⚽',
    badgeType: 'guaranteed',
    basePrice: 18000,
    options: [
      { id: 'screen', name: '1 Dispositivo DGO con DSPORTS', price: 18000, period: '1 Mes', popular: true, description: 'Perfil o pantalla para TV o Celular.' },
      { id: 'full', name: 'Cuenta Completa (2 Dispositivos)', price: 38000, period: '1 Mes', description: 'Acceso total DGO.' }
    ],
    features: [
      'Canales DSPORTS exclusivos (Copa del Mundo, Conmebol, LaLiga)',
      '+90 Canales de TV en vivo en HD',
      'Sección VOD con películas y series',
      'Retroceder programación en vivo',
      'Garantía asegurada'
    ],
    gradient: 'from-sky-600 via-blue-900 to-black',
    accentColor: '#0284C7',
    logoBg: 'bg-sky-600',
    iconName: 'Trophy',
    description: 'Disfruta de la mejor televisión en vivo y eventos deportivos exclusivos de DSPORTS sin contratos molestos.',
    available: true
  }
];

export const COMBOS_LIST: ComboItem[] = [
  {
    id: 'combo-cine-top',
    title: 'Combo Cine Supremo',
    subtitle: 'Netflix UHD + Disney+ Premium (con ESPN)',
    badge: 'AHORRA $4.000 COP 🔥',
    servicesIncluded: ['Netflix', 'Disney+ Premium'],
    originalPrice: 28000,
    comboPrice: 24000,
    savings: 4000,
    popular: true,
    gradient: 'from-red-600 via-purple-700 to-blue-700'
  },
  {
    id: 'combo-entretenimiento',
    title: 'Combo Trío Entretenimiento',
    subtitle: 'Netflix + Max (HBO) + Prime Video',
    badge: 'SÚPER AHORRO 💥',
    servicesIncluded: ['Netflix', 'Max (HBO)', 'Prime Video'],
    originalPrice: 38000,
    comboPrice: 32000,
    savings: 6000,
    popular: false,
    gradient: 'from-purple-600 via-indigo-700 to-pink-600'
  },
  {
    id: 'combo-musica-sin-fin',
    title: 'Combo Música & Videos Pro',
    subtitle: 'Spotify Premium + YouTube Premium',
    badge: 'TOP MÚSICA 🎵',
    servicesIncluded: ['Spotify Premium', 'YouTube Premium'],
    originalPrice: 28000,
    comboPrice: 24000,
    savings: 4000,
    popular: true,
    gradient: 'from-emerald-500 via-teal-600 to-red-600'
  },
  {
    id: 'combo-deportes-tv',
    title: 'Combo Deportes & TV Total',
    subtitle: 'Magis TV + Disney+ Premium (ESPN)',
    badge: '100% DEPORTES ⚽',
    servicesIncluded: ['Magis TV', 'Disney+ Premium'],
    originalPrice: 25000,
    comboPrice: 21000,
    savings: 4000,
    popular: false,
    gradient: 'from-amber-500 via-orange-600 to-blue-600'
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: '¿Cómo recibo los datos de mi cuenta tras realizar el pago?',
    answer: 'Una vez confirmes tu pago por Nequi o Llaves Bre-B, nuestro equipo de soporte te enviará las credenciales (correo, clave y perfil) en un lapso estimado de 5 a 10 minutos directamente por WhatsApp.'
  },
  {
    question: '¿Qué garantía tienen los servicios que compro en DaffEntertainment?',
    answer: 'Todos nuestros servicios cuentan con garantía completa durante el tiempo contratado (30 días en planes mensuales). Si se presenta algún inconveniente técnico, te brindamos solución o reemplazo inmediato.'
  },
  {
    question: '¿Puedo renovar la misma cuenta sin perder mis perfiles ni historial?',
    answer: '¡Sí, totalmente! Te notificamos antes de que venza tu mes para que realices el pago de renovación por Nequi o Llaves Bre-B y sigas disfrutando la misma cuenta con tus listas y recomendaciones intactas.'
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos transferencias instantáneas únicamente por Nequi y Llaves Bre-B.'
  },
  {
    question: '¿Es seguro comprar con DaffEntertainment?',
    answer: '100% seguro. Contamos con más de 500 clientes satisfechos. Te brindamos atención personalizada y transparente en todo momento por WhatsApp.'
  }
];
