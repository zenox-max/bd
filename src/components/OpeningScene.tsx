import { useEffect, useState } from "react";
import { Heart, Sparkles } from "lucide-react";

const REVEAL_TEXT = "Happy Birthday My Love, My Longest Childhood Friend and My Best Friend 🤧😝";

type Phase = "darkness" | "heartbeat" | "building" | "burst" | "reveal" | "done";

export const OpeningScene = ({ onEnter }: { onEnter: () => void }) => {
  const [phase, setPhase] = useState<Phase>("darkness");
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const timeline: { phase: Phase; at: number }[] = [
      { phase: "heartbeat", at: 800 },
      { phase: "building", at: 3500 },
      { phase: "burst", at: 8500 },
      { phase: "reveal", at: 9400 },
      { phase: "done", at: 12500 },
    ];
    const timers = timeline.map(({ phase, at }) => setTimeout(() => setPhase(phase), at));
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (phase !== "building") return;
    const id = setInterval(() => setDots((d) => (d + 1) % 4), 500);
    return () => clearInterval(id);
  }, [phase]);

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Dark dramatic backdrop */}
      <div
        className={`absolute inset-0 transition-all duration-[2000ms] ${
          phase === "darkness" || phase === "heartbeat"
            ? "bg-black"
            : phase === "building"
            ? "bg-gradient-to-b from-rose-950 via-purple-950 to-black"
            : "bg-romance animate-shimmer"
        }`}
      />

      {/* Phase 1: pure darkness, single heartbeat */}
      {phase === "heartbeat" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Heart
            className="w-32 h-32 text-rose-500 fill-rose-500 animate-heartbeat drop-shadow-[0_0_40px_rgba(244,63,94,0.8)]"
          />
        </div>
      )}

      {/* Phase 2: building suspense — soft text, drifting sparkles */}
      {phase === "building" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 40 }).map((_, i) => (
              <Sparkles
                key={i}
                className="absolute text-white/30 animate-float-soft"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: 10 + Math.random() * 18,
                  height: 10 + Math.random() * 18,
                  animationDelay: `${Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 space-y-8 max-w-2xl">
            <p className="font-script text-3xl md:text-5xl text-white/80 animate-zoom-fade">
              Something special is coming
            </p>
            <div className="flex justify-center gap-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-rose-400 rounded-full animate-dot-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <p className="font-serif text-2xl md:text-4xl text-white/90 animate-zoom-fade" style={{ animationDelay: "1.5s" }}>
              For someone <span className="italic text-rose-300">very</span> important{".".repeat(dots)}
            </p>
            <div className="flex justify-center pt-4">
              <Heart className="w-16 h-16 text-rose-400 fill-rose-400 animate-heartbeat drop-shadow-[0_0_30px_rgba(244,63,94,0.8)]" />
            </div>
          </div>
        </div>
      )}

      {/* Phase 3: white burst */}
      {phase === "burst" && (
        <div className="absolute inset-0 bg-white animate-zoom-fade" />
      )}

      {/* Phase 4: dramatic reveal */}
      {(phase === "reveal" || phase === "done") && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          {/* Radiating rays */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-[200vmax] h-[200vmax] animate-rays-spin"
              style={{
                background:
                  "repeating-conic-gradient(from 0deg, rgba(255,255,255,0.15) 0deg 10deg, transparent 10deg 20deg)",
              }}
            />
          </div>

          <div className="relative z-10 max-w-5xl">
            <p
              className="font-script text-3xl md:text-5xl text-white/95 mb-6 animate-letter-rise"
              style={{ animationDelay: "0.1s" }}
            >
              ✨ The moment is here ✨
            </p>

            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)] leading-tight px-4">
              {REVEAL_TEXT.split(" ").map((word, i) => (
                <span
                  key={i}
                  className="inline-block animate-letter-rise mx-2"
                  style={{ animationDelay: `${0.4 + i * 0.12}s` }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {phase === "done" && (
              <button
                onClick={onEnter}
                className="mt-12 px-12 py-5 bg-white text-primary rounded-full font-extrabold text-xl shadow-glow animate-pop-in hover:scale-110 transition-transform"
              >
                Open Your Surprise 🎁✨
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
