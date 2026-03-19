import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
    Search, TrendingUp, DollarSign, Target, Zap, BarChart2,
    ChevronRight, Filter, ArrowRight, Eye
} from "lucide-react";
import { detailedBusinessIdeas, BusinessIdea } from "@/data/detailedBusinessIdeas";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import IdeaPeekDrawer from "@/components/IdeaPeekDrawer";

// ─── Category sidebar config ───────────────────────────────────────────────
const CATEGORIES = [
    { key: "", label: "All Ideas", icon: "🔍", count: 0 },
    { key: "service", label: "Service Biz", icon: "🎯", count: 0 },
    { key: "saas", label: "SaaS", icon: "📱", count: 0 },
    { key: "nocode", label: "No-Code", icon: "🔧", count: 0 },
    { key: "content", label: "Content", icon: "📰", count: 0 },
    { key: "weekend", label: "Weekend Projects", icon: "⚡", count: 0 },
];

const CAPITAL_TAGS = [
    { label: "Trending Now", param: "filter", value: "trending", icon: "🔥" },
    { label: "Low Capital (<$500)", param: "capital", value: "low", icon: "💸" },
];

// ─── Difficulty dot system ─────────────────────────────────────────────────
const DifficultyDots: React.FC<{ score: number }> = ({ score }) => (
    <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((d) => (
            <div
                key={d}
                className={`w-2 h-2 rounded-full ${d <= score ? "bg-amber-500" : "bg-gray-200"
                    }`}
            />
        ))}
    </div>
);

// ─── Metrics Ribbon ────────────────────────────────────────────────────────
const MetricsRibbon: React.FC<{ idea: BusinessIdea }> = ({ idea }) => (
    <div className="flex items-center gap-3 text-[11px] font-mono text-gray-500 border-t border-gray-100 pt-3 mt-3 flex-wrap">
        <span className="flex items-center gap-1">
            <DollarSign className="w-3 h-3 text-emerald-500" />
            <span className="font-semibold text-emerald-600">${(idea.monthlyRevenue / 1000).toFixed(0)}k/mo</span>
        </span>
        <span className="text-gray-300">|</span>
        <span className="flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-blue-500" />
            <span>{idea.margin}</span>
        </span>
        <span className="text-gray-300">|</span>
        <span className="flex items-center gap-1">
            <Target className="w-3 h-3 text-purple-500" />
            <span>Setup: ${idea.startupCost.toLocaleString()}</span>
        </span>
        <span className="text-gray-300">|</span>
        <span className="flex items-center gap-1">
            <BarChart2 className="w-3 h-3 text-orange-500" />
            <DifficultyDots score={idea.difficultyScore} />
            <span>{idea.difficultyScore}/5</span>
        </span>
    </div>
);

// ─── Idea Directory Card ───────────────────────────────────────────────────
const IdeaDirectoryCard: React.FC<{ idea: BusinessIdea }> = ({ idea }) => {
    const [peekOpen, setPeekOpen] = useState(false);

    return (
        <>
            <div className="group relative bg-white border border-gray-100 rounded-xl p-5 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                {/* Top badges */}
                <div className="flex items-center gap-2 mb-3">
                    <Badge
                        variant="outline"
                        className="capitalize text-[10px] px-2 py-0 border-gray-200 text-gray-500"
                    >
                        {idea.category}
                    </Badge>
                    {idea.trending && (
                        <Badge className="text-[10px] px-2 py-0 bg-emerald-50 text-emerald-700 border-emerald-200">
                            <TrendingUp className="w-2.5 h-2.5 mr-1" />
                            Trending
                        </Badge>
                    )}
                    {idea.startupCost < 500 && (
                        <Badge className="text-[10px] px-2 py-0 bg-blue-50 text-blue-700 border-blue-200">
                            Low Capital
                        </Badge>
                    )}
                </div>

                {/* Title & description */}
                <h3 className="text-[15px] font-semibold text-gray-900 mb-1.5 leading-tight">
                    {idea.title}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2">
                    {idea.description}
                </p>

                {/* Metrics Ribbon */}
                <MetricsRibbon idea={idea} />

                {/* Action row */}
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
                    <button
                        onClick={() => setPeekOpen(true)}
                        className="flex items-center gap-1.5 text-[12px] text-gray-400 hover:text-gray-700 transition-colors"
                    >
                        <Eye className="w-3.5 h-3.5" />
                        Quick Peek
                    </button>
                    <Link
                        to={`/ideas/${idea.id}`}
                        className="flex items-center gap-1 text-[12px] font-medium text-gray-900 hover:text-emerald-600 transition-colors group-hover:translate-x-0.5"
                    >
                        Deep Dive
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>

            <IdeaPeekDrawer idea={idea} open={peekOpen} onClose={() => setPeekOpen(false)} />
        </>
    );
};

