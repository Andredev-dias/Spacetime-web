import { EmptyMemories } from "@/components/EmptyMemories";
import { api } from "@/lib/api";
import { cookies } from "next/headers";
import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-br";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

dayjs.locale(ptBr);

interface Memory {
  id: string;
  coverUrl: string;
  excerpt: string;
  createdAt: string;
}

export default async function Home() {
  const isAuthenticated = cookies().has("token");

  if (!isAuthenticated) {
    return <EmptyMemories />;
  }

  const token = cookies().get("token")?.value;

  const response = await api.get("/memories", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const memories: Memory[] = response.data;

  if (memories.length === 0) {
    return <EmptyMemories />;
  }

  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((item) => {
        return (
          <div key={item.id} className="space-y-4">
            <time className="flex items-center gap-2 text-sm text-gray-50 -ml-8 before:h-px before:w-10 before:bg-gray-50 ">
              {dayjs(item.createdAt).format("D[ de ]MMM[, ]YYYY")}
            </time>
            <Image
              className="w-full aspect-video object-cover rounded-lg"
              src={item.coverUrl}
              width={592}
              height={280}
              alt="Imagem lista"
            />
            <p className="text-lg leading-relaxed text-gray-100">
              {item.excerpt}
            </p>
            <Link
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-gray-200"
              href={`/memories/${item.id}`}
            >
              Ler mais
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
