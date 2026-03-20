import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, Database, Code } from "lucide-react";

const resources = [
    {
        category: "Operations",
        items: [
            { name: "SaaS Financial Dashboard", type: "Google Sheets", icon: Database },
            { name: "Contractor SLA Agreement", type: "Notion", icon: FileText },
            { name: "Hiring Funnel Checklist", type: "PDF", icon: FileText },
        ]
    },
    {
        category: "Engineering",
        items: [
            { name: "Next.js + Supabase Boilerplate", type: "Github Repo", icon: Code },
            { name: "Stripe Webhooks Config", type: "Snippet", icon: Code },
            { name: "Database Migrations Guide", type: "Notion", icon: Database },
        ]
    },
    {
        category: "Marketing",
        items: [
            { name: "High-Converting Hero Headers", type: "Figma File", icon: Download },
            { name: "Cold Email Sequences", type: "Google Docs", icon: FileText },
            { name: "SEO Keyword Tracker", type: "Airtable Base", icon: Database },
        ]
    }
];

const Resources = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-16 sm:pt-24 pb-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                        <Download className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                        Founder <span className="text-emerald-500">Resources</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Skip the setup phase. Download the exact financial models, legal templates, and code boilerplates used by top founders.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {resources.map((section, sectionIdx) => (
                        <motion.section
                            key={section.category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: sectionIdx * 0.1 }}
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                                {section.category}
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {section.items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-emerald-50 transition-colors">
                                                <item.icon className="w-5 h-5 text-slate-600 group-hover:text-emerald-600 transition-colors" />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight group-hover:text-emerald-700 transition-colors">
                                                {item.name}
                                            </h3>
                                        </div>

                                        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                                {item.type}
                                            </span>
                                            <button className="text-xs font-bold bg-slate-900 text-white px-3 py-1.5 rounded-lg group-hover:bg-emerald-600 transition-colors">
                                                Get
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resources;
