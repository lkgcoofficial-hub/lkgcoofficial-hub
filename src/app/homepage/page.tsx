import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import AboutPreview from './components/AboutPreview';
import ServicesSnapshot from './components/ServicesSnapshot';
import WhyChooseUs from './components/WhyChooseUs';
import CTABanner from './components/CTABanner';

export default function Homepage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutPreview />
      <ServicesSnapshot />
      <WhyChooseUs />
      <CTABanner />
      <Footer />
    </main>
  );
}