import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ChevronDown, Menu, X, User, ArrowUpRight, Sparkles, Lightbulb, Wrench, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { Menu as NavMenu, MenuItem, ProductItem, HoveredLink } from "@/components/ui/navbar-menu";
import { caseStudies, businessIdeas, toolEntries } from "@/data/mockData";

const Navbar = ({ onSearchOpen }: { onSearchOpen: () => void }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleStartLearning = () => {
    if (isAuthenticated) {
      navigate('/case-studies');
    } else {
      navigate('/auth?redirect=/case-studies');
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Get featured items for dropdowns
  const featuredStudies = caseStudies.slice(0, 2);
  const trendingIdeas = businessIdeas.filter(i => i.trending).slice(0, 2);
  const topTools = toolEntries.slice(0, 4);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-border/50 h-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center shrink-0">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="EquityVault"
              className="h-7 w-auto"
            />
          </Link>
        </div>


        {/* Center - Desktop Nav */}
        <div className="hidden lg:flex items-center">
          <NavMenu setActive={setActive}>
            {/* Case Studies */}
            <MenuItem setActive={setActive} active={active} item="Case Studies">
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  {featuredStudies.map((study) => (
                    <ProductItem
                      key={study.id}
                      title={study.title}
                      to={`/case-study/${study.id}`}
                      src={study.image}
                      description={`${study.founder} • $${study.revenue}/mo`}
                    />
                  ))}
                </div>
                <div className="pt-3 border-t border-slate-100">
                  <HoveredLink to="/case-studies">
                    <Sparkles className="w-4 h-4" />
                    View All Stories
                  </HoveredLink>
                </div>
              </div>
            </MenuItem>

            {/* Idea Vault */}
            <MenuItem setActive={setActive} active={active} item="Idea Vault">
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  {trendingIdeas.map((idea) => (
                    <ProductItem
                      key={idea.id}
                      title={idea.niche}
                      to="/idea-vault"
                      src={idea.image || idea.brandLogo}
                      description={`${idea.marketSize} market • ${idea.capitalRequired}`}
                    />
                  ))}
                </div>
                <div className="flex flex-col gap-2 pt-3 border-t border-slate-100">
                  <HoveredLink to="/idea-vault?filter=trending">
                    <Lightbulb className="w-4 h-4" />
                    Trending Now
                  </HoveredLink>
                  <HoveredLink to="/idea-vault?capital=low">
                    Low Capital Ideas
                  </HoveredLink>
                </div>
              </div>
            </MenuItem>

            {/* The Stack */}
            <MenuItem setActive={setActive} active={active} item="The Stack">
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  {topTools.slice(0, 2).map((tool) => (
                    <ProductItem
                      key={tool.id}
                      title={tool.name}
                      to="/tools"
                      src={tool.logo}
                      description={`${tool.category} • ${tool.rating}★`}
                    />
                  ))}
                </div>
                <div className="flex flex-col gap-2 pt-3 border-t border-slate-100">
                  <HoveredLink to="/tools">
                    <Wrench className="w-4 h-4" />
                    All Tools
                  </HoveredLink>
                </div>
              </div>
            </MenuItem>
          </NavMenu>
          {/* Calculator - standalone outside NavMenu so clicks aren't swallowed */}
          <Link
            to="/calculator"
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-md hover:bg-slate-50"
          >
            Calculator
          </Link>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-3 shrink-0">
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
          <Button
            size="sm"
            className="hidden sm:inline-flex rounded-lg text-sm h-8"
            onClick={handleStartLearning}
          >
            Start Learning
          </Button>

          {/* Profile / Auth */}
          {isAuthenticated ? (
            <div className="relative">
              <Link
                to="/profile"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                {user?.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-semibold text-xs border border-emerald-200">
                    {getInitials(user?.name || 'U')}
                  </div>
                )}
              </Link>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex rounded-lg text-sm h-8"
              asChild
            >
              <Link to="/auth">Sign In</Link>
            </Button>
          )}
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
              <Link to="/case-studies" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg">
                Case Studies
              </Link>
              <Link to="/idea-vault" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg">
                Idea Vault
              </Link>
              <Link to="/tools" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg">
                The Stack
              </Link>
              <Link to="/calculator" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg">
                Calculator
              </Link>
              <div className="pt-2">
                <Button size="sm" className="w-full rounded-lg text-sm" asChild>
                  <Link to="/case-studies" onClick={() => setMobileOpen(false)}>Start Learning</Link>
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
