"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from "react";
import WindowSizeButton from '../components/handleClick'

export default function Projetos() {

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

    // useEffect(() => {
    //     console.log(size);
    // }, [size]);

    const card = {
        width: '100%',
        height: '200px'
    }

    return (
        <div
            // className="grid grid-rows-[20px_1fr_100px] grid-cols-[100px_1fr_20px] items-center justify-items-center
            //  min-h-screen p-8 pb-20 sm:pb-0 gap-2 sm:p-8 font-[family-name:var(--font-geist-sans)] text-foreground max-h-screen"
            // className={
            //     size === 'small' ? 'grid grid-rows-[80px_1fr_80px] grid-cols-[20px_1fr_20px] items-center justify-items-center ' +
            //         'min-h-screen p-8 gap-2 sm:p-8 font-[family-name:var(--font-geist-sans)] text-foreground max-h-screen' :
            //         size === 'medium' ? 'grid grid-rows-[20px_1fr_100px] grid-cols-[100px_1fr_20px] items-center justify-items-center' +
            //             'min-h-screen p-8 pb-20 gap-2 sm:p-8 font-[family-name:var(--font-geist-sans)] text-foreground max-h-screen' :
            //             'grid grid-rows-[20px_1fr_100px] grid-cols-[100px_1fr_20px] items-center justify-items-center' +
            //             'min-h-screen p-8 pb-20 gap-2 sm:p-8 font-[family-name:var(--font-geist-sans)] text-foreground max-h-screen'
            // }
            className={
                size === 'small' ? 'grid grid-rows-[20px_1fr_100px] grid-cols-[10px_1fr_10px] items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-8 font-[family-name:var(--font-geist-sans)] text-foreground max-h-screen' :
                    size === 'medium' ? 'grid grid-rows-[20px_1fr_100px] grid-cols-[100px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-8 font-[family-name:var(--font-geist-sans)] text-foreground' :
                        'grid grid-rows-[20px_1fr_100px] grid-cols-[100px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-8 font-[family-name:var(--font-geist-sans)] text-foreground'
            }
        >
            <header
                // className="md:row-start-2 sm:row-start-1 md:col-start-1 sm:col-start-2 flex flex-col items-start justify-center gap-6"
                className={
                    size === 'small' ? 'row-start-1 col-start-2 flex items-start justify-center gap-6' :
                        size === 'medium' ? 'row-start-2 col-start-1 flex flex-col items-start justify-center gap-6' :
                            'row-start-2 col-start-1 flex flex-col items-start justify-center gap-6'
                }
            >
                <nav>
                    <ul
                        // className="flex flex-col gap-6"
                        className={
                            size === 'small' ? 'flex gap-6' :
                                size === 'medium' ? 'flex flex-col gap-6' :
                                    'flex flex-col gap-6'
                        }
                    >
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

            <main
                // className="grid pl-20 pr-20 grid-flow-row sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 row-start-2 col-start-2 justify-center items-center overflow-y-scroll max-h-full w-full"
                className={
                    size === 'small' ? 'grid pt-6 grid-flow-row grid-cols-1 gap-8 row-start-2 col-start-2 justify-center items-center overflow-y-scroll max-h-full w-full' :
                        size === 'medium' ? 'grid pl-20 pr-20 grid-flow-row grid-cols-2 gap-8 row-start-2 col-start-2 justify-center items-center overflow-y-scroll max-h-full w-full' :
                            'grid pl-20 pr-20 grid-flow-row grid-cols-3 gap-8 row-start-2 col-start-2 justify-center items-center overflow-y-scroll max-h-full w-full'
                }
            >

                <div className="bg-red-600 self-center justify-self-center" style={card}>1</div>
                <div className="bg-red-600 self-center justify-self-center" style={card}>2</div>
                <div className="bg-red-600 self-center justify-self-center" style={card}>3</div>
                <div className="bg-red-600 self-center justify-self-center" style={card}>4</div>
                <div className="bg-red-600 self-center justify-self-center" style={card}>5</div>
                <div className="bg-red-600 self-center justify-self-center" style={card}>6</div>
                <div className="bg-red-600 self-center justify-self-center" style={card}>7</div>
                <div className="bg-red-600 self-center justify-self-center" style={card}>8</div>
                <div className="bg-red-600 self-center justify-self-center" style={card}>
                    <WindowSizeButton/>
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
    )
}