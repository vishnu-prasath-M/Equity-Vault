import { useState, useMemo } from "react";
import { toolEntries, toolCategories, ToolEntry } from "@/data/mockData";
import {
  Search, Star, ExternalLink, TrendingUp, CheckCircle,
  Zap, ChevronRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ToolDrawer from "@/components/ToolDrawer";

// ─── Category sidebar config ──────────────────────────────────────────────
const CATEGORY_ICONS: Record<string, string> = {
  "All": "🔍",
  "Payments": "💳",
  "E-commerce": "🛍️",
  "Email Marketing": "📧",
  "Hosting": "🚀",
  "Productivity": "⚙️",
  "Marketing": "📣",
  "Design": "🎨",
  "Backend": "🗄️",
  "No-Code": "🔧",
  "Automation": "⚡",
  "AI": "🤖",
};

// ─── Filter pill config ────────────────────────────────────────────────────
const FILTER_PILLS = [
  { key: "top", label: "Top Rated", icon: Star, activeClass: "bg-amber-900 text-amber-100 border-amber-800" },
  { key: "free", label: "Free Tier Available", icon: CheckCircle, activeClass: "bg-emerald-900 text-emerald-100 border-emerald-800" },
  { key: "popular", label: "Most Popular", icon: TrendingUp, activeClass: "bg-blue-900 text-blue-100 border-blue-800" },
];

// ─── Star Rating ───────────────────────────────────────────────────────────
const RatingStars: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-gray-200"}`}
      />
    ))}
  </div>
);

// ─── High-Context List Item ────────────────────────────────────────────────
const ToolListItem: React.FC<{ tool: ToolEntry; onOpenDrawer: (tool: ToolEntry) => void }> = ({
  tool, onOpenDrawer,
}) => {
  return (
    <div
      className="group flex items-start gap-4 px-5 py-4 cursor-pointer hover:bg-gray-50 border-b border-gray-100 transition-colors last:border-b-0"
      onClick={() => onOpenDrawer(tool)}
    >
      {/* Brand Logo — 40×40 */}
      <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center p-1.5 shrink-0">
        <img
          src={tool.logo}
          alt={tool.name}
          className="w-full h-full object-contain"
          loading="lazy"
          onError={(e) => {
            const t = e.target as HTMLImageElement;
            t.style.display = "none";
            (t.parentElement as HTMLElement).innerHTML = `<span class="text-sm font-bold text-gray-400">${tool.name.charAt(0)}</span>`;
          }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Row 1: Name + pricing badge */}
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="text-[14px] font-semibold text-gray-900 leading-tight">{tool.name}</h3>
          <div className="flex items-center gap-1.5 shrink-0">
            {tool.hasFree && (
              <Badge className="text-[10px] px-1.5 py-0 bg-emerald-50 text-emerald-700 border-emerald-200">
                Free
              </Badge>
            )}
            {tool.popular && (
              <Badge className="text-[10px] px-1.5 py-0 bg-blue-50 text-blue-700 border-blue-200">
                Popular
              </Badge>
            )}
          </div>
        </div>

        {/* Row 2: At-A-Glance Stats */}
        <div className="flex items-center gap-2 text-[11px] text-gray-500 mb-2 flex-wrap">
          <span className="flex items-center gap-1">
            <RatingStars rating={tool.rating} />
            <span className="font-semibold text-gray-700">{tool.rating}/5</span>
          </span>
          <span className="text-gray-300">|</span>
          <span>Pricing: <span className="font-medium text-gray-700">{tool.pricing}</span></span>
          <span className="text-gray-300">|</span>
          <span>Best for: <span className="font-medium text-gray-700">{tool.bestFor}</span></span>
        </div>

        {/* Row 3: Founder Verdict (2-line clamp) */}
        <p className="text-[12px] text-gray-500 leading-relaxed line-clamp-2">
          {tool.founderVerdict}
        </p>
      </div>

      {/* Arrow on hover */}
      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-600 transition-colors shrink-0 mt-2" />
    </div>
  );
};

