import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Quienes somos | Liwasi EdTech',
  description: 'Somos un centro de estudio rural enfocado en la educación en tecnología',
}

function About() {
  return (
    <main
    className="pt-16"
    >
      Acerca de nosotros
    </main>
  )
}

export default About