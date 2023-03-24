import Head from 'next/head'
import AppLayout from '@/components/AppLayout'
import GroupCard from '@/components/GroupCard'

export default function Feed() {
    const dummyGroupData = [
        {
            name: "Group Name 1",
            desc: "Bitcoin ipsum dolor sit amet. Proof-of-work stacking sats halvening wallet full node, SHA-256 hash. Merkle Tree block reward mempool block reward timestamp server Satoshi Nakamoto outputs, nonce UTXO. SHA-256 difficulty sats hashrate wallet hash decentralized, UTXO Merkle Tree. Block reward double-spend problem Merkle Tree decentralized Satoshi Nakamoto wallet miner. Proof-of-work?",
            imgSrc: "/opt/group-abstract-1.jpg",
            id: 'abc123',
        },
        {
            name: "Group Name 2",
            desc: "Nonce, UTXO proof-of-work key pair, SHA-256, decentralized public key block reward. Key pair peer-to-peer outputs full node private key digital signature Bitcoin Improvement Proposal electronic cash. Stacking sats miner timestamp server soft fork nonce, timestamp server difficulty.",
            imgSrc: "/opt/group-abstract-2.jpg",
            id: 'abc123',
        },
        {
            name: "Group Name 3",
            desc: "Full node public key mempool blockchain address inputs key pair block reward. Decentralized electronic cash, bitcoin SHA-256 segwit, soft fork satoshis hashrate stacking sats! Consensus proof-of-work soft fork difficulty hash timestamp server full node. Private key, mempool blockchain address double-spend problem mempool, hash miner. Sats.",
            imgSrc: "/opt/group-abstract-3.jpg",
            id: 'abc123',
        },
        {
            name: "Group Name 4",
            desc: "Hash Satoshi Nakamoto proof-of-work key pair decentralized sats Satoshi Nakamoto hash. Consensus inputs satoshis whitepaper sats mempool proof-of-work hashrate. Proof-of-work Merkle Tree, UTXO, wallet cryptocurrency, halvening nonce consensus! Mempool decentralized, transaction full node, Bitcoin Improvement Proposal.",
            imgSrc: "/opt/group-abstract-4.jpg",
            id: 'abc123',
        },
        {
            name: "Group Name 1",
            desc: "Bitcoin ipsum dolor sit amet. Proof-of-work stacking sats halvening wallet full node, SHA-256 hash. Merkle Tree block reward mempool block reward timestamp server Satoshi Nakamoto outputs, nonce UTXO. SHA-256 difficulty sats hashrate wallet hash decentralized, UTXO Merkle Tree. Block reward double-spend problem Merkle Tree decentralized Satoshi Nakamoto wallet miner. Proof-of-work?",
            imgSrc: "/opt/group-abstract-1.jpg",
            id: 'abc123',
        },
        {
            name: "Group Name 2",
            desc: "Nonce, UTXO proof-of-work key pair, SHA-256, decentralized public key block reward. Key pair peer-to-peer outputs full node private key digital signature Bitcoin Improvement Proposal electronic cash. Stacking sats miner timestamp server soft fork nonce, timestamp server difficulty.",
            imgSrc: "/opt/group-abstract-2.jpg",
            id: 'abc123',
        },
        {
            name: "Group Name 3",
            desc: "Full node public key mempool blockchain address inputs key pair block reward. Decentralized electronic cash, bitcoin SHA-256 segwit, soft fork satoshis hashrate stacking sats! Consensus proof-of-work soft fork difficulty hash timestamp server full node. Private key, mempool blockchain address double-spend problem mempool, hash miner. Sats.",
            imgSrc: "/opt/group-abstract-3.jpg",
            id: 'abc123',
        },
        {
            name: "Group Name 4",
            desc: "Hash Satoshi Nakamoto proof-of-work key pair decentralized sats Satoshi Nakamoto hash. Consensus inputs satoshis whitepaper sats mempool proof-of-work hashrate. Proof-of-work Merkle Tree, UTXO, wallet cryptocurrency, halvening nonce consensus! Mempool decentralized, transaction full node, Bitcoin Improvement Proposal.",
            imgSrc: "/opt/group-abstract-4.jpg",
            id: 'abc123',
        },
    ]

    return (
        <>
            <AppLayout title="Feed" description="Latest events">
                <div className="max-w-6xl min-h-full mx-auto p-4 lg:p-16 lg:pt-16 flex flex-col gap-4">
                    <h1 className="text-4xl font-display">Groups</h1>
                    <div className="flex flex-row flex-wrap gap-8">
                        {dummyGroupData.map((group)=>(
                            <>
                                <GroupCard
                                    name={group.name}
                                    desc={group.desc}
                                    imageSrc={group.imgSrc}
                                    id={group.id}
                                />
                            </>
                        ))}
                    </div>
                </div>
            </AppLayout>
        </>
  )
}
