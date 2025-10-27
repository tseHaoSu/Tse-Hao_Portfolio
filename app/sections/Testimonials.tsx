import memojiAvatar1 from "@/app/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/app/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/app/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/app/assets/images/memoji-avatar-4.png";
import Image from "next/image";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
];

const Testimonials = () => {
  return (
    <div className="container py-16 md:py-20 lg:py-28">
      <SectionHeader
        title="What Clients Say"
        eyebrow="Testimonials"
        description="Hear from some of the clients I've had the pleasure of working with."
      />
      <div className="flex flex-col gap-8 md:gap-12 lg:grid lg:grid-cols-2 lg:gap-8 mt-10 md:mt-16 lg:mt-20 overflow-x-clip">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <div className="flex flex-col gap-4 relative z-20">
              <div className="flex gap-4 items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="bg-gray-700 rounded-full w-14 h-14 md:w-16 md:h-16 flex-shrink-0"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-base md:text-lg">
                    {testimonial.name}
                  </h3>
                  <h4 className="text-sm md:text-base text-white/30">
                    {testimonial.position}
                  </h4>
                </div>
              </div>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
