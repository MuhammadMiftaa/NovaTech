import React from "react";
import { HoverEffect } from "@/components/fragments/card-hover-effect";
import { Chart1 } from "@/components/fragments/pie-chart";
import { Chart2 } from "@/components/fragments/bar-chart";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-8 mt-12 pt-28" id="about">
      <section>
        <h1 className="text-center font-bold text-4xl text-black">
          Mengapa Memilih NovaTech?
        </h1>
        <p className="text-center mt-4 font-light text-neutral-700">
          Kami percaya setiap bisnis adalah unik, begitu pula solusi yang
          dibutuhkan. Dengan keunggulan dalam inovasi, tim ahli, dan pendekatan
          yang berfokus pada klien, NovaTech siap menjadi mitra teknologi Anda
          dalam mengembangkan aplikasi web yang sesuai dengan kebutuhan dan visi
          Anda.
        </p>
        <HoverEffect items={projects} />
      </section>

      <section className="mt-10">
        <h2 className="text-center font-bold text-3xl text-black">
          Tim Profesional dan Kepuasan Klien Adalah Prioritas Kami
        </h2>
        <div className="flex gap-5 justify-between mt-12 flex-col md:flex-row-reverse">
          <Chart2 />
          <Chart1 />
        </div>
      </section>
    </main>
  );
}

export const projects = [
  {
    title: "Solusi Kustom",
    link: "",
    description:
      "Menyediakan solusi aplikasi web yang dirancang khusus untuk memenuhi kebutuhan dan tujuan unik bisnis Anda.",
  },
  {
    title: "Tim Ahli",
    link: "",
    description:
      "Tim pengembang berpengalaman untuk menghadirkan aplikasi inovatif dan berkualitas tinggi.",
  },
  {
    title: "Pendekatan Berbasis Klien",
    link: "",
    description:
      "Mengutamakan komunikasi yang jelas dan kolaborasi untuk memastikan visi Anda menjadi inti dari setiap proyek.",
  },
];
