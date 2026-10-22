import React, { useState, useMemo, useRef } from 'react';
import { SERVICES_LIST } from './data/servicesData';
import type { ServiceItem } from './data/servicesData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductGrid } from './components/ProductGrid';
import { OrderModal } from './components/OrderModal';
import { CombosSection } from './components/CombosSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FAQSection } from './components/FAQSection';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const catalogRef = useRef<HTMLDivElement>(null);

  const scrollToCatalog = () => {
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter products by category and search input
  const filteredServices = useMemo(() => {
    return SERVICES_LIST.filter((service) => {
      const matchesCategory =
        activeCategory === 'all' || service.category === activeCategory;
      const matchesSearch =
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: { [key: string]: number } = {
      all: SERVICES_LIST.length,
      streaming: 0,
      music: 0,
      tv: 0,
      anime: 0,
      tools: 0,
    };
    SERVICES_LIST.forEach((s) => {
      if (counts[s.category] !== undefined) {
        counts[s.category]++;
      }
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#070a12] text-slate-100 font-sans selection:bg-red-600 selection:text-white">
      
      {/* Glass Sticky Navbar */}
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearchFocus={scrollToCatalog}
      />

      {/* Main Hero Section */}
      <Hero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        scrollToCatalog={scrollToCatalog}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-20">
        
        {/* Catalog Anchor */}
        <section id="catalogo" ref={catalogRef} className="scroll-mt-24 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Plataformas Disponibles
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Selecciona tu servicio favorito y solicita la entrega inmediata por WhatsApp.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <CategoryFilter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            counts={categoryCounts}
          />

          {/* Product Cards Grid */}
          <ProductGrid
            services={filteredServices}
            searchTerm={searchTerm}
            onSelectService={(service) => setSelectedService(service)}
            onClearSearch={() => {
              setSearchTerm('');
              setActiveCategory('all');
            }}
          />
        </section>

        {/* Combos & Bundles Section */}
        <CombosSection />

        {/* Guarantee & Payment Advantages */}
        <GuaranteeSection />

        {/* Frequently Asked Questions */}
        <FAQSection />

      </main>

      {/* Order Customization Modal */}
      <OrderModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloat />

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default App;
