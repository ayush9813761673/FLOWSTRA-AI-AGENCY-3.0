import React from "react";
import { Navbar } from "@/components/ui/mini-navbar";
import { CinematicHero } from "@/components/ui/cinematic-landing-hero";
import { TrustedBy } from "./components/TrustedBy";
import { CaseStudies } from "./components/CaseStudies";
import { Features } from "./components/Features";
import { ToolsWeUse } from "./components/ToolsWeUse";
import { Testimonials } from "./components/Testimonials";
import { Calculator } from "./components/Calculator";
import { Pricing } from "./components/Pricing";
import { Team } from "./components/Team";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { DynamicIslandTOC } from "./components/ui/dynamic-island-toc";

import { GradientBackground } from "@/components/ui/paper-design-shader-background";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-[var(--accent-blue)] selection:text-white overflow-x-hidden">
      <GradientBackground />
      <DynamicIslandTOC selector="section h2, [data-toc]">
        <Navbar />
        <main>
          <div className="relative w-full">
            <CinematicHero
              brandName="Flowstra"
              tagline1="Automate your flow,"
              tagline2="Get more clients."
              className="pt-20 pb-16"
            />
            <TrustedBy />
          </div>
          <CaseStudies />
          <Testimonials />
          <ToolsWeUse />
          <Features />
          <Team />
          <Calculator />
          <Pricing />
          <FinalCTA />
        </main>
        <Footer />
        <WhatsAppButton />
      </DynamicIslandTOC>
    </div>
  );
}
