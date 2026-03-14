import { toolEntries } from "@/data/mockData";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ToolsGrid = () => {
  const featured = toolEntries.slice(0, 6);

  return (
    <section className="py-16 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground tracking-tight">The Stack</h2>
          <p className="text-sm text-muted-foreground mt-1">Tools trusted by top-performing founders.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((tool, i) => (
            <motion.a
              key={tool.name}
              href={tool.url}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group flex items-center justify-between p-4 rounded-xl bg-card card-shadow hover:card-shadow-hover transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-sm font-bold text-foreground">
                  {tool.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{tool.name}</p>
                  <p className="text-xs text-muted-foreground">{tool.category}</p>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;
