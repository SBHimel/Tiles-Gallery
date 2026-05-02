import React from 'react';
import PhotoCard from './PhotoCard';

const TopGenerations = async () => {
    const res = await fetch('https://tiles-gallery-opal.vercel.app/data.json')
    const photos = await res.json()
    const topPhotos = photos.slice(0, 4)

    // console.log(topPhotos);
    return (
        <div>

            <div className="flex flex-col items-center mb-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mt-8">Featured Collections</h2>
                <div className="w-20 h-1 bg-primary mt-2 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    topPhotos.map(photo => (
                        <PhotoCard key={photo.id} photo={photo} />
                    ))
                }
            </div>
        </div>
    );
};

export default TopGenerations;