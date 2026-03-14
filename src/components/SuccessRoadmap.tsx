import { roadmapSteps } from "@/data/mockData";
import { motion } from "framer-motion";

const SuccessRoadmap = () => {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-foreground tracking-tight">Success Roadmap</h2>
          <p className="text-sm text-muted-foreground mt-1">Your path from idea to first $1,000.</p>
        </div>
        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />
          <div className="space-y-8">
            {roadmapSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="relative flex gap-4"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
                  <span className="text-xs font-bold text-primary-foreground font-mono-data">
                    {step.step}
                  </span>
                </div>
                <div className="pt-1.5">
                  <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessRoadmap;
