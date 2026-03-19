import React from 'react';

const FoundersPulse: React.FC = () => {
    const items = [
        "🚀 Latest Exit: $450k (Micro-SaaS)",
        "⚡ New Niche Identified: AI Legal Tech",
        "🟢 1,243 Founders Online Now",
        "📈 Market Trend: +22% AI Search Volume",
        "💼 Recent Acquisition: $1.2M E-commerce Brand",
    ];

    // Duplicate items for seamless scrolling
    const scrollItems = [...items, ...items, ...items];

    return (
        <div className="w-full bg-[#111111] text-white border-y border-[#222222] py-2 overflow-hidden flex items-center">
            <div className="flex animate-marquee whitespace-nowrap">
                {scrollItems.map((item, index) => (
                    <span
                        key={index}
                        className="text-[11px] font-mono tracking-wider mx-6 text-gray-400 flex items-center"
                    >
                        {item}
                        <span className="mx-6 text-gray-700">|</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default FoundersPulse;
