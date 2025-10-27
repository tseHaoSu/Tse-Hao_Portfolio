import Card from "@/app/components/Card";
import Image from "next/image";
import map from "@/app/assets/images/melbourne.png";
import smileMemoji from "@/app/assets/images/memoji-smile.png";

export const MapCard = () => {
  return (
    <Card className="!p-0 relative h-auto md:h-full md:col-span-2">
      <Image src={map} alt="Map" className="h-full w-full object-cover" />
      <Image
        src={smileMemoji}
        alt="Smiling Memoji"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-900/50"
      />
    </Card>
  );
};
