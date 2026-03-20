import React from "react";
import { motion } from "framer-motion";
import { Zap, Target, BookOpen } from "lucide-react";

const About = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-16 sm:pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                        We Reverse Engineer <span className="text-emerald-500">Success.</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        EquityVault is the ultimate database of verified founder income reports, tactical playbooks, and modern business ideas, designed to help you build profitable systems.
                    </p>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/60 shadow-sm mb-16"
                >
                    <div className="prose prose-slate prose-lg max-w-none">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">The Vision</h2>
                        <p className="text-slate-600 leading-relaxed text-pretty mb-6">
                            Building a business shouldn't rely on guesswork. Too often, aspiring founders waste time on the wrong ideas, using the wrong tools, and pursuing outdated marketing channels. We built EquityVault to change that by providing transparent, data-backed insights directly from founders who have "been there and done that."
                        </p>
                        <p className="text-slate-600 leading-relaxed text-pretty mb-8">
                            We interview real founders, verify their Stripe revenue, and distill their journey into actionable, step-by-step SOPs. Our goal isn't just to inspire you—it's to equipped you with the exact strategies you need to launch and scale a profitable business.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <Zap className="w-8 h-8 text-emerald-500 mb-4" />
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Verified Data</h3>
                                <p className="text-sm text-slate-600">No fake gurus. We require Stripe verified income reports from our case studies.</p>
                            </div>
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <Target className="w-8 h-8 text-emerald-500 mb-4" />
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Tactical Playbooks</h3>
                                <p className="text-sm text-slate-600">Actionable SOPs outlining exactly how businesses acquired their first 100 customers.</p>
                            </div>
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <BookOpen className="w-8 h-8 text-emerald-500 mb-4" />
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Modern Ideas</h3>
                                <p className="text-sm text-slate-600">A curated vault of high-margin, low-overhead ideas built for today's landscape.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
