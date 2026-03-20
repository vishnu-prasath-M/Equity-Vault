import React from "react";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

const blogPosts = [
    {
        id: 1,
        title: "The Death of the 'SaaS Playbook' in 2026",
        excerpt: "Why traditional B2B SaaS marketing is failing, and how micro-acquisitions and programmatic SEO have replaced the outdated SDR model.",
        category: "Strategy",
        author: "Vishnu Prasath",
        date: "March 18, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "How to Bootstrap to $10k/mo without a Developer",
        excerpt: "A deep dive into the modern no-code tech stack. Exploring how founders are using Supabase, Next.js, and Vercel to bypass traditional engineering costs.",
        category: "No-Code",
        author: "Sarah Chen",
        date: "March 15, 2026",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Pricing Psychology: Why you should charge $299 instead of $29",
        excerpt: "Stop competing on price. We analyzed 500+ successful micro-SaaS pricing models to understand why premium positioning wins the churn battle.",
        category: "Marketing",
        author: "David Kim",
        date: "March 10, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop"
    }
];

const Blog = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-16 sm:pt-24 pb-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-6">
                        Editorial
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                        Founder <span className="text-emerald-500">Insights</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                        Data-backed deep dives, contrarian startup opinions, and growth strategies that actually work in today's market.
                    </p>
                </motion.div>

                <div className="space-y-10">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row"
                        >
                            <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden shrink-0">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-8 sm:p-10 flex flex-col justify-center flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                    <span className="text-slate-300">•</span>
                                    <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5" />
                                        {post.readTime}
                                    </span>
                                </div>

                                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors leading-tight tracking-tight">
                                    <a href="#">{post.title}</a>
                                </h2>

                                <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed text-pretty">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-sm font-semibold text-slate-900">
                                        By {post.author}
                                    </span>
                                    <button className="flex items-center gap-2 text-sm font-semibold text-emerald-600 group-hover:text-emerald-700 transition-colors">
                                        Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
