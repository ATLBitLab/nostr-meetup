import Image from "next/image"
import Button from "./Button"
import Link from "next/link"

type GroupCardProps = {
    imageSrc: string,
    name: string,
    desc: string,
    id: string,
    member?: boolean
}

export default function GroupCard(props:GroupCardProps){
    return(
        <>
            <div className="max-w-md border border-gray-300 rounded-xl overflow-hidden">
                <Link href={'/group/' + props.id}>
                    <Image src={props.imageSrc} alt="" width="832" height="480" />
                </Link>
                
                <div className="p-4 flex flex-col gap-2">
                    <h2 className="text-2xl font-display">
                        <Link href={'/group/' + props.id}>{props.name}</Link>
                    </h2>
                    <p>{props.desc}</p>
                    {!props.member ?
                    <Button href={'/group/' + props.id}>
                        Join Group
                    </Button>
                    : ``}
                </div>
            </div>
        </>
    )
}