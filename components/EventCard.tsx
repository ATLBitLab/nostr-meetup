import Button from "./Button";
import Image from "next/image";

type EventCardProps = {
    name: string,
    date: string,
    attendeeCount: number,
    location: string,
    desc: string,
    id: string,
    imgSrc: string,
}

export default function EventCard(props:EventCardProps) {
    return(
        <>
            <div className="border border-gray-300 rounded-lg p-6 flex flex-row gap-8">
                <div className="w-1/3">
                    <Image src={props.imgSrc} alt="" width="832" height="480" className="w-full h-auto rounded-lg" />
                </div>
                <div className="w-2/3 flex flex-col gap-2">
                    <div>
                        <h3 className="text-2xl font-display">{props.name}</h3>
                        <p className="text-xl font-bold font-display">{props.date}</p>
                        <p className="text-lg font-semibold font-display">{props.location}</p>
                    </div>
                    <p>{props.desc}</p>
                    <p className="text-xl">{props.attendeeCount} going</p>
                    <div className="flex flex-row gap-4">
                        <Button>Attend</Button>
                        <Button format="secondary" href={'/event/' + props.id}>Learn More</Button>
                    </div>
                </div>
            </div>
        </>
    )
}