import { StarIcon } from "lucide-react";

const words = [
  "Performant",
  "Accessible",
  "Scalable",
  "Modular",
  "Reusable",
  "Testable",
  "Maintainable",
  "Robust",
  "Secure",
  "Optimized",
];

const Tape = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip py-3 -rotate-3 -mx-1">
        <div className="flex gap-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] animate-tape">
          {words.map((word) => (
            <div key={word} className="inline-flex gap-4 items-center">
              <span className="uppercase text-gray-900 font-extrabold text-sm items-center">
                {word}
              </span>
              <StarIcon className="w-5 h-5 text-gray-900 -rotate-12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tape;
