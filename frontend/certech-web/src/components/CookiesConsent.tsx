"use client"
import { hasCookie, setCookie } from "cookies-next"
import React from "react"
import GeneralButton from "./GeneralButton"
function CookiesConsent() {
    const [showConsent, setShowConsent] = React.useState(false)
    React.useEffect(() => {
        setShowConsent(!hasCookie("localConsent"))
    }, [])
    const acceptCookies = () => {
        setCookie("localConsent", "true", {})
        setShowConsent(false)
    }
    if (!showConsent) {
        return null
    }

    return (
        <div className="fixed inset-0 bg-sky-300 bg-opacity-70 z-[5000]">
            <div className="w-full fixed bottom-0 left-0 flex items-center justify-between px-4 py-5 text-black bg-amber-400">
                <span className="text-xs mr-16">
                    Esta aplicación web usa el almacenamiento de datos a través de Cookies de internet para mejorar la experiencia de usuario. Al usar esta aplicación; tú cómo usuario estás aceptando nuestra política de uso y privacidad.
                </span>
                <GeneralButton
                    text="Aceptar"
                    onClick={acceptCookies}
                />
            </div>
        </div>
    )
}

export default CookiesConsent