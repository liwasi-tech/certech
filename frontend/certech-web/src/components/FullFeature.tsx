import Image from "next/image"

function FullFeature() {
    return (
            <Image
                src="/images/header-pic.jpg"
                height={512}
                width={512}
                alt="Centro de estudio rural"
            />
    )
}

export default FullFeature