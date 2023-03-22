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

export default function useProfile(pubkey: string | null): [UserMetadata | undefined, boolean] {
  const [profile, isLoading] = useLiveQuery(async () => {
    if (!pubkey) return [undefined, false]

    const ret = await dexieDb.users.get(pubkey)
    console.debug('live query res: ', ret)

    return [ret, false]
  }, 
    [pubkey],
    [undefined, true] // default result returned on initial render.
  )

  useEffect(() => {
    if (!pubkey) return

    nostrClient.addProfileToFetch(pubkey)

    return () => {
      nostrClient.removeProfileToFetch(pubkey)
    }
  }, [pubkey])
 
  return [profile, isLoading]
}