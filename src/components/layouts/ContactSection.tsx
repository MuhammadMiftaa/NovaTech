import { AnimatedTestimonials } from "@/components/fragments/animated-testimonials";
import { Input } from "@/components/fragments/input";
import { Label } from "@/components/fragments/label";
import { BottomGradient } from "@/components/elements/bottom-gradient";
import { LabelInputContainer } from "@/components/elements/label-input-container";

export default function ContactSection() {
  return (
    <main className="font-poppins mt-12 py-28">
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

      <section className="pt-28 pb-10 px-32" id="contact">
        <h1 className="text-3xl font-bold text-black text-center mb-7">
          Hubungi Kami
        </h1>
        <div className="flex gap-10 flex-col md:flex-row">
          <form className="basis-1/2 flex flex-col justify-center">
            <LabelInputContainer className="rounded-lg mb-4">
              <Label htmlFor="name">Nama Lengkap</Label>
              <Input
                className=" rounded-lg"
                id="name"
                placeholder="Abigail Rachel"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer className="rounded-lg mb-4">
              <Label htmlFor="email">Email</Label>
              <Input
                className=" rounded-lg"
                id="email"
                placeholder="aralie@mail.com"
                type="email"
              />
            </LabelInputContainer>
            <LabelInputContainer className="rounded-lg mb-8">
              <Label htmlFor="message">Pesan</Label>
              <Input
                className=" rounded-lg"
                id="message"
                placeholder=""
                type="text"
              />
            </LabelInputContainer>
            <button
              className="mt-5 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-xl h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Kirim &rarr;
              <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </form>

          <div className="basis-1/2">
            <iframe
              className="w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8096373629423!2d106.90896277439096!3d-6.156244793830897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5e1334b4771%3A0x7c59bcd77936ebf3!2sPT%20Novatech%20Multicomlink!5e0!3m2!1sid!2sid!4v1732807055324!5m2!1sid!2sid"
              width="450"
              height="350"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
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
