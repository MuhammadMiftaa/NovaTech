import React from "react";
import { AnimatedTestimonials } from "@/components/fragments/animated-testimonials";

export default function ReviewSection() {
  return (
    <main className="font-poppins pt-28" id="review">
      <section>
        <div className="w-3/4 mx-auto flex flex-col">
          <h1 className="text-4xl font-bold text-black text-center">
            Apa Kata Klien Kami?
          </h1>
          <h2 className="font-light text-neutral-700 text-center">
            Dengarkan cerita sukses dari mitra kami yang telah mempercayakan
            pengembangan aplikasi mereka kepada NovaTech. Kepuasan Anda adalah
            prioritas utama kami.
          </h2>
        </div>
        <AnimatedTestimonials testimonials={testimonials} />
      </section>
    </main>
  );
}

export const testimonials = [
  {
    quote:
      "Perhatian terhadap detail dan fitur inovatif dari NovaTech benar-benar mengubah cara kerja tim kami. Ini adalah solusi yang selama ini kami cari.",
    name: "Sarah Chen",
    designation: "Manajer Produk di TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Proses implementasi berjalan lancar, dan hasilnya melebihi ekspektasi kami. Fleksibilitas platform yang ditawarkan NovaTech sungguh luar biasa.",
    name: "Michael Rodriguez",
    designation: "CTO di InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Solusi dari NovaTech secara signifikan meningkatkan produktivitas tim kami. Antarmuka yang intuitif membuat tugas-tugas kompleks menjadi lebih sederhana.",
    name: "Emily Watson",
    designation: "Direktur Operasional di CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Dukungan yang luar biasa dan fitur yang andal. Jarang sekali menemukan layanan yang benar-benar memenuhi semua janjinya seperti NovaTech.",
    name: "James Kim",
    designation: "Kepala Tim Teknik di DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Skalabilitas dan performa aplikasi yang dikembangkan NovaTech telah membawa perubahan besar bagi organisasi kami. Sangat direkomendasikan untuk bisnis yang sedang berkembang.",
    name: "Lisa Thompson",
    designation: "Wakil Presiden Teknologi di FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
