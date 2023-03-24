import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Comfortaa, Source_Sans_Pro } from "next/font/google";
import { Bars3Icon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { useProfile } from "nostr-react";
import { usePubkey } from "@/context/pubkey";
import { nip19 } from "nostr-tools";
import Button from "./Button";
import Router, { useRouter } from "next/router";

interface AppLayoutProps {
    title?: string;
    description?: string;
    children: React.ReactNode;
}

const menuItemsLoggedOut = [
    {
        name: "Feed",
        uri: "/me",
    },
    {
        name: "Log In",
        uri: "/login",
    },
    {
        name: "Sign Up",
        uri: "/signup",
    },
];

const menuItemsLoggedIn = [
    {
        name: "My Feed",
        uri: "/me",
    },
    {
        name: "All Groups",
        uri: "/groups",
    },
    {
        name: "Create New Group",
        uri: "/group/new",
    }
];

export default function AppLayout(props: AppLayoutProps) {
    const defaultDescription = "Find meetup groups and events";
    const [menuOpen, setMenuOpen] = React.useState(false);

    const PubkeyNavMenu = ({ pubkey }: { pubkey: string }) => {
        const { setPubkey } = usePubkey();
        // const { data: userData, isLoading } = useProfile({
        //     pubkey,
        // });
        const userData = null
    
        return (
            <>
                {menuItemsLoggedIn.map((menuItem, key) => (
                    <li key={key}>
                        <Link href={menuItem.uri}>
                            {menuItem.name}
                        </Link>
                    </li>
                ))}
    
                <li className="flex flex-row gap-2 items-center">
                    {!isLoading && (
                        userData?.name
                            ? userData.name
                            : nip19.npubEncode(pubkey).slice(0, 12)
                    )}
    
                    {userData?.picture ? (
                        <img src={userData.picture} className="w-8 h-8 rounded-[50%]" />
                    ) : (
                        <div className="w-8 h-8 rounded-[50%] bg-gray-700" />
                    )}
                </li>
                
                <li>
                    <Button onClick={() => {setPubkey(null); router.push('/')}} format="free">
                        <>
                            <span className="sr-only">Log Out</span>
                            <ArrowRightOnRectangleIcon className="w-6 h-6" />
                        </>
                    </Button>
                </li>
                
            </>
        );
    };
    
    const router = useRouter();

    const menuClickHandler = () => {
        setMenuOpen(!menuOpen);
    };

    const { pubkey, isLoading } = usePubkey();

    return (
        <>
            <Head>
                <title>{(props.title ? props.title + " | " : "") + "Catherd"}</title>
                <meta name="description" content={props.description || defaultDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&family=Source+Sans+Pro:wght@300;400;600&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <div className="h-full pt-20">
                <header className="min-h-[5rem] font-display flex flex-col p-4 justify-between items-center border border-gray-300 drop-shadow-md fixed top-0 left-0 w-full z-50 bg-white lg:flex-row">
                    <div className="flex flex-row justify-between w-full">
                        <Link href={"/"} className="text-4xl lowercase">
                            <span className="font-bold">Cat</span>
                            <span className="font-light">Herd</span>
                        </Link>

                        <button
                            onClick={menuClickHandler}
                            className="lg:hidden"
                        >
                            <span className="sr-only">Menu</span>
                            <Bars3Icon className="w-6 h-6" />
                        </button>
                    </div>

                    <nav
                        className={
                            !menuOpen
                                ? "hidden lg:block w-full justify-end"
                                : "w-full"
                        }
                    >
                        {!isLoading && (
                            <ul className="flex items-center text-center gap-4 lg:flex-row py-4 border-t mt-2 lg:border-0 lg:justify-end">
                                {pubkey ? (
                                    <PubkeyNavMenu pubkey={pubkey} />
                                ) : (
                                    <>
                                        {menuItemsLoggedOut.map((menuItem, key) => (
                                            <li key={key}>
                                                <Link href={menuItem.uri}>
                                                    {menuItem.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </>
                                )}
                            </ul>
                        )}
                    </nav>
                </header>
                <main className="h-full">{props.children}</main>
            </div>
        </>
    );
}
