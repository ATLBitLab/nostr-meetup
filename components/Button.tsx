import { ReactNode } from "react"
import Link from "next/link"

type ButtonProps = {
    onClick?: () => void,
    children: ReactNode,
    format?: 'primary' | 'secondary',
    href?: string
}

export default function Button(props:ButtonProps){
    let className = "border rounded  px-2 py-1 w-fit"
    if(props.format === 'secondary') className += " text-purp border-2 border-purp bg-white"
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