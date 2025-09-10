import { ReactNode } from "react";

interface MoodButtonProps {
  mood: string;
  icon: ReactNode;
  onClick: () => void;
}

export default function MoodButton({ mood, icon, onClick }: MoodButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center w-32 h-32 m-4 rounded-2xl bg-white shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-200"
    >
      <div className="text-4xl mb-2">{icon}</div>
      <span className="text-lg font-semibold text-gray-700">{mood}</span>
    </button>
  );
}
