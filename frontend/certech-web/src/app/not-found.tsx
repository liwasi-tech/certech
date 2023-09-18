import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Error 404 | Liwasi Tech',
  description: 'Error 4040. Página no encontrada',
}

function NotFound() {
  return (
    <main
      className="w-full h-screen bg-sky-700 inline-block"
    >
      <div
        className="mt-24 justify-center w-full items-center"
      >
        <Image
          src="/images/liwasi-menu-logo.png"
          alt="Logo Liwasi Tech"
          height={180}
          width={180}
          className="mx-auto"
        />
        <p
          className="text-white text-[90px] md:text-[110px] text-center"
        >
          404
        </p>
        <p
          className="w-full px-7 text-center text-white font-light"
        >
          No hemos encontrado la página que buscas. Fíjate si la URL está bien escrita. En caso contrario, te recomendamos volver a la página principal.
        </p>
        <div
          className="text-center"
        >
          <Link
            href="/"
          >
            <button
              className="rounded-full text-sky-700 mx-auto bg-white text-center mt-1 px-2"
            >
              Ir al inicio
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound