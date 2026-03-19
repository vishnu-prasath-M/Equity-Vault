import { useParams, Link } from "react-router-dom";
import { caseStudies } from "@/data/mockData";
import { 
  Check, ChevronLeft, TrendingUp, DollarSign, BarChart3, Users, 
  Clock, Percent, ArrowUpRight, ExternalLink, Layers
} from "lucide-react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    return (
      <div className="min-h-screen bg-white pt-14 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-semibold text-slate-900">Case study not found</p>
          <Link to="/case-studies" className="text-sm text-slate-500 hover:text-slate-900 mt-2 inline-flex items-center gap-1 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to archive
          </Link>
        </div>
      </div>
    );
  }

  const netProfit = study.revenue - study.expenses;

  const stats = [
    { 
      label: "Monthly Revenue", 
      value: `$${study.revenue.toLocaleString()}`, 
      icon: DollarSign, 
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    { 
      label: "Monthly Expenses", 
      value: `$${study.expenses.toLocaleString()}`, 
      icon: BarChart3, 
      color: "text-slate-700",
      bgColor: "bg-slate-100"
    },
    { 
      label: "Net Profit", 
      value: `$${netProfit.toLocaleString()}`, 
      icon: TrendingUp, 
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    { 
      label: "Growth Rate", 
      value: `+${study.growthRate}% MoM`, 
      icon: ArrowUpRight, 
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
  ];

  const secondaryStats = [
    { label: "Team Size", value: `${study.teamSize} people`, icon: Users },
    { label: "Time to Launch", value: study.timeToLaunch, icon: Clock },
    { label: "Profit Margin", value: `${study.profitMargin}%`, icon: Percent },
    { label: "Model", value: study.model, icon: Layers },
  ];

  return (
    <div className="min-h-screen bg-white pt-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900 mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back to case studies
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex flex-col sm:flex-row items-start gap-5 mb-6">
            {/* Image */}
            <div className="w-full sm:w-48 h-32 sm:h-32 rounded-2xl overflow-hidden bg-slate-100 shrink-0 shadow-sm">
              <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-1">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant="outline" className="border-slate-200 text-slate-600">
                  {study.category}
                </Badge>
                {study.verified && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-100">
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span className="text-xs font-medium text-emerald-700">Verified Income</span>
                  </div>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                {study.title}
              </h1>

              <div className="flex items-center gap-3 mt-3 text-sm">
                <span className="font-medium text-slate-700">{study.founder}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500">{study.companyName || study.model}</span>
              </div>
            </div>
          </div>

          {/* Primary Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -2 }}
                className={`p-4 rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md`}
              >
                <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${stat.bgColor} mb-3`}>
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                </div>
                <p className={`font-mono-data text-lg font-bold ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Secondary Stats */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 py-4 border-y border-slate-100">
            {secondaryStats.map((stat, index) => (
              <div key={stat.label} className="flex items-center gap-2">
                <stat.icon className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-600">{stat.label}:</span>
                <span className="text-sm font-medium text-slate-900">{stat.value}</span>
                {index < secondaryStats.length - 1 && (
                  <span className="hidden sm:inline text-slate-200 ml-4">|</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Story & Lessons */}
          <div className="lg:col-span-2 space-y-10">
            {/* The Story */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-lg font-bold text-slate-900 tracking-tight mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-emerald-500 rounded-full" />
                The Story
              </h2>
              <div className="prose prose-slate prose-sm max-w-none">
                <p className="text-slate-600 leading-relaxed text-pretty text-base">
                  {study.story}
                </p>
              </div>
            </motion.section>

            {/* Growth Chart */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-lg font-bold text-slate-900 tracking-tight mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-emerald-500 rounded-full" />
                Revenue Growth
              </h2>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart data={study.revenueHistory}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 11, fill: "#64748b" }}
                      axisLine={{ stroke: "#e2e8f0" }}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 11, fill: "#64748b" }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "white",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px",
                        fontSize: "12px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      }}
                      formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                      labelStyle={{ color: "#64748b", marginBottom: "4px" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#10b981"
                      strokeWidth={2.5}
                      dot={false}
                      activeDot={{ r: 5, fill: "#10b981", stroke: "white", strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.section>

            {/* Key Lessons */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-lg font-bold text-slate-900 tracking-tight mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-emerald-500 rounded-full" />
                Key Lessons
              </h2>
              <ul className="space-y-3">
                {study.lessons.map((lesson, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    </span>
                    <span className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
                      {lesson}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Right Column - Tech Stack */}
          <div className="lg:col-span-1">
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="sticky top-24"
            >
              <h2 className="text-lg font-bold text-slate-900 tracking-tight mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-slate-400" />
                Tech Stack
              </h2>
              
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-3">
                {study.techStack.map((tool) => (
                  <motion.a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 2 }}
                    className="group flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-white border border-slate-100 shadow-sm flex items-center justify-center p-1.5 overflow-hidden">
                      <img 
                        src={tool.logo} 
                        alt={tool.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback to text if logo fails
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-medium text-slate-900">
                          {tool.name}
                        </h4>
                        <ExternalLink className="w-3 h-3 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-[11px] text-slate-400 uppercase tracking-wide">
                        {tool.category}
                      </p>
                      {tool.description && (
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                          {tool.description}
                        </p>
                      )}
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6 p-4 rounded-xl bg-slate-900 text-white">
                <p className="text-sm font-medium mb-2">Want the full playbook?</p>
                <p className="text-xs text-slate-400 mb-3">
                  Get access to the complete SOPs and templates used by {study.founder}.
                </p>
                <Button 
                  size="sm" 
                  className="w-full bg-white text-slate-900 hover:bg-slate-100"
                >
                  Get Full Playbook
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
