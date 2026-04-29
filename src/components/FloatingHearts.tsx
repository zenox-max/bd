import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface FloatingItem {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  drift: number;
  type: "heart" | "balloon" | "sparkle";
  color: string;
}

const COLORS = ["text-primary", "text-secondary", "text-accent", "text-rose-400", "text-pink-400", "text-purple-400"];
const BALLOON_COLORS = ["#ff6b9d", "#c89bff", "#ffd56b", "#ff9eb8", "#a78bfa", "#fb923c"];

export const FloatingHearts = () => {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    const generate = () => {
      const newItems: FloatingItem[] = Array.from({ length: 25 }, (_, i) => ({
        id: Date.now() + i,
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 12 + Math.random() * 10,
        size: 16 + Math.random() * 24,
        drift: (Math.random() - 0.5) * 200,
        type: Math.random() > 0.6 ? "balloon" : "heart",
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
      setItems(newItems);
    };
    generate();
    const interval = setInterval(generate, 22000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="absolute animate-float-up"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            ["--drift" as string]: `${item.drift}px`,
          }}
        >
          {item.type === "heart" ? (
            <Heart
              className={`${item.color} fill-current drop-shadow-lg`}
              style={{ width: item.size, height: item.size }}
            />
          ) : (
            <Balloon size={item.size * 2.5} color={BALLOON_COLORS[idx % BALLOON_COLORS.length]} />
          )}
        </div>
      ))}
    </div>
  );
};

const Balloon = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size * 1.3} viewBox="0 0 60 80" className="drop-shadow-md">
    <ellipse cx="30" cy="30" rx="22" ry="28" fill={color} opacity="0.9" />
    <ellipse cx="22" cy="22" rx="6" ry="8" fill="white" opacity="0.4" />
    <polygon points="28,57 32,57 30,62" fill={color} />
    <path d="M30 62 Q 28 70, 32 75 Q 28 78, 30 80" stroke={color} strokeWidth="1" fill="none" opacity="0.6" />
  </svg>
);
