import { Search } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = ({ onSearchOpen }: { onSearchOpen: () => void }) => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-success-muted rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-success" />
            <span className="text-xs font-medium text-success">5,204 verified reports</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight text-balance">
            The Roadmap to<br />
            <span className="font-mono-data text-success">$10,000</span>/Month.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto text-pretty">
            Explore 5,000+ verified income reports and business playbooks.
            Learn from people who have actually done it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.2, 0, 0, 1] }}
          className="mt-10"
        >
          <button
            onClick={onSearchOpen}
            className="w-full max-w-2xl mx-auto flex items-center gap-3 px-5 py-3.5 bg-secondary rounded-xl text-muted-foreground hover:bg-secondary/80 transition-colors cursor-text"
          >
            <Search className="w-4 h-4 shrink-0" />
            <span className="text-sm">Search for 'SaaS', 'Newsletter', or 'Revenue &gt; $5k'...</span>
            <kbd className="ml-auto text-[10px] border border-border px-1.5 py-0.5 rounded font-mono-data hidden sm:inline">
              ⌘K
            </kbd>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
