import Card from "@/app/components/Card";
import { Sparkles } from "lucide-react";
import { hobbies } from "@/app/lib/data";

export const HobbiesCard = () => {
  return (
    <Card className="h-auto md:h-full md:col-span-3">
      <div className="flex flex-col relative z-20 h-full">
        <div className="inline-flex items-center gap-2">
          <Sparkles className="w-9 h-9 text-emerald-300" />
          <h3 className="font-serif text-2xl md:text-3xl">
            Beyond the Code
          </h3>
        </div>
        <p className="text-sm md:text-base text-white/70 mt-2">
          My interests and hobbies outside of programming.
        </p>
      </div>
      <div className="relative h-64 md:h-80 mt-6">
        {hobbies.map((hobby) => (
          <div
            key={hobby.title}
            className="inline-flex items-center gap-1.5 md:gap-2 py-1.5 md:py-2 px-2 md:px-3 bg-gradient-to-r from-emerald-500 to-sky-400 rounded-full text-xs md:text-sm lg:text-base absolute"
            style={{
              left: hobby.left,
              top: hobby.top,
            }}
          >
            <span className="text-2xl md:text-3xl">{hobby.emoji}</span>
            <span className="font-semibold">{hobby.title}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};
