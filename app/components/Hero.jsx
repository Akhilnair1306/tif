import { Button } from '@/components/ui/button';
import React from 'react';

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-3 h-screen overflow-hidden">
            <div className="flex-1 flex items-center justify-center order-first md:order-last mb-6 md:mb-0 h-1/2 md:h-auto w-full">
                <img
                    src="/hero.jpg"
                    alt="Hero Image"
                    className="w-full h-full object-cover md:rounded-bl-[400px] rounded-bl-[200px]"
                />
                <img
                    src="/Vector1.png"
                    alt="Vector Overlay"
                    className="absolute md:top-[11px] md:right-[-420px] md:w-full md:h-full w-[375px] h-[425px] object-contain pointer-events-none z-10"
                />
                <Button
                    variant="outline"
                    className="absolute md:top-8 md:right-8 top-4 right-2 bottom-3 bg-red-600 text-white rounded-full px-6 py-2 z-10"
                >
                    Get in Touch
                </Button>
            </div>

            <div className="flex-1 flex flex-col items-center md:items-start md:ml-16 order-last md:order-first text-center md:text-left px-4">
                <div className="hidden md:flex mb-4">
                    <img src="/logo.png" alt="Logo" className="h-16" /> 
                </div>

                <div className="mt-4 md:mt-48">
                    <h1 className="text-3xl md:text-6xl font-bold mb-4 text-blue-950 font-sourceSans">
                        Discover the <br />
                        <span className="text-red-600">Best </span>
                        Food <br />and Drinks
                    </h1>
                </div>

                <p className="text-sm md:text-md mb-6 font-sans font-extralight text-gray-500">
                    Naturally made Healthcare Products for the
                    <br />better care & support of your body.
                </p>

                <Button
                    variant="outline"
                    className="rounded-full h-12 bg-red-500 text-white"
                >
                    Explore Now!
                </Button>
            </div>
        </div>
    );
}

export default Hero;
