import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { businessIdeas, categories } from "@/data/mockData";
import { Search, ChevronLeft, Star, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const IdeaVaultPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return businessIdeas.filter((idea) => {
      const matchesSearch =
        !search ||
        idea.niche.toLowerCase().includes(search.toLowerCase()) ||
        idea.trendReason.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || idea.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const difficultyStars = (d: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < d ? "text-foreground fill-foreground" : "text-border"}`}
      />
    ));

  return (
    <div className="min-h-screen bg-background pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <Link to="/" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground mb-4">
          <ChevronLeft className="w-3 h-3" /> Back to home
        </Link>

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Idea Vault</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {businessIdeas.length} verified business ideas with market sizing and trend analysis.
          </p>
        </div>

        {/* Search */}
        <div className="flex items-center gap-3 px-4 py-3 bg-secondary rounded-xl mb-6 max-w-xl">
          <Search className="w-4 h-4 text-muted-foreground shrink-0" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search niches..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
        </div>

        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-3.5 py-1.5 text-sm rounded-lg transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((idea, i) => (
            <motion.div
              key={idea.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: i * 0.04 }}
              className="p-5 rounded-xl card-shadow hover:card-shadow-hover transition-shadow duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-sm font-semibold text-foreground">{idea.niche}</h3>
                <span className="shrink-0 ml-2 px-2 py-0.5 text-[10px] font-mono-data bg-secondary text-muted-foreground rounded-md">
                  {idea.category}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-3">
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Difficulty</p>
                  <div className="flex gap-0.5">{difficultyStars(idea.difficulty)}</div>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Market Size</p>
                  <p className="font-mono-data text-sm font-semibold text-success">{idea.marketSize}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-2">
                <TrendingUp className="w-3 h-3 text-success shrink-0" />
                <p className="text-[10px] font-medium text-success uppercase tracking-wider">Why it's trending</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                {idea.trendReason}
              </p>

              <div className="mt-3 pt-3 border-t border-border/50">
                <p className="text-[10px] text-muted-foreground">
                  Capital required: <span className="font-medium text-foreground">{idea.capitalRequired}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-sm text-muted-foreground">No ideas match your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdeaVaultPage;
