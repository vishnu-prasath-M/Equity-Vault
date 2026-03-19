import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CaseStudy } from "@/data/mockData";
import { ArrowUpRight, TrendingUp, Users, Clock, Check } from "lucide-react";

interface BentoGridProps {
  studies: CaseStudy[];
}

const BentoCard = ({
  study,
  index,
  size = "normal",
}: {
  study: CaseStudy;
  index: number;
  size?: "large" | "normal" | "featured";
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/case-study/${study.id}`);
  };

  const sizeClasses = {
    featured: "sm:col-span-2 sm:row-span-2",
    large: "sm:col-span-2",
    normal: "",
  };

  const imageHeight = {
    featured: "h-64 sm:h-80",
    large: "h-48",
    normal: "h-40",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      onClick={handleClick}
      className={`
        group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200
        bg-white transition-all duration-300 hover:border-slate-300 hover:shadow-xl
        ${sizeClasses[size]}
      `}
    >
      {/* Image - No overlay, clean design */}
      <div className={`relative ${imageHeight[size]} overflow-hidden bg-slate-100`}>
        <img
          src={study.image}
          alt={study.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Verified badge - positioned top left */}
        {study.verified && (
          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2 py-1 shadow-sm border border-slate-100">
            <Check className="h-3 w-3 text-emerald-500" />
            <span className="text-[10px] font-medium text-slate-700">Verified</span>
          </div>
        )}

        {/* Revenue badge - bottom left */}
        <div className="absolute bottom-3 left-3">
          <div className="flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1.5 shadow-sm border border-slate-100">
            <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
            <span className="font-mono-data text-xs font-semibold text-slate-900">
              ${study.revenue.toLocaleString()}/mo
            </span>
          </div>
        </div>

        {/* Hover arrow - top right */}
        <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm border border-slate-100 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-3.5 w-3.5 text-slate-700" />
        </div>
      </div>

      {/* Content */}
      <div className={`p-4 ${size === "featured" ? "sm:p-5" : ""}`}>
        {/* Category badge */}
        <div className="mb-2 inline-flex items-center rounded-md bg-slate-50 px-2 py-1 border border-slate-100">
          <span className="text-[10px] font-medium uppercase tracking-wide text-slate-500">
            {study.category}
          </span>
        </div>

        <h3 className={`font-semibold text-slate-900 leading-snug group-hover:text-emerald-600 transition-colors ${
          size === "featured" ? "text-base sm:text-lg" : "text-sm"
        }`}>
          {study.title}
        </h3>

        <p className={`mt-1.5 text-slate-500 line-clamp-2 ${
          size === "featured" ? "text-sm" : "text-xs"
        }`}>
          {study.description}
        </p>

        {/* Meta info */}
        <div className={`mt-3 flex flex-wrap items-center gap-2 ${size === "featured" ? "gap-3 mt-4" : ""}`}>
          <div className="flex items-center gap-1 text-[10px] text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">
            <Users className="h-3 w-3" />
            <span>{study.teamSize}</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">
            <Clock className="h-3 w-3" />
            <span>{study.timeToLaunch}</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
            <TrendingUp className="h-3 w-3" />
            <span>{study.profitMargin}% margin</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BentoGrid = ({ studies }: BentoGridProps) => {
  // Take first 6 studies and arrange them in a bento pattern
  const featuredStudies = studies.slice(0, 6);

  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Featured Case Studies
            </h2>
            <p className="mt-2 text-slate-500">
              Real businesses with verified revenue and detailed breakdowns
            </p>
          </div>
          <a
            href="/case-studies"
            className="hidden items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 sm:flex"
          >
            View all
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Bento grid layout - 3 columns with featured cards spanning */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {featuredStudies.map((study, index) => {
            // Define bento layout pattern for 6 items
            // 0: featured (2x2), 1-2: normal, 3: large (2x1), 4-5: normal
            let size: "large" | "normal" | "featured" = "normal";
            if (index === 0) size = "featured";
            else if (index === 3) size = "large";

            return (
              <BentoCard
                key={study.id}
                study={study}
                index={index}
                size={size}
              />
            );
          })}
        </div>

        {/* Mobile view all link */}
        <div className="mt-8 text-center sm:hidden">
          <a
            href="/case-studies"
            className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            View all case studies
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
