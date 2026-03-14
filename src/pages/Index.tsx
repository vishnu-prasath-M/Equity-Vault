import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import SearchOverlay from "@/components/SearchOverlay";
import HeroSection from "@/components/HeroSection";
import FilterBar from "@/components/FilterBar";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import IdeaVault from "@/components/IdeaVault";
import IncomeTable from "@/components/IncomeTable";
import SuccessRoadmap from "@/components/SuccessRoadmap";
import ToolsGrid from "@/components/ToolsGrid";
import FooterSection from "@/components/FooterSection";
import { caseStudies } from "@/data/mockData";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((s) => s.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onSearchOpen={() => {
        // Trigger CMD+K via keyboard event
        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
      }} />
      <FilterBar active={activeFilter} onChange={setActiveFilter} />
      <CaseStudyGrid studies={filtered} />
      <IdeaVault />
      <IncomeTable />
      <SuccessRoadmap />
      <ToolsGrid />
      <FooterSection />
    </div>
  );
};

export default Index;
