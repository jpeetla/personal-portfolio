import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";

export const HeroSection = () => {
  return (
    <section id="hero">
      <div className="py-48 relative z-0">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
          <div
            className="absolute inset-0 -z-30 opacity-10"
            style={{
              backgroundImage: `url(${grainImage})`,
            }}
          ></div>

          <div className="hero-ring size-[620px]"></div>
          <div className="hero-ring size-[820px]"></div>
          <div className="hero-ring size-[1020px]"></div>
          <div className="hero-ring size-[1220px]"></div>
        </div>
        <div className="container">
          <div className="flex flex-col items-center">
            <Image
              src={memojiImage}
              className="size-[100px]"
              alt="Profile Memoji"
            />

            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
              <div className="bg-green-500 size-2.5 rounded-full"></div>
              <div className="text-sm font-medium">Available for new work!</div>
            </div>
          </div>

          <h1 className="font-serif text-5xl text-center mt-8 tracking-wide">
            Jayanth Peetla
          </h1>
          <p className="mt-4 text-center text-white/60">
            Driven full stack developer with a passion for tackling challenging
            problems
          </p>

          <div className="flex flex-col items-center mt-8 gap-4">
            <a
              href="#about"
              className="inline-flex gap-2 items-center border border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-30"
            >
              <span>👋🏻</span>
              <span className="font-semibold">About me!</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-30"
            >
              <span className="font-semibold">Explore my work</span>
              <ArrowDown className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
