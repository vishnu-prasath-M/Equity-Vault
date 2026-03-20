import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { caseStudies, categories, revenueRanges } from "@/data/mockData";
import { Check, Filter, X, ChevronLeft, ArrowUpRight, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const teamSizeOptions = [
  { label: "Solo (1)", value: 1 },
  { label: "Small (2–5)", value: 5 },
  { label: "Medium (6–15)", value: 15 },
];

const sortOptions = [
  { label: "Default", value: "default" },
  { label: "Revenue (High to Low)", value: "revenue-desc" },
  { label: "Newest", value: "newest" },
];

const businessTypes = ["SaaS", "E-commerce", "Agency", "Newsletter"];
const countries = ["USA", "UK", "Canada", "Australia", "Germany"];
const growthMethods = ["SEO", "Paid Ads", "Content", "Referrals", "Cold Outreach"];

const CaseStudiesArchive = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRevenue, setSelectedRevenue] = useState<string | null>(null);
  const [selectedTeamSize, setSelectedTeamSize] = useState<number | null>(null);
  const [selectedSort, setSelectedSort] = useState("default");
  const [selectedBusinessType, setSelectedBusinessType] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedGrowth, setSelectedGrowth] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const filtered = useMemo(() => {
    let filtered = caseStudies.filter((s) => {
      if (selectedCategory !== "All" && s.category !== selectedCategory) return false;
      if (selectedRevenue) {
        const range = revenueRanges.find((r) => r.label === selectedRevenue);
        if (range && (s.revenue < range.min || s.revenue > range.max)) return false;
      }
      if (selectedTeamSize && s.teamSize > selectedTeamSize) return false;
      if (selectedBusinessType && s.model !== selectedBusinessType) return false;
      return true;
    });

    // Apply sorting
    if (selectedSort === "revenue-desc") {
      filtered.sort((a, b) => b.revenue - a.revenue);
    } else if (selectedSort === "newest") {
      filtered.sort((a, b) => b.id.localeCompare(a.id));
    }

    return filtered;
  }, [selectedCategory, selectedRevenue, selectedTeamSize, selectedSort, selectedBusinessType]);

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedRevenue(null);
    setSelectedTeamSize(null);
    setSelectedSort("default");
    setSelectedBusinessType(null);
    setSelectedCountry(null);
    setSelectedGrowth(null);
  };

  const hasFilters = selectedCategory !== "All" || selectedRevenue || selectedTeamSize || selectedBusinessType || selectedCountry || selectedGrowth;

  return (
    <div className="min-h-screen bg-white pt-14">
      <div className="flex">
        {/* Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.aside
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-64 shrink-0 border-r border-gray-100 h-[calc(100vh-56px)] sticky top-14 overflow-y-auto bg-gray-50/30"
            >
              <div className="p-5">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
                      <Filter className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-slate-900">Filters</span>
                  </div>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="w-7 h-7 rounded-lg hover:bg-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {hasFilters && (
                  <button
                    onClick={clearFilters}
                    className="w-full mb-6 px-3 py-2 text-xs font-medium text-slate-500 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-slate-700 transition-colors"
                  >
                    Clear all filters
                  </button>
                )}

                {/* Sort By */}
                <div className="mb-6">
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-3">
                    Sort By
                  </h4>
                  <div className="space-y-1">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setSelectedSort(option.value)}
                        className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 ${selectedSort === option.value
                          ? "bg-gray-900 text-white"
                          : "text-gray-600 hover:bg-white"
                          }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Revenue Range */}
                <div className="mb-6">
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Revenue Range
                  </h4>
                  <div className="space-y-1">
                    {revenueRanges.map((range) => (
                      <button
                        key={range.label}
                        onClick={() => setSelectedRevenue(selectedRevenue === range.label ? null : range.label)}
                        className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 ${selectedRevenue === range.label
                          ? "bg-slate-900 text-white shadow-sm"
                          : "text-slate-600 hover:bg-white hover:shadow-sm"
                          }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Business Model */}
                <div className="mb-6">
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Business Model
                  </h4>
                  <div className="space-y-1">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 ${selectedCategory === cat
                          ? "bg-slate-900 text-white shadow-sm"
                          : "text-slate-600 hover:bg-white hover:shadow-sm"
                          }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Team Size */}
                <div>
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Team Size
                  </h4>
                  <div className="space-y-1">
                    {teamSizeOptions.map((opt) => (
                      <button
                        key={opt.label}
                        onClick={() => setSelectedTeamSize(selectedTeamSize === opt.value ? null : opt.value)}
                        className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 ${selectedTeamSize === opt.value
                          ? "bg-slate-900 text-white shadow-sm"
                          : "text-slate-600 hover:bg-white hover:shadow-sm"
                          }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-5xl">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              {!sidebarOpen && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={() => setSidebarOpen(true)}
                  className="p-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors"
                >
                  <Filter className="w-4 h-4" />
                </motion.button>
              )}
              <div>
                <Link
                  to="/"
                  className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-slate-700 mb-1 transition-colors"
                >
                  <ChevronLeft className="w-3 h-3" /> Back to home
                </Link>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Case Studies</h1>
                <p className="text-sm text-slate-500 mt-0.5">
                  {filtered.length} {filtered.length === 1 ? "story" : "stories"} found
                </p>
              </div>
            </div>

            {/* Results List */}
            <div className="space-y-4">
              {filtered.map((study, i) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Link
                    to={`/case-study/${study.id}`}
                    className="group block"
                  >
                    <div className="border-b border-gray-100 pb-6 hover:bg-gray-50/50 -mx-4 px-4 py-6 rounded-lg transition-all duration-200">
                      <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
                        {/* Hero/Thumbnail Image */}
                        <div className="w-full sm:w-64 sm:h-40 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200/60 shadow-sm group-hover:shadow-md transition-shadow relative">
                          <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                          {/* Founder Avatar Overlay */}
                          <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white/95 backdrop-blur-sm p-1.5 pr-3 rounded-full shadow-sm border border-black/5">
                            <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                              <span className="text-[10px] font-bold text-white">
                                {study.founder.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                              </span>
                            </div>
                            <span className="text-[10px] font-semibold text-slate-800 tracking-wide">{study.founder}</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 w-full">
                          {/* Top metadata */}
                          <div className="flex items-center gap-2 mb-2.5">
                            <span className="text-[11px] font-semibold text-emerald-700 px-2.5 py-0.5 bg-emerald-50 border border-emerald-100 rounded-full">
                              {study.category}
                            </span>
                            <span className="text-[11px] font-semibold text-slate-600 px-2 py-0.5 bg-slate-100 border border-slate-200 rounded-full">
                              {study.model}
                            </span>
                          </div>

                          {/* Headline */}
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors leading-tight text-pretty tracking-tight">
                            {study.title}
                          </h3>

                          {/* Summary */}
                          <p className="text-[13px] sm:text-sm text-slate-600 mb-5 line-clamp-2 leading-relaxed max-w-2xl text-pretty">
                            {study.description}
                          </p>

                          {/* Data Row */}
                          <div className="flex flex-wrap items-center gap-4 sm:gap-6 bg-slate-50/50 p-4 rounded-xl border border-slate-100/50">
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-emerald-600">
                                ${study.revenue.toLocaleString()}/mo
                              </span>
                              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                                Revenue
                              </span>
                            </div>

                            <div className="w-px h-8 bg-slate-200 hidden sm:block"></div>

                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-slate-900">
                                {study.profitMargin}%
                              </span>
                              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                                Profit Margin
                              </span>
                            </div>

                            <div className="w-px h-8 bg-slate-200 hidden sm:block"></div>

                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-slate-900">
                                {study.timeToLaunch}
                              </span>
                              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                                Time to Launch
                              </span>
                            </div>

                            {study.verified && (
                              <div className="ml-auto w-full sm:w-auto flex items-center gap-1.5 mt-2 sm:mt-0 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                <span className="text-[11px] font-bold text-emerald-700">Verified</span>
                              </div>
                            )}
                          </div>

                          {/* Social Proof */}
                          <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-100/80">
                            <div className="flex -space-x-2">
                              {[1, 2, 3, 4].map((i) => (
                                <div
                                  key={i}
                                  className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center shrink-0"
                                >
                                  <span className="text-[9px] font-bold text-slate-500">
                                    {String.fromCharCode(65 + (study.id.charCodeAt(0) % 20) + i)}
                                  </span>
                                </div>
                              ))}
                            </div>
                            <span className="text-[11px] font-medium text-slate-500">
                              Read by <span className="text-slate-700 font-semibold">{Math.floor((parseInt(study.id) * 47) % 500 + 150)}</span> founders
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}

              {filtered.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16 px-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
                    <Search className="w-6 h-6 text-slate-400" />
                  </div>
                  <p className="text-slate-500 font-medium">No case studies match your filters.</p>
                  <button
                    onClick={clearFilters}
                    className="mt-3 text-sm font-medium text-slate-900 hover:text-emerald-600 underline underline-offset-4 transition-colors"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CaseStudiesArchive;
