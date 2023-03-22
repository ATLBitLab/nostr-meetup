import { SimplePool, Filter, nip19, Event } from "nostr-tools";
import dexieDb from '@/store/dexieDb'

export interface UserMetadata {
  name?: string
  display_name?: string
  picture?: string
  about?: string
  website?: string
  banner?: string
  lud06?: string
  lud16?: string
  nip05?: string
}

export type UserMetadataStore = UserMetadata & {
  pubkey: string
  npub: string
  created_at: number
}

const defaultProfileRelays = [
  "wss://nostr.terminus.money",
  "wss://brb.io",
  "wss://nostr.wine",
  "wss://relay.snort.social",
  "wss://gratten.duckdns.org/nostrrelay/relay2",
]

class NostrClient {
  pool = new SimplePool()
  profileQueue: Set<string> = new Set() // set of hex public keys to query
  paused: boolean = false

  addProfileToFetch(pubkey: string) {
    this.profileQueue.add(pubkey)
    this._fetchPubkeys()
  }

  removeProfileToFetch(pubkey: string) {
    this.profileQueue.delete(pubkey)
  }
  _fetchPubkeys() {
    if (this.paused || this.profileQueue.size === 0) return

    const filters: Filter[] = [
      {
        kinds: [0],
        authors: Array.from(this.profileQueue),
      },
    ]

    console.debug('subscribing for pubkeys: ', Array.from(this.profileQueue))

    // TODO: subscribe w/ pool
    const sub = this.pool.sub(defaultProfileRelays, filters)

    // How to handle this? Want the latest created_at profile event to be used.
    // Each relay can return a different/outdated event
    sub.on('event', async (event: Event) => {
      console.debug('got event', event)

      const metadataToStore: UserMetadataStore = {
        ...JSON.parse(event.content),
        pubkey: event.pubkey,
        npub: nip19.npubEncode(event.pubkey),
        created_at: event.created_at
      }

      const existingProfile = await dexieDb.users.get(metadataToStore.pubkey)

      if (!existingProfile || (metadataToStore.created_at > existingProfile.created_at)) {
        console.debug('storing profile metadata: ', metadataToStore)
        await dexieDb.users.put(metadataToStore)
      }
    })


    this.profileQueue.forEach(pubkey => this.profileQueue.delete(pubkey))

    // limit amount of subs to one per 500ms
    this.paused = true
    setTimeout(() => {
      this.paused = false

      // call it again in case new keys came in...
      this._fetchPubkeys()
    }, 500)
  }

}

export const nostrClient = new NostrClient()
