export async function fetchPlaylistsByMood(token: string, mood: string) {
  const res = await fetch(
    `https://api.spotify.com/v1/search?q=${mood}&type=playlist&limit=8`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch playlists from Spotify");
  }

  const data = await res.json();
  return data.playlists.items;
}
