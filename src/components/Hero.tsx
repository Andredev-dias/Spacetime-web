import Link from "next/link";
import logo from "../assets/logo.svg";
import Image from "next/image";

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={logo} alt="Logo spacetime" />
      <div className="max-w-[420px] space-y-1">
        <h1 className=" text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Sua cápsula do tempo Colecione momentos marcantes da sua jornada e
          compartilhe (se quiser) com o mundo!
        </p>
      </div>
      <Link
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-gray-950 uppercase leading-none text-sm hover:bg-green-400"
        href="/memories/new"
      >
        CADASTRAR LEMBRANÇA
      </Link>
    </div>
  );
}
