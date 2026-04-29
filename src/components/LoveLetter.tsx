import { Heart } from "lucide-react";
import { useState } from "react";

const REASONS = [
  "Your laugh is my favorite sound in the world.",
  "You make ordinary days feel like magic.",
  "The way your eyes light up when you're excited.",
  "You're my home, no matter where we are.",
  "Loving you is the easiest thing I've ever done.",
];

export const LoveLetter = ({ onSurprise }: { onSurprise: () => void }) => {
  const [reason, setReason] = useState(0);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative bg-gradient-to-br from-cream to-blush/40 rounded-3xl p-8 md:p-12 shadow-soft border border-primary/10">
        <Heart className="absolute -top-6 -left-6 w-12 h-12 text-primary fill-primary animate-heartbeat" />
        <Heart className="absolute -bottom-6 -right-6 w-10 h-10 text-secondary fill-secondary animate-heartbeat" style={{ animationDelay: "0.5s" }} />

        <p className="font-script text-3xl md:text-4xl text-primary mb-6">My dearest Claudia,</p>

        <div className="space-y-4 text-foreground/90 text-lg leading-relaxed font-light">
          <p>
            On your birthday, I want you to know that <em className="text-primary font-medium">you are the
            best thing that has ever happened to me.</em> Every day with you feels like a soft sunrise —
            warm, bright, and full of promise.
          </p>
          <p>
            You bring color into the world that I never knew existed. Your kindness, your strength,
            your wild and beautiful heart — they make me a better person just by being near them.
          </p>
          <p>
            Today I celebrate you. The way you dream, the way you love, the way you make me laugh
            until my cheeks hurt. I'd choose you in every lifetime.
          </p>
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-white/60 border border-primary/20">
          <p className="text-sm uppercase tracking-widest text-primary/70 mb-3">A reason I love you</p>
          <p className="font-script text-2xl md:text-3xl text-foreground min-h-[3rem]">
            {REASONS[reason]}
          </p>
          <button
            onClick={() => {
              setReason((r) => (r + 1) % REASONS.length);
              onSurprise();
            }}
            className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:scale-105 transition-transform shadow-md"
          >
            Another reason 💗
          </button>
        </div>

        <p className="font-script text-2xl text-primary mt-8 text-right">
          Forever yours, <br />
          <span className="text-3xl">with all my heart</span>
        </p>
      </div>
    </div>
  );
};
