"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between items-center">
      <h1 className="font-bold text-xl">Sonora</h1>
      {session ? (
        <div className="flex items-center gap-4">
          <span>Hello, {session.user?.name}</span>
          <button onClick={() => signOut()} className="px-4 py-2 bg-red-600 rounded-lg">
            Logout
          </button>
        </div>
      ) : (
        <button onClick={() => signIn("spotify")} className="px-4 py-2 bg-green-600 rounded-lg">
          Login with Spotify
        </button>
      )}
    </nav>
  );
}
