import Image from "next/image";
import { SocialIcon } from "react-social-icons";

interface TeamProfileProps {
    name: string;
    description: string;
    rol: string;
    urlImage: string;
    location: string;
    socialUrls: string[];
    className?: string;
}

function TeamProfile(props: TeamProfileProps) {
    return (
        <div
            className={`
            ${props.className ? props.className : ""}
            max-w-xs bg-sky-700 rounded-md shadow-md shadow-gray-600
            `}
        >
            <p
                className="p-1 bg-amber-500 absolute text-[9px] mt-2 ms-1 font-semibold rounded-md uppercase"
            >
                {props.rol}

            </p>
            <div className="w-full justify-center flex pt-2">
                <Image
                    src={props.urlImage}
                    width={100}
                    height={100}
                    alt={props.name}
                    className="rounded-full border-[1.25px] p-1 border-white"
                />
            </div>
            <h4
                className="text-center font-light text-white text-lg pt-1"
            >{props.name}</h4>
            <p
                className="uppercase text-white text-center text-xs font-semibold"
            >
                {props.location}
            </p>
            <p
                className="text-center text-white text-sm font-light pt-1 px-4"
            >
                {props.description}
            </p>
            <div
                className="flex py-4"
            >
                <span
                    className="w-full p-[0.25px] bg-white mx-6"
                />
            </div>
            <div
                className="w-full flex flex-wrap items-center p-4 justify-center"
            >
                {
                    props.socialUrls.map((url, index) => (
                        <SocialIcon
                            key={index}
                            url={url}
                            target="_blank"
                            style={{ height: 25, width: 25 }}
                            className="mx-1"
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default TeamProfile