import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import about from "../../../../public/about.jpg";

export default function About() {
  const t = useTranslations("about");

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white flex flex-col mx-28 p-8 text-clr1 font-imfell">
        <div className="flex gap-8 mb-12 w-full">
          <div className="w-1/2">
            <h1 className="text-2xl italic mb-6">{t("hi")}</h1>
            <div className="border-4 border-clr1 p-8 flex items-center justify-center text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor
              augue purus, vitae congue orci convallis a. Fusce iaculis mollis
              vestibulum. Praesent semper libero et placerat accumsan. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Pellentesque quis tellus dui. Phasellus ac magna
              sed lectus scelerisque mattis ut nec tortor. Mauris ut condimentum
              ipsum. Nam eu lectus interdum purus viverra consectetur sed
              pretium massa. Aenean pharetra consectetur cursus.
            </div>
          </div>
          <div className="w-1/2 bg-brown-800 flex items-center justify-center rounded-full text-xl">
            <Image src={about} alt="about" width={200} height={200} />
          </div>
        </div>

        <div className="w-full text-center mb-12">
          <p className="italic text-xl">{t("touch")}</p>
          <div className="border-4 border-clr1 p-8 mt-2 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor
            augue purus, vitae congue orci convallis a. Fusce iaculis mollis
            vestibulum. Praesent semper libero et placerat accumsan. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Pellentesque quis tellus dui. Phasellus ac magna sed
            lectus scelerisque mattis ut nec tortor. Mauris ut condimentum
            ipsum. Nam eu lectus interdum purus viverra consectetur sed pretium
            massa. Aenean pharetra consectetur cursus.
          </div>
        </div>

        <div className="flex justify-around w-full mb-12 text-center text-xl">
          <div>
            <h2 className="italic">published work</h2>
            <ul className="mt-2">
              <li>+ Lista</li>
              <li>+ A</li>
              <li>+ B</li>
              <li>+ C</li>
            </ul>
          </div>
          <div>
            <h2 className="italic">exhibitions</h2>
            <ul className="mt-2">
              <li>+ Lista</li>
              <li>+ A</li>
              <li>+ B</li>
              <li>+ C</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="italic mb-6 text-xl">{t("ig")}</h2>
          <div className="grid grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-24 h-24 bg-brown-800"></div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
