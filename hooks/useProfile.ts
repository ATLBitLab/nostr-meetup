import { useEffect } from "react"
import { nostrClient } from "@/lib/nostr"

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
  useEffect(() => {
    if (!pubkey) return

    nostrClient.addProfileToFetch(pubkey)

    return () => {
      nostrClient.removeProfileToFetch(pubkey)
    }
  }, [pubkey])
 
  return null
}