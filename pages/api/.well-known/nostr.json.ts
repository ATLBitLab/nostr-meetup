import type { NextApiRequest, NextApiResponse } from 'next'

const verifiedDB = {
  chad: {
    pubkey: "e9038e10916d910869db66f3c9a1f41535967308b47ce3136c98f1a6a22a6150",
    relays: ["wss://relay.terminus.money"]
  },
  test1: {
    pubkey: "5b6bfd0b8b1b2107e247d1750519ef30c142d5e6da8503cd28293ee22446c43b",
    relays: []
  }

}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let nip05 = {
    names: {},
    relays: {}
  }

  if (typeof req.query.name == "string") {
    const pubkey = verifiedDB[req.query.name]?.pubkey 
    if (!pubkey) return res.status(200).json(nip05)

    nip05.names[req.query.name] = pubkey

    const relays = verifiedDB[req.query.name].relays
    if (relays.length > 0) {
      nip05.relays[pubkey] = verifiedDB[req.query.name].relays
    }
  }

  res.status(200).json(nip05)
}