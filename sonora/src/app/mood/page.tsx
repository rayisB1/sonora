"use client";

import MoodButton from "@/components/MoodButton";
import { useRouter } from "next/navigation";

export default function MoodPage() {
  const router = useRouter();
  const moods = ["Happy", "Sad", "Chill", "Focus"];

  const handleMoodClick = (mood: string) => {
    router.push(`/playlists?mood=${mood.toLowerCase()}`);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      <h1 className="text-4xl font-extrabold mb-10 text-gray-800 drop-shadow-md">
        Select your mood 🎶
      </h1>
      <div className="flex flex-wrap justify-center max-w-3xl">
        {moods.map((mood) => (
          <MoodButton
            key={mood}
            mood={mood}
            onClick={() => handleMoodClick(mood)}
          />
        ))}
      </div>
    </main>
  );
}
