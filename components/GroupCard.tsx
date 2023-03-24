import Image from "next/image"
import Button from "./Button"

type GroupCardProps = {
    imageSrc: string,
    name: string,
    desc: string
}

export default function GroupCard(props:GroupCardProps){
    return(
        <>
            <div className="max-w-md border border-gray-300 rounded-xl overflow-hidden">
                <Image src={props.imageSrc} alt="" width="832" height="480" />
                <div className="p-4 flex flex-col gap-2">
                    <h2 className="text-2xl font-display">{props.name}</h2>
                    <p>{props.desc}</p>
                    <Button>
                        Join Group
                    </Button>
                </div>
            </div>
        </>
    )
}