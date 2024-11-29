import React from "react";

export default function PricingSection() {
  return (
    <main className="px-8 mt-12 py-28 bg-blue-500 font-poppins" id="pricing">
      <section className="w-3/4 mx-auto">
        <h1 className="text-center font-bold text-4xl text-white">
          Layanan Kami
        </h1>
        <p className="text-center mt-4 font-light text-neutral-300">
          NovaTech menghadirkan solusi software berbasis web yang dirancang
          untuk mendukung kesuksesan bisnis Anda. Dari aplikasi khusus hingga
          integrasi sistem, kami memastikan kebutuhan Anda terpenuhi dengan
          kualitas terbaik.
        </p>
      </section>

      <section className="flex flex-col md:flex-row mt-16 justify-center items-center">
        {/* Paket Dasar */}
        <div className="w-80 py-12 bg-blue-500 border border-zinc-300 rounded-xl flex flex-col items-center gap-5">
          <div className="flex flex-col gap-5 items-center text-center">
            <h1 className="font-bold text-white">PAKET STARTER</h1>
            <h2 className="font-light text-3xl text-white">
              Rp 5.000.000<span className="text-lg font-light">/proyek</span>
            </h2>
            <h3 className="text-zinc-300">Pembuatan website sederhana</h3>
            <h4 className="text-zinc-300">Desain responsif</h4>
            <h5 className="text-zinc-300">
              1 Halaman utama + 2 Halaman pendukung
            </h5>
            <h6 className="text-zinc-300">Integrasi form kontak</h6>
            <p className="text-zinc-300">Dukungan teknis selama 1 bulan</p>
          </div>
          <button className="border border-zinc-300 rounded-full text-white text-xl py-2 px-5 mt-5 hover:bg-white hover:text-blue-500 duration-300">
            Pesan Sekarang
          </button>
        </div>

        {/* Paket Populer */}
        <div className="w-80 py-20 bg-gradient-to-br from-cyan-500 via-blue-500 to-lime-400 border-2 border-white rounded-xl flex flex-col items-center gap-9">
          <div className="flex flex-col gap-5 items-center text-center">
            <h1 className="border border-white rounded-full text-2xl py-1 px-3 font-bold text-white mb-4 text-center">
              TERPOPULER
            </h1>
            <h2 className="font-bold text-3xl text-black">
              Rp 10.000.000<span className="text-lg font-light">/proyek</span>
            </h2>
            <h3 className="text-white">Aplikasi web custom</h3>
            <h4 className="text-white">Desain responsif + interaktif</h4>
            <h5 className="text-white">5 Halaman utama</h5>
            <h6 className="text-white">Integrasi API dasar</h6>
            <p className="text-white">Dukungan teknis selama 3 bulan</p>
          </div>
          <button className="border border-zinc-300 rounded-full bg-white text-blue-500 text-xl py-2 px-5 mt-5 hover:bg-black hover:border-black duration-300">
            Pesan Sekarang
          </button>
        </div>

        {/* Paket Premium */}
        <div className="w-80 py-12 bg-blue-500 border border-zinc-300 rounded-xl flex flex-col items-center gap-5">
          <div className="flex flex-col gap-5 items-center text-center">
            <h1 className="font-bold text-white">PAKET PREMIUM</h1>
            <h2 className="font-light text-3xl text-white">
              Rp 20.000.000<span className="text-lg font-light">/proyek</span>
            </h2>
            <h3 className="text-zinc-300">Aplikasi web custom skala besar</h3>
            <h4 className="text-zinc-300">Desain eksklusif dan interaktif</h4>
            <h5 className="text-zinc-300">Halaman tak terbatas</h5>
            <h6 className="text-zinc-300">Integrasi API lanjutan</h6>
            <p className="text-zinc-300">Fitur e-commerce (opsional)</p>
            <p className="text-zinc-300">Dukungan teknis selama 6 bulan</p>
          </div>
          <button className="border border-zinc-300 rounded-full text-white text-xl py-2 px-5 mt-5 hover:bg-white hover:text-blue-500 duration-300">
            Pesan Sekarang
          </button>
        </div>
      </section>
    </main>
  );
}
