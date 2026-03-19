import HeroSection from "@/components/HeroSection";
import BentoGrid from "@/components/BentoGrid";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import FilterBar from "@/components/FilterBar";
import IncomeTable from "@/components/IncomeTable";
import SuccessRoadmap from "@/components/SuccessRoadmap";
import ToolsGrid from "@/components/ToolsGrid";
import FoundersPulse from "@/components/FoundersPulse";
import FeaturedEditorial from "@/components/FeaturedEditorial";
import IdeaVaultFeed from "@/components/IdeaVaultFeed";
import StackQuickView from "@/components/StackQuickView";
import FooterSection from "@/components/FooterSection";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <HeroSection onSearchOpen={() => {
        // Trigger CMD+K via keyboard event
        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
      }} />

      {/* Ticker Tape */}
      <FoundersPulse />

      {/* New Asymmetric Layout */}
      <FeaturedEditorial />

      {/* New Directory-Pulse Layout */}
      <IdeaVaultFeed />

      {/* Stack Logos Quick View */}
      <StackQuickView />

      <IncomeTable />
      <SuccessRoadmap />
      <ToolsGrid />

      {/* Text Hover Effect Section */}
      <section className="py-20 px-4 sm:px-6 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto h-[20rem] flex items-center justify-center">
          <TextHoverEffect text="Equity" />
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Index;
