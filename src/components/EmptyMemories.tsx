export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center p-16">
      <p className="text-center leading-relaxed w-[360px]">
        Você ainda não registrou nenhuma lembrança, comece a{" "}
        <a
          href=""
          className="underline hover:text-purple-300 transition-colors"
        >
          criar agora!
        </a>{" "}
      </p>
    </div>
  );
}
