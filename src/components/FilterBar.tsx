import { categories } from "@/data/mockData";

interface FilterBarProps {
  active: string;
  onChange: (cat: string) => void;
}

const FilterBar = ({ active, onChange }: FilterBarProps) => {
  return (
    <div className="sticky top-14 z-30 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              className={`shrink-0 px-3.5 py-1.5 text-sm rounded-lg transition-all duration-200 ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
              style={{ ...(active === cat ? {} : {}) }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
