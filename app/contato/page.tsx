import Image from "next/image";
import Link from "next/link";

const fotoStyle = {
    borderRadius: "50%"
}

export default function Contato() {
    return (
        <div className="grid grid-rows-[20px_1fr_100px] grid-cols-[100px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-8 font-[family-name:var(--font-geist-sans)] text-foreground">
        <header className="row-start-2 col-start-1 flex flex-col items-start justify-center gap-6">
          <nav>
            <ul className="flex flex-col gap-6">
              <li>
                <Link href="/"
                  className="flex items-center hover:underline hover:underline-offset-4"
                  rel="noopener noreferrer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center hover:underline hover:underline-offset-4"
                  href="/projetos"
                  rel="noopener noreferrer"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  // href="https://github.com/vercel/next.js/tree/canary/examples"
                  href="/contato"
                  rel="noopener noreferrer"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="/sobre"
                  rel="noopener noreferrer"
                >
                  Sobre mim
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        
        <main className="flex flex-col gap-8 row-start-2 col-start-2 items-center sm:items-start">
          <div>
              Contato
          </div>
        </main>

        <footer className="row-start-3 col-start-2 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    )
}