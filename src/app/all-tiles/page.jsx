"use client";
import React, { useEffect, useState } from "react";
import PhotoCard from "@/components/PhotoCard"; // তোমার আগের কার্ডটি ইম্পোর্ট করো
import { Input, Button, Spinner } from "@heroui/react";
import { FaSearch } from "react-icons/fa";

const AllTilesPage = () => {
    const [tiles, setTiles] = useState([]);
    const [filteredTiles, setFilteredTiles] = useState([]);
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch("https://tiles-gallery-opal.vercel.app/data.json")
            .then((res) => res.json())
            .then((data) => {
                setTiles(data);
                setFilteredTiles(data);
                setLoading(false);
            });
    }, []);

  
    useEffect(() => {
        let tempTiles = tiles;

        // categaory filter
        if (activeCategory !== "All") {
            tempTiles = tempTiles.filter((t) => t.category.toLowerCase() === activeCategory.toLowerCase());
        }

        // searche er kam kaj 
        if (search) {
            tempTiles = tempTiles.filter((t) =>
                t.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        setFilteredTiles(tempTiles);
    }, [search, activeCategory, tiles]);

    const categories = ["All", "Ceramic", "Marble", "Mosaic", "Geometric"];

    if (loading) return <div className="h-screen flex justify-center items-center"><Spinner size="lg" /></div>;

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 min-h-screen">

            {/* Header or Search bar ekhane  */}

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
                <h1 className="text-3xl font-black tracking-tighter">Explore All Tiles</h1>

                <div className="w-full md:w-96">
                    <Input
                        fullWidth
                        placeholder="Search by tile name..."
                        startContent={
                            <div className="pointer-events-none flex items-center">
                                <FaSearch className="text-gray-400" />
                            </div>
                        }
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="shadow-sm"
                    />
                </div>
            </div>

            {/* Category Button gula ehane */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
                {categories.map((cat) => (
                    <Button
                        key={cat}
                        size="sm"
                        radius="full"
                        variant={activeCategory === cat ? "solid" : "flat"}
                        color={activeCategory === cat ? "primary" : "default"}
                        onClick={() => setActiveCategory(cat)}
                        className="font-semibold"
                    >
                        {cat}
                    </Button>
                ))}
            </div>

            {/*Tilse er Grid */}
            {filteredTiles.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredTiles.map((tile) => (
                        <PhotoCard key={tile.id} photo={tile} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <p className="text-xl text-gray-400 font-medium">No tiles found matching your search.</p>
                    <Button
                        variant="light"
                        color="primary"
                        onClick={() => { setSearch(""); setActiveCategory("All"); }}
                    >
                        Clear all filters
                    </Button>
                </div>
            )}
        </div>
    );
};

export default AllTilesPage;