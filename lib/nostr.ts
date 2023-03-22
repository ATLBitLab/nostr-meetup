import { SimplePool, Filter, nip19, Event } from "nostr-tools";

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
  pubkey?: string
  npub?: string
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
    sub.on('event', event => {
      console.debug('event', event)

      const metadataToStore: UserMetadataStore = {
        ...JSON.parse(event.content),
        pubkey: event.pubkey,
        npub: nip19.npubEncode(event.pubkey),
      }

      // TODO: insert into store or db
      console.debug('storing profile metadata: ', metadataToStore)
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
