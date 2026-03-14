import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { caseStudies, categories, revenueRanges } from "@/data/mockData";
import { Check, Filter, X, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

const teamSizeOptions = [
  { label: "Solo (1)", value: 1 },
  { label: "Small (2–5)", value: 5 },
  { label: "Medium (6–15)", value: 15 },
];

const CaseStudiesArchive = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRevenue, setSelectedRevenue] = useState<string | null>(null);
  const [selectedTeamSize, setSelectedTeamSize] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const filtered = useMemo(() => {
    return caseStudies.filter((s) => {
      if (selectedCategory !== "All" && s.category !== selectedCategory) return false;
      if (selectedRevenue) {
        const range = revenueRanges.find((r) => r.label === selectedRevenue);
        if (range && (s.revenue < range.min || s.revenue > range.max)) return false;
      }
      if (selectedTeamSize && s.teamSize > selectedTeamSize) return false;
      return true;
    });
  }, [selectedCategory, selectedRevenue, selectedTeamSize]);

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedRevenue(null);
    setSelectedTeamSize(null);
  };

  const hasFilters = selectedCategory !== "All" || selectedRevenue || selectedTeamSize;

  return (
    <div className="min-h-screen bg-background pt-14">
      <div className="flex">
        {/* Sidebar */}
        {sidebarOpen && (
          <motion.aside
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-64 shrink-0 border-r border-border/50 h-[calc(100vh-56px)] sticky top-14 overflow-y-auto p-5"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-semibold text-foreground">Filters</span>
              </div>
              <button onClick={() => setSidebarOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            </div>

            {hasFilters && (
              <button onClick={clearFilters} className="text-xs text-muted-foreground hover:text-foreground mb-4 underline">
                Clear all filters
              </button>
            )}

            {/* Revenue Range */}
            <div className="mb-6">
              <h4 className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-3">
                Revenue Range
              </h4>
              <div className="space-y-1">
                {revenueRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setSelectedRevenue(selectedRevenue === range.label ? null : range.label)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                      selectedRevenue === range.label
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Business Model */}
            <div className="mb-6">
              <h4 className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-3">
                Business Model
              </h4>
              <div className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Team Size */}
            <div>
              <h4 className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-3">
                Team Size
              </h4>
              <div className="space-y-1">
                {teamSizeOptions.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => setSelectedTeamSize(selectedTeamSize === opt.value ? null : opt.value)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                      selectedTeamSize === opt.value
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-6">
              {!sidebarOpen && (
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Filter className="w-4 h-4" />
                </button>
              )}
              <div>
                <Link to="/" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground mb-1">
                  <ChevronLeft className="w-3 h-3" /> Back to home
                </Link>
                <h1 className="text-2xl font-bold text-foreground tracking-tight">Case Studies</h1>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {filtered.length} {filtered.length === 1 ? "story" : "stories"} found
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {filtered.map((study, i) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.03 }}
                >
                  <Link
                    to={`/case-study/${study.id}`}
                    className="group flex items-center gap-5 p-4 rounded-xl card-shadow hover:card-shadow-hover transition-all duration-200"
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-secondary shrink-0">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-foreground line-clamp-1 group-hover:text-foreground/80 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{study.founder} · {study.model}</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-6 shrink-0">
                      <div className="text-right">
                        <p className="font-mono-data text-sm font-semibold text-success">
                          ${study.revenue.toLocaleString()}/mo
                        </p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Revenue</p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono-data text-sm text-foreground">{study.profitMargin}%</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Margin</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-foreground">{study.timeToLaunch}</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Launch</p>
                      </div>
                      {study.verified && (
                        <div className="flex items-center gap-1 px-2 py-1 bg-success-muted rounded-md">
                          <Check className="w-3 h-3 text-success" />
                          <span className="text-[10px] font-medium text-success">Verified</span>
                        </div>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}

              {filtered.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-sm text-muted-foreground">No case studies match your filters.</p>
                  <button onClick={clearFilters} className="mt-2 text-sm text-foreground underline">
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CaseStudiesArchive;
