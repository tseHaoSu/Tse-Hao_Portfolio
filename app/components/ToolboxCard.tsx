import Card from "@/app/components/Card";
import { Star } from "lucide-react";
import { toolBoxItems } from "@/app/lib/data";

export const ToolboxCard = () => {
  return (
    <Card className="h-auto md:h-full md:col-span-3">
      <div className="flex flex-col relative z-20 h-full">
        <div className="inline-flex items-center gap-2">
          <Star className="w-9 h-9 text-emerald-300" />
          <h3 className="font-serif text-2xl md:text-3xl">My Toolbox</h3>
        </div>
        <p className="text-sm md:text-base text-white/70 mt-2">
          Explore the tools and technologies I use to build amazing
          applications.
        </p>
        <div className="flex flex-wrap gap-2 md:gap-2 lg:gap-2 mt-6">
          {toolBoxItems.map((item) => (
            <div
              key={item.title}
              className="inline-flex items-center gap-1 md:gap-1.5 lg:gap-1.5 py-1 md:py-1.5 lg:py-1.5 px-1.5 md:px-2 lg:px-2 outline outline-2 outline-white/10 rounded-lg text-[10px] md:text-xs lg:text-sm"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5"
                fill={item.customColor ? "#FFFFFF" : `#${item.icon.hex}`}
              >
                <path d={item.icon.path} />
              </svg>
              <span className="font-semibold">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
