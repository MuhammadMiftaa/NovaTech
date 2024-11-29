import { Input } from "@/components/fragments/input";
import { Label } from "@/components/fragments/label";
import { BottomGradient } from "@/components/elements/bottom-gradient";
import { LabelInputContainer } from "@/components/elements/label-input-container";

export default function ContactSection() {
  return (
    <main className="font-poppins md:mt-12 pb-28 pt-20 md:pt-28">
      <section className="pt-12 md:pt-28 pb-10 px-8 md:px-32" id="contact">
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