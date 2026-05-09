import { Hero } from '../components/sections/Hero';
import { DemoDashboard } from '../components/sections/DemoDashboard';
import { SecurityScenarios } from '../components/sections/SecurityScenarios';
import { Timeline } from '../components/sections/Timeline';
import { Problem } from '../components/sections/Problem';
import { Solution } from '../components/sections/Solution';
import { WhatItTellsYou } from '../components/sections/WhatItTellsYou';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Comparison } from '../components/sections/Comparison';
import { Integrations } from '../components/sections/Integrations';
import { WhoItsFor } from '../components/sections/WhoItsFor';
import { EarlyAccess } from '../components/sections/EarlyAccess';

export function Home() {
  return (
    <>
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
    </>
  );
}
