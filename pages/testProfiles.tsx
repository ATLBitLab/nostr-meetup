import useProfile from "@/hooks/useProfile"
import { nip19 } from "nostr-tools"

// profiles from nostr.directory
const pubkeys = [
  "32e1827635450ebb3c5a7d12c1f8e7b2b514439ac10a67eef3d9fd9c5c68e245",
  "82341f882b6eabcd2ba7f1ef90aad961cf074af15b9ef44a09f9d2a8fbfbe6a2",
  "00000000827ffaa94bfea288c3dfce4422c794fbb96625b6b31e9049f729d700",
  "04c915daefee38317fa734444acee390a8269fe5810b2241e5e6dd343dfbecc9",
  "6e468422dfb74a5738702a8823b9b28168abab8655faacb6853cd0ee15deee93",
  "1577e4599dd10c863498fe3c20bd82aafaf829a595ce83c5cf8ac3463531b09b",
  "3bf0c63fcb93463407af97a5e5ee64fa883d107ef9e558472c4eb9aaaefa459d",
  "3f770d65d3a764a9c5cb503ae123e62ec7598ad035d836e2a810f3877a745b24",
  "7fa56f5d6962ab1e3cd424e758c3002b8665f7b0d8dcee9fe9e288d7751ac194",
  "84dee6e676e5bb67b4ad4e042cf70cbd8681155db535942fcc6a0533858a7240",
  "f8e6c64342f1e052480630e27e1016dce35fc3a614e60434fef4aa2503328ca9",
  "85080d3bad70ccdcd7f74c29a44f55bb85cbcd3dd0cbb957da1d215bdb931204",
  "5b0183ab6c3e322bf4d41c6b3aef98562a144847b7499543727c5539a114563e",
  "c48e29f04b482cc01ca1f9ef8c86ef8318c059e0e9353235162f080f26e14c11",
  "bf2376e17ba4ec269d10fcc996a4746b451152be9031fa48e74553dde5526bce",
  "c43bbb58e2e6bc2f9455758257f6ba5329107bd4e8274068c2936c69d9980b7d",
  "d307643547703537dfdef811c3dea96f1f9e84c8249e200353425924a9908cf8",
  "460c25e682fda7832b52d1f22d3d22b3176d972f60dcdc3212ed8c92ef85065c",
  "803a613997a26e8714116f99aa1f98e8589cb6116e1aaa1fc9c389984fcd9bb8",
  "c49d52a573366792b9a6e4851587c28042fb24fa5625c6d67b8c95c8751aca15",
  "92de68b21302fa2137b1cbba7259b8ba967b535a05c6d2b0847d9f35ff3cf56a",
  "eab0e756d32b80bcd464f3d844b8040303075a13eabc3599a762c9ac7ab91f4f",
  "c4eabae1be3cf657bc1855ee05e69de9f059cb7a059227168b80b89761cbc4e0",
  "f728d9e6e7048358e70930f5ca64b097770d989ccd86854fe618eda9c8a38106",
]

const Profile = ({pubkey}:{pubkey: string}) => {
  const [profile, isLoading] = useProfile(pubkey)
  return (
    <div className="flex flex-col">
      {/* Image */}
      {profile?.picture ? (
          <img src={profile.picture} className="w-8 h-8 rounded-[50%]" />
      ) : (
          <div className="w-8 h-8 rounded-[50%] bg-gray-700" />
      )}

      {/* Name */}
      {!isLoading && (
        <p>
          {profile?.name
            ? profile.name
            : nip19.npubEncode(pubkey).slice(0, 12)}
        </p>
      )}
    </div>
  )
}

export default function Test() {
  return (
    <div className="grid grid-cols-12">
      {pubkeys.map(pk => {
        return <Profile pubkey={pk} />
      })}
    </div>
  )
}