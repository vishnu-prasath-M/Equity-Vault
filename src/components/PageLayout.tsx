import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import SearchOverlay from "@/components/SearchOverlay";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const [searchOpen, setSearchOpen] = useState(false);

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

  return (
    <>
      <Navbar onSearchOpen={toggleSearch} />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      {children}
    </>
  );
};

export default PageLayout;
