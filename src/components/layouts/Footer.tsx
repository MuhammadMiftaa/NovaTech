import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className="w-full pt-10 px-8 font-poppins text-white relative after:absolute after:inset-0 after:bg-gradient-to-b after:from-black after:via-black-transparent after:to-black-transparent"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="z-50 relative flex flex-col items-center border-b border-neutral-500 pb-5">
        <div className="w-full flex gap-8 justify-center text-sm text-neutral-500">
          <Link href={"#home"}>Home</Link>
          <Link href={"#about"}>About</Link>
          <Link href={"#service"}>Service</Link>
          <Link href={"#contact"}>Contact</Link>
        </div>
        <div className="mt-6 flex gap-3">
          <Image
            src="/logo.png"
            width={32}
            height={32}
            className="h-8 rounded-full"
            alt="Novatech Logo"
          />
          <h1 className="text-xl font-bold">NovaTech</h1>
        </div>
        {/* <p className="text-center font-light text-neutral-500 mb-4 mt-2">
          Serahkan dan percayakan pada kami.
        </p> */}
        <div className="flex gap-5 text-neutral-500 text-xl mt-4">
          <div className="cursor-pointer duration-200 hover:text-white"><FaFacebook /></div>
          <div className="cursor-pointer duration-200 hover:text-white"><FaInstagram /></div>
          <div className="cursor-pointer duration-200 hover:text-white"><FaXTwitter /></div>
          <div className="cursor-pointer duration-200 hover:text-white"><FaYoutube /></div>
        </div>
      </div>
      <div className="relative z-50 w-full py-3">
        <h1 className="text-neutral-500 font-light text-center">
          Copyright &copy; 2024 | NovaTech. All rights reserved.
        </h1>
      </div>
    </footer>
  );
}
