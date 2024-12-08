// components/HeroBanner.tsx
import Image from "next/image";
import logo from "../assets/logo.png";

export default function HeroBanner() {
    return (
      <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-blue-50 px-6 py-10">
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Find Your Perfect Bandages
          </h1>
          <p className="text-gray-600 mb-6">
            The best bandages to heal your wounds with care and love.
          </p>
          <button className="px-6   rounded-md hover:bg-blue-700">
            Shop Now
          </button>
        </div>
        <img
          src="/hero-image.png"
          alt="Bandages"
          className="w-full md:w-1/2 rounded-lg"
        />
      </div>
    );
  };
  
  