"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-red-200 p-6 text-center">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-6 drop-shadow-lg">
        Welcome to Sonora 🎶
      </h1>
      <p className="text-lg text-gray-700 mb-10 max-w-2xl">
        Discover playlists that match your mood. Connect your Spotify account and
        let Sonora do the magic ✨
      </p>
      <button
        onClick={() => router.push("/mood")}
        className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-semibold shadow-lg hover:scale-110 transition transform duration-200"
      >
        Get Started
      </button>
    </main>
  );
}
