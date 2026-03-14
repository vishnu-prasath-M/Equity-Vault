import { Check } from "lucide-react";
import { caseStudies } from "@/data/mockData";
import { motion } from "framer-motion";

const IncomeTable = () => {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground tracking-tight">Verified Income Reports</h2>
          <p className="text-sm text-muted-foreground mt-1">Transparent, verified financial data from real founders.</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="rounded-xl card-shadow overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="text-left px-5 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    Business
                  </th>
                  <th className="text-left px-5 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    Founder
                  </th>
                  <th className="text-right px-5 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    Monthly Revenue
                  </th>
                  <th className="text-right px-5 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    Profit Margin
                  </th>
                  <th className="text-center px-5 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    Verified
                  </th>
                </tr>
              </thead>
              <tbody>
                {caseStudies.map((study) => (
                  <tr
                    key={study.id}
                    className="border-t border-border/50 hover:bg-secondary/30 transition-colors"
                  >
                    <td className="px-5 py-3.5">
                      <span className="text-[13px] font-medium text-foreground">{study.model}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-[13px] text-muted-foreground">{study.founder}</span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <span className="font-mono-data text-[13px] font-medium text-success">
                        ${study.revenue.toLocaleString()}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <span className="font-mono-data text-[13px] text-muted-foreground">
                        {study.profitMargin}%
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      {study.verified && (
                        <Check className="w-3.5 h-3.5 text-success mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IncomeTable;
