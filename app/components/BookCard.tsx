import Card from "@/app/components/Card";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import bookImage from "@/app/assets/images/book-cover.png";

export const BookCard = () => {
  return (
    <Card className="h-auto md:h-full md:col-span-2 overflow-hidden relative">
      <div className="flex flex-col relative z-20 h-full pb-20 lg:pb-40">
        <div className="inline-flex items-center gap-2">
          <Sparkles className="w-9 h-9 text-emerald-300" />
          <h3 className="font-serif text-2xl md:text-3xl">My Reads</h3>
        </div>
        <p className="text-sm md:text-base text-white/70 mt-2">
          Recent books and authors that inspire me.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center translate-y-[30%]">
        <Image
          src={bookImage}
          alt="Book Cover"
          className="w-32 md:w-40 h-auto"
        />
      </div>
    </Card>
  );
};
