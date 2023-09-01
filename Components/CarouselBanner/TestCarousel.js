import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect } from 'react';

const Carousel = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [transitionEnabled, setTransitionEnabled] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTransitionEnabled(true);
            setActiveIndex((prevIndex) =>
                prevIndex === items.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [items.length]);

    const goToSlide = (index) => {
        setTransitionEnabled(true);
        setActiveIndex(index);
    };

    const handleTransitionEnd = () => {
        setTransitionEnabled(false);
    };

    const goToPreviousSlide = () => {
        setTransitionEnabled(true);
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const goToNextSlide = () => {
        setTransitionEnabled(true);
        setActiveIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative overflow-hidden rounded-lg">
            <div
                className={`flex transition-transform ease-in-out  duration-500 ${transitionEnabled ? 'transform' : ''
                    }`}
                style={{
                    transform: `translateX(-${activeIndex * 100}%)`,
                }}
                onTransitionEnd={handleTransitionEnd}
            >
                {items.map((item, index) => (
                    <div key={index} className="w-full h-40 sm:h-60 flex-shrink-0">
                        <img src={item.desktopImageURL} alt={item.caption} className="w-full h-40 sm:h-60" />
                        <div className="text-white absolute bottom-0 left-0 p-4">
                            {item.caption}
                        </div>
                    </div>
                ))}
                {items.length > 1 && (
                    <div className="w-full h-full flex-shrink-0">
                        <img src={items[0].imageUrl} alt={items[0].caption} className="w-full h-auto" />
                        <div className="text-white absolute bottom-0 left-0 p-4">
                            {items[0].caption}
                        </div>
                    </div>
                )}
            </div>
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-500 rounded-full p-2 hover:bg-gray-700"
                onClick={goToPreviousSlide}
            >
                <ChevronLeftIcon className="h-8 text-white" />
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-500 rounded-full p-2 hover:bg-gray-700"
                onClick={goToNextSlide}
            ><ChevronRightIcon className="h-8 text-white" />

            </button>
            <div className="flex absolute left-0 right-0 justify-center bottom-4">
                {items.map((item, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 rounded-full mx-1 focus:outline-none transition-opacity duration-300 ${index === activeIndex ? 'bg-gray-800 opacity-100' : 'bg-gray-400 opacity-50'
                            }`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel
