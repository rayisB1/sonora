"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchPlaylistsByMood } from "@/lib/spotify";

export default function PlaylistsPage() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const mood = searchParams.get("mood") || "happy";

  const [playlists, setPlaylists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (session?.accessToken) {
        const data = await fetchPlaylistsByMood(session.accessToken as string, mood);
        setPlaylists(data);
        setLoading(false);
      }
    }
    load();
  }, [session, mood]);

  if (loading) return <p className="p-6">Loading playlists...</p>;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Playlists for mood: {mood} 🎶
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {playlists
          .filter((pl) => pl !== null)
          .map((pl) => (
            <div
              key={pl.id}
              className="bg-white p-4 rounded-xl shadow hover:scale-105 transition"
            >
              {pl.images && pl.images.length > 0 ? (
                <img
                  src={pl.images[0].url}
                  alt={pl.name}
                  className="rounded-md mb-2"
                />
              ) : (
                <div className="w-full h-32 bg-gray-200 rounded-md mb-2 flex items-center justify-center text-gray-500">
                  No image
                </div>
              )}
              <p className="font-semibold">{pl.name}</p>
              <p className="text-sm text-gray-500">
                {pl.owner?.display_name ?? "Unknown"}
              </p>
            </div>
          ))}
      </div>
    </main>
  );
}
