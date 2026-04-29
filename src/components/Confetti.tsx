import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  shape: "square" | "circle" | "rect";
}

const COLORS = ["#ff6b9d", "#c89bff", "#ffd56b", "#ff9eb8", "#a78bfa", "#fb923c", "#f472b6", "#facc15"];

export const Confetti = ({ trigger, count = 80 }: { trigger: number; count?: number }) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (trigger === 0) return;
    const newPieces: ConfettiPiece[] = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2.5 + Math.random() * 2.5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 6 + Math.random() * 10,
      shape: ["square", "circle", "rect"][Math.floor(Math.random() * 3)] as ConfettiPiece["shape"],
    }));
    setPieces(newPieces);
    const t = setTimeout(() => setPieces([]), 6000);
    return () => clearTimeout(t);
  }, [trigger, count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute animate-confetti"
          style={{
            left: `${p.left}%`,
            top: 0,
            width: p.shape === "rect" ? p.size * 0.5 : p.size,
            height: p.shape === "rect" ? p.size * 1.5 : p.size,
            backgroundColor: p.color,
            borderRadius: p.shape === "circle" ? "50%" : "2px",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
};
