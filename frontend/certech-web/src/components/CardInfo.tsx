import Image from "next/image"

interface CardInfoProps {
    title: string;
    content: string;
    imageSrc?: string;
}

const defaultImage = "/images/card1-pic.jpg"

function CardInfo(props: CardInfoProps) {
    return (
        <div
            className="max-w-xs flex-col relative shadow-md border-gray-200 border rounded-md m-2"
        >
            <Image
                src={props.imageSrc ? props.imageSrc : defaultImage}
                alt="Card Information Image"
                width={320}
                height={100}
                className="rounded-t-sm"
            />
            <h3
            className="font-light items-start text-base px-1 text-sky-900"
            >
                {props.title}
            </h3>
            <p
                className="text-xs px-1 flex w-full text-left text-gray-500 pb-4"
            >
                {props.content}
            </p>
        </div>
    )
}

export default CardInfo