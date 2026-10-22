# 🎬 DaffEntertainment - Catálogo Web & Automatización de Ventas

Plataforma web moderna, rápida y optimizada para la exhibición y venta de suscripciones digitales, streaming, música, TV en vivo y herramientas Pro. Diseñada para convertir visitantes en clientes a través de un flujo de compra automatizado directamente conectado a **WhatsApp**.

---

## 🚀 Vista Rápida del Proyecto

* **Repositorio en GitHub:** [Paginaa-Web-DaffEntertainment](https://github.com/dburbanoh-dev/Paginaa-Web-DaffEntertainment)
* **Objetivo:** Brindar a los clientes una experiencia fluida e intuitiva para explorar plataformas digitales (Netflix, Disney+, Max, Spotify, Canva Pro, Magis TV, etc.), personalizar su plan y generar órdenes de compra automatizadas vía WhatsApp con soporte para pagos colombianos (**Nequi** y **Llaves Bre-B**).

---

## ✨ Características Principales

### 1. 🛍️ Catálogo Interactivo y Búsqueda en Tiempo Real
* **Filtros por categoría:** Streaming & Cine, Música & Audio, TV en Vivo & Deportes, Anime & Manga, y Herramientas & Trabajo.
* **Contadores dinámicos:** Muestra la cantidad de plataformas disponibles por categoría.
* **Buscador en vivo:** Filtra instantáneamente por nombre de servicio, categoría o descripción.

### 2. ⚡ Modal de Personalización de Órdenes (`OrderModal`)
* Selección de plan (perfil individual con PIN / cuenta completa).
* Selector de duración (1 mes, 3 meses, etc.) con cálculo de precio total en **Pesos Colombianos (COP)** en tiempo real.
* Efecto visual festivo con animación de confeti al confirmar la orden.
* Redirección instantánea al chat de WhatsApp con un mensaje pre-estructurado con todos los detalles de la orden.

### 3. 🔥 Sección de Combos y Super Ahorro (`CombosSection`)
* Paquetes de servicios combinados (ej. Combo Cine, Combo Música & Videos, Combo Deportes).
* Visualización clara del precio original, precio en combo y ahorro total para el cliente.
* Enlace de compra directa para cada combo.

### 4. 🛡️ Garantías y Métodos de Pago (`GuaranteeSection`)
* Destaca la propuesta de valor: **Entrega inmediata en 5 a 10 minutos**, **Garantía total de 30 días** y soporte técnico continuo.
* Métodos de pago destacados: **Nequi** y **Llaves Bre-B**.

### 5. ❓ Preguntas Frecuentes (`FAQSection`)
* Acordeón desplegable con respuestas a las dudas más comunes: medios de entrega, garantías, renovaciones de cuenta y seguridad.

### 6. 💬 Botón Flotante de WhatsApp (`WhatsAppFloat`)
* Botón de contacto directo con efecto de pulso y tooltip persuasivo para consultas generales.

---

## 🛠️ Stack Tecnológico

| Tecnología | Rol en el Proyecto |
| :--- | :--- |
| **React 19** | Biblioteca principal de interfaz de usuario |
| **TypeScript** | Tipado estático y robustez en la lógica de datos |
| **Vite** | Bundler y entorno de desarrollo ultra rápido |
| **Tailwind CSS** | Sistema de estilos utilitario y diseño responsivo |
| **Framer Motion** | Animaciones suaves y transiciones de interfaz |
| **Lucide React** | Iconografía moderna y ligera |
| **Canvas Confetti** | Efectos visuales de celebración en las compras |
| **Oxlint** | Linter de alto rendimiento para calidad de código |

---

## 📁 Estructura del Proyecto

```text
DaffEntertainment Automatizacion/
├── public/                     # Recursos públicos estáticos (logos, favicons, iconos)
├── src/
│   ├── assets/                 # Imágenes y recursos del proyecto
│   ├── components/             # Componentes modulares de la interfaz
│   │   ├── Navbar.tsx          # Barra de navegación con buscador integrado y efecto glass
│   │   ├── Hero.tsx            # Sección principal de bienvenida y llamado a la acción
│   │   ├── CategoryFilter.tsx  # Pestañas de filtrado de categorías con contadores
│   │   ├── ProductCard.tsx     # Tarjeta individual de cada servicio/plataforma
│   │   ├── ProductGrid.tsx     # Cuadrícula interactiva de servicios
│   │   ├── OrderModal.tsx      # Modal para configurar y cotizar la orden
│   │   ├── CombosSection.tsx   # Sección de promociones y paquetes especiales
│   │   ├── GuaranteeSection.tsx# Sección de confianza, garantías y métodos de pago
│   │   ├── FAQSection.tsx      # Preguntas frecuentes con acordeones interactivos
│   │   ├── WhatsAppFloat.tsx   # Botón flotante siempre visible para atención directa
│   │   └── Footer.tsx          # Pie de página con enlaces, avisos legales y créditos
│   ├── data/
│   │   └── servicesData.ts     # Configuración de tienda, lista de servicios, combos y FAQs
│   ├── utils/
│   │   └── whatsapp.ts         # Generador de URLs y mensajes automatizados para WhatsApp
│   ├── App.tsx                 # Componente principal y orquestador del estado
│   ├── main.tsx                # Punto de entrada de la aplicación React
│   └── index.css               # Configuración global de Tailwind y estilos personalizados
├── index.html                  # Plantilla HTML base
├── package.json                # Dependencias y scripts de ejecución
├── tailwind.config.js          # Configuración del tema y colores de Tailwind
├── tsconfig.json               # Configuración del compilador de TypeScript
└── vite.config.ts              # Configuración del empaquetador Vite
```

---

## ⚙️ Instalación y Ejecución Local

Para clonar y correr este proyecto en tu máquina local:

### 1. Clonar el repositorio
```bash
git clone https://github.com/dburbanoh-dev/Paginaa-Web-DaffEntertainment.git
cd Paginaa-Web-DaffEntertainment
```

### 2. Instalar dependencias
Usando `npm`:
```bash
npm install
```
*(O usando `pnpm install` si tienes pnpm configurado).*

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
La aplicación estará disponible localmente en `http://localhost:5173`.

### 4. Compilar para producción
```bash
npm run build
```
Generará los archivos listos para producción en la carpeta `dist/`.

---

## 🔧 Personalización y Configuración

Toda la información del negocio se centraliza en un único archivo para facilitar cualquier actualización:

### Configurar datos del negocio y número de WhatsApp:
Edita el archivo [`src/data/servicesData.ts`](src/data/servicesData.ts):

```typescript
export const STORE_CONFIG = {
  storeName: "DaffEntertainment",
  whatsappNumber: "573233445867",       // Número con código de país (sin '+' ni espacios)
  whatsappFormatted: "+57 323 344 5867",// Formato legible para el usuario
  deliveryTime: "5 - 10 Minutos",
  guaranteeDays: 30,
  paymentMethods: ["Nequi", "Llaves Bre-B"]
};
```

### Agregar o modificar servicios y precios:
En el mismo archivo [`src/data/servicesData.ts`](src/data/servicesData.ts), la constante `SERVICES_LIST` contiene todos los productos con sus opciones de pantallas, precios en COP, insignias y características.

---

## 🌐 Despliegue en Vercel

1. Ingresa a [Vercel](https://vercel.com/) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **Add New...** > **Project**.
3. Importa el repositorio **`Paginaa-Web-DaffEntertainment`**.
4. En el campo **Project Name**, asegúrate de que el nombre esté **completamente en minúsculas** (por ejemplo: `pagina-web-daffentertainment`).
5. Vercel detectará el framework como **Vite** automáticamente.
6. Haz clic en **Deploy**. ¡Tu sitio estará en vivo en menos de 1 minuto!

---

## 👤 Autor

* **DaffEntertainment**
* **Desarrollo:** [dburbanoh-dev](https://github.com/dburbanoh-dev)
