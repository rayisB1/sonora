"use client";

import MoodButton from "@/components/MoodButton";

export default function MoodPage() {
  const moods = [
    { mood: "Happy", icon: "😊" },
    { mood: "Sad", icon: "😢" },
    { mood: "Chill", icon: "😎" },
    { mood: "Focus", icon: "🎯" },
  ];

  const handleMoodClick = (mood: string) => {
    console.log("Selected mood:", mood);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      <h1 className="text-5xl mb-12 text-gray-800 drop-shadow-lg tracking-wide">
      Select your mood 🎶
      </h1>
      <div className="flex flex-wrap justify-center max-w-3xl">
        {moods.map(({ mood, icon }) => (
          <MoodButton
            key={mood}
            mood={mood}
            icon={icon}
            onClick={() => handleMoodClick(mood)}
          />
        ))}
      </div>
    </main>
  );
}
