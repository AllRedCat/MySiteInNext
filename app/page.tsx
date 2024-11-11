"use client"

import Image from "next/image";
import Link from "next/link";
import React, {useState, useEffect} from "react";

const fotoStyle = {
    borderRadius: "50%"
}

export default function Home() {

    const [size, setSize] = useState('large');

    useEffect(() => {
        function responsive() {
            if (window.innerWidth <= 640) {
                setSize('small');
            } else if (window.innerWidth > 640 && window.innerWidth < 1024) {
                setSize('medium');
            } else {
                setSize('large');
            }
        }

        window.addEventListener("resize", responsive);

        responsive();

        return () => window.removeEventListener("resize", responsive);
    }, []);

    return (
        <div
            // className="grid grid-rows-[20px_1fr_100px] grid-cols-[100px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-8 font-[family-name:var(--font-geist-sans)] text-foreground"
            className={
                size === 'small' ? 'grid grid-rows-[20px_1fr_100px] grid-cols-[10px_1fr_10px] items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-8 font-[family-name:var(--font-geist-sans)] text-foreground' :
                    size === 'medium' ? 'grid grid-rows-[20px_1fr_100px] grid-cols-[100px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-8 font-[family-name:var(--font-geist-sans)] text-foreground' :
                        'grid grid-rows-[20px_1fr_100px] grid-cols-[100px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-8 font-[family-name:var(--font-geist-sans)] text-foreground'
            }
        >
            <header
                className={
                    size === 'small' ? 'row-start-1 col-start-2 flex items-start justify-center gap-6' :
                        size === 'medium' ? 'row-start-2 col-start-1 flex flex-col items-start justify-center gap-6' :
                            'row-start-2 col-start-1 flex flex-col items-start justify-center gap-6'
                }
            >
                <nav>
                    <ul className={
                        size === 'small' ? 'flex gap-6' :
                            size === 'medium' ? 'flex flex-col gap-6' :
                                'flex flex-col gap-6'
                    }>
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

            <main className="flex flex-col gap-8 row-start-2 col-start-2 justify-center items-center">

                <div className="flex flex-col justify-center items-center w-full">
                    <Image
                        src="/foto.jpg"
                        alt="Next.js logo"
                        width={180}
                        height={38}
                        style={fotoStyle}
                        priority
                    />
                </div>
                <div className="flex flex-col w-3/4">
                    Desenvolvedor Full-Stack e Web Designer, apaixonado por tecnologia e inovação. <br></br>
                    Solicite um orçamento e veja como posso transformar sua ideia em um projeto de sucesso
                </div>

                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <a
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                        href="/projetos"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Veja meus projetos
                    </a>
                    <a
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                        href="/contato"
                        rel="noopener noreferrer"
                    >
                        Entre em contato
                    </a>
                </div>

            </main>

            <footer className="row-start-3 col-start-2 flex gap-6 flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://github.com/AllRedCat"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        className="dark:invert"
                        src="/github.png"
                        alt="File icon"
                        width={30}
                        height={30}
                    />
                    GitHub
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://www.linkedin.com/in/gabriel-genaro-433a2223a/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        className="dark:invert"
                        src="/linkedin.png"
                        alt="Window icon"
                        width={30}
                        height={30}
                    />
                    Linkedin
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://www.instagram.com/gabrielfariadev/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        className="dark:invert"
                        src="/instagram.png"
                        alt="Globe icon"
                        width={30}
                        height={30}
                    />
                    Instagram
                    {/* Go to nextjs.org → */}
                </a>
            </footer>
        </div>
    );
}
