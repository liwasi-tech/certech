"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <header
            className="w-full bg-sky-700 text-white fixed left-0 z-[900]"
        >
            <nav
                className="max-w-[1366px] mx-auto h-[91px] flex justify-between items-center px-7 py-4"
            >
                <Link
                    href="/"
                    passHref
                >
                    <p
                        className='font-bold text-2xl lg:text-xl lx:text-3xl'
                    >
                        Liwasi EdTech
                    </p>
                </Link>
                <ul
                    className="hidden md:flex uppercase font-semibold text-[14px] xl:[16px]"
                >
                    <li
                        className="mr-4 hover:text-white"
                    >
                        <Link href="/">Inicio</Link>
                    </li>
                    <li
                        className="mr-4 hover:text-white"
                    >
                        <Link href="/signup">Regístrate</Link>
                    </li>
                    <li
                        className="mr-4 hover:text-white"
                    >
                        <Link href="/about">Quienes somos</Link>
                    </li>
                </ul>
                <div
                    className="block md:hidden z-[10] text-white"
                    onClick={handleMenu}
                >
                    {menuOpen ?
                        <AiOutlineClose size={30} />
                        :
                        <AiOutlineMenu size={30} />
                    }
                </div>
                <div
                    className={
                        menuOpen ?
                            "md:hidden absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center w-full h-screen bg-sky-700 text-center ease-in duration-300"
                            :
                            "md:hidden absolute top-0 bottom-0 right-0 left-[-100%] flex justify-center items-center w-full h-screen text-center ease-in duration-300"
                    }
                >
                    <div
                        className="w-full text-blue-500 text-xl"
                    >
                        <div
                            className="w-full mb-5 pb-5 flex justify-center items-center mx-auto"
                        >
                            <Link
                                href="/"
                                passHref
                                onClick={handleMenu}
                            >
                                <Image
                                    src="/images/liwasi-menu-logo.png"
                                    alt="Logo liwasi"
                                    width={200}
                                    height={200}
                                />
                            </Link>
                        </div>
                        <ul
                            className="px-4 uppercase font-semibold cursor-pointer text-white"
                        >
                            <li
                                className="py-4 hover:text-sky-50"
                                onClick={handleMenu}
                            >
                                <Link href="/">Inicio</Link>
                            </li>
                            <li
                                className="py-4 hover:text-sky-50"
                                onClick={handleMenu}
                            >
                                <Link href="/signup">Regístrate</Link>
                            </li>
                            <li
                                className="py-4 hover:text-sky-50"
                                onClick={handleMenu}
                            >
                                <Link href="/about">Quienes somos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Navbar