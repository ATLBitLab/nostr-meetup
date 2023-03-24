import { ReactNode } from "react"
import Link from "next/link"

type ButtonProps = {
    onClick?: () => void,
    children: ReactNode,
    format?: 'primary' | 'secondary' | 'free',
    href?: string
}

export default function Button(props:ButtonProps){
    let className = "border rounded-lg  px-4 py-2 w-fit text-2xl font-light"
    if(props.format === 'secondary') className += " text-purp border-2 border-purp bg-white"
    else if(props.format === 'free') className += " text-purp border-0"
    else className += " text-white bg-purp"

    if(!props.href) {
        return(
            <>
                <button
                    className={className}
                    onClick={props.onClick}
                >
                    {props.children}
                </button>
            </>
        )
    }
    else {
        return(
            <>
                <Link
                    className={className}
                    href={props.href}
                >
                    {props.children}
                </Link>
            </>
        )
    }
}