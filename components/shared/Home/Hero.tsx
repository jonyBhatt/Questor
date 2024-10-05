// import MaxWithWrapper from "@/components/MaxWidthWrapper";
import HeroImage from "@/assets/hero.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import User1 from "@/assets/user1.jpg";
import User2 from "@/assets/user2.jpg";
import User3 from "@/assets/user3.jpg";
import User4 from "@/assets/user4.jpg";
import User5 from "@/assets/user5.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export const Hero = () => {
  const instructors = [
    { id: 1, name: "Alice", imageUrl: User1.src },
    { id: 2, name: "Bob", imageUrl: User2.src },
    { id: 3, name: "Charlie", imageUrl: User3.src },
    { id: 4, name: "David", imageUrl: User4.src },
    { id: 5, name: "Eve", imageUrl: User5.src },
    // ... more instructors
  ];
  return (
    <div className="flex flex-col  items-start gap-4 md:flex-row md:items-center justify-between ">
      <div className="py-32 sm:px-28 px-4 ">
        <div className="  flex flex-col gap-4 text-center sm:text-left items-center md:items-start">
          <span className="font-gm">
            Welcome to{" "}
            <strong className="text-primary font-gs font-extrabold">
              Questor
            </strong>
          </span>
          <h3 className="font-gs text-3xl md:text-4xl font-extrabold text-center sm:text-left">
            Professional and <br className="block md:hidden" /> Lifelong
            <br className="hidden md:block" /> Learners{" "}
            <br className="block md:hidden" />
            Comes Here
          </h3>
          <p className="font-gm normal-case">
            Unlock your coding potential with expert guidance,
            <br /> your path to Coding Mastery.
          </p>
          <Button
            className="flex items-center gap-4 text-white rounded-full"
            size="lg"
          >
            <span className="font-gm font-bold text-lg">Get Started</span>
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={HeroImage}
          alt="Hero"
          className="object-cover h-full max-w-lg sm:max-w-3xl  md:max-w-2xl w-full md:hidden lg:block"
        />
        <div className="absolute p-6 rounded bg-gray-50 shadow-2xl bottom-96 max-w-xs w-full -left-28  flex-col items-center gap-8 hidden lg:flex">
          <h2 className="font-gm text-2xl text-primary dark:text-secondary">
            200+ <span className="font-gs">Instructor</span>
          </h2>
          <div className="flex -space-x-4">
            {instructors.slice(0, 4).map((instructor) => (
              <Avatar
                key={instructor.id}
                className="w-12 h-12 border-2 border-white"
              >
                <AvatarImage
                  src={instructor.imageUrl}
                  alt={instructor.name}
                  className="object-cover"
                />
                <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
              </Avatar>
            ))}
            {instructors.length > 4 && (
              <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white text-xl font-bold border-2 border-white z-10">
                +
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
