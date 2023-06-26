import Image from 'next/image';

interface HeaderProps {
  h1: string;
}

export default function Header({ h1 }: HeaderProps) {
  return (
    <header className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <h1 className="text-center mb-10 text-lg lg:mb-0">{h1}</h1>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none hover:animate-pulse">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://github.com/Ahljenn/metabolite"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/github.png"
            alt="Github Logo"
            draggable="false"
            className="dark:invert"
            width={20}
            height={20}
            priority
          />
          Contribute
        </a>
      </div>
    </header>
  );
}
