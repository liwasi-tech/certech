"use client";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

const cpmClassName = {
  navbar: ""
}


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="w-full bg-blue-800 px-5 text-white">
      <div className="flex justify-between md:py-5 md:flex md:justify-around md:align-middle" >

        {/* Logo */}
        <div className="flex items-center justify-center md:jus">
          <Image className="rounded-full" src="/images/liwasi_logo.png" width={50} height={50} alt="Logo Liwasi" />
        </div>
        {/* Mobile */}
        <div className="md:hidden py-8">
          <button className="py-3 rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {
              menuOpen ?
                <Image src="/images/menu_close.png" width={30} height={30} alt="Close menu" />
                :
                <Image src="/images/menu_open.png" width={30} height={30} alt="Open menu" />
            }
          </button>
        </div>
      </div>
      <div className={`md:block ${menuOpen ? 'block' : 'hidden'}`}>
        <ul className="md:h-auto md:flex cursor-pointer mt-8 h-screen">
          <Link
            href="/"
            onClick={() => {setMenuOpen(false)}}
          >
            <li className="text-xl px-6 text-center py-5 hover:bg-white md:hover:bg-transparent hover:text-black">Inicio</li>
          </Link>
          <Link
            href="/about"
            onClick={() => {setMenuOpen(false)}}
          >
            <li className="text-xl px-6 text-center py-5 hover:bg-white md:hover:bg-transparent hover:text-black">Acerca de nosotros</li>
          </Link>
          <Link
            href="/register"
            onClick={() => {setMenuOpen(false)}}
          >
            <li className="text-xl px-6 text-center py-5 hover:bg-white md:hover:bg-transparent hover:text-black">Registrarse</li>
          </Link>
        </ul>
      </div>



    </nav>
  )
}

export default Navbar