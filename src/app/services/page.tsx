import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from './components/ServicesHero';
import ServicesGrid from './components/ServicesGrid';
import ServicesProcess from './components/ServicesProcess';
import ServicesCTA from './components/ServicesCTA';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesCTA />
      <Footer />
    </main>
  );
}