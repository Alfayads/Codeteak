import { Badge } from "@mantine/core"
import HeroSection from "./HeroSection"
import { MacbookScroll } from "./ui/MacbookScroll"
import InfiniteRibbonDemo from "./InfiniteRibbon"
import { ServiceSection } from "./ServiceSection"
import { TeamParallax } from "./TeamParallax"
import { CodeteakHoverEffect } from "./CodeteakHoverEffect"



const MainSection = () => {
  return (
    <>
      <div className="h-screen mb-40">
        <HeroSection />
        <InfiniteRibbonDemo />
      </div>

      <div className="h-[150vh] ">
        <ServiceSection />
      </div>

      <div className="h-[100vh] hidden md:flex ">
        <TeamParallax />
      </div>
    </>
  );
};


export default MainSection;
