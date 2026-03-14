import { motion } from "framer-motion";
import { CaseStudy } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";

const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
      className="group flex flex-col space-y-3 p-4 rounded-xl bg-card card-shadow hover:card-shadow-hover transition-shadow duration-200"
    >
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-secondary">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
          loading="lazy"
        />
      </div>
      <div className="flex items-center justify-between">
        <span className="font-mono-data text-sm font-semibold text-success tracking-tight">
          ${study.revenue.toLocaleString()}/mo
        </span>
        <Badge variant="outline" className="text-[10px] font-mono-data uppercase tracking-wider border-border text-muted-foreground">
          {study.model}
        </Badge>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2">
          {study.title}
        </h3>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
          {study.description}
        </p>
      </div>
      <div className="flex items-center gap-2 pt-1">
        <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-[10px] font-medium text-foreground">
          {study.founder.charAt(0)}
        </div>
        <span className="text-xs text-muted-foreground">{study.founder}</span>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;
