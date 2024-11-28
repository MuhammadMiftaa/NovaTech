"use client";
import { WorldMap } from "@/components/fragments/world-map";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <main className="font-poppins">
      <section className="relative h-screen w-full flex flex-col items-center justify-center">
        <Image
          className="relative w-full h-screen after:bg-black after:opacity-100 after:absolute after:inset-0 after:z-10"
          src={"/hero.jpg"}
          width={2000}
          height={2000}
          alt="hero-image"
        />
        <div className=" absolute bottom-0 w-full flex flex-col justify-center items-center h-1/2 bg-gradient-to-b from-transparent to-white">
          <h1 className="text-7xl font-bold">NovaTech</h1>
          <h2 className="text-2xl font-light text-neutral-800">
            Mitra Profesional Anda dalam Solusi Aplikasi Web Inovatif.
          </h2>
        </div>
      </section>

      <section className="pt-28 dark:bg-black bg-white w-full" id="home">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
            Konektivitas{" "}
            <span className="text-neutral-400">
              {"Luas".split("").map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </p>
          <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
            Nikmati kebebasan bekerja di mana saja dengan solusi aplikasi web
            dari NovaTech. Dirancang untuk mendukung fleksibilitas Anda,
            sempurna bagi profesional modern dan pelaku bisnis global.
          </p>
        </div>
        <WorldMap
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
              }, // Alaska (Fairbanks)
              end: {
                lat: 34.0522,
                lng: -118.2437,
              }, // Los Angeles
            },
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            },
          ]}
        />
      </section>
    </main>
  );
}
