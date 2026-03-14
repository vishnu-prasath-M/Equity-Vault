import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies } from "@/data/mockData";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent toggles
      }
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const filtered = query
    ? caseStudies.filter(
        (c) =>
          c.title.toLowerCase().includes(query.toLowerCase()) ||
          c.founder.toLowerCase().includes(query.toLowerCase()) ||
          c.model.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]"
          onClick={onClose}
          style={{ background: "rgba(9,9,11,0.2)", backdropFilter: "blur(2px)" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -8 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-2xl bg-card card-shadow rounded-xl border border-border/50 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border/50">
              <Search className="w-4 h-4 text-muted-foreground shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for 'SaaS', 'Newsletter', or 'Revenue > $5k'..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              />
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            </div>
            {query && (
              <div className="max-h-64 overflow-y-auto p-2">
                {filtered.length === 0 ? (
                  <p className="text-sm text-muted-foreground px-3 py-4 text-center">
                    No results for "{query}"
                  </p>
                ) : (
                  filtered.map((item) => (
                    <a
                      key={item.id}
                      href="#"
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.founder}</p>
                        <p className="text-xs text-muted-foreground line-clamp-1">{item.title}</p>
                      </div>
                      <span className="text-xs font-mono-data text-success font-medium">
                        ${item.revenue.toLocaleString()}/mo
                      </span>
                    </a>
                  ))
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
