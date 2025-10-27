import Card from "@/app/components/Card";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import bookImage from "@/app/assets/images/book-cover.png";

export const BookCard = () => {
  return (
    <Card className="h-auto md:h-full md:col-span-2">
      <div className="flex flex-col relative z-20 h-full">
        <div className="inline-flex items-center gap-2">
          <Sparkles className="w-9 h-9 text-emerald-300" />
          <h3 className="font-serif text-2xl md:text-3xl">My Reads</h3>
        </div>
        <p className="text-sm md:text-base text-white/70 mt-2">
          Explore my favorite books and authors that inspire me.
        </p>
        <div className="flex gap-4 mt-6 overflow-x-auto -mx-4 px-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Image
            src={bookImage}
            alt="Book Cover"
            className="w-32 md:w-40 h-auto flex-shrink-0"
          />
          <Image
            src={bookImage}
            alt="Book Cover"
            className="w-32 md:w-40 h-auto flex-shrink-0"
          />
          <Image
            src={bookImage}
            alt="Book Cover"
            className="w-32 md:w-40 h-auto flex-shrink-0"
          />
        </div>
      </div>
    </Card>
  );
};
