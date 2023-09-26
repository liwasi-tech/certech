"use client"
import Link from "next/link"
import GeneralButton from "./GeneralButton"

function LoginForm() {
    function handleSubmit() {

    }
    return (
        <div
            className="w-full h-screen z-10 flex items-center justify-center"
        >
            <div
                className="w-full shadow-md rounded-md shadow-gray-400 max-w-xs"
            >
                <form onSubmit={handleSubmit}
                    className="w-full px-4  mt-1 "
                >
                    <p
                        className="w-full font-light text-sky-700 text-4xl"
                    >
                        Liwasi EdTech
                    </p>
                    <input
                        type="email"
                        placeholder="Ingresa tu correo electrónico"
                        className="w-full border-[1.5px] border-sky-700 text-sky-700 bg-white font-normal px-2 py-1 mt-2 rounded-md" />
                    <input
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        className="w-full border-[1.5px] border-sky-700 text-sky-700 bg-white font-normal px-2 py-1 mt-2 rounded-md" />
                    <div className="w-full flex items-end justify-end pt-2">
                        <GeneralButton
                            text="Iniciar sesión"
                        />
                    </div>
                </form>
                <span
                    className=" flex w-full p-[0.25px] bg-gray-200"
                />
                <Link
                    href="/reset-password"
                    className="flex w-full justify-center"
                >
                    <p
                        className="text-sky-700 font-light text-xs py-2"
                    >
                        ¿Olvidaste tu contraseña?
                    </p>
                </Link>
            </div>

        </div>
    )
}

export default LoginForm