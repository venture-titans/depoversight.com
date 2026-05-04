import { useTranslation } from 'react-i18next';
import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { StickyMobileCta } from './components/layout/StickyMobileCta';
import { Hero } from './components/sections/Hero';
import { DemoDashboard } from './components/sections/DemoDashboard';
import { SecurityScenarios } from './components/sections/SecurityScenarios';
import { Timeline } from './components/sections/Timeline';
import { Problem } from './components/sections/Problem';
import { Solution } from './components/sections/Solution';
import { WhatItTellsYou } from './components/sections/WhatItTellsYou';
import { HowItWorks } from './components/sections/HowItWorks';
import { Comparison } from './components/sections/Comparison';
import { Integrations } from './components/sections/Integrations';
import { WhoItsFor } from './components/sections/WhoItsFor';
import { EarlyAccess } from './components/sections/EarlyAccess';

export default function App() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-ink-950 text-fg">
      <a href="#main-content" className="skip-link">
        {t('nav.skipToContent')}
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <DemoDashboard />
        <SecurityScenarios />
        <Timeline />
        <Problem />
        <Solution />
        <WhatItTellsYou />
        <HowItWorks />
        <Comparison />
        <Integrations />
        <WhoItsFor />
        <EarlyAccess />
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  );
}
