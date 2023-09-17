import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full py-4 px-7">
      <div className="mt-24 md:flex w-full justify-between">
        <Image
          src="/images/header-pic.jpg"
          width={500}
          height={100}
          alt="Centro de estudio rural"
        />
        <div className="w-full px-1 pt-4"
        >
          <h1
            className="text-2xl md:text-3xl justify-normal md:mt-3 mt-1"
          >
            Centro educativo rural para la educación en Tecnología
          </h1>
          <p
          className="text-base justify-normal md:mt-3 mt-1"
          >
            <strong>Liwasi EdTech es la alternativa rural para la educación en tecnología </strong>
            enfocada en el desarrollo de habilidades humanas para la democratización del conocimiento, <u>brindando acceso a herramientas que permitan la transformación digital de las comunidades rurales.</u>
          </p>

        </div>
      </div>
    </main>
  )
}
