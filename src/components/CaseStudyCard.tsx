import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CaseStudy } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowUpRight, TrendingUp } from "lucide-react";

const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/case-study/${study.id}`);
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
      onClick={handleClick}
      className="group cursor-pointer flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-100">
        <img
          src={study.image}
          alt={study.title}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Verified badge overlay */}
        {study.verified && (
          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-emerald-500/90 px-2 py-0.5 backdrop-blur-sm">
            <Check className="h-3 w-3 text-white" />
            <span className="text-[10px] font-medium text-white">Verified</span>
          </div>
        )}

        {/* Hover arrow */}
        <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-3.5 w-3.5 text-slate-700" />
        </div>
      </div>

      {/* Content */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <TrendingUp className="h-3.5 w-3.5 text-emerald-600" />
          <span className="font-mono-data text-sm font-semibold text-emerald-600">
            ${study.revenue.toLocaleString()}/mo
          </span>
        </div>
        <Badge 
          variant="outline" 
          className="border-slate-200 text-[10px] font-medium uppercase tracking-wider text-slate-500"
        >
          {study.model}
        </Badge>
      </div>

      <div className="mt-2">
        <h3 className="line-clamp-2 text-sm font-semibold text-slate-900 leading-snug group-hover:text-slate-700 transition-colors">
          {study.title}
        </h3>
        <p className="mt-1 line-clamp-1 text-xs text-slate-500">
          {study.description}
        </p>
      </div>

      {/* Founder */}
      <div className="mt-3 flex items-center gap-2 pt-2 border-t border-slate-100">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[10px] font-medium text-slate-700">
          {study.founder.charAt(0)}
        </div>
        <span className="text-xs text-slate-500">{study.founder}</span>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;
