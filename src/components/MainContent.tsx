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
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // desktop
  if (!isMobile) {
    return (
      <div className="relative flex w-full h-full">
        {/* Sobre */}
        <div className="w-10/12 h-full bg-clr4 flex flex-col p-8 text-2xl transition-all duration-1000 ease-in-out">
          <div className="absolute top-0 left-0 lg:w-6/12 h-full p-8 text-xl font-font3">
            <h1 className="font-font1 text-4xl mb-4">{t("about")}</h1>
            <p>{t("me1")}</p>
            <p className="my-2">{t("me3")}</p>
            <p>{t("me4")}</p>
            <h1 className="font-font1 text-4xl mb-4 mt-16">CV</h1>
            <p>
              {t("cv")}{" "}
              <a
                href={
                  locale === "en"
                    ? "/CV.pdf"
                    : "/Currículo - Pedro Henrique Lima.pdf"
                }
                download
                className="underline font-font3 hover:text-clr1"
              >
                {t("cv2")}
              </a>
              {t("cv3")}{" "}
              <Link
                href="https://www.linkedin.com/in/pedrohenriquedasilvalima/"
                target="_blank"
                className="underline font-font3 hover:text-clr1"
              >
                Linkedin.
              </Link>
            </p>
          </div>
        </div>
        {/* Projetos */}
        <div
          className={`absolute top-0 right-0 h-full p-8 overflow-hidden transition-all duration-1000 ease-in-out bg-clr2 text-clr4 border-l-4 border-black ${
            active === "about" ? "w-10/12" : "w-2/12"
          }`}
          onMouseEnter={() => setActive("about")}
          onMouseLeave={() => setActive("projects")}
        >
          <h1 className="font-font1 text-4xl">{t("proj")}</h1>
          <div
            className={`grid grid-cols-2 gap-8 mt-4 font-font3 ${
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
                className="flex flex-col justify-end items-end"
              >
                <Github className="hover:text-clr1" />
                <p className="text-sm mt-1">{t("code")}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // mobile
  return (
    <div className="flex flex-col w-full">
      {/* Sobre section em cima */}
      <div className="w-full bg-clr4 p-6">
        <div className="text-lg font-font3 pb-3">
          <h1 className="font-font1 text-3xl mb-4">{t("about")}</h1>
          <p>{t("me1")}</p>
          <p className="my-2">{t("me3")}</p>
          <p>{t("me4")}</p>
          <h1 className="font-font1 text-3xl mb-4 mt-10">CV</h1>
          <p>
            {t("cv")}{" "}
            <a
              href={
                locale === "en"
                  ? "/CV.pdf"
                  : "/Currículo - Pedro Henrique Lima.pdf"
              }
              download
              className="underline font-font3 hover:text-clr1"
            >
              {t("cv2")}
            </a>
            {t("cv3")}{" "}
            <Link
              href="https://www.linkedin.com/in/pedrohenriquedasilvalima/"
              target="_blank"
              className="underline font-font3 hover:text-clr1"
            >
              Linkedin.
            </Link>
          </p>
        </div>
      </div>

      {/* Projetos section embaixo */}
      <div className="w-full bg-clr2 text-clr4 border-t-4 border-black p-6">
        <h1 className="font-font1 text-3xl mb-4 pt-4">{t("proj")}</h1>
        <div className="grid grid-cols-1 gap-6 mt-4 font-font3">
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
            <Github className="hover:text-clr1" />
            <p className="text-sm mt-1">{t("code")}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainContent;