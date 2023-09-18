import FullFeature from "@/components/FullFeature";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Liwasi EdTech - Centro educativo rural',
  description: 'Centro educativo rural para la educación en Tecnologías de la información.',
}

export default function Home() {
  return (
    <main className="w-full px-4 md:px-0 pt-16 flex relative">
      <FullFeature />
    </main>
  )
}
