import { Head } from "next/document";
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
    return(
        <>
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