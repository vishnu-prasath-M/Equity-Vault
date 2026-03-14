import { useState } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    label: "Case Studies",
    children: ["All Stories", "By Revenue", "By Business Model"],
  },
  {
    label: "Idea Vault",
    children: ["Niche Database", "Trending Now", "Low Capital"],
  },
  {
    label: "The Stack",
    children: ["Marketing Tools", "Tech Stack", "AI Tools"],
  },
  { label: "Playbooks", children: null },
];

const Navbar = ({ onSearchOpen }: { onSearchOpen: () => void }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-border/50 h-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-lg font-bold tracking-tight text-foreground">
            FoundersVault
          </a>
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg">
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </button>
                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-48 bg-card card-shadow rounded-xl p-1.5 border border-border/50"
                    >
                      {item.children.map((child) => (
                        <a
                          key={child}
                          href="#"
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                        >
                          {child}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onSearchOpen}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search</span>
            <kbd className="text-[10px] border border-border px-1.5 py-0.5 rounded font-mono-data ml-2">
              ⌘K
            </kbd>
          </button>
          <Button size="sm" className="hidden sm:inline-flex rounded-lg text-sm h-8">
            Start Learning
          </Button>
          <button
            className="lg:hidden p-2 text-muted-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border/50 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <Button size="sm" className="w-full rounded-lg text-sm">
                  Start Learning
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
