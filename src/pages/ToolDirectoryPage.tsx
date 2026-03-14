import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { toolEntries, toolCategories } from "@/data/mockData";
import { Star, ExternalLink, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ToolDirectoryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return toolEntries;
    return toolEntries.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  const renderStars = (rating: number) => {
    const full = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    return (
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${
              i < full
                ? "text-foreground fill-foreground"
                : i === full && hasHalf
                ? "text-foreground fill-foreground/50"
                : "text-border"
            }`}
          />
        ))}
        <span className="ml-1.5 font-mono-data text-xs text-muted-foreground">{rating}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <Link to="/" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground mb-4">
          <ChevronLeft className="w-3 h-3" /> Back to home
        </Link>

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground tracking-tight">The Stack</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Curated tools reviewed by founders. {toolEntries.length} tools across {toolCategories.length - 1} categories.
          </p>
        </div>

        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-8">
          {toolCategories.map((cat) => (
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

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((tool, i) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: i * 0.04 }}
              className="group p-5 rounded-xl card-shadow hover:card-shadow-hover transition-shadow duration-200 flex flex-col"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-sm font-bold text-foreground shrink-0">
                  {tool.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground">{tool.name}</h3>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{tool.category}</p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-1">
                {tool.description}
              </p>

              <div className="mb-3">
                {renderStars(tool.rating)}
              </div>

              <div className="p-3 bg-secondary/50 rounded-lg mb-4">
                <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-1">Our Verdict</p>
                <p className="text-xs text-foreground leading-relaxed">{tool.verdict}</p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/50">
                <span className="text-xs text-muted-foreground font-mono-data">{tool.pricing}</span>
                <Button size="sm" variant="outline" className="h-7 text-xs rounded-lg gap-1.5" asChild>
                  <a href={tool.url} target="_blank" rel="noopener noreferrer">
                    Visit Tool <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolDirectoryPage;
