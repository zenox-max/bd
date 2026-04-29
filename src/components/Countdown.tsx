import { useEffect, useState } from "react";
import { Calendar, Clock } from "lucide-react";

function nextMay10() {
  const now = new Date();
  const year = now.getFullYear();
  let target = new Date(year, 4, 10, 0, 0, 0); // May = month index 4
  if (target.getTime() < now.getTime()) {
    target = new Date(year + 1, 4, 10, 0, 0, 0);
  }
  return target;
}

export const Countdown = () => {
  const [target] = useState(nextMay10());
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target.getTime() - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  const isToday = days === 0 && diff < 86400000 && new Date().getMonth() === 4 && new Date().getDate() === 10;

  const blocks = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-4 text-primary">
        <Calendar className="w-5 h-5" />
        <span className="font-bold uppercase tracking-widest text-sm">May 10</span>
        <Clock className="w-5 h-5 ml-2" />
      </div>
      <h3 className="text-center text-3xl md:text-4xl font-serif text-gradient mb-8">
        {isToday ? "🎉 It's TODAY, my love! 🎉" : "Counting down to your big day"}
      </h3>
      <div className="grid grid-cols-4 gap-4 md:gap-6">
        {blocks.map((b) => (
          <div
            key={b.label}
            className="relative bg-white/80 backdrop-blur rounded-2xl p-4 md:p-6 shadow-card border-2 border-primary/20 text-center"
          >
            <div className="text-4xl md:text-6xl font-serif font-extrabold text-gradient tabular-nums">
              {String(b.value).padStart(2, "0")}
            </div>
            <div className="text-xs md:text-sm uppercase tracking-widest text-primary/70 mt-2 font-bold">
              {b.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
