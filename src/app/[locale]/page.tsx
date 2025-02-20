import { useTranslations } from "next-intl";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import demo from "../../../public/work/demo.jpg";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <>
      <Navbar />

      {/* Grade de imagens */}
      <div className="grid grid-cols-3 grid-rows-3 gap-2 p-4 mx-24">
        {[...Array(9)].map((_, index) => (
          <Image
            key={index}
            src={demo}
            alt={`Demo ${index + 1}`}
            width={400}
            height={400}
            className="object-cover"
          />
        ))}
      </div>
    </>
  );
}
