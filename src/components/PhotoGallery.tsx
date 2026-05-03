import { Heart, Play } from "lucide-react";
import { useRef, useState } from "react";

interface MemoryItem {
  caption: string;
  src: string;
}

const MEMORIES: MemoryItem[] = [
  { caption: "My favorite smile 💕", src: "/videos/cla.mp4" },
  { caption: "Pure sunshine ☀️", src: "/videos/cl.mp4" },
  { caption: "That laugh I love 😍", src: "/videos/cla-2.mp4" },
  { caption: "My whole heart 💖", src: "/videos/clauv.mp4" },
  { caption: "Forever you 🌹", src: "/videos/clauvid.mp4" },
  { caption: "Silly little moment 😝", src: "/videos/snap1.mp4" },
  { caption: "Snap of my love 📸", src: "/videos/snap2.mp4" },
  { caption: "Just being you ✨", src: "/videos/vid.mp4" },
  { caption: "My best friend 🤧", src: "/videos/video.mp4" },
];

export const PhotoGallery = ({ onSurprise }: { onSurprise: () => void }) => {
  const [playing, setPlaying] = useState<number | null>(null);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  const toggle = (i: number) => {
    const v = refs.current[i];
    if (!v) return;
    if (playing === i) {
      v.pause();
      setPlaying(null);
    } else {
      refs.current.forEach((other, idx) => {
        if (other && idx !== i) other.pause();
      });
      v.play().catch(() => {});
      setPlaying(i);
      onSurprise();
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {MEMORIES.map((m, i) => (
        <button
          key={i}
          onClick={() => toggle(i)}
          className="group relative aspect-[9/16] rounded-3xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-black"
        >
          <video
            ref={(el) => (refs.current[i] = el)}
            src={m.src}
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            loop
            muted={false}
            preload="metadata"
            onEnded={() => setPlaying(null)}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity ${playing === i ? "opacity-40" : "opacity-100"}`} />
          {playing !== i && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10 text-primary fill-primary ml-1" />
              </div>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
            <p className="font-script text-white text-2xl text-center drop-shadow-lg font-bold">
              {m.caption}
            </p>
          </div>
          <Heart className="absolute top-3 right-3 w-6 h-6 text-white fill-primary/80 group-hover:animate-heartbeat drop-shadow-lg" />
        </button>
      ))}
    </div>
  );
};
