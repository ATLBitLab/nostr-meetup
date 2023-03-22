import { useEffect } from "react"
import { nostrClient } from "@/lib/nostr"
import dexieDb from "@/store/dexieDb"
import { useLiveQuery } from 'dexie-react-hooks'

export interface UserMetadata {
  name?: string
  pubkey?: string
  npub?: string
  display_name?: string
  picture?: string
  about?: string
  website?: string
  banner?: string
  lud06?: string
  lud16?: string
  nip05?: string
}

// TODO: need global store of queue, profiles

export default function useProfile(pubkey: string | null) {
  const profile = useLiveQuery(async () => {
    if (!pubkey) return undefined

    console.debug('useLiveQuery: ', pubkey)
    const ret = await dexieDb.users.get(pubkey)
    console.debug('live query res: ', ret)
    return ret
  }, [pubkey])

  useEffect(() => {
    if (!pubkey) return

    nostrClient.addProfileToFetch(pubkey)

    return () => {
      nostrClient.removeProfileToFetch(pubkey)
    }
  }, [pubkey])
 
  return profile
}