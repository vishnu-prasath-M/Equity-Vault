import React from "react";
import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Search, PenTool } from "lucide-react";

const guides = [
    {
        id: 1,
        title: "Programmatic SEO: The Ultimate Zero-to-One Guide",
        description: "Learn how to generate thousands of high-intent localized landing pages that rank safely on Google in 2026.",
        icon: Search,
        color: "bg-blue-50 text-blue-600",
        chapters: 8
    },
    {
        id: 2,
        title: "The Productized Agency Blueprint",
        description: "Stop billing by the hour. How to transition your freelance business into an unlimited subscription service via Trello & Stripe.",
        icon: PenTool,
        color: "bg-purple-50 text-purple-600",
        chapters: 5
    },
    {
        id: 3,
        title: "Viral Organic TikTok For E-Commerce",
        description: "A mathematical approach to TikTok hooks, retention graphs, and generating $10k+ days without touching Ads Manager.",
        icon: TrendingUp,
        color: "bg-emerald-50 text-emerald-600",
        chapters: 6
    },
    {
        id: 4,
        title: "Cold Email Arbitrage",
        description: "The technical setup for infinite sending volume without burning domains. Apollo, Instantly, and modern deliverability.",
        icon: BookOpen,
        color: "bg-amber-50 text-amber-600",
        chapters: 4
    }
];

const Guides = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-16 sm:pt-24 pb-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-6 border border-emerald-100">
                        Masterclasses
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                        Definitive <span className="text-emerald-500">Guides</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        End-to-end playbooks that take you from beginner to top 1% practitioner. No fluff, just step-by-step technical blueprints.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {guides.map((guide, index) => (
                        <motion.div
                            key={guide.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/60 shadow-sm hover:shadow-lg transition-all group flex flex-col h-full cursor-pointer"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${guide.color}`}>
                                    <guide.icon className="w-6 h-6" />
                                </div>
                                <div className="px-3 py-1.5 rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                                    {guide.chapters} Chapters
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors tracking-tight">
                                {guide.title}
                            </h2>

                            <p className="text-slate-600 mb-8 leading-relaxed max-w-md text-pretty flex-1">
                                {guide.description}
                            </p>

                            <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                                <span className="text-sm font-semibold text-slate-900">Start Reading</span>
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                    <span className="text-lg font-bold leading-none mb-0.5">→</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Guides;
