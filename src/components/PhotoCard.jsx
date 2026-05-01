"use client";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";

const PhotoCard = ({ photo }) => {
    return (
        // 'h-full' এবং 'flex-col' যোগ করা হয়েছে যাতে কার্ড লম্বা হয় এবং সমান থাকে
        <Card className="border rounded-2xl p-3 hover:shadow-xl transition duration-300 h-full flex flex-col justify-between">

            <div>
                {/* Image Container - Aspect Square */}
                <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-gray-100">
                    <Image
                        src={photo.image}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={photo.title}
                        className="object-cover hover:scale-105 transition duration-300"
                    />

                    {/* Category Chip */}
                    <Chip size="sm" color="secondary" className="absolute top-2 right-2 capitalize font-semibold shadow-sm">
                        {photo.category}
                    </Chip>

                    {/* Stock Badge */}
                    {!photo.inStock && (
                        <span className="absolute top-2 left-2 bg-red-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase">
                            Out of Stock
                        </span>
                    )}
                </div>

                {/* Content */}
                <div className="mt-4 space-y-2">
                    {/* Title - নির্দিষ্ট হাইট দেওয়া হয়েছে যাতে ২ লাইন পর্যন্ত সমান থাকে */}
                    <h2 className="font-bold text-xl leading-tight min-h-[56px] line-clamp-2">
                        {photo.title}
                    </h2>

                    {/* Description - ৩ লাইনের পর ডট ডট আসবে এবং হাইট ফিক্সড থাকবে */}
                    <p className="text-sm text-gray-500 line-clamp-3 min-h-[60px]">
                        {photo.description}
                    </p>
                </div>
            </div>

            {/* নিচের অংশ - যা সবসময় একদম নিচে থাকবে */}
            <div className="mt-4">
                {/* Price + Like */}
                <div className="flex justify-between items-center">
                    <p className="text-blue-600 font-extrabold text-lg">
                        ${photo.price}
                    </p>

                    <div className="flex items-center gap-1.5 text-gray-500 group cursor-pointer">
                        <FaHeart className="group-hover:text-red-500 transition-colors" />
                        <span className="text-sm font-medium">0</span>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3 min-h-[28px]">
                    {photo.tags?.slice(0, 2).map((tag, i) => (
                        <span
                            key={i}
                            className="text-[10px] font-medium bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md border border-blue-100"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Button */}
                <Link href={`/all-tiles/${photo.id}`} className="block mt-4">
                    <Button
                        className="w-full font-semibold text-base py-5 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                        color="primary"
                        radius="lg"
                    >
                        View Details →
                    </Button>
                </Link>
            </div>
        </Card>
    );
};

export default PhotoCard;