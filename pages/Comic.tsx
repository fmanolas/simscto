"use client";

import { useState } from "react";
import Image from "next/image";

import image1 from "/public/comic1.jpg";
import image2 from "/public/comic2.jpg";
import image3 from "/public/comic3.jpg";
import image4 from "/public/comic4.jpg"; // Add more images as needed
import { Orbitron } from "next/font/google";
import PageLayout from "@/components/PageLayout";

const images = [
  { src: image1, alt: "Comic 1", width: 600, height: 800 },
  { src: image2, alt: "Comic 2", width: 600, height: 800 },
  { src: image3, alt: "Comic 3", width: 600, height: 800 },
  { src: image4, alt: "Comic 4", width: 600, height: 800 },
];

const orbitron = Orbitron({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
export default function Comic() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <PageLayout>
      <div className={` min-h-screen flex flex-col`}>
        {/* Main Content */}
        <main className="flex flex-col items-center  w-full pt-36 space-y-8 px-6">
          {/* Title Section */}
          <h1
            className={`text-4xl lg:text-5xl text-center ${orbitron.className}`}
          >
            Into The SIM
          </h1>

          {/* Comic Image Section */}
          <div className="relative w-full max-w-4xl flex items-center justify-center bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <Image
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              width={images[currentImageIndex].width}
              height={images[currentImageIndex].height}
              className="rounded-lg shadow-lg object-contain"
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-6 mt-8">
            <button
              onClick={handlePrevious}
              className="px-8 py-3 bg-teal-500 text-white rounded-full shadow-md hover:bg-teal-600 transition"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-teal-500 text-white rounded-full border-radius shadow-md hover:bg-teal-600 transition"
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </PageLayout>
  );
}
