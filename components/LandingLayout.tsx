import Head from 'next/head'
import Link from "next/link";
import React from "react";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface LandingLayoutProps {
    title?: string,
    description?: string,
    children: React.ReactNode,
}

export default function LandingLayout(props:LandingLayoutProps) {
    const defaultDescription = "Find meetup groups and events"

    return(
        <>
            <Head>
                <title>{props.title ? props.title + " | " : ""}Catherd</title>
                <meta name="description" content={props.description || defaultDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <header>
                    <Link href={'/'}>Nostr Meetup</Link>
                    <nav>
                        <ul>
                            <li>
                                <Link href={'/feed'}>Feed</Link>
                            </li>
                            <li>
                                <Link href={'/signup'}>Sign Up</Link>
                            </li>
                            <li>
                                <Link href={'/login'}>Login In</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    {props.children}
                </main>
            </div>
        </>
    )
}