import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useNostr from "~/hooks/useNostr";

const Navbar = () => {
  const { pubkey, setPubkey } = useNostr();
  const router = useRouter();
  const [openAccountMenu, setOpenAccountMenu] = useState(false);

  const handleLogout = () => {
    setPubkey(null);
    setOpenAccountMenu(false);

    router.push("/");
  };

  return (
    <div className="flex justify-between py-2 px-4">
      <Link href="/">
        <p className="font-semibold text-2xl">catherd</p>
      </Link>

      {!pubkey && (
        <div className="flex gap-4 text-lg items-center">
          <Link href="/login">
            <p>Log in</p>
          </Link>
          <Link href="signup">
            <p>Sign up</p>
          </Link>
        </div>
      )}

      {pubkey && (
        <div className="flex gap-4 text-lg items-center">
          <p>Welcome, {pubkey.slice(0, 12)}</p>

          <div id="dropdown" className="">
            <div
              className="rounded-[50%] bg-gray-400 h-8 w-8"
              onClick={() => setOpenAccountMenu(!openAccountMenu)}
              id="temp profile button"
            />

            {/* Menu */}
            <ul
              className={`${
                openAccountMenu ? "flex flex-col absolute" : "hidden"
              }
                bg-gray-500 px-2 py-4 right-0 
              `}
            >
              <li>
                <Link href="/">
                  <p onClick={handleLogout}>Logout</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
