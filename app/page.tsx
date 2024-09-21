import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import HeroBottom from "@/components/HeroBottom";
import Participate from "@/components/Participate";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#003145] w-full">
      <div className="flex flex-col md:flex-row justify-between container items-center m-auto">
        <Hero/>
        <div className="md:w-[30vw] md:h-[30vw] h-96 w-96 relative ">
          <Image
          className="object-contain"
            src={'./icons/PicsArt_04-14-04.42 1.svg'}
            fill
            alt="jet"
          />
        </div>
      </div>
      <HeroBottom/>
      <Participate/>
      <Explore/>
    </div>
  );
}
