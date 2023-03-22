import Dexie, { Table } from 'dexie'

interface UserMetadata {
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

type UserMetadataStore = UserMetadata & {
  pubkey?: string
  npub?: string
  created_at: number
}

class DexieDB extends Dexie {
  users!: Table<UserMetadataStore>

  constructor() {
    super('DexieDB')
    //Writing this because there have been some issues on github where people index images or movies
    // without really understanding the purpose of indexing fields.
    // A rule of thumb: Are you going to put your property in a where(‘…’) clause?
    // If yes, index it, if not, dont. Large indexes will affect database performance and in
    // extreme cases make it unstable.
    this.version(1).stores({
      users: '++pubkey, name, npub, nip05', // Primary key and indexed props
    })
  }
}

export default new DexieDB()