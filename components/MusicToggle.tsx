// components/MusicToggle.tsx
"use client"; // Enable client-side functionality

import { useState, useRef } from "react";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <audio ref={audioRef} loop src="/background-music.mp3" />
      <button
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 p-2 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition"
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
    </div>
  );
}
