import React from "react";
import { ExternalLink, X, Star, Users, Repeat, DollarSign, ArrowRight } from "lucide-react";
import { ToolEntry } from "@/data/mockData";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetClose,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

interface ToolDrawerProps {
    tool: ToolEntry | null;
    open: boolean;
    onClose: () => void;
}

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
            <Star
                key={i}
                className={`w-3.5 h-3.5 ${i <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-gray-200"}`}
            />
        ))}
    </div>
);

const ToolDrawer: React.FC<ToolDrawerProps> = ({ tool, open, onClose }) => {
    if (!tool) return null;

    return (
        <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
            <SheetContent side="right" className="w-full sm:max-w-md p-0 overflow-y-auto">
                {/* Header */}
                <SheetHeader className="px-6 pt-6 pb-5 border-b border-gray-100">
                    <div className="flex items-start gap-4">
                        {/* Brand Logo */}
                        <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center p-2.5 shrink-0">
                            <img
                                src={tool.logo}
                                alt={tool.name}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    const t = e.target as HTMLImageElement;
                                    t.style.display = "none";
                                    (t.parentElement as HTMLElement).innerHTML = `<span class="text-xl font-bold text-gray-400">${tool.name.charAt(0)}</span>`;
                                }}
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                                <SheetTitle className="text-[17px] font-bold text-gray-900 leading-tight">
                                    {tool.name}
                                </SheetTitle>
                                <SheetClose asChild>
                                    <button
                                        onClick={onClose}
                                        className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors shrink-0"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </SheetClose>
                            </div>
                            <div className="flex items-center gap-2 mt-1.5">
                                <RatingStars rating={tool.rating} />
                                <span className="text-[13px] font-semibold text-gray-800">{tool.rating}</span>
                                <span className="text-gray-300">·</span>
                                <Badge variant="outline" className="text-[10px] px-2 py-0">
                                    {tool.category}
                                </Badge>
                            </div>
                            <p className="text-[12px] text-gray-500 mt-1">Best for: {tool.bestFor}</p>
                        </div>
                    </div>
                </SheetHeader>

                <div className="px-6 py-5 space-y-6">
                    {/* Description */}
                    <p className="text-[14px] text-gray-600 leading-relaxed">{tool.description}</p>

                    {/* Founder Verdict */}
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2">
                            Founder Verdict
                        </p>
                        <p className="text-[13px] text-gray-700 leading-relaxed italic">
                            "{tool.founderVerdict}"
                        </p>
                    </div>

                    {/* Pricing Breakdown */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <DollarSign className="w-4 h-4 text-gray-400" />
                            <h3 className="text-[12px] font-semibold uppercase tracking-widest text-gray-400">
                                Pricing Breakdown
                            </h3>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                            <p className="text-[13px] text-gray-700 leading-relaxed">{tool.pricingDetail}</p>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                            {tool.hasFree && (
                                <Badge className="text-[10px] bg-emerald-50 text-emerald-700 border-emerald-200 px-2 py-0.5">
                                    ✓ Free Tier Available
                                </Badge>
                            )}
                        </div>
                    </div>

                    {/* Used By Founders */}
                    {tool.usedBy.length > 0 && (
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Users className="w-4 h-4 text-gray-400" />
                                <h3 className="text-[12px] font-semibold uppercase tracking-widest text-gray-400">
                                    Used By These Founders
                                </h3>
                            </div>
                            <div className="space-y-2">
                                {tool.usedBy.map((u, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shrink-0">
                                            <span className="text-[11px] font-bold text-white">
                                                {u.founder.split(" ").map((n) => n[0]).join("")}
                                            </span>
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-[13px] font-semibold text-gray-900">{u.founder}</div>
                                            <div className="text-[11px] text-gray-500">{u.company}</div>
                                            <div className="text-[12px] text-gray-600 mt-0.5">{u.useCase}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Alternatives */}
                    {tool.alternatives.length > 0 && (
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Repeat className="w-4 h-4 text-gray-400" />
                                <h3 className="text-[12px] font-semibold uppercase tracking-widest text-gray-400">
                                    Similar Tools
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {tool.alternatives.map((alt) => (
                                    <span
                                        key={alt}
                                        className="text-[12px] px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 font-medium"
                                    >
                                        {alt}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* CTA Footer */}
                <div className="px-6 pb-6">
                    <a
                        href={tool.affiliateUrl || tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-gray-900 text-white text-[13px] font-semibold rounded-xl hover:bg-gray-800 transition-colors"
                    >
                        Visit {tool.name}
                        <ExternalLink className="w-4 h-4" />
                    </a>
                    <p className="text-center text-[10px] text-gray-400 mt-2">
                        Opens in a new tab. Some links may be affiliate links.
                    </p>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default ToolDrawer;
