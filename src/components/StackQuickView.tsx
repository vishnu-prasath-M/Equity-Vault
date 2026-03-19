import React from 'react';
import { brandLogos } from '@/data/mockData';

const StackQuickView: React.FC = () => {
    const topLogos = [
        { name: "Stripe", url: brandLogos.stripe },
        { name: "Vercel", url: brandLogos.vercel },
        { name: "Notion", url: brandLogos.notion },
        { name: "Figma", url: brandLogos.figma },
        { name: "OpenAI", url: brandLogos.openai },
    ];

    return (
        <div className="w-full border-y border-slate-200 bg-white py-4 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-6 justify-between">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest whitespace-nowrap">
                    Top Stack This Month
                </div>

                <div className="flex items-center justify-center sm:justify-end gap-8 flex-wrap">
                    {topLogos.map((logo) => (
                        <div key={logo.name} className="opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                            <img src={logo.url} alt={logo.name} className="h-5 object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StackQuickView;
