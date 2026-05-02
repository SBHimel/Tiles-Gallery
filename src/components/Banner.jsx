"use client";
import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import "animate.css";

const Banner = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: "url('/bgimage.jpg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>


      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="animate__animated animate__fadeInDown text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Discover Your <span className="text-primary">Perfect Aesthetic</span>
        </h1>

        <p className="animate__animated animate__fadeInUp animate__delay-1s text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Explore our premium collection of ceramic, marble, and geometric tiles to transform your space into a masterpiece.
        </p>

        <div className="animate__animated animate__zoomIn animate__delay-2s">
          <Link href="/all-tiles">
  <Button
    color="primary"
    size="lg"
    radius="full"
    className="font-bold text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform"
  >
    Browse Now
  </Button>
</Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;