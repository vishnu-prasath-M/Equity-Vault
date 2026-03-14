import { useParams, Link } from "react-router-dom";
import { caseStudies } from "@/data/mockData";
import { Check, ChevronLeft, TrendingUp, DollarSign, BarChart3, Users } from "lucide-react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    return (
      <div className="min-h-screen bg-background pt-14 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-semibold text-foreground">Case study not found</p>
          <Link to="/case-studies" className="text-sm text-muted-foreground hover:text-foreground mt-2 inline-block">
            ← Back to archive
          </Link>
        </div>
      </div>
    );
  }

  const netProfit = study.revenue - study.expenses;

  const stats = [
    { label: "Monthly Revenue", value: `$${study.revenue.toLocaleString()}`, icon: DollarSign, color: "text-success" },
    { label: "Monthly Expenses", value: `$${study.expenses.toLocaleString()}`, icon: BarChart3, color: "text-foreground" },
    { label: "Net Profit", value: `$${netProfit.toLocaleString()}`, icon: TrendingUp, color: "text-success" },
    { label: "Growth Rate", value: `+${study.growthRate}% MoM`, icon: Users, color: "text-foreground" },
  ];

  return (
    <div className="min-h-screen bg-background pt-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Back link */}
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground mb-6"
        >
          <ChevronLeft className="w-3 h-3" /> Back to case studies
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl overflow-hidden bg-secondary shrink-0">
              <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight leading-tight">
                  {study.title}
                </h1>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-sm text-muted-foreground">{study.founder}</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-sm text-muted-foreground">{study.model}</span>
                {study.verified && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-success-muted rounded-md">
                    <Check className="w-3 h-3 text-success" />
                    <span className="text-[10px] font-medium text-success">Verified</span>
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {stats.map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl card-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <stat.icon className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
                <p className={`font-mono-data text-lg font-bold ${stat.color}`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* The Story */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-10"
        >
          <h2 className="text-lg font-bold text-foreground tracking-tight mb-3">The Story</h2>
          <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
            {study.story}
          </p>
        </motion.section>

        {/* Growth Chart */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="text-lg font-bold text-foreground tracking-tight mb-4">Revenue Growth</h2>
          <div className="rounded-xl card-shadow p-5">
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={study.revenueHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(240 5.9% 90%)" />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 11, fill: "hsl(240 3.8% 46.1%)" }}
                  axisLine={{ stroke: "hsl(240 5.9% 90%)" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "hsl(240 3.8% 46.1%)" }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                />
                <Tooltip
                  contentStyle={{
                    background: "hsl(0 0% 100%)",
                    border: "1px solid hsl(240 5.9% 90%)",
                    borderRadius: "8px",
                    fontSize: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(160 84% 39.4%)"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4, fill: "hsl(160 84% 39.4%)" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.section>

        {/* The Stack */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-lg font-bold text-foreground tracking-tight mb-3">Tools Used</h2>
          <div className="flex flex-wrap gap-2">
            {study.toolsUsed.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 text-xs font-medium bg-secondary text-foreground rounded-lg"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Key Lessons */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-lg font-bold text-foreground tracking-tight mb-3">Key Lessons</h2>
          <ul className="space-y-3">
            {study.lessons.map((lesson, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="shrink-0 w-5 h-5 rounded-full bg-success-muted flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-success" />
                </span>
                <span className="text-sm text-muted-foreground leading-relaxed">{lesson}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
