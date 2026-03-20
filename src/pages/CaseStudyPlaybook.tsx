import React from "react";
import { useParams, Link } from "react-router-dom";
import { caseStudies } from "@/data/mockData";
import { ChevronLeft, CheckCircle2, TrendingUp, Layers, MousePointerClick } from "lucide-react";
import { motion } from "framer-motion";

const CaseStudyPlaybook = () => {
    const { id } = useParams();
    const study = caseStudies.find((s) => s.id === id);

    if (!study || !study.playbook) {
        return (
            <div className="min-h-screen bg-white pt-14 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-lg font-semibold text-slate-900">Playbook not found or not available</p>
                    <Link to={`/case-study/${id}`} className="text-sm text-emerald-600 hover:text-emerald-700 mt-2 inline-flex items-center gap-1 transition-colors">
                        <ChevronLeft className="w-4 h-4" /> Back to Case Study
                    </Link>
                </div>
            </div>
        );
    }

    const { playbook } = study;

    return (
        <div className="min-h-screen bg-white pt-14 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">

                {/* Back Navigation */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Link
                        to={`/case-study/${id}`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900 mb-8 transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4" /> Back to Case Study
                    </Link>
                </motion.div>

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-100">
                        <CheckCircle2 className="w-4 h-4" />
                        Official Playbook
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                        The {study.title} Playbook
                    </h1>
                    <p className="text-slate-600 text-lg">
                        Exact strategies, SOPs, and tech stack used by {study.founder} to reach ${study.revenue.toLocaleString()}/mo.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {/* Executive Summary / Winning Strategy */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 text-slate-700">
                                <TrendingUp className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">The Winning Strategy</h2>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
                            <ul className="space-y-4">
                                {playbook.strategy.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="shrink-0 w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center mt-0.5 shadow-sm">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                        </span>
                                        <span className="text-[15px] text-slate-700 leading-relaxed text-pretty">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.section>

                    {/* SOP Step-by-Step */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 text-slate-700">
                                <Layers className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Standard Operating Procedure (SOP)</h2>
                        </div>
                        <div className="space-y-6">
                            {playbook.sop.map((step, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold shrink-0">
                                            {index + 1}
                                        </div>
                                        {index !== playbook.sop.length - 1 && (
                                            <div className="w-0.5 h-full bg-slate-200 mt-2 min-h-[40px]"></div>
                                        )}
                                    </div>
                                    <div className="pb-6">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Tech Stack Table */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 text-slate-700">
                                <Layers className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">The Tech Stack</h2>
                        </div>
                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200">
                                        <th className="py-4 px-6 text-sm font-medium text-slate-500 w-1/3">Tool</th>
                                        <th className="py-4 px-6 text-sm font-medium text-slate-500 w-2/3">Use Case</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {playbook.techStack.map((tool, index) => (
                                        <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="py-4 px-6 align-top">
                                                <div className="flex items-center gap-3">
                                                    {tool.logo ? (
                                                        <img src={tool.logo} alt={tool.name} className="w-8 h-8 object-contain" />
                                                    ) : (
                                                        <div className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                                                            {tool.name.charAt(0)}
                                                        </div>
                                                    )}
                                                    <span className="font-semibold text-slate-900">{tool.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <p className="text-slate-600 text-sm leading-relaxed">{tool.useCase}</p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.section>

                    {/* Distribution Playbook */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 text-slate-700">
                                <MousePointerClick className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Distribution Strategy</h2>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
                            <div className="prose prose-slate prose-emerald max-w-none">
                                <p className="text-slate-700 leading-relaxed">
                                    {playbook.distribution}
                                </p>
                            </div>
                        </div>
                    </motion.section>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyPlaybook;
