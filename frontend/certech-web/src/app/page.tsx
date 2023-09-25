import CardInfo from "@/components/CardInfo";
import { Metadata } from "next";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export const metadata: Metadata = {
  title: 'Liwasi EdTech - Centro educativo rural',
  description: 'Centro educativo rural para la educación en Tecnologías de la información.',
}

export default function Home() {
  return (
    <main className="w-full flex-col pt-16 justify-center px-4">

      <div
        className="w-full flex  max-w-7xl"
      >
        <div
          className="w-full flex-col justify-center py-4"
        >
          <h1
            className="flex w-full text-5xl font-extralight text-left justify-items-center pb-2 text-sky-900"
          >
            Democratizamos el conocimiento en las zonas rurales: La educación en la comunidad
          </h1>
          <p
            className="w-full items-start justify-normal font-light text-base text-gray-500 pb-2"
          >
            Nuestra misión es democratizar la educación en las áreas rurales de Colombia, brindando a todos la oportunidad de formar parte de la próspera economía digital. En <strong className="text-sky-700">Liwasi EdTech</strong>, fomentamos el espíritu de resolución de problemas en comunidad y creamos soluciones digitales de alto impacto.
          </p>
          <div className="w-full items-center flex justify-center">
            <p className="font-light text-sky-900">Conócenos más en </p>
            <div>
              <SocialIcon
                url="https://github.com/liwasi-tech"
                target="_blank"
                style={{ height: 25, width: 25 }}
                className="mx-1"
              />
              <SocialIcon
                url="https://www.youtube.com/@LiwasiTech"
                target="_blank"
                style={{ height: 25, width: 25 }}
                className="mx-1"
              />
              <SocialIcon
                url="https://www.facebook.com/ladybataca"
                target="_blank"
                style={{ height: 25, width: 25 }}
                className="mx-1"
              />
              <SocialIcon
                url="https://www.instagram.com/ladybataca/"
                target="_blank"
                style={{ height: 25, width: 25 }}
                className="mx-1"
              />
            </div>
          </div>
        </div>
        <div
          className="md:flex justify-center hidden p-4"
        >
          <Image
            src="/images/home-community.png"
            alt="Liwasi EdTech"
            width={500}
            height={500}
          />
        </div>

      </div>
      <div className="w-full text-center justify-center font-light text-2xl text-sky-900">
        <h2>
          ¡Explora nuestras ofertas educativas y únete a nosotros en el viaje hacia un futuro más sostenible y lleno de oportunidades!
        </h2>
      </div>
      <div className="flex-wrap flex w-full justify-center">
        <CardInfo
          title="Aprendizaje de Habilidades Esenciales"
          content="Desde la agricultura sostenible hasta la alimentación saludable, te ayudamos a desarrollar habilidades prácticas para vivir en armonía con el medio ambiente y mejorar la calidad de vida."
          imageSrc="/images/card-1.jpg"
        />
        <CardInfo
          title="Aprendizaje en Bioconstrucción y Medio Ambiente"
          content="Aprende a construir espacios sostenibles utilizando materiales locales y respetuosos con la naturaleza, creando un entorno amigable para ti y tu comunidad."
          imageSrc="/images/card-2.jpeg"
        />
        <CardInfo
          title="Aprendizaje en Tecnologías de la Información"
          content="Sumérgete en el mundo digital con cursos sobre desarrollo de software, inteligencia artificial, marketing digital y más. Descubre cómo estas herramientas pueden resolver problemas y promover la innovación."
          imageSrc="/images/card-3.jpeg"
        />
        <CardInfo
          title="Aprendizaje en Electrónica y IoT"
          content="Comprende los principios de la electrónica y la energía solar mientras exploras oportunidades emocionantes en el Internet de las cosas (IoT) y la innovación tecnológica."
          imageSrc="/images/card-4.jpeg"
        />
        <CardInfo
          title="Talleres Comunitarios"
          content="Fomentamos el aprendizaje colaborativo a través de talleres prácticos que fortalecen la comunidad y promueven la evolución humana."
          imageSrc="/images/card-5.jpeg"
        />
      </div>

    </main>
  )
}
