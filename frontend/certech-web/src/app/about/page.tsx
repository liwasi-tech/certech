import TeamProfile from "@/components/TeamProfile"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Quienes somos | Liwasi EdTech',
  description: 'Somos un centro de estudio rural enfocado en la educación en tecnología',
}

function About() {
  return (
    <main
      className="pt-16 w-full flex items-center justify-center"
    >
      <div
        className="w-full max-w-4xl"
      >
        <h1
          className="flex justify-center font-thin text-[40px] md:text-[60px] text-sky-700"
        >
          Liwasi EdTech
        </h1>
        <div className="w-full flex items-center justify-center text-justify">
          <p
            className="px-4"
          >
            ¡Bienvenido! En Liwasi EdTech vas a encontrar tu puerta de entrada a un futuro digital. Nuestros centros de estudio son enfocados en las
            <strong className="text-sky-700"> zonas rurales de Colombia!</strong> En Liwasi EdTech, creemos firmemente que una comunidad con acceso a la educación es una comunidad en constante evolución. Nuestra misión es <u>democratizar la educación en las áreas rurales de Colombia</u>, brindando a todos la oportunidad de formar parte de la próspera economía digital. Aquí, fomentamos el espíritu de resolución de problemas en comunidad y creamos soluciones digitales de alto impacto. Únete a nosotros y sé parte del cambio.
          </p>
        </div>
        <h3
          className="px-4 pb-4 flex justify-start font-medium text-sky-700 mt-4"
        >Conoce a nuestro equipo</h3>
        <div className="flex flex-wrap justify-center w-full px-4">
          <TeamProfile
            name="Briggitte Castañeda"
            rol="Co-Founder"
            socialUrls={[
              "https://www.linkedin.com/in/ladybataca/",
              "https://github.com/ladyBataca",
              "https://www.instagram.com/ladybataca/"

            ]}
            description="Ingeniera Electrónica 👩🏾‍💻⚙️
            Cree en el poder de las pequeñas acciones para crecer en comunidad ✨"
            urlImage="https://avatars.githubusercontent.com/u/83377786?v=4"
            location="Maní, Casanare 🇨🇴"
            className="m-2"
          />
          <TeamProfile
            name="Braejan Arias"
            rol="Co-Founder"
            socialUrls={[
              "https://linkedin.com/in/braejan",
              "https://github.com/braejan",
            ]}
            description="Ingeniero de Software - 
            La democracia es hasta el momento; el mejor invento de nuestra especie para vivir en comunidad ✨"
            urlImage="https://avatars.githubusercontent.com/u/10325051?v=4"
            location="Bogotá, Bogotá D.C. 🇨🇴"
            className="m-2"
          />
        </div>
      </div>
    </main>
  )
}

export default About