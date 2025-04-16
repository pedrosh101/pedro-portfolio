"use client";
import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { sites } from "../app/data/sites";
import { useLocale, useTranslations } from "next-intl";
import { Github } from "lucide-react";
import Link from "next/link";

function MainContent() {
  const t = useTranslations("HomePage");
  const locale = useLocale() as keyof typeof sites;
  const [active, setActive] = useState<"projects" | "about">("projects");
  const [activeLinkTab, setActiveLinkTab] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < 1050);
      };

      checkIfMobile();
      window.addEventListener("resize", checkIfMobile);
      return () => window.removeEventListener("resize", checkIfMobile);
    }
  }, []);

  // desktop
  if (!isMobile) {
    return (
      <div className="relative flex w-full h-full">
        {/* Sobre */}
        <div className="w-10/12 h-full bg-white flex flex-col text-2xl duration-1000 ease-in-out">
          <div className="absolute top-0 left-0 lg:w-8/12 h-full p-6 2xl:text-xl text-lg font-font3">
            <h1 className="font-font1 2xl:text-4xl md:text-3xl mb-4">
              {t("about")}
            </h1>
            <p>{t("me1")}</p>
            <p className="my-2">{t("me3")}</p>
            <p>{t("me4")}</p>
            <h1 className="font-font1 2xl:text-4xl md:text-3xl mb-4 mt-6 2xl:mt-12">
              {t("me5")}
            </h1>
            <p>{t("cv")}</p>
            <p className="my-2">
              HTML, CSS, JavaScript, React.js, Next.js, TypeScript, Tailwind CSS
              & Wordpress.
            </p>
            <p>{t("cv3")}</p>
          </div>
        </div>
        {/* Projetos */}
        <div
          className={`absolute top-0 right-0 h-full z-20 p-6 overflow-hidden transition-all duration-1000 ease-in-out bg-clr3 text-white border-l-4 border-black ${
            active === "about" ? "w-10/12" : "w-2/12"
          }`}
          onMouseEnter={() => setActive("about")}
          onMouseLeave={() => setActive("projects")}
        >
          <h1 className="font-font1 2xl:text-4xl md:text-3xl">{t("proj")}</h1>
          <div
            className={`grid grid-cols-2 2xl:gap-8 gap-5 mt-4 font-font3 ${
              active === "about" ? "block" : "hidden"
            }`}
          >
            {sites[locale]?.map((site) => (
              <ProjectCard
                key={site.id}
                title={site.title}
                texto={site.texto}
                caminho={site.caminho}
              />
            ))}
            <div className="absolute bottom-0 right-0 p-6">
              <Link
                href="https://github.com/pedrosh101/"
                target="_blank"
                className="flex flex-col justify-end items-end hover:text-clr2"
              >
                <Github />
                <p className="text-sm mt-1">{t("code")}</p>
              </Link>
            </div>
          </div>
        </div>
        {/* links */}
        <div
          className={`absolute left-0 bottom-0 w-full z-10 overflow-hidden transition-all text-white duration-1000 ease-in-out bg-clr1 border-t-4 border-black 
  ${activeLinkTab ? "2xl:h-[40%] h-[54%]" : "2xl:h-[11%] h-[16%]"}`}
          onMouseEnter={() => setActiveLinkTab(true)}
          onMouseLeave={() => setActiveLinkTab(false)}
        >
          <div className="p-6">
            <h1 className="font-font1 2xl:text-4xl md:text-3xl">LINKS</h1>
            {activeLinkTab && (
              <ul className="mt-4 font-font3 space-y-2 text-lg ">
                <li>
                  <a
                    href="https://linkedin.com/in/pedrohenriquedasilvalima"
                    target="_blank"
                    className="hover:text-clr2 underline"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/pedrosh101"
                    target="_blank"
                    className="hover:text-clr2 underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:pedro.sh101@gmail.com"
                    className="hover:text-clr2 underline"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={
                      locale === "en"
                        ? "/CV.pdf"
                        : "/Currículo - Pedro Henrique Lima.pdf"
                    }
                    download
                    className="underline hover:text-clr2"
                  >
                    {t("cv2")}
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }

  // mobile
  return (
    <div className="flex flex-col w-full">
      {/* Sobre section em cima */}
      <div className="w-full bg-white p-6">
        <div className="text-lg font-font3 pb-3">
          <h1 className="font-font1 text-3xl py-2">{t("about")}</h1>
          <p>{t("me1")}</p>
          <p className="my-2">{t("me3")}</p>
          <p>{t("me4")}</p>
          <h1 className="font-font1 text-3xl mb-4 mt-10">{t("me5")}</h1>
          <p>{t("cv")}</p>
          <p className="my-2">
            HTML, CSS, JavaScript, React.js, Next.js, TypeScript, Tailwind CSS &
            Wordpress.
          </p>
          <p>{t("cv3")}</p>
        </div>
      </div>

      {/* Projetos  */}
      <div className="w-full bg-clr3 text-white border-t-4 border-black p-6">
        <h1 className="font-font1 text-3xl mb-6 pt-4">{t("proj")}</h1>
        <div className="grid grid-cols-1 gap-6 mt-2 font-font3">
          {sites[locale]?.map((site) => (
            <ProjectCard
              key={site.id}
              title={site.title}
              texto={site.texto}
              caminho={site.caminho}
            />
          ))}
        </div>
        <div className="flex justify-end mt-6">
          <Link
            href="https://github.com/pedrosh101/"
            target="_blank"
            className="flex flex-col justify-end items-end"
          >
            <Github className="hover:text-clr2" />
            <p className="text-sm mt-1">{t("code")}</p>
          </Link>
        </div>
      </div>

      {/* links */}
      <div className="w-full bg-clr2 text-black border-t-4 border-black p-6">
        <h1 className="font-font1 text-3xl py-2">LINKS</h1>

        <ul className="mt-4 font-font3 space-y-2 text-lg ">
          <li>
            <a
              href="https://linkedin.com/in/pedrohenriquedasilvalima"
              target="_blank"
              className="underline"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/pedrosh101"
              target="_blank"
              className="underline"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="mailto:pedro.sh101@gmail.com"
              className="underline"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href={
                locale === "en"
                  ? "/CV - Pedro Henrique.pdf"
                  : "/Currículo - Pedro Henrique Lima.pdf"
              }
              download
              className="underline"
            >
              {t("cv2")}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainContent;
