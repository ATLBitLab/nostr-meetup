import Button from "./Button";
import Image from "next/image";

type EventCardProps = {
    
}

export default function EventCard() {
    return(
        <>
            <div className="border border-gray-300 rounded-lg p-6 flex flex-row gap-8">
                <div className="w-1/3">
                    <Image src={'/opt/group-abstract-1.jpg'} alt="" width="832" height="480" className="w-full h-auto rounded-lg" />
                </div>
                <div className="w-2/3 flex flex-col gap-2">
                    <div>
                        <h3 className="text-2xl font-display">Event Title</h3>
                        <p className="text-xl font-bold font-display">Saturday, April 1, 2023 11:30am</p>
                        <p className="text-lg font-semibold font-display">Event Location</p>
                    </div>
                    <p>
                        Consensus cryptocurrency, hard fork nonce decentralized SHA-256, genesis block miner, blockchain! Pizza Bitcoin Improvement Proposal, halvening public key satoshis freefall together, bitcoin halvening. Transaction sats freefall together UTXO wallet consensus nonce Satoshi Nakamoto. Bitcoin Improvement Proposal blocksize soft fork, SHA-256, consensus full node pizza, sats. Difficulty, whitepaper.
                    </p>
                    <p className="text-xl">
                        121 going
                    </p>
                    <div className="flex flex-row gap-4">
                        <Button>Attend</Button>
                        <Button format="secondary">Learn More</Button>
                    </div>
                </div>
            </div>
        </>
    )
}