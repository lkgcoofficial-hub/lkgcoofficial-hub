import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import WhoWeAreHero from './components/WhoWeAreHero';
import OurStory from './components/OurStory';
import OurVision from './components/OurVision';
import OurApproach from './components/OurApproach';
import LeadershipTeam from './components/LeadershipTeam';
import HowWeThink from './components/HowWeThink';
import WhatWeAreBuilding from './components/WhatWeAreBuilding';
import WhoWeAreCTA from './components/WhoWeAreCTA';

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <WhoWeAreHero />

      <OurStory />

      <OurVision />

      <OurApproach />

      <LeadershipTeam />

      <HowWeThink />

      <WhatWeAreBuilding />

      <WhoWeAreCTA />

      <Footer />
    </main>
  );
}
