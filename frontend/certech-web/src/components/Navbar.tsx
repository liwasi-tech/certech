"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import GeneralButton from './GeneralButton'

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
                className="max-w-[1366px] mx-auto h-16 flex justify-between items-center px-4"
            >
                <div
                    className="flex"
                >
                    <Link
                        href="/"
                        className="flex"
                    >
                        <Image
                            src="/images/liwasi-menu-logo.png"
                            alt="Logo de Liwasi Tech"
                            width={48}
                            height={48}
                        />
                        <p
                            className="flex items-center ml-1 font-light text-lg md:text-xl"
                        >
                            EdTech
                        </p>
                    </Link>
                    <ul
                        className="hidden md:flex justify-around items-center ml-4 px-4 font-normal text-sky-200"
                    >
                        <li
                            className='hover:text-white px-1'
                        >
                            <Link
                                href="/"
                            >
                                Inicio
                            </Link>
                        </li>
                        <li
                            className='hover:text-white  px-1'
                        >
                            <Link
                                href="/about"
                            >
                                Quienes somos
                            </Link>
                        </li>
                        <li
                            className='hover:text-white px-1'
                        >
                            <Link
                                href="/signup"
                            >
                                Regístrate
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link
                    href="/login"
                >
                    <GeneralButton
                        className="hidden md:block"
                        text="Inicia sesión"
                    />
                </Link>
                {/* Menu open close icons */}
                <div
                    className="block md:hidden z-[10] p-2 text-white hover:text-sky-700 hover:rounded-full hover:bg-white hover:p-2"
                    onClick={handleMenu}
                >
                    {menuOpen ?
                        <AiOutlineClose size={20} />
                        :
                        <AiOutlineMenu size={20} />
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
                            className="w-full mb-5 pb-2 flex justify-center items-center mx-auto"
                        >
                            <Link
                                href="/"
                                passHref
                                onClick={handleMenu}
                            >
                                <Image
                                    src="/images/liwasi-menu-logo.png"
                                    alt="Logo liwasi"
                                    width={150}
                                    height={150}
                                />
                            </Link>
                        </div>
                        <ul
                            className="px-4 font-normal cursor-pointer text-white"
                        >
                            <li
                                className="py-3"
                                onClick={handleMenu}
                            >
                                <Link href="/login">Inicia sesión</Link>
                            </li>
                            <li
                                className="py-3"
                                onClick={handleMenu}
                            >
                                <Link href="/signup">Regístrate</Link>
                            </li>
                            <li
                                className="py-3"
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