import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { guidesData, academicPhases, getIconElement } from "@/data/guidesData";
import { cn } from "@/lib/utils";

const Guides = () => {
    const [activePhase, setActivePhase] = useState<string>("all");

    // Filter guides
    const displayedGuides = activePhase === "all"
        ? guidesData
        : guidesData.filter((g) => g.phaseId === activePhase);

    return (
        <div className="min-h-screen bg-white">
            {/* Header Area */}
            <div className="pt-24 pb-12 border-b border-slate-100 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold tracking-wide border border-emerald-100 mb-6">
                            <BookOpen className="w-3.5 h-3.5" />
                            EquityVault Academy
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
                            The Founder's <span className="text-emerald-500">Playbook</span>
                        </h1>
                        <p className="text-lg text-slate-500 leading-relaxed font-light">
                            High-density, actionable guides. Learn the exact SOPs, frameworks, and technical setups used by the top 1% of digital builders.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Split-Pane */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* Left Sidebar (Sticky) */}
                    <div className="w-full lg:w-72 shrink-0 lg:sticky lg:top-24">
                        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 hidden lg:block">
                            Learning Pathway
                        </h3>

                        {/* Mobile: Horizontal scrollable, Desktop: Vertical list */}
                        <div className="flex lg:flex-col overflow-x-auto pb-4 lg:pb-0 hide-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0 gap-2 lg:gap-1">

                            <button
                                onClick={() => setActivePhase("all")}
                                className={cn(
                                    "flex-shrink-0 text-left px-4 py-3 rounded-xl transition-all border font-medium text-sm lg:text-base",
                                    activePhase === "all"
                                        ? "bg-slate-900 border-slate-900 text-white shadow-md"
                                        : "bg-white border-slate-100 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                                )}
                            >
                                All Masterclasses
                            </button>

                            {academicPhases.map((phase) => (
                                <button
                                    key={phase.id}
                                    onClick={() => setActivePhase(phase.id)}
                                    className={cn(
                                        "flex-shrink-0 text-left px-4 py-3.5 rounded-xl transition-all border group",
                                        activePhase === phase.id
                                            ? "bg-emerald-50 border-emerald-200 shadow-sm relative overflow-hidden"
                                            : "bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50"
                                    )}
                                >
                                    {activePhase === phase.id && (
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-l-xl" />
                                    )}
                                    <div className={cn(
                                        "font-semibold mb-1 transition-colors",
                                        activePhase === phase.id ? "text-emerald-700" : "text-slate-800"
                                    )}>
                                        {phase.title}
                                    </div>
                                    <div className={cn(
                                        "text-xs leading-relaxed hidden lg:block",
                                        activePhase === phase.id ? "text-emerald-600/80" : "text-slate-500"
                                    )}>
                                        {phase.description}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Content Feed */}
                    <div className="flex-1 min-w-0 w-full">
                        <div className="flex flex-col gap-6">
                            {displayedGuides.map((guide, idx) => {
                                const IconComponent = getIconElement(guide.iconName);

                                return (
                                    <motion.div
                                        key={guide.slug}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    >
                                        <Link
                                            to={`/guides/${guide.slug}`}
                                            className="block p-5 sm:p-6 bg-white border border-[#F1F5F9] rounded-2xl hover:border-slate-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all group"
                                        >
                                            <div className="flex flex-col sm:flex-row gap-5 items-start">

                                                {/* Line Art Icon Minimalist Box */}
                                                <div className="w-12 h-12 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors">
                                                    <IconComponent className="w-5 h-5 text-slate-700 group-hover:text-emerald-600 transition-colors stroke-[1.5]" />
                                                </div>

                                                <div className="flex-1 mt-1 sm:mt-0">
                                                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors tracking-tight">
                                                        {guide.heading}
                                                    </h2>

                                                    {/* Actionable Sub-Data */}
                                                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-medium text-slate-500 mb-4">
                                                        <span className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded-md text-slate-600">
                                                            Time: {guide.readingTime}
                                                        </span>
                                                        <span className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded-md text-slate-600">
                                                            Level: {guide.complexity}
                                                        </span>
                                                        <span className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded-md text-slate-600">
                                                            Category: {guide.category}
                                                        </span>
                                                    </div>

                                                    {/* Minimal Executive Summary */}
                                                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4 font-light">
                                                        {guide.summary}
                                                    </p>

                                                    <div className="flex items-center text-sm font-semibold text-emerald-600 group-hover:text-emerald-500 transition-colors">
                                                        Read Playbook
                                                        <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            {displayedGuides.length === 0 && (
                                <div className="py-20 text-center border border-dashed border-slate-200 rounded-2xl bg-slate-50">
                                    <p className="text-slate-500 font-medium">New guides for this phase are dropping soon.</p>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Guides;
