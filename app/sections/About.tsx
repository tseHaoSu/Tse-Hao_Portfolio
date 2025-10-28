import SectionHeader from "@/app/components/SectionHeader";
import { BookCard } from "@/app/components/BookCard";
import { ToolboxCard } from "@/app/components/ToolboxCard";
import { HobbiesCard } from "@/app/components/HobbiesCard";
import { MapCard } from "@/app/components/MapCard";

const About = () => {
  return (
    <div id="about" className="container py-16">
      <SectionHeader
        eyebrow="about me"
        title="A bit about myself"
        description="I'm Tse-Hao Su, a passionate frontend developer dedicated to crafting exceptional digital experiences."
      />
      <div className="flex flex-col md:grid md:grid-cols-5 md:grid-rows-[auto_auto] gap-8 mt-10 md:mt-16 lg:mt-20">
        <BookCard />
        <ToolboxCard />
        <HobbiesCard />
        <MapCard />
      </div>
    </div>
  );
};

export default About;
