import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";


interface ProjectCardProps {
  title: string;
  texto: string;
  caminho: string;
}

function ProjectCard({ title, texto, caminho }: ProjectCardProps) {
    const t = useTranslations("HomePage");



  return (
    <div className="text-clr4">
      <h1 className="2xl:text-xl md:text-lg text-xl font-font3">{title}</h1>
      <p className="2xl:text-base md:text-sm text-base mt-1">{texto}</p>
      <Link href={caminho} target="_blank" className="flex w-fit">
        <p className="mt-2 text-clr4 hover:text-clr1 italic rounded-sm">{t("visit")}</p>
      </Link>
    </div>
  );
}

export default ProjectCard;
