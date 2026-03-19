import React from "react";
import { Link } from "react-router-dom";
import {
    TrendingUp, DollarSign, Clock, Target, Cpu, Star,
    X, ArrowRight
} from "lucide-react";
import { BusinessIdea } from "@/data/detailedBusinessIdeas";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetClose,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

interface IdeaPeekDrawerProps {
    idea: BusinessIdea;
    open: boolean;
    onClose: () => void;
}

// Business Reality Table rows
const TABLE_ROWS = [
    {
        icon: TrendingUp,
        label: "Market Size & Trend",
        getValue: (idea: BusinessIdea) =>
            `${idea.marketSize} — ${idea.marketTrend}`,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
    },
    {
        icon: Star,
        label: "Skillset Needed",
        getValue: (idea: BusinessIdea) => idea.skillset,
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        icon: Clock,
        label: "Time to Revenue",
        getValue: (idea: BusinessIdea) => idea.timeToFirstDollar,
        color: "text-purple-600",
        bg: "bg-purple-50",
    },
    {
        icon: Cpu,
        label: "Monetization Stack",
        getValue: (idea: BusinessIdea) => idea.monetizationStack,
        color: "text-orange-600",
        bg: "bg-orange-50",
    },
    {
        icon: Target,
        label: "Startup Cost",
        getValue: (idea: BusinessIdea) => idea.initialInvestment,
        color: "text-red-600",
        bg: "bg-red-50",
    },
    {
        icon: DollarSign,
        label: "Revenue Potential",
        getValue: (idea: BusinessIdea) => `${idea.potentialRevenue} | Margin: ${idea.margin}`,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
    },
];

const IdeaPeekDrawer: React.FC<IdeaPeekDrawerProps> = ({ idea, open, onClose }) => {
    if (!idea) return null;

    return (
        <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
            <SheetContent side="right" className="w-full sm:max-w-md p-0 overflow-y-auto">
                {/* Header */}
                <SheetHeader className="px-6 pt-6 pb-4 border-b border-gray-100">
                    <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline" className="capitalize text-[10px]">
                                    {idea.category}
                                </Badge>
                                {idea.trending && (
                                    <Badge className="text-[10px] bg-emerald-50 text-emerald-700 border-emerald-200">
                                        <TrendingUp className="w-2.5 h-2.5 mr-1" />
                                        Trending
                                    </Badge>
                                )}
                            </div>
                            <SheetTitle className="text-[16px] font-bold text-gray-900 leading-tight">
                                {idea.title}
                            </SheetTitle>
                            <p className="text-[12px] text-gray-500 mt-1.5 leading-relaxed">
                                {idea.description}
                            </p>
                        </div>
                        <SheetClose asChild>
                            <button
                                onClick={onClose}
                                className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors shrink-0"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </SheetClose>
                    </div>
                </SheetHeader>

                {/* Quick Stats Strip */}
                <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
                    <div className="px-4 py-3 text-center">
                        <div className="text-[12px] text-gray-400 mb-0.5">Revenue</div>
                        <div className="text-[14px] font-bold text-emerald-600">
                            ${(idea.monthlyRevenue / 1000).toFixed(0)}k/mo
                        </div>
                    </div>
                    <div className="px-4 py-3 text-center">
                        <div className="text-[12px] text-gray-400 mb-0.5">Margin</div>
                        <div className="text-[14px] font-bold text-blue-600">{idea.margin}</div>
                    </div>
                    <div className="px-4 py-3 text-center">
                        <div className="text-[12px] text-gray-400 mb-0.5">Growth</div>
                        <div className="text-[14px] font-bold text-purple-600">{idea.growthMoM}</div>
                    </div>
                </div>

                {/* Business Reality Table */}
                <div className="px-6 py-5">
                    <h3 className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
                        Business Reality Table
                    </h3>
                    <div className="space-y-2">
                        {TABLE_ROWS.map((row) => {
                            const Icon = row.icon;
                            return (
                                <div
                                    key={row.label}
                                    className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                                >
                                    <div className={`p-1.5 rounded-md ${row.bg} shrink-0 mt-0.5`}>
                                        <Icon className={`w-3.5 h-3.5 ${row.color}`} />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-0.5">
                                            {row.label}
                                        </div>
                                        <div className="text-[13px] font-medium text-gray-800 leading-snug">
                                            {row.getValue(idea)}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Success Story */}
                <div className="mx-6 mb-5 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-600 mb-2">
                        Real Success Story
                    </p>
                    <p className="text-[13px] font-semibold text-gray-900 mb-1">
                        {idea.executionPlaybook.successStory.founder}
                    </p>
                    <p className="text-[12px] text-gray-600 leading-relaxed">
                        {idea.executionPlaybook.successStory.strategy}
                    </p>
                    <div className="flex items-center gap-3 mt-2 pt-2 border-t border-emerald-100">
                        <span className="text-[13px] font-bold text-emerald-600">
                            {idea.executionPlaybook.successStory.revenue}
                        </span>
                        <span className="text-[11px] text-gray-400">in {idea.executionPlaybook.successStory.timeframe}</span>
                    </div>
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                    <Link
                        to={`/ideas/${idea.id}`}
                        onClick={onClose}
                        className="flex items-center justify-center gap-2 w-full py-3 bg-gray-900 text-white text-[13px] font-semibold rounded-xl hover:bg-gray-800 transition-colors"
                    >
                        View Full Playbook
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default IdeaPeekDrawer;
