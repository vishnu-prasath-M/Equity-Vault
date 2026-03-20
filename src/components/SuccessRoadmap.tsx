import { roadmapSteps } from "@/data/mockData";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Wrench, Rocket, Target } from "lucide-react";

// Assign predefined premium icons to steps based on index
const STEP_ICONS = [Lightbulb, Wrench, Rocket, Target];

const SuccessRoadmap = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to the container for the animated line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Calculate the height of the glowing line based on scroll
  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden bg-background">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10" ref={containerRef}>
        <div className="mb-20 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6 shadow-[0_0_15px_rgba(var(--primary),0.3)]"
          >
            The Blueprint
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight mb-6"
          >
            Success Roadmap
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Your systematic path from raw idea to your first $1,000 in monthly recurring revenue.
          </motion.p>
        </div>

        <div className="relative pb-10">
          {/* Scroll Track Background - Desktop (Center) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-0 w-px bg-border/50 -translate-x-1/2" />

          {/* Scroll Track Progress - Desktop (Center) */}
          <motion.div
            style={{ height: pathHeight }}
            className="hidden md:block absolute left-1/2 top-4 w-[2px] bg-gradient-to-b from-primary/80 to-primary -translate-x-1/2 shadow-[0_0_15px_rgba(var(--primary),0.8)] origin-top rounded-full"
          />

          {/* Scroll Track Background - Mobile (Left) */}
          <div className="md:hidden absolute left-[27px] top-6 bottom-0 w-px bg-border/50" />

          {/* Scroll Track Progress - Mobile (Left) */}
          <motion.div
            style={{ height: pathHeight }}
            className="md:hidden absolute left-[27px] top-6 w-[2px] bg-gradient-to-b from-primary/80 to-primary shadow-[0_0_15px_rgba(var(--primary),0.8)] origin-top rounded-full"
          />

          <div className="space-y-12 md:space-y-32">
            {roadmapSteps.map((step, i) => {
              const Icon = STEP_ICONS[i % STEP_ICONS.length];
              const isEven = i % 2 === 0;

              return (
                <div key={step.step} className={`relative flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>

                  {/* Timeline Desktop Center Dot */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.2 + (i * 0.1), type: "spring", stiffness: 200 }}
                    className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background border-2 border-border items-center justify-center z-20 group hover:border-primary transition-all duration-300 shadow-xl"
                  >
                    <div className="w-3 h-3 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors duration-300 group-hover:shadow-[0_0_15px_rgba(var(--primary),1)]" />
                  </motion.div>

                  {/* Left or Right Content Area (Desktop) */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'} pl-16 md:pl-0 relative`}>

                    {/* Mobile Dot */}
                    <div className="md:hidden absolute left-[-46px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background border-2 border-border flex items-center justify-center z-20 shadow-xl">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50, filter: "blur(10px)" }}
                      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                      className="group"
                    >
                      <div className="relative p-8 md:p-10 rounded-3xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/5 overflow-hidden">

                        {/* Dynamic Background Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                          {/* Icon Container */}
                          <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-background to-muted border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500 shadow-inner">
                            <Icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors duration-300" />
                          </div>

                          {/* Text Content */}
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-xs font-bold text-primary px-2 py-1 bg-primary/10 rounded-md font-mono-data tracking-widest uppercase">
                                Phase 0{step.step}
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                              {step.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-[15px] sm:text-base">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {/* Interactive Line indicator inside card */}
                        <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-700 ease-out opacity-70" />
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessRoadmap;
