import { getJWTUser } from "@/lib/auth";
import Image from "next/image";

export function Profile() {
  const { name, avatarUrl } = getJWTUser();

  return (
    <div className="flex items-center gap-3 text-left ">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt="Avatar"
        className="h-10 w-10 rounded-full"
      />

      <p className="text-sm leading-snug max-w-[140px]">
        {name}
        <a
          href="/api/auth/logout"
          className="block text-red-400 hover:text-red-300"
        >
          Sair
        </a>
      </p>
    </div>
  );
}
