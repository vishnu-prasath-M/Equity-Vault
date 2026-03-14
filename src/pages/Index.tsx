import { useState, useEffect, useCallback } from "react";
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
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const toggleSearch = useCallback(() => setSearchOpen((p) => !p), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggleSearch();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [toggleSearch]);

  const filtered =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((s) => s.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearchOpen={toggleSearch} />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <HeroSection onSearchOpen={toggleSearch} />
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
