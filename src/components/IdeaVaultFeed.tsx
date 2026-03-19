import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IdeaVaultFeed = () => {
    const navigate = useNavigate();

    const businessIdeas = [
        {
            id: 'i1',
            niche: "AI-Audit Agency for Law Firms",
            marketSize: "$4.2B",
            complexity: "High",
            roi: "85%",
        },
        {
            id: 'i2',
            niche: "Programmable Coffee Subscription",
            marketSize: "$1.8B",
            complexity: "Moderate",
            roi: "62%",
        },
        {
            id: 'i3',
            niche: "Faceless YouTube: Personal Finance",
            marketSize: "$900M",
            complexity: "Low",
            roi: "94%",
        },
        {
            id: 'i4',
            niche: "AI Resume Builder Micro-SaaS",
            marketSize: "$2.4B",
            complexity: "Moderate",
            roi: "89%",
        },
        {
            id: 'i5',
            niche: "Local SEO for Dentists",
            marketSize: "$890M",
            complexity: "Low",
            roi: "78%",
        }
    ];

    return (
        <section className="bg-[#fafafa] py-16 sm:py-24 border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Split-Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-gray-200 pb-4 mb-6 gap-4">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 tracking-tight">Active Business Opportunities</h2>
                        <p className="text-sm text-gray-500 mt-1">Directory-Pulse Intelligence Feed</p>
                    </div>
                    <div className="bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-sm border border-emerald-100 flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider">
                            Market Trend: +22% AI Search
                        </span>
                    </div>
                </div>

                {/* Directory-Pulse Feed */}
                <div className="bg-white border text-left border-gray-200 divide-y divide-gray-100 shadow-sm">
                    {/* Header Row */}
                    <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        <div className="col-span-5">Niche / Opportunity</div>
                        <div className="col-span-2">Market Size</div>
                        <div className="col-span-2">Complexity</div>
                        <div className="col-span-2">Avg. Margin</div>
                        <div className="col-span-1 text-right">Action</div>
                    </div>

                    {/* Data Rows */}
                    {businessIdeas.map((idea, idx) => (
                        <div
                            key={idx}
                            onClick={() => navigate(`/ideas/${idea.id}`)}
                            className="group grid grid-cols-1 sm:grid-cols-12 gap-y-2 sm:gap-4 px-6 py-4 items-center hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                            <div className="col-span-5">
                                <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {idea.niche}
                                </h3>
                            </div>

                            <div className="col-span-2 flex items-center gap-2 sm:block">
                                <span className="sm:hidden text-[10px] font-bold text-gray-400 uppercase tracking-widest">Market Size: </span>
                                <span className="text-[13px] font-mono font-medium text-gray-600">{idea.marketSize}</span>
                            </div>

                            <div className="col-span-2 flex items-center gap-2 sm:block">
                                <span className="sm:hidden text-[10px] font-bold text-gray-400 uppercase tracking-widest">Complexity: </span>
                                <span className={`text-[11px] font-medium px-2 py-0.5 rounded-sm border ${idea.complexity === 'Low' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                                        idea.complexity === 'Moderate' ? 'bg-amber-50 text-amber-700 border-amber-100' :
                                            'bg-rose-50 text-rose-700 border-rose-100'
                                    }`}>
                                    {idea.complexity}
                                </span>
                            </div>

                            <div className="col-span-2 flex items-center gap-2 sm:block">
                                <span className="sm:hidden text-[10px] font-bold text-gray-400 uppercase tracking-widest">Margin: </span>
                                <span className="text-[13px] font-mono font-semibold text-emerald-600">{idea.roi}</span>
                            </div>

                            <div className="col-span-1 flex justify-end">
                                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white text-gray-400 transition-all">
                                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex justify-center">
                    <button
                        onClick={() => navigate('/idea-vault')}
                        className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors"
                    >
                        Access Full Intelligence Vault (23+ Ideas) →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default IdeaVaultFeed;
