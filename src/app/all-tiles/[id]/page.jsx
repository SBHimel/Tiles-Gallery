import React from 'react';
import { Button, Chip } from "@heroui/react";
import Link from 'next/link';
import { FaArrowLeft, FaShoppingCart, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const PhotoDetailsPage = async ({ params }) => {
    const { id } = await params;

    // ডাটা ফেচ করা
    const res = await fetch('https://tiles-gallery-opal.vercel.app/data.json', {
        next: { revalidate: 60 } // প্রতি ১ মিনিটে ডাটা আপডেট হবে (ঐচ্ছিক)
    });
    const photos = await res.json();

    // আইডি অনুযায়ী ডাটা খুঁজে বের করা
    const photo = photos.find(p => String(p.id) === String(id));

    if (!photo) {
        return (
            <div className="h-screen flex flex-col items-center justify-center space-y-4">
                <h2 className="text-2xl font-bold text-gray-600">Tile not found!</h2>
                <Link href="/all-tiles">
                    <Button color="primary">Back to Gallery</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-6xl mx-auto px-4">
                
                {/* Back Button */}
                <Link href="/all-tiles" className="inline-flex items-center text-primary font-semibold mb-8 hover:underline gap-2">
                    <FaArrowLeft /> Back to All Tiles
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl p-6 md:p-10 shadow-xl shadow-gray-200/50 border border-gray-100">
                    
                    {/* Left: Image Section */}
                    <div className="relative group">
                        <div className="overflow-hidden rounded-2xl bg-gray-100 aspect-square lg:aspect-auto lg:h-[500px]">
                            <img 
                                src={photo.image} 
                                alt={photo.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        {/* Floating Price Badge */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                            <span className="text-2xl font-black text-primary">${photo.price}</span>
                        </div>
                    </div>

                    {/* Right: Info Section */}
                    <div className="flex flex-col space-y-6">
                        <div className="space-y-2">
                            <Chip color="primary" variant="flat" size="sm" className="uppercase font-bold tracking-wider">
                                {photo.category}
                            </Chip>
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                                {photo.title}
                            </h1>
                        </div>

                        <div className="flex items-center gap-4 py-2">
                            <div className="flex items-center gap-2">
                                {photo.inStock ? (
                                    <><FaCheckCircle className="text-green-500" /> <span className="text-green-600 font-medium">In Stock</span></>
                                ) : (
                                    <><FaTimesCircle className="text-red-500" /> <span className="text-red-600 font-medium">Out of Stock</span></>
                                )}
                            </div>
                            <span className="text-gray-300">|</span>
                            <span className="text-gray-600 font-medium">Material: <span className="text-gray-900">{photo.material || "Ceramic"}</span></span>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-primary/20 pl-4">
                            "{photo.description}"
                        </p>

                        <div className="space-y-4 pt-4">
                            <h3 className="font-bold text-gray-900">Key Highlights:</h3>
                            <div className="flex flex-wrap gap-2">
                                {photo.tags?.map((tag, i) => (
                                    <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium capitalize">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-8">
                            <Button 
                                size="lg" 
                                color="primary" 
                                className="flex-1 font-bold text-lg h-16 shadow-lg shadow-blue-200"
                                radius="full"
                                startContent={<FaShoppingCart />}
                                isDisabled={!photo.inStock}
                            >
                                {photo.inStock ? "Add to Project" : "Not Available"}
                            </Button>
                            <Button 
                                variant="bordered" 
                                size="lg" 
                                className="font-bold h-16"
                                radius="full"
                            >
                                Save to Wishlist
                            </Button>
                        </div>
                        
                        <p className="text-center text-xs text-gray-400 mt-4">
                            Standard shipping available in 3-5 business days.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoDetailsPage;