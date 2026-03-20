import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import { ArrowLeft, BookOpen, Clock, BarChart } from 'lucide-react';
import { guidesData, getIconElement } from '@/data/guidesData';
import { caseStudies } from '@/data/mockData';

const GuideDetail = () => {
    const { slug } = useParams();
    const guide = guidesData.find(g => g.slug === slug);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = (totalScroll / windowHeight) * 100;
            setScrollProgress(scroll || 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!guide) {
        return (
            <div className="min-h-screen pt-32 pb-16 flex items-center justify-center bg-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Guide Not Found</h2>
                    <Link to="/guides" className="text-emerald-600 hover:text-emerald-700 font-medium">
                        ← Back to Academy
                    </Link>
                </div>
            </div>
        );
    }

    const IconComponent = getIconElement(guide.iconName);
    const relatedCaseStudies = caseStudies.slice(0, 3); // Mocking related content

    return (
        <div className="min-h-screen bg-white relative">
            {/* Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-slate-100 z-50">
                <div
                    className="h-full bg-emerald-500 transition-all duration-150 ease-out"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6">

                {/* Back Link */}
                <Link to="/guides" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Academy
                </Link>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

                    {/* Main Reading Content */}
                    <div className="w-full lg:flex-1 max-w-3xl">

                        {/* Header Section */}
                        <div className="mb-10 lg:mb-16">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                                    <IconComponent className="w-5 h-5 text-slate-700" />
                                </div>
                                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                                    {guide.category}
                                </div>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
                                {guide.heading}
                            </h1>

                            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500 border-b border-slate-100 pb-8">
                                <span className="flex items-center gap-1.5">
                                    <Clock className="w-4 h-4" />
                                    {guide.readingTime} read
                                </span>
                                <span className="text-slate-300">•</span>
                                <span className="flex items-center gap-1.5">
                                    <BarChart className="w-4 h-4" />
                                    {guide.complexity}
                                </span>
                            </div>
                        </div>

                        {/* Content Body */}
                        <div
                            className="prose prose-slate prose-lg max-w-none 
                                prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 
                                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 
                                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 
                                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6 
                                prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline
                                prose-strong:text-slate-900 prose-strong:font-semibold
                                prose-li:text-slate-600 prose-li:marker:text-emerald-500"
                            dangerouslySetInnerHTML={{ __html: guide.content }}
                        />
                    </div>

                    {/* Right Sidebar: Related Studies */}
                    <div className="w-full lg:w-80 shrink-0 lg:sticky lg:top-24 mt-12 lg:mt-0 pt-12 lg:pt-0 border-t border-slate-100 lg:border-t-0">
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-emerald-500" />
                            Related Case Studies
                        </h3>

                        <div className="flex flex-col gap-4">
                            {relatedCaseStudies.map((study) => (
                                <Link
                                    key={study.id}
                                    to={`/case-study/${study.id}`}
                                    className="group block p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all"
                                >
                                    <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">
                                        {study.title}
                                    </h4>
                                    <div className="flex items-center justify-between text-xs font-semibold">
                                        <span className="text-emerald-600">${study.revenue.toLocaleString()}/mo</span>
                                        <span className="text-slate-400 capitalize">{study.model}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-8 p-5 rounded-xl border border-emerald-100 bg-emerald-50/50">
                            <h4 className="font-semibold text-emerald-900 mb-2 text-sm">Need deep execution help?</h4>
                            <p className="text-xs text-emerald-800/80 leading-relaxed mb-4">
                                Join the Founder's Circle to get directly connected with operators who have successfully executed this playbook.
                            </p>
                            <button className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors">
                                Apply to Join
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GuideDetail;
