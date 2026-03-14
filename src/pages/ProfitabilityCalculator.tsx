import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, DollarSign, TrendingUp, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";

const ProfitabilityCalculator = () => {
  const [revenue, setRevenue] = useState(10000);
  const [cogs, setCogs] = useState(2000);
  const [adSpend, setAdSpend] = useState(1500);
  const [opCosts, setOpCosts] = useState(1000);

  const results = useMemo(() => {
    const totalExpenses = cogs + adSpend + opCosts;
    const netProfit = revenue - totalExpenses;
    const roi = totalExpenses > 0 ? ((netProfit / totalExpenses) * 100) : 0;
    const profitMargin = revenue > 0 ? ((netProfit / revenue) * 100) : 0;
    return { totalExpenses, netProfit, roi, profitMargin };
  }, [revenue, cogs, adSpend, opCosts]);

  const sliders = [
    { label: "Estimated Revenue", value: revenue, setter: setRevenue, max: 100000, icon: DollarSign },
    { label: "Cost of Goods", value: cogs, setter: setCogs, max: 50000, icon: BarChart3 },
    { label: "Ad Spend", value: adSpend, setter: setAdSpend, max: 30000, icon: TrendingUp },
    { label: "Operational Costs", value: opCosts, setter: setOpCosts, max: 30000, icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-background pt-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <Link to="/" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground mb-4">
          <ChevronLeft className="w-3 h-3" /> Back to home
        </Link>

        <div className="mb-10">
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Profitability Calculator</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Estimate your net profit and ROI in real time.
          </p>
        </div>

        {/* Inputs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6 mb-10"
        >
          {sliders.map((s) => (
            <div key={s.label} className="p-5 rounded-xl card-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <s.icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">{s.label}</span>
                </div>
                <span className="font-mono-data text-sm font-semibold text-foreground">
                  ${s.value.toLocaleString()}
                </span>
              </div>
              <Slider
                value={[s.value]}
                onValueChange={(v) => s.setter(v[0])}
                max={s.max}
                step={100}
                className="w-full"
              />
              <div className="flex justify-between mt-2">
                <span className="text-[10px] text-muted-foreground font-mono-data">$0</span>
                <span className="text-[10px] text-muted-foreground font-mono-data">
                  ${s.max.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <h2 className="text-lg font-bold text-foreground tracking-tight mb-4">Your Results</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-5 rounded-xl card-shadow">
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-2">
                Net Profit
              </p>
              <p className={`font-mono-data text-2xl font-bold ${results.netProfit >= 0 ? "text-success" : "text-destructive"}`}>
                ${results.netProfit.toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground mt-1">per month</p>
            </div>
            <div className="p-5 rounded-xl card-shadow">
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-2">
                ROI
              </p>
              <p className={`font-mono-data text-2xl font-bold ${results.roi >= 0 ? "text-success" : "text-destructive"}`}>
                {results.roi.toFixed(1)}%
              </p>
              <p className="text-xs text-muted-foreground mt-1">return on investment</p>
            </div>
            <div className="p-5 rounded-xl card-shadow">
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-2">
                Profit Margin
              </p>
              <p className={`font-mono-data text-2xl font-bold ${results.profitMargin >= 0 ? "text-foreground" : "text-destructive"}`}>
                {results.profitMargin.toFixed(1)}%
              </p>
              <p className="text-xs text-muted-foreground mt-1">of revenue</p>
            </div>
            <div className="p-5 rounded-xl card-shadow">
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-2">
                Total Expenses
              </p>
              <p className="font-mono-data text-2xl font-bold text-foreground">
                ${results.totalExpenses.toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground mt-1">per month</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfitabilityCalculator;