// ─── Main Page ─────────────────────────────────────────────────────────────
const ToolDirectoryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [drawerTool, setDrawerTool] = useState<ToolEntry | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Build category counts
  const categoriesWithCounts = toolCategories.map((cat) => ({
    name: cat,
    count: cat === "All" ? toolEntries.length : toolEntries.filter((t) => t.category === cat).length,
  }));

  // Filter logic
  const filtered = useMemo(() => {
    let result = toolEntries;
    if (activeCategory !== "All") {
      result = result.filter((t) => t.category === activeCategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.founderVerdict.toLowerCase().includes(q) ||
          t.bestFor.toLowerCase().includes(q)
      );
    }
    if (activeFilter === "top") result = result.filter((t) => t.rating >= 4.6);
    if (activeFilter === "free") result = result.filter((t) => t.hasFree);
    if (activeFilter === "popular") result = result.filter((t) => t.popular);
    return result;
  }, [activeCategory, searchQuery, activeFilter]);

  const openDrawer = (tool: ToolEntry) => {
    setDrawerTool(tool);
    setDrawerOpen(true);
  };

  const toggleFilter = (key: string) => {
    setActiveFilter((prev) => (prev === key ? null : key));
  };

  return (
    <div className="min-h-screen bg-gray-50/30 pt-14">
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="text-xs font-medium text-blue-600 uppercase tracking-wider mb-2">
                Intelligence Stack
              </p>
              <h1 className="text-2xl font-bold text-gray-900">The Stack</h1>
              <p className="text-[13px] text-gray-500 mt-1">
                {toolEntries.length} tools vetted by $10k/mo founders — real verdicts, real pricing
              </p>
            </div>

            {/* Global Search */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search 200+ tools used by $10k/mo founders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Dynamic Filter Pills */}
          <div className="flex items-center gap-2 mt-5 flex-wrap">
            {FILTER_PILLS.map((pill) => {
              const Icon = pill.icon;
              const isActive = activeFilter === pill.key;
              return (
                <button
                  key={pill.key}
                  onClick={() => toggleFilter(pill.key)}
                  className={`flex items-center gap-1.5 text-[12px] px-3 py-1.5 rounded-full border font-medium transition-all ${isActive
                      ? pill.activeClass
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                    }`}
                >
                  <Icon className="w-3 h-3" />
                  {pill.label}
                </button>
              );
            })}
            {(activeFilter || activeCategory !== "All" || searchQuery) && (
              <button
                onClick={() => { setActiveFilter(null); setActiveCategory("All"); setSearchQuery(""); }}
                className="text-[12px] text-gray-400 hover:text-gray-700 transition-colors ml-1"
              >
                Clear all
              </button>
            )}
            <span className="ml-auto text-[12px] text-gray-400">
              {filtered.length} of {toolEntries.length} tools
            </span>
          </div>
        </div>
      </div>

      {/* ── Split-Pane Body ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">

          {/* Left Sidebar — Sticky Categories */}
          <aside className="hidden lg:block w-52 shrink-0">
            <div className="sticky top-20 space-y-0.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 px-3 mb-3">
                Categories
              </p>
              {categoriesWithCounts.map(({ name, count }) => {
                const isActive = activeCategory === name;
                return (
                  <button
                    key={name}
                    onClick={() => setActiveCategory(name)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-[13px] font-medium transition-all ${isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-base leading-none">{CATEGORY_ICONS[name] || "🔧"}</span>
                      {name}
                    </span>
                    <span className={`text-[11px] ${isActive ? "text-gray-400" : "text-gray-400"}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Main Feed — High-Context List */}
          <div className="flex-1 min-w-0">
            {/* Mobile Category Pills */}
            <div className="flex gap-2 mb-4 lg:hidden overflow-x-auto pb-2">
              {toolCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 text-[12px] px-3 py-1.5 rounded-full border font-medium transition-all ${activeCategory === cat
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-600 border-gray-200"
                    }`}
                >
                  {CATEGORY_ICONS[cat]} {cat}
                </button>
              ))}
            </div>

            {/* Active category heading */}
            {activeCategory !== "All" && (
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{CATEGORY_ICONS[activeCategory]}</span>
                <h2 className="text-base font-bold text-gray-900">{activeCategory}</h2>
                <span className="text-[12px] text-gray-400">{filtered.length} tools</span>
              </div>
            )}

            {/* Tool List */}
            {filtered.length > 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50 overflow-hidden">
                {filtered.map((tool) => (
                  <ToolListItem key={tool.id} tool={tool} onOpenDrawer={openDrawer} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 border border-dashed border-gray-200 rounded-2xl bg-white">
                <Search className="w-6 h-6 text-gray-300 mx-auto mb-3" />
                <p className="text-[14px] font-medium text-gray-900">No tools match your filters</p>
                <p className="text-[13px] text-gray-400 mt-1">Try a different search or category</p>
                <button
                  onClick={() => { setActiveFilter(null); setActiveCategory("All"); setSearchQuery(""); }}
                  className="mt-3 text-[13px] text-gray-900 font-medium underline underline-offset-2"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Footer note */}
            {filtered.length > 0 && (
              <p className="text-center text-[11px] text-gray-400 mt-4">
                Click any tool to see detailed pricing, real founder stories, and alternatives.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Tool Drawer */}
      <ToolDrawer tool={drawerTool} open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
};

export default ToolDirectoryPage;
