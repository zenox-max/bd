import { useEffect, useState } from "react";

interface Burst {
  id: number;
  x: number;
  y: number;
  emoji: string;
}

const EMOJIS = ["💖", "✨", "💕", "🌟", "💗", "🎉", "🦋", "💫"];

export const ClickBurst = () => {
  const [bursts, setBursts] = useState<Burst[]>([]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Only trigger on plain page clicks (not buttons/inputs)
      if (target.closest("button, a, input, textarea")) return;
      const newBursts: Burst[] = Array.from({ length: 5 }, (_, i) => ({
        id: Date.now() + i,
        x: e.clientX + (Math.random() - 0.5) * 60,
        y: e.clientY + (Math.random() - 0.5) * 60,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      }));
      setBursts((b) => [...b, ...newBursts]);
      setTimeout(() => {
        setBursts((b) => b.filter((x) => !newBursts.find((n) => n.id === x.id)));
      }, 800);
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      {bursts.map((b) => (
        <span
          key={b.id}
          className="absolute text-2xl animate-burst"
          style={{ left: b.x, top: b.y, transform: "translate(-50%, -50%)" }}
        >
          {b.emoji}
        </span>
      ))}
    </div>
  );
};