// ─── Main Directory Component ──────────────────────────────────────────────
const IdeaVaultDirectory: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState("");

    const categoryFilter = searchParams.get("category") || "";
    const filterTag = searchParams.get("filter") || "";
    const capitalFilter = searchParams.get("capital") || "";

    // Build category counts
    const categoriesWithCounts = CATEGORIES.map((cat) => ({
        ...cat,
        count: cat.key === ""
            ? detailedBusinessIdeas.length
            : detailedBusinessIdeas.filter((i) => i.category === cat.key).length,
    }));

    // Apply filters
    const filteredIdeas = detailedBusinessIdeas.filter((idea) => {
        const matchesSearch =
            idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            idea.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            idea.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = !categoryFilter || idea.category === categoryFilter;
        const matchesTrending = filterTag !== "trending" || idea.trending;
        const matchesCapital = capitalFilter !== "low" || idea.startupCost < 500;

        return matchesSearch && matchesCategory && matchesTrending && matchesCapital;
    });

    const setFilter = (param: string, value: string) => {
        const next = new URLSearchParams(searchParams);
        if (next.get(param) === value) {
            next.delete(param);
        } else {
            // Clear conflicting params
            if (param === "category") next.delete("capital");
            next.set(param, value);
        }
        setSearchParams(next);
    };

    const clearAllFilters = () => {
        setSearchParams(new URLSearchParams());
        setSearchTerm("");
    };

    const hasActiveFilters = categoryFilter || filterTag || capitalFilter || searchTerm;

    return (
        <div className="min-h-screen bg-gray-50/50 pt-14">
            {/* Page Header */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex items-end justify-between">
                        <div>
                            <p className="text-xs font-medium text-emerald-600 uppercase tracking-wider mb-2">
                                Business Archive
                            </p>
                            <h1 className="text-2xl font-bold text-gray-900">Idea Vault</h1>
                            <p className="text-[13px] text-gray-500 mt-1">
                                {detailedBusinessIdeas.length} vetted business models with real revenue data
                            </p>
                        </div>
                        <div className="hidden sm:flex items-center gap-2">
                            {CAPITAL_TAGS.map((tag) => {
                                const isActive =
                                    (tag.param === "filter" && filterTag === tag.value) ||
                                    (tag.param === "capital" && capitalFilter === tag.value);
                                return (
                                    <button
                                        key={tag.value}
                                        onClick={() => setFilter(tag.param, tag.value)}
                                        className={`flex items-center gap-1.5 text-[12px] px-3 py-1.5 rounded-full border font-medium transition-all ${isActive
                                                ? "bg-gray-900 text-white border-gray-900"
                                                : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                                            }`}
                                    >
                                        <span>{tag.icon}</span>
                                        {tag.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex gap-6">
                    {/* ── Left Sidebar ───────────────────────────────────────── */}
                    <aside className="hidden lg:block w-52 shrink-0">
                        <div className="sticky top-20 space-y-1">
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 px-2 mb-3">
                                Quick Jump
                            </p>
                            {categoriesWithCounts.map((cat) => {
                                const isActive = categoryFilter === cat.key;
                                return (
                                    <button
                                        key={cat.key}
                                        onClick={() => setFilter("category", cat.key)}
                                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-[13px] font-medium transition-all ${isActive
                                                ? "bg-gray-900 text-white"
                                                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                            }`}
                                    >
                                        <span className="flex items-center gap-2">
                                            <span>{cat.icon}</span>
                                            {cat.label}
                                        </span>
                                        <span
                                            className={`text-[11px] ${isActive ? "text-gray-300" : "text-gray-400"
                                                }`}
                                        >
                                            {cat.count}
                                        </span>
                                    </button>
                                );
                            })}

                            <div className="pt-4 border-t border-gray-100 mt-4">
                                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 px-2 mb-3">
                                    Filter By
                                </p>
                                {CAPITAL_TAGS.map((tag) => {
                                    const isActive =
                                        (tag.param === "filter" && filterTag === tag.value) ||
                                        (tag.param === "capital" && capitalFilter === tag.value);
                                    return (
                                        <button
                                            key={tag.value}
                                            onClick={() => setFilter(tag.param, tag.value)}
                                            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] font-medium transition-all ${isActive
                                                    ? "bg-gray-900 text-white"
                                                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                                }`}
                                        >
                                            <span>{tag.icon}</span>
                                            {tag.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </aside>

                    {/* ── Right Column ──────────────────────────────────────── */}
                    <div className="flex-1 min-w-0">
                        {/* Search & filter bar */}
                        <div className="flex items-center gap-3 mb-5">
                            <div className="relative flex-1 max-w-sm">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <Input
                                    placeholder="Search ideas..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-9 h-9 text-sm border-gray-200 focus-visible:ring-gray-900"
                                />
                            </div>
                            <span className="text-[12px] text-gray-400 shrink-0">
                                {filteredIdeas.length} of {detailedBusinessIdeas.length} ideas
                            </span>
                            {hasActiveFilters && (
                                <button
                                    onClick={clearAllFilters}
                                    className="text-[12px] text-gray-400 hover:text-gray-700 transition-colors shrink-0"
                                >
                                    Clear filters
                                </button>
                            )}
                        </div>

                        {/* Mobile category pills */}
                        <div className="flex gap-2 mb-5 lg:hidden overflow-x-auto pb-2 scrollbar-hide">
                            {categoriesWithCounts.map((cat) => {
                                const isActive = categoryFilter === cat.key;
                                return (
                                    <button
                                        key={cat.key}
                                        onClick={() => setFilter("category", cat.key)}
                                        className={`shrink-0 text-[12px] px-3 py-1.5 rounded-full border font-medium transition-all ${isActive
                                                ? "bg-gray-900 text-white border-gray-900"
                                                : "bg-white text-gray-600 border-gray-200"
                                            }`}
                                    >
                                        {cat.icon} {cat.label}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Cards grid */}
                        {filteredIdeas.length > 0 ? (
                            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                                {filteredIdeas.map((idea) => (
                                    <IdeaDirectoryCard key={idea.id} idea={idea} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16 border border-dashed border-gray-200 rounded-xl bg-white">
                                <p className="text-gray-400 text-sm mb-2">No ideas match your filters.</p>
                                <button
                                    onClick={clearAllFilters}
                                    className="text-[13px] text-gray-900 font-medium underline underline-offset-2"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IdeaVaultDirectory;
