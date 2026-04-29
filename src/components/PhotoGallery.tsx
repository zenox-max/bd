import { Heart, Camera, Play } from "lucide-react";
import { useState } from "react";

interface MemoryItem {
  caption: string;
  emoji: string;
  gradient: string;
  type: "photo" | "video";
}

const MEMORIES: MemoryItem[] = [
  { caption: "The day I met you", emoji: "💕", gradient: "from-pink-300 via-rose-300 to-orange-200", type: "photo" },
  { caption: "Our first adventure", emoji: "🌅", gradient: "from-purple-300 via-pink-300 to-yellow-200", type: "video" },
  { caption: "Lazy mornings", emoji: "☕", gradient: "from-amber-200 via-rose-200 to-pink-300", type: "photo" },
  { caption: "Dancing in the kitchen", emoji: "💃", gradient: "from-fuchsia-300 via-pink-300 to-rose-300", type: "video" },
  { caption: "Late night talks", emoji: "🌙", gradient: "from-indigo-300 via-purple-300 to-pink-300", type: "photo" },
  { caption: "That silly trip", emoji: "🚗", gradient: "from-sky-300 via-cyan-300 to-teal-200", type: "video" },
  { caption: "Birthdays past", emoji: "🎂", gradient: "from-rose-300 via-pink-400 to-purple-300", type: "photo" },
  { caption: "Forever begins now", emoji: "💍", gradient: "from-amber-300 via-rose-300 to-fuchsia-300", type: "video" },
];

export const PhotoGallery = ({ onSurprise }: { onSurprise: () => void }) => {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {MEMORIES.map((m, i) => (
        <button
          key={i}
          onClick={() => {
            setFlipped(flipped === i ? null : i);
            onSurprise();
          }}
          className="group relative aspect-square rounded-3xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 hover:rotate-2"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${m.gradient}`} />
          <div className="absolute inset-3 rounded-2xl border-4 border-white/60 backdrop-blur-sm bg-white/10 flex flex-col items-center justify-center p-4">
            <div className="text-6xl mb-3 group-hover:scale-125 transition-transform duration-500">
              {flipped === i ? "❤️" : m.emoji}
            </div>
            {m.type === "video" ? (
              <div className="flex items-center gap-1 px-3 py-1 bg-black/40 rounded-full mb-2">
                <Play className="w-3 h-3 text-white fill-white" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Video</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 px-3 py-1 bg-black/30 rounded-full mb-2">
                <Camera className="w-3 h-3 text-white" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Photo</span>
              </div>
            )}
            <p className="font-script text-white text-xl text-center drop-shadow-md">
              {m.caption}
            </p>
          </div>
          <Heart className="absolute top-3 right-3 w-5 h-5 text-white/90 fill-white/40 group-hover:animate-heartbeat" />
          {m.type === "video" && (
            <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 text-primary fill-primary ml-0.5" />
            </div>
          )}
        </button>
      ))}
    </div>
  );
};
