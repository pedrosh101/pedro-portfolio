import { illustrations } from "@/app/data/il";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{ locale: string; id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, id } = await params; // 🔥 Agora pegamos os params corretamente

  // Encontrar o projeto pelo ID
  const project = illustrations.find((item) => item.id.toString() === id);

  // Se o projeto não for encontrado, retorna um 404
  if (!project) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <Image
        src={project.caminho}
        alt={project.title}
        width={600}
        height={600}
        className="my-4 object-cover"
      />
      <p className="text-lg text-gray-600">{project.texto}</p>

      {/* Link de volta para a página inicial com o idioma correto */}
      <a href={`/${locale}`} className="mt-4 text-blue-500 underline">
        Voltar para Home
      </a>
    </div>
  );
}
