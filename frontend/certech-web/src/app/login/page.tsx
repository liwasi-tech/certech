import LoginForm from "@/components/LoginForm"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Inicia sesión | Liwasi EdTech',
  description: 'Página de inicio de sesión a Liwasi EdTech',
}

function Login() {

  return (
    <main
      className=""
    >
      <LoginForm />

    </main>
  )
}

export default Login