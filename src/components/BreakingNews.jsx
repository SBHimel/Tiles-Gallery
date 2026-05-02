"use client";
import React from 'react';
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    const keywords = [
        "Premium Ceramics", "Luxury Marble", "Modern Mosaic",
        "Eco-Friendly Tiles", "Bathroom Special", "Kitchen Tiles",
        "100% Waterproof", "Durable Material", "Anti-Slip Design"
    ];

    return (
        <div className="bg-blue-600 py-2 overflow-hidden flex items-center">
            
            <div className="pl-4 pr-2 z-1">
                <button className="relative bg-[#1E3A8A] text-white px-6 py-3 rounded-md font-bold text-lg shadow-md animate-pulse border border-blue-400 whitespace-nowrap">
                    Latest News
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-300 rounded-full animate-ping"></span>
                </button>
            </div>

         
            <Marquee gradient={false} speed={50} pauseOnHover={true}>
                {keywords.map((text, index) => (
                    <div key={index} className="flex items-center mx-10">
                        <span className="text-white text-lg md:text-xl font-black uppercase tracking-widest">
                            {text}
                        </span>
                        <span className="mx-6 text-blue-300 text-xl">✦</span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default BreakingNews;