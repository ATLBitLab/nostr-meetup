import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useNostr from "~/hooks/useNostr";
import ClickAwayListener from "react-click-away-listener";

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
    <div className="flex justify-between py-2 px-4 border border-b">
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

          <ClickAwayListener onClickAway={() => setOpenAccountMenu(false)}>
            <div id="dropdown" className="">
              <div
                className="rounded-[50%] bg-gray-400 h-8 w-8 mr-2"
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
                  <Link href="/demo" onClick={() => setOpenAccountMenu(false)}>
                    <p>Demo</p>
                  </Link>
                </li>
                <li>
                  <Link href="/" onClick={handleLogout}>
                    <p>Logout</p>
                  </Link>
                </li>
              </ul>
            </div>
          </ClickAwayListener>
        </div>
      )}
    </div>
  );
};
export default Navbar;
