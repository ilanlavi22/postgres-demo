"use client";

//import { useSession } from "next-auth/react";
import Link from "next/link";

export default function HeroLink({ session }) {
  //const { data: session } = useSession();

  return (
    <Link
      href={session ? "/posts/create" : "/signin"}
      className="mt-10 bg-black text-white px-5 py-3 rounded-md font-medium text-base"
    >
      Start Blogging
    </Link>
  );
}
