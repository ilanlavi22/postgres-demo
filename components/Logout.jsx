"use client";
import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <button
      onClick={() => signOut()}
      className="border border-black text-black px-4 py-3 rounded-md font-bold text-sm"
    >
      Sign Out
    </button>
  );
}
