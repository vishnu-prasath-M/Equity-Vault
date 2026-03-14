import { TrendingUp, DollarSign, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Trending Niche of the Week",
    subtitle: "AI-Powered Resume Builders",
    metric: "+340%",
    metricLabel: "search growth",
    icon: TrendingUp,
    span: "lg:col-span-2",
  },
  {
    title: "Low Capital Ideas",
    subtitle: "$0 – $500 to start",
    metric: "127",
    metricLabel: "verified ideas",
    icon: DollarSign,
    span: "",
  },
  {
    title: "Market Gap Analysis",
    subtitle: "Underserved markets with high demand",
    metric: "48",
    metricLabel: "opportunities",
    icon: BarChart3,
    span: "",
  },
];

const IdeaVault = () => {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground tracking-tight">Idea Vault</h2>
          <p className="text-sm text-muted-foreground mt-1">Curated business opportunities, updated weekly.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className={`${card.span} group p-6 rounded-xl bg-card card-shadow hover:card-shadow-hover transition-shadow duration-200 cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-secondary">
                  <card.icon className="w-4 h-4 text-foreground" />
                </div>
                <span className="font-mono-data text-2xl font-bold text-success">{card.metric}</span>
              </div>
              <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{card.subtitle}</p>
              <p className="text-[10px] text-muted-foreground mt-3 uppercase tracking-wider font-medium">
                {card.metricLabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdeaVault;
