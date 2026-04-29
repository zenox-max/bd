import { Heart, Camera } from "lucide-react";
import { useState } from "react";

const MEMORIES = [
  { caption: "The day I met you", emoji: "💕", gradient: "from-pink-300 via-rose-300 to-orange-200" },
  { caption: "Our first adventure", emoji: "🌅", gradient: "from-purple-300 via-pink-300 to-yellow-200" },
  { caption: "Lazy mornings", emoji: "☕", gradient: "from-amber-200 via-rose-200 to-pink-300" },
  { caption: "Dancing in the kitchen", emoji: "💃", gradient: "from-fuchsia-300 via-pink-300 to-rose-300" },
  { caption: "Late night talks", emoji: "🌙", gradient: "from-indigo-300 via-purple-300 to-pink-300" },
  { caption: "Forever begins now", emoji: "💍", gradient: "from-rose-300 via-pink-400 to-purple-300" },
];

export const PhotoGallery = ({ onSurprise }: { onSurprise: () => void }) => {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {MEMORIES.map((m, i) => (
        <button
          key={i}
          onClick={() => {
            setFlipped(flipped === i ? null : i);
            onSurprise();
          }}
          className="group relative aspect-square rounded-3xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 hover:rotate-2"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${m.gradient}`} />
          <div className="absolute inset-3 rounded-2xl border-4 border-white/60 backdrop-blur-sm bg-white/10 flex flex-col items-center justify-center p-4">
            <div className="text-6xl mb-3 group-hover:scale-125 transition-transform duration-500">
              {flipped === i ? "❤️" : m.emoji}
            </div>
            <Camera className="w-5 h-5 text-white/80 mb-2" />
            <p className="font-script text-white text-xl text-center drop-shadow-md">
              {m.caption}
            </p>
            <p className="text-xs text-white/80 mt-2">click me</p>
          </div>
          <Heart className="absolute top-3 right-3 w-5 h-5 text-white/80 fill-white/40 group-hover:animate-heartbeat" />
        </button>
      ))}
    </div>
  );
};
