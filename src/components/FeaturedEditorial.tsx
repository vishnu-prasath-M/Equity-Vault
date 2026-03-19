import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { brandLogos } from '@/data/mockData';

const FeaturedEditorial = () => {
    const trendingStories = [
        {
            title: "The $8,200/mo Micro-SaaS built on weekends",
            revenue: "$8.2k/mo",
            logo: brandLogos.vercel,
            time: "4 MIN READ",
        },
        {
            title: "Scaling a local SEO agency to $12,400 MRR",
            revenue: "$12.4k/mo",
            logo: brandLogos.ahrefs,
            time: "6 MIN READ",
        },
        {
            title: "Programmable Coffee: A $15k/mo E-commerce playbook",
            revenue: "$15.0k/mo",
            logo: brandLogos.shopify,
            time: "5 MIN READ",
        }
    ];

    return (
        <section className="bg-white py-16 sm:py-24 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Case Studies</h2>
                        <p className="mt-1 text-sm text-gray-500">Verified intelligence from $10k/mo+ founders.</p>
                    </div>
                    <button className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
                        View All Reports <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Asymmetric 60/40 Layout */}
                <div className="flex flex-col lg:flex-row gap-0 border border-gray-200">

                    {/* Left Side: Hero Case Study (60%) */}
                    <div className="w-full lg:w-[60%] relative group cursor-pointer border-b lg:border-b-0 lg:border-r border-gray-200 overflow-hidden bg-gray-100">
                        {/* Massive high-res workspace image */}
                        <div className="absolute inset-0">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Professional Workspace"
                                className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                        </div>

                        <div className="relative h-full min-h-[400px] lg:min-h-[500px] flex flex-col justify-end p-8 sm:p-10">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm">
                                    Exclusive Report
                                </span>
                                <span className="text-gray-300 text-xs font-mono">12 MIN READ</span>
                            </div>

                            <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4 max-w-xl">
                                How a Solo Founder built a $1.2M/year Newsletter.
                            </h3>

                            <div className="flex items-center gap-2.5 bg-black/50 backdrop-blur-md border border-white/10 w-fit px-4 py-2.5 rounded-sm">
                                <div className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                </div>
                                <span className="text-emerald-400 font-mono text-sm tracking-tight font-semibold">
                                    Verified Profit: $85k/mo
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Trending Stories Stack (40%) */}
                    <div className="w-full lg:w-[40%] flex flex-col bg-white">
                        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50/50">
                            <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                                Trending Stories
                            </h4>
                        </div>

                        <div className="flex flex-col flex-1 divide-y divide-gray-200">
                            {trendingStories.map((story, idx) => (
                                <div key={idx} className="flex-1 flex flex-col justify-center p-6 sm:p-8 hover:bg-gray-50 cursor-pointer transition-colors group">
                                    <div className="flex items-center justify-between mb-3">
                                        <img
                                            src={story.logo}
                                            alt="Logo"
                                            className="w-6 h-6 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                                        />
                                        <span className="text-[10px] font-mono text-gray-400 tracking-wider">
                                            {story.time}
                                        </span>
                                    </div>

                                    <h4 className="text-lg font-bold text-gray-900 leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                                        {story.title}
                                    </h4>

                                    <div className="flex items-center gap-1.5 mt-auto">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" strokeWidth={2.5} />
                                        <span className="text-[13px] font-semibold text-gray-600 font-mono">
                                            {story.revenue}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturedEditorial;
