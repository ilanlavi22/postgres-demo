import Link from "next/link";
import Image from "next/image";
import ThemeButton from "./ThemeButton";
import { SiNextdotjs } from "react-icons/si";
import Logout from "./Logout";
//import { signOut, useSession } from "next-auth/react";

export default function Header({ session }) {
  return (
    <header className="w-full fixed top-0 left-0 border-gray-300/80 border-b-[1px] bg-gray-100">
      <div className="flex max-w-7xl justify-between items-center mx-auto p-6">
        <Link href="/">
          <SiNextdotjs className="text-5xl" title="Blog Demo" />
        </Link>

        <nav>
          {session ? (
            <div className="flex justify-center content-center items-center gap-6">
              <ThemeButton />
              <Link
                href="/posts/create"
                className="bg-black border border-transparent text-white px-4 py-3 rounded-md font-bold text-sm"
              >
                New Post
              </Link>
              <Logout />
              <Link href="/profile" className="rounded-full">
                <Image
                  src={session?.user?.image}
                  width={48}
                  height={48}
                  className="rounded-full"
                  alt={session?.user?.name || "user"}
                />
              </Link>
            </div>
          ) : (
            <Link
              href="/signin"
              className="bg-black text-white px-4 py-3 rounded-md font-bold text-sm"
            >
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
